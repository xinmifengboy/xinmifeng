<template>
  <span @click="$emit('handleClick')">{{ props.text }}</span>
</template>

<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    default: '确定'
  }
})

</script>

<style scoped>
  span {
      display: inline-block;
      border: 1px solid saddlebrown;
      border-radius: 8px;
      padding: 8px 20px;
      background-color: salmon;
      color: #fff;
      cursor: pointer;
    }
</style>