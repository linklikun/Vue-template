import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'normalize.css/normalize.css'
import VueMathjax from 'vue-mathjax'
Vue.use(VueMathjax)

// 引入jQuery、bootstrap
import $ from 'jquery'
import 'bootstrap'

// 引入bootstrap样式
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// 全局注册 $
Vue.prototype.$ = $

// 在main.js中引入element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
