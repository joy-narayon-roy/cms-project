<template>
	<div>
		<section v-if="data" class="wrap">
			<div class="data--preview px-2 py-3">

				<table class="preview--table">
					<thead>
						<tr>
							<th colspan="2">Data Preview</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Type</td>
							<td>{{type.toUpperCase()}}</td>
						</tr>
						<tr>
							<td>Date</td>
							<td>{{data.date}}</td>
						</tr>
						<tr>
							<td>Phone</td>
							<td><a v-bind:href="aHref()">{{data.phone}}</a></td>
						</tr>
						<tr>
							<td>Amount</td>
							<td>{{data.amount}}</td>
						</tr>
						<tr>
							<td>Entered</td>
							<td>{{getDate(data.createdAt)}}</td>
						</tr>
						<tr>
							<td>Updated</td>
							<td>
								{{(getDate(data.createdAt)==getDate(data.updatedAt))?'None':getDate(data.updatedAt)}}
							</td>
						</tr>
					</tbody>
				</table>
				<div class="mt-2 px-3">
					<button v-on:click="update=!update" style="float: right" class="btn btn-warning">Update</button>
					<div class="clear"></div>
				</div>
			</div>
		</section>
		<section v-if="update" class="wrap">
			<form action="" class="px-2 py-3 update--form" v-on:submit.prevent="submitUpdatetedData">
				<h2 class="update--form_header">
					Update Data
				</h2>
				<div class="container">
					<div class="row">
						<div class="my-1 col-sm-12 col-md-4">
							<label>Date:-</label>
							<input class="form-control" type="date" v-model:value="data.date" required="true" />
						</div>
						<div class="my-1 col-sm-12 col-md-4">
							<label for="phone">Phone :-</label>
							<input class="form-control" type="tel" list="phoneList1" required="true" v-model:value="data.phone" minlength="11" />
							<datalist id="phoneList1">
								<option v-for="item in dataList.numbers" v-bind:value="item"></option>
							</datalist>
						</div>
						<div class="my-1 col-sm-12 col-md-4">
							<label for="phone">Amount :-</label>
							<input class="form-control" type="number" v-model:value="data.amount" min="10" />
						</div>
					</div>
				</div>
				<div class="container my-3">
					<button v-if="submitLoading" class="btn btn-success disabled" type="button">Loading...</button>
					<button v-else class="btn btn-success" type="submit">Enter</button>


					<button v-if="submitLoading" class="btn btn-danger disabled" type="button">Loading...</button>
					<button v-else class="btn btn-danger" v-on:click="deleteData" type="button">Delete</button>
				</div>
			</form>
		</section>

		<data-table v-bind:tableTitle="type[0].toUpperCase()+type.slice(1)" v-bind:tableDataUrl="moreDataUrl()"></data-table>

	</div>
</template>
<style>
	.clear {
		clear: both;
	}
	.wrap {
		display: block;
		width: 100%;
		height: auto;
		box-sizing: border-box;
		padding: 0.5rem 0;
	}
	.data--preview {
		width: 90%;
		margin: 0 auto;
		border-radius: 5px;
		background: #fff;
	}
	.preview--table {
		width: 90%;
		margin: 0 auto;
	}
	.preview--table thead {
		text-align: center;
		font-size: 1.5rem;
		border-bottom: 1px solid #391755;
	}
	.preview--table tbody tr {
		border-bottom: 1px solid #391755;
	}
	.preview--table tbody tr td {
		padding: 0.3rem;
	}
	.update--form {
		width: 90%;
		margin: 0 auto;
		border-radius: 5px;
		background: #fff;
		color: rgb(94,82,127);
	}
	.update--form_header {
		text-align: center;
		font-weight: bold;
		padding: 5px 0;
		border-bottom: 1px solid #391755;
	}
</style>

<script>
	import DataTable from '../components/DataTable.vue';

	export default {
		name: 'Details',
		components: {
			'data-table': DataTable
		},
		data() {
			return {
				dataList: {
					numbers: ['01533599629',
						'01533581456',
						'01626234794',
						'01745496839',
						'01765055191',
						'01882390643',
						'01936033735']
				},
				type: this.$route.query.type.toLowerCase(),
				update: false,
				id: this.$route.query.id,
				data: null,
				loading: false,
				submitLoading: false
			}
		},
		methods: {
			aHref: function() {
				if (this.data.phone) {
					return 'tel:'+this.data.phone;
				}
			},
			moreDataUrl: function() {
				return `https://njo-cms.herokuapp.com/api/ra/${this.type}/find/phone/${this.data.phone}`;
			},
			getDate: function(dat) {

				let date;
				if (dat) {
					date = new Date(dat);
				} else {
					date = new Date();
				}
				let dd,
				mm,
				yy;

				dd = date.getDate();
				mm = date.getMonth()+1;
				yy = date.getFullYear();

				return `${yy}-${mm < 10?'0'+mm: mm}-${dd}`;
			},
			submitUpdatetedData: function(e) {
				this.submitLoading = true;
				let newData = {
					date: e.target[0].value,
					phone: e.target[1].value,
					amount: e.target[2].value
				}
				let confirmed = confirm('Want to Update?');
				if (confirmed) {
					this.$http.post(`https://njo-cms.herokuapp.com/api/ra/${this.type}/update/${this.id}`, this.data)
					.then(res=> {
						alert('Successful');
						this.update = false;
						this.submitLoading = false;
						this.dataLoadAgain();
					}, err=> {
						alert("Faild to Update.")
					})
				} else {
					this.submitLoading = false;
				}
			},
			dataLoadAgain: function() {
				this.loading = true;
				fetch(`https://njo-cms.herokuapp.com/api/ra/${this.type}/find/${this.id}`).then(res=>res.json()).then(data => {
					this.data = data;
					this.loading = false;
				}).catch(err=> {
					console.log(err);
				});
			},
			deleteData: function() {
				console.log(this.id);
			}
		},
		created () {
			this.loading = true;
			fetch(`https://njo-cms.herokuapp.com/api/ra/${this.type}/find/id/${this.id}`).then(res=>res.json()).then(data => {
				this.data = data;
				this.loading = false;
			}).catch(err=> {
				console.log(err);
			});
		}
	}
	</script>