<template>
  <div >
    <br />
    <BaseInput @sendData="getDataFromSon"/>
    
    <!-- 内容列表 -->
    <div class="content-list" v-for="(item,index) in msg" :key="index" :msgId="item.id">
      <!-- 顶部信息栏 -->
      <div class="user-info-bar">
        <!-- 用户信息 -->
        <div class="user-info">
          <el-avatar class="avator" icon="el-icon-user-solid"></el-avatar>
          <div class="nick-name">
            <div >{{item.nickName}}</div>
            <div class="sign">@公众号*****17小时前</div>
          </div>
        </div>
        <!-- 关注按钮 -->
        <div v-if="item.followStatus">
          <el-button @click="changeFollow(index)" type="primary" round>关注</el-button>
        </div>
        <div v-else>
          <el-button type="warning" @click="open(index)">已关注</el-button>
        </div>
      </div>  

      <!-- 具体内容 -->
      <div class="content" v-html="item.text">{{item.text}}</div>

      <!-- 底部栏 -->
      <div class="content-footer">
        
        <!-- 点赞 -->
        <div class="like">
          <i class="el-icon-thumb" @click="addLikes(index)"> {{item.likes}}</i>
        </div>
        <!-- 评论 -->
        <div class="comment">
          <i class="el-icon-chat-round"> 30</i>
        </div>
        <!-- 删除按钮 -->
        <div class="delemsg">
          <i class="el-icon-delete" @click="visible = true"></i>
        </div>

        <el-dialog title="提示" :visible.sync="visible" width="80%">
          <span>确定删除内容吗？</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="visible = false">取 消</el-button>
            <el-button type="primary" @click="deleMsg(msgId)">确 定</el-button>
          </span>
        </el-dialog>

        
      </div>

      <el-divider>
        <i class="el-icon-basketball"></i>
      </el-divider>
    </div>
 <el-backtop ></el-backtop>
  </div>
</template>

<script>

const BaseInput = ()=>import('./BaseInput.vue')
export default {
  data() {
    return {
      msg: [],
      visible: false,
      msgId: "",
    };
  },
  components:{
    BaseInput
  },
 
  methods: {
    getMsg() {
      for (let i = 0; i < 6; i++) {
        this.msg.push({
          id: i,
          text: `我是技术胖，在全国新冠疫情的笼罩下，很多小伙伴不敢出门（我们小区已经戒严，每家只发一个通行证，每天只可以外出一小时），可能很多小伙伴会因此丢掉工作，技术胖作为一个还有100万房贷要还的程序员，经济上实在没办法帮助太多，但也要身体力行，抗击疫情，尽自己所能作点什么。
            所以我在这里整理了我所有的视频教程，并全部免费掉，希望小伙伴们能更简单的在家学习。疫情过后，我们一定会有更美好的明天。加油！奥里给！！！`,
          nickName: "昵称" + Math.floor(Math.random() * 100),
          likes: Math.floor(Math.random() * 10),
          followStatus: true
        });
      }
    },
    getDataFromSon(data){
      this.msg.unshift(data)
    },
    deleMsg(msgId) {
      this.visible = false;
      this.msg.splice(msgId, 1);
    },
    addLikes(index) {
      let like = this.msg[index].likes;
      this.msg[index].likes = ++like;
    },
    changeFollow(index) {
      //增加关注
      this.msg[index].followStatus = false;
    },
    open(index) {
      this.$confirm("此操作将取消关注, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message(
            {
              type: "success",
              message: "取消成功!"
            },
            (this.msg[index].followStatus = true) //取消关注
          );
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "操作已撤回"
          });
        });
    },
   
  },
  mounted() {
    this.getMsg();
  },
  
};
</script>

<style >
.content-list {
  padding: 10px;
}
.user-info-bar{
  display:flex;
  justify-content:space-between
}
.user-info{
  display: flex;
  align-items: center;
  padding-bottom:10px
}
.nick-name{
  padding-left:10px
}
.sign{
  color:#888;
  font-size:12px
}
.content{
  width:80%;
  margin:0  20px 0 45px;
  flex-wrap:wrap;
  color: #5c6066
}
.content-footer{
  height:34px;
  margin-top:20px;
  display:flex;
  justify-content:space-between;
  border-top:1px #888 solid;
  border-bottom:1px #888 solid;
  color:#888
}
.comment{
  width:33%;
  border-left:1px #888 solid;
  border-right:1px #888 solid;
  display:flex;
  justify-content:center;
  align-items:center
}
.like{
  width:33%;
  display:flex;
  align-items:center;
  justify-content:center;
}
.delemsg{
  width:33%;
  display:flex;
  align-items:center;
  justify-content:center;
}
</style>