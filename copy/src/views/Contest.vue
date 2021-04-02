<template>
<div>
  <body class="inner-page">
    <AppHeader></AppHeader>
    <!-- right slided section -->
    <div class="view-profile-overlay"></div>
    <div
      v-for="candidatees in candidate"
      :key="candidatees.Contestant.userId"
      :id="'view-profile-section'+candidatees.Contestant.userId"
      class="view-profile-section"
    >
      <button class="hide-profile-btn" @click="closeUser(candidatees.Contestant.userId)">
        <i class="fa fa-arrow-right" aria-hidden="true"></i>
      </button>
      <!-- Component render -->
      <GlobalArtist v-bind:passid="candidatees.Contestant.userId"></GlobalArtist>
    </div>
    <!-- End -->

    <div class="live-contest-section">
      <div class="live-contest-header" v-if="!noContestMsg">
        <h1>
          {{headerText}}
          <i @click="leaderboardView()" class="fa fa-star leaderboard-icon"></i>
        </h1>
        <div v-if="!breaktime">
          <div class="contest-item text-center">
            <label>
              <input
                type="radio"
                value="1"
                v-model="genreId"
                @change="fetchCanditae($event.target.value)"
                name="contest_type"
              >
              <span class="contest-type-check">
                <img src="/assets/images/alternative.png" alt="icon">
                Alternative
              </span>
            </label>
            <label>
              <input
                type="radio"
                value="2"
                @change="fetchCanditae($event.target.value)"
                v-model="genreId"
                name="contest_type"
              >
              <span class="contest-type-check">
                <img src="/assets/images/country_music.png" alt="icon">
                Country
              </span>
            </label>
            <label>
              <input
                type="radio"
                value="3"
                @change="fetchCanditae($event.target.value)"
                v-model="genreId"
                name="contest_type"
              >
              <span class="contest-type-check">
                <img src="/assets/images/edm.png" alt="icon">
                EDM
              </span>
            </label>

            <label>
              <input
                type="radio"
                value="4"
                @change="fetchCanditae($event.target.value)"
                v-model="genreId"
                name="contest_type"
              >
              <span class="contest-type-check">
                <img src="/assets/images/hiphop.png" alt="icon">
                Hiphop-RAP
              </span>
            </label>
          </div>
          <div class="contest-item text-center relativediv">
            <label>
              <input
                type="radio"
                value="5"
                @change="fetchCanditae($event.target.value)"
                v-model="genreId"
                name="contest_type"
              >
              <span class="contest-type-check">
                <img src="/assets/images/latin.png" alt="icon">
                World
              </span>
            </label>
            <label>
              <input
                type="radio"
                value="6"
                @change="fetchCanditae($event.target.value)"
                v-model="genreId"
                name="contest_type"
              >
              <span class="contest-type-check">
                <img src="/assets/images/pop.png" alt="icon">
                Pop
              </span>
            </label>
            
            <label
              class=""
            >
              <input
                  type="radio"
                  value="7"
                  @change="fetchCanditae($event.target.value)"
                  v-model="genreId"
                  name="contest_type"
                >
              <span class="contest-type-check">
                <img src="/assets/images/metal.png" alt="icon">
                {{craftLabel}}
              </span>
              <div ref="craftDropdown" class="subsubchild" style="visibility:hidden">
                <label
                  v-for="(subGenre,index) of craftSubGenreList"
                  :key="index+subGenre"
                >
                  <!-- <input
                    type="radio"
                    :value="subGenre.code"
                    @change="fetchCanditae($event.target.value)"
                    v-model="genreId"
                    name="contest_type" > -->
                  <span class="contest-type-check" >
                    <img src="/assets/images/metal.png" alt="icon">
                    {{subGenre.lable}}
                  </span>
                </label>
              </div>
            </label>

            <label>
              <input
                type="radio"
                value="8"
                @change="fetchCanditae($event.target.value)"
                v-model="genreId"
                name="contest_type"
              >
              <span class="contest-type-check">
                <img src="/assets/images/rock.png" alt="icon">
                Rock
              </span>
            </label>
          </div>
        </div>
        <div v-else>
          <div class="text-center">
            <img
              class="rotate"
              v-if="(breakMedialFileName.split('.')[breakMedialFileName.split('.').length-1] == 'mp3')"
              src="/assets/images/music-static.png"
              style="animation-play-state:paused"
            >
          </div>
          <div class="video-container">
            <video
              ref="breakTimeVideoPlayer"
              :key="breakMedialFileName"
              :class="{ containerSize: breakMedialFileName.split('.')[breakMedialFileName.split('.').length-1] == 'mp3' }"
              id="contest-vdo" 
              poster="images/video-poster.png"
              @canplay="breakVideo($event)"
              @playing="breakVideo($event)"
              @pause="breakVideo($event)"
              @ended="breakVideo($event)"
              @waiting="breakVideo($event)"
              @seeked="breakVideo($event)"
              @seeking="breakVideo($event)"
              controls autoplay preload="auto">
              <source :src="breakMedialFileName" type="video/mp4">
            </video>
          </div>
        </div>
        <div>
          <div class="time-box">
            <div class="minute-box">
              <span class="minute formnt"></span> Minutes
            </div>
            <div class="divider-box">
              <span>:</span>
            </div>
            <div class="minute-box">
              <span class="minute forsec"></span> Seconds
            </div>
          </div>
          <div class="btn-box clearfix text-center">
            <button
              type="submit"
              class="submit-btn"
              @click="makerank"
              :disabled="btndis"
              id="vote_submit_btn"
            >Submit</button>
            <!-- <button type="button" class="reset-btn float-right" onClick="window.location.reload()"><img src="images/reset-icon.png" />Reset</button> -->
          </div>
        </div>
      </div>
      <div class="contest-ranking-div">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-12 col-lg-10">
              <div class="rank-row">
                <div class="rank-block" v-for="(candidatees,index) in candidate" :key="index">
                  <div class="inner-rank-block" :id="candidatees.Contestant.userId">
                    <span :id="'position'+candidatees.Contestant.userId" class="position"></span>
                    <img
                      class="pointer-cls"
                      @click="contestMusicList(candidatees.Contestant.userId)"
                      v-if="candidatees.profilePicture==null"
                      src="/assets/images/default_artist.png"
                      alt="Artist"
                    >
                    <img
                      class="pointer-cls"
                      @click="contestMusicList(candidatees.Contestant.userId)"
                      v-else
                      :src="allpath. profile_image_path+candidatees.profilePicture"
                      alt="candidate"
                    >
                    <h1
                      class="candidate-name pointer-cls"
                      @click=" contestMusicList(candidatees.Contestant.userId)"
                    >{{candidatees.fullName}}</h1>
                    <p class="location">
                      <img src="/assets/images/location.png">
                      {{candidatees && candidatees.city ? candidatees.city : ''}}
                      <span
                        v-if="candidatees.city && candidatees.country"
                      >,</span>
                      {{candidatees && candidatees.country ? candidatees.country : ''}}
                      <span
                        v-if="candidatees.country && candidatees.state"
                      >,</span>
                      {{candidatees && candidatees.state ? candidatees.state : ''}}
                      <span
                        v-if="(!candidatees.city && !candidatees.country && !candidatees.state)"
                      >{{candidatees.address}}</span>
                    </p>

                    <button
                      :disabled="profilecard"
                      type="button"
                      :id="'rank'+candidatees.Contestant.userId"
                      @click="makevote(candidatees.Contestant.userId)"
                      class="btn btn-vote not-voted"
                    >Vote 1st</button>
                    <button
                      href="javacsript:;"
                      @click="openUser(candidatees.Contestant.userId)"
                      class="view-profile-btn openprofilebox"
                    >Profile →</button>
                    <div class="like-box liked">
                      <button @click="loveToggle(candidatees.Contestant.userId)">
                        <img
                          v-if="candidatees.follower.length>0 && candidatees.follower[0].loveLikeStatus==2 "
                          src="/assets/images/heart-2.png"
                          alt
                        >
                        <img
                          v-else-if="candidatees.follower.length>0 && candidatees.follower[0].loveLikeStatus==1 "
                          src="/assets/images/heart-1.png"
                          alt
                        >
                        <img v-else src="/assets/images/heart-0.png" alt>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="live-contest-section" v-if="breaktime">Break Time Is Start</div> -->

    <div class="text-center" v-if="noContestMsg">No Ongoing contest</div>

    <!-- live contest modal -->
    <div
      class="modal contest-modal"
      id="live_contest_modal"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <!-- Modal body -->
          <div class="modal-body">
            <div class="modal-inner-body">
              <img src="/assets/images/membership-images.png">
              <p class="mail-title">
                This feature is for
                <br>Members only
              </p>
              <p v-if="!user.PaymentRecord">You have 1 week Free Trial member</p>
              <h1 class="sub-price">
                For
                <span>3.99</span>/mo
              </h1>
              <div class="text-center">
                <button
                  class="modal-learn-more"
                  data-toggle="modal"
                  data-target="#membershipPlan_modal"
                >Learn More</button>
                <br>
                <button class="modal-cancel" @click="closemodal">Not Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Membership -->
    <div
      class="modal contest-modal"
      id="membershipPlan_modal"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <!-- Modal body -->
          <div class="modal-body">
            <div class="modal-inner-body">
              <h1 class="modal-main-heading">Membership plan</h1>
              <p class="mail-title">
                Get unlimited access for 30 days with
                <br>premium features
              </p>
              <ul class="subscribe-features">
                <li>
                  <img src="/assets/images/vote.png" class="list-icon-img">
                  Vote for your favorite artist
                </li>
                <li>
                  <img src="/assets/images/contest_result.png" class="list-icon-img">
                  Review contest results
                </li>
                <li>
                  <img src="/assets/images/leaderboard.png" class="list-icon-img">
                  Unlock leaderboard access
                </li>
                <li>
                  <img src="/assets/images/7_days_logo.jpg" class="list-icon-img free-week">
                  1 Week Free membership, We don't charge your Card until then
                </li>
              </ul>
              <h1 class="sub-price">
                For
                <span>3.99</span>/mo
              </h1>
              <div class="text-center">
                <button class="modal-learn-more" @click="memberView">Become A Member</button>
                <br>
                <button class="modal-cancel" @click="closeModal1">No, I dont want to subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
  <!-- video modal  -->
  <div
    class="modal fade"
    id="video-model-view-contest"
    data-backdrop="static"
    data-keyboard="false"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div>
            <b>{{fileTitle}}</b>
          </div>
          <button type="button" class="close" @click="closeModel()" aria-hidden="true">×</button>
        </div>
        <!-- Modal body -->
        <div class="modal-body">
          <div class="modal-video-container">
            <div class="text-center">
              <img
                v-bind:class="{ rotate: rotation }"
                v-if="(fileType == 'mp3')"
                src="/assets/images/music-static.png"
              >
            </div>
            <video
              @playing="updatePaused($event)"
              @pause="updatePaused($event)"
              @ended="updatePaused($event)"
              v-bind:class="{ containerSize: fileType == 'mp3' }"
              controls
              :src="url"
              preload="auto"
            ></video>
            <!-- <audio controls></audio> -->
          </div>
          <div class="modal-div-btn clearfix">
            <button
              class="modal-back-btn float-left"
              v-bind:class="{ disabledBtn : (currentIndex == 0)}"
              :disabled="(currentIndex == 0)"
              @click="getPrevious()"
            >Previous</button>
            <button
              @click="getNext()"
              v-bind:class="{ disabledBtn : (currentIndex == songList.length -1)}"
              :disabled="(currentIndex == songList.length -1)"
              class="modal-story-btn float-right"
            >Next</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- No contest music modal  -->
  <div class="modal fade" id="no-contest-music-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <!-- Modal body -->
        <div class="modal-body">
          <div class="modal-video-container text-center no-video-msg">No contest music available</div>
          <div class="clearfix close-btn-details">
            <button class="modal-back-btn" @click="noContestMusicModel()">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
      <!-- <AppFooter></AppFooter> -->
 

