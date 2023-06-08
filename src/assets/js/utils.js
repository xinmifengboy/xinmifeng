/*
 * @Author: shuaiqiboy 16139991@qq.com
 * @Date: 2023-06-08 10:23:56
 * @LastEditors: shuaiqiboy 16139991@qq.com
 * @LastEditTime: 2023-06-08 10:33:47
 * @FilePath: /xinmifeng/src/assets/js/utils.js
 * @Description: 如有疑问请联系开发者 
 * 16139991
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
export const WebGLCompatibilityCheck = (fn) => {
  if (WebGL.isWebGLAvailable()) {
    fn;
  } else {
      const warning = WebGL.getWebGLErrorMessage();
      document.getElementById('app').appendChild(warning);
  }
}