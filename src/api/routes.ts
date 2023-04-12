import request from '@/utils/http/request'

export function getAsyncRoutes(data = {}) {
  return request({
    url: '/getAsyncRoutes',
    method: 'get',
    data
  })
}