<script>
$(window).on("popstate", function() {
  $(".modal-backdrop").remove();
});
const Timer = function(callback, delay) {
    var timerId, start, isPaused=true;
    this.remaining = delay;

    this.pause = function() {
      if(!isPaused){
        isPaused=true
        window.clearTimeout(timerId);
        this.remaining -= Date.now() - start;
        console.log('Timer paused. Time remains ', this.remaining/1000)
      }
      else{
        console.log('Timer already paused. Time remains ', this.remaining/1000)
      }
    };

    this.resume = function() {
      isPaused=false
      start = Date.now();
      window.clearTimeout(timerId);
      timerId = window.setTimeout(callback, this.remaining);
      console.log('Timer resumed. Time remains ', this.remaining/1000)
    };

    this.clearTimeout=function(){
      window.clearTimeout(timerId)
    }
    // this.resume();
};
import { ALL_PATH } from "@/Constants/Constants";
import router from "../router";
import { API } from "@/api/api";

import AppHeader from "@/components/AuthHeader.vue";

import GlobalArtist from "@/components/GlobalArtist.vue";
export default {
  name: "Contest",
  props: {
    msg: String
  },
  components: {
    AppHeader,
    GlobalArtist
  },
  data() {
    return {
      breaktimePlaylist: [],
      breakMediaTimer: null,
      craftLabel:"Craft",
      craftSubGenreList: JSON.parse(`[
        {"code":"71","lable":"R&B-Rhythm and Blues"},
        {"code":"72","lable":"Soul"},
        {"code":"73","lable":"Jazz"},
        {"code":"74","lable":"Folk"},
        {"code":"75","lable":"Gospel"},
        {"code":"76","lable":"ALL Other"}]`),
      user: JSON.parse(localStorage.getItem("User")),
      count: 25,
      submit: true,
      otp: "",
      btndis: true,
      passid: null,
      genreId: "2",
      candidate: [],
      allpath: ALL_PATH,
      temp: [],
      initialhit: 0,
      eventTime: 0,
      currentTime: 0,
      diffTime: 0,
      duration: 0,
      minutes: 0,
      seconds: 0,
      slotid: "",
      UserSlot: [],
      breaktime: false,
      inintarval: false,
      isTournament: null,
      profilecard: false,
      type: "",
      breakMedialFileName: "",
      videiImageName: "",
      noContestMsg: false,
      typeId: null,
      seriesId: null,
      headerText: "",
      contestType: null,
      songList: [],
      url: "",
      currentIndex: null,
      fileTitle: "",
      fileType: "",
      rotation: false,
      isContestTimerStarted: false,
    };
  },
  // computed: {
  //   otpCountDown: function() {
  //     this.clearin = setInterval(e => {
  //       if (this.count == 0) {
  //         this.submit = false;
  //         return;
  //       }

  //       this.count--;
  //     }, 1000);
  //   }
  // },
  computed:{
    craftDropdownVisible:{
      get: function () {
        return this.$refs.craftDropdown.style.visibility!=="hidden" ||
          this.$refs.craftDropdown.style.visibility!=="collapse";
      },
      set: function (newValue) {
        this.$refs.craftDropdown.style.visibility= newValue? "visible" : "hidden"
      }
    },
  },

  watch:{
    genreId(newValue){
      newValue=String(newValue)
      let labelClass= this.$refs.craftDropdown.parentElement.classList
      if(newValue!==null && newValue[0]==='7'){
        labelClass.add('subgenre-selected')
        this.craftDropdownVisible=false;
        // this.craftLabel='Craft : '+this.craftSubGenreList.find(sg=>sg.code===newValue).lable
      }
      else{
        labelClass.remove('subgenre-selected')
      }
      
    },
  },

  methods: {
    mouseHoverEvent(e){
      this.craftDropdownVisible= e.type==="mouseover"
    },

    loveToggle(id) {
      API.get(`love-like/${id}`, {
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      }).then(response => {
        if (response.data) {
          this.candidate.map(e => {
            if (e.Contestant.userId == response.data.data.artistId) {
              e.follower = [
                { loveLikeStatus: response.data.data.loveLikeStatus }
              ];
            }
          });
        }
      }).catch(error => {});
    },

    makerank() {
      if (!this.user.PaymentRecord) {
        $("#live_contest_modal").modal("show");
        $("#live_contest_modal").modal({
          backdrop: "static",
          keyboard: false
        });
      } else if (
        this.user.PaymentRecord &&
        this.user.PaymentRecord.paymentType === 2 &&
        this.user.PaymentRecord.isActive === 0
      ) {
        $("#live_contest_modal").modal("show");
        $("#live_contest_modal").modal({
          backdrop: "static",
          keyboard: false
        });
      } else if (
        this.user.PaymentRecord &&
        this.user.PaymentRecord.paymentType === 1 &&
        this.user.PaymentRecord.isActive === 0
      ) {
        $("#live_contest_modal").modal("show");
        $("#live_contest_modal").modal({
          backdrop: "static",
          keyboard: false
        });
      } else {
        var head = {
          headers: {
            "x-access-token": JSON.parse(localStorage.getItem("Token"))
          }
        };
        API.post(`contest/${this.slotid}`, { ranks: this.temp }, head)
          .then(response => {
            if (response.data) {
              this.btndis = true;
              swal(
                "Ranked",
                "You have Ranked The Artist Successfuly !",
                "success"
              );
            }
          })
          .catch(error => {});
      }
    },

    ontimer() {
      this.inintarval = true;
      this.isContestTimerStarted = true;
      this.clearin = setInterval(() => {
        if (this.minutes == 0 && this.seconds == 0) {
          if(this.breakMediaTimer!=null){
            this.breakMediaTimer.clearTimeout()
          }
          this.breaktime = true;
          this.inintarval = false;
          this.isContestTimerStarted = false;
          this.fetchCanditae(this.genreId);
          return;
        }
        if (this.seconds == 0) {
          this.seconds = 59;
          $(".formnt").text(--this.minutes);
          $(".forsec").text(this.seconds);
        }
        else{
          $(".forsec").text(--this.seconds);
        }
      }, 1000);
    },

    makevote(uid) {
      this.initialhit = this.initialhit + 1;
      if (this.isTournament == 0) {
        var dip = "";
        if (this.initialhit == 3) {
          this.btndis = true;
          $(".btn-vote").removeClass(" btn-voted");
          $(".btn-vote").addClass("not-voted");
          this.initialhit = 0;
          this.temp = [];
          $(".inner-rank-block").removeClass("first second third");

          $(".position").text("");
          $(".btn").text("vote 1st");
        } else {
          this.candidate.map(e => {
            if (e.Contestant.userId == uid) {
              if (this.initialhit == 1) {
                e.counted = "Y";
                e.count = 1;
                dip = "first";
                $("#position" + uid).text("1st");
                $("#rank" + uid).text("Voted 1st");
                $("#rank" + uid).removeClass("not-voted");
                $("#rank" + uid).addClass("btn-voted");
                let remain = this.candidate.filter(
                  e1 => e1.Contestant.userId != uid
                );
                remain.forEach(obj => {
                  $("#rank" + obj.Contestant.userId).text("Vote 2nd");
                });
                this.temp.push(e.Contestant.userId);
                return;
              }

              if (this.initialhit == 2) {
                this.temp.map(data => {
                  if (data == uid) {
                    $(".btn-vote").removeClass(" btn-voted");
                    $(".btn-vote").addClass("not-voted");
                    this.initialhit = 0;
                    this.temp = [];
                    $(".inner-rank-block").removeClass("first second third");

                    $(".position").text("");
                    $(".btn").text("Vote 1st");
                  } else {
                    this.temp.push(uid);
                    $("#position" + uid).text("2nd");
                    $("#rank" + uid).text("Voted 2nd");
                    $("#rank" + uid).removeClass("not-voted");
                    $("#rank" + uid).addClass("btn-voted");

                    dip = "second";
                    this.btndis = false;
                    return;
                  }
                });
              }
            } else {
            }
          });
          var thirdid = "";
          
          if (this.temp.length == 2) {
            let difference = this.candidate.filter(
              x => !this.temp.includes(x.Contestant.userId)
            );

            thirdid = difference[0].Contestant.userId;
            this.temp.push(thirdid);
            $("#" + thirdid).addClass("third");
            $("#rank" + thirdid).text("Voted 3rd");
            $("#rank" + thirdid).removeClass("not-voted");
            $("#rank" + thirdid).addClass("btn-voted");
            $("#position" + thirdid).text("3rd");
          }

          $("#" + uid).addClass(dip);
        }
      } else {
        if (this.initialhit == 1) {
          this.temp.push(uid);
          this.btndis = false;
          $("#" + uid).addClass("first");
          $("#position" + uid).text("1st");
          $("#rank" + uid).text("voted 1st");
          $("#rank" + uid).removeClass("not-voted");
          $("#rank" + uid).addClass("btn-voted");
          let remain = this.candidate.filter(e1 => e1.Contestant.userId != uid);
          remain.forEach(obj => {
            this.temp.push(obj.Contestant.userId);
            $("#" + obj.Contestant.userId).addClass("second");
            $("#rank" + obj.Contestant.userId).text("voted 2nd");
            $("#position" + obj.Contestant.userId).text("2nd");
          });
        } else {
          this.btndis = true;
          $(".btn-vote").removeClass(" btn-voted");
          $(".btn-vote").addClass("not-voted");
          this.initialhit = 0;
          this.temp = [];
          $(".inner-rank-block").removeClass("first second third");

          $(".position").text("");
          $(".btn").text("vote 1st");
        }
      }
    },

    fetchCanditae(gid) {
      this.isContestTimerStarted = false;
      clearInterval(this.clearin);
      this.candidate = [];
      this.breaktime = false;
      this.profilecard = false;
      this.initialhit = 0;
      this.btndis = true;
      this.temp = [];
      $(".inner-rank-block").removeClass("first second third");

      $(".position").text("");
      $(".btn").text("vote 1st");
      this.genreId = gid;
      API.get(`contest/${this.type}/${this.genreId}`, {
        headers: { 
          "x-access-token": JSON.parse(localStorage.getItem("Token")),
          'cache-control': 'no-cache, no-store'
        }
      }).then(response => {
          // response.data.data=JSON.parse(` [
          //         {
          //             "id": 411,
          //             "userId": 8676,
          //             "title": "Heart of Appalachia",
          //             "fileName": "1565250561072SRtO9eIcpV.mp4",
          //             "mimeType": "video/mp4",
          //             "priority": 1,
          //             "countViews": 0,
          //             "status": 1,
          //             "createdAt": "2019-08-08T07:49:27.017Z",
          //             "updatedAt": "2019-08-08T07:49:27.017Z"
          //         },
          //         {
          //             "id": 443,
          //             "userId": 8698,
          //             "title": "Good Bad Girl",
          //             "fileName": "1565415867642i3NvEgg73w.mp4",
          //             "mimeType": "video/mp4",
          //             "priority": 1,
          //             "countViews": 0,
          //             "status": 1,
          //             "createdAt": "2019-08-10T05:44:29.153Z",
          //             "updatedAt": "2019-08-10T05:44:29.153Z"
          //         },
          //         {
          //             "id": 444,
          //             "userId": 8698,
          //             "title": " Eileen Carey - Meet Me Halfway",
          //             "fileName": "1565415966635Rm7zA89DhH.mp4",
          //             "mimeType": "video/mp4",
          //             "priority": 2,
          //             "countViews": 0,
          //             "status": 1,
          //             "createdAt": "2019-08-10T05:46:08.093Z",
          //             "updatedAt": "2019-08-10T05:46:08.093Z"
          //         }
          // ]`)
          // response.status=202
          // response.data=JSON.parse(`
          //   {
          //     "data":[
          //       {"id":702,"userId":4073,"title":"audio1","fileName":"1589536481065q4hdElZHKq.mp3","mimeType":"audio/mpeg","priority":2,"countViews":0,"status":1,"createdAt":"2020-05-15T09:54:41.507Z","updatedAt":"2020-05-15T09:54:41.507Z"},{"id":703,"userId":171,"title":"video1","fileName":"1589536637541n2nloYt1kp.mp4","mimeType":"video/mp4","priority":1,"countViews":0,"status":1,"createdAt":"2020-05-15T09:57:17.742Z","updatedAt":"2020-05-15T09:57:17.742Z"},{"id":704,"userId":270,"title":"audio2","fileName":"1589537097074It7mPcC2Rv.mp3","mimeType":"audio/mpeg","priority":1,"countViews":0,"status":1,"createdAt":"2020-05-15T10:04:57.407Z","updatedAt":"2020-05-15T10:04:57.407Z"}
          //     ],
          //     "promoVideo":{"userId":99,"fileName":"15584208917044YQEkMx2OP.mp4","musicImage":"1558420891698lv0fIDBtYK.png"},
          //     "seriesId":2,"contestType":1,"isTournament":false,"timeLeft":290
          //   }
          // `)
          //         {
          //             "id": 412,
          //             "userId": 8676,
          //             "title": "Coal Train",
          //             "fileName": "1565250666453KeCpyQPHQJ.mp4",
          //             "mimeType": "video/mp4",
          //             "priority": 2,
          //             "countViews": 0,
          //             "status": 1,
          //             "createdAt": "2019-08-08T07:51:07.857Z",
          //             "updatedAt": "2019-08-08T07:51:07.857Z"
          //         }
          // response.data=JSON.parse(`
          //   {
          //     "data":[
          //       {"id":605,"userId":8831,"title":"mp3","fileName":"1573653694753SWnee24pXi.mp3","mimeType":"audio/mpeg","priority":1,"countViews":0,"status":1,"createdAt":"2019-11-13T14:01:34.989Z","updatedAt":"2019-11-13T14:01:34.989Z"}
          //     ],
          //     "promoVideo":{"userId":8625,"fileName":"1563363806396P3Uh0h3cyv.mp4","musicImage":"1563363806428XezGYoKPtF.png"},"seriesId":1,"contestType":1,"isTournament":false,"timeLeft":1800,"round":1}
          // `);
          if (response.status == 200) {
            this.isTournament = response.data.data.isTournament;
            this.candidate = response.data.data.Artists;
            this.slotid = response.data.data.id;
            this.UserSlot = response.data.data.UserSlots;

            this.seriesId = response.data.data.seriesId;
            this.contestType = response.data.contestType;
            this.eventTime = response.data.timeLeft;

            //  this.minutes = Math.floor(this.eventTime / 60);
            //   this.seconds = ((this.eventTime % 60));
            //   $(".formnt").text(this.minutes);
            //   $(".forsec").text(this.seconds);

            this.hours = parseInt(this.eventTime / 3600, 10);
            this.minutes = parseInt((this.eventTime % 3600) / 60, 10);
            this.seconds = parseInt((this.eventTime % 3600) % 60, 10);

            $(".formnt").text(this.minutes);
            $(".forsec").text(this.seconds);
            
            if(!this.isContestTimerStarted){
              this.ontimer();
            }

            setTimeout(e => {
              if (this.UserSlot.length > 0) {
                this.profilecard = true;
                this.btndis = true;
                $(".btn-vote").addClass("btn-voted");
                $(".btn-vote").removeClass("not-voted");
                $("#position" + this.UserSlot[0].rank_1).text("1st");
                $("#rank" + this.UserSlot[0].rank_1).text("Voted 1st");
                $("#" + this.UserSlot[0].rank_1).addClass("first");

                $("#position" + this.UserSlot[0].rank_2).text("2nd");
                $("#rank" + this.UserSlot[0].rank_2).text("Voted 2nd");
                $("#" + this.UserSlot[0].rank_2).addClass("second");

                $("#position" + this.UserSlot[0].rank_3).text("3rd");
                $("#rank" + this.UserSlot[0].rank_3).text("Voted 3rd");
                $("#" + this.UserSlot[0].rank_3).addClass("third");
              }
            }, 10);

            this.candidate.map(e => {
              e.count = 1;
              e.counted = "N";
            });

            if (this.seriesId === 1) {
              if (response.data.round === 1) {
                this.headerText = "CONTEST ROUND 1 - 240 ARTISTS";
              } else {
                this.headerText = "CONTEST ROUND 2 - 240 ARTISTS";
              }
            } else if (this.seriesId === 2) {
              this.headerText = "CONTEST ROUND 3 - TOP 96 ARTISTS";
            } else if (this.seriesId === 3) {
              this.headerText = "TOURNAMENT - TOP 32 ARTISTS";
            } else if (this.seriesId === 4) {
              this.headerText = "TOURNAMENT - TOP 16 ARTISTS";
            } else if (this.seriesId === 5) {
              this.headerText = "TOURNAMENT - TOP 8 ARTISTS";
            } else if (this.seriesId === 6) {
              this.headerText = "TOURNAMENT - FINAL 4 ARTISTS";
            } else {
              this.headerText = "TOURNAMENT - TOP 2 ARTISTS";
            }
          } else {
            this.headerText = "BREAK TIME";
                   
            if(response.data.data.length!=0){
              this.breaktimePlaylist=response.data.data
                .map( ({fileName,title})=> ({
                    url:this.allpath.user_contest_music + fileName,
                    title
                  })
                )
              console.log('%cPlaying artist videos','background: yellow; color: blue',JSON.stringify(this.breaktimePlaylist))
            }
            else{
              this.breaktimePlaylist=[ {url:this.allpath.video_path + response.data.promoVideo.fileName} ]
              console.log('%cNo contest data found. Playing promo video.','background: yellow; color: red',JSON.stringify(this.breaktimePlaylist))
            }
            this.playNextBreakMedia();

            if (response.data.isTournament) {
              this.isTournament = 1;
            } else {
              this.isTournament = 0;
            }
            this.seriesId = response.data.seriesId;
            this.contestType = response.data.contestType;

            this.candidate = [];
            this.breaktime = true;
            this.eventTime = response.data.timeLeft;

            this.hours = parseInt(this.eventTime / 3600, 10);
            this.minutes = parseInt((this.eventTime % 3600) / 60, 10);
            this.seconds = parseInt((this.eventTime % 3600) % 60, 10);

            $(".formnt").text(this.minutes);
            $(".forsec").text(this.seconds);

            if (this.inintarval == false) {
              this.ontimer();
            }
          }
        }).catch(error => {
          
          if (error.response.status === 422) {
            if (
              this.user.PaymentRecord &&
              this.user.PaymentRecord.isActive === 1
            ) {
              router.push("/live-contest-serise");
            }
          }
        });
    },

    varifyotp() {
      API.post("verify-email-otp", {
        otp: this.otp,
        accessToken: JSON.parse(localStorage.getItem("Token"))
      }).then(response => {
          if (response.data) {
            this.count = 0;
            this.otp = "";
            localStorage.removeItem("Token");
            swal("Registered!", "You have Registerd Successfuly !", "success");
            router.push({
              name: "FanSuccess"
            });
          }
        }).catch(error => {
          this.otp = "";
          let data = error.response.data.errors;
          swal("Error!", data[0].msg, "error");
        });
    },

    resendotp() {
      this.otp = "";
      this.btndis = true;
      API.post("send-otp-to-email", { email: this.user.email }).then(response => {
        if (response.data) {
          localStorage.setItem("Token", JSON.stringify(response.data.token));
          this.setinitialstae();
          this.btndis = false;
        }
      })
      .catch(error => {});
    },

    setinitialstae() {
      this.count = 25;
      this.submit = true;
    },

    closeUser(id) {
      $("#" + "view-profile-section" + id).removeClass("open");

      $("body").removeClass("no-scroll");
      $(".view-profile-overlay").removeClass("open");
    },

    openUser(id) {
      $("#" + "view-profile-section" + id).addClass("open");

      $("body").addClass("no-scroll");
      $(".view-profile-overlay").addClass("open");
    },

    closemodal() {
      $("#live_contest_modal").modal("hide");
      //router.push("/startcontest");
    },

    closeModal1() {
      $("#membershipPlan_modal").modal("hide");
    },

    memberView() {
      $(".modal-backdrop").remove();
      this.$store.state.ispopup = true;
      router.push({ path: "/addcard" });
    },

    leaderboardView() {
      if (!this.user.PaymentRecord) {
        $("#live_contest_modal").modal("show");
        $("#live_contest_modal").modal({
          backdrop: "static",
          keyboard: false
        });
      } else if (
        this.user.PaymentRecord &&
        this.user.PaymentRecord.paymentType === 2 &&
        this.user.PaymentRecord.isActive === 0
      ) {
        $("#live_contest_modal").modal("show");
        $("#live_contest_modal").modal({
          backdrop: "static",
          keyboard: false
        });
      } 
       else if (
        this.user.PaymentRecord &&
        this.user.PaymentRecord.paymentType === 1 &&
        this.user.PaymentRecord.isActive === 0
      ) {
        $("#live_contest_modal").modal("show");
        $("#live_contest_modal").modal({
          backdrop: "static",
          keyboard: false
        });
      }
      else {
        if (this.isTournament === 1) {
          router.push({
            path: `/tournament-result/${this.typeId}`,
            query: {
              seriesId:
                this.seriesId === 3
                  ? 5
                  : this.seriesId === 4
                  ? 4
                  : this.seriesId === 5
                  ? 3
                  : this.seriesId === 6
                  ? 2
                  : 1,
              contestType: this.contestType
            }
          });
        } else {
          router.push({ path: "/leader-board" });
        }
      }
    },

    contestMusicList(id) {
      this.songList = [];
      API.get(`contest-music/${id}`, {
        headers: {
          "x-access-token": JSON.parse(localStorage.getItem("Token"))
        }
      }).then(response => {
        if (response.data) {
          this.songList = response.data.data;
          if (this.songList.length) {
            $("#video-model-view-contest").modal("show");
            $("#video-model-view-contest").modal({
              backdrop: "static",
              keyboard: false
            });
            this.url =
              this.allpath.user_contest_music + this.songList[0].fileName;
            this.fileTitle = this.songList[0].title;
            this.currentIndex = 0;
            this.fileType = this.url.split(".").pop();
          } else {
            $("#no-contest-music-modal").modal("show");
          }
        }
      }).catch(error => {});
    },

    closeModel() {
      this.url = "";
      $("#video-model-view-contest").modal("hide");
      this.rotation = false;
    },

    noContestMusicModel() {
      $("#no-contest-music-modal").modal("hide");
    },

    getPrevious() {
      this.currentIndex--; // the global variable
      this.show(this.currentIndex, this.songList);
      this.rotation = false;
    },

    getNext() {
      this.currentIndex++; // the global variable
      this.show(this.currentIndex, this.songList);
      this.rotation = false;
    },

    show(index, arr) {
      if (index == 0) {
        this.url = this.allpath.user_contest_music + arr[0].fileName;
        this.fileTitle = arr[0].title;
        this.fileType = this.url.split(".").pop();
      } else if (index == 1) {
        this.url = arr[1]
          ? this.allpath.user_contest_music + arr[1].fileName
          : "";
        this.fileTitle = arr[1] ? arr[1].title : "";
        this.fileType = this.url && arr[1] ? this.url.split(".").pop() : "";
      } else {
        this.url = arr[2]
          ? this.allpath.user_contest_music + arr[2].fileName
          : "";
        this.fileTitle = arr[2] ? arr[2].title : "";
        this.fileType = this.url && arr[2] ? this.url.split(".").pop() : "";
      }
    },

    breakVideo(el){
      var imageDisc=document.querySelector("img[src='/assets/images/music-static.png']");
      if(el.type=='ended' && el.target.currentTime/60==0){
        console.log('%cThis is not expected','background: pink; color: yellow')
      }
      console.log(el,'playing at',parseInt(el.target.currentTime/60)+':'+el.target.currentTime%60);
      if (el.type == "canplay") {
        if(!this.breaktime){
          this.breakMediaTimer.clearTimeout()
          this.breaktimePlaylist=[]
          this.breakMedialFileName ='';
          el.target.pause()
          return;
        }
        var playPromise=el.target.play()
        playPromise.catch((e) => {
          console.warn(e)
          el.target.muted=true
          el.target.play()
        }).then(() => {
          // el.target.muted=false
        });
      }
      if (el.type == "playing") {
        this.breakMediaTimer.resume()
        if(imageDisc){
          imageDisc.style['animation-play-state'] = 'running'
        }
        
      } else if (el.type == "ended") {
        if(imageDisc){
          imageDisc.style['animation-play-state'] = 'paused'
        }
        if(el.target.currentTime==0){
          return
        }
        this.breakMediaTimer.clearTimeout();
        this.playNextBreakMedia();
        if(this.breaktimePlaylist.length===1){
          el.target.play()
        }
      }
      else if ('pause,waiting'.includes(el.type)){
        this.breakMediaTimer.pause()
        if(imageDisc){
          imageDisc.style['animation-play-state'] = 'paused'
        }
      }
    },

    playNextBreakMedia(){
      let currentMediaTitle,currentIndex=this.breaktimePlaylist.map(({url})=>url).indexOf(this.breakMedialFileName)
      console.log("currentMediaTitle: ", currentMediaTitle, " currentIndex=>", currentIndex)
      console.log("this.breaktimePlaylist: ", this.breaktimePlaylist)

      if(currentIndex=== -1 || currentIndex==this.breaktimePlaylist.length-1){
        var {url,title}=this.breaktimePlaylist[0]
      }
      else{
        var {url,title}=this.breaktimePlaylist[currentIndex+1]
      }
      this.breakMedialFileName = url
      currentMediaTitle= title
      
      console.log(
          `%cNow playing: `+currentMediaTitle?'(Artist) '+currentMediaTitle:'Promo Video',
          'background: orange; color: blue',this.breakMedialFileName)
          
      this.breakMediaTimer= new Timer(e=>{
        console.log("settimeout Here......");
        
        if(!this.$refs.breakTimeVideoPlayer || !this.breaktime){
          this.breaktimePlaylist.clearTimeout();

          console.log(
            `%cBreaktime is over, Failed to play next song `+currentMediaTitle,
          'background: orange; color: blue',this.breakMedialFileName)
          return
        }

        console.log(
          `%cLast media was playing at ${
            this.$refs.breakTimeVideoPlayer.currentTime 
          }, Was playing:`,
        'background: yellow; color: blue',this.breakMedialFileName)
        this.playNextBreakMedia()
      },60*1000);
    },

    updatePaused(el) {
      if (el.type == "playing") {
        this.rotation = true;
      } else if (el.type == "ended") {
        this.getNext();
      } else {
        this.rotation = false;
      }
    },

    myPageShowListenerFunc() {
      if (document.hidden) {
        console.log("Page Hidden");
      } else {
        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
        if (isMobile) {
          location.reload();
        }
      }
    }
  },
  mounted() {
    let _this = this;
    $(".btn-vote").click(function() {
      var vote_count = $(".btn-voted").length;
      if (vote_count == 0) {
        $(this).removeClass("not-voted");
        $(this).addClass("btn-voted");
        $(".btn-vote").text("Vote 2nd");
        $(this).text("Voted 1st");
        $(this)
          .parents(".inner-rank-block")
          .addClass("first");
        $(this)
          .parents(".inner-rank-block")
          .find(".position")
          .text("1st");
      }
      if (vote_count == 1) {
        $(this).removeClass("not-voted");
        $(this).addClass("btn-voted");
        $(this).text("Voted 2nd");
        $(this)
          .parents(".inner-rank-block")
          .addClass("second");
        $(this)
          .parents(".inner-rank-block")
          .find(".position")
          .text("2nd");
        $("#vote_submit_btn").removeAttr("disabled");
        if ($(".btn-vote").hasClass("not-voted")) {
          $(".not-voted")
            .parents(".inner-rank-block")
            .addClass("third");
          $(".not-voted")
            .parents(".inner-rank-block")
            .find(".position")
            .text("3rd");
          $(".not-voted").text("Voted 3rd");
          $(".not-voted").addClass("btn-voted");
          $(".not-voted").removeClass("not-voted");
        }
      }
    });

    $("#membershipPlan_modal").on("shown.bs.modal", function(e) {
      $("#membershipPlan_modal").modal({
        backdrop: "static",
        keyboard: false
      });
    });
    document.addEventListener("visibilitychange", _this.myPageShowListenerFunc);
  },

  created() {
    this.typeId = this.$route.params.id;
    if (
      JSON.parse(localStorage.getItem("User")) == null ||
      JSON.parse(localStorage.getItem("User")) == undefined
    ) {
      window.location.href = "/login";
    } else {
      if (this.$route.params.id != undefined || this.$route.params.id != null) {
        this.type = this.$route.params.id;
        this.fetchCanditae(this.genreId);
      } else {
        window.location.href = "/profile";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.leaderboard-icon {
  font-size: 25px;
  margin-left: 10px;
  cursor: pointer;
}
.free-week {
  width: 44px !important;
  left: -8px !important;
}
.disabledBtn {
  cursor: not-allowed;
  background: #8b8aae;
  color: #fff;
}
.pointer-cls {
  cursor: pointer;
}
.containerSize {
  height: 70px !important;
}
.close-btn-details {
  margin: 10px;
  text-align: center;
}
.rotate {
  animation: rotation 8s infinite linear;
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
label.subgenre-selected > span.contest-type-check{
  background-color: #fff;
  color: #514c93;
}
</style>



