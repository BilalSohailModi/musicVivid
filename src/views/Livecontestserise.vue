<template>
<div>
  <body class="inner-page">
    <AppHeader></AppHeader>
    <div class="live-contest-section">
      <div class="live-contest-header">
        <h1>{{typeIdValue === 1 ? 'Live Contest' : 'Draft Contest'}}</h1>

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

        <div class="serise-time-wrap">
          <div class="container-fluid">
            <div class="row justify-content-center">
              <div class="col-12 col-md-10">
                <p class="text-center serise-para">
                  {{contestTypeValue === 1 ? 
                  'Series 2 will Starting Soon' : contestTypeValue === 2 ? 'Playoff will Starting Soon' : 
                  'Series 1 will Starting Soon'}}
                  </p>
              </div>
            </div>
          </div>

          <div class="time-box">
            <div class="minute-box">
              <span class="minute">{{hours}}</span> Hours
            </div>
            <div class="divider-box">
              <span>:</span>
            </div>
            <div class="minute-box">
              <span class="minute">{{minutes}}</span> Minutes
            </div>
            <div class="divider-box">
              <span>:</span>
            </div>
            <div class="minute-box">
              <span class="minute">{{seconds}}</span> Seconds
            </div>
          </div>
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
                    <a class="nav-link active" 
                    data-toggle="pill" 
                    href="#live_lb"
                    @click="contestType(1)">Live</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" 
                    data-toggle="pill" 
                    href="#draft_lb"
                    @click="contestType(2)">Draft</a>
                  </li>
                </ul>
              </div>
              <div class="tab-content">
                <div class="tab-pane active" id="live_lb">
                  <div class="rank-row leaderboard-row">
                    <div class="rank-block series2-block" v-for="(contest,index) in contestSeriesArr"
                      :key="index">
                      <div class="inner-rank-block">
                        <span class="position"></span>
                        <img alt="candidate"  
                         :src="contest.User.profilePicture ? allpath.profile_image_path+contest.User.profilePicture : '/assets/images/default_artist.png'">
                        <h1 class="candidate-name">{{contest.User ? contest.User.fullName : ''}}</h1>
                        <p class="location">
                          <img src="/assets/images/location.png">
                          {{contest.User && contest.User.city  ? contest.User.city : ''}}<span v-if="contest.User.city && contest.User.country">,</span>
                          {{contest.User && contest.User.country  ? contest.User.country : ''}}<span v-if="contest.User.country && contest.User.state">,</span>
                          {{contest.User && contest.User.state  ? contest.User.state : ''}}
                          <span v-if="(!contest.User.city && !contest.User.country && !contest.User.state)">{{contest.User.address}}</span>
                          
                        </p>
                        <p class="award-point text-center">
                          <img src="/assets/images/award-trophy.png" alt="icon">
                          <span>{{contest.rank}}</span>
                        </p>
                        <!-- <div class="like-box liked">
                          <button>
                            <img src="/assets/images/heart-2.png" alt>
                          </button>
                        </div> -->
                      </div>
                    </div>
                      <div class="no-data-msg"
                      v-if="!this.contestSeriesArr.length && noDataMsg"
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
                    <div class="rank-block series2-block" v-for="(contest,index) in contestSeriesArr"
                      :key="index">
                      <div class="inner-rank-block">
                        <span class="position"></span>
                        <img alt="candidate" 
                        :src="contest.User.profilePicture ? 
                        allpath.profile_image_path+contest.User.profilePicture : 
                        '/assets/images/default_artist.png'">
                        <h1
                          class="candidate-name"
                        >{{contest.User ? contest.User.fullName : ''}}</h1>
                        <p class="location">
                          <img src="/assets/images/location.png">
                         {{contest.User && contest.User.city  ? contest.User.city : ''}}<span v-if="contest.User.country">,</span>
                          {{contest.User && contest.User.country  ? contest.User.country : ''}}<span v-if="contest.User.state">,</span>
                          {{contest.User && contest.User.state  ? contest.User.state : ''}}
                          <span v-if="(!contest.User.city && !contest.User.country && !contest.User.state)">{{contest.User.address}}</span> 
                        </p>
                        <p class="award-point text-center">
                          <img src="/assets/images/award-trophy.png" alt="icon">
                          <span>{{contest.rank}}</span>
                        </p>
                        <!-- <div class="like-box liked">
                          <button>
                            <img src="/assets/images/heart-2.png" alt>
                          </button>
                        </div> -->
                      </div>
                    </div>
                    <div class="no-data-msg"
                      v-if="!this.contestSeriesArr.length && noDataMsg"
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
  name: "Livecontestserise",
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
       allpath: ALL_PATH,
       eventTime: 0,
       hours : 0,
       minutes: 0,
       seconds: 0,
       contestSeriesArr : [],
       genreIdValue: 1,
       typeIdValue: 1,
       page: 1,
       infiniteId: +new Date(),
       noDataMsg: false,
       contestTypeValue : Number
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
    contestSeriseList() {
      var senddata1 = {
        // search_key: this.searchItem,
        page: 1,
        perPage: 10
      };
      API.get(`contest-result/${this.genreIdValue}/${this.typeIdValue}`, {
        params: senddata1,
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      })
        .then(response => {
          if (response.data) {
            this.contestSeriesArr =  response.data.data;
            this.eventTime = Math.abs(response.data.timeLeft);
            // time left function
            this.startTimer(this.eventTime);
            this.contestTypeValue = response.data.contestType;

          }
          if (!response.data.data.length) {
            this.noDataMsg = true;
          }
          if(this.contestTypeValue === 3) {
            router.push({ path:'/top-three-result'});
          }
        })
        .catch(error => {});
    },

  startTimer(duration) {
    var timer = duration;
    setInterval(() => {
        this.hours = parseInt(timer / 3600, 10);
        this.minutes = parseInt(timer % 3600 / 60, 10);
        this.seconds = parseInt(timer % 3600 % 60, 10);
        
        this.hours = this.hours < 10 ? "0" + this.hours : this.hours;
        this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
        this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;


        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);

},


  contestType(typeId) {
    this.noDataMsg = false;
    this.typeIdValue = typeId;
    this.infiniteId += 1;
    this.contestSeriesArr = [];
    this.contestSeriseList();
  },

  genreIdData(id) {
    this.noDataMsg = false;
    this.genreIdValue = id;
    this.infiniteId += 1;
    this.contestSeriesArr = [];
    this.contestSeriseList();
    },

  infiniteHandler($state) {
      this.page = this.page + 1;
      var senddata2 = {
        page: this.page,
        perPage: 10,
        // search_key: this.searchItem
      };
      API.get(`contest-result/${this.genreIdValue}/${this.typeIdValue}`,
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
              response.data.data.map(e => {
                this.contestSeriesArr.push(e);
              });
              if (response.data.data.length === 0) {
                $state.complete();
              } else {
                $state.loaded();
             }
           }
        })
        .catch(error => {});
    },

  },

  mounted() {
    this.contestSeriseList();
  },

  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label.subgenre-selected > span.contest-type-check{
  background-color: #fff;
  color: #514c93;
}
</style>



