<template>
  <div>
  </div>
</template>

<script setup>
import WebGL from '@/assets/js/WebGL.js'
const scene = new T3.Scene() //  创建场景

/**
 * @param 视野角度 FOV 视野角度就是无论在什么时候，你所能在显示器上看到的场景的范围，它的单位是角度(与弧度区分开)。
 * @param 长宽比（aspect ratio） 一个物体的宽除以它的高的值
 * @param 近截面（near）
 * @param 远截面（far）
 */
const camera = new T3.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); //  创建相机

const renderer = new T3.WebGLRenderer(); //  实例化渲染器
// 设置渲染器尺寸， 支持三个参数： 宽度， 高度，是否降低分辨率渲染
renderer.setSize( window.innerWidth, window.innerHeight );
// 将渲染器挂载到文本文档的body元素下
document.body.appendChild( renderer.domElement );

// 创建立方体  参数: 长，宽 高
const geometry = new T3.BoxGeometry( 1, 1, 1 );
// 设置立方体材质的属性  参数： 颜色
const material = new T3.MeshBasicMaterial( { color: 0x00ff00 } );
// 创建网格 参数: 立方体对象， 材质属性
const cube = new T3.Mesh( geometry, material );
//  场景中创建立方体坐标会初始化在 (0,0)
scene.add( cube );
// 将相机的z轴移动5个网格
camera.position.z = 3;

// 这段代码每帧都会执行（正常情况下是60次/秒）
function animate() {
	requestAnimationFrame( animate );
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
// 检测当前用户所使用的环境是否支持WebGL，
if (WebGL.isWebGLAvailable()) {
    // Initiate function or other initializations here
    animate();
} else {
  // 如果不支持，将会向用户提示一条信息。
    const warning = WebGL.getWebGLErrorMessage();
    document.getElementById('container').appendChild(warning);
}
</script>

<style lang="scss" scoped>

</style>