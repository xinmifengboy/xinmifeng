import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() { //  路由切换将页面置顶
        return { x: 0, y: 0 }
    }
})
export default router