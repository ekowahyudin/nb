import Vue from 'vue'
import Vuex from 'vuex'
import UserModule from './UserModule'
import MenuModule from './MenuModule'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    user: UserModule,
    menu: MenuModule
  }
})
