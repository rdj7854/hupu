<template>
  <div>
    <div @click="isShare = false">
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
          <div class="good-info-title-share" @click.stop="share">
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
      <van-popup
        v-model="showDiscountDialog"
        round
        position="bottom"
        style="height: 80%; padding-top: 4px;"
      >
        <van-coupon-list
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          :disabled-coupons="disabledCoupons"
          @change="onChange"
          @exchange="onExchange"
        />
      </van-popup>
      <!--  选择尺码弹窗-->
      <el-drawer :visible.sync="showChooseDialog" :with-header="false" direction="btt" size="70%">
        <div class="prodution-header-box">
          <div class="prodution-header">
            <div class="prodution-img">
              <img :src="prodution.url" width="100px" />
            </div>
            <div class="prodution-info">
              <div class="prodution-price">{{'￥ '+prodution.price}}</div>
              <div class="prodution-num">{{'库存'+prodution.num+'件'}}</div>
              <div class="prodution-choose">选择 鞋码 颜色分类</div>
            </div>
          </div>
          <div class="prodution-close" @click=" showChooseDialog = false">
            <i class="el-icon-circle-close"></i>
          </div>
        </div>
        <div class="divier">
          <span>鞋码</span>
        </div>
        <div class="prodution-size-box">
          <ul class="prodution-size-wrap">
            <li
              v-for="(item,index) in produtionSizeList"
              :key="index"
              class="prodution-size-item"
              :class="{'active ': choosedIndex ===index}"
              @click="choosedIndex =index"
            >{{item.ChinaSize}} {{item.long+'MM'}} - {{'US'+item.USAsize}}</li>
          </ul>
        </div>
        <div class="divier"></div>
        <div class="prodution-num-confirm">
          <span>购买数量</span>
          <van-stepper v-model="produtionConfrimNum" />
        </div>
        <van-submit-bar
          :price="prodution.price*100*produtionConfrimNum"
          button-text="提交订单"
          @submit="onSubmit"
        />
      </el-drawer>
    </div>
    <vue-native-share
      class="native-share"
      v-show="isShare"
      :shareMenu="shareMenu"
      :config="config"
    />
  </div>
</template>

<script>
import vueNativeShare from "vue-native-share";
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
    return {
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showDiscountDialog: false,
      showChooseDialog: false,
      produtionSizeList: [],
      produtionConfrimNum: 1,
      choosedIndex: "",
      isShare: false,
      shareMenu: [0, 1, 2, 3, 4, 5],
      config: {
        title: "分享标题",
        desc: "描述",
        img: "图片地址",
        img_title: "图片标题",
        link: "当前链接",
        success: () => {
          console.log("success");
        }, //成功回调
        cancel: () => {
          console.log("cancel");
        } //取消回调
      }
    };
  },
  props: {
    prodution: Object,
    openChooseDialog: Boolean
  },
  components: {
    vueNativeShare
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
    share() {
      this.isShare = !this.isShare;
    },
    onSubmit() {
      if (this.choosedIndex !== "") {
        const loading = this.$loading({
          lock: true,
          text: "Loading",
          spinner: "el-icon-loading",
          background: "rgba(0, 0, 0, 0.7)"
        });
        setTimeout(() => {
          loading.close();
          this.showChooseDialog = false;
          Toast.success("提交订单成功");
        }, 2000);
      } else {
        Toast.fail("选择  鞋码颜色分类");
      }
    }
  },
  mounted() {
    console.log(this.prodution);
    console.log(this.openChooseDialog);
    for (let i = 0; i < 11; i++) {
      this.produtionSizeList.push({
        ChinaSize: 34 + i,
        long: 210 + 5 * i,
        USAsize: 2.5 + 0.5 * i
      });
    }
  },
  watch: {
    openChooseDialog() {
      this.showChooseDialog = this.openChooseDialog;
    },
    showChooseDialog() {
      if (this.showChooseDialog == false) {
        this.$emit("changeOpenChooseDialogStatus", this.showChooseDialog);
      }
    }
  }
};
</script>

<style scoped>
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
.prodution-header-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
}
.prodution-header-box .prodution-close {
  padding: 10px;
  font-size: 25px;
  color: #5c6066;
}
.prodution-header {
  display: flex;
  align-items: center;
}

.prodution-info {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
.prodution-price {
  color: #ff0036;
  font-size: 20px;
}
.prodution-num {
  color: #ccc;
  font-size: 15px;
  padding: 2px;
}
.prodution-choose {
  color: #333;
  font-size: 15px;
}
.prodution-size-box {
  font-size: 12px;
  padding-left: 5px;
  margin-bottom: 10px;
}
.prodution-size-wrap {
  display: flex;
  flex-wrap: wrap;
}
.prodution-size-item {
  padding: 5px;
  margin: 3px;
  background-color: #ebebeb;
  color: #333;
  border-radius: 10px;
}
.active {
  padding: 5px;
  color: #ff0036;
  margin: 3px;
  border: 1px solid #ff0036;
  background: #fff;
}
.divier {
  color: #333;
  font-size: 16px;
  padding: 10px;
  border-top: 1px solid #ebebeb;
}
.prodution-num-confirm {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  font-size: 15px;
}
.native-share {
  position: fixed;
  width: 100%;
  bottom: 5px;
  background-color: #fff;
  z-index: 10;
}
</style>
