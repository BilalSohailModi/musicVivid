<template>
<div>
  <body class="inner-page">
    <AppHeader></AppHeader>
    <!-- right slided section -->
    <div class="view-profile-overlay"></div>

    <div class="live-contest-section">
      <div class="live-contest-header">
        <h1>Leader Board</h1>
        <div class="leaderboard-searchbox">
          <input
            type="text"
            placeholder="Search Artist"
            class="form-control"
            v-on:keyup="searchVal(searchValue)"
            v-model="searchValue"
          >
          <button type="submit" class="leader-search-btn" @click="searchVal(searchValue)">
            <i class="icon-search"></i> Search
          </button>
        </div>
        <div class="contest-item text-center">
          <label>
            <input type="radio" name="contest_type" checked>
            <span class="contest-type-check" @click="genreIdData(1)">
              <img src="/assets/images/alternative.png" alt="icon">
              Alternative
            </span>
          </label>
          <label>
            <input type="radio" name="contest_type">
            <span class="contest-type-check" @click="genreIdData(2)">
              <img src="/assets/images/country_music.png" alt="icon">
              Country
            </span>
          </label>

          <label>
            <input type="radio" name="contest_type">
            <span class="contest-type-check" @click="genreIdData(3)">
              <img src="/assets/images/edm.png" alt="icon">
              EDM
            </span>
          </label>

          <label>
            <input type="radio" name="contest_type">
            <span class="contest-type-check" @click="genreIdData(4)">
              <img src="/assets/images/hiphop.png" alt="icon">
               Hiphop-RAP
            </span>
          </label>
        </div>
        <div class="contest-item text-center relativediv">
          <label>
            <input type="radio" name="contest_type">
            <span class="contest-type-check" @click="genreIdData(5)">
              <img src="/assets/images/latin.png" alt="icon">
              World
            </span>
          </label>

          <label>
            <input type="radio" name="contest_type">
            <span class="contest-type-check" @click="genreIdData(6)">
              <img src="/assets/images/pop.png" alt="icon">
              Pop
            </span>
          </label>

          <label
            class=""
          >
            <input type="radio" name="contest_type">
            <span class="contest-type-check" @click="genreIdData(7)">
            <img src="/assets/images/metal.png" alt="icon">
            {{craftLabel}}
            </span>
            <div ref="craftDropdown" class="subsubchild" style="visibility:hidden">
              <label
                v-for="(subGenre,index) of craftSubGenreList"
                :key="index+subGenre"
              >
                <!-- <input type="radio" name="contest_type"> -->
                <span class="contest-type-check" >
                  <!-- @click="genreIdData(Number(subGenre.code))" -->
                  <img src="/assets/images/metal.png" alt="icon">
                  {{subGenre.lable}}
                </span>
              </label>
            </div>
          </label>

          <label>
            <input type="radio" name="contest_type">
            <span class="contest-type-check" @click="genreIdData(8)">
              <img src="/assets/images/rock.png" alt="icon">
              Rock
            </span>
          </label>
        </div>
      </div>
      <div class="leaderboard-container">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-12 col-xl-10">
              <!--  -->
              <div class="leader-board-tab-nav">
                <ul class="nav nav-pills leaderboard-tab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active show"
                      data-toggle="pill"
                      href="#live_lb"
                      @click="contestType(1)"
                    >Live</a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      data-toggle="pill"
                      href="#draft_lb"
                      @click="contestType(2)"
                    >Draft</a>
                  </li>
                </ul>
              </div>
              <div class="tab-content">
                <div class="tab-pane active show" id="live_lb">
                  <div class="rank-row leaderboard-row">
                    <div
                      class="rank-block"
                      v-for="(eachRecord,index) in artistOtherRecordsArr"
                      :key="index"
                    >
                      <div class="inner-rank-block">
                        <span class="position"></span>
                        <img class="pointer-cls" @click="artistProfileView(eachRecord)"
                          alt="candidate"
                          :src="eachRecord.User.profilePicture ? allpath.profile_image_path+eachRecord.User.profilePicture : '/assets/images/default_artist.png'"
                        >
                        <h1 @click="artistProfileView(eachRecord)" class="candidate-name pointer-cls">
                          {{eachRecord.User ? eachRecord.User.fullName : ''}}
                          <span
                            v-if="user.userType == 2 && artistOwnRecord && index == 0"
                          >(You)</span>
                        </h1>
                        <p class="location">
                          <img src="/assets/images/location.png">
                          {{eachRecord.User && eachRecord.User.city ? eachRecord.User.city : ''}}<span v-if="eachRecord.User.city && eachRecord.User.country">,</span>
                          {{eachRecord.User && eachRecord.User.country ? eachRecord.User.country : ''}}<span v-if="eachRecord.User.country && eachRecord.User.state">,</span>
                          {{eachRecord.User && eachRecord.User.state ? eachRecord.User.state : ''}}
                          <span v-if="(!eachRecord.User.city && !eachRecord.User.country && !eachRecord.User.state)">{{eachRecord.User.address}}</span>
                        </p>
                        <p class="award-point text-center">
                          <img src="/assets/images/award-trophy.png" alt="icon">
                          <span>{{eachRecord.currentRank}}</span>
                          <span
                            class="credit-point"
                            v-if="(eachRecord.calculatedRank >= 0 && eachRecord.previousRank !== 0)"
                          >+{{eachRecord.calculatedRank}}</span>
                          <span
                            class="deduct-point"
                            v-if="(eachRecord.calculatedRank < 0 && eachRecord.previousRank !== 0)"
                          >{{eachRecord.calculatedRank}}</span>
                        </p>
                        <div v-if="user.userType === '3'" class="like-box liked">
                          <button @click="loveToggle(eachRecord.User.id)">
                            <span v-if="eachRecord.User.follower.length">
                              <img
                                v-if="eachRecord.User.follower[0].loveLikeStatus==2"
                                src="/assets/images/heart-2.png"
                                alt
                              >
                              <img
                                v-else-if="eachRecord.User.follower[0].loveLikeStatus==1"
                                src="/assets/images/heart-1.png"
                                alt
                              >
                              <img v-else src="/assets/images/heart-0.png" alt>
                            </span>
                            <img
                              v-if="!eachRecord.User.follower.length"
                              src="/assets/images/heart-0.png"
                              alt
                            >
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      class="no-data-msg"
                      v-if="!this.artistOtherRecordsArr.length && noDataMsg"
                    >No data found</div>
                    <!-- pagination -->
                    <infinite-loading :identifier="infiniteId" @infinite="infiniteHandler">
                      <div slot="spinner">
                        <img src="/assets/images/loader.gif">
                      </div>
                      <div slot="no-more">{{""}}</div>
                      <div slot="no-results">{{""}}</div>
                    </infinite-loading>
                  </div>
                </div>
                <div class="tab-pane" id="draft_lb">
                  <div class="rank-row leaderboard-row">
                    <div
                      class="rank-block"
                      v-for="(eachRecord,index) in artistOtherRecordsArr"
                      :key="index"
                    >
                      <div class="inner-rank-block">
                        <span class="position"></span>
                        <img class="pointer-cls" @click="artistProfileView(eachRecord)"
                          alt="candidate"
                          :src="eachRecord.User.profilePicture ? allpath.profile_image_path+eachRecord.User.profilePicture : '/assets/images/default_artist.png'"
                        >
                        <h1 class="candidate-name pointer-cls"  @click="artistProfileView(eachRecord)">
                          {{eachRecord.User ? eachRecord.User.fullName : ''}}
                          <span
                            v-if="user.userType == 2 && artistOwnRecord && index == 0"
                          >(You)</span>
                        </h1>
                        <p class="location">
                          <img src="/assets/images/location.png">
                          {{eachRecord.User && eachRecord.User.city  ? eachRecord.User.city : ''}}<span v-if="eachRecord.User.city && eachRecord.User.country">,</span>
                          {{eachRecord.User && eachRecord.User.country  ? eachRecord.User.country : ''}}<span v-if="eachRecord.User.country && eachRecord.User.state">,</span>
                          {{eachRecord.User && eachRecord.User.state  ? eachRecord.User.state : ''}}
                          <span v-if="(!eachRecord.User.city && !eachRecord.User.country && !eachRecord.User.state)">{{eachRecord.User.address}}</span>
                        </p>
                        <p class="award-point text-center">
                          <img src="/assets/images/award-trophy.png" alt="icon">
                          <span>{{eachRecord.currentRank}}</span>
                          <span
                            class="credit-point"
                            v-if="(eachRecord.calculatedRank >= 0 && eachRecord.previousRank !== 0)"
                          >
                            +
                            {{eachRecord.calculatedRank}}
                          </span>
                          <span
                            class="deduct-point"
                            v-if="(eachRecord.calculatedRank < 0 && eachRecord.previousRank !== 0)"
                          >{{eachRecord.calculatedRank}}</span>
                        </p>
                        <div v-if="user.userType === '3'" class="like-box liked">
                          <button @click="loveToggle(eachRecord.User.id)">
                            <span v-if="eachRecord.User.follower.length>0">
                              <img
                                v-if="eachRecord.User.follower[0].loveLikeStatus==2"
                                src="/assets/images/heart-2.png"
                                alt
                              >
                              <img
                                v-else-if="eachRecord.User.follower[0].loveLikeStatus==1"
                                src="/assets/images/heart-1.png"
                                alt
                              >
                              <img v-else src="/assets/images/heart-0.png" alt>
                            </span>
                            <img
                              v-if="!eachRecord.User.follower.length"
                              src="/assets/images/heart-0.png"
                              alt
                            >
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      class="no-data-msg"
                      v-if="!this.artistOtherRecordsArr.length && noDataMsg"
                    >No data found</div>
                    <!-- pagination -->
                    <infinite-loading :identifier="infiniteId" @infinite="infiniteHandler">
                      <div slot="spinner">
                        <img src="/assets/images/loader.gif">
                      </div>
                      <div slot="no-more">{{""}}</div>
                      <div slot="no-results">{{""}}</div>
                    </infinite-loading>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- video modal  -->
    <div class="modal fade" id="video-modal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" @click="closeModel()" aria-hidden="true">×</button>
          </div>
          <div class="modal-body">
            <div class="modal-video-container">
              <video controls v-if="promoVideo" :src="promotionalVideo" preload="auto"></video>
              <video controls v-if="!promoVideo" :src="introductionVideo" preload="auto"></video>
            </div>
            <div class="modal-div-btn clearfix">
              <button
                class="modal-back-btn float-left"
                v-if="isBack && controlBtn"
                @click="backVideo()"
              >Back</button>
              <button
                class="modal-story-btn float-right"
                v-if="!isBack && controlBtn"
                @click="nextVideo()"
              >Intro</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- No video modal  -->
    <!-- <div class="modal fade" id="no-video-modal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <div class="modal-video-container text-center no-video-msg">No video available</div>
            <div class="clearfix close-btn">
              <button class="modal-back-btn" @click="noVideoCloseModel()">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </body>
