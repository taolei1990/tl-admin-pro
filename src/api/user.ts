// import { http } from '@/utils/http'
import request from '@/utils/http/request'
/** 登录 */
// export const getLogin = (data?: object) => {
//   return http.request('post', '/login', { data })
// }
//
// /** 刷新token */
// export const refreshTokenApi = (data?: object) => {
//   return http.request('post', '/refreshToken', { data })
// }
export function getLogin(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}
export function refreshTokenApi(data) {
  return request({
    url: '/refreshToken',
    method: 'post',
    data
  })
}
