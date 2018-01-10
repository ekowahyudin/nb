import Vue from 'vue'
import {store} from './store'

import {
  Vuetify,
  VApp,
  VCard,
  VDialog,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VSelect,
  VToolbar,
  VTextField,
  transitions
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'

import App from './App'
import router from './router'

Vue.use(Vuetify, {
  components: {
    VApp,
    VCard,
    VDialog,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VSelect,
    VToolbar,
    VTextField,
    transitions
  },
  theme: {
    primary: '#8d6e63',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
