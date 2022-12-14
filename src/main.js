import Vue from 'vue'
import App from './App.vue'

import '@/styles/index.scss' // global css

import '@/utils/element.js' // vue组件按需调用
import 'element-ui/lib/theme-chalk/index.css'

import store from './store'
import router from './router'

import './permission' // permission control

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
