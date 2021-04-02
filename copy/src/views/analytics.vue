<template>
  <div>
    <AppHeader></AppHeader>
    <div>
      <div class="live-contest-section">
        <div class="live-contest-header analytic-banner">
          <h1>Analytics</h1>
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
                Craft
              </span>
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
        <div class="static-banner">
          <img src="/assets/images/nye-banner-1.jpg" class="full-img">
        </div>
        <div class="leaderboard-container analytic-container">
          <div class="container-fluid">
            <div class="row justify-content-center">
              <div class="col-md-12">
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

                <ul class="analytic-uploaded-listing">
                  <li>
                    <a href="javascript:;" class="inner-list-block">
                      <h2 class="uploaded-title">
                        <img src="/assets/images/track-leaf.png" alt>
                        {{analyticsDetails.countSongs}}
                      </h2>
                      <p class="uploaded-song-count m-0">Songs Uploaded</p>
                    </a>
                  </li>

                  <li>
                    <a href="javascript:;" class="inner-list-block">
                      <h2 class="uploaded-title">
                        <img src="/assets/images/album-icon.png" alt class="img-invert">
                        {{analyticsDetails.countAlbums}}
                      </h2>
                      <p class="uploaded-song-count m-0">Albums Created</p>
                    </a>
                  </li>
                </ul>

                <div class="contest-time-dv" v-if="!(analyticsDetails.isContestRunning)">
                  <h3>Next Contest Begins</h3>

                  <div class="next-contest-time">
                    <ul class="time-listing">
                      <li>
                        <span>{{days}}</span>
                        Days
                      </li>
                      <li>
                        <span>{{hours}}</span>
                        Hours
                      </li>
                      <li>
                        <span>{{minutes}}</span>
                        Minutes
                      </li>
                      <li>
                        <span>{{seconds}}</span>
                        Seconds
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="contest-time-dv" v-if="(analyticsDetails.isContestRunning)" @click="contestPage()">
                  <div class="text-center">Contest on progress</div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <h2 class="past-contest-result">Past Contest Results</h2>
        <div class="position-listing-section" v-if="(analyticsDetails.isPastResultAvailable)">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="analytic-position-container">
                  <div class="date-box">
                    <img src="/assets/images/calendar.svg">
                    <span>{{analyticsDetails.contestEndDate}}</span>
                  </div>

                  <div class="contest-time-dv analytic-position">
                    <ul class="analytic-position-list" v-for="(item,index) in contestResultArr" :key="index">
                      <li>
                        <div class="position">{{item.rank}}<small>{{item.rank === 1 ? 'st.' : item.rank === 2 ? 'nd.' : 'rd.'}}</small></div>
                        <div class="position-person">
                          <div class="person-img">
                            <img :src="item.User.profilePicture ?
                             'item.User.profilePicture' : '/assets/images/default_artist.png'">
                          </div>
                          <div class="person-progress-container">
                            <h3>{{item.User.fullName}}</h3>
                            <div class="progress-bar-container">
                              <div class="progressbar-wrap">
                                <div class="progress">
                                  <div
                                    class="progress-bar"
                                    role="progressbar"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    v-bind:style="{width: item.modifiedArr[0].votesAcquired + '%'}"
                                  >{{item.modifiedArr[0].votesAcquired}}%</div>
                                </div>
                              </div>
                              <div class="percent-div">{{item.modifiedArr[0].votesAcquired}}%</div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <!-- <div class="text-center" v-if="!contestResultArr.length">No Data found</div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="position-listing-section" v-if="!(analyticsDetails.isPastResultAvailable)">
          <div class="text-center contest-time-dv">No past contest result available</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router";
import { ALL_PATH } from "@/Constants/Constants";
import { HELPER } from "@/Helper/Helper";
import AppHeader from "@/components/AuthHeader.vue";
import axios from "axios";
import { API } from "@/api/api";
export default {
  name: "analytics",
  props: {
    msg: String
  },
  data() {
    return {
      user: JSON.parse(localStorage.getItem("User")),
      analyticsDetails: {},
      eventTime: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      contestResultArr : [],
      genreIdValue: 1,
      typeIdValue: 1,
      craftLabel:"Craft",
      craftSubGenreList: JSON.parse(`[
        {"code":"71","lable":"R&B-Rhythm and Blues"},
        {"code":"72","lable":"Soul"},
        {"code":"73","lable":"Jazz"},
        {"code":"74","lable":"Folk"},
        {"code":"75","lable":"Gospel"},
        {"code":"76","lable":"ALL Other"}]`),
    };
  },
  components: {
    AppHeader
  },
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
    'genreIdValue':function(newValue){
      newValue=String(newValue)
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
    // analytics artist
    analytics() {
      this.artistOtherRecordsArr = [];
      API.get(`analytics/${this.typeIdValue}/${this.genreIdValue}`, {
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      }).then(response => {
        if (response.data) {
          this.analyticsDetails = response.data;
          if(this.analyticsDetails.isContestRunning == 0) {
              this.eventTime = Math.abs(this.analyticsDetails.nextContestOn);
              this.startTimer(this.eventTime);
          }
          this.contestResultArr = this.analyticsDetails.contestResult;
          this.contestResultArr.forEach((eachItem, index) => {
            eachItem.modifiedArr = [];
            eachItem.TournamentRecords.forEach((item, index) => {
              if (eachItem.TournamentRecords.length === 1) {
                eachItem.modifiedArr.push(item);
              } else {
                if (item.seriesId === 7) {
                  eachItem.modifiedArr.push(item);
                }
              }
            });
          });
        }
      }).catch(error => {});
    },

    contestType(typeId) {
      this.noDataMsg = false;
      this.typeIdValue = typeId;
      this.contestResultArr = [];
      this.analytics();
    },

    genreIdData(id) {
      this.noDataMsg = false;
      this.genreIdValue = id;
      this.artistOtherRecordsArr = [];
      this.analytics();
    },

    startTimer(duration) {
      var timer = duration;
      setInterval(() => {
        this.days = parseInt(timer / 86400, 10);
        this.hours = parseInt(timer / 3600, 10);
        this.minutes = parseInt((timer % 3600) / 60, 10);
        this.seconds = parseInt((timer % 3600) % 60, 10);

        this.days = this.days < 10 ? "0" + this.days : this.days;
        this.hours = this.hours < 10 ? "0" + this.hours : this.hours;
        this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
        this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;

        if (--timer < 0) {
          timer = duration;
        }
      }, 1000);
    },
    contestPage() {
      if(this.user.userType == 3 ) {
        router.push("/contest/1");
      } else {
        router.push("/leader-board");
      }
    }
  },

  created() {
    this.analytics();
  },

  mounted() {
    
  },
  destroyed() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.past-contest-result {
  text-align: center;
  font-size: 18px;
  margin: 15px 0;
  font-family: "Quicksand", sans-serif;
}
label.subgenre-selected > span.contest-type-check{
  background-color: #fff;
  color: #514c93;
}
</style>