<template>
  <div>
    <span
      class="emoji-item-common"
      :class="['emoji-'+text,isInput?'emoji-size-small':'emoji-size-large']"
      @click="emojiClick"
    ></span>
  </div>
  
</template>

<script>
export default {
  data() {
    return {};
  },
   //从父组件EmojiPanel传过来的属性
  props:[
    'text','isInput'
  ],
  methods:{
    emojiClick(){
      //提交发送这个事件和数据给父组件EmojiPanel，可以理解为在这里注册了一个事件，父组件在使用时触发，获得子组件发送过去的数据
      this.$emit('onClick',this.text)
    }
  }
};
</script>

<style scoped>
.emoji-item-common{
  float: left;
}
</style>