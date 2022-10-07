<template>
    <el-card class="main">
        <el-row :gutter="20" class="header">
            <el-col :span="10">
                <el-input :placeholder="$t('table.placeholder')" clearable v-model="queryForm.query">
                </el-input>
            </el-col>
            <el-button type="primary" :icon="Search" @click="initGetUsersList">{{$t('table.search')}}</el-button>
            <el-button type="primary">{{$t('table.adduser')}}</el-button>
        </el-row>
        <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column 
            :width="item.width"
            :prop=item.prop 
            :label='$t(`table.${item.label}`)'
            v-for="(item,index) in options" 
            :key="index" >
            <template v-slot="{row}" v-if="item.prop==='mg_state'">
                      <el-switch v-model="row.mg_state" />
            </template>
            <template v-slot="{row}" v-if="item.prop==='create_time'">
                    {{filterTimes(row.create_time)}}
            </template>
            <template #default v-if="item.prop==='action'">
                <!-- //只有在action菜单栏才进行展示这些按钮 -->
                    <el-button type="primary" size="small" :icon="Edit"></el-button>
                    <el-button type="warning" size="small" :icon="Setting"></el-button>
                    <el-button type="danger" size="small" :icon="Delete"></el-button>
            </template>
        </el-table-column>     
        </el-table>



        <el-pagination
      v-model:currentPage="queryForm.pagenum"
      v-model:page-size="queryForm.pagesize"
      :page-sizes="[2,5,10,15]"
      layout="total, sizes, prev, pager, next, jumper"
      :total=total
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
    </el-card>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { Search ,Edit,Setting,Delete} from '@element-plus/icons-vue'
import { getUser } from '../../api/user'
import { ComponentInternalInstance, getCurrentInstance } from "vue";

const { appContext }= getCurrentInstance() as ComponentInternalInstance
const filterTimes=appContext.config.globalProperties.$filters.filterTimes

const total=ref(0)
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
        width:200
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
        label:'mg_state',
        prop:'mg_state'
    },
    {
        label: 'create_time',
        prop: 'create_time'
    },
    {
        label: 'action',
        prop: 'action',
        width:250
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
    total.value=res.total
    console.log(tableData.value);
}
initGetUsersList()

const handleSizeChange=(pagesize:number)=>{
    queryForm.value.pagenum=1
    queryForm.value.pagesize =pagesize//将获取到的数据进行保存

    initGetUsersList()
}

const handleCurrentChange=(pagenum:number)=>{
      queryForm.value.pagenum=pagenum
      initGetUsersList()
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
</style>