<template>
    <section class="wrap">
        <form v-on:submit.prevent="subitForm" class="py-3 px-2 data--form">
            <h2 class="data-form_header">Single Recharge Form</h2>
            <div v-show="show" class="container">
                <div class="row">
                    <div class="my-1 col-sm-12 col-md-4">
                        <label>Date:-</label>
                        <input class="form-control" type="date" v-model:value="rechargeData.date" />
                    </div>
                    <div class="my-1 col-sm-12 col-md-4">
                        <label for="phone">Phone :-</label>
                        <input class="form-control" type="tel" v-model:value="rechargeData.phone" />
                    </div>
                    <div class="my-1 col-sm-12 col-md-4">
                        <label for="phone">Amount :-</label>
                        <input class="form-control" type="number" v-model:value="rechargeData.amount" />
                    </div>

                </div>
            </div>
            <div v-show="show" class="container my-3">
                <button class="btn btn-success" type="submit">Enter</button>
            </div>

            <div v-show="!show" class="data--load border">
                <div class="loader">

                </div>
            </div>
        </form>
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
        animation: spin 2s linear infinite;
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
        
        data() {
            return {
                count: 0,
                rechargeData: {
                    date: '',
                    phone: '',
                    amount: 0,
                },
                show: true,
                sendUrl:'https://jsonplaceholder.typicode.com/todos/1'
            }
        },
        methods: {
            subitForm: function() {
                this.show=!this.show;
                function stopAni() {
                    this.show=!this.show;
                }
                setTimeout(stopAni.bind(this), 5000);
                this.submitData()
            },
            submitData:function () {
                this.$http.get(this.sendUrl).then(res=>{
                    console.log(res)
                }).catch(err=>{
                    console.error(err)
                })
            }
        }
    }
    </script>