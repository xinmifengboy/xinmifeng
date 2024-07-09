<template>
  <section ref="targetElement"></section>
</template>

<script setup lang="ts">
import { getCurrentInstance, onMounted, ref } from "vue";
const { proxy }: any = getCurrentInstance();
const targetElement = ref(null)
onMounted(() => {
  const { scene, renderer, WebGLCompatibilityCheck, three } = proxy.$utils
  const camera = new three.PerspectiveCamera(50, 100 / 100, 1, 100); //  创建相机
  camera.position.z = 8;

  renderer.setSize(100, 100)
  targetElement.value.appendChild(renderer.domElement)

  const geometry = new three.SphereGeometry(2.5, 32, 32)
  // const texture = new three.TextureLoader().load('https://seopic.699pic.com/photo/40002/0429.jpg_wh1200.jpg');
  const texture = new three.TextureLoader().load('/sun.png');
  const material = new three.MeshBasicMaterial({ map: texture })
  const sun = new three.Mesh(geometry, material)
  // scene.background = new three.Color('skyblue')

  scene.add(sun)
  const light = new three.DirectionalLight(0xffffff, 1)
  scene.add(light)
  const animate = () => {
    requestAnimationFrame(animate);
    // sun.rotation.x += 0.01;
    sun.rotation.z += 0.01
    renderer.setClearColor(new three.Color(0x000000), 0)
    renderer.render(scene, camera)
  }
  WebGLCompatibilityCheck(animate())
})
</script>

<style scoped>

</style>