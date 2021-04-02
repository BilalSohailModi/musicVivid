<template>
<div class="homegb_new">
<AppHeader></AppHeader>
  <div class="main-banner">
         <div class="container">
            <div class="row justify-content-between align-items-center">
               <div class="banner-image">
                  
                  <div class="custom-video-container">
                          <img src="/assets/images/frame.png" alt>
                          <div class="frame-video-container">
                            <!-- <video preload="auto" id="preview-video" preload="auto" autoplay="autoplay" loop="loop" controls playsinline="true" webkitExitFullscreen="true">
                              <source src="/assets/images/banner-image-new.mp4" type="video/mp4">
                            </video> -->
               <video-player  class="video-player-box"
                 ref="videoPlayer"
                 :options="playerOptions"
                 :playsinline="true"
                         @play="onPlayerPlay($event)"
                         @pause="onPlayerPause($event)"
                         @ended="onPlayerEnded($event)"
                         @loadeddata="onPlayerLoadeddata($event)"
                         @waiting="onPlayerWaiting($event)"
                         @playing="onPlayerPlaying($event)"
                         @timeupdate="onPlayerTimeupdate($event)"
                         @canplay="onPlayerCanplay($event)"
                         @canplaythrough="onPlayerCanplaythrough($event)"
                         @ready="playerReadied"
                         @statechanged="playerStateChanged($event)" >
              </video-player>
                          </div>
                        </div>
                  
               </div>
               <div class="banner-content">
                  <h1 class="banner-title">
                     <em>The</em> Music Competition App
                  </h1>
                  <h2>By MiV ...Music is Vivid</h2>
                  <div class="download_apps_button">
                     <a href="https://play.google.com/store/apps/details?id=com.techno.miv.miv&hl=en" target="_blank" class="store-button">
                     <img src="assets/images/google-play-btn.png" alt>
                     </a>
                     <a href="https://apps.apple.com/in/app/music-is-vivid/id1489035451" target="_blank" class="store-button">
                     <img src="assets/images/apple-store-btn.png" alt>
                     </a>
                  </div>
                  <h2 class="new-title">Tomorrow's Stars Today</h2>
               </div>
            </div>
         </div>
         <div class="home_vote_section">
            <div class="container">
               <h3>
                  <img src="/assets/images/positive-vote.svg" alt>
                  <em>Only Members can vote ... Fans are 100% in Charge</em>
               </h3>
               <h2 class="home-sub-heading">Great Video and Sound Quality 
               </h2>
                <h3 class="noad-heading"><span>NO ADS</span></h3>
               <div class="flexdiv">
                  <div class="home_vote_section_each">
                     <img src="/assets/images/sl1.png" alt>
                     <div class="home_vote_section_each_content">
                        <a class="block-anchor" href="javacsript:;" @click="openModal">
                        <span class="boldtitle">Fan Vote <i class="fa fa-heart link-icon" aria-hidden="true"></i> <i class="fa fa-thumbs-up link-icon" aria-hidden="true"></i></span>
                        </a>
                        <p class="btn-container">
                           <!-- <button type="button" class="btn btn-default signup" @click="$router.push('FanRegister')">Sign Up Now</button> -->
                        </p>
                     </div>
                  </div>
                  <div class="home_vote_section_each">
                     <img src="/assets/images/sl2.png" alt>
                     <div class="home_vote_section_each_content">Fans 100% in Charge</div>
                  </div>
                  <div class="home_vote_section_each">
                     <img src="/assets/images/s13-new.jpg" alt>
                     <div class="home_vote_section_each_content">Live Contest Voting</div>
                  </div>
                  <div class="home_vote_section_each">
                     <img src="/assets/images/sl4-new.jpg" alt>
                     <div class="home_vote_section_each_content">Contest Genre Winner</div>
                  </div>
               </div>
               <!-- <div class="download_apps_button app-store-link">
                  <a href="javascript:;" class="store-button">
                  <img src="assets/images/google-play-store.png" alt>
                  </a>
                  <a href="javascript:;" class="store-button">
                  <img src="assets/images/ios-app-store.png" alt>
                  </a>
               </div> -->
            </div>
         </div>
         <div class="fan_favourite">
            <div class="fan_favourite_inner">
               <div class="container">
                  <h4>Fan Favorites</h4>
                  <div class="fan_favourite_screen">
                     <div class="fan_favourite_screen_each">
                        <div class="inner-fav-screen">
                           <img src="/assets/images/s1.png" alt>
                           <div class="fan_favourite_screen_each_content">Group Friends</div>
                        </div>
                     </div>
                     <div class="fan_favourite_screen_each">
                        <div class="inner-fav-screen">
                           <img src="/assets/images/my-profile-new-image.png" alt>
                           <div class="fan_favourite_screen_each_content">My Profile</div>
                        </div>
                     </div>
                     <div class="fan_favourite_screen_each">
                        <div class="inner-fav-screen">
                           <img src="/assets/images/create-playlist-new.png" alt>
                           <div class="fan_favourite_screen_each_content">Create Playlist</div>
                        </div>
                     </div>
                     <div class="fan_favourite_screen_each">
                        <div class="inner-fav-screen">
                           <img src="/assets/images/s4-new.jpg" alt>
                           <div class="fan_favourite_screen_each_content">Fan Sharing</div>
                        </div>
                     </div>
                     <div class="fan_favourite_screen_each">
                        <div class="inner-fav-screen">
                           <img src="/assets/images/s5.png" alt>
                           <div class="fan_favourite_screen_each_content">Members Only</div>
                        </div>
                     </div>
                  </div>
                  <div class="buttondiv">
                  </div>
               </div>
            </div>
         </div>
         <div class="howitworks">
            <div class="container">
               <h4>How MiV Works</h4>
               <div class="howitworks_flex">
                  <div class="howitworks_content">
                     <div class="download_apps_button app-store-link">
                        <a href="https://play.google.com/store/apps/details?id=com.techno.miv.miv&hl=en" target="_blank" class="store-button">
                        <img src="assets/images/google-play-store.png" alt>
                        </a>
                        <a href="https://apps.apple.com/in/app/music-is-vivid/id1489035451" target="_blank" class="store-button">
                        <img src="assets/images/ios-app-store.png" alt>
                        </a>
                     </div>
                     <div class="how-its-work-content-container">
                        <div class="howitworks_content_each">
                           <span class="hexagon">1</span>
                           <span class="text">Fans Are 100% in Charge; Vote in Contests-Follow-Like-Love.</span>
                        </div>
                        <div class="howitworks_content_each">
                           <span class="hexagon yellow-bg">2</span>
                           <span class="text">
                          New Contest Every 30 minutes, 24 hours in each Genre. 
                           </span>
                        </div>
                        <div class="howitworks_content_each">
                           <span class="hexagon orange-bg">3</span>
                           <span class="text">
                          Limited Number of “Best” Independent Artist chosen by “ Fan 
