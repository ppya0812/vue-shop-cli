import Vue from 'vue'
import VueRouter from 'vue-router'
import $http from 'vue-resource';
import routes from './router/router'
import store from './store/'
// import {routerMode} from './config/env'
import rem from './utils/rem'
import tap from './utils/tap'


Vue.use(VueRouter)
Vue.use(tap)
Vue.use($http)
rem(320, 10)  // 1rem -- 10px

const router = new VueRouter({
	routes,
	// mode: routerMode,
	strict: process.env.NODE_ENV !== 'production'
})


new Vue({
	router,
	store,
}).$mount('#app')
