<template>
  <div>
    <div class="line"></div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#f9f9f9"
      text-color="#AAB3C8"
      active-text-color="#C01E2F"
    >
      <!-- 基本的导航条 -->
      <el-menu-item index="1">
        <router-link to="/banner">首页</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/news">新闻</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to="/home">社区</router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link to="/shop">装备</router-link>
      </el-menu-item>
      <!-- ＋  点击显示频道 -->
      <div class="more" @click="drawer = true" type="primary">
        <i class="el-icon-circle-plus-outline moreChannel"></i>
      </div>
    </el-menu>
    <!-- 频道抽屉显示层 -->
    <el-drawer :visible.sync="drawer" :with-header="false" :direction="direction" :size="size">
      <!-- 编辑频道 -->
      <div class="editbtn">
        <el-button
          class="channel-btn"
          type="primary"
          icon="el-icon-edit-outline"
          @click="editChannel"
        >编辑</el-button>
        <el-button @click="done" type="warning">完成</el-button>
      </div>
      <ul class="channel" v-if="isEdit">
        <li v-for="(item,index) in channel" :key="index">
          <!-- {{item}} -->
          <el-button type="info">{{item}}</el-button>
        </li>
      </ul>
      <ul class="channel" v-else>
        <li v-for="(item,index) in channel " :key="index">
          <el-button type="warning" icon="el-icon-circle-close" @click="deleChnenel(index)">{{item}}</el-button>
        </li>
      </ul>
      <el-divider class="divider">
        <i class="el-icon-mobile-phone"></i>
      </el-divider>
      <!-- 添加频道 -->
      <el-button class="channel-btn" disabled="disabled">添加频道</el-button>
      <ul class="channel" v-if="isEdit">
        <li v-for="(item,index) in channel2" :key="index">
          <!-- {{item}} -->
          <el-button type="info">{{item}}</el-button>
        </li>
      </ul>
      <ul class="channel" v-else>
        <li v-for="(item,index) in channel2 " :key="index">
          <el-button
            type="warning"
            icon="el-icon-circle-plus-outline"
            @click="addChnenel(index)"
          >{{item}}</el-button>
        </li>
      </ul>
    </el-drawer>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      drawer: false,
      direction: "btt", //频道抽屉的方向
      size: "90%", //抽屉的大小
      channel: [],
      channel2: [],
      isEdit: true,
      disabled: true
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    creactChnanel() {
      for (let i = 0; i < 9; i++) {
        this.channel.push("频道" + i);
        this.channel2.push("分类" + i);
      }
      console.log(this.channel, this.channel2);
    },
    editChannel() {
      this.isEdit = !this.isEdit;
    },
    deleChnenel(index) {
      console.log(index);
      this.channel2.push(this.channel[index]);
      this.channel.splice(index, 1);
    },
    addChnenel(index) {
      console.log(index);
      this.channel.push(this.channel2[index]);
      this.channel2.splice(index, 1);
    },
    done() {
      this.drawer = false;
      // this.$message({
      //   message: "修改成功",
      //   type: "success"
      // });
      Toast.success('修改成功');
    }
  },
  mounted() {
    this.creactChnanel();
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #fff;
}
ul {
  list-style: none;
}
.channel li {
  float: left;
  padding: 5px;
  margin-left: 5px;
}
.channel-btn {
  margin: 10px 20px 20px 45px;
}
.more {
  color: #AAB3C8;
  float: right;
  font-size: 25px;
  padding-top: 15px;
  padding-right: 20px;
}
.divider {
  display: inline-block;
  vertical-align: center;
}
</style>
   
