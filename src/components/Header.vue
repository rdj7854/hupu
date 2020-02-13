<template>
    <div class="header">
        <div class="avatar" @click="jumpToMyPage">
            <el-avatar :size='24' src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" ></el-avatar>
        </div>
        <div class="logo">
        </div>
        <div class="search" @click="jumpToMySearch">
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        jumpToMyPage(){
            this.$router.push({
                path:'/my'
            })
        },
        jumpToMySearch(){
            console.log(111)
            this.$router.push({
                path:'/search'
            })
        }
    }
}
</script>

<style scoped>
.header{
    padding: 2px 10px;
    height:45px;
    display: flex;
    justify-content:space-between;
    border-bottom: 0.5px solid #E5E5E5;
    align-items:center
}
.logo{
    width: 65px;
    height: 22px;
    background: url(https://w4.hoopchina.com.cn/images/m/icon_sprites.png) -0.5px -114.5px;
    background-repeat: no-repeat;
    background-size: 188px 185px;
}
.search{
    background: url(https://w4.hoopchina.com.cn/images/m/icon_sprites.png) -25.5px -137.5px;
    background-repeat: no-repeat;
    background-size: 188px 185px;
    width: 24px;
    height: 24px;
}
</style>