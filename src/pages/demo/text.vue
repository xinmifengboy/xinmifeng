<template>
  <div ref="info"></div>
</template>

<script setup lang="ts">
import { getCurrentInstance, onMounted, ref } from 'vue'
const { proxy }: any  = getCurrentInstance()
import * as three from 'three'
import { data, setPostion } from './data.js'

const info = ref(null)
onMounted(() => {
const { scene,renderer, WebGLCompatibilityCheck  } = proxy.$utils // 引入场景，渲染器，WebGL兼容性检查
// 设置渲染器尺寸
renderer.setSize(window.innerWidth, window.innerHeight, false)
// 挂载
info.value.appendChild(renderer.domElement)
document.body.appendChild(renderer.domElement)
const camera = new three.PerspectiveCamera() //  创建相机
camera.position.set( 0, 0, 100 ) // 设置相机位置
camera.lookAt( 0, 0, 0 ) //  设置相机对象到位置

// 画一条线
const materia = new three.LineBasicMaterial({color: 0xffffff,}) // 创建物理物理引擎的材质引擎
const points = setPostion(data.h) // 绘制坐标

//	通过点队列设置该 BufferGeometry 的 attribute。
const geometry = new proxy.$three.BufferGeometry().setFromPoints( points ) 
const line = new three.Line(geometry, materia) // 创建线
scene.add(line)
renderer.render(scene, camera)
})
</script>

<style scoped>
#info {
	position: absolute;
	top: 10px;
	width: 100%;
	text-align: center;
	z-index: 100;
	display:block;
}
</style>