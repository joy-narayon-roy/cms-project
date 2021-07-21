<template>
  <div>
      <single-recharge-data></single-recharge-data>
      <data-table></data-table>
      <h1>Almost</h1>
  </div>
</template>

<script>
    import dataTable from './components/dataTable.vue';
    import SingleRechargeForm from './components/SingleRechargeForm.vue';
    
    console.log(SingleRechargeForm)
    
export default {
  name: 'app',
  components:{
      'single-recharge-data':SingleRechargeForm,
      'data-table':dataTable
  },
  data () {
    return {
        
    }
  },
  methods:{
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dosis&display=swap');

    *{
        margin: 0;
        padding: 0;
        font-family: 'Dosis', sans-serif;
        box-sizing: border-box;
        color: #2c3e50;
        
    }
    body{
        background: rgb(237,243,255);
    }
    h1,h2,h3,h4,h4,h5,h6{
        font-weight:500;
    }
</style>