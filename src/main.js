import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueI18n from 'vue-i18n'
import Language from './assets/language/language'
import store from './store/index'
import './assets/css/common.css'
import 'font-awesome/css/font-awesome.min.css'
Vue.use(ElementUI)
Vue.use(VueI18n)
Vue.config.lang = 'zh'

Object.keys(Language).forEach(lang => {
  Vue.locale(lang, Language[lang])
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
