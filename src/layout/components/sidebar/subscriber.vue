<template>
  <div class="vertical-header-right">
    <!-- 菜单搜索 -->
    <Search v-if="false" />
    <!-- 通知 -->
    <Notice id="header-notice" />
    <!--全屏-->
    <FullScreen />
    <!-- 退出登录 -->
    <el-dropdown trigger="click">
      <span class="select-none el-dropdown-link navbar-bg-hover">
        <img :src="userAvatar" :style="avatarsStyle" />
        <p v-if="username" class="dark:text-white">{{ username }}</p>
      </span>
      <template #dropdown>
        <el-dropdown-menu class="logout">
          <el-dropdown-item @click="logout">
            <IconifyIconOffline :icon="LogoutCircleRLine" style="margin: 5px" />
            退出系统
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <span
      class="set-icon navbar-bg-hover"
      title="打开项目配置"
      @click="onPanel"
      v-show="false"
    >
      <i class="iconfont icon-shezhi2" />
    </span>
  </div>
</template>
<script setup>
import Search from '../search/index.vue'
import Notice from '../notice/index.vue'
import FullScreen from './fullScreen.vue'

import { useNav } from '@/layout/hooks/useNav'
import userAvatar from '../../../assets/img/user.png'
const { logout, onPanel, username, avatarsStyle } = useNav()
</script>
<style lang="scss">
.vertical-header-right {
  display: flex;
  min-width: 280px;
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
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
</style>
