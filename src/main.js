import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import './assets/iconfont/iconfont.css'
import * as THREE from 'three'
import * as Utils from '@/assets/js/utils.ts'

const app = createApp(App)
app.config.globalProperties.$three = THREE
app.config.globalProperties.$utils = Utils
app.use(router)
app.mount('#app')
