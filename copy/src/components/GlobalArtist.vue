<template>
  <div>
    <div class="body-wraper no-footer bg-profile">
      <div class="profile-container">
        <loading
          :active.sync="isLoading"
          :can-cancel="false"
          loader="dots"
          :is-full-page="fullPage"
        ></loading>
        <div class="container-fluid">
          <div class="box-model-wraper">
            <div class="profile-header">
              <div class="profile-banner">
                <img v-if="coverpictur==1" src="/assets/images/Spinner.gif" alt>
                <img v-if="coverpictur==null" src="/assets/images/Profile-banner.png" alt>
                <img v-else :src="coverpictur" alt>
                <!-- <div class="profile-banner-uploader">
							<label class="" >
								<input type="file"  @change="upDatecover($event.target.name, $event.target.files)"/>
								<i class="icon-photo-camera"></i>
							</label>
                </div>-->
                <!-- <div class="profile-banner-uploader">
							
							<label class="">
								<input type="file"  @change="upDatecover($event.target.name, $event.target.files)"/>
								<i class="icon-photo-camera"></i>
							</label>
                </div>-->
              </div>
              <!-- Profile details -->
              <div class="profile-details-section">
                <div class="peofile-picture-section">
                  <div class="profile-picture">
                    <img
                      v-if="profilemage==null || user.profilePicture=='' "
                      src="/assets/images/default_artist.png"
                      alt
                    >
                    <img :src="profilemage" alt>
                  </div>
                  <!-- <router-link :to="'/artist-edit'">
       	<a href="javascript:void(0)" class="profile-edit-btn">Edit</a>
                  </router-link>-->
                </div>

                <div class="following-container">
                  <div class="left">
                    <h2 class="user-name">{{user.fullName}}</h2>
                    <h3 class="user-address">{{user.address}}</h3>
                  </div>
                  <div class="right">
                    
                    <button
                      id="followbtn"
                      class="follow-btn"
                      @click="togglefollow"
                      v-bind:class="{ 'followed': follower.length>0 &&  follower[0].isFollowing !='0 ' }"
                    >
                      <img src="/assets/images/followed.png" alt="icon" class="unfollow-icon">
                      <img src="/assets/images/follow.png" alt="icon" class="followed-icon">
                      <span
                        v-if="follower.length>0 &&  follower[0].isFollowing !='0 '"
                        id="followartist"
                      >Following</span>
                      <span v-else>Follow</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Profile dashboard area -->
            <div class="profile-dashboard-area">
              <div class="row justify-content-center">
                <!-- leftmanu -->

                <div class="col-12 col-lg-9 col-md-8 col-xl-10 custom-column-right">
                  <div class="profile-right-section">
                    <!-- top Section -->
                    <div class="row">
                      <div class="col-sm-6 col-md-7">
                        <div class="top-section display-flex">
                          <div class="tab-nav-section">
                            <ul class="nav nav-tabs fan-profile-tab">
                              <li class="active">
                                <a
                                  data-toggle="pill"
                                  @click="isAlbum=true; search_key_album=''; "
                                  href="#playlist"
                                  class="active show"
                                >Album</a>
                              </li>
                              <li>
                                <a
                                  data-toggle="pill"
                                  href="#new_releases"
                                  @click="isAlbum=false; search_key_songs=''; "
                                  class
                                >Songs</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div v-if="isAlbum" class="col-sm-6 col-md-5">
                        <div class="input-search-wrap">
                          <input
                            type="text"
                            v-model="search_key_album"
                            v-on:keyup.enter="albumsearch"
                            class="form-control search-input"
                            placeholder="search album"
                            autocomplete="off"
                          >
                        </div>
                      </div>
                      <div v-else class="col-sm-6 col-md-5">
                        <div class="input-search-wrap">
                          <input
                            type="text"
                            v-model="search_key_songs"
                            v-on:keyup.enter="songsearch"
                            class="form-control search-input"
                            placeholder="search song"
                            autocomplete="OFF"
                          >
                        </div>
                      </div>
                    </div>
                    <!-- Album section -->
                    <div class="album-wraper">
                      <div class="tab-content">
                        <div id="playlist" class="tab-pane fade active">
                          <ul class="album-ul">
                            <li v-for="(album,index) in myALbums" :key="index">
                              <router-link
                                :to="{ name: 'FanAlbumDetails', params: { id: album.id }}"
                              >
                                <img
                                  v-if="album.coverImage==null"
                                  src="/assets/images/deefault_album.png"
                                >
                                <img v-else :src="allpath.album_pictures+album.coverImage">
                              </router-link>
                            </li>
                          </ul>
                          <infinite-loading @infinite="infiniteHandler">
                            <div slot="spinner">
                              <img src="/assets/images/loader.gif">
                            </div>
                            <div slot="no-more">{{""}}</div>
                            <div slot="no-results">{{""}}</div>
                          </infinite-loading>
                        </div>
                        <div id="new_releases" class="tab-pane fade">
                          <ul class="album-ul">
                            <li v-for="(artist,index) in mySongs" :key="index">
                              <img
                                v-if="artist.musicImage == null"
                                src="/assets/images/default_songs.png"
                              >
                              <img v-else :src="allpath.user_uploaded_musics+artist.musicImage">
                              <span>{{artist.fileTitle}}</span>
                            </li>
                          </ul>
                          <infinite-loading @infinite="infiniteHandler1">
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
            <!-- End -->
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
import AppHeader from "@/components/AuthHeader.vue";
import axios from "axios";
import AppFooter from "@/components/ComonFotter.vue";
import InfiniteLoading from "vue-infinite-loading";
import LeftManu from "@/components/LeftManu.vue";
import { API } from "@/api/api";

