export default {
  path: '/error',
  redirect: '/error/403',
  meta: {
    icon: 'informationLine',
    title: '测试页面',
    // showLink: false,
    rank: 9
  },
  children: [
    {
      path: '/error/403',
      name: '403',
      component: () => import('@/views/error/403.vue'),
      meta: {
        title: '测试页面1'
      }
    },
    {
      path: '/error/404',
      name: '404',
      component: () => import('@/views/error/404.vue'),
      meta: {
        title: '测试页面2'
      }
    },
    {
      path: '/error/500',
      name: '500',
      component: () => import('@/views/error/500.vue'),
      meta: {
        title: '测试页面3'
      }
    }
  ]
} as RouteConfigsTable
