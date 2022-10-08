<template>
    <el-card class="main">
        <el-row :gutter="20" class="header">
            <el-col :span="10">
                <el-input :placeholder="$t('table.placeholder')" clearable v-model="queryForm.query">
                </el-input>
            </el-col>
            <el-button type="primary" :icon="Search" @click="initGetUsersList">{{$t('table.search')}}</el-button>
            <el-button type="primary" @click="handleDialog()">{{$t('table.adduser')}}</el-button>
        </el-row>
        <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column :width="item.width" :prop=item.prop :label='$t(`table.${item.label}`)'
                v-for="(item,index) in options" :key="index">
                <template v-slot="{row}" v-if="item.prop==='mg_state'">
                    <el-switch v-model="row.mg_state" @change="changeState(row)" />
                </template>
                <template v-slot="{row}" v-if="item.prop==='create_time'">
                    {{filterTimes(row.create_time)}}
                </template>
                <template #default="{row}" v-if="item.prop==='action'">
                    <!-- //只有在action菜单栏才进行展示这些按钮 -->
                    <el-button type="primary" size="small" :icon="Edit" @click="handleDialog(row)"></el-button>
                    <el-button type="warning" size="small" :icon="Setting"></el-button>
                    <el-button type="danger" size="small" :icon="Delete" @click="removeuser(row)"></el-button>
                </template>
            </el-table-column>
        </el-table>


        <el-pagination v-model:currentPage="queryForm.pagenum" v-model:page-size="queryForm.pagesize"
            :page-sizes="[2,5,10,15]" layout="total, sizes, prev, pager, next, jumper" :total=total
            @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </el-card>
    <Dialog v-model=dialogVisible :dialogVisible="dialogVisible" :dialogTitle="dialogTitle" v-if="dialogVisible"
        @initUserList="initGetUsersList" :dialogTable="dialogTable" />
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { Search, Edit, Setting, Delete } from '@element-plus/icons-vue'
import { getUser, changeUserState,deleteUser } from '../../api/user'
import { ComponentInternalInstance, getCurrentInstance } from "vue";
import { ElMessage,ElMessageBox } from 'element-plus'
import { useI18n } from 'vue-i18n'
import Dialog from './components/dialog.vue'



const i18n = useI18n()

const { appContext } = getCurrentInstance() as ComponentInternalInstance
const filterTimes = appContext.config.globalProperties.$filters.filterTimes

const dialogTitle = ref()
const dialogVisible = ref(false)


type Form = {
    username?: string,
    password?: string,
    email?: string,
    mobile?: string
}
const dialogTable = ref<Form>({
    username: '',
    password: '',
    email: '',
    mobile: ''
})

const handleDialog = (row?: any) => {
    if (!row) {
        dialogTitle.value = '添加用户'
        dialogTable.value = {}
    } else {
        dialogTitle.value = '编辑用户'
        dialogTable.value = row
        console.log(row);
    }
    dialogVisible.value = true
}
const removeuser=(row:any)=>{
    ElMessageBox.confirm(
    '确定要删除用户吗？',
    '确认',
    {
      confirmButtonText: '确定',
      cancelButtonText: '返回',
      type: 'warning',
    }
  )
    .then(async () => {
        await deleteUser(row.id)
      ElMessage({
        type: 'success',
        message: 'Delete completed',
      })
      initGetUsersList()//删除成功后重新调用一下数据
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Delete canceled',
      })
    })
}

const total = ref(0)
const queryForm = ref({
    query: '',
    pagenum: 1,
    pagesize: 2
})

const options = [
    {
        label: 'username',
        prop: 'username'
    },
    {
        label: 'email',
        prop: 'email',
        width: 200
    },
    {
        label: 'mobile',
        prop: 'mobile'
    },
    {
        label: 'role_name',
        prop: 'role_name'
    },
    {
        label: 'mg_state',
        prop: 'mg_state'
    },
    {
        label: 'create_time',
        prop: 'create_time'
    },
    {
        label: 'action',
        prop: 'action',
        width: 250
    }
]

const tableData = ref([])

const initGetUsersList = async () => {
    const res = await getUser(queryForm.value) as any
    //搜索检测， 通过传输queryForm.value的值来确定请求回来的参数
    // 刚开始是 query没有值的，所以请求所有的参数，
    // 而input输入框绑定了 queryForm.query，当输入框中有内容时，就会改变queryForm的值
    // 这时我们再次请求，getUser(queryForm.value)的值就会根据输入框中query的值来进行请求
    // 达到了查询的目的
    tableData.value = res.users
    total.value = res.total
}
initGetUsersList()

const handleSizeChange = (pagesize: number) => {
    queryForm.value.pagenum = 1
    queryForm.value.pagesize = pagesize//将获取到的数据进行保存

    initGetUsersList()
}

const handleCurrentChange = (pagenum: number) => {
    queryForm.value.pagenum = pagenum
    initGetUsersList()
}

const changeState = async (info: any) => {
    await changeUserState(info.id, info.mg_state)
    ElMessage({
        message: i18n.t('message.updateSuccess'),
        grouping: true,
        type: 'success',
    })
}

</script>

<style lang='less' scoped>
.main {
    min-height: 86.5vh;

    .header {
        margin-bottom: 15px;
        box-sizing: border-box;
    }
}
:deep(.el-pagination){
    padding:10px;
    box-sizing: border-box;
    justify-content: right;
}
</style>