<template>
  <section class='container'>
    <span class="datTime">天历3853年8月</span>
    <span class="datTime">真仙圆满</span>
    <span class="datTime">3888岁</span>
    <span class="datTime2">剩余寿元177999年(35415分28秒)</span>
    <span class="wea">3.08兆</span>
    <span>208兆</span>
    <span>空闲中</span>
  </section>
</template>

<script lang='ts' setup>
</script>

<style scoped lang='scss'>
.container { 
  font-family: serif;
  background-color: #dccdb0;
  padding: 20px 0;
  display: flex;
  justify-content: space-around;
  .datTime {
    background-color: $basicColor;
    padding: 4px 10px;
  }
  .datTime2 {
    background-color: #ee9041;
    padding: 4px 10px;
  }
}
</style>