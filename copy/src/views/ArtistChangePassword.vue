<template>
 <div>
<AppHeader></AppHeader>
  <div class="profile-dashboard-area edit">
			<div class="row justify-content-center">				
				<div class="col-12 col-lg-10">
					<div class="profile-right-section-edit">
							<form   @submit.prevent="validateBeforeSubmit">
									<div class="changr-pswd-contaoner">
										<p class="text-center">
											<img src="assets/images/password.png" class="img-fluid">
											
										</p>
										<h1 class="change-pswd-heading">Change password</h1>
                                        <div v-if="sucess" class="success-messages"> Password Changed  </div>
										<div v-if="error" class="error-messages">{{errormessage}}</div>
										<div class="form-group mb-3" :class="{'input': true, 'is-danger': errors.has('Old password') }">
												<label>Old Password</label>
												<input type="password"  v-model="oldPassword" name="Old password" v-validate="'required|min:8'" 
                   placeholder="Old Password" class="form-control">
                  	 <span class="text-danger1" v-show="errors.has('Old password')">{{ errors.first('Old password') }}</span>
											</div>
											<div class="form-group mb-3" :class="{'input': true, 'is-danger': errors.has('Password') }" >
													<label>New Password</label>
													<input type="password"  ref="password"  v-model="password" name="Password" v-validate="'required|min:8'"
                  class="form-control" placeholder="Password">
                   <span class="text-danger1" v-show="errors.has('Password')">{{ errors.first('Password') }}</span>
												</div>
												<div class="form-group mb-3" :class="{'input': true, 'is-danger': errors.has(' Confirm Password') }">
														<label>Confirm Password</label>
														<input type="password" v-model="confirmpassword" data-vv-delay="1000"  v-validate="'required|confirmed:password'" class="form-control" placeholder="Confirm Password"  name=" Confirm Password">
                                                         <span class="text-danger1" v-show="errors.has(' Confirm Password')">{{ errors.first(' Confirm Password') }}</span>
													</div>
											<div class="row justify-content-center">
													<div class="col-auto">
													<button class="btn-signin d-inline-block" type="submit">Save</button>
													<router-link :to="`/profile`" class="btn-cancel" >Cancel</router-link>
													</div>
													</div>
									</div>
								
							</form>
					</div>
					

				</div>
			</div>
		</div>
 
  </div>
</template>

<script>

import AppHeader from "@/components/AuthHeader.vue";
import {
  API
} from "@/api/api";
import axios from 'axios';
import AppFooter from "@/components/ComonFotter.vue";
import router from '../router'
export default {
  name: 'ArtistChangePassword',
  props: {
    msg: String
  },
   components: {
    AppHeader,
    AppFooter
  },
	data() {
		return {
		  logindata:{
				email:"",
				password:"",
				deviceType:"W",
				deviceId:"",
				fcmToken:""
			},
			error:false,
			errormessage:"",
			oldPassword:"",
			password:"",
			confirmpassword:"",
			sucess:false,
		  
		};
	},
	methods: {
		validateBeforeSubmit: function() {
			this. error= false;
			this. errormessage = "";
			this.$validator.validateAll().then(result => {
				if (result) {
					var head = {
      			headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
    			};
			  	API.post("update-password",  {password:this.password, oldPassword: this.oldPassword },head).then(response => {
        		if (response.data) {
							this.sucess = true;
						}
					}).catch(error => {
						this. error= true;
						this. errormessage ="Your old password is wrong";
      		});
		  	}
		  });
		},
		showmodal: function(){
			this.$store.commit("showmodal");
		}
	},
	created: function(){}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>