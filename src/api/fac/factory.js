import request from '@/utils/request'

// 查询工厂管理列表
export function listFactory(query) {
  return request({
    url: '/fac/factory/list',
    method: 'get',
    params: query
  })
}

// 查询工厂管理详细
export function getFactory(factoryId) {
  return request({
    url: '/fac/factory/' + factoryId,
    method: 'get'
  })
}

// 新增工厂管理
export function addFactory(data) {
  return request({
    url: '/fac/factory',
    method: 'post',
    data: data
  })
}

// 修改工厂管理
export function updateFactory(data) {
  return request({
    url: '/fac/factory',
    method: 'put',
    data: data
  })
}

// 删除工厂管理
export function delFactory(factoryId) {
  return request({
    url: '/fac/factory/' + factoryId,
    method: 'delete'
  })
}
