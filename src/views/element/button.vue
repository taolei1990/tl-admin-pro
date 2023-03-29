<template>
  <div>
    <el-row class="mb-4">
      <el-button type="primary">主要按钮</el-button>
      <el-button type="info">取消按钮</el-button>
      <el-button type="primary" plain>次要按钮</el-button>
    </el-row>
    <h5>按钮禁用</h5>
    <el-row class="mb-4">
      <el-button type="primary" disabled>主要按钮</el-button>
      <el-button type="info" disabled>取消按钮</el-button>
      <el-button type="primary" plain disabled>次要按钮</el-button>
    </el-row>
    <h5>圆角按钮</h5>
    <el-row class="mb-4">
      <el-button round>Round</el-button>
      <el-button type="primary" round>Primary</el-button>
      <el-button type="success" round>Success</el-button>
      <el-button type="info" round>Info</el-button>
      <el-button type="warning" round>Warning</el-button>
      <el-button type="danger" round>Danger</el-button>
    </el-row>
    <h5>按钮组</h5>
    <el-row class="mb-4">
      <el-button-group>
        <el-button>本周</el-button>
        <el-button type="primary">本月</el-button>
        <el-button>本年</el-button>
      </el-button-group>
    </el-row>
    <h5>图标按钮</h5>
    <el-row>
      <el-button :icon="Search" circle />
      <el-button type="primary" :icon="Edit" circle />
      <el-button type="success" :icon="Check" circle />
      <el-button type="info" :icon="Message" circle />
      <el-button type="warning" :icon="Star" circle />
      <el-button type="danger" :icon="Delete" circle />
    </el-row>
    <h5>文字按钮</h5>
    <div class="flex justify-space-between mb-4 flex-wrap gap-4">
      <el-button
        v-for="button in buttons"
        :key="button.text"
        :type="button.type"
        text
        >{{ button.text }}</el-button
      >
    </div>
    <h5>文字按钮禁用</h5>
    <div class="flex justify-space-between flex-wrap gap-4">
      <el-button
        v-for="button in buttons"
        :key="button.text"
        :type="button.type"
        text
        disabled
        >{{ button.text }}</el-button
      >
    </div>
    <h5>链接按钮带下划线</h5>
    <div class="flex justify-space-between mb-4 flex-wrap gap-4">
      <el-link href="#" target="_blank">default</el-link>
      <el-link type="primary">primary</el-link>
      <el-link type="success">success</el-link>
      <el-link type="warning">warning</el-link>
      <el-link type="danger">danger</el-link>
      <el-link type="info">info</el-link>
    </div>
    <h5>链接按钮不带下划线</h5>
    <div class="flex justify-space-between mb-4 flex-wrap gap-4">
      <el-link href="#" target="_blank" :underline="false">default</el-link>
      <el-link type="primary" :underline="false">primary</el-link>
      <el-link type="success" :underline="false">success</el-link>
      <el-link type="warning" :underline="false">warning</el-link>
      <el-link type="danger" :underline="false">danger</el-link>
      <el-link type="info" :underline="false">info</el-link>
    </div>
    <div>
      <svg
        width="30"
        height="8"
        viewBox="0 0 30 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30 8V0.5C30 4.64214 26.6421 8 22.5 8H30ZM7.5 8C3.35788 8 0 4.64214 0 0.5V8H7.5Z"
          fill="red"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star
} from '@element-plus/icons-vue'
defineOptions({ name: 'Button' })
const buttons = [
  { type: '', text: 'plain' },
  { type: 'primary', text: 'primary' },
  { type: 'success', text: 'success' },
  { type: 'info', text: 'info' },
  { type: 'warning', text: 'warning' },
  { type: 'danger', text: 'danger' }
]
</script>

<style scoped></style>
