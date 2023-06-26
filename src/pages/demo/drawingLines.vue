<!--
 * @Author: shuaiqiboy 16139991@qq.com
 * @Date: 2023-06-08 10:46:34
 * @LastEditors: shuaiqiboy 16139991@qq.com
 * @LastEditTime: 2023-06-25 15:08:16
 * @FilePath: /xinmifeng/src/pages/demo/drawingLines.vue
 * @Description: 如有疑问请联系开发者 
 * 16139991
-->
<template>
  <div>

  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from "vue";
const { proxy }: any = getCurrentInstance();

const { scene,renderer, WebGLCompatibilityCheck  }  = proxy.$utils


// 设置渲染器尺寸
renderer.setSize(window.innerWidth, window.innerHeight, false)
// 挂载
document.body.appendChild(renderer.domElement)
// 设置相机位置
const camera =new proxy.$three.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set( 0, 0, 100 );
// 设置相机对象看向的位置
camera.lookAt( 0, 0, 0 );
// 创建一条材质为LineBasicMaterial蓝色的线
// 实线
const material = new proxy.$three.LineBasicMaterial( {
	color: 0xffffff,
	linewidth: 1,
	linecap: 'round', //定义线两端的样式。可选值为 'butt', 'round' 和 'square'。默认值为 'round'。
	linejoin:  'round' //定义线连接节点的样式。可选值为 'round', 'bevel' 和 'miter'。默认值为 'round'。
} );
// 虚线
// const material = new proxy.$three.LineDashedMaterial( {
// 	color: 0xffffff,
// 	linewidth: 1,
// 	scale: 1, // 线条中虚线部分的占比。默认值为 1。
// 	dashSize: 3, // 虚线的大小，是指破折号和间隙之和。默认值为 3
// 	gapSize: 1,  // 间隙的大小，默认值为 1。
// } );
// const material = new proxy.$three.LineBasicMaterial( { color: 0x0000ff } );
const arr = [
  [-10,-10,0],
  [-10,10,0],
  [10,10,0],
  [10,-10,0],
  [-10,-10,0],

  [-10,-10,20],
  [-10,10,20],
  [-10,10,0],
  [-10,10,20],
  [10,10,20],
  [10,10,0],
  [10,10,20],
  [10,-10,20],
  [10,-10,0],
  [10,-10,20],
  [-10,-10,20]
]
const points = []
arr.forEach(e => points.push(new proxy.$three.Vector3(...e)))

const geometry = new proxy.$three.BufferGeometry().setFromPoints( points );

const line = new proxy.$three.Line( geometry, material );
scene.add( line );


function animate() {
  requestAnimationFrame(animate);
  line.rotation.x += 0.01;
  line.rotation.y += 0.01;
  renderer.render(scene, camera);
}

// 检测当前用户所使用的环境是否支持WebGL，
WebGLCompatibilityCheck(animate())
</script>

<style scoped>

</style>