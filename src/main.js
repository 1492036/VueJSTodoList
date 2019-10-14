import Vue from 'vue'
import App from './App.vue'
import router from './router'
import moment from 'moment'
import VueMoentJS from 'vue-momentjs'


Vue.prototype.$EventBus = new Vue();
Vue.use(VueMoentJS, moment);


new Vue({
  el: '#app',
  render: h => h(App)
})


