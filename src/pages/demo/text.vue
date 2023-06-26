<template>
  <div id="info">Description</div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue'
const { proxy }: any  = getCurrentInstance()
import * as three from 'three'
const { scene,renderer, WebGLCompatibilityCheck  } = proxy.$utils
const camera = new three.PerspectiveCamera()
const texture = new three.TextureLoader().load( "https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/01/0F/ChMkJlbKwtmINC3iAAx4ozyK5jAAALGuAMGw3cADHi7853.jpg" );
texture.wrapS = three.RepeatWrapping;
texture.wrapT = three.RepeatWrapping;
texture.repeat.set( 4, 4 );
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