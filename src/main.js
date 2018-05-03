// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import jquery from 'jquery'
import VueResource from 'vue-resource'
import VueLazyload from 'vue-lazyload'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import feather from 'vue-icon'

Vue.use(feather, 'v-icon')
Vue.use(VueResource)
Vue.config.productionTip = false
Vue.use(VueLazyload, {
    error: require("@/assets/imgs/album-cover.jpg"),
    loading: require("@/assets/imgs/album-cover.jpg"),
    attempt: 1
  }
)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
