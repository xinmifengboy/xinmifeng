<template>
  <section class="container">
    <Card :player="player" class="top" />
    <section class="content">
      <section class="grid" v-for="item in 10" :key="item" style="height: 300px;">
        {{ item }}
      </section>
    </section>
    <section class="beginner">
      <section>新人大礼包</section>
      <section>免费赠送500钻石</section>
      <Btn @handleClick="handleClick"></Btn>
    </section>
    <section class="navBar">
      <ul>
        <li v-for="item in 4">{{ item }}</li>
      </ul>
    </section>
  </section>
</template>
<script setup lang="ts">
import { Player } from '@/global/Basic'
import Card from './components/Card.vue'
import Btn from '@/components/Btn.vue'
import * as api from '@/api'
import { toRaw, reactive } from 'vue'
import { usersAdd, usersFind } from '@/service/users'

// api.users().then((res: Object) => {
//   // console.log(res)
// })

const player = new Player()
player.name = '山河无恙'
player.coins = 1000,
player.diamond = 400
// console.log(player)

const items = reactive({name:player.name, coins:player.coins, diamond:player.diamond});


const handleClick = async () => {
  const res = await usersAdd(toRaw(items))
  console.log(res)
}



const getUser = async () => {
  const res = await usersFind({name: '山河无恙'})
  console.log(res)
}


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
    background-color: aquamarine;

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

  .beginner {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #f5f5f5;
    padding: 20px;
    border-radius: 8px;
    background-color: rgba($color: #000000, $alpha: 0.4);
    text-align: center;
  }
}
</style>