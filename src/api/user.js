import request from '@/utils/request.js'

//注册
export const reg = data => {
    return request({
        method: 'post',
        url: '/api/reg',
        data
    })
}
//登录
export const login = data => {
    return request({
        method: 'post',
        url: '/api/login',
        data
    })
}