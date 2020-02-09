<template>
  <div>
    <br />
    <el-carousel :interval="4000" type="card" height="300px">
      <el-carousel-item v-for="item in imgs" :key="item.id">
        <img :src="item.url" height="300px" class="image" cover/>
      </el-carousel-item>
    </el-carousel>
    <br />
    <el-collapse v-for="item in data" :key="item.id">
      <el-collapse-item :title="item.title" class="title">
        <p>{{item.source}}</p>
        <h2>{{item.time}}</h2>
        <h2 v-html="item.body">{{item.body}}</h2>
      </el-collapse-item>
    </el-collapse>
    {{count}}
    <button @click="addNum"></button>
    <el-backtop ></el-backtop>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs:[],
      data:[]
    };
  },
  computed:{
    count(){
      return this.$store.state.count
    },
   
  },
  methods:{
    addNum(){
      this.$store.dispatch('asyncAdd')
      console.log(this.data)
    }
  },
  mounted(){
    this.data = this.$store.state.bannerNews;
    this.imgs = this.$store.state.bannerImgs
  }
 
};
</script>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>