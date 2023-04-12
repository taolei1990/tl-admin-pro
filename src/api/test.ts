import { http } from '@/utils/http'

/** 登录 */
export const GetOrgTreeList = (data?: object) => {
  return http.request('post', '/api/UHRMComm/GetOrgTreeList', { data })
}
