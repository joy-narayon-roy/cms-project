<template>
    <section class="wrap">
        <div class="py-3 px-2 data--form">
            <h2 class="data-form_header">Multiple Recharge Form</h2>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Number</th>
                    <th scope="col">Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="data in datas">
                    <td><input type="date" class="form-control" v-model:value="data.date" /></td>
                    <td>
                        <input v-on:change="autoSetAmount" type="tel" list="numberList" class="form-control" v-model:value="data.number" />
                        <datalist id="numberList">
                            <option v-for="number in dataList.numbers" v-bind:value="number">{{number}}</option>
                        </datalist>
                    </td>
                    <td><input type="number" class="form-control" v-model:value="data.amount" /></td>
                </tr>
            </tbody>
        </table>
            
        <div class="">

            <button class="btn btn-primary" v-on:click="addRow" type="button"><i class="fa fa-plus"></i></button>
            <button class="btn btn-warning text-light" v-on:click="copyRow" type="button"><i class="fa fa-copy"></i></button>
            <button class="btn btn-danger" v-on:click="removeRow" type="reset"><i class="fa fa-trash-alt"></i></button>
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
</style>
<script>
    export default {
        name: 'Data Table',
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
                
            }
        },
        created(){
            
        }
    }
    </script>