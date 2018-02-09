// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import { store } from './store/store'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(MuseUI)



/* eslint-disable no-new */
new Vue({
  store: store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  render: h => h(App)
})
