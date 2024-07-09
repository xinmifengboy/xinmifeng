<template>
  <div>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from "vue";
const { proxy }: any = getCurrentInstance();

document.body.innerHTML = '' // 清空body内容
const scene = new proxy.$three.Scene() //  创建场景
const camera = new proxy.$three.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); //  创建相机
const renderer = new proxy.$three.WebGLRenderer(); //  实例化渲染器
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// 创建立方体  参数: 长，宽 高
const geometry = new proxy.$three.BoxGeometry( 1, 1, 1 );
// 设置立方体材质的属性  参数： 颜色
const material = new proxy.$three.MeshBasicMaterial( { color: 0x00ff00 } );
// 创建网格 参数: 立方体对象， 材质属性
const cube = new proxy.$three.Mesh( geometry, material );
//  场景中创建立方体坐标会初始化在 (0,0)
scene.add( cube );
// 将相机的z轴移动5个网格
camera.position.z = 3;

// 这段代码每帧都会执行（正常情况下是60次/秒）
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
// 检测当前用户所使用的环境是否支持WebGL，
proxy.$utils.WebGLCompatibilityCheck(animate())
</script>

<style lang="scss" scoped></style>