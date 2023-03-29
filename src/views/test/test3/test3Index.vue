<template>
  <div>
    <el-alert :title="value" type="info" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineOptions({ name: 'Test3Index' })

const value = ref('页面3')
</script>
