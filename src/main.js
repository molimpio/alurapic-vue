import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';

Vue.use(VueResource);g

new Vue({
  el: '#app',
  render: h => h(App)
})
