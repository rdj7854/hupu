import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);


// Vue切换路由时报错Uncaught (in promise) NavigationDuplicated {_name: "NavigationDuplicated"}解决方法
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
export default new Router({
  routes: [
    {
      path: "/home",
      component: resolve => require(["@/components/Home"], resolve)
    },
    {
      path: "/banner",
      component: resolve => require(["@/components/Banner"], resolve)
    },
    {
      path: "/news",
      component: resolve => require(["@/components/News"], resolve)
    },
    {
      path: "/newscontent/:id",
      component: resolve => require(["@/components/NewsContent"], resolve)
    },
    {
      path: "/shop",
      component: resolve => require(["@/components/Shop"], resolve)
    },
    {
      path: "/login",
      component: resolve => require(["@/components/Login"], resolve)
    },
    {
      path: "/mine",
      component: resolve => require(["@/components/Mine"], resolve)
    },
    {
      path: "*",
      redirect: "/banner"
    }
  ]
});
