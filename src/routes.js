import recharge from './pages/Recharge.vue';
import cashin from './pages/Cashin.vue';
import details from './pages/Detail.vue';

export default [{
    path:'/',
    component:recharge
},{
	path:'/cashin',
	component:cashin
},{
	path:'/details',
	component:details
}];