<template>
  <div class="qw-page">
    <h2>布局一</h2>
    <el-container>
      <el-header
        ><div
          style="display: flex; width: 100%; justify-content: space-between"
        >
          <div><h3 style="width: 200px">LOGO</h3></div>
          <div style="flex-grow: 2; display: flex; justify-content: flex-end">
            <h3 v-for="tag in 12" :key="tag">{{ `菜单A-${tag}` }}</h3>
          </div>
          <div><h3 style="width: 100px; text-align: right">用户</h3></div>
        </div></el-header
      >
      <el-container>
        <el-aside width="200px">
          <h3 v-for="tag in 12" :key="tag">{{ `菜单B-${tag}` }}</h3></el-aside
        >
        <el-container>
          <el-main>
            <header><layout-tag :tags="state.tags" /></header>
            <div class="qw-page">
              <h1 style="font-size: 18px">内容区域</h1>
            </div>
            <layout-extend />
          </el-main>
          <el-footer>页脚（可配置）</el-footer>
        </el-container>
      </el-container>
    </el-container>
    <h2>布局二</h2>
    <el-container>
      <el-header
        ><div
          style="display: flex; width: 100%; justify-content: space-between"
        >
          <div><h3 style="width: 200px">LOGO</h3></div>
          <div><h3 style="width: 100px; text-align: right">用户</h3></div>
        </div></el-header
      >
      <el-container>
        <el-aside width="200px">
          <h3 v-for="tag in 12" :key="tag">{{ `菜单A-${tag}` }}</h3></el-aside
        >
        <el-main>
          <header>
            <layout-tag :tags="state.tags" />
          </header>
          <div class="qw-page"><h1>内容区域</h1></div></el-main
        >
      </el-container>
    </el-container>
    <h2>布局三</h2>
    <el-container>
      <el-header
        ><div
          style="display: flex; width: 100%; justify-content: space-between"
        >
          <div><h3 style="width: 200px">LOGO</h3></div>
          <div style="flex-grow: 2; text-align: right">
            <div style="flex-grow: 2; display: flex; justify-content: flex-end">
              <h3 v-for="tag in 12" :key="tag">{{ `菜单A-${tag}` }}</h3>
            </div>
          </div>
          <div><h3 style="width: 100px; text-align: right">用户</h3></div>
        </div></el-header
      >
      <el-main>
        <header>
          <layout-tag :tags="state.tags" />
        </header>
        <div class="qw-page"><h1>内容区域</h1></div></el-main
      >
    </el-container>
    <h2>布局四</h2>
    <el-container>
      <el-aside width="200px">
        <div class="logo"><h2 style="width: 200px">LOGO</h2></div>
        <h3 v-for="tag in 12" :key="tag">{{ `菜单A-${tag}` }}</h3></el-aside
      >
      <el-main>
        <el-header>
          <div
            style="display: flex; width: 100%; justify-content: space-between"
          >
            <div style="flex-grow: 2">
              <header><layout-tag :tags="state.tags" /></header>
            </div>
            <div><h3>用户</h3></div>
          </div>
        </el-header>
        <div class="qw-page"><h1>内容区域</h1></div>
      </el-main>
    </el-container>
    <h2>布局五(特殊)</h2>
    <el-container>
      <el-header>
        <div style="display: flex; width: 100%; justify-content: space-between">
          <div class="logo"><h2 style="width: 200px">LOGO</h2></div>
          <div style="flex-grow: 2" />
          <div><h3>用户</h3></div>
        </div>
      </el-header>
      <el-main>
        <header>
          <layout-tag :tags="state.tags" />
        </header>
        <div class="qw-page"><h1>内容区域</h1></div>
        <div class="qw-aside">
          <el-popover
            placement="top-start"
            trigger="click"
            popper-class="qw-menus-popover"
          >
            <template #reference>
              <IconifyIconOffline :icon="Grid" />
            </template>
            <div class="qw-menus">
              <div class="qw-menus-box">
                <div>
                  <el-scrollbar>
                    <div class="qw-menus-left">
                      <h3
                        v-for="tag in 12"
                        :key="tag"
                        style="display: flex; align-items: center"
                      >
                        {{ `菜单A-${tag}` }}
                        <IconifyIconOffline
                          style="margin-left: 5px"
                          :icon="ArrowRightBold"
                        />
                      </h3>
                    </div>
                  </el-scrollbar>
                </div>
                <div>
                  <el-scrollbar>
                    <div style="height: 460px">
                      <div class="qw-menus-right">
                        <div v-for="tag in 30" :key="tag" style="width: 33%">
                          <div class="qw-menus-right_item">
                            <svg-icon
                              :style="{ fill: randomColor({ type: 'hex' }) }"
                              style="width: 32px; height: 32px"
                              :name="`menu${Math.round(Math.random() * 9) + 1}`"
                            />
                            <div>
                              {{ `菜单B-${tag}` }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </el-scrollbar>
                </div>
              </div>
            </div>
          </el-popover>
        </div>
      </el-main>
      <el-footer>页脚（可配置）</el-footer>
    </el-container>
    <div style="height: 10px" />
  </div>
</template>
<script>
export default {
  name: 'Layout'
}
</script>
<script setup>
import { reactive } from 'vue'
import Grid from '@iconify-icons/ep/grid'
import ArrowRightBold from '@iconify-icons/ep/arrow-right-bold'
import { randomColor } from '@pureadmin/utils'
import LayoutTag from './LayoutTag.vue'
import LayoutExtend from './LayoutExtend.vue'
const state = reactive({
  tags: [
    {
      index: 1,
      checked: false
    },
    {
      index: 2,
      checked: false
    },
    {
      index: 3,
      checked: false
    },
    {
      index: 4,
      checked: false
    },
    {
      index: 5,
      checked: false
    }
  ]
})
</script>
<style lang="scss" scoped>
.logo {
  height: 50px;
  h2 {
    margin-top: 10px;
    text-align: center;
  }
}
.el-aside {
  background-color: var(--el-color-primary-light-7);
}
.el-header {
  background-color: var(--el-color-primary-light-6);
  display: flex;
}
.el-main {
  background-color: var(--el-color-primary-light-9);
  height: 600px;
  padding: 0 !important;
}
h2 {
  margin-top: 40px;
}
h3 {
  margin: 5px 10px;
  font-weight: 500;
}
header {
  height: 50px;
  display: flex;
  align-items: center;
  background-color: var(--el-color-primary-light-8);
  padding-left: 10px;
}
.el-header {
  padding-left: 0;
  header {
    padding-left: 10px;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: var(--el-color-primary-light-8);
  }
}

footer {
  background-color: var(--el-color-primary-light-8);
  display: flex;
  align-items: center;
  justify-content: center;
}

.el-container {
  position: relative;
}
.qw-page {
  background-color: transparent;
}

.el-container {
  position: relative;
  .qw-aside {
    position: absolute;
    bottom: 10px;
    left: 10px;
    font-size: 36px;
    color: #0084ff;
  }
}

.qw-menus {
  background-color: #002a52;
  color: #fff;
  .qw-menus-box {
    display: flex;
    .qw-menus-left {
      height: 460px;
      h3 {
        padding: 5px;
        margin-right: 20px;
      }
    }
    .qw-menus-right {
      width: 360px;
      display: flex;
      flex-wrap: wrap;
      padding: 0 10px;
      .qw-menus-right_item {
        padding: 10px;
        background-color: #113c64;
        margin: 5px;
        text-align: center;
      }
    }
  }
}
.qw-svg-menus {
  width: 40px;
  height: 40px;
  display: initial;
}
</style>
