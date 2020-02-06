export default {
    //异步变更状态
   add (context) {
      context.commit('add')
    },
    asyncAdd({commit}){
        setTimeout(() => {
            commit('add')
        }, 50);
    }
}