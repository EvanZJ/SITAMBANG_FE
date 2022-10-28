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
      path: '/pemesanan',
      name: 'pemesanan',
      component: () => import('../views/Pemesanan.vue')
    },
    {
      path: '/detail-pemesanan',
      name: 'detail-pemesanan',
      component: () => import('../views/DetailPemesanan.vue')
    },
    {
      path: '/detail-pemesanan-admin',
      name: 'detail-pemesanan-admin',
      component: () => import('../views/DetailPemesananAdmin.vue')
    },
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
    {
      path: '/history-penjual',
      name: 'history-penjual',
      component: () => import('../views/HistoryPenjualView.vue')
    },
    {
      path: '/history-update-penjual',
      name: 'history-update-penjual',
      component: () => import('../views/HistoryUpdateView.vue')
    },
    {
      path: '/detail',
      name: '/detail',
      component: () => import('../views/DetailView.vue')
    },
    {
      path: '/tambah-transaksi',
      name: 'tambah-transaksi',
      component: () => import('../views/TambahTransaksiView.vue')
    },
  ]
})

export default router
