<template>
  <div>
    <br />
    <el-row>
      <el-col :span="12" v-for="item in produtions" :key="item.id" >
        <el-card :body-style="{ padding: '5px' }">
          <img
            :src="item.url"
            class="image"
          />
          <div style="padding: 14px;">
            <span>{{item.name}}</span>
            <div class="bottom clearfix">
              <div class="price">{{"￥"+item.price}}</div>
              <el-button type="text" class="button" >点击购买</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-backtop ></el-backtop>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      produtions:[],
    };
  },
  mounted() {
    this.produtions = this.$store.state.produtions
  }
};
</script>

<style>
.time {
  font-size: 13px;
  color: #999;
}
.price {
  font-size: 20px;
  color: red;
  padding: 12px 0 0 10px;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding-left: 10px;
  margin: 0 auto;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>