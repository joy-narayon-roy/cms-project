import recharge from './pages/Recharge.vue';
import cashin from './pages/Cashin.vue';
import details from './pages/Detail.vue';
import find from './pages/Find.vue';
import notFound from './pages/NotFound.vue';

export default [{
    path:'/',
    redirect:'/recharge'
},{
    path:'/recharge',
    component:recharge
},{
	path:'/cashin',
	component:cashin
},{
	path:'/details',
	component:details
},{
    path:'/find',
    component:find
},{
    path:'*',
    component:notFound
}];