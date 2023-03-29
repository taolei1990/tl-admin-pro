<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import SidebarItem from './sidebarItem.vue'
import { useNav } from '@/layout/hooks/useNav'
import { usePermissionStoreHook } from '@/store/modules/permission'
import Logo from '../sidebar/logo.vue'
import Subscriber from '../sidebar/subscriber.vue'
import Suspend from '../sidebar/suspend.vue'
const menuRef = ref()

const { route, routers, backHome, menuSelect, layout } = useNav()

nextTick(() => {
  menuRef.value?.handleResize()
})

watch(
  () => route.path,
  () => {
    menuSelect(route.path, routers)
  }
)
</script>

<template>
  <div
    v-loading="usePermissionStoreHook().wholeMenus.length === 0"
    class="horizontal-header"
  >
    <div class="horizontal-header-left" @click="backHome">
      <logo />
    </div>
    <div style="flex-grow: 2">
      <suspend v-if="layout === 'suspend'" />
      <el-menu
        v-else
        router
        ref="menuRef"
        mode="horizontal"
        class="horizontal-header-menu"
        :default-active="route.path"
        @select="indexPath => menuSelect(indexPath, routers)"
      >
        <sidebar-item
          v-for="route in usePermissionStoreHook().wholeMenus"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </div>
    <subscriber />
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-loading-mask) {
  opacity: 0.45;
}

.logout {
  max-width: 120px;

  ::v-deep(.el-dropdown-menu__item) {
    min-width: 100%;
    display: inline-flex;
    flex-wrap: wrap;
  }
}
</style>
