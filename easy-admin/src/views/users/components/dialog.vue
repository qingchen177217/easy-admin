<template>
    <el-dialog :model-value="dialogVisible" :title=dialogTitle width="40%" @close="handleClose">
        
        <el-form 
        ref="formRef" 
        :model="form" 
        label-width="70px"
        :rules="rules"
        >
            <el-form-item label="用户名" prop="username">
                <el-input v-model="form.username" />
            </el-form-item>
            <el-form-item label="密码" prop="password" v-if="dialogTitle==='添加用户'">
                <el-input v-model="form.password" />
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="form.email" />
            </el-form-item>
            <el-form-item label="手机号" prop="mobile">
                <el-input v-model="form.mobile" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="handleClose">取消</el-button>
                <el-button type="primary" @click="handleConfirm">确认</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script setup lang='ts'>
import { ref, defineEmits, defineProps,watch} from 'vue'
import {addUser,editUser} from '../../../api/user'
import {ElMessage} from 'element-plus'

const prop=defineProps({
    dialogVisible:Boolean,
    dialogTitle:{
        type:String,
        default:'',
        required:true
    },
    dialogTable:{
        type:Object,
        default:()=>{}
    }
})

const formRef=ref()

type Form={
    username?:string,
    password?:string,
    email?:string,
    mobile?:string
}
const form=ref<Form>(
    {
        username:'',
        password:'',
        email:'',
        mobile:''
    }
)
const rules=ref({
    username:[
        {
            required:true,
            message:'请输入用户名',
            trigger:'blur'
        }
    ],password:[
        {
            required:true,
            message:'请输入密码',
            trigger:'blur'
        }
    ],email:[
        {
            required:true,
            message:'请输入邮箱',
            trigger:'blur'
        },{
            type:"email",
            message:'输入正确邮箱',
            trigger:['blur','change']
        }
    ],mobile:[
        {
            required:true,
            message:'请输入手机号',
            trigger:'blur'
        }
    ],
    
})

watch(prop.dialogTable,()=>{
     form.value=prop.dialogTable
},{
    deep:true,
    immediate:true
})


const emit = defineEmits(['update:modelValue','initUserList'])
const handleClose = () => {
    emit('update:modelValue', false)
}
const handleConfirm = async() => {
    formRef.value.validate(async (valid:any)=>{
          if(valid){
            prop.dialogTitle === '添加用户' ? await addUser(form.value):await editUser(form.value)
            ElMessage({
                message:'更新成功',
                type:'success'
            })
            emit('initUserList')
            handleClose()
          }else{
             console.log('error submit');
             return false
          }
    })
}

</script>
<style lang='less' scoped>

</style>