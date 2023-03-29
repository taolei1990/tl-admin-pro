<script setup lang="ts">
import { useNav } from '@/layout/hooks/useNav'

const props = defineProps({
  collapse: Boolean
})
const { title, version, layout } = useNav()
</script>
<!-- <FontIcon icon="team-iconlogo" svg style="width: 35px; height: 35px" /> -->
<template>
  <div class="sidebar-logo-container" :class="{ collapses: props.collapse }">
    <transition name="sidebarLogoFade">
      <div
        v-if="props.collapse"
        key="props.collapse"
        :title="title"
        class="sidebar-logo-link"
      >
        <img v-if="layout !== 'middle'" class="sidebar-logo" src="/logo.png" />
        <span class="sidebar-title">{{ title }}</span>
        <span class="sidebar-version">{{ version }}</span>
      </div>
      <div v-else key="expand" :title="title" class="sidebar-logo-link">
        <img v-if="layout !== 'middle'" class="sidebar-logo" src="/logo.png" />
        <span class="sidebar-title">{{ title }}</span>
        <span class="sidebar-divider" />
        <span class="sidebar-version">{{ version }}</span>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  text-align: center;
  overflow: hidden;
  .sidebar-logo-link {
    height: 100%;
    display: flex;
    align-items: center;
    .sidebar-logo {
      height: 28px;
      margin-right: 10px;
    }
    .sidebar-title {
      display: block;
      text-align: left;
      font-weight: 600;
      font-size: 24px;
    }
    .sidebar-divider {
      display: block;
      width: 10px;
      height: 1px;
    }
    .sidebar-version {
      font-size: 16px;
    }
  }

  .collapses {
    .sidebar-logo {
      margin-right: 0;
    }
  }
}
</style>
