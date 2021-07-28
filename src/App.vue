<template>
    <div>
    	<play-ground-1 v-show="false" componame="Joy Roy"></play-ground-1>
        <single-recharge-data></single-recharge-data>
        <data-table tableTitle="Recharge" tableDataUrl="https://njo-cms.herokuapp.com/api/ra/recharge"></data-table>
    </div>
</template>

<script>
    import SingleRechargeForm from './components/SingleRechargeForm.vue';
    import MultipleRechargeForm from './components/MultipleRechargeForm.vue';
    import DataTable from './components/DataTable.vue';
    import PlayGround1 from './pg/pg1.vue'


    export default {
        name: 'app',
        components: {
            'single-recharge-data': SingleRechargeForm,
            'multiple-recharge-form': MultipleRechargeForm,
            'data-table': DataTable,
            'play-ground-1':PlayGround1
        },
        data () {
            return {
                dbUrl: 'https://vue-app-cf7ad-default-rtdb.firebaseio.com/'
            }
        },
        methods: {}
    }
    </script>

    <style>
@import url('https://fonts.googleapis.com/css2?family=Dosis&display=swap');

        * {
            margin: 0;
            padding: 0;
            font-family: 'Dosis', sans-serif;
            box-sizing: border-box;
        }
        body {
            color: #2c3e50;
            background: rgb(237,243,255);
        }
        h1,h2,h3,h4,h4,h5,h6 {
            font-weight: 500;
            color: #2c3e50;
        }
    </style>