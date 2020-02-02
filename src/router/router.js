import Home from "../components/Home";
import News from "../components/News";
import NewsContent from "../components/NewsContent";
import HomeContent from "../components/HomeContent";
import Banner from '../components/Banner';
import Shop from '../components/Shop'
import Login from '../components/Login'
import Mine from '../components/Mine'
import Father from '../components/sendMsg/Father.vue';
//相当于 export default routes = [
//   { path: '/home', component: Home },
//   { path: '/news', component: News },
//   { path: '/newscontent/:id', component: NewsContent },  //配置动态路由
//   { path: '/homecontent', component:HomeContent},
//   { path:  '*',redirect: '/home'},
// ]


//2  定义路由 引入组件 暴露出去
export default [
  {
    path: "/home",
    component: Home
  },
  {
    path: "/banner",
    component: Banner
  },
  {
    path: "/news",
    component: News
  },
  {
    path: "/newscontent/:id",
    component: NewsContent
  }, //配置动态路由
  {
    path: "/homecontent",
    component: HomeContent
  },
  {
    path:'/shop',
    component:Shop
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/mine',
    component:Mine
  },
  {
    path:'/test',
    component:Father
  },
  {
    path: "*",
    redirect: "/banner"
  }
];
