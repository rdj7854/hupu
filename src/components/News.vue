<template>
  <div>
    <br />
    <router-link
      :to="'/newscontent/' + item.id"
      v-for="(item,index) in news"
      :key="index"
      :index="index"
    >
      <div class="news-box">
        <p class="title">{{item.title}}</p>
        <p class="source">{{item.source}}</p>
        <el-divider>
          <i class="el-icon-basketball"></i>
        </el-divider>
      </div>

      <br />

    </router-link>
     <el-backtop ></el-backtop>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news:[]
    };
  },
  mounted(){
    this.news = this.$store.state.news
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.source {
  color: #888;
  font-size: 12px;
}
.news-box {
  padding: 0 10px 0 10px;
}

</style>