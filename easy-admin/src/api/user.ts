import request from './request'

export const  getUser=(params:any)=>{
    return request({
        url:"/users",
        params
    })
}

export const changeUserState=(uid:any,type:any)=>{
    return request({
        url:`users/${uid}/state/${type}`,
        method:"put"
    })
}

export const addUser=(data:any)=>{
     return request({
        url:"users",
        method:'post',
        data
     })
}
export const editUser=(data:any)=>{
    return request({
        url:`users/${data.id}`,
        method:"put",
        data
    })
}

export const deleteUser=(id:any)=>{
    return request({
        url:`users/${id}`,
        method:'delete'
    })
}







