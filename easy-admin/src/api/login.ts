import request from './request'

export const login = (data: any) => {
    return request({
        url: "/login",
        method: "POST",
        data
    })
}