<template>
	<section class="wrap">
		<div class="py-3 px-2 data--form">
			<h2 class="data--form_header">Multiple {{formTitle}} Form</h2>

			<form v-show="!response.show" class="data--form_table" v-on:submit.prevent="submitForm">
				<div v-for="(data,index) in datas" class="table-row" v-bind:data-index="index">

					<input v-bind:disabled="loading" type="date" class="table-row-cell" v-model:value="data.date" required="true" />

					<input v-bind:disabled="loading" type="tel" class="table-row-cell" minlength="11" maxlength="11" required="true" v-on:input="autoSetAmount" list="phoneList" v-model:value="data.phone" />
					<datalist id="phoneList">
						<option v-for="item in dataList.numbers" v-bind:value="item"></option>
					</datalist>

					<input v-bind:disabled="loading" type="number" min="10" class="table-row-cell" v-model:value="data.amount" required="true" />
				</div>
				<div class="mt-3 data--form_control">
					<button v-if="loading" type="submit" class="btn btn-success disabled">Loading...</button>
					<button v-else type="submit" class="btn btn-success">Submit</button>
					<div class="data--form_control-ex">
						<button v-bind:disabled="loading" class="btn btn-primary" v-on:click="addRow" type="button"><i class="fa fa-plus"></i></button>
						<button v-bind:disabled="loading" class="btn btn-warning text-white" v-on:click="copyRow" type="button"><i class="fa fa-copy"></i></button>
						<button v-bind:disabled="loading" class="btn btn-danger" v-on:click="removeRow" type="button"><i class="fa fa-trash-alt"></i></button>
					</div>
				</div>
			</form>

			<!--Preview-->
			<div v-show="response.show" class="data--preview-multi">
				<div v-if="response.status>=200 && response.status<400" class="alert alert-success text-center">
					Successfully Saved!
				</div>
				<div v-if="response.status>=400" class="alert alert-danger text-center">
					{{response.body.message}}
				</div>
				<div v-if="response.status===0" class="alert alert-danger text-center">
					Failed to save.
				</div>
				<table v-if="response.status>=200 && response.status<400" class="table border rounded text-center" border="0">
					<thead>
						<tr>
							<th>Date</th>
							<th>Amount</th>
							<th>Phone</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="item in response.body">
							<td>{{item.date}}</td>
							<td>{{item.phone}}</td>
							<td>{{item.amount}}</td>
						</tr>

					</tbody>
				</table>
				<div class="">
					<button v-on:click="closePreview" class="float-right btn btn-danger">Close</button>
					<div class="clear"></div>
				</div>
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
	.data--form {
		width: 90%;
		margin: 0 auto;
		border-radius: 5px;
		background: #fff;
		color: rgb(94,82,127);
	}
	.data--form_header {
		text-align: center;
		font-weight: bold;
		padding: 5px 0;
		border-bottom: 1px solid #391755;
	}
	.data--form_table {
		width: 100%;
		height: auto;
		box-sizing: border-box;
		margin: 10px auto;
	}
	.data--form_table .table-row {
		height: auto;
		width: 100%;
		display: flex;
		justify-content: center;
		padding: 0;
		margin: 0;
		border-radius: 5px;
	}
	.data--form_table .table-row .table-row-cell {
		display: block;
		height: auto;
		width: 100%;
		background: #fff;
		outline: none;
		border: 1px solid #bcbdbd;
		padding: 0.25rem 0.5rem;
		font-size: 1.1rem;
		appearance: none;
	}
	.data--form_table .table-row .table-row-cell::-webkit-calendar-picker-indicator {
		height: 0;
		width: 0;
		margin: 0;
		padding: 0;
		display: none;
		opacity: 0;
	}
	.data--form_table .table-row .table-row-cell:first-child {
		border-radius: 5px 0 0 5px;

	}
	.data--form_table .table-row .table-row-cell:last-child {
		border-radius: 0 5px 5px 0;
		width: 30%;
	}

	.data--form_control {
		height: auto;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
</style>
<script>
	import {
		submittedReloadEvent
	} from '../main.js'

	export default {
		name: 'DataInputTable',
		props: {
			formTitle: {
				type: String,
				required: true
			},
			submitUrl: {
				type: String,
				required: true
			},
			dataList: {
				type: Object,
				required: true
			}
		},
		data() {
			return {
				datas: [{
					date: '',
					phone: '',
					amount: 0
				}],
				response: {
					show: false,
					status: NaN,
					body: null
				},
				loading: false
			}
		},
		methods: {
			submitForm: function() {
				this.loading = true;
				this.submitData();
			},
			submitData: function () {
				let headers = {
					datatype: 'multiple'
				}
				this.$http.post(this.submitUrl, this.datas, {
					headers
				}).then(res=> {
					this.response.body = res.body;
					this.response.status = res.status;
					this.response.show = true;
					this.loading = false;
					this.datas = [{
						date: '',
						phone: '',
						amount: 0,
					}];
					submittedReloadEvent.$emit('refreshData', 'None')
				}, err=> {
					alert('Faild');
					this.response.status = err.status;
					this.response.body = err.body;
					this.response.show = true;
					this.loading = false;
				})
			},
			closePreview: function() {
				this.response = {
					show: false,
					status: NaN,
					body: null
				};
			},
			addRow: function () {
				this.datas.push({
					date: '',
					phone: '',
					amount: 0
				})
			},
			removeRow: function () {
				if (this.datas.length > 1) {
					this.datas.pop();
				}
			},
			copyRow: function() {
				this.datas.push(this.datas[this.datas.length-1])
			},
			autoSetAmount: function(e) {
				let dataIndex = e.target.parentElement.dataset.index;
				let inputData = e.target.value;

				if (inputData === "01745496839") {
					this.datas[dataIndex].amount = 10;
				} else if (inputData === "01533581456")
					this.datas[dataIndex].amount = 40;
			}
		},
		created() {
			window.addEventListener("keypress", (e)=> {})
		}
	}
	</script>