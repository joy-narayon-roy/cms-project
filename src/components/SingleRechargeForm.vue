<template>
	<section class="wrap">
		<form v-show="!response.show" v-on:submit.prevent="subitForm" class="py-3 px-2 data--form">
			<h2 class="data-form_header">Single Recharge Form</h2>
			<div class="container">
				<div class="row">
					<div class="my-1 col-sm-12 col-md-4">
						<label>Date:-</label>
						<input class="form-control" type="date" v-model:value="rechargeData.date" />
					</div>
					<div class="my-1 col-sm-12 col-md-4">
						<label for="phone">Phone :-</label>
						<input class="form-control" type="tel" list="phoneList1" v-model:value="rechargeData.phone" v-on:input="defaultBehave" />
						<datalist id="phoneList1">
							<option v-for="item in dataList.numbers" v-bind:value="item"></option>
						</datalist>
					</div>
					<div class="my-1 col-sm-12 col-md-4">
						<label for="phone">Amount :-</label>
						<input class="form-control" type="number" v-model:value="rechargeData.amount" />
					</div>
				</div>
			</div>

			<div class="container my-3">
				<button v-if="loading" class="btn btn-success disabled" type="submit">Loading...</button>
				<button v-else class="btn btn-success" type="submit">Enter</button>
			</div>

			<div v-show="false" class="data--load border">
				<div class="loader">

				</div>
			</div>
		</form>
		<div v-show="response.show" class="py-3 px-2 data--preview">
			<div class="my-2">
				<span class="dismisBtn" v-on:click="dismisRes">
					<i class="fa fa-times"></i>
				</span>
				<div class="clear"></div>
			</div>
			<div class="data--preview_head">
				<div v-if="response.status>=200&&response.status<400" class="alert alert-success">
					Successfully Saved!
				</div>
				<div v-else-if="response.status>=400" class="alert alert-danger">
					{{response.body.message.toUpperCase()}}
				</div>
			</div>
			<div v-if="response.status<400" class="data--preview_body p-2 border rounded">
				<ul>
					<li>Date : {{response.body?response.body.date:'Not set!'}} </li>
					<li>Phone : {{response.body?response.body.phone:'Not set!'}}
					</li>
					<li>Amount : {{response.body?response.body.amount:'Not set!'}}</li>
					<li>Id : {{response.body?response.body._id:'Not set!'}}</li>
				</ul>
			</div>
			<div class="data--preview_footer my-3 px-2 d-flex justify-content-between">
				<a v-bind:href="response.body?response.body._id:null" class="btn btn-warning">Edit</a>
				<button type="button" v-on:click="dismisRes" class="btn btn-success">Close</button>
			</div>
		</div>
	</section>
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
	.data--form {
		width: 90%;
		margin: 0 auto;
		border-radius: 5px;
		background: #fff;
		color: rgb(94,82,127);
	}
	.data--preview {
		width: 90%;
		margin: 0 auto;
		border-radius: 5px;
		background: #fff;
		color: rgb(94,82,127);
	}
	.data--preview_head {}
	.data--preview_body {}
	.data--preview_body ul {
		list-style-position: inside;
		list-style-type: none;
		display: block;
		font-size: 1.2rem;
	}
	.data--preview_body ul li {
		margin: 5px auto;
		padding: 0 10px;
		border-bottom: 1px dashed green;
	}

	.dismisBtn {
		height: 30px;
		width: 30px;
		float: right;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1.3rem;
		border-radius: 100%;
	}
	.dismisBtn:hover {
		background: #d4d4d4;
	}
	.data--load {
		width: 90%;
		height: 30vh;
		margin: 0 auto;
		border-radius: 5px;
		background: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.data--load .loader {
		border: 10px dotted #f3f3f3;
		border-top: 10px solid #3498db;
		border-bottom: 10px solid green;
		border-radius: 100%;
		width: 100px;
		height: 100px;
		animation: spin2slinear infinite;
		position: relative;
	}

@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.data-form_header {
		text-align: center;
		font-weight: bold;
		padding: 5px 0;
		border-bottom: 1px solid #391755;
	}
</style>

<script type="text/javascript" charset="utf-8">
	export default {
		name: 'SingleRechargeForm',
/*
<<<<<<< HEAD
        data() {
            return {
                count: 0,
                type: 'password',
                rechargeData: {
                    date: '',
                    phone: '',
                    amount: 0,
                },
                dataList: {
                    numbers: ['01533599629',
                        '01533581456',
                        '01626234794',
                        '01745496839',
                        '01765055191',
                        '01882390643',
                        '01936033735']
                },
                response: {
                    show: false,
                    status: NaN,
                    body: null
                },

            }
        },
        methods: {
            defaultBehave: function() {
                if (this.rechargeData.phone === "01745496839") {
                    this.rechargeData.amount = 10;
                } else {
                    this.rechargeData.amount = 0;
                }
            },
            subitForm: function({target:ele}) {
                ele[3].innerHTML="Loading...";
                ele[3].classList.add('disabled')
                console.log(ele);
                let ok = this.submitData();
                console.log(ok)
            },
            submitData: function () {
                let headers = {
                    datatype: 'single'
                }
                this.$http.post('https://njo-cms.herokuapp.com/api/ra/recharge/new', this.rechargeData, {
                    headers
                }).then(res=> {
                    console.log(res);

                    this.response.body = res.body;
                    this.response.status = res.status;
                    this.response.show = true;

                    this.rechargeData = {
                        date: '',
                        phone: '',
                        amount: 0,
                    };
                }, err=> {
                    this.response.status = err.status;
                    this.response.body = err.body;
                    if(!err.status==0){
                    this.response.show = true;
                    }else{
                    this.response.show = false;
                    alert('Faild');
                    }
                })
            },
            dismisRes: function() {
                this.response = {
                    status: null,
                    body: null,
                    show: false
                }
            }
        }
    }

=======*/
		data() {
			return {
				count: 0,
				type: 'password',
				rechargeData: {
					date: '',
					phone: '',
					amount: 0,
				},
				dataList: {
					numbers: ['01533599629',
						'01533581456',
						'01626234794',
						'01745496839',
						'01765055191',
						'01882390643',
						'01936033735']
				},
				response: {
					show: false,
					status: NaN,
					body: null
				},
				loading: false,
				baseUrl: ['https://njo-cms.herokuapp.com/api/ra/recharge/new',
					'http://localhost:8081/api/ra/recharge/new']
			}
		},
		methods: {
			defaultBehave: function() {
				if (this.rechargeData.phone === "01745496839") {
					this.rechargeData.amount = 10;
				} else {
					this.rechargeData.amount = 0;
				}
			},
			subitForm: function( {
				target: ele
			}) {
				this.loading = true;
				this.submitData();
			},
			submitData: function () {
				let headers = {
					datatype: 'single'
				}
				this.$http.post(this.baseUrl[0], this.rechargeData, {
					headers
				}).then(res=> {
					this.response.body = res.body;
					this.response.status = res.status;
					this.response.show = true;
					this.loading = false;
					this.rechargeData = {
						date: '',
						phone: '',
						amount: 0,
					};
				}, err=> {
					alert('Faild');
					this.response.status = err.status;
					this.response.body = err.body;
					this.response.show = true;
					this.loading = false;
				})
			},
			dismisRes: function() {
				this.response = {
					status: null,
					body: null,
					show: false
				}
			}
		}
	}
	</script>
>>>>>>> d4b5f43022f0db4911f53b1953b5b25fb5002d36
