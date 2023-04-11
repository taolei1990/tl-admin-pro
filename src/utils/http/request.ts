import axios from 'axios'
import { ElMessage } from 'element-plus'
import { getConfig } from '@/config'
import { getToken } from '@/utils/auth'
const { BaseURL, AccessToken } = getConfig()
const service: any = axios.create({
  baseURL: BaseURL,
  timeout: 60000
})
/** 请求拦截 */
service.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json'
    const token = getToken()
    if (token) {
      config.headers.Authorization = token
    } else {
      config.headers.Authorization = AccessToken
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
/** 响应拦截 */
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.entity) {
      return res
    } else {
      return res
    }
  },
  error => {
    ElMessage({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
