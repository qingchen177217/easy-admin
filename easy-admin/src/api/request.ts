import axios from 'axios'
import { ElMessage } from 'element-plus'//引入消息提示组件
import { diffTokenTime } from '../utils/auth'
import store from '../store/login'



const server=axios.create({
    baseURL:import.meta.env.VITE_BASE_URL,
    timeout:5000
})

server.interceptors.request.use(request=>{//请求拦截器
    const  usestore=store()

    if(localStorage.getItem('token')){
        if( diffTokenTime() ){//判断如果过期了，就直接跳转到登录页
            usestore.logout()
            return Promise.reject(new Error('token 失效了'))
        }    
    }
    //请求拦截器，请求时将自己的token进行携带
    request.headers!.Authorization=localStorage.getItem('token') as string
    return request
},error=>{
    return Promise.reject(new Error(error))
})
server.interceptors.response.use((response)=>{
    const {data,meta}=response.data
    if(meta.status===200||meta.status===201){//当请求成功时，将data数据解构出来进行返回
        return data
    }else{//当请求失败时，显示错误提示，返回错误
        ElMessage.error('密码错误')//导入element-plus的消息提示
        return Promise.reject(new Error(meta.msg))
    }
},error=>{//当没有响应时，设计的样式
  error.response && ElMessage.error(error.response.data)
  return Promise.reject(new Error(error))
})


export default server