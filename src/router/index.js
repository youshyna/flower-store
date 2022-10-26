import { createRouter, createWebHistory } from 'vue-router'
import MainPageView from '../views/MainPageView.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPageView
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: function () {
      return import('../views/CatalogView.vue')
    }
  },
  {
    path: '/delivery',
    name: 'delivery',
    component: function () {
      return import('../views/DeliveryView.vue')
    }
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: function () {
      return import('../views/ContactsView.vue')
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: function () {
      return import('../views/CartView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
