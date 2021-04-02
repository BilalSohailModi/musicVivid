<template>
<div>
  <AppHeader></AppHeader>
  <body class="inner-page">
    <div class="modal fade" id="singlesongdelete">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <!-- Modal body -->
          <div class="modal-body">
            <img src="/assets/images/log-out-modal-icon.png">
            <p class="sign-out-modal-text">
              Are you sure you want to
              Delete This song ?
            </p>
            <p class="modal-btn-para">
              <button type="button" @click="deleteSong" class="btn fan-play-btn">Yes</button>
            </p>
            <p class="modal-btn-para mb-0">
              <a href="javascript:;" class="modal-close-btn" data-dismiss="modal">Cancel</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="playlistdelete">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <!-- Modal body -->
          <div class="modal-body text-center">
            <p>
              <img src="/assets/images/log-out-modal-icon.png" class="playlist-delete-img">
            </p>
            <p class="sign-out-modal-text">
              Are you sure you want to
              Delete This playlist ?
            </p>
            <p class="modal-btn-para">
              <button type="button" @click="deleteplay" class="btn fan-play-btn">Yes</button>
            </p>
            <p class="modal-btn-para mb-0">
              <a href="javascript:;" class="modal-close-btn" data-dismiss="modal">Cancel</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <loading :active.sync="isLoading" :can-cancel="false" loader="dots" :is-full-page="fullPage"></loading>
    <div v-if="albumInformation!=null" class="view-play-list-wraper">
      <div class="view-play-list">
        <img src="/assets/images/album-banner.jpg" class="cover-img">

        <div class="cover-overlay">
          <div class="row justify-content-center">
            <div class="col-12 col-lg-10">
              <div class="play-list-banner">
                <!-- <ul class="bread-crumb-listing">
								<li><a href="#">Vivid</a></li>
								<li><a href="#">My Playlist</a></li>
								<li>Best Songs 2018-2019</li>

                </ul>-->

                <div class="album-details-row">
                  <div class="row">
                    <div class="col-sm-12">
                      <div v-if="albumInformation!=null" class="album-img">
                        <img
                          v-if="albumInformation.coverImage==null"
                          src="/assets/images/album-banner.jpg"
                        >
                        <!-- <img v-else :src="allpath.playist_pictures+albumInformation.coverImage"> -->
                        <div
                          v-else
                          class="profile-img"
                          v-bind:style="{ 'background-image': 'url(' + allpath.playist_pictures+albumInformation.coverImage + ')' }"
                        ></div>

                        <div v-if="albumInformation.coverImage==null" class="album-play-btn">
                          <button>
                            <span class="icon-music-player-play"></span>
                          </button>
                        </div>
                      </div>
                      <div v-if="albumInformation!=null" class="album-details-sec">
                        <h2>{{albumInformation.title}}</h2>
                        <p class="album-creation">
                          Created by {{albumInformation.User.fullName}}
                          <span>{{songlist.length}} Tracks</span>
                        </p>
                        <p
                          class="album-release-date"
                        >Released {{moment(albumInformation.createdAt).format('LL')}}.</p>
                      </div>
                    </div>
                    <!-- <div class="col-sm-4">
			
                    </div>-->
                  </div>
                </div>
                <label class="more-album-menu">
                  <button @click="showHide">
                    <span class="icon-more-button-of-three-dots"></span>
                  </button>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Listing body section -->
      <div class="play-list-listing-wrap">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-10">
            <div class="play-listing-container">
              <div class="play-list-utility-sec">
                <ul class="playlist-list">
                  <li v-if="songlist.length>0">
                    <label class="btn-check">
                      <input type="checkbox" @change="alldeletedSongs" class="all-check">
                      <span></span>
                      <figure class="text">Select All</figure>
                    </label>
                  </li>
                  <li class="dynamic-action-btn playlist_global">
                    <button @click="deleteSpecificSong1('')" class="open-playlist">
                      <span class="icon-plus"></span>Add to Playlist
                    </button>
                  </li>
                  <li class="dynamic-action-btn delete-global">
                    <button @click="deleteSpecificSong('')">
                      <span class="icon-rubbish-bin"></span>Delete Songs
                    </button>
                  </li>
                </ul>
                <ul class="dynamic-action-list">
                  <!--<li class="dynamic-action-btn">
									<button class="open-playlist">
										<span class="icon-share"></span>Share
									</button>
                  </li>-->
                  <li class="dynamic-action-btn">
                    <button @click="deletePlaylist">
                      <span class="icon-rubbish-bin"></span>Delete Playlist
                    </button>
                  </li>
                </ul>
              </div>
              <div class="track-row-container">
                <div class>
                  <div class="track-row row-header">
                    <div class="track-icon-box">#</div>
                    <div class="track-information">
                      <label class="track-name">
                        <span class="numbering">Title</span>
                      </label>
                      <label class="artist-name">Artist</label>
                      <!-- <label class="track-duration">
														<img src="/assets/images/duration-icon.png" alt="icon" style="margin-right: 11px;">
                      </label>-->
                    </div>
                    <!-- <div class="track-action-box">
													
                    </div>-->
                  </div>
                </div>
                <div v-if="songlist.length==0">No Audio available</div>
                <div v-if="enabledragdrop">
                  <draggable v-model="songlist" @end="onEnd">
                    <div class="track-row" v-for="(song,index) in songlist" :key="index">
                      <div v-if="albumInformation!=null" class="track-icon-box">
                        <label class="drag-icon">
                          <img src="/assets/images/track-row-drag-icon.png" alt>
                        </label>
                        <label class="track-row-check">
                          <input
                            type="checkbox"
                            :id="'song'+song.songId"
                            :value="song.songId"
                            class="track-check"
                            @change="storesongsIds"
                          >
                          <span class="check-box"></span>
                        </label>
                        <label class="track-play-btn">
                          <button @click="playSong(index)" :id="'button'+song.songId">
                            <img
                              src="/assets/images/track-leaf.png"
                              :id="'image'+song.songId"
                              class="imagechangeinsong"
                              alt
                            >
                          </button>
                        </label>
                      </div>
                      <div class="track-information">
                        <label class="track-name">
                          <span class="numbering">{{index+1}}</span>
                          {{song.UserFile.fileTitle}}
                        </label>
                        <label class="artist-name">{{albumInformation.User.fullName}}</label>
                        <!-- <label class="track-duration">
										3:25
                        </label>-->
                      </div>
                      <div class="track-action-box">
                        <span class="open-track-menu">
                          <img src="/assets/images/track-row-drag-icon.png" alt>
                        </span>
                        <ul>
                          <li>
                            <a
                              href="javascript:;"
                              class="open-playlist"
                              :value="song.songId"
                              @click="deleteSpecificSong1(song.songId); storesongsIds;"
                            >
                              <span class="icon-plus"></span>Add to
                            </a>
                          </li>
                          <li
                            class="delete-h-s"
                            :id="song.id+'delete'"
                            @click="deleteSpecificSong(song.songId)"
                          >
                            <a href="javascript:;" class="delete-color">
                              <span class="icon-rubbish-bin"></span>Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </draggable>
                </div>
                <div v-else>
                  <div class="track-row" v-for="(song,index) in songlist" :key="index">
                    <div v-if="albumInformation!=null" class="track-icon-box">
                      <label class="drag-icon">
                        <img src="/assets/images/track-row-drag-icon.png" alt>
                      </label>
                      <label class="track-row-check">
                        <input
                          type="checkbox"
                          :id="'song'+song.songId"
                          :value="song.songId"
                          class="track-check"
                          @change="storesongsIds"
                        >
                        <span class="check-box"></span>
                      </label>
                      <label class="track-play-btn">
                        <button @click="playSong(index)" :id="'button'+song.songId">
                          <img
                            src="/assets/images/track-leaf.png"
                            :id="'image'+song.songId"
                            class="imagechangeinsong"
                            alt
                          >
                        </button>
                      </label>
                    </div>
                    <div class="track-information">
                      <label class="track-name">
                        <span class="numbering">{{index+1}}</span>
                        {{song.UserFile.fileTitle}}
                      </label>
                      <label class="artist-name">{{albumInformation.User.fullName}}</label>
                      <!-- <label class="track-duration">
										3:25
                      </label>-->
                    </div>
                    <div class="track-action-box">
                      <span class="open-track-menu">
                        <img src="/assets/images/track-row-drag-icon.png" alt>
                      </span>
                      <ul>
                        <li>
                          <a
                            href="javascript:;"
                            class="open-playlist"
                            :value="song.songId"
                            @click="deleteSpecificSong1(song.songId); storesongsIds;"
                          >
                            <span class="icon-plus"></span>Add to
                          </a>
                        </li>
                        <li
                          class="delete-h-s"
                          :id="song.id+'delete'"
                          @click="deleteSpecificSong(song.songId)"
                        >
                          <a href="javascript:;" class="delete-color">
                            <span class="icon-rubbish-bin"></span>Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <infinite-loading @infinite="infiniteHandler">
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
  </body>
  <div class="playlist-overlay sidebar-close"></div>
  <div class="add-play-list-aside">
    <span class="sidebar-close icon-close" @click="closesidebar"></span>
    <div class="header-area">
      <div class="row">
        <div class="col-6">
          <h3>Add to Playlist</h3>
        </div>
        <div class="col-6">
          <button
            class="new-play-list-btn"
            data-toggle="modal"
            data-target="#create-play-list-Modal"
          >
            <span class="icon-plus"></span>&nbsp;&nbsp;&nbsp; Create New Playlist
          </button>
        </div>
      </div>
    </div>
    <div class="sidebar-album-listing">
      <ul>
        <li v-for="(track,index) in myPlayList" :key="index">
          <div class="media custom-media">
            <img
              v-if="track.coverImage=='' || track.coverImage==null"
              src="assets/images/album-cover-photo.png"
            >
            <img v-else :src="allpath.playist_pictures+track.coverImage">
            <div class="media-body">
              <h4>{{track.title}}</h4>
              <!-- <p>17 Songs</p>       -->
            </div>
          </div>
          <label class="file-check">
            <input
              type="radio"
              @click="getPlayListid(track.id)"
              class="radioclass"
              name="radio_playlist"
            >
            <span class="file-check-icon">Add</span>
          </label>
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
    <div class="add-song-btn">
      <button :disabled="ischacked" @click="addSongstoPlaylist" class="new-play-list-btn">Done</button>
    </div>
    <div
      class="modal custom-pop-up fade show"
      id="create-play-list-Modal"
      style="display: none; padding-right: 17px;"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">Create Album</h4>
            <button type="button" @click="closeModal" class="close" data-dismiss="modal">×</button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <form>
              <div class="pop-up-drag-n-drop">
                <!-- <div v-if="iscoverupload" style="background-color:red;">Please Select A File</div> -->
                <div v-if="istiltleGiven" style="background-color:red;">Please Give A Title</div>
                <label @dragover.prevent @drop="onDrop">
                  <img v-if="coverpicurl == ''" src="/assets/images/upload-pop-img.png" alt="image">
                  <img v-else :src="coverpicurl" alt="image">
                  <p class="drg-n-drp-para">Drag and Drop File to Upload</p>
                  <p class="browse">
                    or
                    <span>browse</span> to choose image
                  </p>
                  <input @change="coverUpload" type="file">
                </label>
              </div>
              <div class="form-group pop-up-form-group">
                <label>Playlist Title</label>
                <input
                  type="text"
                  v-model="title"
                  class="form-control"
                  placeholder="Eg. Best of Justin Bieber"
                >
              </div>
              <p class="text-center">
                <button @click="createPlayLiast" type="button" class="fan-play-btn mt-0">Save</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal custom-pop-up fade show"
      id="create-playlistsuccess-Modal"
      style="padding-right: 17px; display: none;"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <!-- Modal body -->
          <div class="modal-body success-modal">
            <div class="success-img-sec text-center">
              <img src="/assets/images/success-bg.png" alt="image" class="img-fluid">
              <div class="text-center success-img">
                <img src="/assets/images/success-img.png" alt>
              </div>
            </div>
            <h3 class="success-heading">Playlist Created Successfully</h3>
            <p class="text-center">‘{{title1}}’ Successfully Created</p>
            <p class="text-center">
              <a href="javascript:void(0)" @click="closemodal1" class="fan-play-btn">Continue</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import draggable from "vuedraggable";
