<template>
<div>
  <body class="inner-page">
    <AppHeader></AppHeader>
    <div class="live-contest-section">
      <div class="live-contest-header">
        <h1>{{headerText}}</h1>

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
                <ul class="count-listing">
                  <li  v-bind:class="{ disabled : (seriesId > 5)}" v-if="(contestType != 3)">
                    <a
                      href="javascript:;"
                      v-bind:class="{ active : (seriesIdval ==5)}"
                      @click="seriesIdValue(5)"
                    >5</a>
                  </li>
                  <li v-bind:class="{ disabled : (seriesId > 4)}">
                    <a
                      href="javascript:;"
                      v-bind:class="{ active : (seriesIdval ==4)}"
                      @click="seriesIdValue(4)"
                    >4</a>
                  </li>
                  <li v-bind:class="{ disabled : (seriesId > 3)}">
                    <a
                      href="javascript:;"
                      v-bind:class="{ active : (seriesIdval ==3)}"
                      @click="seriesIdValue(3)"
                    >3</a>
                  </li>
                  <li v-bind:class="{ disabled : (seriesId > 2)}">
                    <a
                      href="javascript:;"
                      v-bind:class="{ active : (seriesIdval ==2)}"
                      @click="seriesIdValue(2)"
                    >2</a>
                  </li>
                  <li v-bind:class="{ disabled : (seriesId > 1)}">
                    <a
                      href="javascript:;"
                      v-bind:class="{ active : (seriesIdval == 1)}"
                      @click="seriesIdValue(1)"
                    >1</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="leaderboard-container">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-lg-12">
              <div class="semi-final-contest-wraper">
                <div
                  class="semifinal-inner-wrap"
                  v-for="(result,index) in tournamentResultArr"
                  :key="index"
                >
                  <div class="rank-row leaderboard-row final-row">
                    <div class="vs-div">VS</div>
                    <div class="rank-block" v-for="(item,index) in result.users" :key="index">
                      <div class="inner-rank-block pointer" @click="artistProfileView(item.User.id)">
                        <img alt="candidate" 
                        :src="item.User.profilePicture ? allpath.profile_image_path+item.User.profilePicture : '/assets/images/default_artist.png'">
                        <h1 class="candidate-name" v-bind:title="item.User.fullName">{{item.User.fullName}}</h1>
                        <p class="location">
                          <!-- <img src="/assets/images/location.png"> -->
                          {{item.votesAcquired}}%
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="winner-sticker-box">
                    <div class="winner_holder" v-if="result.winnerObj && 
                      result.winnerObj.User">
                      <h1 class="winner-text">Winner</h1>
                      <img class="winner-img" alt="candidate" :src="result.winnerObj.User.profilePicture ? allpath.profile_image_path+result.winnerObj.User.profilePicture : '/assets/images/default_artist.png'">
                      <h1 class="candidate-name user-name-text" v-bind:title="result.winnerObj.User.fullName">{{result.winnerObj.User.fullName}}</h1>
                    </div>
                    <div v-else>
                        <img src="/assets/images/semifinal-winner-sticker.png">
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
      <!-- <AppFooter></AppFooter> -->
 

<script>
import { ALL_PATH } from "@/Constants/Constants";
import router from "../router";
import { API } from "@/api/api";
import InfiniteLoading from "vue-infinite-loading";
import AppHeader from "@/components/AuthHeader.vue";
import GlobalArtist from "@/components/GlobalArtist.vue";
export default {
  name: "TournamentResult",
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
      user: JSON.parse(localStorage.getItem("User")),
      allpath: ALL_PATH,
      typeId: null,
      seriesId: null,
      contestType : null,
      genreIdValue: 1,
      defaultSeriseId: null,
      tournamentResultArr: [],
      seriesIdval : null,
      headerText : "",
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
    tournamentResult() {
      API.get(
        `tournament-result/${this.typeId}/${this.genreIdValue}/${this.isSendId
        }`,
        {
          headers: {
            "x-access-token": JSON.parse(localStorage.getItem("Token"))
          }
        }
      )
        .then(response => {
          if (response.data) {
            this.tournamentResultArr = response.data;
             this.headerTextChange();
            let winnerObj = {};
            this.tournamentResultArr.forEach((eachItem) => {
              eachItem.users.forEach((item) => {
                if (item.isRoundWinner) {
                   winnerObj = item;
                }
              })
              eachItem['winnerObj'] = winnerObj;
            })
          }
          console.log("tournament result", response.data);
        })
        .catch(error => {});
    },

    genreIdData(id) {
      this.genreIdValue = id;
      this.tournamentResult();
    },

    seriesIdValue(id) {
      this.seriesIdval = id;
      if(id == 5) {
        this.isSendId = 3;
      } 
      else if(id == 4) {
        this.isSendId = 4;
      }
      else if(id == 3) {
        this.isSendId = 5;
      }
      else if(id == 2) {
        this.isSendId = 6;
      }
      else if(id == 1) {
        this.isSendId = 7;
      }
      this.tournamentResult();
    },

    artistProfileView(artistId) {
        router.push(`/artist-view-fan-side/${artistId}`);
    },

    headerTextChange() {
      if(this.isSendId == 3) {
           this.headerText = 'TOURNAMENT - TOP 32 ARTISTS';
      }  else if(this.isSendId == 4) {
           this.headerText = 'TOURNAMENT - TOP 16 ARTISTS';
      }  else if(this.isSendId == 5) {
           this.headerText = 'TOURNAMENT - TOP 8 ARTISTS';
      }  else if(this.isSendId == 6) {
           this.headerText = 'TOURNAMENT - FINAL 4 ARTISTS';
      } else {
           this.headerText = 'TOURNAMENT - TOP 2 ARTISTS';
      }
    }
  },

  mounted() {
    this.tournamentResult();
    this.headerTextChange();
  },

  created() {
    this.typeId = this.$route.params.id;
    this.seriesId = this.$route.query.seriesId;
    this.contestType = this.$route.query.contestType;
    console.log("this.seriesId ==>", this.typeId ,this.seriesId,this.contestType);
    this.defaultSeriseId = this.$route.query.seriesId;
    this.seriesIdValue(this.seriesId);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.disabled {
  pointer-events: none;
  opacity: 0.6;
}
.winner-text {
    font-size: 24px;
    color: #fff;
    font-weight: 600;
    margin: 0;
}
.winner-img {
    height: 126px;
    width: 126px;
    border-radius: 50%;
}
.user-name-text {
     display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
.pointer {
  cursor: pointer;
}
label.subgenre-selected > span.contest-type-check{
  background-color: #fff;
  color: #514c93;
}
</style>



