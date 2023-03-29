<template>
  <div>
    <div v-for="item in 12" style="margin-bottom: 10px" :key="item">
      <qw-title :title="`标题 - ${item}`" />
    </div>
  </div>
</template>

<script setup>
import QwTitle from '@/components/QwTitle/index.vue'

defineOptions({ name: 'Title' })
// do not use same name with ref
</script>
