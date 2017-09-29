// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import 'babel-polyfill'

// 模考大赛只能参加一次
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import axios from 'axios'
import routes from './router/index' //引入路由页面
import Es6Promise from 'es6-promise' // ES6模块方式
// import VueResource from 'vue-resource';
// Vue.use(VueResource);
import {
  changeUrl
} from './common/common.js'
import {
  LoadingPlugin
} from 'vux'
import {
  AlertPlugin
} from 'vux'
import {
  ConfirmPlugin
} from 'vux'
// import { Upload,Dialog } from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
// Vue.use(Upload)
// Vue.use(Dialog)
import Mock from './mock'
Mock.bootstrap();
require('es6-promise').polyfill()
Es6Promise.polyfill()

Vue.use(LoadingPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(VueRouter)
Vue.prototype.axios = axios

//切换title
Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.innerText
    el.remove()
  }
})

const router = new VueRouter({
  // mode: 'history',
  routes
})

let token = '';

router.beforeEach((to, from, next) => {

  if (navigator.userAgent.indexOf('kedougongkao') == -1) {
    token = localStorage.getItem('globalToken')
    next()
  } else {
    let str = navigator.userAgent
    let reg = /token=\[(.*)\]/ig
    str.replace(reg, function () {
      token = arguments[1]
    })
    next()
  }
  if (to.path == '/advertise') {
    next({
      path: '/advertise'
    })
  } else if (to.path == '/paperAnswer') {
    next({
      path: '/paperAnswer'
    })
  } else if (to.path == '/paperAnswer/basic') {
    next({
      path: '/paperAnswer/basic'
    })
  } else if (to.path == '/paperAnswer/risk') {
    next({
      path: '/paperAnswer/risk'
    })
  } else if (to.path == '/paperAnswer/city') {
    next({
      path: '/paperAnswer/city'
    })
  } else if (to.path == '/paperAnswer/teacher') {
    next({
      path: '/paperAnswer/teacher'
    })
  } else if (to.path == '/paperAnswer/fast') {
    next({
      path: '/paperAnswer/fast'
    })
  } else if (to.path == '/nowStart') {
    next({
      path: '/nowStart'
    })
  } else if (to.path == '/getSuccess') {
    next({
      path: '/getSuccess'
    })
  }
   else if (to.path == '/explain') {
    next({
      path: '/explain'
    })
  }
  else if (to.path == '/register') {
    //可获取到url？后面的参数
    if (to.matched.some(m => m.meta.requiresAuth)) {
      next({
        path: '/register'
      })
    }
  } else if ((token == 'undefined' || token == '' || token == null) && to.path != '/login') {
    // alert('没有token')
    // alert(token)
    localStorage.setItem('jumpUrl', to.path);
    next({
      path: '/login'
    })
  }

})

axios.interceptors.request.use(config => { // 这里的config包含每次请求的内容
  //在每次请求的header里面加上token
  //判断状态码
  config.validateStatus = status => {
    //status 在200-500之间才不会return
    return status >= 200 && status <= 500;
  };


  config.headers.token = token;

  return config;
}, function (err) {
  return Promise.reject(err);
});

axios.interceptors.response.use(response => {
  // switch (response.status) {
  //   case 401:
  //     alert(3)
  //       // window.location.href = changeUrl + 'login'
  //       router.push({path: 'login'});//跳转
  //     break;
  // }
  if (response.status == 401) {
    // alert(401)
    router.push({
      path: 'login'
    }); //跳转
    return
  }
  return response;
}, error => {

  return Promise.reject(error);
});


Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
