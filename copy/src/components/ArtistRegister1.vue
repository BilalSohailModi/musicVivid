<template>
  <div class="artist-sign-up-container">
         <div class="container">
            <div class="row">
               <div class="artist-sign-up-wraper">
				   <form action="artist-sign-up-step-2.html"  @submit.prevent="validateBeforeSubmit">
               <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                  <li v-for="(error,index ) in errors" :error="error" :key="index">{{ error }}</li>
                </ul>
              </p>
                  <div class="ar-signup-heading-container">
                     <h1>Create Account</h1>
                     <p>Are You an Artist, Want to Share Your Music! </p>
				  </div>
				  
                  <div class="filds-group mb-20" :class="{'input': true, 'error': errors.has('fullName') }">
                     <div class="fild-icon">
                        <img src="/assets/images/user-icon.png">
                     </div>
                     <input   type="text" class="filds"  autocomplete="new"  v-model="rgisterdata.fullName" name="fullName" v-validate="'required'" data-vv-delay="500"
                  :class="{'input': true, '': errors.has('fullName') }" placeholder="Name">
                     <div class="fild-icon-right">
                        <i class="icon-warning"></i>
                        	<span class="message"  v-show="errors.has('fullName')">{{ errors.first('fullName') }}</span>
                     </div>
                  </div>
                  <div class="filds-group mb-20" :class="{'input': true, 'error': errors.has('phoneNo') }" >
                     <div class="fild-icon">
                        <img src="/assets/images/Phone-icon.png">
                     </div>
                     <input   type="number" class="filds" autocomplete="new"  v-model="rgisterdata.phoneNo" name="phoneNo" v-validate="'required|max:10|min:10'" data-vv-delay="500"
                  :class="{'input': true, '': errors.has('phoneNo') }" placeholder="Phone Number"  >
                     <div class="fild-icon-right">
                        <i class="icon-warning"></i>
                         	<span class="message"  v-show="errors.has('phoneNo')">{{ errors.first('phoneNo') }}</span>
                     </div>
                  </div>
                  <div class="filds-group mb-20" :class="{'input': true, 'error': errors.has('email') }" >
                     <div class="fild-icon">
                        <img src="/assets/images/mail-icon.png">
                     </div>
                     <input   type="email" class="filds" autocomplete="off" v-model="rgisterdata.email" name="email" v-validate="'required|email'" data-vv-delay="1000" placeholder="Email"  >
                     <div class="fild-icon-right">
                        <i class="icon-warning"></i>
                        	<span class="message"  v-show="errors.has('email')">{{ errors.first('email') }}</span>
                     </div>
                  </div>
                  <div class="filds-group mb-20" :class="{'input': true, 'error': errors.has('password') }">
                     <div class="fild-icon">
                        <img src="/assets/images/Password-icon.png">
                     </div>
                     <input   type="password" class="filds" autocomplete="off" name="password" v-model="rgisterdata.password" v-validate="'required|min:8'" data-vv-delay="1000" :class="{'input': true, 'is-danger': errors.has('password') }" placeholder="Password"  >
                     <div class="fild-icon-right">
                        <i class="icon-warning"></i>
                        	<span class="message"  v-show="errors.has('password')">{{ errors.first('password') }}</span>
                     </div>
				  </div>
				  <div class="sign_unsign-div">
						<label class="radio-div">Signed
								<input type="radio" v-validate="'required'"   v-model="rgisterdata.signedType" name="sign_unsign" value="1">
								<span class="img-checkmark sign-check"></span>
							  </label>
							  <label class="radio-div">Unigned
									<input type="radio" v-validate="'required'"  v-model="rgisterdata.signedType"  name="sign_unsign" value="2">
									<span class="img-checkmark unsign-check"></span>
								  </label>
								   <span v-show="errors.has('sign_unsign')" class="text-danger">{{ errors.first('sign_unsign') }}</span>
				  </div>
				  <!-- social channel -->
				<div class="social-channel-div">
					  <label>Prefered Channel</label>
					 
            <div class="sign_unsign-div">
                <label class="radio-channel">
                    <input type="radio" name="prefer_chanel"  v-validate="'required'"  v-model="rgisterdata.prefferedChannel"  value="1">
                    <span class="channel-checkmark"><i class="fa fa-youtube-play" aria-hidden="true"></i>Youtube</span>
                    </label>
                    <label class="radio-channel">
                      <input type="radio"  v-validate="'required'" v-model="rgisterdata.prefferedChannel" name="prefer_chanel" value="2">
                      <span class="channel-checkmark"><i class="fa fa-vimeo" aria-hidden="true"></i>Vimeo</span>
                      </label>
                       <span v-show="errors.has('prefer_chanel')" class="text-danger">{{ errors.first('prefer_chanel') }}</span>
              </div>
				  </div>
                  <!-- channel -->
                  <div class="filds-group mb-20" :class="{'input': true, 'error': errors.has('channelName') }">
                     <div class="fild-icon">
                        <img src="/assets/images/channel-icon.png">
                     </div>
                     <input type="text" autocomplete="off" class="filds"  v-model="rgisterdata.channelName" name="channelName" v-validate="'required'" data-vv-delay="500"
                  :class="{'input': true, '': errors.has('channelName') }" placeholder="Channel Name"  >
                     <div class="fild-icon-right">
                        <i class="icon-warning"></i>
                        <span class="message"  v-show="errors.has('channelName')">{{ errors.first('channelName') }}</span>
                     </div>
                  </div>
                  <div class="filds-group mb-20" :class="{'input': true, 'error': !isCity }">
                     <div class="fild-icon">
                        <img src="/assets/images/home-town-icon.png">
                     </div>
                     <vue-google-autocomplete v-model="rgisterdata.address" v-on:inputChange="checkingCity" name="address"   id="map" v-validate="'required'"   ref="address" types="(cities)" classname="filds" :country="geocode" placeholder="city" v-on:placechanged="getAddressData">
                    </vue-google-autocomplete>
                     <!-- <input type="text" class="filds" placeholder="Home Town"  > -->
                     <div class="fild-icon-right">
                        <i class="icon-warning"></i>
                        <span class="message"  v-show="!isCity">{{ "city fielad is reqired" }}</span>
                     </div>
				  </div>
				  
				  <button class="btn-signin success_msg_btn" type="submit">Continue</button>

				</form>

				<ul class="step-count-ul">
					<li class="active"></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
               </div>
            </div>
         </div>
      </div>
