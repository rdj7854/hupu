import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

// const MainPage = ()=>import('@/pages/Main');


// Vue切换路由时报错Uncaught (in promise) NavigationDuplicated {_name: "NavigationDuplicated"}解决方法
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path:'/',
      component:()=>import('@/pages/Main'),
      children:[
        {
          path: "home",
          // component: resolve => require(["@/components/Home"], resolve)
          component:()=>import('@/components/Home')
        },
        {
          path: "banner",
          component: resolve => require(["@/components/Banner"], resolve)
        },
        {
          path: "news",
          component: resolve => require(["@/components/News"], resolve)
        },
        {
          path: "newscontent/:id",
          component: resolve => require(["@/components/NewsContent"], resolve)
        },
        {
          path: "shop",
          component: resolve => require(["@/components/Shop"], resolve)
        },        
      ]
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
      path:'/my',
      component: resolve => require(["@/pages/My"], resolve)
    },
    {
      path:'/search',
      component: resolve => require(["@/pages/Search"], resolve)
    },
    {
      path:'/shopcontent',
      component: resolve => require(["@/pages/ShopContent"], resolve)
    },
    {
      path: "*",
      redirect: "/#/banner"
    }
  ]
});
