import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./router/router";
// import VueResource from 'Vue-resource'
import Axios from "axios";
import VueAxios from "vue-axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";



// Vue切换路由时报错Uncaught (in promise) NavigationDuplicated {_name: "NavigationDuplicated"}解决方法
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};






Vue.config.productionTip = false;

//引入vue-resource
// Vue.use(VueResource)

Vue.use(VueAxios, Axios);

Vue.use(ElementUI);

//1  引入VueRouter并使用
Vue.use(VueRouter);
//2  引入在router.js配置好的routes
//3  实例化VueRouter
const router = new VueRouter({
  routes //简写，相当于routes = routes
});

//4  挂载路由
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});


