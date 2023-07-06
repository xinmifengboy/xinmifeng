<template>
  <div id="info">Description</div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue'
const { proxy }: any  = getCurrentInstance()
import * as three from 'three'

const { scene,renderer, WebGLCompatibilityCheck  } = proxy.$utils

const camera = new three.PerspectiveCamera() //  创建相机
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

const materia = new three.LineBasicMaterial({color: 0xffffff,})
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