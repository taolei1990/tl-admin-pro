const Layout = () => import('@/layout/index.vue')

export default {
  path: '/doc',
  name: 'Doc',
  component: Layout,
  redirect: '/doc',
  meta: {
    icon: 'menu10',
    title: '文档',
    rank: 3
  },
  children: [
    {
      path: '/docIndex',
      name: 'DocIndex',
      component: () => import('@/doc/index.vue'),
      meta: {
        icon: 'menu_home',
        title: '文档'
      }
    }
  ]
} as RouteConfigsTable
