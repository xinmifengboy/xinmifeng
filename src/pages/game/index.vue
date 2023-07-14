<template>
  <section class="layout">
    <section class="header">
      <UserInfo :userInfo="player"/>
    </section>

    <div class="main">2</div>
    <div class="footer">3</div>
  </section>
</template>
<script setup lang="ts">
import UserInfo from '@/pages/game/components/UserInfo.vue' 
import { Player }  from '@/global/User'

const playerInfo = {
  name: '山河无恙',
  headImg: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
};
const player = new Player(playerInfo.name, playerInfo.headImg)
console.log(player)

</script>

<style scoped>
.layout {
  display: grid;
  grid:
    "header" auto "main" 1fr "footer" auto / 1fr;
  gap: 8px;
}
.header {
  grid-area: header;
}
.main {
  grid-area: main;
}
.footer {
  grid-area: footer;
}



</style>