</template>

<script>
import VueGoogleAutocomplete from 'vue-google-autocomplete';
export default {
   name: 'ArtistRegister1',
   props: {
      msg: String
   },
   data: function() {
      return {
         user: {},
         geocode:[],
         isCity:true
      }
  },
   components: {
      VueGoogleAutocomplete
   },
   computed:{
      rgisterdata: function() {
         return this.$store.state.registerdata2;
      }
   },
   methods: {
      checkingCity: function(e) {
         if(e.newVal == ""){
            this.isCity =false;
         }
         this.$store.state.registerdata2.address =e.newVal;
      },
      validateBeforeSubmit: function() {
		   this.$validator.validateAll().then(result => {
            if (result) {
               this.$store.state.artistregisterstep1 = false;
               this.$store.state.artistregisterstep2 = true;
            }
         });
      },
      getAddressData: function(addressData, placeResultData, id) {
         this.geocode.push(placeResultData.address_components[3].short_name);
         this.$store.state.registerdata2.address =placeResultData.formatted_address;
         this.$store.state.registerdata2.latitude =addressData.latitude;
         this.$store.state.registerdata2.longitude =addressData.longitude;
	   }
   },
   mounted: function() {
      var inputElements = document.getElementsByTagName("input");
      for (let i=0; inputElements[i]; i++) {
         if (inputElements[i].className && (inputElements[i].className.indexOf("disableAutoComplete") != -1)) {
            inputElements[i].setAttribute("autocomplete","off");
         }
      }
      this.$refs.address.geolocate();
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

