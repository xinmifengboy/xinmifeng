<!--
 * @Author: shuaiqiboy 16139991@qq.com
 * @Date: 2023-06-08 10:46:34
 * @LastEditors: shuaiqiboy 16139991@qq.com
 * @LastEditTime: 2023-06-08 14:51:59
 * @FilePath: /xinmifeng/src/pages/demo/drawingLines.vue
 * @Description: 如有疑问请联系开发者 
 * 16139991
-->
<template>
  <div>

  </div>
</template>

<script setup>
 // 创建渲染器
const renderer = new THREE.WebGLRenderer()
// 设置渲染器尺寸
renderer.setSize(window.innerWidth, window.innerHeight)
// 挂载
document.body.appendChild(renderer.domElement)
// 创建相机， 设置属性 视野角度， 长宽比， 近截面， 远截面
const camera = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, 1, 500)
// 设置相机位置
camera.position.set( 0, 0, 100 );
// 设置相机对象看向的位置
camera.lookAt( 0, 0, 0 );
// 创建场景
const scene = new THREE.Scene();
// 创建一条材质为LineBasicMaterial蓝色的线
// 实线
// const material = new THREE.LineBasicMaterial( {
// 	color: 0xffffff,
// 	linewidth: 1,
// 	linecap: 'round', //定义线两端的样式。可选值为 'butt', 'round' 和 'square'。默认值为 'round'。
// 	linejoin:  'round' //定义线连接节点的样式。可选值为 'round', 'bevel' 和 'miter'。默认值为 'round'。

// } );
// 虚线
// const material = new THREE.LineDashedMaterial( {
// 	color: 0xffffff,
// 	linewidth: 1,
// 	scale: 1, // 线条中虚线部分的占比。默认值为 1。
// 	dashSize: 3, // 虚线的大小，是指破折号和间隙之和。默认值为 3
// 	gapSize: 1,  // 间隙的大小，默认值为 1。
// } );
const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
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
arr.forEach(e => points.push(new THREE.Vector3(...e)))

const geometry = new THREE.BufferGeometry().setFromPoints( points );

const line = new THREE.Line( geometry, material );
scene.add( line );


function animate() {
  requestAnimationFrame(animate);
  line.rotation.x += 0.01;
  line.rotation.y += 0.01;
  renderer.render(scene, camera);
}

// 检测当前用户所使用的环境是否支持WebGL，
Utils.WebGLCompatibilityCheck(animate())
</script>

<style scoped>

</style>