<template>
	<div>

		<single-cashin-form formTitle="Cashin"
			v-bind:rechargeNumberDataList="dataList"
			submitUrl="https://njo-cms.herokuapp.com/api/ra/cashin/new">
		</single-cashin-form>

		<multiple-cashin-form
			formTitle="Cashin"
			submitUrl="https://njo-cms.herokuapp.com/api/ra/recharge/new"
			v-bind:dataList="dataList">

		</multiple-cashin-form>


		<data-table
			tableTitle="Cashin"
			tableDataUrl="https://njo-cms.herokuapp.com/api/ra/cashin">

		</data-table>

	</div>
</template>
<script>
	import SingleCashinForm from '../components/SingleRechargeForm.vue';
	import MultipleCashinForm from '../components/MultipleRechargeForm.vue';
	import DataTable from '../components/DataTable.vue';

	export default {
		name: "Cashin",
		components: {
			'single-cashin-form': SingleCashinForm,
			'multiple-cashin-form': MultipleCashinForm,
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