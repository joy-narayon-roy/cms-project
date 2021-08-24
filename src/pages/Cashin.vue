<template>
	<div>
		<single-cashin-form formTitle="Cashin"
			v-bind:rechargeNumberDataList="dataList"
			submitUrl="https://njo-cms.herokuapp.com/api/ra/cashin/new">
		</single-cashin-form>
		
        <data-table 
        tableTitle="Cashin" 
        tableDataUrl="https://njo-cms.herokuapp.com/api/ra/cashin">
        	
        </data-table>

	</div>
</template>
<script>
	import SingleCashinForm from '../components/SingleRechargeForm.vue';
    import DataTable from '../components/DataTable.vue';
	
	export default {
		name: "Cashin",
		components: {
			'single-cashin-form': SingleRechargeForm,
            'data-table': DataTable
		},
		data() {
			return {
				dataList: {
					numbers: ['01745496839',
					'01936033735']
				},

			}
		}
	}
	</script>