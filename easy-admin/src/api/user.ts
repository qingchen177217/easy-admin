import request from './request'

export const  getUser=(params:any)=>{
    return request({
        url:"/users",
        params
    })
}