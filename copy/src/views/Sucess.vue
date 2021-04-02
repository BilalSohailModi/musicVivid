<template>
<div>
    <AppHeader></AppHeader>
 <div class="sign-up-success">
			<div class="container">
				<div class="row">
						<div class="sign-up-msn-wraper">
								<div class="icon-bar">
											<i class="icon-check-mark"></i>
								</div>
								<div class="success_msg_section">
									<h1 class="msg_heading">Signup Successful</h1>
									<p class="msg-text">Your application has been successfully submitted. We will review your account. We have a limited number of Artist at any given time. We will send you an email about your account status.</p>
									<!-- <a href="/login" class="btn-signin success_msg_btn" type="button">Please login</a> -->
									 <button 
									 @click="loginPage()" 
									 type="button" 
									 class="btn-signin success_msg_btn">Please login</button>
								</div>

						</div>
				</div>
			</div>
		</div>
        <AppFooter></AppFooter>
        </div>
</template>

<script>
import AppHeader from "@/components/UnauthHeader.vue";
import AppFooter from "@/components/ComonFotter.vue";
export default {
  name: 'Sucess',
  props: {
    msg: String
  },
  components: {
     AppHeader,
  AppFooter,
	},
	methods:{
	  loginPage(){
			window.location.href = '/login';
	  },
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
