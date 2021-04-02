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
              <div class="question-container">
                <h3 class="question-field">Have You Played at Any Festivals Within The Last Year?</h3>
                <div class="answer-field">
                  <div class="switch-container">
                    <label class="switch">
                      <input type="checkbox" v-model="rgisterdata.answers[0]" />
                      <span class="slider round"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="question-container">
                <h3 class="question-field">Are You Currently Touring?</h3>
                <div class="answer-field">
                  <div class="switch-container">
                    <label class="switch">
                      <input type="checkbox" v-model="rgisterdata.answers[1]" />
                      <span class="slider round"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="question-container">
                <h3 class="question-field">Does your Music Contain Explicit Content?</h3>
                <div class="answer-field">
                  <div class="switch-container">
                    <label class="switch">
                      <input type="checkbox" v-model="rgisterdata.answers[2]" />
                      <span class="slider round"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="question-container">
                <h3 class="question-field">Is Music Your Primary Career?</h3>
                <div class="answer-field">
                  <div class="switch-container">
                    <label class="switch">
                      <input type="checkbox" value="3" v-model="rgisterdata.answers[3]" />
                      <span class="slider round"></span>
                    </label>
                    <!-- <span class="text-danger"  v-show="isAgre1">{{ "This Field Is Required" }}</span> -->
                  </div>
                </div>
              </div>

              <div class="question-container">
                <h3 class="question-field">
                  Do You Agree That Any Payments From
                  MiV Are Only For The Artist Or Band And
                  Not 3rd Party’s?
                </h3>
                <div class="answer-field">
                  <div class="switch-container">
                    <label class="switch">
                      <input type="checkbox" v-model="rgisterdata.answers[4]" />
                      <span class="slider round"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="question-container">
                <h3 class="question-field">
                  Are You The Originator And/Or Hold The
                  Rights To Use The Music You Intend To
                  Upload On MiV?
                </h3>
                <div class="answer-field">
                  <div class="switch-container">
                    <label class="switch">
                      <input type="checkbox" v-model="rgisterdata.answers[5]" />
                      <span class="slider round"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="question-container">
                <h3 class="question-field">
                  Is The Copyright Holder For Music You
                  Intend To Use On MiV Registered With BMI,
                  ASCAP, SESAC, Merlin Or Any Other
                  Private Firms?
                </h3>
                <div class="answer-field">
                  <div class="switch-container">
                    <label class="switch">
                      <input
                        type="checkbox"
                        v-model="rgisterdata.answers[6]"
                      />
                      <span class="slider round"></span>
                    </label>
                  </div>
                  <textarea
                    v-if="rgisterdata.answers[6]=='1'"
                    name="answer"
                    v-validate="'required'"
                    v-model="rgisterdata.copyrightHolder"
                    class="form-control-area mt-10"
                    style="display:block"
                  ></textarea>
                  <span
                    v-show="errors.has('answer')"
                    class="text-danger1"
                  >{{ errors.first('answer') }}</span>
                </div>
              </div>
              <div class="question-container">
                <h3 class="question-field">
                  Do You Agree Not To Use Any Music
                  Owned And Managed By Any Of The
                  Major Music Labels?
                </h3>
                <div class="answer-field">
                  <div class="switch-container">
                    <label class="switch">
                      <input type="checkbox" v-model="rgisterdata.answers[7]" />
                      <span class="slider round"></span>
                    </label>
                  </div>
                </div>
              </div>

              <div class="social-following-section">
                <label class="label-heading">Combined Social Media Followings</label>
                <ul class="social-following-count">
                  <li>
                    <label class="social-count-radio">
                      <input
                        type="radio"
                        name="socialMediaFollowing"
                        value="1"
                        v-validate="'required'"
                        v-model="rgisterdata.socialMediaFollowing"
                      />
                      <span class="social-count-radio-checkmark"></span>
                      <span class="radio-label-text">Under 5K</span>
                    </label>
                  </li>
                  <li>
                    <label class="social-count-radio">
                      <input
                        type="radio"
                        name="socialMediaFollowing"
                        value="2"
                        v-validate="'required'"
                        v-model="rgisterdata.socialMediaFollowing"
                      />
                      <span class="social-count-radio-checkmark"></span>
                      <span class="radio-label-text">5K to 100K</span>
                    </label>
                  </li>
                  <li>
                    <label class="social-count-radio">
                      <input
                        type="radio"
                        name="socialMediaFollowing"
                        value="3"
                        v-validate="'required'"
                        v-model="rgisterdata.socialMediaFollowing"
                      />
                      <span class="social-count-radio-checkmark"></span>
                      <span class="radio-label-text">100K to 1M</span>
                    </label>
                  </li>
                  <li>
                    <label class="social-count-radio">
                      <input
                        type="radio"
                        value="4"
                        v-validate="'required'"
                        v-model="rgisterdata.socialMediaFollowing"
                        name="radio"
                      />
                      <span class="social-count-radio-checkmark"></span>
                      <span class="radio-label-text">1M +</span>
                    </label>
                  </li>
                </ul>
                <span
                  v-if="socialMediaFollowingMessageError"
                  class="text-danger"
                >Must choose a Social Media Followings </span>
              </div>
              <button class="btn-signin success_msg_btn" type="submit" :disabled="disableSubmit">Continue</button>
            </form>
            <ul class="step-count-ul">
              <li class="active"></li>
              <li class="active"></li>
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
import router from "../router";
import {API} from '../api/api';
import {HELPER} from "../Helper/Helper"
export default {
  name: "ArtistRegister2",
  props: {
    msg: String
  },
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      localUser: null,
      socialMediaFollowingMessageError :false,
      user: {},
      geocode: [],
      isAgre: false,
      formdata:{
        answers:Array(8).fill(false),
        socialMediaFollowing: 0,
        copyrightHolder:""
      },
      disableSubmit:false
      // isAgre1:false
    };
  },
  computed: {
    rgisterdata() {
      return this.formdata;
    }
  },
  methods: {
    acceptAgreement(value) {
      if (value.length) {
        this.isAgre = false;
      } else {
        this.isAgre = true;
      }
    },
    validateBeforeSubmit() {
      if(this.formdata.socialMediaFollowing==0){
        this.socialMediaFollowingMessageError=true
        return;
      }else{
        this.socialMediaFollowingMessageError=false
      }
      
      this.$validator.validateAll().then(result => {
        if (result) {
          let uploadForm=JSON.parse(JSON.stringify(this.formdata))
          uploadForm.answers=uploadForm.answers.map(e=> e?"1":"0")
          uploadForm.answers[8]="1";
          this.sendBackend(uploadForm)
        }
      });
    },
    sendBackend(uploadForm){
      uploadForm['username']=JSON.parse(localStorage.User).username
      uploadForm['stepNo']=2
      
      let config={
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      }
      this.disableSubmit=true
      API.put('update-profile',uploadForm,config)
      .then(response => {
        this.disableSubmit=false
        if (response.data && response.data.status && response.data.status=="success") {
          this.localUser=({...(this.localUser && this.localUser), ...uploadForm })
          localStorage.setItem('setupProfile',JSON.stringify(this.localUser))

          HELPER.getUser("", user => {
            localStorage.setItem("User", JSON.stringify(user));
            var elmnt = document.getElementById("scrolldiv");
            elmnt.scrollIntoView(true);
          });
          router.push({
            name: "ArtistRegister3"
          });
        }
      })
      .catch(error => {
        console.error(error);
        let data = error.response.data.errors;
        this.errormessage = data[0].msg;
      })
      .then(r=>{
        this.disableSubmit=false
      })
    }
  },
  created() {
    this.$store.state.registerdata2 = JSON.parse(
      sessionStorage.getItem("onwatdata")
    );
  },
  mounted() {
    this.localUser=JSON.parse(localStorage.getItem('setupProfile'))
    if(this.localUser && this.localUser.answers){
      const {answers,copyrightHolder,socialMediaFollowing} =this.localUser
      this.rgisterdata.answers= answers.map(e=> e==="1")
      this.rgisterdata.copyrightHolder= copyrightHolder
      this.rgisterdata.socialMediaFollowing= socialMediaFollowing
    }
  },
  beforeRouteEnter(to, from, next){
    var config = { headers: { 'x-access-token':JSON.parse(localStorage.getItem("Token"))} }
    API.get("me", config )
    .then(response => {
      if (response.data) {
        let user=response.data
        if(user.profileSetup==0){
          next({path: '/contest-music'});
        }
        else{
          next();
        }
      }
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

