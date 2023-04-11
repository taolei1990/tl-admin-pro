// 模拟后端动态生成路由
import { MockMethod } from 'vite-plugin-mock'

/**
 * roles：页面级别权限，这里模拟二种 "admin"、"common"
 * admin：管理员角色
 * common：普通角色
 */

const router = [
  {
    path: '/permission',
    meta: {
      title: '权限管理',
      icon: 'lollipop',
      rank: 10
    },
    children: [
      {
        path: '/permission/page/index',
        name: 'PermissionPage',
        meta: {
          title: '页面权限',
          roles: ['admin', 'common']
        }
      },
      {
        path: '/permission/button/index',
        name: 'PermissionButton',
        meta: {
          title: '按钮权限',
          roles: ['admin', 'common'],
          auths: ['btn_add', 'btn_edit', 'btn_delete']
        }
      }
    ]
  },
  {
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
        meta: {
          icon: 'menu_extend',
          title: '按钮'
        }
      },
      {
        path: '/element/form',
        name: 'Form',
        meta: {
          icon: 'menu_extend',
          title: '表单'
        }
      },
      {
        path: '/element/table',
        name: 'Table',
        meta: {
          icon: 'menu_extend',
          title: '表格'
        }
      },
      {
        path: '/element/dialog',
        name: 'QwDialog',
        meta: {
          icon: 'menu_extend',
          title: '弹窗'
        }
      },
      {
        path: '/element/title',
        name: 'Title',
        meta: {
          icon: 'menu_extend',
          title: '标题'
        }
      },
      {
        path: '/element/svgIcon',
        name: 'SvgIcon',
        meta: {
          icon: 'menu_extend',
          title: 'svg图标'
        }
      },
      {
        path: '/element/tabs',
        name: 'Tabs',
        meta: {
          icon: 'menu_extend',
          title: 'Tabs 标签页'
        }
      },
      {
        path: '/element/timeline',
        name: 'Timeline',
        meta: {
          icon: 'menu_extend',
          title: '时间线'
        }
      },
      {
        path: '/element/echarts',
        name: 'Echarts',
        meta: {
          icon: 'menu_extend',
          title: '图表案例'
        }
      },
      {
        path: '/element/layout',
        name: 'Layout',
        meta: {
          icon: 'menu_extend',
          title: '常规布局'
        }
      }
    ]
  },
  {
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
        meta: {
          title: '页面1',
          icon: 'menu7'
        }
      },
      {
        path: '/test/test2/test2Index',
        name: 'Test2Index',
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
            meta: {
              title: '页面3-1',
              icon: 'menu4',
              showParent: true
            }
          },
          {
            path: '/test/test3/test3-1/test3-2Index',
            name: 'test3-2Index',
            meta: {
              title: '页面3-2',
              icon: 'menu1'
            }
          },
          {
            path: '/test/test3/test3-1/test3-3Index',
            name: 'test3-3Index',
            meta: {
              title: '页面3-3',
              icon: 'menu3',
              keepAlive: true
            }
          }
        ]
      }
    ]
  }
]

export default [
  {
    url: '/getAsyncRoutes',
    method: 'get',
    response: () => {
      return {
        success: true,
        data: router
      }
    }
  }
] as MockMethod[]
