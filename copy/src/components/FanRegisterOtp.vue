<template>
<div class="homegb">
<AppHeader></AppHeader>
<div class="artist-sign-up-container">
         <div class="container">
            <div class="row">
               <div class="artist-sign-up-wraper otp-form-wraper">
				   <form>
                 <div class="otp-page-heading">
                   <img src="/assets/images/otp-page-img.png">

                   <h1 class="otp-heading">Verify Password Reset Code</h1>
                   <p class="otp-text">We have sent a verification code 
                      to john@gmail.com</p>
                 </div>
                    <div class="otp-input-wraper">
                      <input type="text" maxlength="4" class="otp-field">
                      
                    </div>

                 <p class="time-remaining"><img src="/assets/images/timer-icon.png">25 seconds left</p>
				  
          <button class="btn-signin success_msg_btn" type="submit">Submit</button>
          <p class="resend-container"><a href="#" class="resend-code">Resend Code</a></p>

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
import AppFooter from "@/components/ComonFotter.vue";
export default {
  name: 'FanRegisterOtp',
  props: {
    msg: String
  }, components: {
    AppHeader,
	AppFooter,
  },
    data() {
      return {
     
    
      };
	},
  computed:{
     
  },
  methods:{
     
  }
  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
