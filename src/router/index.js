import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import UserSignUp from '@/components/user/UserSignUp'
import UserSignIn from '@/components/user/UserSignIn'
import ProductSearch from '@/components/product/ProductSearch'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/pengguna/daftar',
      name: 'UserSignUp',
      comporent: UserSignUp
    },
    {
      path: '/pengguna/masuk',
      name: 'UserSignIn',
      comporent: UserSignIn
    },
    {
      path: '/produk/cari',
      name: 'ProductSearch',
      comporent: ProductSearch
    }
  ]
})
