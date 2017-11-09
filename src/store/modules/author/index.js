import jwtDecode from 'jwt-decode'
import axios from '@/utils/axios'
import * as constant from '@/utils/constant'
import { setCookie } from '@/utils/cookie'
// import axios from 'axios'
export default {
  namespaced: true,
  state: {
    isLogin: false,
    authUser: null
  },
  mutations: {
    SET_AUTH_USER: (state, { isLogin }) => {
      state.isLogin = isLogin
      console.log(isLogin)
    }
  },
  actions: {
    // Register
    async login ({ commit }, {username, password}) {
      await axios.post('/auth/login', {
        clientId: '098f6bcd4621d373cade4e832627b4f6',
        password: password,
        userName: username
      }).then(function (data) {
        setCookie(constant.COOKIE_USER_TOKEN, data.data.data.access_token, data.data.data.expires_in * 1000)
        setCookie(constant.COOKIE_USER_KEY, jwtDecode(data.data.data.access_token).user, data.data.data.expires_in * 1000)
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
}
