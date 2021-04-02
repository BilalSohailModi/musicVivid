<template>
<div class="homegb">
<AppHeader></AppHeader>
  <div class="artist-sign-up-container">
    <div class="container">
      <div class="row">
        <div class="artist-sign-up-wraper">
          <div class="forgot-header-box">
            <img src="assets/images/forgot-password-image.png" alt="Image">
          </div>
          <form  @submit.prevent="validateBeforeSubmit">
            <div class="otp-page-heading">

              <h1 class="otp-heading">Forgot your password</h1>
              <p class="otp-text">We will send you an email with 
                the new password for your account</p>
           
            </div>
            <div class="filds-group" :class="{'input': true, 'error': errors.has('Email') }">
              <div class="fild-icon">
                <i class="icon-envelope"></i>
              </div>
              <input type="text" v-model="email" data-vv-delay="1000"  v-validate="'required|email'" name="Email"   class="filds" placeholder="Email">
             
              <div class="fild-icon-right">
                <i class="icon-warning"></i>
                	<span class="message" v-show="errors.has('Email')">{{ errors.first('Email') }}</span>
					 
              </div>
			  
			
            </div>
			<span v-if="error" class="text-danger3">
                {{errormessage}}
            </span>  
			
			

            

            <button class="btn-signin success_msg_btn" type="submit">Retrieve Password</button>
            <p class="resend-container">
               <router-link :to="`/login`" >
						 <a href="signin.html" class="resend-code">Back to Login</a>
						</router-link>
               
                </p>

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
  name: 'ForgotpassWord',
  props: {
    msg: String
  },
   components: {
    AppHeader,
    AppFooter
  },
   data() {
      return {
	
			error:false,
            errormessage:"",
            email:""
		  
      };
	},
	methods: {
		validateBeforeSubmit(){
					  this. error= false;
        this. errormessage = "";
			  this.$validator.validateAll().then(result => {
          if (result) {
				
			  API.post("send-otp-to-email",  {email:this.email})
      .then(response => {
       
        if (response.data) {
          console.log(response.data);
				
                    localStorage.setItem("Token",JSON.stringify(response.data.token));
                    	localStorage.setItem("email",JSON.stringify(this.email));
                    window.location.href ="/forgototp";
             
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