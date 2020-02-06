<template>
       <!-- 输入框 -->
    <div>
        <div @click="isShowEmojiPanel=false">
            <el-card >
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
                <!-- 表情 -->
            </el-card>
        </div>
        <emoji-panel v-if="isShowEmojiPanel" @emojiClick="appendEmoji"></emoji-panel>
    </div>
</template>
<script>
import emojiPic from "../assets/images/face_logo.png";
// import EmojiPanel from "./EmojiPanel.vue";
const EmojiPanel = ()=> import('./EmojiPanel.vue')
export default {
    data(){
        return{
            msg:{},
            textarea: "",
            cleanable: false,
            emojiUrl: emojiPic,
            isShowEmojiPanel: false,
        }
    },
    components: {
        EmojiPanel
    },
    methods:{
        cleanText() {
            this.textarea = "";
            this.cleanable = false;
        },
        sendMsg() {
            if (this.textarea) {
                this.msg={
                  id: this.msg.length,
                  text: this.textarea.replace(/:.*?:/g, this.emoji),
                  nickName: "昵称" + Math.floor(Math.random() * 100),
                  likes: Math.floor(Math.random() * 10),
                  followStatus: true
                };
                this.$emit('sendData',this.msg)
                this.textarea = "";
                this.cleanable = false;
                this.msg=[]
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
    watch: {
    textarea(newVal) {
      if (newVal.length >= 1) {
        this.cleanable = true;
      }
    }
  }
}
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
  padding: 5px 15px 15px 15px;
}
.send-emoji {
  width: 30px;
}
.send-btn {
  float: right;
  /* margin-bottom: 20px; */
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