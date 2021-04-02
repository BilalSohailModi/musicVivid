<template>
<div>
  <AppHeader></AppHeader>
  <body class="inner-page">
    <div class="body-wraper no-footer">
      <div class="searchmaingb">
        <div class="seacrhsubdiv">
          <div class="container">
            <div class="row justify-content-between align-items-center">
              <div class="col-12 search-container">
                <div class="seacrhsubdivtitle">
                  <i class="icon-album"></i> Albums
                </div>
                <div class="seacrhsubdivsearch search-section">
                  <div class="input-group">
                    <input
                      type="text"
                      v-on:keyup="searchartist"
                      @blur="onblur"
                      @focus="showHistory"
                      v-model="search_key"
                      class="form-control input-lg"
                      placeholder="Search Album"
                      autocomplete="OFF"
                      aria-label="Search"
                      aria-describedby="Search"
                      id="search-field"
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
                        <label @click="searchFromList(artisthis.albumName)">
                          <img
                            v-if="artisthis.coverImage == null"
                            src="assets/images/fan-profile-picture.png"
                            alt
                          >
                          <img v-else :src="allpath.album_pictures+artisthis.coverImage">
                          <span>
                            <a href="javascript:void(0)">{{artisthis.albumName}}</a>
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
                        @click="searchFromList(artist.albumName)"
                      >
                        <img
                          v-if="artist.coverImage == null"
                          src="assets/images/fan-profile-picture.png"
                          alt
                        >
                        <img v-else :src="allpath.album_pictures+artist.coverImage">
                        <span>
                          <a href="javascript:void(0)">{{artist.albumName}}</a>
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
            <ul class="main-search-menu">
              <li>
                <router-link :to="`/searchartist`">
                  <i class="icon-microphone"></i> Artists
                </router-link>
              </li>
              <li class="active">
                <router-link :to="`/searchartistalbum`">
                  <i class="icon-album"></i> Album
                </router-link>
              </li>
              <li>
                <router-link :to="`/artistsongsearch`">
                  <i class="icon-music-player"></i> Songs
                </router-link>
              </li>
            </ul>
            <div class="row justify-content-between align-items-center seacrhsubdivcat">
              <ul class="serach-tab-menu">
                <li :class="{ active : sortByValue === '' }">
                  <a href="javascript:;" id="popular" v-on:click="artistAlbumSort('')">
                    <i class="icon-fame"></i> Popular
                  </a>
                </li>
                <li :class="{ active : sortByValue === 'new' }">
                  <a href="javascript:;" id="new" v-on:click="artistAlbumSort('new')">
                    <i class="icon-new-document"></i> New
                  </a>
                </li>
                <li :class="{ active : sortByValue === 'random' }">
                  <a href="javascript:;" id="random" v-on:click="artistAlbumSort('random')"> 
                    <i class="icon-suffle"></i> Random
                  </a>
                </li>
                <li :class="{ active : sortByValue === 'votersPick' }">
                  <a href="javascript:;" id="votPic" v-on:click="artistAlbumSort('votersPick')">
                    <i class="icon-voters-pic"></i> Voter's Pick
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="listpopulardiv">
          <div class="container">
            <h1>Albums</h1>
            <div class="row align-items-center">
              <div v-for="(artist,index) in Artist" :key="index" class="albumeach">
                <router-link
                  v-if="user.userType=='2'"
                  :to="{ name: 'ArtistAlbumdetails', params: { id: artist.id }}"
                >
                  <div class="albumeachimg">
                    <img v-if="artist.coverImage == null" src="assets/images/deefault_album.png">
                    <img v-else :src="allpath.album_pictures+artist.coverImage">
                  </div>
                  <span>{{artist.albumName}}</span>
                </router-link>
                <router-link
                  v-if="user.userType=='3'"
                  :to="{ name: 'FanAlbumDetails', params: { id: artist.id }}"
                >
                  <div class="albumeachimg">
                    <img v-if="artist.coverImage == null" src="assets/images/deefault_album.png">
                    <img v-else :src="allpath.album_pictures+artist.coverImage">
                  </div>
                  <span>{{artist.albumName}}</span>
                </router-link>
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
  </body>
  <!-- <AppFooter></AppFooter> -->
</div>
</template>

<script>
import { ALL_PATH } from "@/Constants/Constants";
import { HELPER } from "@/Helper/Helper";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import AppHeader from "@/components/AuthHeader.vue";
import axios from "axios";
import AppFooter from "@/components/ComonFotter.vue";
import InfiniteLoading from "vue-infinite-loading";
import LeftManu from "@/components/LeftManu.vue";
import { API } from "@/api/api";

export default {
  name: "ArtistAlbumsearch",
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
      localStorage.setItem(
        "hisToryArrayForalbum",
        JSON.stringify(this.hisToryArray)
      );
    },
    showHistory() {
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
          API.get("search-album", {
            params: senddata2,
            headers: {
              "x-access-token": JSON.parse(localStorage.getItem("Token"))
            }
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
      API.get("search-album", {
        params: senddata2,
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
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
      API.get("search-album", {
        params: senddata2,
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
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
      //  this.isLoading= true;
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
      API.get("search-album", {
        params: senddata1,
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
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

          localStorage.setItem("hisToryArrayForalbum", JSON.stringify(this.hisToryArray));
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
      API.get("search-album", {
        params: senddata1,
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      }).then(response => {
        if (response.data) {
          this.Artist = response.data.data;
        }
        if (!response.data.data.length) {
          this.noDataMsg = true;
        }
      }).catch(error => {});
    },
    artistAlbumSort(sortValue) {
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
    this.user = JSON.parse(localStorage.getItem("User"));
    this.hisToryArray = JSON.parse(
      localStorage.getItem("hisToryArrayForalbum")
    );
    if (this.hisToryArray == null) {
      this.hisToryArray = [];
    }
    this.initialSearchList();
  },
  mounted() {
    var that = this;
    $(".inner-page").click(function(e) {
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
