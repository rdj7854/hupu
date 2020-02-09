<template>
  <div>
    <!-- 底部导航栏 -->
    <div id="nav-tab" @click="sendStatus">
      <div
        class="nav-tab-item"
        :class="{'active':activeIndex == index}"
        v-for="(item,index) in items"
        :key="index"
        @click="show(index)"
        :style="{'width': `${activeIndex == index ? itemWidth + 10: itemWidth}%`}"
      >
        <i :class="['nav-tab-item_icon','iconfont',item.icon]"></i>
        <p class="nav-tab-item_label">{{item.label}}</p>
      </div>
      <div
        :class="{'nav-tab-overlay':isActive}"
        :style="{'left':`${activeIndex * itemWidth}%`,'width':`${itemWidth + 10}%`}"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { icon: "el-icon-chat-dot-round", label: "消息" },
        { icon: "el-icon-menu", label: "关注" },
        { icon: "el-icon-shopping-cart-full", label: "购物车" },
        { icon: "el-icon-user", label: "我的" }
      ],
      activeIndex: 0,
      isActive: false,
      dialogTableVisible: false
    };
  },
  methods: {
    show(index) {
      this.activeIndex = index;
      this.isActive = true;
      switch(index){
        case 0:this.$router.push({ path: "/login"})
        break;
        case 1:this.$router.push({ path: "/test" });
        break;
        case 3:this.$router.push({ path: "/mine" });
        break;
      }
    },
    sendStatus(){
      this.$emit('getIsActive',this.isActive)
    }
  },
  computed: {
    itemWidth() {
      return 90 / this.items.length;
    }
  },
};
</script>

<style >
#nav-tab {
  position: fixed;
  left: 0px;
  bottom: -15px;
  width: 90%;
  height: 70px;
  background-color: #fff;
  /* background-color: rgb(84, 92, 100); */
  display: flex;
  border-radius: 20px 20px 20px 20px;
  overflow: hidden;
  border: 20px solid white;
}

.nav-tab-item {
  height: 100%;
  z-index: 2;
  transition: 0.3s;
  cursor: pointer;

  /* 居中 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.nav-tab-item.active {
  width: 210px;
}

.nav-tab-item_icon {
  font-size: 24px;
  color: #4298e7;
  transition: 0.3s;
  transform: translate(0, 0px);
}

.active .nav-tab-item_icon {
  transform: translate(0, -10px);
  color: #fff;
}

.nav-tab-item_label {
  font-size: 14px;
  color: #4298e7;
  opacity: 0;
  transition: 0.3s;
  user-select: none;
  margin: 0;
  padding: 0;
}

.active .nav-tab-item_label {
  opacity: 1;
  color: #fff;
}

.nav-tab-overlay {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 110px;
  background-color: #909399;
  border-radius: 20px;
  transition: 0.3s;
}
</style>