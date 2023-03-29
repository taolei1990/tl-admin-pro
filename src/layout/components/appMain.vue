<script setup lang="ts">
import { useGlobal, useWatermark } from '@pureadmin/utils'
import BackTop from '@/assets/svg/back_top.svg?component'
import {
  h,
  computed,
  Transition,
  defineComponent,
  ref,
  watch,
  nextTick
} from 'vue'
import { usePermissionStoreHook } from '@/store/modules/permission'
// import { setWatermark } from '@/layout/hooks/useWatermark'
nextTick(() => {
  addWatermark(watermark.value)
})
const appMain = ref()
const { setWatermark: setLocalWatermark, clear: clearLocal } =
  useWatermark(appMain)
const props = defineProps({
  fixedHeader: Boolean
})

const { $storage, $config } = useGlobal<GlobalPropertiesApi>()

const keepAlive = computed(() => {
  return $config?.KeepAlive
})

const transitions = computed(() => {
  return route => {
    return route.meta.transition
  }
})
const watermark = computed(() => {
  return $storage?.configure.watermark
})
watch(watermark, val => {
  addWatermark(val)
})
// 设置水印
function addWatermark(val) {
  if (val) {
    setLocalWatermark(`${$config.Title}${$config.Version}`, {
      globalAlpha: 0.85, // 值越低越透明
      width: 240,
      height: 120
    })
  } else {
    clearLocal()
  }
}
const hideTabs = computed(() => {
  return $storage?.configure.hideTabs
})

const layout = computed(() => {
  return $storage?.layout.layout === 'vertical'
})

const getSectionStyle = computed(() => {
  const top = $storage.configure.showModel === 'card' ? 10 : 10
  return [
    hideTabs.value && layout ? `padding-top: ${50 + top}px;` : '',
    !hideTabs.value && layout ? `padding-top: ${100 + top}px;` : '',
    hideTabs.value && !layout.value ? `padding-top: ${50 + top}px;` : '',
    !hideTabs.value && !layout.value ? `padding-top: ${100 + top}px;` : '',
    !hideTabs.value && $storage?.layout.layout === 'middle'
      ? `padding-top: ${50 + top}px;`
      : '',
    props.fixedHeader ? '' : 'padding-top: 0;'
  ]
})

const transitionMain = defineComponent({
  render() {
    return h(
      Transition,
      {
        name:
          transitions.value(this.route) &&
          this.route.meta.transition.enterTransition
            ? 'pure-classes-transition'
            : (transitions.value(this.route) &&
                this.route.meta.transition.name) ||
              'fade-transform',
        enterActiveClass:
          transitions.value(this.route) &&
          `animate__animated ${this.route.meta.transition.enterTransition}`,
        leaveActiveClass:
          transitions.value(this.route) &&
          `animate__animated ${this.route.meta.transition.leaveTransition}`,
        mode: 'out-in',
        appear: true
      },
      {
        default: () => [this.$slots.default()]
      }
    )
  },
  props: {
    route: {
      type: undefined,
      required: true
    }
  }
})
</script>

<template>
  <section
    :class="[props.fixedHeader ? 'app-main' : 'app-main-nofixed-header']"
    :style="getSectionStyle"
    ref="appMain"
  >
    <router-view>
      <template #default="{ Component, route }">
        <el-scrollbar v-if="props.fixedHeader">
          <el-backtop title="回到顶部" target=".app-main .el-scrollbar__wrap">
            <backTop />
          </el-backtop>
          <transitionMain :route="route">
            <keep-alive
              v-if="keepAlive"
              :include="usePermissionStoreHook().cachePageList"
            >
              <component
                :is="Component"
                :key="route.fullPath"
                class="main-content"
              />
            </keep-alive>
            <component
              v-else
              :is="Component"
              :key="route.fullPath"
              class="main-content"
            />
          </transitionMain>
        </el-scrollbar>
        <div v-else>
          <transitionMain :route="route">
            <keep-alive
              v-if="keepAlive"
              :include="usePermissionStoreHook().cachePageList"
            >
              <component
                :is="Component"
                :key="route.fullPath"
                class="main-content"
              />
            </keep-alive>
            <component
              v-else
              :is="Component"
              :key="route.fullPath"
              class="main-content"
            />
          </transitionMain>
        </div>
      </template>
    </router-view>
  </section>
</template>

<style scoped>
.app-main {
  width: 100%;
  height: calc(100vh);
  position: relative;
  overflow-x: hidden;
}

.app-main-nofixed-header {
  width: 100%;
  min-height: 100vh;
  position: relative;
}

.main-content {
  margin: 0 var(--qw-space-10) 0 var(--qw-space-10);
}
</style>