Following”. Artist Earn!
                           </span>
                        </div>
                        <div class="howitworks_content_each">
                           <span class="hexagon green-bg">4</span>
                           <span class="text">Link to Demo...</span>
                        </div>
                        <div class="howitworks_content_each">
                           <span class="hexagon pink-bg">5</span>
                           <span class="text">
                         More for Fans; Discover new artist/music, Listen anytime, Build 
Playlists, Share. Member- Rewards-Events-Special Fans.
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="member_section">
            <div class="container">
               <h4 class="banner-title">Sign Up Now</h4>
               <div class="row align-items-center">
                  <div class="col-md-6 col-lg-6">
                     <div class="membership_plan_outer clearfix">
                        <div class="membership_plan">
                           <h3>Membership Plan</h3>
                           <p>First 7 Days Free Only Members Vote</p>
                           <ul>
                              <li>
                                 <span class="announcement_icon">
                                 <img src="/assets/images/annoucement.svg">
                                 </span>
                                 <span>
                                 Vote for Your Favorite Artist ..
                                 Only Members Vote..Your 100% in Charge
                                 </span>
                              </li>
                              <li>
                                 <span class="announcement_icon">
                                 <img src="/assets/images/contest_icon.svg">
                                 </span>
                                 <span>Unlimited music contest</span>
                              </li>
                              <li>
                                 <span class="announcement_icon">
                                 <img src="/assets/images/vote_icon.svg">
                                 </span>
                                 <span>
                                 Only Members Vote, see results and
                                 get Leaderboard access
                                 </span>
                              </li>
                           </ul>
                           <div class="member_price">
                              For
                              <sup>$</sup>
                              <font>3.99/</font>mo
                           </div>
                           <span>Cancel anytime</span>
                        </div>
                     </div>
                  </div>
                  <div class="col-md-6 col-lg-6 small-device-center">
                     <span class="member_price">
                     <font>$3.99/</font>Month
                     </span>
                     <div class="pl-35">
                        <span>Cancel anytime</span>
                        <p class="rightdidep">First 7 Days Free Only Members Vote</p>
                        <button  v-if="user.userType == '3'"  @click="$router.push('/contest/1')" type="button" class="btn btn-default subscribenow">
                        Subscribe Now
                        <!-- <img src="/assets/images/right-arrow.svg"> -->
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
     
      <div class="custom-pop-up" id="custom-pop-up">
         <div class="custom-modal-overlay" id="custom-modal-overlay"  @click="closeModal"></div>
          <button class="custom-close-btn" @click="closeModal">
            <img src="/assets/images/close.svg" />
            </button>
         <div class="custom-modal-dialog">
           
            <div class="media-container">
               <img src="/assets/images/animation.gif" />
            </div>
         </div>
      </div>
  <AppFooter></AppFooter>
  </div>
