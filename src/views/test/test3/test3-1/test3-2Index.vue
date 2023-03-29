<template>
  <div>
    <el-alert :title="value" type="info" />
    <el-input v-model="input" placeholder="Please input" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineOptions({ name: 'test3-2Index' })

const value = ref('页面3-2')
const input = ref('')
</script>
