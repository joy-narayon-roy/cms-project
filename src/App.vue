<template>
  <div class="container">
      <dataTable props="somedata"></dataTable>
    <h4 class="text-center py-3 border-bottom">Hi there</h4>
    <p class="text-dark">Count - {{count}}</p>
    <button v-on:click="add" class="btn btn-primary">Add</button>
    <hr />
    <table class="table" border="0">
        <tbody>
            <tr v-for="data in datas">
                <td>{{data.name}}</td>
                <td>{{data.roll}}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
    import dataTable from './components/dataTable.vue';
export default {
    
  name: 'app',
  components:{
      dataTable
  },
  data () {
    return {
        count:0,
        datas:[{
            name:'Joy',
            roll:1
        },{
            name:'Joy',
            roll:1
        },{
            name:'Joy',
            roll:1
        }]
    }
  },
  methods:{
      add:function () {
          this.count++
      }
  }
}
</script>

<style></style>