import Vue from 'vue'
import Firebase from 'firebase'
import VueFire from 'vuefire'

Vue.use(VueFire)

export default Firebase.initializeApp({
  apiKey: 'AIzaSyCzLgdHFKIZIV2U8C9kZEQZoiLkKju_7-U',
  authDomain: 'niagabaru-4f3b3.firebaseapp.com',
  databaseURL: 'https://niagabaru-4f3b3.firebaseio.com',
  projectId: 'niagabaru-4f3b3',
  storageBucket: 'niagabaru-4f3b3.appspot.com',
  messagingSenderId: '321840994429'
})
