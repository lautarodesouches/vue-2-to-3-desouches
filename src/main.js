import Vue from 'vue'
// -----------------------------------------------
import VueRouter from 'vue-router'
// -----------------------------------------------
import { routes } from './routes/router'
// -----------------------------------------------
import App from './App.vue'
// -----------------------------------------------
import axios from 'axios'
import VueAxios from 'vue-axios'
// -----------------------------------------------
import store from './store'
// -----------------------------------------------
const router = new VueRouter({
  routes
})
// -----------------------------------------------
Vue.use(VueAxios, axios).use(VueRouter)
new Vue({
  router,
  data() {
    return {
    }
  },
  store,
  render: h => h(App)
}).$mount('#app')