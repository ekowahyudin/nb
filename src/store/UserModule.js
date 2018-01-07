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
    createWithEmailAndPassword (state, payload) {
      return auth.createUserWithEmailAndPassword(payload.email, payload.password, payload.fullName)
    }
  }
}
