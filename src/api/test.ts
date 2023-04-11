import { http } from '@/utils/http'

// 测试api
export function TestLogin(data) {
  return http.request('post', '/refreshToken', { data })
}
