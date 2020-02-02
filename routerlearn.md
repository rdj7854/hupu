
路由的配置
安装
npm install vue-router --save

引入并用使用  
import VueRouter from "vue-router"
Vue.use(VueRouter)

1、创建路由 引入组件


2、定义路由

const routes = [
    {path:"./foo",component:Foo},
    {path:"./bar",component:Bar},
    {path:"*",redirect:'./home'}  //默认跳转链接
]

3、实例化VueRouter
const router = new VueRouter({
    mode:history  //加上这个就不是哈希模式了
    routes //简写，相当于routes ： routes
})

4、挂载路由

new Vue({
    el:"#app",
    router,
    render:h => h(App)
})


5、最后在根组件的模板上放上<router-view></router-view>
用<router-link to="/foo"></router-link>表示路由的跳转


不同路由传值  一、动态路由
            1、配置动态路由

            const route = {
                {path = "./user/:aid",component:User}
            }

            2、在对应的页面
                this.$route.params   获取动态路由的值

            二、get传值
            1、配置普通路由

            2、在对应的页面
                this.$route.query   



编程式导航
this.$router.push({path:'news'})
