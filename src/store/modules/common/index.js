import axios from '@/utils/axios'
import * as constant from '@/utils/constant'
import {getCookie} from '@/utils/cookie'
export default {
  namespaced: true,
  state: {
    menuData: [],
    isCollapse: false,
    language: 'zh'
  },
  mutations: {
    LOAD_MENU_DATA: (state, {menuData}) => {
      state.menuData = menuData
    },
    SET_IS_COLLAPSE: (state, {isCollapse}) => {
      state.isCollapse = isCollapse
    },
    SET_LANGUAGE: (state, {language}) => {
      state.language = language
    }
  },
  actions: {
    async loadMenuData ({commit}) {
      let userName = getCookie(constant.COOKIE_USER_KEY).id
      await axios.get('/resource/loadMenu/' + userName, {}).then(function (data) {
        console.log(data.data.data)
        commit('LOAD_MENU_DATA', {
          menuData: data.data.data
        })
      }).catch(function (err) {
        console.log(err)
      })
    },
    setIsCollapse ({commit}) {
      let _isCollapse = this.state.common.isCollapse
      if (_isCollapse) {
        _isCollapse = false
      } else {
        _isCollapse = true
      }
      commit('SET_IS_COLLAPSE', {isCollapse: _isCollapse})
    },
    setLanguage ({commit}, {language}) {
      commit('SET_LANGUAGE', {language: language})
    }
  }
}
