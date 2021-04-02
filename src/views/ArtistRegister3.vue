<template>
  <div class="homegb">
    <AppHeader></AppHeader>
    <div class="artist-sign-up-container">
      <div class="container">
        <div class="row">
          <div class="artist-sign-up-wraper medium">
            <form action="artist-sign-up-step-4.html" @submit.prevent="validateBeforeSubmit">
              <div class="ar-signup-heading-container">
                <h1>Select Digital Events Genre</h1>

                <p>Please Note This Cannot be Changed Once Profile is Created</p>
              </div>
              <div
                class="error-cls text-center"
                v-if="errormessage"
              >Please Select Digital Events Genre</div>
              <div class="artist-category-sec">
                <ul class="artist-catagory-ul">
                  <li>
                    <label class="digi-check-btn">
                      <input
                        type="radio"
                        value="1"
                        v-model="rgisterdata.baseGenreId"
                        name="artist-radio"
                        v-on:change="changeGenreId(rgisterdata.baseGenreId)"
                      />
                      <span class="digi-checkmark"></span>
                      <span class="digi-label">
                        <p>
                          <img src="/assets/images/alternativ-icon.png" />Alternative
                        </p>
                      </span>
                    </label>
                  </li>
                  <li>
                    <label class="digi-check-btn">
                      <input
                        type="radio"
                        value="2"
                        v-model="rgisterdata.baseGenreId"
                        name="artist-radio"
                        v-on:change="changeGenreId(rgisterdata.baseGenreId)"
                      />
                      <span class="digi-checkmark"></span>
                      <span class="digi-label">
                        <p>
                          <img src="/assets/images/country-icon.png" />Country
                        </p>
                      </span>
                    </label>
                  </li>

                  <li>
                    <label class="digi-check-btn">
                      <input
                        type="radio"
                        value="3"
                        v-model="rgisterdata.baseGenreId"
                        name="artist-radio"
                        v-on:change="changeGenreId(rgisterdata.baseGenreId)"
                      />
                      <span class="digi-checkmark"></span>
                      <span class="digi-label">
                        <p>
                          <img src="/assets/images/edm-icon.png" />EDM
                        </p>
                      </span>
                    </label>
                  </li>
                  <li>
                    <label class="digi-check-btn">
                      <input
                        type="radio"
                        value="4"
                        v-model="rgisterdata.baseGenreId"
                        name="artist-radio"
                        v-on:change="changeGenreId(rgisterdata.baseGenreId)"
                      />
                      <span class="digi-checkmark"></span>
                      <span class="digi-label">
                        <p>
                          <img src="/assets/images/hippop-icon.png" />Hiphop-RAP
                        </p>
                      </span>
                    </label>
                  </li>
                  <li>
                    <label class="digi-check-btn">
                      <input
                        type="radio"
                        value="5"
                        v-model="rgisterdata.baseGenreId"
                        name="artist-radio"
                        v-on:change="changeGenreId(rgisterdata.baseGenreId)"
                      />
                      <span class="digi-checkmark"></span>
                      <span 
                        class="digi-label" 
                        title="Dear Artist,
