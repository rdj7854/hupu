<template>
  <div id="app"> 
      <Bar></Bar>
      <router-view replace></router-view>
      <!-- <NavBar class="footer" ></NavBar> -->
  </div>
</template>

<script>
import Bar from './components/Bar'
// import NavBar from './components/NavBar'
export default {
  components:{
    Bar,
    // NavBar
  },
}
</script>

<style>
</style>