export default {
  name: "GlobalArtist",
  props: ["passid"],
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
      myALbums: [],
      allpath: ALL_PATH,
      page: 1,
      artistid: "",
      search_key_album: "",
      search_key_songs: "",
      isAlbum: true,
      mySongs: [],
      page1: 1,
      follower: []
    };
  },
  methods: {
    togglefollow() {
      API.get(`follow/${this.artistid}`, {
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      }).then(response => {
        if (response.data) {
          this.follower = [];
          this.follower.push(response.data.data);
        }
      }).catch(error => {});
    },
    infiniteHandler1($state) {
      this.page1 = this.page1 + 1;
      let senddata2 = {
        page: this.page1,
        perPage: 10,
        artistId: this.artistid
      };
      API.get("search-song", {
        params: senddata2,
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      }).then(response => {
        if (response.data) {
          if (response.data.data.length > 0) {
            response.data.data.map(e => {
              this.mySongs.push(e);
            });
          }
          if (response.data.data.length == 0) {
            $state.complete();
          } else {
            $state.loaded();
          }
        }
      }).catch(error => {});
    },
    infiniteHandler($state) {
      this.page = this.page + 1;
      var senddata2 = {
        albums_of_user: this.artistid,
        page: this.page,
        per_page: 10
      };
      API.get("album-list", {
        params: senddata2,
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      }).then(response => {
        if (response.data) {
          response.data.albumlist.map(e => {
            this.myALbums.push(e);
          });
          if (response.data.albumlist.length == 0) {
            $state.complete();
          } else {
            $state.loaded();
          }
        }
      }).catch(error => {});
    },
    albumsearch() {
      var senddata1 = {
        search_key: this.search_key_album,
        page: 1,
        perPage: 20,
        artistId: this.artistid
      };
      API.get("search-album", {
        params: senddata1,
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      }).then(response => {
        if (response.data) {
          this.myALbums = response.data.data;
        }
      }).catch(error => {});
    },
    songsearch() {
      var senddata1 = {
        search_key: this.search_key_songs,
        page: 1,
        perPage: 10,
        artistId: this.artistid
      };
      API.get("search-song", {
        params: senddata1,
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      }).then(response => {
        if (response.data) {
          this.mySongs = response.data.data;
        }
      }).catch(error => {});
    },
    initializesongsList() {
      let senddata1 = {
        page: 1,
        perPage: 10,
        artistId: this.artistid
      };
      API.get("search-song", {
        params: senddata1,
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      }).then(response => {
        if (response.data) {
          this.mySongs = response.data.data;
        }
      }).catch(error => {});
    },
    initializealbumlist() {
      let senddata1 = {
        albums_of_user: this.artistid,
        page: 1,
        per_page: 10
      };
      API.get("album-list", {
        params: senddata1,
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      }).then(response => {
        if (response.data) {
          this.myALbums = response.data.albumlist;
        }
      }).catch(error => {});
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
    }
  },
  created() {
    this.artistid = this.passid;
    this.initializealbumlist();
    this.initializesongsList();

    API.get(`fan/artist/${this.artistid}`, {
      headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
    }).then(response => {
      if (response.data) {
        this.user = response.data.data;
        this.follower = this.user.follower;
        if (this.user.profilePicture != null) {
          this.profilemage =
            ALL_PATH.profile_image_path + this.user.profilePicture;
        }

        if (this.user.coverPicture != null) {
          this.coverpictur = ALL_PATH.cover_pictures + this.user.coverPicture;
        } else {
          this.coverpictur = null;
        }
      }
    }).catch(error => {});
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
