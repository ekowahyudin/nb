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
      name: 'Home',
      component: Home,
      path: '/'
    },
    {
      name: 'UserSignUp',
      component: UserSignUp,
      path: '/pengguna/daftar'
    },
    {
      name: 'UserSignIn',
      component: UserSignIn,
      path: '/pengguna/masuk'
    },
    {
      name: 'ProductSearch',
      component: ProductSearch,
      path: '/produk/cari'
    }
  ]
})
