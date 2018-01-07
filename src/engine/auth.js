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

  /**
   * return promise
   * @param {*} email
   * @param {*} password
   * @param {*} realName
   */
  createUserWithEmailAndPassword (email, password, realName) {
    return new Promise((resolve, reject) => {
      let warning = []
      let jobCounter = 1 // 1 for sendEmailVerification

      function checkResolve () {
        jobCounter--
        if (jobCounter <= 0) {
          resolve({status: 0, message: 'Account Created', warning: warning})
        }
      }

      auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        let user = auth.currentUser

        // send email verification
        user.sendEmailVerification()
        .catch((e) => warning.push(e))
        .done(checkResolve)

        // update display name
        if (realName) {
          jobCounter++
          user.updateProfile({displayName: realName})
          .catch((e) => warning.push(e))
          .done(checkResolve)
        }
      })
      .catch((e) => reject(e))
    })
  }
}
