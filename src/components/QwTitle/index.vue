<template>
  <div class="qw-title">
    <div class="qw-title-label">{{ Props.title }}</div>
    <div class="qw-title-subhead"><slot name="subhead" /></div>
  </div>
</template>

<script setup>
const Props = defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<style scoped></style>
