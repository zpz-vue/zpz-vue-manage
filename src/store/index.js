import Vue from 'vue'
import Vuex from 'vuex'

import user from '@/store/modules/user/index'
import role from '@/store/modules/role/index'
import author from '@/store/modules/author/index'
import workbench from '@/store/modules/workbench/index'
import common from '@/store/modules/common/index'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    role,
    author,
    workbench,
    common
  }
})
