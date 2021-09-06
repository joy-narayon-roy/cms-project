<template>
	<section class="wrap">
		<form class="px-2 py-3 find--form" v-on:submit.prevent="searchData">
			<h2 class="find--form_header text-center border-bottom">Find</h2>
			<div class="input-group">
				<input ref="inp" type="text" placeholder="Please input data." class="form-control" v-model:value="findData">
				<select v-on:change="changeInputType" class="form-select" v-model:value="findBy">
					<option selected="true" value="id">Id</option>
					<option value="phone">Phone</option>
					<option value="amount">Amount</option>
					<option value="date">Date</option>
				</select>
				<button class="btn btn-outline-success" type="submit">Search</button>
			</div>
		</form>
		
		        <data-table v-if="findit" tableTitle="Recharge" v-bind:tableDataUrl="dataUrl1"></data-table>
		        <data-table v-if="findit" tableTitle="Cashin" v-bind:tableDataUrl="dataUrl2"></data-table>

	</section>
</template>
<style>
	.wrap {
		display: block;
		width: 100%;
		height: auto;
		box-sizing: border-box;
		padding: 0.5rem 0;
	}
	.find--form {
		width: 90%;
		margin: 0 auto;
		background: #fff;
		border-radius: 5px;
		color: rgb(94,82,127);
	}

</style>
<script>
import DataTable from '../components/DataTable.vue';

	export default {
		name: 'Find',
		components:{
			'data-table':DataTable
		},
		data() {
			return {
				findBy: 'id',
				findData:"",
				findit:false,
				dataUrl1:'https://njo-cms.herokuapp.com/api/ra/recharge',
				dataUrl2:'https://njo-cms.herokuapp.com/api/ra/cashin',
			}
		},
		created () {},
		methods: {
			changeInputType: function(e) {
				let {
					findBy
				} = this;
				let input = this.$refs.inp;

				if (findBy == "id") {
					input.setAttribute('type', 'text');
				} else if (findBy == "date") {
					input.setAttribute('type', 'date');
				} else if (findBy == "phone") {
					input.setAttribute('type', 'tel');
				} else if (findBy == "amount") {
					input.setAttribute('type', 'number')
				}
				this.findData == "";
			},
			searchData:function(){
				this.findit = false;
				let {findBy,findData} = this;
				this.dataUrl1 = `https://njo-cms.herokuapp.com/api/ra/recharge/find/${findBy}/${findData}`;
				this.dataUrl2 = `https://njo-cms.herokuapp.com/api/ra/cashin/find/${findBy}/${findData}`;
				this.findit = true;
			}
		}
	}
	</script>