<template>
  <div class="qw-page">
    <el-table :data="state.tableData" :highlight-current-row="true">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="address" />
      <el-table-column prop="date" label="Date" width="150" />
      <!--      <el-table-column label="Delivery Info">-->
      <!--        <el-table-column prop="name" label="Name" width="120" />-->
      <!--        <el-table-column label="Address Info">-->
      <!--          <el-table-column prop="state" label="State" width="120" />-->
      <!--          <el-table-column prop="city" label="City" width="120" />-->
      <!--          <el-table-column prop="address" label="address" />-->
      <!--          <el-table-column prop="zip" label="Zip" width="120" />-->
      <!--        </el-table-column>-->
      <!--      </el-table-column>-->
    </el-table>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
defineOptions({ name: 'Table' })
// do not use same name with ref
const state = reactive({
  tableData: [
    {
      date: 'date',
      name: 'name',
      address: 'address'
    },
    {
      date: 'date',
      name: 'name',
      address: 'address'
    },
    {
      date: 'date',
      name: 'name',
      address: 'address'
    },
    {
      date: 'date',
      name: 'name',
      address: 'address'
    },
    {
      date: 'date',
      name: 'name',
      address: 'address'
    },
    {
      date: 'date',
      name: 'name',
      address: 'address'
    },
    {
      date: 'date',
      name: 'name',
      address: 'address'
    },
    {
      date: 'date',
      name: 'name',
      address: 'address'
    },
    {
      date: 'date',
      name: 'name',
      address: 'address'
    },
    {
      date: 'date',
      name: 'name',
      address: 'address'
    },
    {
      date: 'date',
      name: 'name',
      address: 'address'
    },
    {
      date: 'date',
      name: 'name',
      address: 'address'
    },
    {
      date: 'date',
      name: 'name',
      address: 'address'
    },
    {
      date: 'date',
      name: 'name',
      address: 'address'
    },
    {
      date: 'date',
      name: 'name',
      address: 'address'
    },
    {
      date: 'date',
      name: 'name',
      address: 'address'
    },
    {
      date: 'date',
      name: 'name',
      address: 'address'
    },
    {
      date: 'date',
      name: 'name',
      address: 'address'
    },
    {
      date: 'date',
      name: 'name',
      address: 'address'
    },
    {
      date: 'date',
      name: 'name',
      address: 'address'
    },
    {
      date: 'date',
      name: 'name',
      address: 'address'
    }
  ]
})
</script>
