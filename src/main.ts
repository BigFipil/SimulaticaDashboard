import Vue from "vue";
import Buefy from 'buefy'
import App from "./App.vue";
import router from "./router";
import '@/assets/style.css';
import '@/assets/style.scss';
import Vuex from 'vuex'
import { store } from '@/Store'
import { BaklavaVuePlugin } from '@baklavajs/plugin-renderer-vue'
import '@baklavajs/plugin-renderer-vue/dist/styles.css'

Vue.config.productionTip = false;
Vue.use(Buefy);
Vue.use(BaklavaVuePlugin);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
