import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import store from '../store/index'

import home from '@/pages/App.vue'
import workbench from '@/pages/workbench/index.vue'
import login from '@/pages/author/login/index.vue'

Vue.use(Router)
const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/',
    redirect: '/workbench',
    component: home,
    children: [
      {
        path: '/workbench',
        name: 'workbench',
        component: workbench,
        meta: {
          title: '工作台',
          auth: true
        }
      }
    ]
  }]

const router = new Router({
  routes,
  mode: 'history', // default: hash ,history
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
})

// 全局路由配置
// 路由开始之前的操作
router.beforeEach((to, from, next) => {
  NProgress.done().start()
  let toname = to.name
  let isLogin = store.state.author.isLogin
  if (!isLogin && toname !== 'login') {
    next({
      name: 'login'
    })
  } else {
    if (isLogin && toname === 'login') {
      next({
        path: '/'
      })
    } else {
      next()
    }
  }
})

// 路由完成之后的操作
router.afterEach(route => {
  NProgress.done()
})

export default router
