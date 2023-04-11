import App from './App.vue'
import router from './router'
import { setupStore } from '@/store'
import ElementPlus from 'element-plus'
import { getServerConfig } from './config'
import { createApp, Directive } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import { useSvgIcon } from '@/plugins/svgIcon'

import { injectResponsiveStorage } from '@/utils/responsive'
// import { useElementPlus } from '@/plugins/element-plus'

// 导入公共样式
import './style/index.scss'
// 导入字体图标
import './assets/iconfont/iconfont.js'
import './assets/iconfont/iconfont.css'
import './assets/iconfont-cdhmp/iconfont.css'
const app = createApp(App)

// 自定义指令
import * as directives from '@/directives'
Object.keys(directives).forEach(key => {
  app.directive(key, (directives as { [key: string]: Directive })[key])
})

// 全局注册`@iconify/vue`图标库
import {
  IconifyIconOffline,
  IconifyIconOnline,
  FontIcon
} from './components/ReIcon'
app.component('IconifyIconOffline', IconifyIconOffline)
app.component('IconifyIconOnline', IconifyIconOnline)
app.component('FontIcon', FontIcon)

// 全局注册按钮级别权限组件
import { Auth } from '@/components/ReAuth'
app.component('Auth', Auth)

getServerConfig(app).then(async config => {
  app.use(router)
  await router.isReady()
  injectResponsiveStorage(app, config)
  setupStore(app)
  app
    // .use(useElementPlus);
    .use(ElementPlus, { size: 'small', zIndex: 3000 })
    .use(MotionPlugin)
    .use(useSvgIcon)
  app.mount('#app')
})
