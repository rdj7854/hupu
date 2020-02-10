<template>
  <div>
    <HeaderMy />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
       <van-swipe-item  :key = "url">
         <img :src="url" width="50%"/> 
       </van-swipe-item>
    </van-swipe>
    <ShopInfo :prodution="prodution"/>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
      <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
      <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
    </van-goods-action>
  </div>
</template>

<script>
const HeaderMy = () => import("@/components/HeaderMy");
const ShopInfo = () => import("@/components/ShopInfo");
import { Toast } from "vant";

export default {
  data() {
    return {
      prodution:{},
      url:''
    };
  },
  components: {
    HeaderMy,
    ShopInfo
  },
  methods: {
    onClickIcon() {
      Toast("点击图标");
    },
    onClickButton() {
      Toast("点击了按钮");
    }
  },
  created() {
    console.log(this.$route.query.id);
    const id = this.$route.query.id
    this.prodution = this.$store.state.produtions[id]
    this.url = this.prodution.url
    this.prodution.sale = Math.floor(Math.random()*100)
    this.prodution.num = Math.floor(Math.random()*1000)
    this.prodution.commentNum = Math.floor(Math.random()*10)
    console.log(this.prodution)
  }
};
</script>
<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 100px;
  text-align: center;
  background-color: #fff;
}
</style>
