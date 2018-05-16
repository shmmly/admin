// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//vuex
import store from './store'



//引入iview
import iView from 'iview';
import 'iview/dist/styles/iview.css';
//引入font-awesome
import 'font-awesome/css/font-awesome.css'

Vue.use(iView);
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
