import {defineStore}from 'pinia'
import {login as loginApi}from '../api/login'
import router from '../router/index'
import { setTokenTime}from '../utils/auth'
import screenfull from 'screenfull'

const store=defineStore('main',{
    state:()=>{return {
            token:localStorage.getItem('token')||'',
            sliderType:true//定义汉堡按钮的改变,
            ,lang:localStorage.getItem('lang')
    }},
    getters:{
        Goodtoken:(state)=>state.token, 
        langChange:(state)=>state.lang
    },
    actions:{
        changelang(lang:any){
            this.lang=lang
        },
        changeSiderType(){
            this.sliderType=!this.sliderType
        },
         setToken(state:any,token:any){
            state.token=token
            localStorage.setItem('token',token)
         } ,
         login(useInfo:any) {
            //对网络请求函数进行了封装，将token值进行保存
             return new Promise((resolve,reject)=>{
                loginApi(useInfo).then((res:any)=>{ 
                    this.setToken(this.$state,res.token)
                    //调用setToken方法，将取到的res.token进行修改，保存到state的token中


                    setTokenTime()//修改token的有效期时间，开始记录


                    router.replace('/')//当登录完成后，路由跳转到首页
                    resolve(res)
                }).catch(err=>{
                    reject(err)
                })
             })
         },
         logout(){
            this.setToken(this.$state,'')
            localStorage.clear() 
            router.replace('/loading')
            if(screenfull.isEnabled){//调用全屏接口，退出登录切换到登录页时退出全屏
                if(screenfull.isFullscreen){
                    screenfull.toggle()
                }
            }
         }
    }
})

export default store