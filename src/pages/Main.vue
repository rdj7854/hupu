<template>
  <div id="app"> 
      <Header />
      <Bar />
      <router-view />
  </div>
</template>

<script>
const Bar = ()=> import('@/components/Bar')
const Header = ()=>import('@/components/Header')
export default {
  components:{
    Header,
    Bar
  },    
}
</script>
<style>
body{
  background-color:#f9f9f9
}
</style>
