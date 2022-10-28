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
    },
    {
      path: '/editstock',
      name: 'editstock',
      component: () => import('../views/EditStock.vue')
    },
    {
      path: '/tambahproduk',
      name: 'tambahproduk',
      component: () => import('../views/TambahProdukView.vue')
    },
  ]
})

export default router
