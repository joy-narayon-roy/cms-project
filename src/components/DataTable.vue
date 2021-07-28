<template>
    <section class="wrap">
        <div class="py-3 px-2 data--table">
            <h2 class="data--table_header">{{tableTitle}} Table</h2>
            <table class="data--table_table" border="0">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Phone</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in tableDatas" v-bind:data-id="item._id">
                        <td>{{item.date}}</td>
                        <td>{{item.phone}}</td>
                        <td>{{item.amount}}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total:{{tableDatasLength}}</td>
                        <td></td>
                        <td>5000tk</td>
                    </tr>
                </tfoot>
            </table>
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
    .data--table_table thead tr th,.data--table_table tbody tr td{
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
    .data--table_table tfoot{
        background: #148395;
        color: #fff;
    }
    .data--table_table tfoot tr td{
        padding: 5px 0;
        font-weight: bold;
    }
</style>
<script>
    export default {
        name: 'Data_Table',
        props: {
        	tableTitle:{
        		type:String,
        		default:'Data'
        	},
        	tableDataUrl:{
        		type:String,
        		required: true
        	}
        },
        created(){
        	fetch(this.tableDataUrl).then(res=>{
        		return res.json()
        		}).then(data=>{
        			console.log(data);
        			this.tableDatasLength=datas.length;
        			this.tableDatas=data;
        		}).catch(err=>{
        			alert('Failed')
        		this.tableDatas=null;
        	})
        	
        	/*this.$http(`${this.tableDataUrl}`).then(res=>{
        		console.log('Res');
        		console.log(res);
        	},err=>{
        		console.log('Error');
        		console.log(err);
        	});*/
        },
        data() {
        	return {
        		tableDatasLength:0,
        		tableDatas:[]
        	}
        },
        methods: {}
    }
    </script>