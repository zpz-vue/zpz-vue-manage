export default {
  state: {
    isLogin: false
  },
  mutations: {
    SET_AUTH_USER: (state, { isLogin }) => {
      state.isLogin = isLogin
      console.log(isLogin)
    }
  },
  actions: {
    // Register
    login ({ commit }, {isLogin}) {
      commit('SET_AUTH_USER', {isLogin: isLogin})
    }
  }
}
