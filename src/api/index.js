import { request } from "./request"


export const users = data => request('/api/users', 'get', data) //  小程序或者客服的跳转检测
export const CustomerUrl = data => request('/api/qw/kf/getUrl', 'post', data) //  获取客服url