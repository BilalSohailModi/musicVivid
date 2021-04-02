import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import {
  API
} from "@/api/api";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    registerdata:{
      username:"",
      fullName:"",
      dob:"",
      email:"",
      password:null,
      userType:null,
      gender:"",
      password_confirmation:null,
      error:false,
      errormessage:"",
      sucessMessage:"",
      data:null

    },
    registerstep2:false,
    otprecive:false,
    artistregisterstep1:true,
    artistregisterstep3:false,
    artistregisterstep4:false,
    registerdata2:{
      fullName:"",
      phoneNo:null,
      email:"",
      password:"",
      userType:'2',
      gender:null ,  ///1=Not mentioned, 2=Male, 3=Female
      signedType:null,
      prefferedChannel:null,
      channelName:"",
      address:"",
      latitude:null,
      longitude:null,
      baseGenreId:'1',
      socialMediaFollowing:'1',
      answers: [] ,
      copyrightHolder:"",
      error:false,
      errormessage:"",
      sucessMessage:"",
    }
  },
  mutations: {
    fanRgister: function(state,payload) {
      API.post("register",  {email:payload.email}).then(response => {
        if (response.data) {}
      }).catch(error => {
        let data = error.response.data.errors;
        if(data.length ==1){
          state.registerdata. error= true;
          state.registerdata. errormessage = data[0].msg;
        } else {
          API.post("register",  payload).then(response => {
            if (response.data) {
              localStorage.setItem("User",JSON.stringify(response.data.users));
              API.post("send-otp-to-email",  {email:payload.email}).then(response => {
                if (response.data) {             
                  localStorage.setItem("Token",JSON.stringify(response.data.token));
                  router.push({
                    name: "FanRegisterOtp"
                  });
                }
              }).catch(error => {
                console.error(error);
              });               
            }
          }).catch(error => {
            let data = error.response.data.errors;
            state.registerdata. error= true;
            state.registerdata. errormessage = data[0].msg;
          });
        }
      });
    },

    artistRgister: function(state,payload) {
      API.post("register",  payload).then(response => {
        if (response.data) {
          state.registerdata2. error= false;
          state.registerdata2. errormessage = "";
          localStorage.setItem("User",JSON.stringify(response.data.users));
          router.push({
            name: "ArtistRegister4"
          });
        }
      }).catch(error => {
        let data = error.response.data.errors;
        state.registerdata2. error= true;
        state.registerdata2. errormessage = data[0].msg;
      });
    },
    showmodal(){
      $('.modal-mask').removeClass('d-none').addClass('show');
    },
    hidemodal(){
      $('.modal-mask').removeClass('d-none').removeClass('show'); 
    }
  },
  actions: {
    fanRgister: function(context,payload) {}
  }
})
