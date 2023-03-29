<template>
  <div>
    <el-timeline>
      <el-timeline-item
        v-for="(item, index) in state.timeline"
        :timestamp="item.timestamp"
        :color="item.color"
        :type="item.type"
        placement="top"
        :hollow="item.hollow"
        :key="index"
      >
        <el-card>
          <h4>{{ item.content }}</h4>
          <p>{{ item.timestamp }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
defineOptions({ name: 'Timeline' })
const state = reactive({
  timeline: [
    {
      content: 'Custom icon',
      timestamp: '2018-04-12 20:46',
      size: 'large',
      type: 'primary'
    },
    {
      content: 'Custom color',
      timestamp: '2018-04-03 20:46',
      color: '#f58d2c'
    },
    {
      content: 'Custom size',
      timestamp: '2018-04-03 20:46',
      size: 'large'
    },
    {
      content: 'Custom hollow',
      timestamp: '2018-04-03 20:46',
      type: 'primary',
      hollow: true
    },
    {
      content: 'Default node',
      timestamp: '2018-04-03 20:46'
    }
  ]
})
</script>
