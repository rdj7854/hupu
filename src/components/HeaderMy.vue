<template>
  <div>
    <div class="header">
      <div class="back">
        <i @click="goBack" class="el-icon-arrow-left"></i>
      </div>
      <div class="logo">
        <img style="width: 83px" src="https://passport.hupu.com/m/2/images/logo.png" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    }
};
</script>

<style scoped>
.header{
  padding-top:5px;
  height: 40px
}
.header::after{
    display: block;
    content: '';
    clear: both;
}
.back {
  font-size: 20px;
  color: #c01e2f;
  float: left;
}

.logo{
   display: flex;
   justify-content: center;
   align-items: center;
}


</style>