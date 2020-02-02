<template>
    <div >
        <h3>我是商品详情组件</h3>
    </div>
</template>

<script>
export default {
    mounted(){
        console.log(this.$route.query)
    }
}
</script>