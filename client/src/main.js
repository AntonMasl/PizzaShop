import Vue from 'vue'
import {BootstrapVue, IconsPlugin} from  'bootstrap-vue'
import  'bootstrap/dist/css/bootstrap.css'
import  'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/colors.scss'

Vue.use (BootstrapVue)
Vue.directive('focus', {
  // Когда привязанный элемент вставлен в DOM...
  inserted: function (el) {
    // Переключаем фокус на элемент
    el.focus()
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
