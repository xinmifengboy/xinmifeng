import WebGL from './WebGL.js'
import * as three from 'three'
/**
 * @name WebGL兼容性检查
 * @param 方法调用 fn
 */
export const WebGLCompatibilityCheck = (fn:any) => {
  if (WebGL.isWebGLAvailable()) {
    fn;
  } else {
      const warning = WebGL.getWebGLErrorMessage();
      document.getElementById('app').appendChild(warning);
  }
}
/**
 * @name 场景
 */
export const scene: any = new three.Scene() //  创建场景
/**
 * @name 相机
 * @param 视野角度 FOV 视野角度就是无论在什么时候，你所能在显示器上看到的场景的范围，它的单位是角度(与弧度区分开)。
 * @param 长宽比（aspect ratio） 一个物体的宽除以它的高的值
 * @param 近截面（near）当物体某些部分比摄像机的远截面远或者比近截面近的时候，该这些部分将不会被渲染到场景中
 * @param 远截面（far）
 */
export const camera: any  = (FOV:number=75, ar:number=window.innerWidth / window.innerHeight, near:number=0.1, far:number=1000) => {
  const red = new three.PerspectiveCamera( FOV, ar, near, far )
  return red
}
/**
 * @name 渲染器
 */
export const renderer: any  = new three.WebGLRenderer()

export * as three from 'three'