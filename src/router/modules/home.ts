const Layout = () => import('@/layout/index.vue')

export default {
  path: '/',
  name: 'Home',
  component: Layout,
  redirect: '/home',
  meta: {
    icon: 'menu10',
    title: '首页',
    rank: 0
  },
  children: [
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/home/index.vue'),
      meta: {
        icon: 'menu_home',
        title: '首页'
      }
    }
  ]
} as RouteConfigsTable
