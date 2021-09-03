<template>
	<section class="wrap">
		<div class="py-3 px-2 data--table">
			<h2 class="data--table_header">{{tableTitle}} Table</h2>
			<table v-if="tableDatas" class="data--table_table" border="0">
				<thead>
					<tr>
						<th>Date</th>
						<th>Phone</th>
						<th>Amount</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item in tableDatas" v-bind:data-id="item._id" v-today="item">
						<td v-on:click="aboutThisRow" v-bind:data-id="item._id">{{item.date}}</td>
						<td v-on:click="aboutThisRow" v-bind:data-id="item._id">{{item.phone}}</td>
						<td v-on:click="aboutThisRow" v-bind:data-id="item._id">{{item.amount}}</td>
					</tr>

				</tbody>
				<tfoot>
					<tr>
						<td>Total:{{tableDatasLength()}}</td>
						<td></td>
						<td>{{totalAmount()}} tk</td>
					</tr>
				</tfoot>
			</table>
			<div v-else class="border rounded py-3 px-2 data--table_Error">
				<h4 class="alert alert-danger text-center">Data Not Found!</h4>
				<p class="text-center text-muted">
					Please insert Some Data!
				</p>
			</div>
		</div>
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
	.data--table {
		width: 90%;
		margin: 0 auto;
		border-radius: 5px;
		background: #fff;
		color: rgb(94,82,127);
	}
	.data--table_header {
		text-align: center;
		font-weight: bold;
		padding: 5px 0;
		border-bottom: 1px solid #391755;
	}
	.data--table_table {
		width: 100%;
		border-collapse: collapse;
		text-align: center;
		font-size: 1.01rem;
	}
	.data--table_table thead tr th,.data--table_table tbody tr td {
		padding: 5px 0;
	}
	.data--table_table thead {
		background: #57B3F1;
		color: #fff;
		border-radius: 5px;
	}
	.data--table_table tbody tr:nth-child(even) {
		background: #DDF0FC;
	}
	.data--table_table tbody tr:hover {
		background: #787878;
		color: #fff;
	}
	.data--table_table tfoot {
		background: #148395;
		color: #fff;
	}
	.data--table_table tfoot tr td {
		padding: 5px 0;
		font-weight: bold;
	}
	.today-data {
		color: blue;
	}
</style>
<script>
	import {
		submittedReloadEvent
	} from '../main.js';
	import Vue from 'vue'
	Vue.directive('today', {
		bind(el, binding) {
			if (binding.value.createdAt) {
				let creatDate = new Date(binding.value.createdAt);
				let todayDate = new Date();

				creatDate = creatDate.getFullYear() +'-'  + creatDate.getMonth() + '-' + creatDate.getDate();
				todayDate = todayDate.getFullYear() + '-' + todayDate.getMonth() + '-' + todayDate.getDate();
				if (creatDate == todayDate) {
					el.classList.add('today-data')
				}
			}
		}
	})
	export default {
		name: 'DataTable',
		props: {
			tableTitle: {
				type: String,
				default: 'Data'
				},
				tableDataUrl: {
					type: String,
					required: true
				}
			},
			created() {
				submittedReloadEvent.$on('refreshData',
					(arg)=> {
						this.$http.get(this.tableDataUrl).then(res=> {
							this.tableDatas = res.body;
						}, err=> {
							console.log(err);
						})
					})

				fetch(this.tableDataUrl).then(res=> {
					return res.json()
				}).then(data=> {
					this.tableDatas = data;
				}).catch(err=> {
					alert('Failed')
					console.log(err)
					this.tableDatas = false;
				})

			},
			data() {
				return {
					tableDatasLength: function() {
						return this.tableDatas.length;
					},
					totalAmount: function() {
						if (this.tableDatas.length === 0) {
							return 0;
						} else if (this.tableDatas.length === 1) {
							return this.tableDatas[0].amount;
						}
						return this.tableDatas.reduce((c, l)=> {
							return ((c.amount?c.amount: c)+l.amount)
						});
					},
					tableDatas: []
				}
			},
			methods: {
				aboutThisRow: function (e) {
					let url = new URL(location. origin+'/details');
					url.searchParams.append('type',this.tableTitle);
					url.searchParams.append('id',e.target.dataset.id);
					let link = document.createElement('a');
					link.href=url.href;
					link.click();
				}
			}
		}
	</script>