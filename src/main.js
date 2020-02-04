import Vue from "vue";
import App from "./App.vue";
import Axios from "axios";
import VueAxios from "vue-axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from './router/index';

Vue.config.productionTip = false;

Vue.use(VueAxios, Axios);
Vue.use(ElementUI);

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});


