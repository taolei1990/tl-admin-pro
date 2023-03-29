<script setup lang="ts">
import MixNav from './sidebar/mixNav.vue'
import Tag from './tag/index.vue'
import { useNav } from '@/layout/hooks/useNav'
import Breadcrumb from './sidebar/breadCrumb.vue'
import TopCollapse from './sidebar/topCollapse.vue'
import Logo from './sidebar/logo.vue'
import Subscriber from './sidebar/subscriber.vue'
const { layout, pureApp, toggleSideBar } = useNav()
</script>

<template>
  <div
    class="navbar bg-[#fff] shadow-sm shadow-[rgba(0, 21, 41, 0.08)] dark:shadow-[#0d0d0d]"
  >
    <div class="breadcrumb-container">
      <logo v-if="layout !== 'middle'" />
    </div>
    <div class="middle-tag" v-if="layout === 'middle'"><tag /></div>
    <topCollapse
      v-if="false"
      class="hamburger-container"
      :is-active="pureApp.sidebar.opened"
      @toggleClick="toggleSideBar"
    />
    <breadcrumb v-if="false" class="breadcrumb-container" />

    <mixNav v-if="layout === 'mix'" />
    <subscriber />
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: -210px;
  right: 0;
  z-index: 999;
  color: var(--qw-info);
  //background-image: url(../../assets/img/navbar.png);
  background-color: var(--el-color-primary);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .hamburger-container {
    line-height: 50px;
    height: 100%;
    float: left;
    cursor: pointer;
  }

  .vertical-header-right {
    display: flex;
    min-width: 220px;
    height: 50px;
    align-items: center;
    color: var(--qw-info);
    justify-content: flex-end;

    .el-dropdown-link {
      height: 50px;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      cursor: pointer;
      p {
        font-size: 14px;
        color: var(--qw-info);
      }

      img {
        width: 22px;
        height: 22px;
        border-radius: 50%;
      }
    }
  }
  .middle-tag {
    flex-grow: 2;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      width: 2px;
      top: 10px;
      bottom: 10px;
      right: 0;
      background-color: var(--qw-border-color-1);
    }
  }
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
