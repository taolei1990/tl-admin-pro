export default {
  path: '/test',
  redirect: '/test/test1/test1Index',
  meta: {
    icon: 'menu8',
    title: '测试页面',
    // showLink: false,
    rank: 9
  },
  children: [
    {
      path: '/test/test1/test1Index',
      name: 'Test1Index',
      component: () => import('@/views/test/test1/test1Index.vue'),
      meta: {
        title: '页面1',
        icon: 'menu7'
      }
    },
    {
      path: '/test/test2/test2Index',
      name: 'Test2Index',
      component: () => import('@/views/test/test2/test2Index.vue'),
      meta: {
        title: '页面2',
        icon: 'menu6'
      }
    },
    {
      path: '/test/test3/test3Index',
      name: 'Test3Index',
      redirect: '/test/test3/test3-1/test3-1Index',
      meta: {
        title: '页面3',
        icon: 'menu5'
      },
      children: [
        {
          path: '/test/test3/test3-1/test3-1Index',
          name: 'test3-1Index',
          component: () =>
            import('@/views/test/test3/test3-1/test3-1Index.vue'),
          meta: {
            title: '页面3-1',
            icon: 'menu4'
          }
        },
        {
          path: '/test/test3/test3-1/test3-2Index',
          name: 'test3-2Index',
          component: () =>
            import('@/views/test/test3/test3-1/test3-2Index.vue'),
          meta: {
            title: '页面3-2',
            icon: 'menu1'
          }
        },
        {
          path: '/test/test3/test3-1/test3-3Index',
          name: 'test3-3Index',
          component: () =>
            import('@/views/test/test3/test3-1/test3-3Index.vue'),
          meta: {
            title: '页面3-3',
            icon: 'menu3',
            keepAlive: true
          }
        }
      ]
    }
  ]
} as RouteConfigsTable
