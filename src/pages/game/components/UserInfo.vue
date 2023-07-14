<template>
   <div >
      <section class="dis">
        <n-avatar round :size="88" :src="userInfo.headImg" />
        <section class="userInfo">
          <div>{{ userInfo.name }}</div>
          <div class="col1Last1">
            <n-progress
              type="line"
              :percentage="50"
              :height="24"
              status="error"
              :border-radius="4"
              :fill-border-radius="0"
            />
          </div>
          <div class="col1Last1">{{ userInfo.mp }}</div>
        </section>
      </section>
    </div>
</template>

<script setup>
import { NAvatar, NProgress } from 'naive-ui'
const props = defineProps({
  userInfo: Object,
})

</script>

<style lang="scss" scoped>
.userInfo {
  width: 100%;
  display: grid;
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-template-columns: repeat(3, 1fr);
}
.col1Last1 {
  grid-column: 1 / -1;
}
</style>