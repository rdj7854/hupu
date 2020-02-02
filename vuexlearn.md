1、src目录创建vuex文件夹

2、在vuex文件夹新建一个 store.js

3、安装vuex
    cnpm install vuex --save

4、在刚刚创建的store.js中引入vue  引入vuex 并且use vuex

    import Vue from 'Vue'
    import Vuex from  'Vuex'

    Vue.use(Vuex)

5、定义数据
    //state 在vuex中用于存储数据
    var state = {

    }

6、定义方法
   *1、//mutations 里面放的是方法
    var mutations = {
        mutations里面的方法如果要传值要注意参数
    }
    使用：this.$store.commit( 在这触发mutation里面的方法，来修改state里面的数据 ) 



    *2、//有点类似计算属性，改变state里面的数据会触发getter里面的方法，获取新的值
    var getters = {
        computedCount :(state) => state.count*2
    }
    使用: {{this.$store.getters.computedCount}}  获取getters方法里面返回的数据

    *3、action 提交的是mutation，而不是直接的变更状态
    action可以包含任何异步操作
    通过context.commit在触发mutation里面的方法
    使用: this.$store.dispatch( 需要触发的mutations里面的方法 )

最后再实例化 vuex.store 暴露出去

    const store = new Vue.Store({
        state,
        mutations
    })

    export default store;


使用的时候 先引入 再注册

    this.$store.state   ==》 就可以使用state里面的数据 

    this.$store.commit( 在这触发mutation里面的方法，来修改state里面的数据 ) 