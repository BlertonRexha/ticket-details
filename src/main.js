import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/index.css'
import axios from './axios'

Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
