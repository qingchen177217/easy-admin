import {TOKEN_TIME,TOKEN_TIME_VALUE}from './const'


// 判断是否登录过期，在请求拦截器中使用

// 登陆时间设置
export const setTokenTime=()=>{
    localStorage.setItem(TOKEN_TIME,Date.now().toString())
}


//获取登陆时间
export const getTokenTime=()=>{
    return localStorage.getItem(TOKEN_TIME)
}

//是否已经过期
export const diffTokenTime =()=>{
    const currenTime=Date.now()
    const tokenTime=getTokenTime() as any
    return (currenTime - tokenTime) >TOKEN_TIME_VALUE
}