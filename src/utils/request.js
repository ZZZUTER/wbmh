// 引入 axios
import axios from 'axios'
// 引入 Notify
// import { Notify } from 'vant'
// 创建一个 axios 的实例对象
const instance = axios.create({
  // 基准路径
  // 直接将 baseURL 修改为 线上ip地址能够处理问题，但是不够优雅，因为后续会频繁去修改它。
  // 推荐是用环境变量来做控制
  baseURL: process.env.NODE_ENV === 'production' ? 'http://120.53.10.56' : 'http://localhost:8080',
  // 超时时间的设置 ms
  timeout: 5000
})

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

// 暴露这个实例
export default instance
