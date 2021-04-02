<template>
  <div class="homegb">
    <AppHeader></AppHeader>
    <div class="artist-sign-up-container">
      <div class="container">
        <div class="row">
          <div class="artist-sign-up-wraper">
            <form action="artist-sign-up-step-2.html" @submit.prevent="validateBeforeSubmit">
              <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                  <li v-for="(error,index ) in errors" :error="error" :key="index">{{ error }}</li>
                </ul>
              </p>
              <div class="ar-signup-heading-container">
                <h1>Create Account</h1>
                <p>Are You an Artist, Want to Share Your Music!</p>
                <p style="font-size: 17px !important;">
                  If you want MIV to upload your Music <a href="javascript:;" @click="openModal()">Click Here</a>
                </p>
              </div>

              <span
                class="error-messages"
                v-if="$store.state.registerdata2.error"
              >{{$store.state.registerdata2.errormessage}}</span>
              <div
                class="filds-group mb-20"
                :class="{'input': true, 'error': errors.has('Full Name')}"
              >
                <div class="fild-icon">
                  <img src="/assets/images/user-icon.png" />
                </div>
                <input
                  type="text"
                  class="filds"
                  autocomplete="new"
                  v-model="rgisterdata.fullName"
                  name="Full Name"
                  v-validate="'required'"
                  data-vv-delay="500"
                  :class="{'input': true, '': errors.has('Full Name') }"
                  placeholder="Full name"
                />
                <div class="fild-icon-right">
                  <i class="icon-warning"></i>
                  <span
                    class="message"
                    v-show="errors.has('Full Name')"
                  >{{ errors.first('Full Name') }}</span>
                </div>
              </div>
              <div
                class="filds-group mb-20"
                :class="{'input': true, 'error': errors.has('Phone No') }"
              >
                <div class="fild-icon">
                  <img src="/assets/images/Phone-icon.png" />
                </div>
                <input
                  onkeydown="javascript: return event.keyCode === 8 || event.keyCode === 46 ? true : !isNaN(Number(event.key))"
                  type="number"
                  class="filds"
                  autocomplete="new"
                  v-model="rgisterdata.phoneNo"
                  name="Phone No"
                  v-validate="'required|max:10|min:10|regex:^[0-9]'"
                  data-vv-delay="500"
                  :class="{'input': true, '': errors.has('Phone No') }"
                  placeholder="Phone Number"
                />
                <div class="fild-icon-right">
                  <i class="icon-warning"></i>
                  <span
                    class="message"
                    v-show="errors.has('Phone No')"
                  >{{ errors.first('Phone No') }}</span>
                </div>
              </div>
              <div
                class="filds-group mb-20"
                :class="{'input': true, 'error': errors.has('Email') }"
              >
                <div class="fild-icon">
                  <img src="/assets/images/mail-icon.png" />
                </div>
                <input
                  type="email"
                  class="filds"
                  autocomplete="off"
                  v-model="rgisterdata.email"
                  name="Email"
                  v-validate="'required|email'"
                  data-vv-delay="1000"
                  placeholder="Email"
                />
                <div class="fild-icon-right">
                  <i class="icon-warning"></i>
                  <span class="message" v-show="errors.has('Email')">{{ errors.first('Email') }}</span>
                </div>
              </div>
              <div
                class="filds-group mb-20"
                :class="{'input': true, 'error': errors.has('Password') }"
              >
                <div class="fild-icon">
                  <img src="/assets/images/Password-icon.png" />
                </div>
                <input
                  type="password"
                  class="filds"
                  autocomplete="off"
                  name="Password"
                  v-model="rgisterdata.password"
                  v-validate="'required|min:8'"
                  data-vv-delay="1000"
                  :class="{'input': true, 'is-danger': errors.has('Password') }"
                  placeholder="Password"
                />
                <div class="fild-icon-right">
                  <i class="icon-warning"></i>
                  <span
                    class="message"
                    v-show="errors.has('Password')"
                  >{{ errors.first('Password') }}</span>
                </div>
              </div>
              <div class="question-container">
                <h3 class="question-field">
                  Do You Agree To The
                  <span>
                    <a href="/user-agreement" target="_blank">User Agreement</a>
                  </span>
                  For Music is Vivid (MiV) For Artists?
                </h3>
                <div class="answer-field">
                  <div class="switch-container">
                    <label class="switch">
                      <input
                        type="checkbox"
                        name="agrement"
                        value="9"
                        v-model="rgisterdata.answers"
                        v-validate="'required'"
                      />
                      <span class="slider round"></span>
                    </label>

                    <span
                      class="text-danger"
                      v-show="errors.has('agrement')"
                    >To proceed, you must accept the user agreement</span>
                  </div>
                </div>
              </div>
              <button
                class="btn-signin success_msg_btn"
                type="submit"
                :disabled="disableSubmit"
              >Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div>
      <AppFooter></AppFooter>
    </div>

    <!-- upload my music modal  -->
    <div class="modal fade" id="upload-model-view" data-backdrop="static" data-keyboard="false">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <div>
              <b>I want MIV to upload my music</b>
            </div>
            <button type="button" class="close" @click="closeModel()" aria-hidden="true">×</button>
          </div>
          <!-- Modal body -->
          <div class="modal-body">
            <div class="modal-video-container">
              <div class="text-center">
                <div class="filds-group mb-20">
                  <div class="fild-icon">
                    <img src="/assets/images/user-icon.png" />
                  </div>
                  <input
                    v-model="uploadForm.fullName"
                    type="text"
                    class="filds"
                    autocomplete="new"
                    name="Full Name"
                    placeholder="Full name"
                  />
                  <div class="fild-icon-right">
                    <i class="icon-warning"></i>
                    <span class="message"></span>
                  </div>
                </div>

                <div class="filds-group mb-20" v-bind:class="{ error: emailCheck }">
                  <div class="fild-icon">
                    <img src="/assets/images/mail-icon.png" />
                  </div>
                  <input
                    v-model="uploadForm.email"
                    type="email"
                    class="filds"
                    autocomplete="off"
                    name="Email"
                    placeholder="Email"
                    v-on:keyup="ValidateEmail()"
                  />
                </div>

                <div class="filds-group mb-20" v-bind:class="{ error: phoneCheck }">
                  <div class="fild-icon">
                    <img src="/assets/images/Phone-icon.png" />
                  </div>
                  <input
                    v-on:keyup="ValidatePhone()"
                    v-model="uploadForm.phoneNumber"
                    onkeydown="javascript: return event.keyCode === 8 || event.keyCode === 46 ? true : !isNaN(Number(event.key))"
                    type="number"
                    class="filds"
                    autocomplete="new"
                    name="Phone No"
                    placeholder="Phone Number"
                  />
                </div>

                <div class="filds-group mb-20" v-bind:class="{ error: musicUrlCheck }">
                  <div class="fild-icon">
                    <img src="/assets/images/music-icon.png" />
                  </div>
                  <input
                    v-on:keyup="ValidateUrl()"
                    v-model="uploadForm.musicUrl"
                    type="text"
                    class="filds"
                    autocomplete="off"
                    name="music"
                    placeholder="Music URL"
                  />
                </div>

                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="agreementChecked"
                    @change="isChecked($event)"
                  />
                  <label class="custom-control-label" for="agreementChecked">
                    <span class="question-field">
                      Do You Agree To The
                      <span>
                        <a href="/user-agreement" target="_blank">User Agreement</a>
                      </span>
                      For Music is Vivid (MiV) For Artists?
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div class="modal-div-btn clearfix pt-3 mb-2">
              <button
                class="btn-signin success_msg_btn"
                :disabled="isDisable()"
                @click="submitData"
              >Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AppHeader from "@/components/UnauthHeader.vue";
