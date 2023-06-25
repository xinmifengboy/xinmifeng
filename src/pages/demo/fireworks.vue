<!--
 * @Author: shuaiqiboy 16139991@qq.com
 * @Date: 2023-06-08 14:13:17
 * @LastEditors: shuaiqiboy 16139991@qq.com
 * @LastEditTime: 2023-06-08 15:13:52
 * @FilePath: /xinmifeng/src/pages/demo/fireworks.vue
 * @Description: 如有疑问请联系开发者 
 * 16139991
-->
<template>
  <div>

  </div>
</template>

<script setup>
const scene = new THREE.Scene() //  创建场景
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ) //  创建相机
const renderer = new THREE.WebGLRenderer() //  实例化渲染器
// 设置渲染器尺寸， 支持三个参数： 宽度， 高度，是否降低分辨率渲染
renderer.setSize( window.innerWidth, window.innerHeight )
// 将渲染器挂载到文本文档的body元素下
document.body.appendChild( renderer.domElement )

const vertices = [];

for ( let i = 0; i < 10000; i ++ ) {

	const x = THREE.MathUtils.randFloatSpread( 2000 );
	const y = THREE.MathUtils.randFloatSpread( 2000 );
	const z = THREE.MathUtils.randFloatSpread( 2000 );

	vertices.push( x, y, z );

}

const geometry = new THREE.BufferGeometry();
geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );


const material = new THREE.PointsMaterial( { color: 0x888888 } );

const points = new THREE.Points( geometry, material );

scene.add( points );
renderer.render(scene, camera);
</script>

<style  scoped>

</style>