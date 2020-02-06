<template>
  <div>
    <br/>
    <el-page-header @back="goBack" content="账户登录"></el-page-header>
    <div class="avatar">
      <el-avatar :size="70" icon="el-icon-user-solid"></el-avatar>
    </div>

    <div class="input">
      <el-input placeholder="请输入账号" v-model="userinput" clearable></el-input>
      <el-input placeholder="请输入密码" v-model="pwdinput" show-password></el-input>
    </div>

    <div class="loginbtn">
      <el-button :style="{width:100+'%',height:50+'px'}" type="primary" @click="login">登陆</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userinput: "",
      pwdinput: "",
      paw: 123,
      user: 123
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    login() {
      if (this.userinput != "" && this.pwdinput != "") {
        console.log(111);
        if (this.pwd != this.pwdinput && this.user != this.userinput) {
          this.$message({
            message: "账号密码错误",
            type: "error"
          });
        } else {
          console.log(11);
          this.loginSuccess();
        }
      } else {
        this.$message({
          message: "账号密码不能为空",
          type: "warning"
        });
      }
    },
    loginSuccess() {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      setTimeout(() => {
        loading.close();
        this.$message({
          message: "登陆成功！",
          type: "success"
        }).then(this.$router.go(-1));
      }, 2000);
    }
  }
};
</script>

<style scoped>
.avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 4rem;
}
.loginbtn {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}
</style>