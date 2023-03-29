import { iconType } from './types'
import { h, defineComponent, Component } from 'vue'
import { IconifyIconOnline, IconifyIconOffline, FontIcon } from '../index'

export function useRenderIcon(icon: any, attrs?: iconType): Component {
  // iconfont
  const ifReg = /^IF-/
  // typeof icon === "function" 属于SVG
  if (ifReg.test(icon)) {
    // iconfont
    const name = icon.split(ifReg)[1]
    const iconName = name.slice(
      0,
      name.indexOf(' ') === -1 ? name.length : name.indexOf(' ')
    )
    const iconType = name.slice(name.indexOf(' ') + 1, name.length)
    return defineComponent({
      name: 'FontIcon',
      render() {
        return h(FontIcon, {
          icon: iconName,
          iconType,
          ...attrs
        })
      }
    })
  } else if (typeof icon === 'function' || typeof icon?.render === 'function') {
    // svg
    return icon
  } else if (typeof icon === 'object') {
    return defineComponent({
      name: 'OfflineIcon',
      render() {
        return h(IconifyIconOffline, {
          icon: icon,
          ...attrs
        })
      }
    })
  } else {
    // 通过是否存在 : 符号来判断是在线还是本地图标，存在即是在线图标，反之
    return defineComponent({
      name: 'Icon',
      render() {
        const IconifyIcon =
          icon && icon.includes(':') ? IconifyIconOnline : IconifyIconOffline
        return h(IconifyIcon, {
          icon: icon,
          ...attrs
        })
      }
    })
  }
}
