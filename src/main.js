import { createApp } from 'vue'
// -----------------------------------------------
import { createRouter, createWebHistory } from 'vue-router'
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
const router = createRouter({
    history: createWebHistory(),
    routes
})
// -----------------------------------------------
createApp(App).use(store).use(router).use(VueAxios, axios).mount('#app')