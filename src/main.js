import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
// import {routerMode} from './config/env'
import rem from './utils/rem'
import tap from './utils/tap'
import fetch from './utils/fetch';

Vue.use(VueRouter)
Vue.use(tap)
rem(320, 10)  // 1rem -- 10px

// 全局注册数据请求
Vue.prototype.fetch = fetch;

const router = new VueRouter({
    routes,
    // mode: routerMode,
    strict: process.env.NODE_ENV !== 'production'
})

new Vue({
    router,
    store
}).$mount('#app')
