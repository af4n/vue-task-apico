import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase/app'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: 'main' },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: { layout: 'empty' },
    component: () => import('../views/Register.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'empty' },
    component: () => import('../views/Login.vue')
  },
  {
    path: '/product/:id',
    name: 'product-info',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/ProductInfo.vue')
  },
  {
    path: '/add-product',
    name: 'add-product',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/AddProduct.vue')
  },
  {
    path: '/favorite',
    name: 'favorite',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/Favorite.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requireAuth = to.matched.some(record => record.meta.auth)

  if (requireAuth && !currentUser) {
    next('/')
  } else {
    next()
  }
})

export default router
