import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

// const MainPage = ()=>import('@/pages/Main');

// Vue切换路由时报错Uncaught (in promise) NavigationDuplicated {_name: "NavigationDuplicated"}解决方法
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
const Home = () => import("@/components/Home")
const Banner = resolve => require(["@/components/Banner"], resolve)
const News = resolve => require(["@/components/News"], resolve)
const NewsContent = resolve => require(["@/components/NewsContent"], resolve)
const Shop = resolve => require(["@/components/Shop"], resolve)
const Login =  resolve => require(["@/components/Login"], resolve)
const Mine = resolve => require(["@/components/Mine"], resolve)
const My = resolve => require(["@/pages/My"], resolve)
const Search = resolve => require(["@/pages/Search"], resolve)
const ShopContent = resolve => require(["@/pages/ShopContent"], resolve)
export default new Router({
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      component: () => import("@/pages/Main"),
      children: [
        {
          path: "home",
          // component: resolve => require(["@/components/Home"], resolve)
          component: Home
        },
        {
          path: "banner",
          component: Banner
        },
        {
          path: "news",
          component: News
        },
        {
          path: "newscontent/:id",
          component: NewsContent
        },
        {
          path: "shop",
          component: Shop
        }
      ]
    },
    {
      path: "/login",
      component:Login
    },
    {
      path: "/mine",
      component: Mine
    },
    {
      path: "/my",
      component: My
    },
    {
      path: "/search",
      component: Search
    },
    {
      path: "/shopcontent",
      component: ShopContent
    },
    {
      path: "*",
      redirect: "/banner"
    }
  ]
});
