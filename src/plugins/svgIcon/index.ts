import { defineAsyncComponent } from 'vue'
import SvgIcon from '../svgIcon/SvgIcon.vue'
// 导出当前目录下的所有.svg的文件
const components = import.meta.glob('@/assets/svg/*.svg')
export function useSvgIcon(app) {
  // 批量注册全局组件
  for (const [key, value] of Object.entries(components)) {
    const name = key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'))
    app.component(name, defineAsyncComponent(value))
  }
  app.component('SvgIcon', SvgIcon)
}
//   // 注册组件
//   files.forEach((component: Component) => {
//     app.component(component.name, component)
//   })
//   // 注册指令
//   plugins.forEach(plugin => {
//     app.use(plugin)
//   })
