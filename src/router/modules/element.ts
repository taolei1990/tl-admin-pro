export default {
  path: '/element',
  redirect: '/element/button',
  meta: {
    icon: 'menu14',
    title: '基础组件'
  },
  children: [
    {
      path: '/element/button',
      name: 'Button',
      component: () => import('@/views/element/button.vue'),
      meta: {
        icon: 'menu_extend',
        title: '按钮'
      }
    },
    {
      path: '/element/form',
      name: 'Form',
      component: () => import('@/views/element/form.vue'),
      meta: {
        icon: 'menu_extend',
        title: '表单'
      }
    },
    {
      path: '/element/table',
      name: 'Table',
      component: () => import('@/views/element/table.vue'),
      meta: {
        icon: 'menu_extend',
        title: '表格'
      }
    },
    {
      path: '/element/dialog',
      name: 'QwDialog',
      component: () => import('@/views/element/dialog.vue'),
      meta: {
        icon: 'menu_extend',
        title: '弹窗'
      }
    },
    {
      path: '/element/title',
      name: 'Title',
      component: () => import('@/views/element/title.vue'),
      meta: {
        icon: 'menu_extend',
        title: '标题'
      }
    },
    {
      path: '/element/svgIcon',
      name: 'SvgIcon',
      component: () => import('@/views/element/svgIcon.vue'),
      meta: {
        icon: 'menu_extend',
        title: 'svg图标'
      }
    },
    {
      path: '/element/tabs',
      name: 'Tabs',
      component: () => import('@/views/element/tabs.vue'),
      meta: {
        icon: 'menu_extend',
        title: 'Tabs 标签页'
      }
    },
    {
      path: '/element/timeline',
      name: 'Timeline',
      component: () => import('@/views/element/timeline.vue'),
      meta: {
        icon: 'menu_extend',
        title: '时间线'
      }
    },
    {
      path: '/element/echarts',
      name: 'Echarts',
      component: () => import('@/views/element/echarts.vue'),
      meta: {
        icon: 'menu_extend',
        title: '图表案例'
      }
    },
    {
      path: '/element/layout',
      name: 'Layout',
      component: () => import('@/views/element/layout.vue'),
      meta: {
        icon: 'menu_extend',
        title: '常规布局'
      }
    }
  ]
} as RouteConfigsTable
