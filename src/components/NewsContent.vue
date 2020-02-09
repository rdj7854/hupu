<template>
  <div>
    <i class="el-icon-arrow-left" @click="goBack"></i>
    <h2>{{items.title}}</h2>
    <p class="source">{{items.source}}</p>
    <el-divider>
      <i class="el-icon-basketball"></i>
    </el-divider>
    <div class="news-body">
      <P v-html="items.body">{{items.body}}</P>
    </div>
    <el-backtop ></el-backtop>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: {}, 
    };
  },
  mounted() {
    const id = this.$route.params.id;
    this.items = this.$store.state.news[id];
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
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
.news-body {
  padding: 5px 10px 0 10px;
  overflow: hidden;
}
</style>