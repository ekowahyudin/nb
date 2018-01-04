import auth from '../engine/auth'

export default {
  namespaced: true,
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    registerWithEmailAndPassword (email, password, realName) {
      console.log('UserModule')
      alert('UserModule')
      return auth.registerWithEmailAndPassword(email, password, realName)
    }
  }
}
