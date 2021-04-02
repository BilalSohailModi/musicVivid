<template>
  <div class="homegb">
    <AppHeader></AppHeader>
    <div class="artist-sign-up-container">
      <div class="container">
        <div class="row">
          <div class="artist-sign-up-wraper medium">
            <form action="artist-sign-up-step-3.html" @submit.prevent="validateBeforeSubmit">
              <div class="ar-signup-heading-container">
                <h1>Create Account</h1>
                <p>Are You an Artist, Want to Share Your Music!</p>
              </div>

              <div class="sign_unsign-div">
                <p style="margin-bottom: 1rem;">Are you signed with a major label</p>

                <label class="radio-div">
                  Unsigned
                  <input
                    type="radio"
                    v-validate="'required'"
                    v-model="rgisterdata.signedType"
                    name="Sign Unsign"
                    value="2"
                  />
                  <span class="img-checkmark unsign-check"></span>
                </label>
                <label class="radio-div">
                  Signed
                  <input
                    type="radio"
                    v-validate="'required'"
                    v-model="rgisterdata.signedType"
                    name="Sign Unsign"
                    value="1"
                  />
                  <span class="img-checkmark sign-check"></span>
                </label>
                <span
                  v-show="errors.has('Sign Unsign')"
                  class="text-danger"
                >{{ errors.first('Sign Unsign') }}</span>
              </div>

              <!-- social channel -->
              <div class="social-channel-div">
                <label>Prefered Channel</label>

                <div class="sign_unsign-div">
                  <label class="radio-channel">
                    <input
                      type="radio"
                      name="Prefer Channel"
                      v-validate="'required'"
                      v-model="rgisterdata.prefferedChannel"
                      value="1"
                    />
                    <span class="channel-checkmark">
                      <i class="fa fa-youtube-play" aria-hidden="true"></i>Youtube
                    </span>
                  </label>
                  <label class="radio-channel">
                    <input
                      type="radio"
                      v-validate="'required'"
                      v-model="rgisterdata.prefferedChannel"
                      name="Prefer Channel"
                      value="2"
                    />
                    <span class="channel-checkmark">
                      <i class="fa fa-vimeo" aria-hidden="true"></i>Vimeo
                    </span>
                  </label>
                  <span
                    v-show="errors.has('Prefer Channel')"
                    class="text-danger"
                  >{{ errors.first('Prefer Channel') }}</span>
                </div>
              </div>
              <!-- channel -->
              <div
                class="filds-group mb-20"
                :class="{'input': true, 'error': errors.has('Channel Name') }"
              >
                <div class="fild-icon">
                  <img src="/assets/images/channel-icon.png" />
                </div>
                <input
                  type="text"
                  autocomplete="off"
                  class="filds"
                  v-model="rgisterdata.channelName"
                  name="Channel Name"
                  v-validate="'required'"
                  data-vv-delay="500"
                  :class="{'input': true, '': errors.has('Channel Name') }"
                  placeholder="Channel Name"
                />
                <div class="fild-icon-right">
                  <i class="icon-warning"></i>
                  <span
                    class="message"
                    v-show="errors.has('Channel Name')"
                  >{{ errors.first('Channel Name') }}</span>
                </div>
              </div>
              <div class="filds-group mb-20" :class="{'input': true, 'error': !isCity }">
                <div class="fild-icon">
                  <img src="/assets/images/home-town-icon.png" />
                </div>
                <vue-google-autocomplete
                  v-model="rgisterdata.address"
                  v-on:inputChange="checkingCity"
                  name="address"
                  id="map1"
                  v-validate="'required'"
                  ref="address"
                  types="(cities)"
                  class="filds"
                  :country="geocode"
                  placeholder="Home Town"
                  v-on:placechanged="getAddressData"
                ></vue-google-autocomplete>
                <!-- <input type="text" class="filds" placeholder="Home Town"  > -->
                <div class="fild-icon-right" v-show="errors.has('address')||!isCity">
                  <i class="icon-warning"></i>
                  <span class="message" v-show="!isCity">City field is required.</span>
                </div>
              </div>
              <button class="btn-signin success_msg_btn" type="submit" :disabled="disableSubmit">Continue</button>
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
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from "@/components/AuthHeader.vue";
import AppFooter from "@/components/ComonFotter.vue";
import VueGoogleAutocomplete from "vue-google-autocomplete";
import router from "../router";
import {API} from '../api/api';
import {HELPER} from "../Helper/Helper"

