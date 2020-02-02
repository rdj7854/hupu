<template>
  <div>
    <br />
    <el-page-header @back="goBack" content="详情页面"></el-page-header>
    <br />
    <el-card class="box-card">
      <h1>{{items.title}}</h1>
      <p>{{items.source}}</p>
      <p>{{items.ptime}}</p>
    </el-card>
    <br />
    <el-card class="box-card">
      <P v-html="items.body">{{items.body}}</P>
      <br />
      <p>{{items.statement}}</p>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: {}
    };
  },
  mounted() {
    console.log(this.$route.params); //获取动态路由的值
    this.getData();
  },
  methods: {
    getData() {
      var id = this.$route.params.id;
      var api = "/api/nc/article/" + id + "/full.html";
      this.axios.get(api).then(
        response => {
          if (response !== null) {
            var res = response.data[id];
            console.log(res);
            this.items = res;
          }
        },
        err => {
          console.log(err);
        }
      );
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>