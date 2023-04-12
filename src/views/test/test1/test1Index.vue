<template>
  <div>
    <el-alert :title="value" type="info" />
    <el-button @click="apiGetOrgTreeList">api测试</el-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { GetOrgTreeList } from '@/api/test'
defineOptions({ name: 'Test1Index' })
function apiGetOrgTreeList() {
  GetOrgTreeList({ query_type: 1 })
    .then(res => {
      console.log('结果', res)
    })
    .finally(() => {
      console.log('请求结束')
    })
}
const value = ref('页面1')
</script>
