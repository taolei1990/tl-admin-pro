<template>
  <div class="qw-page">
    <h1>系统名称：【{{ title }} 】登陆用户：【{{ username }}】</h1>
    <h1 />
    <h1>vue文件命名方式 页面命名</h1>

    <p>
      页面命名：小驼峰命名法 xxx.vue 或 xxxXx.vue
      注意：如果是页面必须存在页面name 本页面举例 setup
      添加页面name方式为【defineOptions({ name: "Home" })】 且首字母大写
    </p>
    <p>组件命名：大驼峰命名法 Xxx.vue 或 XxxXx.vue</p>

    <h1>慢病 iconfont 图标使用方式：</h1>
    <p>unicode 引用</p>
    <i class="qw-icon iconfont">&#xe6f3;</i>
    <p>font-class 引用(单色情况下推荐使用font-class字体图标)</p>
    方式一 <i class="qw-icon iconfont icon-shezhi2" /> <br />
    方式二 <FontIcon class="qw-icon" :icon="'icon-shezhi2'" />
    <p>symbol 引用</p>
    <svg class="qw-icon-svg icon" aria-hidden="true">
      <use xlink:href="#icon-fankui" />
    </svg>

    <p>svg 引用(一般多色情况下推荐使用svg图标)</p>
    <p>
      注意： svg 放到了 src/assets/svg 文件夹里，该文件夹作为 svg 文件统一存放处
    </p>
    <p>svg后面加?component代表将其作为Vue组件引入，以获取更好的类型声明</p>
    <i class="qw-icon-svg">
      <setup />
    </i>
    <h1>按钮案例</h1>
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>
    <el-row>
      <el-button>按钮</el-button>
      <el-button>default</el-button>
      <el-button>Small</el-button>
      <el-button>Search</el-button>
      <el-button>Search</el-button>
      <el-button>Search</el-button>
    </el-row>
    <h1>表格按钮</h1>
    <form-item />
    <table-item />
  </div>
</template>

<script setup>
import { useNav } from '@/layout/hooks/useNav'
import FormItem from './components/FormItem.vue'
import TableItem from './components/TableItem.vue'
import Setup from '@/assets/svg/setup.svg?component'
defineOptions({ name: 'Home' })
const { title, username } = useNav()
</script>

<style scoped>
.qw-icon {
  font-size: 32px;
  color: var(--qw-primary);
}
.qw-icon-svg {
  width: 32px;
  height: 32px;
}
</style>
