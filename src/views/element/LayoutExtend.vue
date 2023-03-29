<template>
  <div class="qw-extend">
    <div class="qw-extend-item" v-for="item in 6" :key="item">
      <svg-icon
        :style="{ fill: randomColor({ type: 'hex' }) }"
        :name="`medical${Math.round(Math.random() * 3) + 1}`"
      />
      <div>扩展程序{{ item }}</div>
    </div>
  </div>
</template>

<script setup>
import { randomColor } from '@pureadmin/utils'
</script>

<style lang="scss" scoped>
.qw-extend {
  position: absolute;
  top: 50px;
  right: 0;
  padding: 10px;
  background-color: var(--el-color-primary-light-6);
  .qw-extend-item {
    padding: 5px;
    margin: 5px 0;
    text-align: center;
    .qw-svg-menus {
      width: 32px;
      height: 32px;
      display: initial;
    }
  }
}
</style>
