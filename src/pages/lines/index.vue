<template>
  <div></div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from "vue";
const { proxy }: any = getCurrentInstance();
document.body.innerHTML = '' // 清空body内容
const renderer = new proxy.$three.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//create a blue LineBasicMaterial
const material = new proxy.$three.LineBasicMaterial({ color: 0x0000ff });
const points = [];
points.push(new proxy.$three.Vector3(-10, 0, 0));
points.push(new proxy.$three.Vector3(0, 10, 0));
points.push(new proxy.$three.Vector3(10, 0, 0));
points.push(new proxy.$three.Vector3(0, -10, 0));
points.push(new proxy.$three.Vector3(-10, 0, 0));

const geometry = new proxy.$three.BufferGeometry().setFromPoints(points);
const line = new proxy.$three.Line(geometry, material);

const camera = new proxy.$three.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

camera.position.z = 5;

const scene = new proxy.$three.Scene();
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