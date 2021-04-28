import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(Vuelidate)

firebase.initializeApp({
  apiKey: "AIzaSyButZgLzxxh20NkGq4ETkpzTuk4tA5Q7uU",
  authDomain: "vue-task-apico.firebaseapp.com",
  projectId: "vue-task-apico",
  storageBucket: "vue-task-apico.appspot.com",
  messagingSenderId: "828990796710",
  appId: "1:828990796710:web:a253ab2027cc58adf09567",
  measurementId: "G-QGTHHZBML0"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
