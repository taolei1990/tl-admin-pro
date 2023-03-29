<template>
  <div class="suspend-menu-item" @click="routerPath">
    <div class="suspend-menu-icon">
      <svg-icon
        class="suspend-menu-svg"
        :name="props.item?.meta?.icon || 'avatar'"
      />
    </div>
    <div class="suspend-menu-title">
      <p>{{ props.item?.meta?.title }}</p>
    </div>
  </div>
  <template v-if="props.item?.children">
    <suspend-item
      v-for="route in props.item?.children"
      :key="route.path"
      :item="route"
    />
  </template>
</template>

<script setup>
import { router } from '@/router'
const props = defineProps({
  item: {
    type: Object,
    default: () => {
      return {}
    }
  }
})
function routerPath() {
  router.push(props.item?.path)
}
</script>

<style scoped lang="scss">
.suspend-menu-item {
  width: 100px;
  height: 100px;
  margin: 1px;
  padding: 10px;
  text-align: center;
  background-color: rgba(123, 117, 112, 0.2);
  opacity: 0.8;
  .suspend-menu-icon {
    height: 32px;
    margin-bottom: 5px;
    .suspend-menu-svg {
      width: 32px;
      height: 32px;
    }
  }
  .suspend-menu-title {
    height: 42px;
    display: table-cell;
    vertical-align: middle;
    p {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      text-align: justify;
      overflow: hidden;
    }
  }
  &:hover {
    background-color: $menuHover;
    cursor: pointer;
    opacity: 1;
  }
}
</style>
