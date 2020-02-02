<template>
  <div>
    <br />
    <el-row>
      <el-col :span="12" v-for="(item,index) in list" :key="index">
        <el-card :body-style="{ padding: '5px' }">
          <img
            :src="item.img"
            class="image"
          />
          <div style="padding: 14px;">
            <span>{{item.product}}</span>
            <div class="bottom clearfix">
              <time class="time">{{ item.currentDate }}</time>
              <div class="price">{{"￥"+item.price}}</div>
              <el-button type="text" class="button" @click="buy(index)">点击购买</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- 购物车弹窗 -->
    <el-drawer
      title="快添加到购物车吧!"
      :before-close="handleClose"
      :visible.sync="dialog"
      direction="btt"
      custom-class="demo-drawer"
      ref="drawer"
      size="50%"
    >
      <div class="demo-drawer__content">
        <el-form :model="form" >
          <el-form-item label="商品名称" :label-width="formLabelWidth">
          {{order.product}}
          </el-form-item>
          <el-form-item label="商品数量" :label-width="formLabelWidth">
             <el-input-number v-model="num" @change="handleNumChange" :min="1" :max="10" label="商品数量"></el-input-number>
          </el-form-item>
          <el-form-item label="商品价格" :label-width="formLabelWidth">
            {{order.price*num}}
          </el-form-item>
        </el-form>
        <div class="demo-drawer__footer">
          <el-button @click="cancelForm">取 消</el-button>
          <el-button
            type="primary"
            @click="$refs.drawer.closeDrawer()"
            :loading="loading"
          >{{ loading ? '提交中 ...' : '确 定' }}</el-button>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      currentDate: new Date(),
      product:'好吃的汉堡',
      price: Math.floor(Math.random() * 100),
      dialog: false,
      loading: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "80px",
      timer: null,
      order:[],
      num:1
    };
  },
  methods: {
    getList() {
      for (let i = 0; i < 6; i++) {
        this.list.push({
          product:'好吃的汉堡'+Math.floor(Math.random() * 10),
          price:Math.floor(Math.random() * 100),
          currentDate:new Date(),
          img:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        });
      }
    },
    handleClose(done) {
      if (this.loading) {
        return;
      }
      this.$confirm("确定要提交订单吗？")
        .then(() => {
          this.loading = true;
          this.timer = setTimeout(() => {
            done();
            this.sendOrderData();
            // 动画关闭需要一定的时间
            setTimeout(() => {
              this.loading = false;
            }, 400);
          }, 2000);
        })
        .catch(() => {});
    },
    cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
      // this.order = [];
    },
    buy(index){
      this.dialog = true;
      this.order = this.list[index]
    },
    handleNumChange(value) {
        console.log(value);
    },
    sendOrderData(){
      console.log(this.order)
    }
  },
  created() {
    this.getList();
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