<template>
  <div>
    <div class="svg-icon-box">
      <div v-for="item in state.svgList" :key="item" @click="copyIcon(item)">
        <div class="svg-icon-item">
          <svg-icon :name="item" size="32px" />
          <div
            style="
              height: 40px;
              table-layout: fixed;
              word-break: break-all;
              line-height: 0.8;
            "
          >
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useCopyToClipboard } from '@pureadmin/utils'
import { message } from '@/utils/message'
const { clipboardValue, copied } = useCopyToClipboard()
const components = import.meta.glob('@/assets/svg/*.svg')
const state = reactive({
  svgList: []
})
for (const [key] of Object.entries(components)) {
  const name = key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'))
  state.svgList.push(name)
}
function copyIcon(name) {
  clipboardValue.value = name
  if (copied.value) message('复制成功', { type: 'success' })
}
</script>

<style lang="scss" scoped>
.svg-icon-box {
  display: inline-flex;
  flex-wrap: wrap;
  .svg-icon-item {
    height: 60px;
    width: 60px;
    margin: 5px;
    text-align: center;
    color: #0084ff;
  }
}
</style>