import AppFooter from "@/components/ComonFotter.vue";
import router from "../router";
import VueGoogleAutocomplete from "vue-google-autocomplete";
import { API } from "@/api/api";
import axios from "axios";

export default {
  name: "ArtistRegister",
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
      user: {},
      geocode: [],
      isCity: true,
      emailCheck: false,
      phoneCheck: false,
      musicUrlCheck: false,
      checkedVal: false,
      uploadForm: {},
      isAgre: false,
      disableSubmit: false,
      logindata: {
        email: "",
        password: "",
        deviceType: "W",
        deviceId: "",
        fcmToken: ""
      }
    };
  },

  computed: {
    rgisterdata() {
      return this.$store.state.registerdata2;
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("User");
      localStorage.removeItem("stripeId");
      localStorage.removeItem("UserType");
      localStorage.removeItem("Token");
      localStorage.removeItem("contestMusicCount");
      localStorage.removeItem("userEmail");
      window.location.href = "/artistregister";
    },
    checkingCity: function(e) {
      if (e.newVal == "") {
        this.isCity = false;
      } else {
        this.isCity = true;
      }
      this.$store.state.registerdata2.address = e.newVal;
    },
    validateBeforeSubmit() {
      if (!this.$store.state.registerdata2.address) {
        this.isCity = false;
      } else {
        this.isCity = true;
      }
      this.$validator.validateAll().then(result => {
        if (!result) {
          return;
        }
        const {
          email,
          fullName,
          phoneNo,
          password
        } = this.$store.state.registerdata2;

        this.disableSubmit = true;

        API.post("register", {
          email,
          fullName,
          phoneNo,
          password,
          userType: "2"
        }).then(response => {
          this.logindata.email = email;
          this.logindata.password = password;

          if (response.data) {
            this.$store.state.registerdata2.error = false;
            this.$store.state.registerdata2.errormessage = "";
          }
          this.disableSubmit = false;
          sessionStorage.setItem(
            "onwatdata",
            JSON.stringify(this.$store.state.registerdata2)
          );
          this.login();
        }).catch(error => {
          console.error("fail", error);
          let data = error.response.data.errors;
          if (data.length == 1) {
            this.$store.state.registerdata2.error = true;
            this.$store.state.registerdata2.errormessage = data[0].msg;
          } else {
          }
        }).then(res => {
          this.disableSubmit = false;
        });
      });
    },
    login() {
      API.post("login", this.logindata).then(response => {
        if (response.data) {
          
          localStorage.setItem("User", JSON.stringify(response.data.user));
          
          if (response.data.user.userType == 2) {
            localStorage.setItem("contestMusicCount",JSON.stringify(response.data.contestMusicCount));
          }

          localStorage.setItem("UserType",JSON.stringify(response.data.user.userType));

          localStorage.setItem("Token",JSON.stringify(response.data.accessToken));

          if (JSON.parse(localStorage.getItem("User")).userType == "2") {
            if (response.data.contestMusicCount == 0) {
              router.push({ name: "ArtistRegister1" });
            } else {
              router.push({ name: "FanProfile" });
            }
          } else {
            router.push({ name: "ArtistProfile" });
          }
        }
      }).catch(error => {
        if (error.response.status === 400) {
          if (error.response.data.errors[0].otpPending) {
            router.push({ name: "FanRegisterOtp" });
            this.$store.state.isOtpPresent = true;
          }
        }
        let data = error.response.data.errors;
        this.error = true;
        this.errormessage = data[0].msg;
      });
    },
    getAddressData: function(addressData, placeResultData, id) {

      if (placeResultData && placeResultData.address_components[3]) {
        this.geocode.push(placeResultData.address_components[3].short_name);
      }
      this.$store.state.registerdata2.address =
        placeResultData.formatted_address;
      this.$store.state.registerdata2.latitude = addressData.latitude;
      this.$store.state.registerdata2.longitude = addressData.longitude;
      if (placeResultData && placeResultData.address_components) {
        this.$store.state.registerdata2.country =
          placeResultData.address_components[2].long_name;
        this.$store.state.registerdata2.city =
          placeResultData.address_components[0].long_name;
        this.$store.state.registerdata2.state =
          placeResultData.address_components[1].long_name;
      }
    },
    openModal(){
      $("#upload-model-view").modal("show");
      $("#upload-model-view").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    closeModel() {
      $("#upload-model-view").modal("hide");
    },
    ValidateEmail() {
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          this.uploadForm.email
        )
      ) {
        this.emailCheck = false;
      } else {
        this.emailCheck = true;
      }
    },
    ValidatePhone() {
      if (/^\d{10}$/.test(this.uploadForm.phoneNumber)) {
        this.phoneCheck = false;
      } else {
        this.phoneCheck = true;
      }
    },
    ValidateUrl() {
      if (
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g.test(
          this.uploadForm.musicUrl
        )
      ) {
        this.musicUrlCheck = false;
      } else {
        this.musicUrlCheck = true;
      }
    },
    isChecked(e) {
      if (e.target.checked) {
        this.checkedVal = true;
      } else {
        this.checkedVal = false;
      }
    },
    isDisable() {
      if (!this.uploadForm.email || (this.uploadForm.email && this.emailCheck)) {
        return true;
      } else if (!this.uploadForm.phoneNumber || (this.uploadForm.phoneNumber && this.phoneCheck)) {
        return true;
      } else if (!this.uploadForm.musicUrl || (this.uploadForm.musicUrl && this.musicUrlCheck)) {
        return true;
      } else if (!this.uploadForm.fullName) {
        return true;
      } else if (!this.checkedVal) {
        return true;
      } else {
        return false;
      }
    },
    submitData() {
      var head = {
        headers: {
          "x-access-token": JSON.parse(localStorage.getItem("Token"))
        }
      };
      let params = {};
      (params.fullname = this.uploadForm.fullName),
        (params.email = this.uploadForm.email),
        (params.phone = this.uploadForm.phoneNumber),
        (params.url = this.uploadForm.musicUrl),
        API.post("new-artist-popup-mail", params, head)
          .then(response => {
            if (response.data) {
              this.uploadForm = {};
              this.showUploadRequestSuccess()
            }
          })
          .catch(error => {});
    },
    showUploadRequestSuccess(){
      swal({
        icon:"success",
        title:"Success",
        content:{
          element: "p",
          attributes:{
            innerHTML:
            'Dear Artist we have received your email and link to upload Music and we will complete this soon and come back to you, so for now please visit our Social media link'+
            `
            <nav class="footer-social" style="margin-left: 30%;">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/musicisvivid/" target="_blank">
                      <i class="icon-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/musicisvivid/" target="_blank">
                      <i class="icon-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/musicisvivid" target="_blank">
                      <i class="icon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://in.pinterest.com/musicisvivid/pins/" target="_blank">
                      <i class="icon-pinterest"></i>
                    </a>
                  </li>
                  <!-- <li><a href="javascript:;"><i class="icon-pinterest"></i></a></li>
                  <li><a href="javascript:;"><i class="icon-youtube"></i></a></li>-->
                </ul>
            </nav>
            `
          }, 
        
        },
      });
    }
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

    
  },
  created() {
    axios.get("https://api.ipify.org?format=json").then(response => {
      if (response) {
        this.logindata.deviceId = response.data.ip;
        this.logindata.fcmToken = response.data.ip;
      }
    }).catch(err => {
      console.error(err);
    });
  },

  beforeRouteEnter(to, from, next){
    var config = { headers: { 'x-access-token':JSON.parse(localStorage.getItem("Token"))} }
    API.get("me", config )
    .then(response => {
      if (response.data.status!='fail' && response.data.userType=='2') {
        let user=response.data

        let paths=['/contest-music','/artistregisterstep1','/artistregisterstep2','/artistregisterstep3','/artistregisterstep4']
        
        if(to.path!=paths[user.profileSetup]){
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
              next({path: paths[user.profileSetup]});
            }
          });
        }
        else{
          next();
        }
      }
      else{
        next();
      }
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>