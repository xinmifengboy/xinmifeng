<template>
  <section class="card">
    <section class="dis">
      <img src="../../../assets/images/headImg.jpg" alt="" class="headImg" srcset="">
      <section class="content">
        <p>山河无恙</p>
        <!-- <p>
          <span>青铜五星</span>
          <span>魔法学徒</span>
        </p> -->
        <ul class="wealth dis">
          <li v-for="item in wealth">
            <label>{{ item.name }}</label>
            :
            <label>{{ item.total }}</label>
          </li>
        </ul>
      </section>
    </section>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  player: Object,
})
const wealth = [
  {
    name: '金币',
    total: props.player.coins,
    icon: '',
  },
  {
    name: '钻石',
    total: props.player.diamond,
    icon: '',
  },
]
</script>

<style scoped lang="scss">
$size: 66px;
.card {
  display: grid;
  align-items: center;
  box-shadow: 
    0 0 0 2px #e6e6e6,;
  grid-template-rows: auto;
  .headImg {
    width: $size;
    height: $size;
    border-radius: 50%;
    margin: 0 10px;
    display: inline-block;
  }
  .content {
    display: grid;
   
  }
  .wealth {
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px; //  网格列间距
  }
}

</style>