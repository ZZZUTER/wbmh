// 专门处理 漫画相关的 接口请求

// 引入封装好的 axios 的实例
import request from '@/utils/request'

// 获取首页数据
export const getDate = () => {
  return request({
    url: '/api/wbcomic/home/page_recommend_list',
    method: 'GET',
    params: {
      mca: 'h5_recommend_male',
      _type: 'h5'
    }
  })
}

// 热门搜索页面
export const getHotSeatch = () => {
  return request({
    url: '/api/wbcomic/home/hot_words',
    method: 'GET',
    params: {
      _type: 'h5'
    }
  })
}

// 完结页面
export const getComicEnd = () => {
  return request({
    url: '/api/wbcomic/home//recommend_list/recommend_list',
    method: 'GET',
    params: {
      location_en: 'ending_works_list',
      _type: 'h5'
    }
  })
}

// 搜索页面
export const getSerachResult = (word) => {
  return request({
    url: '/api/wbcomic/home/search?page_num=1&_type=h5',
    method: 'GET',
    params: {
      word
    }
  })
}

// 分类页面
export const getCate = () => {
  return request({
    url: '/api/wbcomic/comic/filter_list',
    method: 'GET',
    params: {
      _type: 'h5'
    }
  })
}

export const getCatedate = (a, b, c) => {
  return request({
    url: '/api/wbcomic/comic/filter_result',
    method: 'GET',
    params: {
      cate_id: a,
      end_status: b,
      comic_pay_status: c,
      page_num: 1,
      rows_num: 100,
      order: '',
      _type: 'h5'
    }
  })
}

// 排行榜页面
export const getRankOne = () => {
  return request({
    url: '/api/wbcomic/home/rank_read',
    method: 'GET',
    params: {
      _type: 'h5'
    }
  })
}

export const getRankTwo = () => {
  return request({
    url: '/api/wbcomic/home/rank_share',
    method: 'GET',
    params: {
      _type: 'h5'
    }
  })
}

export const getRankThree = () => {
  return request({
    url: '/api/wbcomic/home/rank',
    method: 'GET',
    params: {
      _type: 'h5'
    }
  })
}

// 放送表页面
// http://manhua.weibo.cn/wbcomic/comic/daypub_list?pub_day=20200427&page_num=1&rows_num=20&_type=h5
export const getDaypub = () => {
  return request({
    url: '/api/wbcomic/comic/daypub_list',
    method: 'GET',
    params: {
      pub_day: 20200427,
      page_num: 1,
      rows_num: 20,
      _type: 'h5'
    }
  })
}

// http://manhua.weibo.cn/wbcomic/comic/comic_show?comic_id=69693&create_source=h5&_=1588148863467&_type=h5
// 漫画详情页面
export const getBook = (bookId) => {
  return request({
    url: '/api/wbcomic/comic/comic_show?create_source=h5&_=1588148863467&_type=h5',
    method: 'GET',
    params: {
      comic_id: bookId
    }
  })
}
