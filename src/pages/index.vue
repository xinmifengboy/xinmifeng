<template>
  <div>
  </div>
</template>

<script setup>
document.body.innerHTML = '' // 清空body内容
const scene = new T3.Scene() //  创建场景

const camera = new T3.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); //  创建相机

const renderer = new T3.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new T3.BoxGeometry(1, 1, 1);
const material = new T3.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new T3.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
</script>

<style lang="scss" scoped></style>