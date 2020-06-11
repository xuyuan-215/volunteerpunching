import Vue from 'vue'
import VueRouter from 'vue-router'
// 解决 双击 路由 的时候 报重复 点击 路由 的问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/homepage',
    children: [
      {
        path: 'homepage',
        name: 'HomePage',
        component: () => import('../views/HomePage.vue')
      },
      {
        path: '/find',
        name: 'Find',
        component: () => import('../views/Find.vue')
      },
      {
        path: '/organization',
        name: 'Organization',
        component: () => import('../views/Organization.vue')
      },
      {
        path: '/my',
        name: 'My',
        component: () => import('../views/My.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
