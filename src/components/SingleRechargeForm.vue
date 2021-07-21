<template>
    <section class="container my-3 wrap">
        <form v-on:submit.prevent="subitForm" class="data-form">
            <h2 class="data-form_header">Single Recharge Form</h2>
            <div class="data-form_body">
                <div class="my-1 col-sm-12 col-md-4 data-form_body-group">
                    <label>Date:-</label>
                    <input class="form-control" type="date" v-model:value="rechargeData.date" />
                    <p class="data-form_body-group_feedback"><small>Some text.</small></p>
                </div>
                
                <div class="my-q col-sm-12 col-md-4 data-form_body-group">
                    <label for="phone">Phone :-</label>
                    <input class="form-control" type="tel" v-model:value="rechargeData.phone" />
                </div>
                <div class="my-1 col-sm-12 col-md-4 data-form_body-group">
                    <label for="phone">Amount :-</label>
                    <input class="form-control" type="number" v-model:value="rechargeData.amount" />
                </div>
            </div>
            <div class="data-form_footer">
                <button class="mx-3 btn btn-success" type="submit">Enter</button>
            </div>
        </form>
    </section>
</template>

<style>
    .wrap {
        width: 100%;
        height: auto;
        box-sizing: border-box;
        padding: 0.5rem 0;
    }
    .data-form {
        width: 90%;
        margin: 0 auto;
        padding: 1rem;
        border-radius: 5px;
        background: #fff;
        color: rgb(94,82,127);
    }
    .data-form_header {
        text-align: center;
        font-weight: bold;
        padding: 5px 0;
        border-bottom: 1px solid #391755;
    }
    .data-form_body{
        height: auto;
        width: 100%;
        margin: 10px auto;
        display: flex;
        box-sizing: border-box;
        flex-flow: column;
    }
    .btn{
        display: inline-block;
        border: none;
        padding: 0.375rem 0.75rem;
        border-radius: 5px;
        border: 1px solid #fff;
        font-size: 1.1rem;
        overflow: visible;
    }
    .btn:focus{
        outline: none;
        background: #fff;
        border: 0px solid black;
        box-shadow: rgba(0,123,255,0.25) 0 0 0 0.2rem;
        outline: 0;
    }
    .data-form_body-group{
        height: auto;
        width: 100%;
        margin: 5px auto;
    }
    .data-form_body-group label{
        font-size: 1.2rem;
        line-height: 1.5;
        font-weight: 600;
    }
    .data-form_body-group input{
        display: inline-block;
        width: 100%;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        outline: none;
        border-radius: 0.25rem;
        border: 1px solid #cfd0d0;
        word-spacing: 0.98rem;
        letter-spacing: 3px;
        line-height: 1.5;
        background: #fff;
        margin: 0.25rem;
        transition-duration: 0.5s;
        transition-property: all;
    }
    .data-form_body-group input:focus{
        border: 1px solid rgba(0,123,255,0.25);
        box-shadow: rgba(0,123,255,0.25) 0 0 0 0.25rem;
        outline: none;
    }
    .data-form_body-group .data-form_body-group_feedback{
        border: 1px solid red;
        width: 100%;
        margin: 0px auto;
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
                }
            }
        },
        methods: {
            subitForm: function() {
                console.log(this.rechargeData)
            }
        }
    }
    </script>