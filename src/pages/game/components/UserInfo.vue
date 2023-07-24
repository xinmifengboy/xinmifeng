<template>
      <section class="container">
        <section v-for="item in 7" :key="item" class="item" :style="{backgroundColor:getRandomHexColor() }">{{ item }}</section>
      </section>
</template>

<script setup lang="ts">
import { NAvatar, NProgress } from 'naive-ui'
const props = defineProps({
  userInfo: Object,
})

const getRandomHexColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 120px; //  保证每个网格高度为120px
  grid-auto-rows: minmax(100px, auto); //  最小高度为100, 最大自适应
  grid-column-gap: 10px; //  网格列间距
  grid-row-gap: 1em; //  网格行间距
}
.item:first-child {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
.item:nth-child(2) {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
}
</style>