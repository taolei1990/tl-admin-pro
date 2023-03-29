<template>
  <div>
    <el-button @click="state.dialogVisible = true" type="primary">
      打开弹窗
    </el-button>
    <QwDialog v-model:dialogVisible="state.dialogVisible" :title="'标题'">
      <template #default>
        <Form />
      </template>
    </QwDialog>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import QwDialog from '@/components/QwDialog/index.vue'
import Form from './form.vue'
const state = reactive({
  dialogVisible: false
})
defineOptions({ name: 'Dialog' })
// do not use same name with ref
</script>
