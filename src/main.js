import Vue from 'vue';
import App from './App.vue';

import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.directive('pgdir',(...arg)=>{
	console.log(arg);
	console.log(this);
})

new Vue({
  el: '#app',
  render: h => h(App)
})
