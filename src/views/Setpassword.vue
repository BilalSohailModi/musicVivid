<template>
<div class="homegb">
<AppHeader></AppHeader>
  <div class="artist-sign-up-container">
    <div class="container">
      <div class="row">
        <div class="artist-sign-up-wraper">
          <div class="forgot-header-box">
            <img src="assets/images/reset-password-img.png" alt="Image">
          </div>
          <form @submit.prevent="validateBeforeSubmit">
            <div class="otp-page-heading">

              <h1 class="otp-heading">Reset Your Password?</h1>
              <p class="otp-text">Kindly enter your new password to reset</p>
            </div>
            <div class="form-wrap">
                <label>New Password</label>
                  <div class="filds-group" :class="{'input': true, 'error': errors.has('password') }">
                      <div class="fild-icon">
                        <img src="assets/images/Password-key-icon.png" alt="icon" style="width:20px;">
                      </div>
                      <input type="password" ref="password"  v-model="password" name="password" v-validate="'required|min:8'" data-vv-delay="1000" 
                  class="filds" placeholder="Password">
                      <div class="fild-icon-right">
                        <i class="icon-warning"></i>
                        	 <span class="message" v-show="errors.has('password')">{{ errors.first('password') }}</span>
                      </div>
                    </div>
              </div>

            <div class="form-wrap">
              <label>Confirm New Password</label>
                <div class="filds-group" :class="{'input': true, 'error': errors.has('confirmpassword') }">
                    <div class="fild-icon">
                        <img src="assets/images/Password-key-icon.png" alt="icon" style="width:20px;">
                    </div>
                    <input type="password" v-model="confirmpassword" data-vv-delay="1000"  v-validate="'required|confirmed:password'" class="filds" placeholder="Confirm Password"  name="confirmpassword">
                    <div class="fild-icon-right">
                      <i class="icon-warning"></i>
                      	 <span class="message" v-show="errors.has('confirmpassword')">{{ errors.first('confirmpassword') }}</span>
                    </div>
                  </div>
            </div>

            

            <button class="btn-signin success_msg_btn" type="submit">Reset Password</button>
            

          </form>
        </div>
      </div>
    </div>
  </div>
   <AppFooter></AppFooter>
  </div>
</template>

<script>

import AppHeader from "@/components/UnauthHeader.vue";
import {
  API
} from "@/api/api";
import axios from 'axios';
import AppFooter from "@/components/ComonFotter.vue";
import router from '../router'
export default {
  name: 'Setpassword',
  props: {
    msg: String
  },
   components: {
    AppHeader,
    AppFooter
  },
   data() {
      return {
		  logindata:{	email:"",
			password:"",
			deviceType:"W",
			deviceId:"",
			fcmToken:""


			},
			error:false,
            errormessage:"",
           password:"",
           confirmpassword:""
		  
      };
	},
	methods: {
		validateBeforeSubmit(){
					  this. error= false;
        this. errormessage = "";
			  this.$validator.validateAll().then(result => {
          if (result) {
				
			  API.post("reset-password",  {password:this.password,accessToken: JSON.parse(localStorage.getItem("Token")) })
      .then(response => {
       
        if (response.data) {
          console.log(response.data);
                localStorage.removeItem("Token");
                  
                    window.location.href ="/password-sucess";
             
        }
      })
      .catch(error => {
      let data = error.response.data.errors;
        console.log(data);
        this. error= true;
        this. errormessage = data[0].msg;
       
      });
				  
               
		  }
		  });
		},
		showmodal(){
			this.$store.commit("showmodal");
		}
	},
	created(){


	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>