import { request } from "./request"


// 用户篇
export const users = data => request('/api/users', 'get', data) // 查询
export const usersAdd = data => request('/api/users/add', 'post', data) //  添加
export const usersEdit = data => request('/api/users/edit', 'post', data) //  编辑
export const usersRemove = data => request('/api/users/remove', 'post', data) //  删除