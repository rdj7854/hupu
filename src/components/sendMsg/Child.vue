//这个是子组件
<template>
	<div>
		{{msg}}
	</div>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		// 子组件接受了父组件的数据后用props接受校验就可以使用了
		props:{
			msg:{
				type:String,
				require:true
			}
		}
	}
</script>

<style></style>