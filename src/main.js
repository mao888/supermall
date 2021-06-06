import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'   //引入store
// import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

// Vue.use(VueLazyLoad, {
//   preLoad: 1,
//   loading: require('assets/img/common/placeholder.png')
// })

new Vue({
  render: h => h(App),
  store,    //使用store
  router    //使用路由
}).$mount('#app')