<template>
  <section class="container">
    <section class="content">
      <section v-for="item in data" class="item" @click="handleClick(item.id)">{{ item.name }}</section>
    </section>
  </section>
</template>

<script setup lang="ts">
const data = [
  {
    id: 1,
    name: '新的游戏',
  },
  {
    id: 2,
    name: '继续游戏',
  },
  {
    id: 3,
    name: '排行榜',
  },
  {
    id: 4,
    name: '设置',
  },
  {
    id: 5,
    name: '关于',
  },
  
]
const handleClick = (v) => {
  console.log(v)
}
</script>

<style scoped lang="scss">
.container {
  height: 100vh;
  background-image: url('@/assets/images/bg.jpg');
  background-size: cover;
  .content {
    border: 2px solid $basicColor;
    display: inline-block;
    position: absolute;
    left: 100px;
    bottom: 100px;
    padding: 40px 0px 150px 0px;
    border-radius: 8px;
    background-color: rgba($color: #000000, $alpha: 0.3);
    width: 280px;
    text-align: center;

    .item {
      color: $basicColor;
      font-weight: 600;
      font-size: 24px;
      line-height: 2em;
      transition: all .5s;
      letter-spacing: 2px;
      &:hover {
        cursor: pointer;
        color: #fff;
        background-color: $basicColor;
      }
    }
  }
}
</style>

