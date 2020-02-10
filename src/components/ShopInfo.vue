<template>
  <div>
    <div class="good-info-box">
      <div class="good-info-price">
        <span>￥ {{prodution.price}}</span>
        <div class="good-info-price-discount">专属优惠</div>
      </div>
      <div class="good-info-discount">
        <div class="good-info-discount-left">商品满3000减30</div>
        <div
          class="good-info-discount-right"
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          @click="showDiscountDialog = true"
        >
          领券
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <div class="good-info-title-box">
        <div class="good-info-title">
          <div class="good-info-title-small">全场正品 达人推荐 无忧退换</div>
          <div class="good-info-title-big">{{prodution.name}}</div>
        </div>
        <div class="good-info-title-share" @click="share">
          <i class="el-icon-share"></i>分享
        </div>
      </div>
      <div class="good-info-bottom">
        <span>快递0.00</span>
        <span>月销量{{prodution.sale}}</span>
        <span>福建莆田</span>
      </div>
    </div>
    <div class="divider"></div>
    <div class="good-centr" @click="showChooseDialog = true">
      <div class="good-choose-box">
        <div class="good-choose-box-left">
          <span>选择</span>
          <span>请选择颜色分类</span>
        </div>
        <i class="el-icon-arrow-right"></i>
      </div>
      <div class="good-choose-box" @click="show = true">
        <div class="good-choose-box-left">
          <span>参数</span>
          <span>品牌 耐克系列</span>
        </div>
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
    <div class="divider"></div>
    <div class="good-comment">
      <div class="good-comment-title-box">
        <div class="good-comment-title-left">宝贝评论({{prodution.commentNum}})</div>
        <div class="good-comment-title-right">
          查看全部
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
      <div class="user-info">
        <div class="user-info-avator">
          <el-avatar
            size="small"
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          ></el-avatar>
        </div>
        <div class="user-info-name">ke**24</div>
      </div>
      <div class="user-comment">红色不错，好搭配，鞋型是我想要的，穿着舒适</div>
    </div>

    <!-- 兑换券弹窗 -->
    <van-popup v-model="showDiscountDialog" round position="bottom" style="height: 80%; padding-top: 4px;">
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
    <!--  选择尺码弹窗-->
    <el-drawer :visible.sync="showChooseDialog" :with-header="true" direction="btt" size="80%">
      <div class="prodution-header">
        <div class="prodution-img">
          <img :src="prodution.url" width="100px">
        </div>
        <div class="prodution-info">
          <div class="prodution-price">{{'￥ '+prodution.price}}</div>
          <div class="prodution-num">{{'库存'+prodution.num+'件'}}</div>
        </div>
        <div>选择  鞋码  颜色分类</div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
     reason: "",  
  value: 150,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "1.5",
  unitDesc: "元"
};
import { Toast } from "vant";
export default {
  data() {
    return{
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showDiscountDialog:false,
      showChooseDialog: false
    }
  },
  props:{
    'prodution':Object
  },
  methods: {
    onChange(index) {
      this.showDiscountDialog = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      console.log(code);
      this.coupons.push(coupon);
    },
    share(){
      Toast("点击分享");
    }
  },
  mounted(){
    console.log(this.prodution)
  }
};
</script>

<style>

.good-info-price {
  color: #ff0036;
  font-size: 22px;
  display: flex;
  align-items: center;
  padding-top: 5px;
}

.good-info-price-discount {
  background-color: #fb6878;
  color: #fff;
  font-size: 12px;
  padding: 1px 3px 3px 2px;
  margin-left: 5px;
}

.good-info-discount {
  border-radius: 5px;
  color: #ff0036;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px;
  font-size: 15px;
}

.good-info-discount-left {
  background-color: #fee;
  border-radius: 5px;
  padding: 2px;
}

.good-info-title-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.good-info-title {
  display: flex;
  flex-direction: column;
}

.good-info-title-small {
  color: #cccccc;
  font-size: 0.9375rem;
  padding-left: 0.3125rem;
}

.good-info-title-big {
  color: #051b28;
  font-size: 1.25rem;
  font-weight: 500;
  padding: 5px;
}

.good-info-title-share {
  border-radius: 0.9375rem;
  padding: 0.125rem 0.375rem 0.125rem 0.375rem;
  background-color: #c8c9cc;
  color: #5c6066;
  margin-right: 0.1875rem;
}

.good-info-bottom {
  padding: 0.3125rem;
  display: flex;
  justify-content: space-between;
  color: #999999;
  font-size: 0.9375rem;
}

.divider {
  margin: 5px;
  background-color: #f2f3f5;
  height: 0.5rem;
  width: 100%;
}

.good-choose-box {
  padding: 0.3125rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.good-choose-box-left span {
  margin: 5px;
  color: #333;
}

.good-choose-box-left span:nth-child(1) {
  color: #999999;
}

.good-comment-title-box {
  padding: 0.3125rem;
  display: flex;
  justify-content: space-between;
}

.good-comment-title-right {
  color: #ff0036;
  font-size: 0.875rem;
}

.user-info {
  padding: 0.3125rem;
  display: flex;
  /* justify-content: start; */
  align-items: center;
}

.user-info-name {
  margin-left: 0.3125rem;
}

.user-comment {
  padding: 2px 2px 2px 7px;
}
</style>
