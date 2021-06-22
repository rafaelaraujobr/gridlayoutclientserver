import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Controll',
    component: () => import(/* webpackChunkName: "controll" */ '@/pages/Controll.vue')
  },
  {
    path: '/display',
    name: 'Display',
    component: () => import(/* webpackChunkName: "display" */ '@/pages/Display.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/pages/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