</div>
</template>
      <!-- <AppFooter></AppFooter> -->
 

<script>
import { ALL_PATH } from "@/Constants/Constants";
import router from "../router";
import { API } from "@/api/api";
import InfiniteLoading from "vue-infinite-loading";
import AppHeader from "@/components/AuthHeader.vue";

import GlobalArtist from "@/components/GlobalArtist.vue";
export default {
  name: "Leaderdashboard",
  props: {
    msg: String
  },
  components: {
    AppHeader,
    InfiniteLoading,
    GlobalArtist
  },
  data() {
    return {
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
      genreId: "1",
      candidate: [],
      allpath: ALL_PATH,
      temp: [],
      initialhit: 0,
      eventTime: 0,
      currentTime: 0,
      diffTime: 0,
      duration: 0,
      interval: 1000,
      minutes: 0,
      seconds: 0,
      slotid: "",
      UserSlot: [],
      breaktime: false,
      inintarval: false,
      isTournament: null,
      profilecard: false,
      type: "",
      videofileName: "",
      videiImageName: "",

      genreIdValue: 1,
      typeIdValue: 1,
      searchValue: "",
      artistOtherRecordsArr: [],
      artistOwnRecord: {},
      page: 1,
      noDataMsg: false,
      infiniteId: +new Date(),
      promotionalVideo: "",
      introductionVideo: "",

      isBack: false,
      promoVideo: true,
      controlBtn: true,
      isTournamentValue: null,
      typeValue: null
    };
  },
  computed: {
    craftDropdownVisible:{
      get: function () {
        return this.$refs.craftDropdown.style.visibility!=="hidden" ||
          this.$refs.craftDropdown.style.visibility!=="collapse";
      },
      set: function (newValue) {
        this.$refs.craftDropdown.style.visibility= newValue? "visible" : "hidden"
      }
    },
    otpCountDown: function() {}
  },
  watch:{
    'genreIdValue':function(newValue){
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
      
    }
  },
  methods: {
    mouseHoverEvent(e){
      this.craftDropdownVisible= e.type==="mouseover"
    },
    loveToggle(id) {
      API.get(`love-like/${id}`, {
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      })
        .then(response => {
          if (response.data) {
            this.artistOtherRecordsArr.map(e => {
              if (e.User.id == response.data.data.artistId) {
                e.User.follower = [
                  { loveLikeStatus: response.data.data.loveLikeStatus }
                ];
              }
            });
          }
        })
        .catch(error => {});
    },
    makerank() {
      var head = {
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
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
    },
    ontimer() {
      this.inintarval = true;
      this.clearin = setInterval(() => {
        if (this.minutes == 0 && this.seconds == 0) {
          this.breaktime = true;
          this.inintarval = false;
          this.fetchCanditae(this.genreId);
          return;
        }
        $(".forsec").text(--this.seconds);

        if (this.seconds == 0) {
          if (this.minutes == 0 && this.seconds == 0) {
            this.breaktime = true;
            this.inintarval = false;
            this.fetchCanditae(this.genreId);
            return;
          } else {
            this.seconds = 60;
            $(".formnt").text(--this.minutes);
          }
        }
      }, this.interval);
    },

    makevote(uid) {
      this.initialhit = this.initialhit + 1;
      if (this.isTournament == 0) {
        var dip = "";

        if (this.initialhit == 3) {
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
          console.log(this.temp);
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
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      })
        .then(response => {
          if (response.status == 200) {
            this.isTournament = response.data.data.isTournament;
            this.candidate = response.data.data.Artists;
            this.slotid = response.data.data.id;
            this.UserSlot = response.data.data.UserSlots;

            this.eventTime = response.data.timeLeft * 1000;
            this.minutes = Math.floor(this.eventTime / 60000);
            this.seconds = ((this.eventTime % 60000) / 1000).toFixed(0);
            $(".formnt").text(this.minutes);
            $(".forsec").text(this.seconds);

            this.ontimer();

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
          } else {
            this.videofileName =
              this.allpath.video_path + response.data.data.fileName;
            // this.videiImageName = response.data.musicImage;
            this.candidate = [];
            this.breaktime = true;
            this.eventTime = response.data.timeLeft * 1000;
            this.minutes = Math.floor(this.eventTime / 60000);
            this.seconds = ((this.eventTime % 60000) / 1000).toFixed(0);
            $(".formnt").text(this.minutes);
            $(".forsec").text(this.seconds);
            if (this.inintarval == false) {
              this.ontimer();
            }
          }
        })
        .catch(error => {});
    },
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
            swal("Registered!", "You have Registerd Successfuly !", "success");
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
      API.post("send-otp-to-email", { email: this.user.email })
        .then(response => {
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

    // added by Debanjan

    // leader-board-artist view

    artistView() {
      console.log("artist");
      this.artistOtherRecordsArr = [];
      var senddata1 = {
        search_key: this.searchItem,
        page: 1,
        perPage: 10
      };
      API.get(`leader-board-artist/${this.typeIdValue}/${this.genreIdValue}`, {
        params: senddata1,
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      })
        .then(response => {
          if (response.data) {
            this.artistOtherRecordsArr = response.data.data.otherRecords;
            this.artistOwnRecord = response.data.data.ownRecord;
            if (this.artistOwnRecord) {
              this.artistOtherRecordsArr.unshift(this.artistOwnRecord);
            }

            this.artistOtherRecordsArr.forEach(item => {
              item.calculatedRank = item.previousRank - item.currentRank;
            });
          }
          if (!response.data.data.otherRecords.length) {
            this.noDataMsg = true;
          }
        })
        .catch(error => {});
    },

    // leader-board-fan view

    fanView() {
      this.artistOtherRecordsArr = [];
      var senddata1 = {
        search_key: this.searchItem,
        page: 1,
        perPage: 10
      };
      API.get(`leader-board-fan/${this.typeIdValue}/${this.genreIdValue}`, {
        params: senddata1,
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      })
        .then(response => {
          if (response.data) {
            console.log("fan-leader-board", response.data.data);
            this.artistOtherRecordsArr = response.data.data;

            this.artistOtherRecordsArr.forEach(item => {
              item.calculatedRank = item.previousRank - item.currentRank;
            });
          }
        })
        .catch(error => {});
    },

    contestType(typeId) {
      this.noDataMsg = false;
      this.typeIdValue = typeId;
      this.infiniteId += 1;
      this.artistOtherRecordsArr = [];
      if (this.user.userType === "2") {
        this.artistView();
      } else {
        this.fanView();
      }
    },

    genreIdData(id) {
      this.noDataMsg = false;
      this.genreIdValue = id;
      this.infiniteId += 1;
      this.artistOtherRecordsArr = [];
      if (this.user.userType === "2") {
        this.artistView();
      } else {
        this.fanView();
      }
    },

    searchVal(searchValue) {
      this.noDataMsg = false;
      console.log(searchValue);
      this.searchItem = searchValue;
      this.infiniteId += 1;
      if (this.user.userType === "2") {
        this.artistView();
      } else {
        this.fanView();
      }
    },

    infiniteHandler($state) {
      // this.artistOtherRecordsArr = [];
      console.log("call scroll");
      console.log("infinite scroll");
      this.page = this.page + 1;
      var senddata2 = {
        page: this.page,
        perPage: 10,
        search_key: this.searchItem
      };
      let userType = JSON.parse(localStorage.getItem("User")).userType;
      API.get(
        userType === "2"
          ? `leader-board-artist/${this.typeIdValue}/${this.genreIdValue}`
          : `leader-board-fan/${this.typeIdValue}/${this.genreIdValue}`,
        {
          params: senddata2,
          headers: {
            "x-access-token": JSON.parse(localStorage.getItem("Token"))
          }
        }
      )
        .then(response => {
          if (response.data) {
            console.log("infinite", response.data);
            if (userType === "2") {
              response.data.data.otherRecords.map(e => {
                this.artistOtherRecordsArr.push(e);
              });
            } else {
              response.data.data.map(e => {
                this.artistOtherRecordsArr.push(e);
              });
            }

            this.artistOtherRecordsArr.forEach(item => {
              item.calculatedRank = item.previousRank - item.currentRank;
            });
            if (userType === "3") {
              if (response.data.data.length === 0) {
                $state.complete();
              } else {
                $state.loaded();
              }
            } else {
              if (response.data.data.otherRecords.length === 0) {
                $state.complete();
              } else {
                $state.loaded();
              }
            }
          }
        })
        .catch(error => {});
    },

    // open video model

    artistProfileView(eachRecord) {
      // if (this.user.userType === "2") {
        router.push({ path: `/artist-view-fan-side/${eachRecord.User.id}` });
      // } else {
      //   if (eachRecord.User.UserFiles && eachRecord.User.UserFiles.length) {
      //     this.sortVideoItem(eachRecord.User.UserFiles);
      //     $("#video-modal").modal("show");
      //   } else {
      //     $("#no-video-modal").modal("show");
      //   }
      //   // if statememt for single video
      //   if (eachRecord.User.UserFiles.length == 1) {
      //     this.controlBtn = false;
      //   }
      // }
    },

    // sortVideoItem(userFileArr) {
    //   userFileArr.forEach(eachVideo => {
    //     if (eachVideo.subCategoryType === 1) {
    //       this.promotionalVideo = this.allpath.video_path + eachVideo.fileName;
    //     } else if (eachVideo.subCategoryType === 2) {
    //       this.introductionVideo = this.allpath.video_path + eachVideo.fileName;
    //     }
    //   });
    //   if (userFileArr.length === 1 && userFileArr[0].subCategoryType == 2) {
    //     this.promoVideo = false;
    //   }
    // },

    // nextVideo() {
    //   this.isBack = true;
    //   this.promoVideo = false;
    // },

    // backVideo() {
    //   this.isBack = false;
    //   this.promoVideo = true;
    // },

    // closeModel() {
    //   this.promotionalVideo = "";
    //   this.introductionVideo = "";
    //   this.controlBtn = true;
    //   this.promoVideo = true;
    //   (this.isBack = false), $("#video-modal").modal("hide");
    // },
    // noVideoCloseModel() {
    //   $("#no-video-modal").modal("hide");
    // }

    // call this API for checking isTournament value

    // contest() {
    //   API.get(`contest/1/1`, {
    //      headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
    //   })
    //  .then(response => {
    //       if (response.status == 200) {
    //         this.isTournamentValue = response.data.data.isTournament;
    //         this.seriesId = response.data.data.seriesId;
    //         this.typeValue = response.data.data.type;

    //         if(this.isTournamentValue === 1) {
    //            router.push({ path: `/tournament-result/${this.typeValue}` , query: { seriesId: this.seriesId}});
    //         } else {
    //         }
    //       }
    //   })
    //   .catch(error => {
    //        if(error.response.status === 422) {

    //        }
    //     });
    // }
  },
  mounted() {
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
        // $('inner-rank-block').each(function() {
        //     var thisone = $(this);
        //     if (!thisone.hasClass('first')) {
        //         thisone.children('.btn-voted').addClass('btn-voted').text('Voted 3rd');
        //     }
        // });
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

    if (JSON.parse(localStorage.getItem("User")).userType === "3") {
      this.fanView();
    } else if (JSON.parse(localStorage.getItem("User")).userType === "2") {
      this.artistView();
    }
    // this.contest();
  },
  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pointer-cls {
  cursor: pointer;
}
.close-btn {
  margin: 10px;
  text-align: center;
}
.no-video-msg {
  font-size: 22px;
}
label.subgenre-selected > span.contest-type-check{
  background-color: #fff;
  color: #514c93;
}
</style>



