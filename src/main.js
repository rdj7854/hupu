import Vue from "vue";
import App from "./App.vue";
import Axios from "axios";
import VueAxios from "vue-axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from './router/index';
import VueJsonp from 'vue-jsonp'
import store from './store/'
import Vant from 'vant';
import 'vant/lib/index.css'


Vue.config.productionTip = false;

Vue.use(VueAxios, Axios);
Vue.use(ElementUI);
Vue.use(VueJsonp);
Vue.use(Vant);



new Vue({
	el: "#app",
	router,
	store,
	render: h => h(App)
});
