/*
 * @Author: shuaiqiboy 16139991@qq.com
 * @Date: 2023-06-08 10:04:10
 * @LastEditors: shuaiqiboy 16139991@qq.com
 * @LastEditTime: 2023-06-08 14:56:41
 * @FilePath: /xinmifeng/src/router/index.js
 * @Description: 如有疑问请联系开发者 
 * 16139991
 */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/index.vue'
import Lines from '@/pages/lines/index.vue'
const routes = [
    { path: '/', component: Home },
    { path: '/lines', component: Lines },
    { path: '/demo/drawingLines', component: () => import('@/pages/demo/drawingLines.vue') },
    { path: '/demo/fireworks', component: () => import('@/pages/demo/fireworks.vue') },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() { //  路由切换将页面置顶
        return { x: 0, y: 0 }
    }
})
export default router