<template>
  		<div class="login-section">
		<span class="validation-message error"  v-if="rgisterdata.error" :class="{ 'show':rgisterdata.error }" >
			<a href="javascript:;" class="close"><i class="icon-close"></i></a>
			<i class="icon-error"></i>
			{{rgisterdata.errormessage}}
		</span>
		<div class="container">
			<div class="register-box">
				<!-- <div class="register-left">
					<h3 class="title">Are You Artist, <br>Want to Share Your Music</h3>
					<a href="javascript:;" class="btn-join">Join Today</a>
				</div> -->
				<div class="register-right">
					<h3 class="title">Create Account</h3>
					<form class="login-filds"  @submit.prevent="validateBeforeSubmit">
						        <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                  <li v-for="(error,index ) in errors" :error="error" :key="index">{{ error }}</li>
                </ul>
              </p>
						<div class="filds-group mb-20" :class="{'input': true, 'error': errors.has('Email') }">
							<div class="fild-icon">
								<i class="icon-envelope"></i>
							</div>
							<input class="filds" type="email" v-model="rgisterdata.email" name="Email" v-validate="'required|email'" data-vv-delay="1000" placeholder="Email" >
							<div class="fild-icon-right">
								<i class="icon-warning"></i>
								 <span class="message" v-show="errors.has('Email')">{{ errors.first('Email') }}</span>
							</div>
						</div>
						<!-- <div class="filds-group mb-20 custom-select-box" :class="{'input': true, 'error': errors.has('Gender') }" >
							<div class="fild-icon">
								<i class="icon-users"></i>
							</div>
							<select v-model="rgisterdata.gender" name="Gender" v-validate="'required'" data-vv-delay="1000"  class="filds">
								<option value="">Gender</option>
								<option value="2">Male</option>
								<option value="3">Female</option>
							</select>
							
							<div class="fild-icon-right">
								<i class="icon-warning"></i>
									 <span class="message" v-show="errors.has('Gender')">{{ errors.first('Gender') }}</span>
							</div>
						</div> -->
						<div class="filds-group mb-20  custom-select-box" :class="{'input': true, 'error': errors.has('Dob') }">
							<div class="fild-icon">
								<i class="icon-calendar"></i>
							</div>
						
								<datetime v-model="rgisterdata.dob" 
								input-class="filds" 
								name="Dob" 
								v-validate="'required'" 
								data-vv-delay="1000" 
								:max-datetime="maxDatetime"
								placeholder="Date Of Birth"
								@click="open">
							</datetime>

							<div class="fild-icon-right">
								<i class="icon-warning"></i>
								 <span class="message" v-show="errors.has('Dob')">{{ errors.first('Dob') }}</span>
							</div>
						</div>

						<div>
						  <p class="aggrement">
								<input class="checkbox-cls" type="checkbox" @change="checkedValue($event)">
                  Do You Agree To The <span><a href="/fan-agreement" target="_blank">User Agreement</a></span>
               
                For Music is Vivid (MiV) For Fans?
								 <span class="text-danger" v-show="errorMsg">To proceed, you must accept the user agreement</span>	
              </p>
							 
						</div>	

						<div class="colum-group">
							<button class="btn-signin" type="submit" >
								Complete Registration
							</button>
						</div>
						<ul class="step">
							<li></li>
							<li class="active"></li>
						</ul>
						<p class="login-right-msg text-center mt-34">Already Have an Account!  <router-link :to="`/login`" class="link" >
						 Login
				</router-link></p>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Datetime } from "vue-datetime";
export default {
  name: "FanRegisterStep2",
  props: {
    msg: String,
  },
  data: function () {
    return {
      maxDatetime: "",
      isAgree: false,
      errorMsg: false,
    };
  },
  components: {
    Datetime,
  },
  computed: {
    rgisterdata() {
      return this.$store.state.registerdata;
    },
  },
  methods: {
    validateBeforeSubmit: function () {
      if (this.isAgree) {
        this.errorMsg = false;
        this.$validator.validateAll().then((result) => {
          if (result) {
            const {
              fullName,
              dob,
              email,
              password,
              gender,
            } = this.$store.state.registerdata;
            let strdob = dob;
            let date = new Date(strdob);
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let dt = date.getDate();

            if (dt < 10) {
              dt = "0" + dt;
            }
            if (month < 10) {
              month = "0" + month;
            }
            strdob = dt + "/" + month + "/" + year;

            let registarData = {
              fullName,
              dob: strdob,
              email,
              password,

              userType: "3",
              username: email,
            };
            this.$store.commit("fanRgister", registarData);
          }
        });
      } else {
        this.errorMsg = true;
      }
    },
    checkedValue($event) {
      if ($event.target.checked === true) {
        this.isAgree = true;
        this.errorMsg = false;
      } else {
        this.isAgree = false;
      }
    },
    open() {},
  },
  mounted() {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var day = today.getDate();
    var pastdate = new Date(year - 18, month, day);
    this.maxDatetime = pastdate.toISOString();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.aggrement {
  font-family: "Lato", sans-serif;
  color: #222;
  font-size: 14px;
  font-weight: normal;
  line-height: 22px;
}
.checkbox-cls {
  vertical-align: middle;
  margin: 2px;
  height: 18px;
  width: 17px;
}
</style>
