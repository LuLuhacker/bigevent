import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login")
  },
  {
    path: "/reg",
    name: "register",
    component: () => import("@/views/register")
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/home"),

  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
