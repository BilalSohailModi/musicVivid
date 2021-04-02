<template>
  <div>
    <AppHeader></AppHeader>
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
                <img
                  v-if="coverpictur == 1"
                  src="/assets/images/Spinner.gif"
                  alt
                />
                <img
                  v-if="coverpictur == null"
                  src="/assets/images/Profile-banner.png"
                  alt
                />
                <img v-else :src="coverpictur" alt />
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
                <div class="video-icon" @click="contestMusicList()">
                  <img
                    class="video-logo"
                    src="/assets/images/star-web.png"
                    alt
                  />
                </div>
              </div>
              <!-- Profile details -->
              <div class="profile-details-section">
                <div class="peofile-picture-section">
                  <div
                    class="profile-picture cursr"
                    v-bind:class="{
                      border: this.user.viewer && this.user.viewer.length,
                    }"
                    @click="videoModelOpen()"
                  >
                    <img
                      v-if="profilemage == null || user.profilePicture == ''"
                      src="/assets/images/default_artist.png"
                      alt
                    />
                    <img :src="profilemage" alt />
                  </div>
                  <!-- <router-link :to="'/artist-edit'">
       	<a href="javascript:void(0)" class="profile-edit-btn">Edit</a>
                  </router-link>-->
                </div>
                <div class="total-followers">
                  Followers :
                  <span>{{
                    user.countFollowers ? user.countFollowers : 0
                  }}</span>
                </div>
                <div class="following-container">
                  <div class="left">
                    <h2 class="user-name">{{ user.fullName }}</h2>
                    <h3 class="user-address">{{ user.address }}</h3>
                    <p
                      class="see-video"
                      v-if="user.UserFiles && user.UserFiles.length"
                    >
                      <b>
                        <!-- <a @click="videoModelOpen()" href="javascript:;">See Video</a> -->
                      </b>
                    </p>
                  </div>
                  <div class="right" v-if="loginUser.userType === '3'">
                    <button
                      id="followbtn"
                      class="follow-btn"
                      @click="togglefollow"
                      v-bind:class="{
                        followed:
                          follower.length > 0 &&
                          follower[0].isFollowing != '0 ',
                      }"
                    >
                      <img
                        src="/assets/images/followed.png"
                        alt="icon"
                        class="unfollow-icon"
                      />
                      <img
                        src="/assets/images/follow.png"
                        alt="icon"
                        class="followed-icon"
                      />
                      <span
                        v-if="
                          follower.length > 0 && follower[0].isFollowing != '0 '
                        "
                        id="followartist"
                        >Following</span
                      >
                      <span v-else>Follow</span>
                    </button>
                  </div>
                  <!-- love like section -->
                  <div v-if="loginUser.userType === '3'" class="like-box liked">
                    <button class="love-like-btn" @click="loveToggle(user.id)">
                      <span v-if="user.follower && user.follower.length">
                        <img
                          v-if="user.follower[0].loveLikeStatus == 2"
                          src="/assets/images/heart-2.png"
                          alt
                        />
                        <img
                          v-else-if="user.follower[0].loveLikeStatus == 1"
                          src="/assets/images/heart-1.png"
                          alt
                        />
                        <img v-else src="/assets/images/heart-0.png" alt />
                      </span>
                      <span v-if="!(user.follower && user.follower.length)">
                        <img src="/assets/images/heart-0.png" alt />
                      </span>
                    </button>
                  </div>
                  <!-- love like section -->
                </div>
              </div>
            </div>
            <!-- Profile dashboard area -->
            <div class="profile-dashboard-area">
              <div class="row justify-content-center">
                <!-- leftmanu -->

                <div
                  class="col-12 col-lg-9 col-md-8 col-xl-10 custom-column-right"
                >
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
                                  @click="
                                    isAlbum = true;
                                    search_key_album = '';
                                  "
                                  href="#playlist"
                                  class="active show"
                                  >Album</a
                                >
                              </li>
                              <li>
                                <a
                                  data-toggle="pill"
                                  href="#new_releases"
                                  @click="
                                    isAlbum = false;
                                    search_key_songs = '';
                                  "
                                  class
                                  >Songs</a
                                >
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
                          />
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
                            autocomplete="off"
                          />
                        </div>
                      </div>
                    </div>
                    <!-- Album section -->
                    <div class="album-wraper">
                      <div class="tab-content">
                        <div id="playlist" class="tab-pane fade active">
                          <ul class="album-ul">
                            <li v-for="(album, index) in myALbums" :key="index">
                              <router-link
                                :to="{
                                  name: 'FanAlbumDetails',
                                  params: { id: album.id },
                                }"
                              >
                                <img
                                  v-if="album.coverImage == null"
                                  src="/assets/images/deefault_album.png"
                                />
                                <img
                                  v-else
                                  :src="
                                    allpath.album_pictures + album.coverImage
                                  "
                                />
                                <!-- <span>{{album.albumName}}</span> -->
                              </router-link>
                            </li>
                          </ul>
                          <infinite-loading @infinite="infiniteHandler">
                            <div slot="spinner">
                              <img src="/assets/images/loader.gif" />
                            </div>
                            <div slot="no-more">{{ "" }}</div>
                            <div slot="no-results">{{ "" }}</div>
                          </infinite-loading>
                        </div>
                        <div id="new_releases" class="tab-pane fade">
                          <ul class="album-ul new-album-ul">
                            <li v-for="(artist, index) in mySongs" :key="index">
                              <div class="album-image">
                                <img
                                  v-if="artist.musicImage == null"
                                  src="/assets/images/default_songs.png"
                                  @click="playSong(index)"
                                />
                                <img
                                  v-else
                                  :src="
                                    allpath.user_uploaded_musics +
                                    artist.musicImage
                                  "
                                  @click="playSong(index)"
                                />
                              </div>
                              <span class="song-name">{{
                                artist.fileTitle
                              }}</span>
                            </li>
                          </ul>
                          <infinite-loading @infinite="infiniteHandler1">
                            <div slot="spinner">
                              <img src="/assets/images/loader.gif" />
                            </div>
                            <div slot="no-more">{{ "" }}</div>
                            <div slot="no-results">{{ "" }}</div>
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

      <!-- video modal  -->
      <div class="modal fade" id="video-modal">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                @click="closeModel()"
                aria-hidden="true"
              >
                ×
              </button>
            </div>
            <!-- Modal body -->
            <div class="modal-body">
              <div class="modal-video-container">
                <!-- <video preload="auto" controls>
                            <source  src="images/mov_bbb.mp4" type="video/mp4">
                            <source src="images/mov_bbb.ogg" type="video/ogg">
                            Your browser does not support HTML5 video.
                </video>-->
                <video
                  controls
                  v-if="promoVideo"
                  :src="promotionalVideo"
                  preload="auto"
                ></video>
                <video
                  controls
                  v-if="!promoVideo"
                  :src="introductionVideo"
                  preload="auto"
                ></video>
              </div>
              <div class="modal-div-btn clearfix">
                <button
                  class="modal-back-btn float-left"
                  v-if="isBack && controlBtn"
                  @click="backVideo()"
                >
                  Back
                </button>
                <button
                  class="modal-story-btn float-right"
                  v-if="!isBack && controlBtn"
                  @click="nextVideo()"
                >
                  Intro
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- No video modal  -->
      <div class="modal fade" id="no-video-modal">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <!-- Modal body -->
            <div class="modal-body">
              <div class="modal-video-container text-center no-video-msg">
                No video available
              </div>
              <div class="clearfix close-btn-details">
                <button class="modal-back-btn" @click="noVideoCloseModel()">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- contest video modal  -->
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
                <b>{{ fileTitle }}</b>
              </div>
              <button
                type="button"
                class="close"
                @click="closeContetMusicModel()"
                aria-hidden="true"
              >
                ×
              </button>
            </div>
            <!-- Modal body -->
            <div class="modal-body">
              <div class="modal-video-container">
                <div class="text-center">
                  <img
                    v-bind:class="{ rotate: rotation }"
                    v-if="fileType == 'mp3'"
                    src="/assets/images/music-static.png"
                  />
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
                  v-bind:class="{ disabledBtn: currentIndex == 0 }"
                  :disabled="currentIndex == 0"
                  @click="getPrevious()"
                >
                  Previous
                </button>
                <button
                  @click="getNext()"
                  v-bind:class="{
                    disabledBtn: currentIndex == songList.length - 1,
                  }"
                  :disabled="currentIndex == songList.length - 1"
                  class="modal-story-btn float-right"
                >
                  Next
                </button>
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
              <div class="modal-video-container text-center no-video-msg">
                No contest music available
              </div>
              <div class="clearfix close-btn-details">
                <button class="modal-back-btn" @click="noContestMusicModel()">
                  Close
                </button>
              </div>
            </div>
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
  name: "ArtistViewFanside",
  props: {
    msg: String,
  },
  components: {
    AppHeader,
    AppFooter,
    LeftManu,
    Loading,
    InfiniteLoading,
  },
  data() {
    return {
      loginUser: JSON.parse(localStorage.getItem("User")),
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
      follower: [],

      // added by Debanjan

      promotionalVideo: "",
      introductionVideo: "",
      isBack: false,
      promoVideo: true,
      controlBtn: true,
      tempsong: [],

      songList: [],
      url: "",
      currentIndex: null,
      fileTitle: "",
      fileType: "",
      rotation: false,
    };
  },
  methods: {
    togglefollow() {
      API.get(`follow/${this.artistid}`, {
        headers: {
          "x-access-token": JSON.parse(localStorage.getItem("Token")),
        },
      })
        .then((response) => {
          if (response.data) {
            this.follower = [];
            this.follower.push(response.data.data);
          }
        })
        .catch((error) => {});
    },
    infiniteHandler1($state) {
      this.page1 = this.page1 + 1;
      let senddata2 = {
        page: this.page1,
        perPage: 10,
        artistId: this.artistid,
      };
      API.get("search-song", {
        params: senddata2,
        headers: {
          "x-access-token": JSON.parse(localStorage.getItem("Token")),
        },
      })
        .then((response) => {
          if (response.data) {
            if (response.data.data.length > 0) {
              response.data.data.map((e) => {
                this.mySongs.push(e);
                let songs = {};
                songs.id = e.id;
                songs.title = e.fileTitle;
                songs.autoplay = true;
                songs.src = this.allpath.user_uploaded_musics + e.fileName;

                if (e.UserFile.musicImage == null) {
                  songs.pic = "";
                } else {
                  songs.pic = this.allpath.user_uploaded_musics + e.musicImage;
                }
                this.tempsong.push(songs);
              });
            }
            if (response.data.data.length == 0) {
              $state.complete();
            } else {
              $state.loaded();
            }
          }
        })
        .catch((error) => {});
    },
    infiniteHandler($state) {
      this.page = this.page + 1;
      var senddata2 = {
        albums_of_user: this.artistid,
        page: this.page,
        per_page: 10,
      };
      API.get("album-list", {
        params: senddata2,
        headers: {
          "x-access-token": JSON.parse(localStorage.getItem("Token")),
        },
      })
        .then((response) => {
          if (response.data) {
            response.data.albumlist.map((e) => {
              this.myALbums.push(e);
            });

            if (response.data.albumlist.length == 0) {
              $state.complete();
            } else {
              $state.loaded();
            }
          }
        })
        .catch((error) => {});
    },
    albumsearch() {
      var senddata1 = {
        search_key: this.search_key_album,
        page: 1,
        perPage: 20,
        artistId: this.artistid,
      };
      API.get("search-album", {
        params: senddata1,
        headers: {
          "x-access-token": JSON.parse(localStorage.getItem("Token")),
        },
      })
        .then((response) => {
          if (response.data) {
            this.myALbums = response.data.data;
          }
        })
        .catch((error) => {});
    },
    songsearch() {
      var senddata1 = {
        search_key: this.search_key_songs,
        page: 1,
        perPage: 10,
        artistId: this.artistid,
      };
      API.get("search-song", {
        params: senddata1,
        headers: {
          "x-access-token": JSON.parse(localStorage.getItem("Token")),
        },
      })
        .then((response) => {
          if (response.data) {
            this.mySongs = response.data.data;
          }
        })
        .catch((error) => {});
    },
    initializesongsList() {
      let senddata1 = {
        page: 1,
        perPage: 10,
        artistId: this.artistid,
      };
      API.get("search-song", {
        params: senddata1,
        headers: {
          "x-access-token": JSON.parse(localStorage.getItem("Token")),
        },
      })
        .then((response) => {
          if (response.data) {
            response.data.data.map((e) => {
              let songs = {};
              songs.id = e.id;
              songs.title = e.fileTitle;
              songs.autoplay = true;
              songs.src = this.allpath.user_uploaded_musics + e.fileName;
              if (e.musicImage == null) {
                songs.pic = "";
              } else {
                songs.pic = this.allpath.user_uploaded_musics + e.musicImage;
              }
              this.tempsong.push(songs);
            });
            this.mySongs = response.data.data;
          }
        })
        .catch((error) => {});
    },
    initializealbumlist() {
      let senddata1 = {
        albums_of_user: this.artistid,
        page: 1,
        per_page: 10,
      };
      API.get("album-list", {
        params: senddata1,
        headers: {
          "x-access-token": JSON.parse(localStorage.getItem("Token")),
        },
      })
        .then((response) => {
          if (response.data) {
            this.myALbums = response.data.albumlist;
          }
        })
        .catch((error) => {});
    },
    upDatecover(filename, file) {
      this.isLoading = true;
      var formData = new FormData();
      formData.append("coverPicture", file[0]);
      let head2 = {
        headers: {
          "x-access-token": JSON.parse(localStorage.getItem("Token")),
        },
      };
      API.post("update-cover-picture", formData, head2)
        .then((response) => {
          if (response.data) {
            this.coverpictur =
              ALL_PATH.cover_pictures + response.data.data.coverPicture;
            this.isLoading = false;
          }
        })
        .catch((error) => {
          this.isLoading = false;
        });
    },

    // open video model

    videoModelOpen() {
      if (this.user.UserFiles && this.user.UserFiles.length) {
        this.sortVideoItem(this.user.UserFiles);
        $("#video-modal").modal("show");
      } else {
        $("#no-video-modal").modal("show");
      }
      // if statememt for single video
      if (this.user.UserFiles.length === 1) {
        this.controlBtn = false;
      }
    },

    sortVideoItem(userFileArr) {
      userFileArr.forEach((eachVideo) => {
        if (eachVideo.subCategoryType === 1) {
          this.promotionalVideo = this.allpath.video_path + eachVideo.fileName;
        } else if (eachVideo.subCategoryType === 2) {
          this.introductionVideo = this.allpath.video_path + eachVideo.fileName;
        }
      });
      if (userFileArr.length === 1 && userFileArr[0].subCategoryType == 2) {
        this.promoVideo = false;
      }
    },

    nextVideo() {
      this.isBack = true;
      this.promoVideo = false;
    },

    backVideo() {
      this.isBack = false;
      this.promoVideo = true;
    },

    closeModel() {
      this.promotionalVideo = "";
      this.introductionVideo = "";
      this.controlBtn = true;
      this.promoVideo = true;
      this.isBack = false;
      $("#video-modal").modal("hide");
    },

    noVideoCloseModel() {
      $("#no-video-modal").modal("hide");
    },

    playSong(index) {
      let seobj = {};
      seobj.songs = this.tempsong;
      seobj.index = index;
      seobj.albumCover = "";

      this.$store.commit("playSongs", seobj);
    },
    loveToggle(id) {
      API.get(`love-like/${id}`, {
        headers: {
          "x-access-token": JSON.parse(localStorage.getItem("Token")),
        },
      })
        .then((response) => {
          if (response.data) {
            this.user.follower = [
              { loveLikeStatus: response.data.data.loveLikeStatus },
            ];
          }
        })
        .catch((error) => {});
    },

    // contest music section //

    contestMusicList() {
      this.songList = [];
      API.get(`contest-music/${this.artistid}`, {
        headers: {
          "x-access-token": JSON.parse(localStorage.getItem("Token")),
        },
      })
        .then((response) => {
          if (response.data) {
            this.songList = response.data.data;
            if (this.songList.length) {
              $("#video-model-view-contest").modal("show");
              $("#video-model-view-contest").modal({
                backdrop: "static",
                keyboard: false,
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
        })
        .catch((error) => {});
    },

    closeContetMusicModel() {
      this.url = "";
      $("#video-model-view-contest").modal("hide");
      this.rotation = false;
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

    updatePaused(el) {
      if (el.type == "playing") {
        this.rotation = true;
      } else if (el.type == "ended") {
        this.getNext();
      } else {
        this.rotation = false;
      }
    },

    noContestMusicModel() {
      $("#no-contest-music-modal").modal("hide");
    },

    // contest music section //
  },
  created() {
    if (this.$route.params.id != undefined || this.$route.params.id != null) {
      this.artistid = this.$route.params.id;
      this.initializealbumlist();
      this.initializesongsList();

      API.get(`fan/artist/${this.artistid}`, {
        headers: {
          "x-access-token": JSON.parse(localStorage.getItem("Token")),
        },
      })
        .then((response) => {
          if (response.data) {
            this.user = response.data.data;
            this.follower = this.user.follower;
            if (this.user.profilePicture != null) {
              this.profilemage =
                ALL_PATH.profile_image_path + this.user.profilePicture;
            }

            if (this.user.coverPicture != null) {
              this.coverpictur =
                ALL_PATH.cover_pictures + this.user.coverPicture;
            } else {
              this.coverpictur = null;
            }
          }
        })
        .catch((error) => {});
    } else {
      window.location.href = "/";
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.see-video {
  margin: 0;
  padding: 5px 0px 0px 0px;
}
.video-icon {
  position: absolute;
  top: 14px;
  right: 25px;
  cursor: pointer;
}
.cursr {
  cursor: pointer;
}
.video-logo {
  height: 45px;
  width: 45px;
}
.close-btn-details {
  margin: 10px;
  text-align: center;
}
.no-video-msg {
  font-size: 22px;
}
.love-like-btn {
  display: inline-block;
  vertical-align: top;
  margin: 0 0 0 10px;
  background: transparent !important;
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
  cursor: pointer;
}
.love-like-btn span {
  border: none;
  display: block;
  padding: 8px 0 0 0;
  border-radius: 100px;
  width: 40px;
  height: 40px;
  background-color: #fff;
  box-shadow: 1px 1px 3px rgba(76, 61, 140, 0.8);
}
.love-like-btn img {
  display: inline-block;
  vertical-align: top;
  height: auto;
}
.border {
  border: none !important;
}
.disabledBtn {
  cursor: not-allowed;
  background: #8b8aae;
  color: #fff;
}
.containerSize {
  height: 70px !important;
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
.total-followers {
  display: block;
  text-align: center;
  margin: 0 0 10px 0;
  font-size: 16px;
  line-height: 20px;
  color: #656b7d;
}
.total-followers span {
  font-weight: 600;
  display: inline-block;
  vertical-align: top;
  color: #4e4e4e;
}
</style>
