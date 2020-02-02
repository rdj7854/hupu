
// 这个是父组件
<template>
    <!-- 用v-bind绑定属性传递父组件的数据给子组件 -->
    <child :msg="message"></child>
</template>

<script>
import Child from './Child.vue';
export default {
    data(){
        return{
            message:'father-message!'
        }
    },
    components:{
        Child
    }
}
</script>