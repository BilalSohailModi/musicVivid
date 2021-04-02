import Vue from 'vue'
import Vuex from 'vuex'
// import createLogger from 'vuex/dist/logger'
import router from './router'
import {Howl, Howler} from 'howler';
import {
  API
} from "@/api/api";
import { ALL_PATH } from "@/Constants/Constants";


Vue.use(Vuex)
var container = null;



export default new Vuex.Store({
  state: {
      ispopup:false,
      isOtpPresent : false,
      isLeaderBoaedPayment : false,
      sound:null,
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
        baseGenreId:"",
        socialMediaFollowing:'1',
        answers: [] ,
        copyrightHolder:"",
        error:false,
        errormessage:"",
        sucessMessage:"",
      },
      songs:[],
      cal:null,
      mp3:[],
      songid:"",
      profilepicture:1,
      volume: 0.5,
      muted:false,
      isSoundMuted: false,
      isPlaying:false,
      isShow: true,
      startseek:false,
      startseekvol:false,
      muteshow:true,
      currentlyPlayingSongId:null
  },
  mutations: {
    playSongs:(state,payload)=>{
      if(payload.songs.length >= payload.index + 1){
        let _songObj = payload.songs[payload.index]
        state.currentlyPlayingSongId = _songObj.id;

      }
      $("#cangespan").html('0:0') ;
      $('.progressive-length').css('width',   0 + '%');
      // state.volume= 0.8;
      // state.muted=false;
      state.isShow = true;
      state.mp3 = [] ;
      state.albumCoverImage = payload.albumCover;
      API.get(`song/${payload.songs[payload .index].id}`, {
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      }).then(response => {
        let _apiRes = response.data.data
        if(state.albumCoverImage == null && _apiRes.AlbumList != undefined && _apiRes.AlbumList.coverImage != undefined && _apiRes.AlbumList.coverImage != null) {
          state.albumCoverImage = ALL_PATH.album_pictures + _apiRes.AlbumList.coverImage
        }
      }).catch( error => {
        console.error(error);
      });

      if(state.sound != null){
        state.sound.pause();
      }
   
     state.sound = null;
      var src = payload.songs.map((e)=>{
        return e.src;
      });
      state.mp3 = payload;
      state.sound   = new Howl({
        autoplay: true,
        html5: true,
        // volume: 0.5,
        volume: state.volume,
        src:  src[payload .index],
        onplay: function() { 
          state.isPlaying = true;
          // step();
      
          // Display the duration.
          // duration.innerHTML = self.formatTime(Math.round(sound.duration()));

          // Start upating the progress of the track.
          // requestAnimationFrame(self.step.bind(self));

          // Start the wave animation if we have already loaded
          // wave.container.style.display = 'block';
          // bar.style.display = 'none';
          // pauseBtn.style.display = 'block';
        },
        onseek: function() {    
          // step();
        }
      });

      container =  state.sound 

      state.songid = payload .id;
      state.sound.play();
      if(state.isSoundMuted) {
        state.sound.mute(true);
        state.muteshow = false;
      }
 
      function step(){  
        var ctemp = state.sound;
        var seek = ctemp.seek() || 0;
        
        $("#cangespan").html(formatTime(Math.round(seek))) 
        //  progress.style.width = (((seek / sound.duration()) * 100) || 0) + '%';

        // If the sound is still playing, continue stepping.
        if (state.sound.playing()) {
        //  step();
        }
      }
      function  formatTime(secs){
        var minutes = Math.floor(secs / 60) || 0;
        var seconds = (secs - minutes * 60) || 0;

        return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
      }
    },
  
    fanRgister:(state,payload) =>{
      API.post("register",  {email:payload.email})
      .then(response => {
        if (response.data) {
          // uodating code here
        }
      }).catch(error => {
        let data = error.response.data.errors;
        if(data.length ==1){
          state.registerdata. error= true;
          state.registerdata. errormessage = data[0].msg;
        } else {
          API.post("register",  payload).then(response => {
            if (response.data) {
              localStorage.setItem("userEmail",response.data.users.email);

              API.post("send-otp-to-email",  {email:payload.email,  newUser: 1}).then(response => {
                if (response.data) {
                  localStorage.setItem("Token",JSON.stringify(response.data.token));
                  router.push({
                    name: "FanRegisterOtp"
                  }); 
                }
              }).catch(error => {
                console.error(error)
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

    artistRgister:(state,payload) =>{
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
    },
    showmenu(){
      $('.header-right').addClass('active');
    },
	closemenu(){
      $('.header-right').removeClass('active');
    }
  },
  actions: {
    fanRgister:(context,payload) => {}
  },
  // plugins: [createLogger()]
})

