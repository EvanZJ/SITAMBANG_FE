import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/pembeli',
      name: 'homePembeli',
      component: () => import('../views/HomePembeliView.vue')
    },
    {
      path: '/stockPenjual',
      name: 'penjual',
      component: () => import('../views/Stock.vue')
    }
  ]
})

export default router
