import Vue from "vue";
import Buefy from 'buefy'
import App from "./App.vue";
import router from "./router";
import 'buefy/dist/buefy.css';
import '@/assets/style.css';
import Vuex from 'vuex'
import { store } from '@/Store'

Vue.config.productionTip = false;
Vue.use(Buefy);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
