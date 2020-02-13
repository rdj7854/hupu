<template>
  <div>
    <div class="loginbtn">
      <el-button type="warning" @click="login">马上登录</el-button>
    </div>
    <div class="bg">
      <el-image class="bg-img" :src="ballurl" lazy></el-image>
    </div>
    <el-divider>
      <i class="el-icon-mobile-phone"></i>
    </el-divider>

    <div class="list-item" v-for="(item,index) in list" :key="index">
      <i style="color:#C01E2F" :class="[item.icon]"></i>
      <span>{{item.label}}</span>
      <span class="right-icon">
        <i class="el-icon-arrow-right"></i>
      </span>
    </div>
  </div>
</template>

<script>
import ballpic from "../assets/images/ball.png";
export default {
  data() {
    return {
      ballurl: ballpic,
      list: [
        { icon: "el-icon-edit-outline", label: "我发布的" },
        { icon: "el-icon-thumb", label: "我点赞的" },
        { icon: "el-icon-shopping-cart-full", label: "我的订单" },
        { icon: "el-icon-setting", label: "我的设置" }
      ]
    };
  },
  methods: {
    login() {
      this.$router.push({ path: "/login" });
    },
    goBack() {
      this.$router.go(-1)
    }
  }
};
</script>

<style scoped>
/* 清除浮动三件套，定义在父级元素伪类 */
.bg::after {
  content: "";
  display: block;
  clear: both;
}
.bg-img {
  width: 100px;
  height: 100px;
  float: right;
}
.right-icon {
  float: right;
}
.list-item {
  font-size: 20px;
  padding: 10px;
}
.loginbtn{
  padding: 5px
}
</style>