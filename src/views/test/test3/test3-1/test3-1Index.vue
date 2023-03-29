<template>
  <div>
    <el-alert :title="value" type="info" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineOptions({ name: 'test3-1Index' })

const value = ref('页面3-1')
</script>
