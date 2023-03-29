<template>
  <div>
    <h2>选项卡一</h2>
    <el-tabs type="border-card" v-model="state.activeName1">
      <el-tab-pane label="User" name="first">User</el-tab-pane>
      <el-tab-pane label="Config" name="second">Config</el-tab-pane>
      <el-tab-pane label="Role" name="third">Role</el-tab-pane>
      <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
    </el-tabs>
    <h2>选项卡二</h2>
    <el-tabs v-model="state.activeName2" @tab-click="handleClick">
      <el-tab-pane label="User" name="first">User</el-tab-pane>
      <el-tab-pane label="Config" name="second">Config</el-tab-pane>
      <el-tab-pane label="Role" name="third">Role</el-tab-pane>
      <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

defineOptions({ name: 'Tabs' })
const state = reactive({
  activeName1: 'first',
  activeName2: 'first'
})
// do not use same name with ref
function handleClick() {}
</script>
