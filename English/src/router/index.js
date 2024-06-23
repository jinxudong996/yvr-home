import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
/* layout */
Vue.use(Router)
//路由列表
export const constantRouterMap = [{
    path: '/login',
    component: _import('login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: _import('404'),
    hidden: true
  },
  {
    path: '/index',
    component: _import('index'),
    hidden: true
  },
  {
    path: '*',
    redirect: '/index',
    hidden: true
  },
  {
    path: '/about',
    component: _import('about'),
    hidden: true
  },
  {
    path: '/details',
    component: _import('details'),
    hidden: true
  },
  {
    path: '/about',
    component: _import('about'),
    hidden: true
  },
  {
    path: '/join',
    component: _import('join'),
    hidden: true
  },
  {
    path: '/mr',
    component: _import('mr'),
    hidden: true
  },
  {
    path: '/news',
    component: _import('news'),
    hidden: true
  },
  {
    path: '/service',
    component: _import('service'),
    hidden: true
  },
  {
    path: '/store',
    component: _import('store'),
    hidden: true
  },
  {
    path: '/vr',
    component: _import('vr'),
    hidden: true
  },
  {
    path: '/search',
    component: _import('search'),
    hidden: true
  },
  {
    path: '/page',
    component: _import('page'),
    hidden: true
  },
]
export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})
export const asyncRouterMap = [ //异步路由
  {
    path: '*',
    redirect: '/index',
    hidden: true
  }
]
