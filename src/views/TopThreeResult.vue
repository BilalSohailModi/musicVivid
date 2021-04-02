<template>
<div>
  <body class="inner-page">
    <AppHeader></AppHeader>
      <div class="live-contest-section">
        <div class="live-contest-header">
            <div class="contestWinner">
                <h2 v-if="winnerName">{{winnerName}}</h2>
                <img src="/assets/images/medal.png" alt="" class="medal">
            </div>
            
            <div class="contest-item text-center">
                <label>
                    <input type="radio" name="contest_type" checked/>
                    <span class="contest-type-check" @click="genreIdData(1)">
                        <img src="/assets/images/alternative.png" alt="icon" />
                        Alternative
                    </span>
                </label>
                <label>
                    <input type="radio" name="contest_type" />
                    <span class="contest-type-check" @click="genreIdData(2)">
                        <img src="/assets/images/country_music.png" alt="icon" />
                        Country
                    </span>
                </label>
                <label>
                    <input type="radio" name="contest_type" />
                    <span class="contest-type-check" @click="genreIdData(3)">
                        <img src="/assets/images/edm.png" alt="icon" />
                        EDM
                    </span>
                </label>
                <label>
                    <input type="radio" name="contest_type" />
                    <span class="contest-type-check" @click="genreIdData(4)">
                        <img src="/assets/images/hiphop.png" alt="icon" />
                         Hiphop-RAP
                    </span>
                </label>
            </div>
            <div class="contest-item text-center relativediv">
                <label>
                    <input type="radio" name="contest_type" />
                    <span class="contest-type-check" @click="genreIdData(5)">
                        <img src="/assets/images/latin.png" alt="icon" />
                        World
                    </span>
                </label>
                <label>
                    <input type="radio" name="contest_type" />
                    <span class="contest-type-check" @click="genreIdData(6)">
                        <img src="/assets/images/pop.png" alt="icon" />
                        Pop
                    </span>
                </label>
                    
                <label
                  class=""
                >
                  <input type="radio" name="contest_type" />
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
                    <input type="radio" name="contest_type" />
                    <span class="contest-type-check" @click="genreIdData(8)">
                        <img src="/assets/images/rock.png" alt="icon" />
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
                                    <a class="nav-link active" data-toggle="pill" href="#live_lb"  @click="contestType(1)">Live</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-toggle="pill" href="#draft_lb"  @click="contestType(2)">Draft</a>
                                </li>
                            </ul>
                        </div>

                        <div class="contestPositions">
                            <div class="list" v-for="(item,index) in topThreeArr" :key="index">
                                <div class="bx">
                                    <span class="pos-no">{{item.rank}}<small>{{item.rank === 1 ? 'st.' : item.rank === 2 ? 'nd.' : 'rd.'}}</small></span>
                                    <div class="cont">
                                        <!-- <span style="background: url(assets/images/candidate.png)" class="u-photo"></span> -->
                                        <span 
                                         v-bind:style="{ 'background-image': 'url(' + (item.User.profilePicture ? allpath.profile_image_path +item.User.profilePicture : '/assets/images/default_artist.png') + ')' }" 
                                        class="u-photo"></span>
                                        <div class="cont-block">
                                            <span class="t">{{item.User.fullName}}</span>
                                            <div class="progressCont">
                                                <div class="progress">
                                                    <div class="progress-bar" role="progressbar" v-bind:style="{width: item.modifiedArr[0].votesAcquired + '%'}" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>                                        
                                                <span class="progress-status">{{item.modifiedArr[0].votesAcquired}}%</span>
                                            </div>
                                        </div>
                                    </div>
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

<script>
import router from "../router";
import { ALL_PATH } from "@/Constants/Constants";
import { HELPER } from "@/Helper/Helper";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import AppHeader from "@/components/AuthHeader.vue";
import axios from "axios";
import { API } from "@/api/api";
export default {
  name: "TopThreeResult",
  props: {
    msg: String
  },
  data() {
    return {
      user: JSON.parse(localStorage.getItem("User")),
      allpath: ALL_PATH,
      contestSeriesArr: [],
      topThreeArr: [],
      genreIdValue: 1,
      typeIdValue: 1,
      winnerName : "",
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
    playoffResult() {
      var senddata1 = {
        // search_key: this.searchItem,
        page: 1,
        perPage: 10
      };
      API.get(`contest-result/${this.typeIdValue}/${this.genreIdValue}`, {
        params: senddata1,
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      })
        .then(response => {
          if (response.data) {
            this.contestSeriesArr = response.data.data;
            this.contestSeriesArr.sort((a, b) => {
              return a.rank - b.rank;
            });
            this.contestSeriesArr.forEach((item, index) => {
              if (index < 3) {
                this.topThreeArr.push(item);
              }
            });
            this.topThreeArr.forEach((eachItem, index) => {
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
            console.log(
              "this.contestSeriesArr",
              JSON.parse(JSON.stringify(this.topThreeArr))
            );
            if(response.data.data) {
                this.winnerName = this.topThreeArr[0].User.fullName;
            }
            
          }
        })
        .catch(error => {});
    },
    genreIdData(id) {
        // this.noDataMsg = false;
        this.genreIdValue = id;
        this.contestSeriesArr = [];
        this.topThreeArr = [];
        // this.infiniteId += 1;
        this.playoffResult();
    },
      contestType(typeId) {
        // this.noDataMsg = false;
        this.typeIdValue = typeId;
        // this.infiniteId += 1;
        this.contestSeriesArr = [];
        this.topThreeArr = [];
        this.playoffResult();
      },
  },

  created() {
    this.playoffResult();
  },

  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label.subgenre-selected > span.contest-type-check{
  background-color: #fff;
  color: #514c93;
}
</style>