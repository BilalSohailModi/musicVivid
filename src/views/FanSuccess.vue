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
									<p class="msg-text">Your application has been successfully submitted.</p>
									<button class="btn-signin success_msg_btn" @click="loginPage()">Please login</button>
									<!-- <a href="/login" class="btn-signin success_msg_btn" type="button">Please login</a> -->
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
import router from '../router'
export default {
  name: 'FanSuccess',
  props: {
    msg: String
  },
  components: {
     AppHeader,
  AppFooter,
	},
	methods:{
	  loginPage() {
			router.push({name: "login" });
		}
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
