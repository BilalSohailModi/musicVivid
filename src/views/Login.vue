<template>
<div class="homegb">
<AppHeader></AppHeader>
   <div class="login-section">
		<span v-if="error" class="validation-message error"   :class="{ 'show':error }" id="validation_login">
			<a href="javascript:;" class="close" id="validation_close"><i class="icon-close"></i></a>
			<i class="icon-error"></i>
		{{errormessage}}
		</span>
		<div class="container">
			<div class="login-box">
				<div class="login-row">
					<!-- <div class="login-colum pr-0">
						<h2 class="login-left-title">Welcome Back</h2>
						<p class="login-left-content">To Keep Connected  With Us  Please Login With Your Personal <br>Information by Email Adress and Password</p>
						<img src="/assets/images/login-image.jpg" alt="">
					</div> -->
					<div class="login-colum">
						<h2 class="login-right-title">Login Now</h2>
						<form class="login-filds"  @submit.prevent="validateBeforeSubmit">
									        <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                  <li v-for="(error,index ) in errors" :error="error" :key="index">{{ error }}</li>
                </ul>
              </p>
							<div class="filds-group" :class="{'input': true, 'error': errors.has('email') }">
								<div class="fild-icon">
									<i class="icon-envelope"></i>
								</div>
								<input type="email" class="filds" name="email" v-validate="'required|email'" data-vv-delay="1000" 
								v-model="logindata.email"  placeholder="Email ">
								<div class="fild-icon-right">
									<i class="icon-warning"></i>
	<span class="message" v-show="errors.has('email')">{{ errors.first('email') }}</span>
								</div>
							</div>
							<div class="filds-group"  :class="{'input': true, 'error': errors.has('password') }">
								<div class="fild-icon">
									<i class="icon-locked"></i>
								
								</div>
								<input type="password" class="filds" name="password" v-validate="'required'" data-vv-delay="1000" 
								v-model="logindata.password"  placeholder="Password ">
								<div class="fild-icon-right">
									<i class="icon-warning"></i>
									<span class="message" v-show="errors.has('password')">{{ errors.first('password') }}</span>
								</div>
							</div>
							<div class="colum-group row justify-content-between">
								<div class="colum-auto">
									<label for="remember" class="custom-checkbox">
										<input type="checkbox" id="remember"><span>Keep  Me Logged In</span>
									</label>
								</div>
								<div class="colum-auto">
										 <router-link :to="`/forgotpassword`"  >
				<a href="javascript:;" class="link">Forgot Password?</a>
						</router-link>
								
								</div>
							</div>
							<div class="colum-group">
								<button class="btn-signin" type="submit" >
									Sign In
								</button>
							</div>
							<p class="login-right-msg text-center">Don't Have An Account ! <a href="javascript:void(0)" @click="showmodal" class="link" >Sign Up Now</a></p>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
   <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from "@/components/UnauthHeader.vue";
import { API } from "@/api/api";
import axios from "axios";
import AppFooter from "@/components/ComonFotter.vue";
import router from "../router";
export default {
  name: "Login",
  props: {
    msg: String,
  },
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      logindata: {
        email: "",
        password: "",
        deviceType: "W",
        deviceId: "",
        fcmToken: "",
      },
      error: false,
      errormessage: "",
    };
  },
  methods: {
    validateBeforeSubmit() {
      this.error = false;
      this.errormessage = "";
      localStorage.setItem("userEmail", this.logindata.email);
      this.$validator.validateAll().then((result) => {
        if (result) {
          API.post("login", this.logindata)
            .then((response) => {
              if (response.data) {
                console.log(response.data);
                localStorage.setItem(
                  "User",
                  JSON.stringify(response.data.user)
                );
                if (response.data.user.userType == 2) {
                  localStorage.setItem(
                    "contestMusicCount",
                    JSON.stringify(response.data.contestMusicCount)
                  );
                }
                localStorage.setItem(
                  "UserType",
                  JSON.stringify(response.data.user.userType)
                );
                localStorage.setItem(
                  "Token",
                  JSON.stringify(response.data.accessToken)
                );
                if (JSON.parse(localStorage.getItem("User")).userType == "2") {
                  if (response.data.contestMusicCount == 0) {
                    router.push({
                      name: "FanProfile",
                    });
                  } else {
                    router.push({
                      name: "FanProfile",
                    });
                  }
                } else {
                  router.push({
                    name: "ArtistProfile",
                  });
                }
              }
            })
            .catch((error) => {
              if (error.response.status === 400) {
                if (error.response.data.errors[0].otpPending) {
                  router.push({ name: "FanRegisterOtp" });
                  this.$store.state.isOtpPresent = true;
                }
              }
              let data = error.response.data.errors;
              console.log(data);
              this.error = true;
              this.errormessage = data[0].msg;
            });
        }
      });
    },
    showmodal() {
      this.$store.commit("showmodal");
    },
  },
  created() {
    axios
      .get("https://api.ipify.org?format=json")
      .catch((err) => {
        console.log(err);
      })
      .then((response) => {
        if (response) {
          console.log(response);
          this.logindata.deviceId = response.data.ip;
          this.logindata.fcmToken = response.data.ip;
        }
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>