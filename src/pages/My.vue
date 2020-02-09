<template>
  <div>
    <HeaderMy />
    <Mine />
  </div>
</template>

<script>
const Mine = ()=> import('@/components/Mine')
const HeaderMy =()=>import('@/components/HeaderMy')
export default {

  components:{
      HeaderMy,
      Mine
  }
};
</script>

<style scoped>

</style>