</template>

<script>
// @ is an alias to /src

import AppHeader from "@/components/AuthHeader.vue";
import axios from "axios";
import AppFooter from "@/components/ComonFotter.vue";
import 'video.js/dist/video-js.css';
import { videoPlayer } from 'vue-video-player'

export default {
  name: "AuthHome",
  data() {
    return {
      playerOptions: {
          height: '550',
          width: '250',
          muted: false,
          loop: true,
          autoplay: true,
          preload:"auto",
          language: 'en',
          sources: [{
            type: "video/mp4",
            src: "/assets/images/banner-image-new.mp4"
          }],
      },
      user: JSON.parse(localStorage.getItem("User"))
    };
  },
   computed: {
    player() {
      return this.$refs.videoPlayer.player
    }
  },
  components: {
    AppHeader,
    AppFooter
  },
  methods: {
      onPlayerPlay(player) {
        console.log('player play!' , this.$refs.videoPlayer)
        
      },
      onPlayerPause(player) {
        console.log('player pause!', player)
      },
      onPlayerEnded(player) {
        // console.log('player ended!', player)
      },
      onPlayerLoadeddata(player) {
        // console.log('player Loadeddata!', player)
      },
      onPlayerWaiting(player) {
        // console.log('player Waiting!', player)
      },
      onPlayerPlaying(player) {
        // console.log('player Playing!', player)
      },
      onPlayerTimeupdate(player) {
        // console.log('player Timeupdate!', player.currentTime())
      },
      onPlayerCanplay(player) {
        // console.log('player Canplay!', player)
      },
      onPlayerCanplaythrough(player) {
        // console.log('player Canplaythrough!', player)
      },
      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },
      // player is ready
      playerReadied(player) {
        // console.log('example 01: the player is readied', player)
      },
    openModal() {
      document.getElementById("custom-pop-up").classList.add("open");
      document.body.classList.add("no-scroll");
      document.getElementById("custom-modal-overlay").classList.add("open");
    },
    closeModal() {
      document.getElementById("custom-pop-up").classList.remove("open");
      document.body.classList.remove("no-scroll");
      document.getElementById("custom-modal-overlay").classList.remove("open");
    },
    happyDear: function(){
       console.log("test");
       console.log("This is a vue project with node backend");
    }
  }
};
</script>
