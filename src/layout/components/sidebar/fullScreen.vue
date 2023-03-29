<template>
  <div @click="onToggle" class="qw-full-screen">
    <IconifyIconOffline :icon="state.fllicon" />
  </div>
</template>
<script setup>
import { reactive } from 'vue'
import { useFullscreen } from '@vueuse/core'
import Fullscreen from '@iconify-icons/ri/fullscreen-fill'
import ExitFullscreen from '@iconify-icons/ri/fullscreen-exit-fill'
const { isFullscreen, toggle } = useFullscreen()
const state = reactive({
  fllicon: Fullscreen
})
function onToggle() {
  toggle()
  state.fllicon = isFullscreen.value ? Fullscreen : ExitFullscreen
}
</script>
<style lang="scss" scoped>
.qw-full-screen {
  height: 50px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
    background: rgba(246, 246, 246, 0.2039215686);
  }
}
</style>
