<template>
	<section>
		<h1 v-pgdir="myName">Play Ground {{name}}</h1>
	</section>
</template>
<style>

</style>
<script>
	export default {
		name: 'Play_Ground',
		props:{
			name:{
				type:String,
				default:'Vue.js'
			}
		},
		created () {},
		data() {
			
			return {
				myName: 'Vue.js'
			}
		},
		methods: {}
	}
	</script>