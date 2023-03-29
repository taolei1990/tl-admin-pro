<template>
  <component :is="name" />
</template>

<script setup>
defineProps({
  name: String,
  color: {
    type: String,
    default: 'currentColor'
  },
  size: String
})
</script>

<style lang="scss" scoped>
svg {
  display: inline-flex;
  color: v-bind(color);
  fill: v-bind(color);
  width: v-bind(size);
  height: v-bind(size);
}
</style>
