<template>
  <div id="app">
      <el-container>
        <el-header><Bar></Bar></el-header>
        <el-main><router-view ></router-view></el-main>
        <el-footer class="footer"><NavBar ></NavBar></el-footer>
      </el-container>
    
  </div>
</template>

<script>
import Bar from './components/Bar'
import NavBar from './components/NavBar'
export default {
  components:{
    Bar,
    NavBar
  },
}
</script>

<style>
</style>
