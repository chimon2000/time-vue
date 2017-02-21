// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================


import * as Vue from 'vue'
import * as Quasar from 'quasar'
import * as firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyB45odnFhUCczEEKGluijNNS4gPFEAf2G8',
  databaseURL: 'https://vuexfire.firebaseio.com'
}

var firebaseApp = firebase.initializeApp(config)

import router from './app/app.router'
import app from './app/app.component.vue';
import store from './app/app.store'
import * as VeeValidate from 'vee-validate'

Vue.use(Quasar) // Install Quasar Framework
Vue.use(VeeValidate)

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    store,
    firebase: {},
    render: h => h(app)
  })
})
