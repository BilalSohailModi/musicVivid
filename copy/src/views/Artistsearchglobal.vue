<template>
  <div class="nothome">
    <AppHeader></AppHeader>
    <div>
      <div class="searchmaingb">
        <div class="seacrhsubdiv">
          <div class="container">
            <div class="row justify-content-between align-items-center">
              <div class="col-12 search-container">
                <div class="seacrhsubdivtitle">
                  <i class="icon-microphone"></i> Artists
                </div>

                <div class="seacrhsubdivsearch search-section">
                  <div class="input-group">
                    <input
                      type="text"
                      v-on:keyup="searchartist"
                      @focus="showHistory"
                      @blur="onblur"
                      v-model="search_key"
                      class="form-control input-lg"
                      placeholder="Search Artist"
                      aria-label="Search"
                      aria-describedby="Search"
                      id="search-field"
                      autocomplete="OFF"
                    >
                    <div class="input-group-append">
                      <button
                        type="button"
                        @click="initialSearchList"
                        class="input-group-text cursor-pointer btn-purple btn-transparent"
                      >
                        <i class="icon-search"></i>Search
                      </button>
                    </div>
                  </div>
                  <!-- Search history -->
                  <div
                    class="search_history-box"
                    v-if="isHistory"
                    :class="{'show': hisToryArray && hisToryArray.length>0 }"
                  >
                    <ul class="search-hidtory-ul">
                      <li v-for="(artisthis) in hisToryArray" :key="artisthis.id">
                        <label @click="searchFromList(artisthis.fullName)">
                          <img
                            v-if="artisthis.profilePicture == null"
                            src="assets/images/fan-profile-picture.png"
                            alt
                          >
                          <img v-else :src="allpath.profile_image_path+artisthis.profilePicture">
                          <span>
                            <a href="javascript:void(0)">{{artisthis.fullName}}</a>
                          </span>
                        </label>

                        <button @click="removeHistory(artisthis.id)" class="history-remove-btn">
                          <i class="icon-close"></i>
                        </button>
                      </li>
                    </ul>
                  </div>

                  <!-- End search history -->
                  <div class="search_result-box" :class="{'show': AutoComplete.length>0 }">
                    <ul class="search-hidtory-ul">
                      <li
                        v-for="(artist) in AutoComplete"
                        :key="artist.id"
                        @click="searchFromList(artist.fullName)"
                      >
                        <img
                          v-if="artist.profilePicture == null"
                          src="assets/images/fan-profile-picture.png"
                          alt
                        >
                        <img v-else :src="allpath.profile_image_path+artist.profilePicture">
                        <span>
                          <a href="javascript:void(0)">{{artist.fullName}}</a>
                        </span>
                        <button class="history-remove-btn">
                          <i class="icon-right-arrow"></i>
                        </button>
                      </li>
                      <infinite-loading @infinite="infiniteHandler1">
                        <div slot="spinner">
                          <img src="/assets/images/loader.gif">
                        </div>
                        <div slot="no-more">{{""}}</div>
                        <div slot="no-results">{{""}}</div>
                      </infinite-loading>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!--                   
					<ul class="main-search-menu">
						<li class="active"><a href="/artistglobalsearch"><i class="icon-microphone"></i> Artists</a></li>
						<li>
               <router-link :to="`/albumglobalsearch`" >
                <i class="icon-album"></i> Album</router-link>
            </li>
						<li>
               <router-link :to="`/songglobalsearch`" >
            <i class="icon-music-player">
                 </i> Songs
               </router-link>
               </li>
            </ul>-->
            <div class="row justify-content-between align-items-center seacrhsubdivcat">
              <ul class="serach-tab-menu">
                <li :class="{ active : sortByValue === '' }">
                  <a href="javascript:;" id="popular" v-on:click="artistSort('')">
                    <i class="icon-fame"></i> Popular
                  </a>
                </li>
                <li :class="{ active : sortByValue === 'new' }">
                  <a href="javascript:;" id="new" v-on:click="artistSort('new')">
                    <i class="icon-new-document"></i> New
                  </a>
                </li>
                <li :class="{ active : sortByValue === 'random' }">
                  <a href="javascript:;" id="random" v-on:click="artistSort('random')">
                    <i class="icon-suffle"></i> Random
                  </a>
                </li>
                <li :class="{ active : sortByValue === 'votersPick'}">
                  <a href="javascript:;" id="votPic" v-on:click="artistSort('votersPick')">
                    <i class="icon-voters-pic"></i> Voter's Pick
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="listpopulardiv">
          <div class="container">
            <h1>Artists</h1>
            <div class="row align-items-center artistdiv">
              <div v-for="(artist,index) in Artist" :key="index" class="albumeach">
                <img v-if="artist.profilePicture == null" src="assets/images/default_artist.png">
                <img v-else :src="allpath.profile_image_path+artist.profilePicture">
                <span>{{artist.fullName}}</span>
              </div>
               <div class="no-data-msg" v-if="!this.Artist.length && noDataMsg">No data found</div>
            </div>
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

    <!-- <AppFooter></AppFooter> -->
  </div>
</template>

<script>
import { ALL_PATH } from "@/Constants/Constants";
import { HELPER } from "@/Helper/Helper";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import AppHeader from "@/components/UnauthHeader.vue";
import axios from "axios";
import AppFooter from "@/components/ComonFotter.vue";
import InfiniteLoading from "vue-infinite-loading";
import LeftManu from "@/components/LeftManu.vue";
import { API } from "@/api/api";

