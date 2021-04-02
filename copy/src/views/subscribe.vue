<template>
<div>
  <p class="text-center" v-if="errorMsg">Invalid User</p>
  <div class="text-center mt-40" v-if="isLoading">
    <img src="/assets/images/loader.gif">
  </div>
  </div>
</template>

<script>
import router from '../router';
import { API } from "@/api/api";
export default {
  name: 'subscribe',
  data() {
   return {
      tokenId: null,
      userDetails : {},
      errorMsg : false,
      isLoading : false
   };
  },
  components: {
 
},
methods:{
  // log in user details
    loginUserDetails() {
      this.isLoading = true;
      let head2 = {
        headers: { "x-access-token":  this.tokenId }
      };
      API.get("me", head2)
        .then(response => {
          console.log("user details res ==>", JSON.parse(JSON.stringify(response)));
          this.userDetails = response.data;
          this.isLoading = false;
          if(this.userDetails.userType === '3') {
             localStorage.removeItem("appUserToken");
             localStorage.setItem("appUserToken",this.tokenId);
             router.push({name: 'makePayment', params: {tokenId : this.tokenId }});
          } else {
            this.errorMsg = true;
          }
         })
         .catch(error => {
           this.isLoading = false;
           });
      },
},
created(){
    this.tokenId  = this.$route.params.token;
    console.log("tokenID",this.tokenId);
    this.loginUserDetails();
},

mounted(){

},

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mt-40 {
  margin-top: 40px;
}
</style>