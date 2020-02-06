<template>
  <div id="app"> 
      <Header />
      <!-- <ChannelBar/> -->
      <Bar />
      <router-view />
  </div>
</template>

<script>
const Bar = ()=> import('./components/Bar')
const Header = ()=>import('./components/Header')
// const ChannelBar = ()=>import('./components/ChannelBar')
export default {
  components:{
    Header,
    // ChannelBar,
    Bar
  },
}
</script>

<style>
body{
  
  background-color:#f9f9f9
}
</style>
