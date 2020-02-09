<template>
  <div>
    <div class="shop-box">
      <ul v-for="item in produtions" :key="item.id" >
        <li class="shop-item" @click="jumpToShopContent(item)">
          <div class="item-img">
            <img :src="item.url" class="image" />
          </div>
          <div class="shop-item-content">
            <div class="item-name">{{item.name}}</div>
            <div class="item-title">
              <span>运动篮球鞋|减震|运动风</span>
            </div>

            <ul class="item-discount-box">
              <li class="item-discount-item">新品</li>
              <li class="item-discount-item">包邮</li>
            </ul>

            <div class="item-price">{{"￥"+item.price}}</div>
            <div class="item-place">
              <span>24人付款 莆田</span>
            </div>
            <div class="item-shop">
              <span>进店</span>
              <i class="el-icon-arrow-right"></i>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <el-backtop></el-backtop>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      produtions: [],
      
    };
  },
  methods:{
    jumpToShopContent(item){
      this.$router.push({
        path:'/shopcontent',
        query:{id:item.id}
      })
    }
  },
  mounted() {
    this.produtions = this.$store.state.produtions;
  }
};
</script>

<style scoped>
.shop-box {
  display: flex;
  flex-direction: column;
}
.shop-box ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
.shop-item {
  display: flex;
  padding: 10px;
}
.item-img {
  padding-right: 20px;
  /* border-radius: 20px */
}
.shop-item-content {
  display: flex;
  flex-direction: column;
}
.item-name {
  color: #333;
  font-size: 15px;
}
.item-discount-box {
  display: flex;
  flex-direction: row;
}
.item-discount-item {
  border: 1px #ff0036 solid;
  border-radius: 3px;
  margin: 3px;
  font-size: 10px;
  color: #ff0036;
  padding: 0 4px 0 4px;
}
.item-price {
  color: #ff0036;
}
.item-title,
.item-place {
  color: #999;
  font-size: 12px;
  padding: 3px 0 3px 0;
}
.item-shop{
  color: #333;
  font-size: 12px
}
</style>