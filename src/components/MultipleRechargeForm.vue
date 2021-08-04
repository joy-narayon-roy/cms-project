<template>
    <section class="wrap">
        <div class="py-3 px-2 data--form">
            <h2 class="data--form_header">Multiple {{formTitle}} Form</h2>
        
        <form class="data--form_table" v-on:submit.prevent="submitForm">
        	<div v-for="(data,index) in datas" class="table-row" v-bind:data-index="index">
        		
        		<input type="date" class="table-row-cell" v-model:value="data.date" required="true" />
        		
        		<input type="tel" class="table-row-cell" minlength="11" maxlength="11" required="true" v-on:input="autoSetAmount" list="phoneList" v-model:value="data.number" />
        		<datalist id="phoneList">
        			<option v-for="item in dataList.numbers" v-bind:value="item"></option>
        		</datalist>
        		
        		<input type="number" min="10" class="table-row-cell" v-model:value="data.amount" required="true"/>
        	</div>
        <div class="mt-3 data--form_control">
        	<button type="submit" class="btn btn-success">Submit</button>
        	<div class="data--form_control-ex">
            <button ref="tableControl" class="njo-green" v-on:click="addRow" type="button"><i class="fa fa-plus"></i></button>
            <button ref=tableControl class="njo-yellow" v-on:click="copyRow" type="button"><i class="fa fa-copy"></i></button>
            <button ref="tableControl" class="njo-red" v-on:click="removeRow" type="button"><i class="fa fa-trash-alt"></i></button>
        	</div>
        </div>
        </form>
            
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
    .data--form_table{
    	width: 100%;
    	height: auto;
    	box-sizing: border-box;
    	margin: 10px auto;
    }
    .data--form_table .table-row{
    	height: auto;
    	width: 100%;
    	display: flex;
    	justify-content: center;
    	padding: 0;
    	margin: 0;
    	border-radius: 5px;
    }
    .data--form_table .table-row .table-row-cell{
    	display: block;
    	height: auto;
    	width: 100%;
    	background: #fff;
    	outline: none;
    	border: 1px solid #bcbdbd;
    	padding: 0.25rem 0.5rem;
    	font-size: 1.1rem;
    }
    .data--form_table .table-row .table-row-cell:first-child{
    	border-radius: 5px 0 0 5px;
    	
    }
    .data--form_table .table-row .table-row-cell:last-child{
    	border-radius: 0 5px 5px 0;
    	width: 30%;
    }
    
    .data--form_control{
    	height: auto;
    	width: 100%;
    	display: flex;
    	justify-content: space-between;
    }
    .data--form_control .data--form_control-ex{
    	
    }
    .data--form_control-ex button{
    	height: 40px;
    	width: 40px;
    	padding: 0.25rem 0.5rem;
    	font-size: 1.2rem;
    	border-radius: 100%;
    	outline: none;
    	border: 1px solid black;
    	background: #fff;
    }
    .data--form_control-ex button:focus{
    	background: #b3b6b7;
    	color: #fff;
    }
    
</style>
<script>
    export default {
        name: 'DataInputTable',
        props:{
        	formTitle:{
        		type:String,
        		required:true
        	}
        },
        data() {
            return {
                datas:[{
                    date:'',
                    number:'',
                    amount:0
                }],
                dataList:{
                    numbers:['01533599629','01533581456','01626234794','01745496839','01765055191','01882390643','01936033735']
                },
                time:new Date()
            }
        },
        methods:{
        	submitForm:function(){
        		console.log(this.$refs);
        	},
            addRow:function () {
                this.datas.push({
                    date:'',
                    number:'',
                    amount:0
                })
            },
            removeRow:function () {
                if(this.datas.length>1){
                    this.datas.pop();
                }
            },
            copyRow:function(){
                this.datas.push(this.datas[this.datas.length-1])
            },
            autoSetAmount:function(e){
                let dataIndex = e.target.parentElement.dataset.index;
                let inputData = e.target.value;
                
                if (inputData==="01745496839") {
                	this.datas[dataIndex].amount=10;
                }else if(inputData==="01533581456")
                this.datas[dataIndex].amount=40;
            }
        },
        created(){
            window.addEventListener("keypress",(e)=>{
            	
            })
        }
    }
    </script>