<template>
  <div> 
    <HeaderMy />
    <!-- <div class="header">
      <i class="el-icon-arrow-left"></i>
      <i class="el-icon-shopping-cart-full"></i>
    </div> -->
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    
  </div>
</template>

<script>
const HeaderMy =()=>import('@/components/HeaderMy')
export default {
  data(){
    return{

    }
  },
  created(){
    console.log(this.$route.query.id)
  },
  components:{
      HeaderMy
  }

}
</script>
<style scoped>

</style>
