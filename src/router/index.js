import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import * as constant from '@/utils/constant'
import { getCookie } from '@/utils/cookie'

import home from '@/pages/App.vue'
import workbench from '@/pages/workbench/index.vue'
import login from '@/pages/author/login/index.vue'
import user from '@/pages/system/user/index.vue'
import role from '@/pages/system/role/index.vue'
import resource from '@/pages/system/resource/index.vue'
import hotel from '@/pages/purchase/hotel/index.vue'
import scenicspot from '@/pages/purchase/scenicspot/index.vue'
import vehicle from '@/pages/purchase/vehicle/index.vue'

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
      },
      {
        path: '/system/user',
        name: 'user',
        component: user,
        meta: {
          title: '用户管理',
          auth: true
        }
      },
      {
        path: '/system/role',
        name: 'role',
        component: role,
        meta: {
          title: '角色管理',
          auth: true
        }
      },
      {
        path: '/system/resource',
        name: 'resource',
        component: resource,
        meta: {
          title: '权限管理',
          auth: true
        }
      },
      {
        path: '/purchase/hotel',
        name: 'hotel',
        component: hotel,
        meta: {
          title: '酒店管理',
          auth: true
        }
      },
      {
        path: '/purchase/scenicspot',
        name: 'scenicspot',
        component: scenicspot,
        meta: {
          title: '景点管理',
          auth: true
        }
      },
      {
        path: '/purchase/vehicle',
        name: 'vehicle',
        component: vehicle,
        meta: {
          title: '车辆管理',
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
  let authUser = getCookie(constant.COOKIE_USER_KEY)
  let isLogin = false
  if (authUser !== null && authUser !== undefined && authUser !== '') {
    isLogin = true
  }
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
