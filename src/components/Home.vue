<template>
  <!-- @click="isShowEmojiPanel=false" -->
  <div>
    <div @click="isShowEmojiPanel=false">
      <!-- 输入框 -->
      <div class="text-input">
        <el-input
          id="textpanel"
          type="textarea"
          :autosize="{ minRows: 3}"
          placeholder="请输入内容"
          v-model="textarea"
        ></el-input>
        <div class="clear-text" v-show="cleanable" @click="cleanText">
          <i class="el-icon-error" style="color:grey"></i>
        </div>
      </div>
      <!-- 发送栏 -->
      <div class="send">
        <el-image
          class="send-emoji"
          :src="emojiUrl"
          lazy
          @click.stop="isShowEmojiPanel=!isShowEmojiPanel"
        ></el-image>
        <div class="send-btn">
          <el-button @click="sendMsg" type="success">发送</el-button>
        </div>
      </div>

      <!-- 内容列表 -->
      <el-card class="box-card" v-for="(item,index) in msg" :key="index" :msgId="item.id">
        <!-- 用户信息 -->
        <el-row ow class="avator" type="flex" justify="space-between">
          <el-col :span="14">
            <el-row>
              <el-col :span="12">
                <el-avatar class="avator-size" icon="el-icon-user-solid"></el-avatar>
              </el-col>
              <el-col :span="12">
                <span class="nickName">{{item.nickName}}</span>
              </el-col>
            </el-row>
          </el-col>
          <el-col v-if="item.followStatus">
            <el-button @click="changeFollow(index)" class="follow" type="primary" round>关注</el-button>
          </el-col>
          <el-col v-else>
            <el-button class="follow" type="warning" @click="open(index)">已关注</el-button>
          </el-col>
        </el-row>
        <!-- 具体内容 -->
        <div v-html="item.text">{{item.text}}</div>
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

        <!-- 点赞 -->
        <div class="like">
          <i class="el-icon-thumb" @click="addLikes(index)"> {{item.likes}}</i>
        </div>
      </el-card>
    </div>

    <!-- 表情 -->
    <emoji-panel v-if="isShowEmojiPanel" @emojiClick="appendEmoji"></emoji-panel>
  </div>
</template>

<script>
import emojiPic from "../assets/images/face_logo.png";
import EmojiPanel from "./EmojiPanel.vue";
export default {
  data() {
    return {
      textarea: "",
      cleanable: false,
      msg: [],
      visible: false,
      emojiUrl: emojiPic,
      isShowEmojiPanel: false,
      msgId: ""
    };
  },
  components: {
    EmojiPanel
  },
  methods: {
    getMsg() {
      for (let i = 0; i < 3; i++) {
        this.msg.push({
          id: i,
          text: "这是第" + i + "条内容",
          nickName: "昵称" + Math.floor(Math.random() * 100),
          likes: Math.floor(Math.random() * 10),
          followStatus: true
        });
      }
    },
    cleanText() {
      this.textarea = "";
      this.cleanable = false;
    },
    sendMsg() {
      if (this.textarea) {
        this.msg.unshift({
          id: this.msg.length,
          text: this.textarea.replace(/:.*?:/g, this.emoji),
          nickName: "昵称" + Math.floor(Math.random() * 100),
          likes: Math.floor(Math.random() * 10),
          followStatus: true
        });
        this.textarea = "";
        this.cleanable = false;
      } else {
        this.warming();
      }
    },
    warming() {
      this.$message({
        message: "内容不能为空",
        type: "warning"
      });
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
    emoji(word) {
      // 生成html
      const type = word.substring(1, word.length - 1);
      return `<span class="emoji-item-common emoji-${type} emoji-size-small" ></span>`;
    },
    appendEmoji(text) {
      const el = document.getElementById("textpanel");
      this.textarea = el.value + ":" + text + ":";
    }
  },
  mounted() {
    this.getMsg();
  },
  watch: {
    textarea(newVal) {
      if (newVal.length >= 1) {
        this.cleanable = true;
      }
    }
  }
};
</script>

<style lang="scss">
.text {
  font-size: 14px;
}
.item {
  padding: 18px 0;
}
.box-card {
  width: 90%;
  margin: 0 auto;
}
.text-input {
  margin: 10px 20px 5px 20px;
  position: relative;
}
.clear-text {
  position: absolute;
  top: 5px;
  right: 10px;
}
.send {
  padding: 0 15px 10px 15px;
}
.send-emoji {
  width: 30px;
}
.send-btn {
  float: right;
  /* margin-bottom: 20px; */
}
.delemsg {
  float: right;
}
.follow {
  float: right;
}
.like {
  padding-top: 5px;
}
.emoji-item-common {
  background: url("../assets/images/emoji_sprite.png");
  // float:left;
  display: inline-block;
  &:hover {
    cursor: pointer;
  }
}
.emoji-size-small {
  // 表情大小
  zoom: 0.3;
}
.emoji-size-large {
  zoom: 0.5; // emojipanel表情大小
}
@import "../assets/css/emoji.css"; // 导入精灵图样式
</style>