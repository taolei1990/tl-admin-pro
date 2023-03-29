<template>
  <div>
    <el-alert :title="value" type="info" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineOptions({ name: 'Test1Index' })

const value = ref('页面1')
</script>
