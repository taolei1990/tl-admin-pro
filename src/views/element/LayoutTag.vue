<template>
  <div
    v-for="(tag, index) in newTags"
    :key="tag.index"
    class="qw-header-tag"
    :checked="tag.checked"
    @click="onChange(tag)"
    :class="state.checked === tag.index ? 'active' : ''"
  >
    <span class="qw-prefix" />
    <span>{{ `tag-${tag.index}` }}</span>
    <IconifyIconOffline
      class="qw-tag-icon"
      :icon="CircleClose"
      @click.stop="onDelete(tag, index)"
    />
    <span class="qw-suffix" />
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import CircleClose from '@iconify-icons/ep/close'
const Props = defineProps({
  tags: Array
})
const newTags = computed({
  get() {
    return [...Props.tags] || []
  },
  set(val) {
    console.log('改变了', val, newTags)
  }
})

const state = reactive({
  checked: 1
})
function onChange(row) {
  state.checked = row.index
}
function onDelete(row, index) {
  state.checked = index
  newTags.value = [...newTags.value.splice(index, 1)]
}
</script>

<style lang="scss" scoped>
.before {
  position: absolute;
  content: '';
  display: flow-root;
  height: 8px;
  width: 8px;
  background-color: var(--el-color-primary-light-9);
  bottom: 0;
}
.after {
  position: absolute;
  content: '';
  height: 16px;
  width: 16px;
  background-color: var(--el-color-primary-light-8);
  bottom: 0;
  border-radius: 8px;
}
.qw-header-tag {
  padding: 10px 20px;
  display: inline-flex;
  align-items: center;
  margin-top: 10px;
  .qw-tag-icon {
    margin-left: 5px;
    opacity: 0;
  }
  &:hover {
    .qw-tag-icon {
      opacity: 1;
      color: var(--el-color-primary);
    }
  }
  &.active {
    background-color: var(--el-color-primary-light-9);
    color: var(--el-color-primary);
    height: calc(100% - 10px);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px 8px 0 0;
    position: relative;
    .qw-tag-icon {
      opacity: 1;
    }
    .qw-prefix {
      @extend .before;
      right: -8px;
      &:after {
        @extend .after;
        right: -8px;
      }
    }
    .qw-suffix {
      @extend .before;
      left: -8px;
      &:after {
        @extend .after;
        left: -8px;
      }
    }
  }
}
</style>
