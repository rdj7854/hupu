<template>
    <div class="nav-box">
        <ul v-for="(item,index) in channels" :key="index">
            <li class="nav-item" >
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            channels:['']
        }
    },
    mounted(){
        this.channels = this.$store.state.channels
    }
}
</script>

<style scoped>
li{
    list-style:none
}
.nav-box{
    height:38px;
    display:flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 0.5px solid #E5E5E5;
    border-top: 0.5px solid #E5E5E5;
}
.nav-item{
    font-size: 16px;
    color: #AAB3C8;
    text-decoration: none;
    font-family: PingFangSC-Regular;
}
.nav-item li{
    list-style:none;
}
.nav-box ul{
    marigin:0;
    padding:0
}
</style>