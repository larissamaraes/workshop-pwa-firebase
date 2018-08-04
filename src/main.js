// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyC7QFj7SSCSk4eIxThRvhNLHHQgVQ_4CIY",
  authDomain: "myproject-vue-firebase.firebaseapp.com",
  databaseURL: "https://myproject-vue-firebase.firebaseio.com",
  projectId: "myproject-vue-firebase",
  storageBucket: "myproject-vue-firebase.appspot.com",
  messagingSenderId: "380372366504"
};
firebase.initializeApp(config);

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
firebase.auth()
  .onAuthStateChanged(() => {
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>',
    });
  });
