import Vue from 'vue'
import App from './App.vue'
import * as firebase from 'firebase';
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyBJHM3tQpc4JoJUeBRK5W5WOaxCLXrtFrI",
  authDomain: "basicauth-71605.firebaseapp.com",
  databaseURL: "https://basicauth-71605.firebaseio.com",
  projectId: "basicauth-71605",
  storageBucket: "basicauth-71605.appspot.com",
  messagingSenderId: "423653127949",
  appId: "1:423653127949:web:4f192c69e98958c7f72244",
  measurementId: "G-KVZR1V11R1"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
