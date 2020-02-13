<template>
  <div>
    <br />
    <BaseInput @sendData="getDataFromSon" />
    <div class="divider"></div>
    <!-- 内容列表 -->
    <div class="content-list" v-for="(item,index) in msg" :key="index">
      <!-- 顶部信息栏 -->
      <div class="user-info-bar">
        <!-- 用户信息 -->
        <div class="user-info">
          <el-avatar class="avator" icon="el-icon-user-solid"></el-avatar>
          <div class="nick-name">
            <div>{{item.nickName}}</div>
            <div class="sign">@公众号*****17小时前</div>
          </div>
        </div>
        <!-- 关注按钮 -->
        <div v-if="item.followStatus">
          <el-button @click="changeFollow(index)" type="primary" round>关注</el-button>
        </div>
        <div v-else>
          <el-button type="warning" @click="openFollowDialog(index)">已关注</el-button>
        </div>
      </div>

      <!-- 具体内容 -->
      <div class="content" v-html="item.text">{{item.text}}</div>

      <!-- 底部栏 -->
      <div class="content-footer">
        <!-- 点赞 -->
        <div class="like">
          <i class="el-icon-thumb" @click="addLikes(index)"></i>
          <span>{{item.likes}}</span>
        </div>
        <span class="border">|</span>
        <!-- 删除按钮 -->
        <div class="delemsg">
          <i class="el-icon-delete" @click="openDeleDialog(index)"></i>
        </div>
      </div>

      <div class="divider"></div>
    </div>

    <el-backtop></el-backtop>
  </div>
</template>

<script>
const BaseInput = () => import("./BaseInput.vue");
import { Dialog  ,Toast } from 'vant';
export default {
  data() {
    return {
      msg: [],
    };
  },
  components: {
    BaseInput
  },

  methods: {
    getMsg() {
      for (let i = 0; i < 3; i++) {
        this.msg.push({
          id: i,
          text: `这是第${i}条信息`,
          nickName: "昵称" + Math.floor(Math.random() * 100),
          likes: Math.floor(Math.random() * 10),
          followStatus: true
        });
      }
    },
    getDataFromSon(data) {
      this.msg.unshift(data);
    },
    addLikes(index) {
      let like = this.msg[index].likes;
      this.msg[index].likes = ++like;
    },
    changeFollow(index) {
      //增加关注
      this.msg[index].followStatus = false;
    },
    openFollowDialog(index) {
      Dialog.confirm({
      title: '确定取消关注吗'
      }).then(() => {
        // on confirm
        this.msg[index].followStatus = true;
        // Notify({ type: 'success', message: '取消关注成功' });
		Toast.success('取消关注成功');
      }).catch(() => {
        // on cancel
      });
    },
    openDeleDialog(index){
      Dialog.confirm({
      title: '确定删除吗'
      }).then(() => {
        // on confirm
        // let id = item.id
        console.log(this.msg)
        this.msg.splice(index,1)
        console.log(this.msg)
		Toast.success('删除成功');
      }).catch(() => {
        // on cancel
      });
    }
  },
  
  mounted() {
    this.getMsg();
  }
};
</script>

<style >
.content-list {
  padding: 10px;
  background-color: #fff;
}
.user-info-bar {
  display: flex;
  justify-content: space-between;
}
.user-info {
  display: flex;
  align-items: center;
  padding-bottom: 10px;
}
.nick-name {
  padding-left: 10px;
}
.sign {
  color: #888;
  font-size: 12px;
}
.content {
  width: 80%;
  margin: 0 20px 0 45px;
  flex-wrap: wrap;
  color: #5c6066;
}
.content-footer {
  height: 34px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  color: #888;
  align-items: center;
}
.content-footer .border{
  color: #ebebeb
}

.comment {
  width: 33%;
  border-left: 1px #888 solid;
  border-right: 1px #888 solid;
  display: flex;
  justify-content: center;
  align-items: center;
}
.like {
  width: 33%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.like span{
  padding-left: 5px
}
.delemsg {
  width: 33%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.divider {
  margin-top: 5px;
  background-color: #f9f9f9;
  height: 0.5rem;
  width: 100%;
}
</style>