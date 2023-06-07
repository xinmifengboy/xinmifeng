/*
 * @Author: shuaiqiboy 16139991@qq.com
 * @Date: 2023-06-07 14:57:52
 * @LastEditors: shuaiqiboy 16139991@qq.com
 * @LastEditTime: 2023-06-07 15:28:29
 * @FilePath: /xinmifeng/vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  }
})
