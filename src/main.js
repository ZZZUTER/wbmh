import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/base.scss'
import axios from 'axios'
import VueBacktotop from './directives/backtotop'

import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk//index.css'

Vue.use(ElementUi)

Vue.config.productionTip = false

Vue.use(VueBacktotop)
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
