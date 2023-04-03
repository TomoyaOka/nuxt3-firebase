/*-----------------------------
* firebaseのプロジェクトと連携
--------------------------------*/
import { initializeApp } from 'firebase/app'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  const firebaseConfig = {
    apiKey: "AIzaSyCgS035zvv6rCv80mPz4mBogXs_F4WAxuI",
    authDomain: "login-72cf2.firebaseapp.com",
    projectId: "login-72cf2",
    storageBucket: "login-72cf2.appspot.com",
    messagingSenderId: "1064492138345",
    appId: "1:1064492138345:web:751ec63d3e32b0b8bbc7f8"
  }
  initializeApp(firebaseConfig)
})