import router from "../router";
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
  name: "FanAlbumview",
  props: {
    msg: String
  },
  data() {
    return {
      songid: "",
      songlist: [],
      songids: [],
      albumInformation: null,
      playlistid: "",
      user: JSON.parse(localStorage.getItem("User")),
      profilemage: null,
      isLoading: false,
      iscoverupload: false,
      istiltleGiven: false,
      ischacked: true,
      coverpictur: 1,
      fullPage: true,
      coverpicurl: "",
      title: "",
      myPlayList: [],
      coverFile: "",
      allpath: ALL_PATH,
      page: 1,
      title1: "",
      amBumUserInformation: {},
      tempsong: [],
      page1: 1,
      currentsongid: "",
      enabledragdrop: false
    };
  },
  components: {
    AppHeader,
    AppFooter,
    LeftManu,
    Loading,
    InfiniteLoading,
    draggable
  },
  methods: {
    onEnd(e) {
      console.log(this.songlist);
    },
    deleteplay() {
      API.delete(`playlist/${this.songid}`, {
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      })
        .then(response => {
          if (response.data) {
            $("#playlistdelete").modal("hide");
            if (JSON.parse(localStorage.getItem("User")).userType == "2") {
              router.push({
                name: "FanProfile"
              });
            } else {
              router.push({
                name: "ArtistProfile"
              });
            }
          }
        })
        .catch(error => {});
    },
    deletePlaylist() {
      $("#playlistdelete").modal("show");
    },
    playSong(index) {
      let seobj = {};
      seobj.songs = this.tempsong;
      seobj.index = index;
      seobj.albumCover = this.allpath.playist_pictures + this.albumInformation.coverImage;
      // this.$store.state.songs.map((e)=>{
      // 	if(e.id==id){
      // 		this.$store.commit("playSongs",e);
      // 	}

      // });
      console.log(seobj);
      this.$store.commit("playSongs", seobj);
    },
    getPlayListid(id) {
      this.playlistid = id;
      this.ischacked = false;
    },
    closesidebar() {
      this.playlistid = "";
      this.ischacked = true;
      $(".radioclass").prop("checked", false);
      $(".track-check").prop("checked", false);
      $(".add-play-list-aside").removeClass("open_add-play-list-aside");
      $(".dynamic-action-btn").css("display", "none");
    },
    infiniteHandler($state) {
      this.page = this.page + 1;
      var senddata2 = {
        albumId: this.songid,
        page: this.page,
        per_page: 10
      };
      API.get(`playlist/${this.songid}/song`, {
        params: senddata2,
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      })
        .then(response => {
          if (response.data) {
            response.data.data.map(e => {
              this.songlist.push(e);
              let songs = {};

              songs.id = e.UserFile.id;
              songs.title = e.UserFile.fileTitle;
              songs.autoplay = true;
              songs.src =
                this.allpath.user_uploaded_musics + e.UserFile.fileName;
              console.log(songs);
              if (e.UserFile.musicImage == null) {
                songs.pic = "";
              } else {
                songs.pic =
                  this.allpath.user_uploaded_musics + e.UserFile.musicImage;
              }

              this.tempsong.push(songs);
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
    deleteSpecificSong1(id = "") {
      if (id != "") {
        $("#song" + id).prop("checked", true);
        this.songids = [];
        this.songids.push(id);
      }
      $(".add-play-list-aside").addClass("open_add-play-list-aside");
    },
    deleteSpecificSong(id = "") {
      console.log(id);
      $("#singlesongdelete").modal("show");
      if (id != "") {
        this.currentsongid = id;
        $("#song" + id).prop("checked", true);
      } else {
        $(".track-check").prop("checked", true);
      }
    },
    deleteSong() {
      if (this.currentsongid != "") {
        $("#singlesongdelete").modal("hide");
        this.songids = [];
        this.songids.push(this.currentsongid);
        console.log(this.songids);
        // 		  let head2 = {
        //   headers: { "Authorization": JSON.parse(localStorage.getItem("Token")) }
        // };

        API.delete(`playlist/${this.songid}/song`, {
          data: { songIds: this.songids },
          headers: {
            "x-access-token": JSON.parse(localStorage.getItem("Token"))
          }
        })
          .then(response => {
            if (response.data) {
              //		this.renderlist();
              $(".track-check").prop("checked", false);
              $(".add-play-list-aside").removeClass("open_add-play-list-aside");
              $(".playlist-list .dynamic-action-btn").css("display", "none");
              $(".dynamic-action-list").removeClass("active");
              this.songlist.map(e => {
                this.songids.forEach(e1 => {
                  if (e.songId == e1) {
                    this.songlist = this.songlist.filter(
                      e2 => e2.songId != e.songId
                    );
                  }
                });
              });
              this.currentsongid = "";
              this.songids = [];
            }
          })
          .catch(error => {});
      } else {
        $("#singlesongdelete").modal("hide");

        API.delete(`playlist/${this.songid}/song`, {
          data: { songIds: this.songids },
          headers: {
            "x-access-token": JSON.parse(localStorage.getItem("Token"))
          }
        })
          .then(response => {
            if (response.data) {
              $(".track-check").prop("checked", false);
              $(".add-play-list-aside").removeClass("open_add-play-list-aside");
              $(".playlist-list .dynamic-action-btn").css("display", "none");
              $(".dynamic-action-list").removeClass("active");
              //		this.renderlist();
              this.currentsongid = "";
              this.songlist = [];
              this.songids = [];
            }
          })
          .catch(error => {});
      }
    },
    onDrop(e) {
      e.stopPropagation();
      e.preventDefault();
      //var files = e.dataTransfer.files;
      //   Array.from(files).forEach(file => {
      // 			  	if(file.type =='audio/mp3'){
      //  				this.albumSong.push(file);
      // 				  }
      // 				  else{
      // 					  this.typeError = true;
      // 				  }
      // 		  });

      let file1 = e.dataTransfer.files[0];
      function getBase64(file1) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file1);
          reader.onload = () => resolve(reader.result);
          reader.onerror = error => reject(error);
        });
      }
      getBase64(file1).then(data => {
        this.iscoverUploaded = true;
        this.coverpicurl = data;
      });
      this.coverFile = e.dataTransfer.files[0];
    },
    initializepalylist() {
      var senddata1 = {
        page: 1,
        perPage: 10
      };
      API.get("playlist", {
        params: senddata1,
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      })
        .then(response => {
          if (response.data) {
            this.myPlayList = response.data.data;
            //this.isLoading = false;
            //window.location.href = "/profile";
          }
        })
        .catch(error => {});
    },
    palylistHeader() {},
    addSongstoPlaylist() {
      console.log("call1");

      let head9 = {
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      };
      let sendadat = { songIds: this.songids };
      API.post(`playlist/${this.playlistid}/song`, sendadat, head9)
        .then(response => {
          if (response.data) {
            this.playlistid = "";
            this.songids = [];
            this.ischacked = true;
            $(".dynamic-action-btn").css("display", "none");
            $(".radioclass").prop("checked", false);

            $(".playlist-list .dynamic-action-btn").css("display", "none");
            $(".dynamic-action-list").removeClass("active");
            // $('.dynamic-action-btn').css("display", "none");
            $(".btn-check")
              .find(".text")
              .text("Select All");
            $(".btn-check")
              .find(".all-check")
              .prop("checked", false);
            $(".track-check").prop("checked", false);
            $(".add-play-list-aside").removeClass("open_add-play-list-aside");
            swal("Added!", "Successfully Added To PlayList !", "success");
          }
        })
        .catch(error => {
          this.isLoading = false;
        });
    },
    closeModal() {
      // this.iscoverupload = false;
      this.istiltleGiven = false;
      $("#create-play-list-Modal").modal("hide");
      this.coverpicurl = "";
      this.coverFile = "";
      this.title = "";
    },

    closemodal1() {
      $("#create-playlistsuccess-Modal").modal("hide");
    },
    coverUpload(e) {
      console.log(e.target.files[0]);
      let file1 = e.target.files[0];
      function getBase64(file1) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file1);
          reader.onload = () => resolve(reader.result);
          reader.onerror = error => reject(error);
        });
      }
      getBase64(file1).then(data => {
        this.iscoverUploaded = true;
        this.coverpicurl = data;
      });
      this.coverFile = e.target.files[0];
    },

    createPlayLiast() {
      // if (this.coverFile == "") {
      //   this.iscoverupload = true;
      // } 
      if (this.title == "") {
        // this.iscoverupload = false;
        this.istiltleGiven = true;
      } else {
        this.isLoading = true;
        var formData = new FormData();
        formData.append("title", this.title);
        formData.append("coverImage", this.coverFile);
        let head3 = {
          headers: {
            "x-access-token": JSON.parse(localStorage.getItem("Token"))
          }
        };
        API.post("playlist", formData, head3)
          .then(response => {
            this.isLoading = false;
            if (response.data) {
              this.myPlayList.unshift(response.data.data);
              // this.iscoverupload = false;
              this.istiltleGiven = false;
              this.coverpicurl = "";
              this.coverFile = "";
              this.title1 = this.title;
              this.title = "";
              $("#create-play-list-Modal").modal("hide");
              $("#create-playlistsuccess-Modal").modal("show");

              //    this.coverpictur= ALL_PATH.cover_pictures+ response.data.data.coverPicture;
            }
          })
          .catch(error => {
            this.isLoading = false;
          });
      }
    },
    infiniteHandler1($state) {
      this.page1 = this.page1 + 1;
      var senddata2 = {
        page: this.page1,
        perPage: 10
      };
      API.get("playlist", {
        params: senddata2,
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      })
        .then(response => {
          if (response.data) {
            response.data.data.map(e => {
              this.myPlayList.push(e);
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
      console.log(file);
      this.isLoading = true;
      //  this.isLoading= true;
      var formData = new FormData();
      formData.append("coverPicture", file[0]);
      let head2 = {
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      };
      API.post("update-cover-picture", formData, head2)
        .then(response => {
          if (response.data) {
            this.coverpictur =
              ALL_PATH.cover_pictures + response.data.data.coverPicture;
            this.isLoading = false;
          }
        })
        .catch(error => {
          this.isLoading = false;
        });
    },
    storesongsIds(e) {
      if (e.target.checked) {
        this.songids.push(e.target.value);
        console.log(this.songids);
        $(".playlist-list")
          .find(".dynamic-action-btn.playlist_global")
          .css("display", "inline-block");
      } else {
        $("#" + e.target.value + "delete").hide();
        this.songids = this.songids.filter(e1 => e1 != e.target.value);
        if (this.songids.length == 0) {
          $(".playlist-list")
            .find(".dynamic-action-btn")
            .css("display", "none");
        }
      }
      console.log(this.songids);
    },
    alldeletedSongs(e) {
      if (e.target.checked) {
        $(".playlist-list")
          .find(".dynamic-action-btn")
          .css("display", "inline-block");
        $(".track-check").prop("checked", true);
        $(".btn-check")
          .find(".text")
          .text("Deselect All");
        this.songids = this.songlist.map(e1 => String(e1.songId));
        console.log(this.songids);
      } else {
        $(".playlist-list")
          .find(".dynamic-action-btn")
          .css("display", "none");
        $(".track-check").prop("checked", false);
        $(".btn-check")
          .find(".text")
          .text("Select All");
        this.songids = [];
      }
      console.log(this.songids);
    },
    showHide(e) {
      this.enabledragdrop = !this.enabledragdrop;
      $(".more-album-menu button").toggleClass("active");
      $(".dynamic-action-list").toggleClass("active");
      $(".play-list-utility-sec ul").toggleClass("open");
      $(".track-icon-box label.track-row-check").toggleClass("open");
    },
    // renderlist(){
    // 		   var senddata3 = {
    //     albumId:this.songid,
    //     page:this.page,
    //     per_page:10
    // };
    //     API.get("search-song", {params:senddata3, headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }})
    //           .then(response => {
    //             if (response.data) {
    // 					this.songlist =  response.data .data;
    // 				//this.isLoading = false;
    // 					//window.location.href = "/profile";

    //             }
    //           })
    //           .catch(error => {

    //           });
    // },
    getAlbumDetails() {
      API.get(`playlist/${this.songid}`, {
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      })
        .then(response => {
          if (response.data) {
            if (response.data.data.userId != this.user.id) {
              if (this.user.userType == "2") {
                router.push({
                  name: "FanProfile"
                });
              } else {
                router.push({
                  name: "ArtistProfile"
                });
              }
            } else {
              this.albumInformation = response.data.data;
              API.get(`playlist/${this.songid}/song`, {
                headers: {
                  "x-access-token": JSON.parse(localStorage.getItem("Token"))
                }
              })
                .then(response => {
                  if (response.data) {
                    this.songlist = response.data.data;

                    this.songlist.map(e => {
                      let songs = {};

                      songs.id = e.UserFile.id;
                      songs.title = e.UserFile.fileTitle;
                      songs.autoplay = true;
                      songs.src =
                        this.allpath.user_uploaded_musics + e.UserFile.fileName;
                      console.log(songs);
                      if (e.UserFile.musicImage == null) {
                        songs.pic = "";
                      } else {
                        songs.pic =
                          this.allpath.user_uploaded_musics +
                          e.UserFile.musicImage;
                      }

                      this.tempsong.push(songs);
                    });

                    //this.albumInformation = response.data.data;
                    // this.renderlist();

                    //this.isLoading = false;
                    //window.location.href = "/profile";
                  }
                })
                .catch(error => {});
            }
          }
        })
        .catch(error => {});
    }
  },
  created() {
    if (this.$route.params.id != undefined || this.$route.params.id != null) {
      this.songid = this.$route.params.id;
      this.getAlbumDetails();
      this.initializepalylist();
    } else {
      window.location.href = "/profile";
    }
  },

  mounted() {
    //open btn
    //	alert("Alert");
    $(".all-check").click(function() {
      if ($(this).prop("checked") == true) {
        $(".track-check").prop("checked", "true");
        $(this)
          .parent(".btn-check")
          .find(".text")
          .text("Deselect All");
        $(".playlist-list")
          .find(".dynamic-action-btn")
          .css("display", "inline-block");
      } else {
        $(".track-check").prop("checked", false);
        $(this)
          .parent(".btn-check")
          .find(".text")
          .text("Select All");
        $(".playlist-list")
          .find(".dynamic-action-btn")
          .css("display", "none");
      }
    });

    //         $('.open-playlist').click(function(){
    // 	$('.playlist-overlay').css('display','block');
    // 	$('.add-play-list-aside').addClass('open_add-play-list-aside');
    // });
    // $('.sidebar-close').click(function(){
    // 	$('.playlist-overlay').css('display','none');
    // 	$('.add-play-list-aside').removeClass('open_add-play-list-aside');
    // });
    // $('.open-track-menu').mouseenter(function(){
    // 	$(this).siblings('.track-action-box ul').css("display", "block");
    // });
    // $('.open-track-menu').mouseleave(function(){
    // 	$(this).siblings('.track-action-box ul').css("display", "none");
    // });
  },
  destroyed() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.play-list-utility-sec ul.dynamic-action-list.active li.dynamic-action-btn {
  display: inline-block;
}
.playlist-delete-img {
  max-width: 102px;
}
.profile-img {
  height: 200px;
  width: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  overflow: hidden;
  background-position: center;
}
</style>
