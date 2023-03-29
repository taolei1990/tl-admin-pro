<template>
  <div style="width: 100%; height: 100%" :id="echartsId" />
</template>
<script setup>
import { computed, nextTick } from 'vue'
import { uuid } from '@pureadmin/utils'
import * as echarts from 'echarts'
let myChart = null
const Props = defineProps({
  id: {
    type: String,
    default: () => ''
  },
  option: {
    type: Object,
    default: () => {
      return {}
    }
  }
})
const echartsId = computed(() => {
  return Props.id || uuid(16, 62, 'echarts-')
})
nextTick(() => {
  initChart()
})
window.addEventListener('resize', () => {
  if (myChart?.id) {
    myChart.resize()
  }
})

// 基于准备好的dom，初始化echarts实例
function initChart() {
  myChart = echarts.init(document.getElementById(echartsId.value))
  setChart()
}
// 绘制图表
function setChart() {
  myChart.setOption(Props.option)
}
</script>
