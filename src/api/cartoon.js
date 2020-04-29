// 专门处理 漫画相关的 接口请求

// 引入封装好的 axios 的实例
import request from '@/utils/request'

/**
 * 获取完结页面数据
 */
export const getComicend = () => {
  return request({
    url: '/api/wbcomic/home/recommend_list?location_en=ending_works_list&_type=h5',
    method: 'GET'
    // 需要请求体参数，就提供 data
    // 需求查询字符串参数，就提供 params
  })
}

/**
 * 获取排行榜页面数据
 */
export const getRankList = (type) => {
  return request({
    url: `/api/wbcomic/home/${type}?_type=h55`,
    method: 'GET'
    // 需要请求体参数，就提供 data
    // 需求查询字符串参数，就提供 params
  })
}
/**
 * 获取分类列表
 */
export const getProad = () => {
  return request({
    url: '/api/wbcomic/comic/filter_list?_type=h5',
    method: 'GET'
    // 需要请求体参数，就提供 data
    // 需求查询字符串参数，就提供 params
  })
}
/**
 * 获取分类数据
 */
export const getCateList = (textid) => {
  return request({
    url: `/api/wbcomic/comic/filter_result?${textid}&page_num=1&rows_num=20&order=&_type=h5`,
    method: 'GET'
    // 需要请求体参数，就提供 data
    // 需求查询字符串参数，就提供 params
  })
}
