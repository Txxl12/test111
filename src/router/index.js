import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: () => import(() => '@/views/home.vue')
  },
  //登录
  {
    path: "/about",
    component: () => import(() => '@/views/about.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
