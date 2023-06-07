/*
 * @Author: shuaiqiboy 16139991@qq.com
 * @Date: 2023-06-07 14:57:52
 * @LastEditors: shuaiqiboy 16139991@qq.com
 * @LastEditTime: 2023-06-07 15:20:46
 * @FilePath: /xinmifeng/src/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import './assets/iconfont/iconfont.css'

const app = createApp(App)
app.use(router)
app.mount('#app')