<script setup lang="ts">
import Motion from './utils/motion'
import { useRouter } from 'vue-router'
import { message } from '@/utils/message'
import { loginRules } from './utils/rule'
import { initRouter } from '@/router/utils'
import { useNav } from '@/layout/hooks/useNav'
import type { FormInstance } from 'element-plus'
import { useLayout } from '@/layout/hooks/useLayout'
import { useUserStoreHook } from '@/store/modules/user'
import { useRenderIcon } from '@/components/ReIcon/src/hooks'
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'
import { useDataThemeChange } from '@/layout/hooks/useDataThemeChange'

import dayIcon from '@/assets/svg/day.svg?component'
import darkIcon from '@/assets/svg/dark.svg?component'
import Lock from '@iconify-icons/ri/lock-fill'
import User from '@iconify-icons/ri/user-3-fill'
import SvgIcon from '@/plugins/svgIcon/SvgIcon.vue'

defineOptions({
  name: 'Login'
})
const router = useRouter()
const loading = ref(false)
const ruleFormRef = ref<FormInstance>()

const { initStorage } = useLayout()
initStorage()

const { dataTheme, dataThemeChange } = useDataThemeChange()
dataThemeChange()
const { title } = useNav()

const ruleForm = reactive({
  username: 'admin',
  password: 'admin123',
  filterLayer: 12,
  opacityLayer: 0.7,
  opacityVideo: 0.9,
  opacityImg: 1,
  editing: false
})

const onLogin = async (formEl: FormInstance | undefined) => {
  loading.value = true
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      useUserStoreHook()
        .loginByUsername({ username: ruleForm.username, password: 'admin123' })
        .then(res => {
          if (res.success) {
            // 获取后端路由
            initRouter().then(() => {
              router.push('/')
              message('登录成功', { type: 'success' })
            })
          }
        })
    } else {
      loading.value = false
      return fields
    }
  })
}

/** 使用公共函数，避免`removeEventListener`失效 */
function onkeypress({ code }: KeyboardEvent) {
  if (code === 'Enter') {
    onLogin(ruleFormRef.value)
  }
}
function setup() {
  ruleForm.editing = !ruleForm.editing
}
onMounted(() => {
  window.document.addEventListener('keypress', onkeypress)
})

onBeforeUnmount(() => {
  window.document.removeEventListener('keypress', onkeypress)
})
</script>

<template>
  <div class="login-select-none">
    <div class="wave-img">
      <img
        :style="{ opacity: ruleForm.opacityImg }"
        src="/background/video/a_0T5j9kSuV7Ec1624110339.jpg"
      />
      <iframe
        class="iframeBg"
        :style="{ opacity: ruleForm.opacityVideo }"
        src="/background/video/index.html"
      />
      <div
        class="bg-backdrop-filter"
        :style="{
          opacity: ruleForm.opacityLayer,
          backdropFilter: `blur(${ruleForm.filterLayer}px)`
        }"
      />
    </div>
    <div class="flex-c absolute right-5 top-5">
      <!-- 设置 -->
      <el-switch
        v-if="false"
        v-model="dataTheme"
        inline-prompt
        :active-icon="dayIcon"
        :inactive-icon="darkIcon"
        @change="dataThemeChange"
      />
      <div v-show="ruleForm.editing">
        <el-slider
          v-model="ruleForm.filterLayer"
          vertical
          :step="1"
          :min="0"
          :max="60"
          height="100px"
        />
        <el-slider
          v-model="ruleForm.opacityLayer"
          vertical
          :step="0.1"
          :min="0"
          :max="1"
          height="100px"
        />
        <el-slider
          v-model="ruleForm.opacityVideo"
          vertical
          height="100px"
          :min="0"
          :max="1"
          :step="0.1"
        />
        <el-slider
          v-model="ruleForm.opacityImg"
          vertical
          height="100px"
          :min="0"
          :max="1"
          :step="0.1"
        />
      </div>
      <el-button link type="primary" @click="setup">
        <svg-icon name="setup"
      /></el-button>
    </div>
    <div class="login-container">
      <div class="login-box">
        <div class="login-form login-form-left">
          <img
            class="login-form-box_img"
            src="/background/video/a_0T5j9kSuV7Ec1624110338.png"
          />
        </div>
        <div class="login-form login-form-right">
          <div class="login-form-box">
            <Motion>
              <svg-icon class="avatar" name="avatar" />
            </Motion>
            <Motion>
              <h2 class="outline-none">{{ title }}</h2>
            </Motion>
            <el-form
              ref="ruleFormRef"
              :model="ruleForm"
              :rules="loginRules"
              size="large"
            >
              <Motion :delay="100">
                <el-form-item
                  :rules="[
                    {
                      required: true,
                      message: '请输入账号',
                      trigger: 'blur'
                    }
                  ]"
                  prop="username"
                >
                  <el-input
                    clearable
                    v-model="ruleForm.username"
                    placeholder="账号"
                    :prefix-icon="useRenderIcon(User)"
                  />
                </el-form-item>
              </Motion>
              <Motion :delay="150">
                <el-form-item prop="password">
                  <el-input
                    clearable
                    show-password
                    v-model="ruleForm.password"
                    placeholder="密码"
                    :prefix-icon="useRenderIcon(Lock)"
                  />
                </el-form-item>
              </Motion>
              <Motion :delay="250">
                <el-button
                  class="w-full mt-4"
                  size="default"
                  type="primary"
                  :loading="loading"
                  @click="onLogin(ruleFormRef)"
                >
                  登录
                </el-button>
              </Motion>
              <Motion>
                <div style="color: #fff; padding-top: 20px; text-align: left">
                  <p>登陆名：admin</p>
                  <p>登陆密码：123</p>
                </div>
              </Motion>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('@/style/login.css');
</style>

<style lang="scss" scoped>
:deep(.el-input-group__append, .el-input-group__prepend) {
  padding: 0;
}
</style>
