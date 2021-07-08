import axios from 'axios' // 引入axios
import QS from 'qs' // 引入qs模块，用来序列化post类型的数据，后面会提到
import { Message } from 'element-ui'
// 环境的切换

const token = localStorage.getItem('Admin-Token')
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
export function setT(token) {
  // 请求拦截器
  axios.interceptors.request.use(
    config => {
      token && (config.headers['access-token'] = token)
      return config
    },
    error => {
      return Promise.error(error)
    })
}
export function setB(baseUrl) {
  axios.defaults.baseURL = baseUrl
}
// 请求拦截器
axios.interceptors.request.use(
  config => {
    token && (config.headers['access-token'] = token)
    return config
  },
  error => {
    return Promise.error(error)
  })
// 响应拦截器

axios.interceptors.response.use(
  response => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  // 服务器状态码不是2开头的的情况
  // 这里可以跟你们的后台开发人员协商好统一的错误状态码
  // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
  // 下面列举几个常见的操作，其他需求可自行扩展
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
          Message({
            message: 'token验证失败，请重新输入',
            type: 'error',
            duration: 2000
          })
          localStorage.removeItem('Admin-Token')
          router.replace({
            path: '/setConfig',
            query: {
              redirect: router.currentRoute.fullPath
            }
          })
          break

          // 403 token过期
          // 登录过期对用户进行提示
          // 清除本地token和清空vuex中token对象
          // 跳转登录页面
        case 403:
          Message({
            message: 'token已过期',
            type: 'error',
            duration: 2000
          })
          // 清除token
          localStorage.removeItem('Admin-Token')
          // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          setTimeout(() => {
            router.replace({
              path: '/setConfig',
              query: {
                redirect: router.currentRoute.fullPath
              }
            })
          }, 1000)
          break

          // 404请求不存在
        case 404:
          Message({
            message: '网络请求不存在',
            type: 'error',
            duration: 2000
          })
          break
          // 其他错误，直接抛出错误提示
        default:
          Message({
            message: error.response.data.message,
            type: 'error',
            duration: 2000
          })
      }
      return Promise.reject(error.response)
    }
  }
)

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}

/**
 * rongPost方法，对应rongPost请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
 export function rongPost(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, QS.stringify(params))
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}