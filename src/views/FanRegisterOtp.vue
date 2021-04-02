<template>
  <div>
    <AppHeader></AppHeader>
    <div class="artist-sign-up-container">
      <div class="container">
        <div class="row">
          <div class="artist-sign-up-wraper otp-form-wraper">
            <form>
              <div class="otp-page-heading">
                <img src="/assets/images/otp-page-img.png">

                <h1 class="otp-heading">login with OTP</h1>
                <p class="otp-text">
                  We have sent a verification code to
                  {{userEmailId}}
                </p>
              </div>
              <div v-if="submit" class="otp-input-wraper">
                <input v-model="otp" type="text" maxlength="4" class="otp-field">
              </div>

              <p v-if="submit" class="time-remaining">
                <img src="/assets/images/timer-icon.png">
                {{otpCountDown}}{{count}} seconds left
              </p>

              <button
                v-if="submit"
                :disabled="otp == ''"
                class="btn-signin success_msg_btn"
                @click="varifyotp()"
                type="button"
              >Submit</button>
              <p v-if="!submit" class="resend-container">
                <button
                  type="button"
                  :disabled="btndis"
                  @click="resendotp()"
                  class="resend-code"
                >Resend Code</button>
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
import { API } from "@/api/api";
import router from "../router";
import AppHeader from "@/components/UnauthHeader.vue";
import AppFooter from "@/components/ComonFotter.vue";
export default {
  name: "FanRegisterOtp",
  props: {
    msg: String
  },
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      userEmailId: localStorage.getItem("userEmail"),
      count: null,
      submit: true,
      otp: "",
      btndis: false,
      timeInterval : null
    };
  },
  computed: {
    
    otpCountDown: function() {
      if(localStorage.getItem("timer") && localStorage.getItem("timer") != 0) {
        this.count = localStorage.getItem("timer");
      } else {
        this.count = 300;
      }
     this.timeInterval = setInterval(e => {
        if (this.count == 0) {
          this.submit = false;
          return;
        }

         this.count--;
         localStorage.setItem("timer", this.count);

      }, 1000);
    }
  },
  methods: {
    varifyotp() {
      API.post("verify-email-otp", {
        otp: this.otp,
        accessToken: JSON.parse(localStorage.getItem("Token"))
      })
        .then(response => {
          if (response.data) {
            this.count = 0;
            this.otp = "";
            localStorage.removeItem("Token");
            localStorage.removeItem("timer");
            localStorage.removeItem("userEmail");
            swal(
              "Registered!",
              "You have Registered Successfully !",
              "success"
            );
            router.push({
              name: "FanSuccess"
            });
            //state.registerdata.registerstep2 = false;
            //  window.location.href = '/login';
          }
        })
        .catch(error => {
          this.otp = "";
          let data = error.response.data.errors;
          swal("Error!", data[0].msg, "error");
        });
    },
    resendotp() {
      this.otp = "";
      this.btndis = true;
      API.post("send-otp-to-email", { email: this.userEmailId, newUser: 1 })
        .then(response => {
          if (response.data) {
            localStorage.setItem("Token", JSON.stringify(response.data.token));
            this.setinitialstae();
            localStorage.removeItem("timer");
            this.btndis = false;
          }
        })
        .catch(error => {});
    },
    setinitialstae() {
      this.count = 300;
      this.submit = true;
    }
  },
  mounted() {
    
  },
  created() {
    if (
      localStorage.getItem("userEmail") == null ||
      localStorage.getItem("userEmail") == undefined
    ) {
      window.location.href = "/login";
    } else {
       if(this.$store.state.isOtpPresent) {
         console.log("a");
         this.submit = false;
       }
    }
  },
  destroyed() {
    console.log("call");
     clearInterval(this.timeInterval);
     localStorage.removeItem("timer");
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
