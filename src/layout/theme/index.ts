/**
 * @description ⚠️：此文件仅供主题插件使用，请不要在此文件中导出别的工具函数（仅在页面加载前运行）
 */

type MultipleScopeVarsItem = {
  scopeName: string
  varsContent: string
}

/** 预设主题色 */
const themeColors = {
  default: {
    subMenuActiveText: 'var(--qw-primary)', // 选中文字色
    menuBg: '#002A52', // 菜单背景色
    menuHover: '#0084FF',
    subMenuBg: '#002140', // 二级菜单背景色
    subMenuActiveBg: 'var(--qw-bg-color-2)', // 选中背景色
    menuText: '#fff', // 菜单文字色
    sidebarLogo: '#002140',
    menuTitleHover: 'var(--qw-primary)', // Hover文字色
    menuActiveBefore: '#0084FF'
  },
  dusk: {
    subMenuActiveText: 'var(--qw-primary)', // 选中文字色
    menuBg: '#2a0608',
    menuHover: '#e13c39',
    subMenuBg: '#000',
    subMenuActiveBg: '#fff', // 选中背景色
    menuText: '#fff', // 菜单文字色
    sidebarLogo: '#42090c',
    menuTitleHover: 'var(--qw-primary)', // Hover文字色
    menuActiveBefore: '#e13c39'
  },
  volcano: {
    subMenuActiveText: 'var(--qw-primary)', // 选中文字色
    menuBg: '#070745',
    menuHover: '#1A1DFF',
    subMenuBg: '#070745',
    subMenuActiveBg: '#fff', // 选中背景色
    menuText: '#fff', // 菜单文字色
    sidebarLogo: '#090a5c',
    menuTitleHover: 'var(--qw-primary)', // Hover文字色
    menuActiveBefore: '#1A1DFF'
  },
  yellow: {
    subMenuActiveText: 'var(--qw-primary)', // 选中文字色
    menuBg: '#2b2503',
    menuHover: '#f6da4d',
    subMenuBg: '#0f0603',
    subMenuActiveBg: '#fff', // 选中背景色
    menuText: '#fff', // 菜单文字色
    sidebarLogo: '#443b05',
    menuTitleHover: 'var(--qw-primary)', // Hover文字色
    menuActiveBefore: '#f6da4d'
  },
  mingQing: {
    subMenuActiveText: 'var(--qw-primary)', // 选中文字色
    menuBg: '#032121',
    menuHover: '#59bfc1',
    subMenuBg: '#000',
    subMenuActiveBg: '#fff', // 选中背景色
    menuText: '#fff', // 菜单文字色
    sidebarLogo: '#053434',
    menuTitleHover: 'var(--qw-primary)', // Hover文字色
    menuActiveBefore: '#59bfc1'
  },
  auroraGreen: {
    subMenuActiveText: 'var(--qw-primary)', // 选中文字色
    menuBg: '#0b1e15',
    menuHover: '#60ac80',
    subMenuBg: '#000',
    subMenuActiveBg: '#fff', // 选中背景色
    menuText: '#fff', // 菜单文字色
    sidebarLogo: '#112f21',
    menuTitleHover: 'var(--qw-primary)', // Hover文字色
    menuActiveBefore: '#60ac80'
  },
  pink: {
    subMenuActiveText: 'var(--qw-primary)', // 选中文字色
    menuBg: '#28081a',
    menuHover: '#d84493',
    subMenuBg: '#000',
    subMenuActiveBg: '#fff', // 选中背景色
    menuText: '#fff', // 菜单文字色
    sidebarLogo: '#3f0d29',
    menuTitleHover: 'var(--qw-primary)', // Hover文字色
    menuActiveBefore: '#d84493'
  },
  saucePurple: {
    subMenuActiveText: 'var(--qw-primary)', // 选中文字色
    menuBg: '#130824',
    menuHover: '#693ac9',
    subMenuBg: '#000',
    subMenuActiveBg: '#fff', // 选中背景色
    menuText: '#fff', // 菜单文字色
    sidebarLogo: '#1f0c38',
    menuTitleHover: 'var(--qw-primary)', // Hover文字色
    menuActiveBefore: '#693ac9'
  },
  qwTheme: {
    subMenuActiveText: 'var(--qw-primary)', // 选中文字色
    menuBg: '#002A52', // 菜单背景色
    menuHover: '#409eff',
    subMenuBg: '#002140', // 二级菜单背景色
    subMenuActiveBg: 'var(--qw-bg-color-2)', // 选中背景色
    menuText: '#fff', // 菜单文字色
    sidebarLogo: '#002140',
    menuTitleHover: 'var(--qw-primary)', // Hover文字色
    menuActiveBefore: '#409eff'
  }
}

/**
 * @description 将预设主题色处理成主题插件所需格式
 */
export const genScssMultipleScopeVars = (): MultipleScopeVarsItem[] => {
  const result = [] as MultipleScopeVarsItem[]
  Object.keys(themeColors).forEach(key => {
    result.push({
      scopeName: `layout-theme-${key}`,
      varsContent: `
        $subMenuActiveText: ${themeColors[key].subMenuActiveText} !default;
        $menuBg: ${themeColors[key].menuBg} !default;
        $menuHover: ${themeColors[key].menuHover} !default;
        $subMenuBg: ${themeColors[key].subMenuBg} !default;
        $subMenuActiveBg: ${themeColors[key].subMenuActiveBg} !default;
        $menuText: ${themeColors[key].menuText} !default;
        $sidebarLogo: ${themeColors[key].sidebarLogo} !default;
        $menuTitleHover: ${themeColors[key].menuTitleHover} !default;
        $menuActiveBefore: ${themeColors[key].menuActiveBefore} !default;
      `
    } as MultipleScopeVarsItem)
  })
  return result
}
