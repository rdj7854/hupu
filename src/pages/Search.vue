<template>
  <div> 
    <div class='header'>
        <div class="logo"></div>
        <div class="input">
            <el-input v-model="input" 
              placeholder="请输入内容" 
              clearable
              prefix-icon ="el-icon-search"      
            ></el-input>
        </div>
        <div class="cancel" v-if="!isSearchIcon">
            <p @click="goBack">取消</p>
        </div>
        <div class="search" v-else>
            <p @click="search">搜索</p>
        </div>
    </div>    
    <div class='body'>
        <div class='search-header'>
            <span>搜索历史</span>
            <i class="el-icon-delete" @click="clearHistory"></i>
        </div> 
        <div class="search-box">
          <ul  v-for="(item,index) in history" :key="index">
            <li class="search-item">
              {{item}}
            </li>
          </ul>
        </div>
    </div> 
  </div>
</template>

<script>
import { Dialog  ,Toast } from 'vant';
export default {
  data(){
    return{
      input:'',
      history:[],
      isSearchIcon:false
    }
  },
  methods:{
    search(){
      this.history.push(this.input) ;
      this.input = ''
      console.log(this.history)
      // this.isSearchIcon =!this.isSearchIcon
    },
    goBack(){
      this.$router.go(-1)
    },
    clearHistory(){
       Dialog.confirm({
      title: '确定删除吗'
      }).then(() => {
        // on confirm
     this.history = []
		Toast.success('删除成功');
      }).catch(() => {
        // on cancel
      });
     }
      
  },
  watch:{
    input(value){
      if(value.length>=1){
        this.isSearchIcon = true
      }else{
        this.isSearchIcon = false
      }

    }
  },
  mounted(){
    this.history.push('勇士状元热门','湖人总冠军','雄鹿wwe','快船666')
  }
}
</script>
<style scoped>
.header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:3px 5px 10px 5px
}
.header .logo{
    width: 65px;
    height: 22px;
    background: url(https://w4.hoopchina.com.cn/images/m/icon_sprites.png) -0.5px -114.5px;
    background-repeat: no-repeat;
    background-size: 188px 185px;
}
.input{
  width:250px
}
.cancel ,.search p{
  color:#AAB3C8
}
.search-header{
  display:flex;
  justify-content:space-between;
  padding: 5px
}
.search-header i{
  color:#888
}
.search-box{
  display:flex;
  justify-content: start;
  flex-wrap:wrap;
  align-items: center;
}
.search-box ul {
  margin:0;
}
.search-box li{
  list-style:none;
  padding:5px;
  font-size: 15px;
  color: #232931;
  border-radius: 15px;
  background: #ebebeb;
}
.search-item{
  margin:5px
}
</style>
