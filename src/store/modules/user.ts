import { defineStore } from 'pinia'
import { store } from '@/store'
import { userType } from './types'
import { routerArrays } from '@/layout/types'
import { router, resetRouter } from '@/router'
import { storageSession } from '@pureadmin/utils'
import { getLogin, refreshTokenApi } from '@/api/user'
import { useMultiTagsStoreHook } from '@/store/modules/multiTags'
import {
  type DataInfo,
  setToken,
  removeToken,
  UserInfo,
  sessionKey,
  setUserInfo
} from '@/utils/auth'

export const useUserStore = defineStore({
  id: 'qw-user',
  state: (): userType => ({
    // 用户信息
    info: storageSession().getItem(UserInfo),
    // 用户名
    username:
      storageSession().getItem<DataInfo<number>>(sessionKey)?.username ?? '',
    // 页面级别权限
    roles: storageSession().getItem<DataInfo<number>>(sessionKey)?.roles ?? []
  }),
  actions: {
    /** 存储用户名 */
    SET_USERNAME(username: string) {
      this.username = username
    },
    /** 存储角色 */
    SET_ROLES(roles: Array<string>) {
      this.roles = roles
    },
    SET_USER_INFO(info: object) {
      this.roles = info
    },
    /** 登入 */
    async loginByUsername(data) {
      return new Promise((resolve, reject) => {
        getLogin(data)
          .then(res => {
            if (res) {
              const { accessToken } = res.data
              /*设置Token*/
              setToken(accessToken)
              // 设置用户信息
              setUserInfo(res.data)
              resolve(res)
            }
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    /** 前端登出（不调用接口） */
    logOut() {
      this.username = ''
      this.roles = []
      removeToken()
      useMultiTagsStoreHook().handleTags('equal', [...routerArrays])
      resetRouter()
      router.push('/login')
    },
    /** 刷新`token` */
    async handRefreshToken(data) {
      return new Promise((resolve, reject) => {
        refreshTokenApi(data)
          .then(data => {
            if (data) {
              setToken(data.data)
              resolve(data)
            }
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  }
})

export function useUserStoreHook() {
  return useUserStore(store)
}
