<template>
	<div>
		<single-recharge-data
			formTitle="Recharge"
			v-bind:rechargeNumberDataList="dataList"
			submitUrl="https://njo-cms.herokuapp.com/api/ra/recharge/new"></single-recharge-data>
        <data-table tableTitle="Recharge" tableDataUrl="https://njo-cms.herokuapp.com/api/ra/recharge"></data-table>

	</div>
</template>
<script>
	import SingleRechargeForm from '../components/SingleRechargeForm.vue';
    import DataTable from '../components/DataTable.vue';
	
	export default {
		name: "Recharge",
		components: {
			'single-recharge-data': SingleRechargeForm,
            'data-table': DataTable
		},
		data() {
			return {
				dataList: {
					numbers: ['01533599629',
						'01533581456',
						'01626234794',
						'01745496839',
						'01765055191',
						'01882390643',
						'01936033735']
				},

			}
		}
	}
	</script>