/**
 *  abstraction to authentication
 */
import firebase from './firebase'

const auth = firebase.auth
let user = null

export default {
  getUserID () {
    if (!user) {
      return ''
    } else {
      return user.uid
    }
  },

  async createUserWithEmailAndPassword (email, password, realName) {
    try {
      let xxx = await auth.createUserWithEmailAndPassword(email, password)
      console.log(xxx)
      user = auth.currentUser
      if (realName) {
        let yyy = await user.updateProfile({
          displayName: realName
        })
        console.log(yyy)
      }
      await user.sendEmailVerification()
    } catch (error) {
      return {code: error.code, msg: error.message}
    }
    return {code: 0, msg: 'OK'}
  }
}
