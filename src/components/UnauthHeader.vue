<template>
<header class="fixed-header-wraper">
	<div class="header-wraper">
		<div class="container">
			<div class="row align-items-center justify-content-between">
				<div class="logo">
					 <router-link :to="`/`">
					 <img src="/assets/images/logo.png" alt=""></router-link>
				</div>
				<button class="btn-menu-button" type="button" @click="showmenu()">
					<i class="icon-menu-2line"></i>
				</button>
				<div class="header-right">
					<button class="btn-menu-button-close" type="button" @click="closemenu()"  >
						<i class="icon-close"></i>
					</button>	
					<div class="button-block">
					
						 <router-link :to="`/login`" class="btn btn-primary" >
						 Login
						</router-link>
				<button class="btn btn-default" type="button" id="signup" @click="showmodal()" >Sign Up</button>
						
					</div>				
					<div class="menu-box">
						<nav class="navigation">
							<ul>
								<li><router-link :to="`/albumglobalsearch`"  > Albums</router-link></li>
								<li><router-link :to="`/artistglobalsearch`"  >Artists</router-link></li>
								<li> <router-link :to="`/songglobalsearch`"  >Songs</router-link></li>
								<li><router-link :to="`/competition-work-flow`">Contest</router-link></li>
							</ul>
						</nav>
					</div>
					
				</div>
			</div>
		</div>
		<div class="modal-mask bg-mask d-none">
		<div class="modal-dialog modal-lg  modal-dialog-centered">
			<div class="modal-content">
					<div class="popup-header text-center">
							<img src="assets/images/logo2.png" alt="">
							<h3 class="title">New to MiV?</h3>
							
							<a href="javascript:;" class="popup-close" data-dismiss="modal" @click="hidemodal" >&times;</a>
						</div>
						<div class="popup-body">
							<form class="select-signup-categorys" id="idForm">
								<label for="fan" class="select-signup-category">
									<input type="radio" id="fan" value="fan" name="signupOption" @click="selectType(1)">
									<span>
										<img src="assets/images/fan-sign-up.png" alt="icon">
										
									</span>
									<span class="label">Fan Sign Up</span>
								</label>
								<label for="artist" class="select-signup-category">
									<input type="radio" id="artist" value="artist" name="signupOption" @click="selectType(2)" >
									<span>
										<img src="assets/images/artist-sign-up-img.png" alt=" ">
										
									</span>
									<span class="label">Artist Sign Up</span>
								</label>
							</form>
						</div>
				
			  </div>
			</div>  
		</div>
	</div>

	</header>
	
</template>

<script>
 import router from '../router'
export default {
  name: 'UnauthHeader',
  props: {
    msg: String
  },
  methods:{
	  selectType: function(type) {
			if(type == 1){
				router.push({
					name: "FanRegister"
				});
			} else {
				router.push({path: "/artistregister"});
			} 
	  },
	  showmodal: function() {
			this.$store.commit("showmodal");
	  },
	  hidemodal: function() {
			this.$store.commit("hidemodal");
	  },
	  showmenu: function() {
			this.$store.commit("showmenu");
	  },
	  closemenu: function() {
			this.$store.commit("closemenu");
	  }
  },
  mounted(){
		$(window).scroll(function() {
			if($(window).scrollTop() > 50) {
				$('.header-wraper').addClass("fixed-menu");
			} else {
				$('.header-wraper').removeClass("fixed-menu")
			}
		});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>