export default {
  name: "Artistsearchglobal",
  props: {
    msg: String
  },
  components: {
    AppHeader,
    AppFooter,
    LeftManu,
    Loading,
    InfiniteLoading
  },
  data() {
    return {
      user: "",
      profilemage: null,
      isLoading: false,
      coverpictur: 1,
      fullPage: true,
      Artist: [],
      allpath: ALL_PATH,
      AutoComplete: [],
      page: 1,
      search_key: "",
      hisToryArray: [],
      isHistory: false,
      sortByValue: "",
      noDataMsg: false,
      infiniteId: +new Date()
    };
  },
  methods: {
    onblur() {
      setTimeout(() => {
        this.isHistory = false;
      }, 300);
    },
    removeHistory(id) {
      this.hisToryArray = this.hisToryArray.filter(e => e.id != id);
      localStorage.setItem("hisToryArray", JSON.stringify(this.hisToryArray));
    },
    showHistory() {
      //  alert("focus");
      if (this.search_key == "") {
        this.isHistory = true;
      }
    },
    searchartist(e) {
      if (this.search_key == "") {
        this.AutoComplete = [];
        this.isHistory = true;
      }
      if (e.keyCode === 13) {
        this.searchFromList(e.target.value);
      } else {
        if (e.target.value != "") {
          var senddata2 = {
            page: 1,
            page1: 1,
            perPage: 20,
            search_key: e.target.value
          };
          API.get("search-artist", {
            params: senddata2
          })
            .then(response => {
              if (response.data) {
                this.AutoComplete = response.data.data;
                //this.isLoading = false;
                //window.location.href = "/profile";
              }
            })
            .catch(error => {});
        }
      }
    },
    infiniteHandler($state) {
      this.page = this.page + 1;
      var senddata2 = {
        page: this.page,
        perPage: 20,
        search_key: this.search_key,
        sortBy: this.sortByValue
      };
      API.get("search-artist", {
        params: senddata2
      })
        .then(response => {
          if (response.data) {
            response.data.data.map(e => {
              this.Artist.push(e);
            });
            if (response.data.data.length == 0) {
              $state.complete();
            } else {
              $state.loaded();
            }
            //this.isLoading = false;
            //window.location.href = "/profile";
          }
        })
        .catch(error => {});
    },
    infiniteHandler1($state) {
      this.page1 = this.page1 + 1;
      var senddata2 = {
        page: this.page1,
        perPage: 20,
        search_key: this.search_key
      };
      API.get("search-artist", {
        params: senddata2
      })
        .then(response => {
          if (response.data) {
            response.data.data.map(e => {
              this.AutoComplete.push(e);
            });
            if (response.data.data.length == 0) {
              $state.complete();
            } else {
              $state.loaded();
            }
            //this.isLoading = false;
            //window.location.href = "/profile";
          }
        })
        .catch(error => {});
    },
    upDatecover(filename, file) {
      this.isLoading = true;
      var formData = new FormData();
      formData.append("coverPicture", file[0]);
      let head2 = {
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      };
      API.post("update-cover-picture", formData, head2).then(response => {
        if (response.data) {
          this.coverpictur =
            ALL_PATH.cover_pictures + response.data.data.coverPicture;
          this.isLoading = false;
        }
      }).catch(error => {
        this.isLoading = false;
      });
    },
    searchFromList(value) {
      this.isHistory = false;
      this.AutoComplete = [];
      this.search_key = value;
      var senddata1 = {
        search_key: value,
        page: 1,
        perPage: 20
      };
      API.get("search-artist", {
        params: senddata1
      }).then(response => {
        if (response.data) {
          var cmt = null;
          if (this.hisToryArray.length > 0) {
            this.hisToryArray.forEach(e => {
              if (e.id != response.data.data[0].id) {
                cmt = true;
              } else {
                cmt = false;
              }
            });
          } else {
            this.hisToryArray.push(response.data.data[0]);
          }
          if (cmt) {
            this.hisToryArray.push(response.data.data[0]);
          }

          this.Artist = response.data.data;

          localStorage.setItem("hisToryArray",JSON.stringify(this.hisToryArray));
        }
      }).catch(error => {});
    },

    initialSearchList() {
      this.AutoComplete = [];
      var senddata1 = {
        search_key: this.search_key,
        page: 1,
        perPage: 20,
        sortBy: this.sortByValue
      };
      API.get("search-artist", {
        params: senddata1
      }).then(response => {
        if (response.data) {
          this.Artist = response.data.data;
        }
        if (!response.data.data.length) {
          this.noDataMsg = true;
        }
      }).catch(error => {});
    },

    artistSort(sortValue) {
      this.sortByValue = "";
      this.noDataMsg = false;
      this.page = 1;
      this.Artist = [];
      this.sortByValue = sortValue;
      this.initialSearchList();
      this.infiniteId += 1;
    }
  },
  created() {
    this.hisToryArray = JSON.parse(localStorage.getItem("hisToryArray"));
    if (this.hisToryArray == null) {
      this.hisToryArray = [];
    }
    this.initialSearchList();
  },
  mounted() {
    var that = this;
    $(".nothome").click(function(e) {
      that.AutoComplete = [];
    });
  },
  updated() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  background-image: none;
  background-color: #fff;
}
.no-data-msg {
  margin: 0px auto;
}
</style>
