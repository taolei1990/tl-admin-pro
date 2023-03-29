<template>
  <div class="qw-suspend">
    <el-popover
      placement="top-start"
      trigger="click"
      popper-class="qw-menus-popover"
    >
      <template #reference>
        <el-button type="primary" link title="菜单">
          <svg-icon class="qw-icons-menu" name="icons_main" />
        </el-button>
      </template>
      <div class="qw-suspend-box">
        <div class="suspend-menu-left">
          <el-scrollbar>
            <div
              v-for="(route, index) in usePermissionStoreHook().wholeMenus"
              :key="route.path"
              class="suspend-menu"
            >
              <svg-icon class="suspend-menu-icon" :name="route?.meta?.icon" />
              <a
                href=""
                @click.prevent="custormAnchor(`main${index}`)"
                class="suspend-menu-title"
              >
                {{ route.meta?.title }}
              </a>
              <iconify-icon-offline :icon="arrowRight" />
            </div>
          </el-scrollbar>
        </div>
        <div class="suspend-menu-right">
          <el-scrollbar>
            <div
              v-for="(route, index) in usePermissionStoreHook().wholeMenus"
              :key="route.path"
            >
              <div :id="`main${index}`" style="margin: 5px 0">
                {{ route.meta?.title }}
              </div>
              <div class="suspend-menu-children" style="width: calc(102px * 3)">
                <template v-if="route?.children">
                  <suspend-item
                    v-for="route in route?.children"
                    :key="route.path"
                    :item="route"
                  />
                </template>
              </div>
            </div>
          </el-scrollbar>
        </div>
      </div>
    </el-popover>
  </div>
</template>

<script setup>
import { usePermissionStoreHook } from '@/store/modules/permission'
import arrowRight from '@iconify-icons/ep/arrow-right'
import SuspendItem from './suspendItem.vue'
function custormAnchor(anchorName) {
  // 找到锚点
  const anchorElement = document.getElementById(anchorName)
  // 如果对应id的锚点存在，就跳转到锚点
  if (anchorElement) {
    anchorElement.scrollIntoView({
      behavior: 'smooth'
    })
  }
}
</script>

<style scoped lang="scss">
.qw-suspend-box {
  background-color: $subMenuBg;
  height: 500px;
  overflow-y: auto;
  display: flex;
  color: #fff;
  font-size: var(--qw-font-size-minor);
}
.suspend-menu-left {
  background-color: $menuBg;
  width: 200px;
  padding: 5px 0 5px 5px;
  .suspend-menu {
    padding: 5px;
    display: flex;
    align-items: center;
    .suspend-menu-icon {
      width: 20px;
      height: 20px;
    }

    .suspend-menu-title {
      padding: 0 10px;
      flex-grow: 2;
    }
  }
}
.suspend-menu-right {
  padding: 5px;
  .suspend-menu-children {
    display: flex;
    flex-wrap: wrap;
  }
}
.qw-suspend {
  position: fixed;
  bottom: 5px;
  left: 5px;
  z-index: 9;
  .qw-icons-menu {
    width: 32px;
    height: 30px;
  }
}
</style>
