// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import  { LoadingPlugin } from 'vux'
Vue.use(LoadingPlugin)
Vue.use(VueRouter)

//引入路由页面
import routes from './routes/routes.js'
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
