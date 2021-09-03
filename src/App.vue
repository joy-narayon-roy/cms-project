
<template>
	<div class="">
		<page-nav></page-nav>
		<router-view></router-view>
	</div>
</template>
<script>
    import PageNav from './components/Nav.vue';

    export default {
        name: 'app',
        components: {
        	'page-nav':PageNav,
        },
        data () {
            return {
                dbUrl: 'https://vue-app-cf7ad-default-rtdb.firebaseio.com/',
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