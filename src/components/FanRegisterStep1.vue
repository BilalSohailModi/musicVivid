<template>
<div class="login-section">
	<div class="container">
  	<div class="register-box">
				<!-- <div class="register-left">
					<h3 class="title">Are You Artist, <br>Want to Share Your Music</h3>
					<a href="javascript:;" class="btn-join">Join Today</a>
				</div> -->
				<div class="register-right">
					<h3 class="title">Create Account</h3>
					<p class="content"></p>
					<form class="login-filds" @submit.prevent="validateBeforeSubmit">
                        <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                  <li v-for="(error,index ) in errors" :error="error" :key="index">{{ error }}</li>
                </ul>
              </p>
						<div class="filds-group mb-20" :class="{'input': true, 'error': errors.has('Full Name') }">
							<div class="fild-icon">
								<i class="icon-user"></i>
							</div>
							<input type="text" class="filds" v-model="rgisterdata.fullName" name="Full Name" v-validate="'required'" data-vv-delay="500"
                  :class="{'input': true, '': errors.has('Full Name') }" placeholder="Name">
									
                   
							<div class="fild-icon-right">
								<i class="icon-warning"></i>
								<span class="message"  v-show="errors.has('Full Name')">{{ errors.first('Full Name') }}</span>
							</div>
						</div>
						
						<div class="filds-group mb-20" :class="{'input': true, 'error': errors.has('Password')}">
							<div class="fild-icon">
								<i class="icon-locked"></i>
							</div>
							<input type="password"  ref="password"  v-model="rgisterdata.password" name="Password" v-validate="'required|min:8'" data-vv-delay="1000" :class="{'input': true, 'is-danger': errors.has('Password') }"
                  class="filds" placeholder="Password">
							<div class="fild-icon-right">
								<i class="icon-warning"></i>
								 <span class="message" v-show="errors.has('Password')">{{ errors.first('Password') }}</span>
							</div>
						</div>

						<div class="filds-group mb-20" :class="{'input': true, 'error': errors.has('Confirm Password') }">
							<div class="fild-icon">
								<i class="icon-locked"></i>
							</div>
							<input type="password" v-model="rgisterdata.password_confirmation" data-vv-delay="1000"  v-validate="'required|confirmed:password'" class="filds" placeholder="Confirm Password"  name="Confirm Password">
                           
							<div class="fild-icon-right">
								<i class="icon-warning"></i>
								 <span class="message" v-show="errors.has('Confirm Password')">{{ errors.first('Confirm Password') }}</span>
							</div>
						</div>						
						<div class="colum-group">
							<button class="btn-signin" type="submit">
								Continue
							</button>
						</div>
						<ul class="step">
							<li class="active"></li>
							<li></li>
						</ul>
					<p class="login-right-msg text-center mt-34">Already Have an Account !  <router-link :to="`/login`" class="link" >
						 Login
				</router-link></p>
					</form>
				</div>
			</div>
		</div>
</div>
</template>

<script>
import {
  API
} from "@/api/api";
export default {
  name: 'FanRegisterStep1',
  props: {
    msg: String
  },
    data() {
      return {
     
    
      };
	},
  computed:{
      rgisterdata(){
          return this.$store.state.registerdata;
      }
  },
  methods:{
      validateBeforeSubmit(){
         
		   this.$validator.validateAll().then(result => {
          if (result) {
					
			
				this.$store.state.registerstep2 = true;
               
		  }
		  });
	   
      }
  },
  mounted(){
  // API.get("genre-list")
  //         .then(response => {
           
  //           if (response.data) {
               
  //           }
  //         })
  //         .catch(error => {
			  
  //         });
  }
  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
