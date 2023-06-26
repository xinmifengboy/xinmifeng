<template>
  <section class="content">
    <section class="block block1">将canvas挂载到指定元素位置</section>
    <section class="block block2" ref="targetElement"></section>
  </section>
</template>

<script setup lang="ts">
import { getCurrentInstance, onMounted, ref } from "vue";
const { proxy }: any = getCurrentInstance();
const targetElement = ref(null)
onMounted(() => {
  const { scene, renderer, WebGLCompatibilityCheck, three } = proxy.$utils
  const camera = new three.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); //  创建相机
  renderer.setSize(400, 400)
    targetElement.value.appendChild(renderer.domElement)
    const geometry = new three.BoxGeometry(1, 1, 1);
    const material = new three.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new three.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 3;
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    WebGLCompatibilityCheck(animate())
})

</script>

<style scoped>
.content {
  display: flex;
}

.block {
  width: 400px;
  height: 400px;
}

.block1 {
  background-color: aquamarine;
}

.block2 {
  background-color: bisque;
}
</style>
<!--
 * _______________#########_______________________ 
 * ______________############_____________________ 
 * ______________#############____________________ 
 * _____________##__###########___________________ 
 * ____________###__######_#####__________________ 
 * ____________###_#######___####_________________ 
 * ___________###__##########_####________________ 
 * __________####__###########_####_______________ 
 * ________#####___###########__#####_____________ 
 * _______######___###_########___#####___________ 
 * _______#####___###___########___######_________ 
 * ______######___###__###########___######_______ 
 * _____######___####_##############__######______ 
 * ____#######__#####################_#######_____ 
 * ____#######__##############################____ 
 * ___#######__######_#################_#######___ 
 * ___#######__######_######_#########___######___ 
 * ___#######____##__######___######_____######___ 
 * ___#######________######____#####_____#####____ 
 * ____######________#####_____#####_____####_____ 
 * _____#####________####______#####_____###______ 
 * ______#####______;###________###______#________ 
 * ________##_______####________####______________ 
 -->