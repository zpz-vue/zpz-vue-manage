// 当前token失效了，但是token依然保存在本地。这时候你去访问需要登录权限的路由时，实际上应该让用户重新登录。
// 这时候就需要结合 http 拦截器 + 后端接口返回的http 状态码来判断。
// 要想统一处理所有http请求和响应，就得用上 axios 的拦截器。通过配置http response inteceptor，当后端接口返回401 Unauthorized（未授权），让用户重新登录
import axios from 'axios'
import store from '@/store/index'
import router from '@/router/index'
// axios 全局配置
axios.defaults.baseURL = 'http://127.0.0.1:3001/api'
axios.defaults.timeout = 5000 // 时间戳
// http request 拦截器
axios.interceptors.request.use(
  config => {
    // 判断是否存在token，如果存在的话，则每个http header都加上token
    if (store.state.token) {
      config.headers.Authorization = `token ${store.state.token}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401 :
          // 401 清除token信息并跳转到登录页面
         // store.commit(types.LOGOUT)
          router.replace({
            path: '/login',
            query: {redirect: router.currentRoute.fullPath}
          })
      }
    }
    // 返回接口返回的错误信息

    return Promise.reject(error.response)
  }
)
export default axios
