<template>
    <div class="loading-container">
        <el-form :model="form" class="login-form" :rules="rules" ref="formEl">
            <div class="title-container">
                <h3 class="title">
                    {{$t('msg.title')}}
                </h3>
            </div>
            <el-form-item prop="username">
                <el-input v-model="form.username" :prefix-icon="User" size="large" />
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="form.password" 
                :prefix-icon="Lock" 
                size="large" 
                :type="passwordType"
                 />
                 <span class="svg-icon">
                    <i 
                    class="iconfont icon-yincang"
                    @click="changeType"></i>
                 </span>
            </el-form-item>
            <el-button type="primary" @click="handleloading">登录</el-button>
        </el-form>
    </div>
</template>

<script setup lang='ts'>
import {User,Lock} from '@element-plus/icons-vue'
import store from '../../store/login'

const form = ref({
    username: "",
    password: ""
})

const rules = ({
    username: [
        { required: true, message: '请输入登录名称', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' }
    ]
})

const formEl = ref();
const handleloading = () => {
    
const usestore=store()//初始化

    if (!formEl) return
    formEl.value.validate(async (valid: any, fields: any) => {
        if (valid) {
            // 封装前，未保存token值
            // const res=await login(form.value)//这里一定要传入form.value的值才可以
            // console.log(res);
             
            // 封装后，将token值保存到pinia的token值中
            usestore.login(form.value)
        } else {
            console.log('error submit!', fields)
        }
    })
}

const passwordType=ref('password')

const changeType=(e:any)=>{
     if(passwordType.value==='password'){
        passwordType.value='text'
        e.target.classList.remove('icon-yincang')
        e.target.classList.add('icon-view')
     }else{
        passwordType.value='password'
        e.target.classList.remove('icon-view')
        e.target.classList.add('icon-yincang')
     }
}

</script>

<style lang='less' scoped>

.svg-icon{
    right:10px;
    width: 25px;
    position:absolute;
    height: 100%;
    padding-top:5px;
    box-sizing: border-box;
    text-align: center;
    color:#ccc;
    .iconfont{
     font-size:25px;
   }
}
.loading-container {
    height: 100vh;
    width: 100vw;
    background-color: rgb(49, 69, 92);

    .login-form {
        position: absolute;
        left: 35%;
        top: 40%;
        height: 30vh;
        width: 30vw;
        margin: auto;
        display: flex;
        flex-direction: column;

        .title-container {
            width: 100%;
            height: 70px;
            text-align: center;
            line-height: 70px;
            color: #fff;
            font-size: 25px;
        }
    }
}

:deep(.el-form-item) {
    position:relative;
    display: flex;
    justify-content: space-around;
    flex-direction: column;

    background: #2d3d53;
    height: 100%;
    width: 100%;

    .el-input {
        background: #2d3d53;
        border-radius: 5px;

        .el-input__wrapper {
            background: #2d3d53;
            box-shadow: 0 0 0 1px transparent inset;
            // box-shadow: 0 0 0 2px #2d3d53 outset;
        }

        .is-focus {
            box-shadow: 0 0 0 1px #fff inset;
        }
    }


}
</style>