You may sign up in one of the eight genres only. This keeps the competition and feature program fair for all Artists. Choose the World Genre if you would like to compete with your fellow countrymen and other artists from other countries."
                      >
                        <p>
                          <img src="/assets/images/latin-icon.png" />World
                        </p>
                      </span>
                    </label>
                  </li>
                  <li>
                    <label class="digi-check-btn">
                      <input
                        type="radio"
                        value="6"
                        v-model="rgisterdata.baseGenreId"
                        name="artist-radio"
                        v-on:change="changeGenreId(rgisterdata.baseGenreId)"
                      />
                      <span class="digi-checkmark"></span>
                      <span class="digi-label">
                        <p>
                          <img src="/assets/images/pop-icon.png" />Pop
                        </p>
                      </span>
                    </label>
                  </li>
                  <li>
                    <label class="digi-check-btn"
                      @mouseover="mouseHoverEvent"
                      @mouseleave="mouseHoverEvent">
                      <input
                        type="radio"
                        value="7"
                        v-model="rgisterdata.baseGenreId"
                        name="artist-radio"
                        v-on:change="changeGenreId(rgisterdata.baseGenreId)"
                      />
                      <span class="digi-checkmark"></span>
                      <span class="digi-label">
                        <p>
                          <img src="/assets/images/metal-icon.png" />{{craftLabel}}
                        </p>
                      </span>
                     
                    </label>
                  </li>

                  <li>
                    <label class="digi-check-btn">
                      <input
                        type="radio"
                        value="8"
                        v-model="rgisterdata.baseGenreId"
                        name="artist-radio"
                        v-on:change="changeGenreId(rgisterdata.baseGenreId)"
                      />
                      <span class="digi-checkmark"></span>
                      <span class="digi-label">
                        <p>
                          <img src="/assets/images/rock-icon.png" />Rock
                        </p>
                      </span>
                    </label>
                  </li>
                  <div class="clearfix"></div>
                </ul>
                 
                      <div ref="craftDropdown" class="craftDropdown" style="display:none;">
                        <ul>
                        <li 
                          v-for="(subGenre,index) of craftSubGenreList"
                          :key="index+subGenre"
                          >
                          <label class="digi-check-btn">
                            <!-- <input
                              type="radio"
                              :value="subGenre.code"
                              v-model="rgisterdata.baseGenreId"
                              name="artist-radio"
                              v-on:change="changeGenreId(rgisterdata.baseGenreId)"
                            /> -->
                            <span class="digi-checkmark"></span>
                            <span class="digi-label">
                              <p>
                                <img src="/assets/images/metal-icon.png" />{{subGenre.lable}}
                              </p>
                            </span>
                          </label>
                        </li>
                        </ul>
                      </div>
                    
              </div>
              <button class="btn-signin success_msg_btn" type="submit" :disabled="disableSubmit">Continue</button>
            </form>
            <div class="signup3-text">
              Artists; If you have signed up in POP and you don’t qualify with
              enough Followers for the POP Live section, but your total
              followers would qualify in the Alternative Genre/ Live section
              then MiV will move you to the Live Alternative Genre.
            </div>
            <ul class="step-count-ul">
              <li class="active"></li>
              <li class="active"></li>
              <li class="active"></li>
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
import {API} from '../api/api';
import router from "../router";
import {HELPER} from "../Helper/Helper"
export default {
  name: "ArtistRegister3",
  props: {
    msg: String
  },
  components: {
    AppHeader,
    AppFooter
  },
  data(){
    return {
      localUser: null,
      craftLabel:"Craft",
      craftSubGenreList: JSON.parse(`[
        {"code":"71","lable":"R&B-Rhythm and Blues"},
        {"code":"72","lable":"Soul"},
        {"code":"73","lable":"Jazz"},
        {"code":"74","lable":"Folk"},
        {"code":"75","lable":"Gospel"},
        {"code":"76","lable":"ALL Other"}]`),
      disableSubmit:false,
      rgisterdata:{
        baseGenreId:null
      },
      errormessage:""
    }
  },
  computed:{
    craftDropdownVisible:{
      get: function () {
        return this.$refs.craftDropdown.style.display!=="none" ||
          this.$refs.craftDropdown.style.display!=="block";
      },
      set: function (newValue) {
        this.$refs.craftDropdown.style.display= newValue? "block" : "none"
      }
    },
  },
  watch:{
    'rgisterdata.baseGenreId':function(newValue){
      let labelClass= this.$refs.craftDropdown.parentElement.classList
      if(newValue!==null && newValue[0]==='7'){
        labelClass.add('subgenre-selected')
        this.craftDropdownVisible=false;
      }
      else{
        labelClass.remove('subgenre-selected')
      }
      
    }
  },
  methods: {
    mouseHoverEvent(e){
      this.craftDropdownVisible= e.type==="mouseover"
    },
    validateBeforeSubmit() {
      if (!this.rgisterdata.baseGenreId) {
        window.scrollTo(0, 0);
        this.errormessage =
          "Please Select Digital Events Genre";
        return;
      }
      this.$validator.validateAll().then(result => {
        if (result) {
          window.scrollTo(0, 0);
          this.sendBackend(this.rgisterdata);
        } else {
          console.error("err");
        }
      });
    },
    changeGenreId(genreId) {
      if (genreId) {
        this.errormessage = "";
      } else {
        this.errormessage =
          "Please Select Digital Events Genre";
      }
    },
    sendBackend(uploadForm){
      uploadForm['username']=JSON.parse(localStorage.User).username
      uploadForm['stepNo']=3
      
      let config={
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      }
      this.disableSubmit=true
      API.put('update-profile', uploadForm, config).then(response => {
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
            name: "ArtistRegister4"
          });
        }
      }).then(r=>{
        this.disableSubmit=false
      }).catch(error => {
        this.disableSubmit=false
      });
    }
  },
  created() {},
  mounted() {
    this.localUser=JSON.parse(localStorage.getItem('setupProfile'))
    if(this.localUser && this.localUser.baseGenreId){
      this.rgisterdata.baseGenreId= this.localUser.baseGenreId
    }
  },
  beforeRouteEnter(to, from, next){
    var config = { headers: { 'x-access-token':JSON.parse(localStorage.getItem("Token"))} }
    API.get("me", config ).then(response => {
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
<style scoped>
.signup3-text {
  font-size: 14px;
  justify-content: center;
  padding-top: 15px;
}
.error-cls {
  color: #fff !important;
  background: #ff605f;
  font-size: 13px;
  padding: 7px 10px;
  border-radius: 5px;
}
.subgenre-selected > .digi-checkmark {
  background-color: #6d67e5
}
.subgenre-selected > .digi-label > p {
  color: #fff;
}
</style>
