/*
 * @Author: shuaiqiboy 16139991@qq.com
 * @Date: 2023-06-07 15:13:38
 * @LastEditors: shuaiqiboy 16139991@qq.com
 * @LastEditTime: 2023-06-07 15:19:44
 * @FilePath: /xinmifeng/src/router/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/index.vue'
const routes = [
  { path: '/', component: Home },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() { //  路由切换将页面置顶
    return { x: 0, y: 0 }
  }
})
export default router