import Vue from 'vue'
import App from './App.vue'
import {router} from './router'
import {store} from './store/store'
import VueResource from 'vue-resource'

Vue.use(VueResource);
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
