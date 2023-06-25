<!--
 * @Author: shuaiqiboy 16139991@qq.com
 * @Date: 2023-06-25 10:39:16
 * @LastEditors: shuaiqiboy 16139991@qq.com
 * @LastEditTime: 2023-06-25 10:39:43
 * @FilePath: /xinmifeng/src/pages/lines/index.vue
 * @Description: 如有疑问请联系开发者 
 * 16139991
-->
<template>
  <div></div>
</template>

<script setup>
document.body.innerHTML = '' // 清空body内容
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//create a blue LineBasicMaterial
const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
const points = [];
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));
points.push(new THREE.Vector3(0, -10, 0));
points.push(new THREE.Vector3(-10, 0, 0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(geometry, material);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

camera.position.z = 5;

const scene = new THREE.Scene();
scene.add(line);
renderer.render(scene, camera);

function animate() {
  requestAnimationFrame(animate);
  line.rotation.x += 0.01;
  line.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
</script>

<style></style>