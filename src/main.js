import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from "./store";
import 'normalize.css'
// import {init} from "./util/date";
// init()
Vue.config.devtools = true;
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
