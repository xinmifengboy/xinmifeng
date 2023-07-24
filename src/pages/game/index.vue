<template>
  <section class="container">
    <Card :userInfo="player" class="top"/>
    <section class="content">
      <section class="grid" v-for="item in 10" :key="item" style="height: 300px;">
        {{ item }}
      </section>
    </section>
    <section class="navBar">
      <ul>
        <li v-for="item in 4">{{ item }}</li>
      </ul>
    </section>
  </section>
</template>
<script setup lang="ts">
import { PlayerProperty } from '@/global/Basic'
import Card from './components/Card.vue'
import { users } from '@/api'
const playerInfo: PlayerProperty = {
  name: '山河无恙',
  level: 0,
  attack: 0,
  armor: 0,
  maxHp: 0,
  currentHp: 0,
  headImg: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
  maxExp: 0,
  currentExp: 0,
  strength: 0,
  agility: 0,
  intelligence: 0,
}


users().then(res => {
  console.log(res)
})

// const player = new PlayerProperty(playerInfo)
const player = {
  coins: 72739103,
  diamond: 2000,
}
// console.log(player)


</script>

<style scoped lang="scss">
.container {
  max-width: 414px;
  background-color: #f5f5f5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .top {
    height: 110px;
    background-color:aquamarine;

  }
  .content {
    flex: 1;
    overflow-y: scroll;
    max-height: calc(100vh - 88px - 110px);
    display: grid;
    grid-template-columns: repeat(2, 1fr);

  }
  .navBar {
    height: 88px;
    background-color: aqua;
    
  }
}
</style>