export default {
  name: "ArtistRegister1",
  props: {
    msg: String
  },
  components: {
    AppHeader,
    AppFooter,
    VueGoogleAutocomplete
  },
  data() {
    return {
      localUser: null,
      user: {},
      geocode: [],
      isCity: true,
      isAgre: false,
      toggle: false,
      musicUrlCheck: false,
      checkedVal: false,
      disableSubmit:false,
      uploadForm: {"signedType":null,"prefferedChannel":null,"channelName":null,"country":null,"state":null,"city":null,"address":null,"latitude":null,"longitude":null}
      // isAgre1:false
    };
  },
  computed: {
    rgisterdata() {
      return this.uploadForm;//this.$store.state.registerdata2;
    }
  },
  methods: {
    checkingCity: function(e) {
      if (e.newVal == "") {
        this.isCity = false;
      } else {
        this.isCity = true;
      }
      this.$store.state.registerdata2.address = e.newVal;

    },
    getAddressData: function(addressData, placeResultData, id) {
      if (placeResultData && placeResultData.address_components[3]) {
        this.geocode.push(placeResultData.address_components[3].short_name);
      }
      this.uploadForm.address =
        placeResultData.formatted_address;
      this.uploadForm.latitude = addressData.latitude;
      this.uploadForm.longitude = addressData.longitude;
      if (placeResultData && placeResultData.address_components) {
        this.uploadForm.country =
          placeResultData.address_components[2].long_name;
        this.uploadForm.city =
          placeResultData.address_components[0].long_name;
        this.uploadForm.state =
          placeResultData.address_components[1].long_name;
      }
    },
    loggletextare() {
      this.toggle = !this.toggle;
    },
    acceptAgreement(value) {
      if (value.length) {
        this.isAgre = false;
      } else {
        this.isAgre = true;
      }
    },
    validateBeforeSubmit() {
      if (!this.uploadForm.address) {
        this.isCity = false;
      } else {
        this.isCity = true;
      }
      this.$validator.validateAll().then(result => {
        if (result) {
          sessionStorage.setItem(
            "onwatdata",
            JSON.stringify(this.uploadForm)
          );
          this.sendBackend();
        }
      });
    },
    sendBackend(){
      this.uploadForm['username']=JSON.parse(localStorage.User).username
      this.uploadForm['stepNo']=1
      
      let config={
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      }
      this.disableSubmit=true
      API.put('update-profile',this.uploadForm,config)
      .then(response => {
        this.disableSubmit=false
        if (response.data && response.data.status && response.data.status=="success") {
          this.isAgre1 = false;
          this.isAgre = false;
          this.isError = false;
          this.isSuccess = true;
          this.errormessage = "";
          
          this.localUser=({...(this.localUser && this.localUser), ...this.uploadForm })
          
          localStorage.setItem('setupProfile',JSON.stringify(this.localUser))

          HELPER.getUser("", user => {
            localStorage.setItem("User", JSON.stringify(user));
            var elmnt = document.getElementById("scrolldiv");
            elmnt.scrollIntoView(true);
          });
          router.push({
            name: "ArtistRegister2"
          });
        }
      }).catch(error => {
        console.error(error);
        this.isSuccess = false;
        this.isError = true;
        let data = error.response.data.errors;
        this.errormessage = data[0].msg;
      }).then(r=>{
        this.disableSubmit=false
      })
    },
    logout() {
      localStorage.removeItem("User");
      localStorage.removeItem("stripeId");
      localStorage.removeItem("UserType");
      localStorage.removeItem("Token");
      localStorage.removeItem("contestMusicCount");
      localStorage.removeItem("userEmail");
      window.location.href = "/artistregister";
    }
  },
  created() {
    this.$store.state.registerdata2 = JSON.parse(
      sessionStorage.getItem("onwatdata")
    );
  },
  mounted() {
    var inputElements = document.getElementsByTagName("input");

    for (let i = 0; inputElements[i]; i++) {
      if (
        inputElements[i].className &&
        inputElements[i].className.indexOf("disableAutoComplete") != -1
      ) {
        inputElements[i].setAttribute("autocomplete", "off");
      }
    }

    this.localUser=JSON.parse(localStorage.getItem('setupProfile'))

    if(this.localUser){
      const {signedType,prefferedChannel,channelName,latitude,longitude} =this.localUser
      this.rgisterdata.signedType= signedType
      this.rgisterdata.prefferedChannel= prefferedChannel
      this.rgisterdata.channelName= channelName
      this.$refs.address.updateCoordinates({lat: latitude, lng: longitude})
    } else {
      console.error(this.$refs.address.geolocate())
    }
  },
  beforeRouteEnter(to, from, next){
    var config = { headers: { 'x-access-token':JSON.parse(localStorage.getItem("Token"))} }
    API.get("me", config ).then(response => {
      if (response.data) {
        let user=response.data;
        if(user.profileSetup==0){
          next({path: '/contest-music'});
        }
        else{
          next();
        }        
      }
    }).catch( error => {
      console.error(error);
    });
  },
  beforeRouteLeave (to, from, next) {
    if(to.path=='/artistregisterstep2'){
      next();
    }
    if(to.path=='/artistregister'){
      swal({
        title: "Are you sure?",
        text: "By going back, for security reasons, you will need to Log Back In.",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((result) => {
        if (result) {
          this.logout();
        } else {
          next(false)
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

