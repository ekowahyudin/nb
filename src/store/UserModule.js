import auth from '../engine/auth'

export default {
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    registerWithEmailAndPassword (email, password, realName) {
      return auth.registerWithEmailAndPassword(email, password, realName)
    }
  }
}
