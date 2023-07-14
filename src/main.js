/*
 * @Author: shuaiqiboy 16139991@qq.com
 * @Date: 2023-06-07 14:57:52
 * @LastEditors: shuaiqiboy 16139991@qq.com
 * @LastEditTime: 2023-06-25 14:04:58
 * @FilePath: /xinmifeng/src/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import './assets/iconfont/iconfont.css'
import './global/css.scss'
import * as THREE from 'three'
import * as Utils from '@/assets/js/utils.ts'

const app = createApp(App)
app.config.globalProperties.$three = THREE
app.config.globalProperties.$utils = Utils
app.use(router)
app.mount('#app')
