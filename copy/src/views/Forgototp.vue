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
                   <p class="otp-text">We have sent a verification code to
                    {{email}}</p>
                 </div>
                    <div v-if="submit" class="otp-input-wraper">
                      <input  v-model="otp" type="text" maxlength="4" class="otp-field">
                      
                    </div>
                  

                 <p v-if="submit" class="time-remaining"><img src="/assets/images/timer-icon.png">{{otpCountDown}}{{count}} seconds left</p>
				  
          <button v-if="submit" :disabled="otp == ''" class="btn-signin success_msg_btn" @click="varifyotp()" type="button">Submit</button>
          <p v-if="!submit"  class="resend-container"><button type="button"  :disabled="btndis" @click="resendotp()" class="btn-signin resend-code">Resend Code</button></p>

				</form>
               </div>
            </div>
         </div>
      </div>
      <AppFooter></AppFooter>
      </div>
</template>

<script>
import {
  API
} from "@/api/api";
import router from '../router'
import AppHeader from "@/components/UnauthHeader.vue";
import AppFooter from "@/components/ComonFotter.vue";
export default {
  name: 'Forgototp',
  props: {
    msg: String
  }, components: {
    AppHeader,
	AppFooter,
  },
    data() {
      return {
     user:null,
     count:25,
     submit:true,
     otp:"",
     btndis:false,
     email:JSON.parse(localStorage.getItem("email")),
     intval:"",
    
      };
	},
  computed:{
       otpCountDown: function(){
       
        setInterval( (e)=>{
              if(  this.count==0){
                this.submit = false;
                
              return  ;

              }
        
       this.count--;
        
             
              },1000);     
       
     }
  },
  methods:{
   varifyotp(){
 API.post("verify-email-otp",  {otp:this.otp,accessToken:JSON.parse(localStorage.getItem('Token'))})
          .then(response => {
           
            if (response.data) {
                this.count = 0;
              this.otp= "";
              window.location.href = "/setpassword";
        //    swal("Registered!", "You have Registerd Successfuly !", "success");
        //    //state.registerdata.registerstep2 = false; 
        //  window.location.href = '/login';
            }
          })
          .catch(error => {
             this.otp= "";
             let data = error.response.data.errors;
              this.submit = false;
             swal("Error!", data[0].msg, "error");
          });
   },
   resendotp(){
     this.otp= "";
     this.btndis = true;
     API.post("send-otp-to-email",  {email:this.email})
          .then(response => {
           
            if (response.data) {
             
            localStorage.setItem("Token",JSON.stringify(response.data.token));
    this.setinitialstae();
     this.btndis = false;

            }
          })
          .catch(error => {
           
          });
   },
   setinitialstae(){
      this.count = 25;
   this.submit = true;
  
         
   }
  },
  mounted(){
     
   this. setinitialstae();
  },
  created(){
     

        this.submit = true;
        this.count = 25;
    if(JSON.parse(localStorage.getItem("Token"))==null ||JSON.parse(localStorage.getItem("Token"))==undefined  ){
  window.location.href = '/login';
    }
  }
  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
