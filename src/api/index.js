import { request } from "./request"


// 用户篇
export const users = data => request('/api/users', 'get', data) // 查询

export const login = data => request('/user/login-by-idcard', 'post', data) //  用户登录
export const evaluationsubmit = data => request('/evaluation/submit', 'post', data) //  测评提交
