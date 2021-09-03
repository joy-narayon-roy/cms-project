<template>
	<nav class="nav">
		<div class="nav--header">
			<h3 class="nav--header_brand">N.J.O</h3>
			<button v-on:click="showLink=!showLink" class="btn btn-outline-primary"><i class="fa fa-bars"></i></button>
		</div>
		<ul v-show="showLink" class="nav--ul">
			<li class="nav--ul_li">
				<router-link exact to="/recharge">
					Recharge
				</router-link>
			</li>
			<li class="nav--ul_li">
				<router-link exact to="/cashin">
					Cashin
				</router-link>
			</li>
			<li class="nav--ul_li">
				<router-link exact to="/find">
					Find
				</router-link>
			</li>
		</ul>
	</nav>
</template>
<style>
.nav{
	display: block;
	width: 100%;
	height: auto;
	background: #17caf7;
}
.nav--header{
	height: auto;
	width: 100%;
	padding: 0.25rem 0.5rem;
	display: flex;
	justify-content: space-between;
}
.nav--header .nav--header_brand{
	font-size: 2.3rem;
}
.nav--ul{
	display: block;
	width: 100%;
	padding: 5px 0;
	list-style-position: inside;
	list-style-type: none;
}
.nav--ul_li{
	display: block;
	width: 95%;
	margin: 5px auto;
}
.nav--ul_li a{
	display: block;
	width: 100%;
	border-radius: 5px;
	text-decoration: none;
	padding: 0.25rem 0.5rem;
	font-size: 1.2rem;
}
.nav--ul_li a:not(.router-link-active){
    color: #000;
    background: #83e2fa;
}

a.router-link-active{
    background: #fff;
    background: #7effc5;
}
</style>
<script>
export default{
    name:'nav',
    data(){
        return {
            showLink:false
        }
    }
}
</script>