import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/Home')
  },
  {
    path: '/addProduct',
    name: 'addProduct',
    component: () => import('../views/product/addProduct')
  },
  {
    path: '/product/:pId',
    name: 'Product',
    component: () => import('../views/product/Product')
  },
  {
    path: '/productManage',
    name: 'ProductManage',
    component: () => import('../views/product/ProductManage')
  },
  {
    path: '/search/:Key',
    name: 'Search',
    component: () => import('../views/search/Search')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/order/Order')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/sign/Login')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/sign/Register')
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => {
      sessionStorage.removeItem('token')
      sessionStorage.removeItem('uName')
      alert('注销成功')
      router.push('/login')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  // 添加背景色
  document
    .querySelector('body')
    .setAttribute('style', 'background-color:#f6f6f6')
  if (to.path === '/login' || to.path === '/register') {
    next()
  } else {
    let token = sessionStorage.getItem('token')
    if (token === '' || token === null) {
      next('/login')
    } else {
      next()
    }
  }
})

export default router
