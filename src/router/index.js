import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/index.vue'
import Lines from '@/pages/lines/index.vue'
const routes = [
    { path: '/', component: Home },
    { path: '/lines', component: Lines },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() { //  路由切换将页面置顶
        return { x: 0, y: 0 }
    }
})
export default router