<template>
<div>
  <AppHeader></AppHeader>
  <body class="inner-page">
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
                          src="/assets/images/deefault_album.png"
                        >
                        	<div v-if="albumInformation.coverImage" class="profile-img-album" v-bind:style="{ 'background-image': 'url(' + allpath.album_pictures+albumInformation.coverImage + ')' }"></div>
                        <!-- <img v-else :src="allpath.album_pictures+albumInformation.coverImage"> -->

                        <div v-if="albumInformation.coverImage==null" class="album-play-btn">
                          <button>
                            <span class="icon-music-player-play"></span>
                          </button>
                        </div>
                      </div>
                      <div v-if="albumInformation!=null" class="album-details-sec">
                        <h2>{{albumInformation.albumName}}</h2>
                        <p class="album-creation">
                          Created by
                          <font>{{albumInformation.User.fullName}}</font>
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
                <ul class="playlist-list" v-if="songlist.length>0">
                  <li v-if="albumInformation.ownerId==user.id">
                    <label class="btn-check">
                      <input type="checkbox" @change="alldeletedSongs" class="all-check">
                      <span></span>
                      <figure class="text">Select All</figure>
                    </label>
                  </li>
                  <li v-if="albumInformation.ownerId==user.id" class="dynamic-action-btn">
                    <button @click="deleteSpecificSong('')" class="open-playlist">
                      <span class="icon-rubbish-bin"></span>Delete
                    </button>
                  </li>
                </ul>
                <ul class="dynamic-action-list">
                  <li class="dynamic-action-btn">
                    <a @click="socialShare()" class="sharelink">
                      <span class="icon-share"></span>
                      <font>Share</font>
                    </a>
                  </li>
                  <li v-if="albumInformation.ownerId==user.id" class="dynamic-action-btn">
                    <router-link :to="`/artist-album-edit/${songid}`">
                      <span class="icon-edit"></span>Edit Album
                    </router-link>
                  </li>
                  <li v-if="albumInformation.ownerId==user.id" class="dynamic-action-btn">
                    <a
                      href="javascript:void(0)"
                      data-toggle="modal"
                      data-target="#logoutModalfordeletealbum"
                    >
                      <span class="icon-rubbish-bin"></span>Delete Album
                    </a>
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
                    <div class="track-action-box"></div>
                  </div>
                </div>
                <div v-if="songlist.length==0">No Audio available</div>
                <div v-if="albumInformation.ownerId==user.id">
                  <div v-if="isdragable">
                    <draggable v-model="songlist" @end="onEnd">
                      <div class="track-row" v-for="(song,index) in songlist" :key="index">
                        <div v-if="albumInformation!=null" class="track-icon-box">
                          <label class="drag-icon">
                            <img src="/assets/images/track-row-drag-icon.png" alt>
                          </label>
                          <label v-if="albumInformation.ownerId==user.id" class="track-row-check">
                            <input
                              type="checkbox"
                              :id="'song'+song.id"
                              :value="song.id"
                              class="track-check"
                              @change="storesongsIds"
                            >
                            <span class="check-box"></span>
                          </label>
                          <label class="track-play-btn">
                            <button @click="playSong(index)" :id="'button'+song.id">
                              <img
                                src="/assets/images/track-leaf.png"
                                :id="'image'+song.id"
                                class="imagechangeinsong"
                                alt
                              >
                            </button>
                          </label>
                        </div>
                        <div class="track-information">
                          <label class="track-name">
                            <span class="numbering">{{index+1}}</span>
                            {{song.fileTitle}}
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
                            <!-- <li><a href="javascript:;" class="open-playlist"><span class="icon-plus"></span>Add to </a></li> -->
                            <li
                              class="delete-h-s"
                              v-if="albumInformation.ownerId==user.id"
                              style="display:none"
                              :id="song.id+'delete'"
                              @click="deleteSpecificSong(song.id)"
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
                        <label v-if="albumInformation.ownerId==user.id" class="track-row-check">
                          <input
                            type="checkbox"
                            :id="'song'+song.id"
                            :value="song.id"
                            class="track-check"
                            @change="storesongsIds"
                          >
                          <span class="check-box"></span>
                        </label>
                        <label class="track-play-btn">
                          <button @click="playSong(index)" :id="'button'+song.id">
                            <img
                              src="/assets/images/track-leaf.png"
                              :id="'image'+song.id"
                              class="imagechangeinsong"
                              alt
                            >
                          </button>
                        </label>
                      </div>
                      <div class="track-information">
                        <label class="track-name">
                          <span class="numbering">{{index+1}}</span>
                          {{song.fileTitle}}
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
                          <!-- <li><a href="javascript:;" class="open-playlist"><span class="icon-plus"></span>Add to </a></li> -->
                          <li
                            class="delete-h-s"
                            v-if="albumInformation.ownerId==user.id"
                            style="display:none"
                            :id="song.id+'delete'"
                            @click="deleteSpecificSong(song.id)"
                          >
                            <a href="javascript:;" class="delete-color">
                              <span class="icon-rubbish-bin"></span>Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else>
                  <div class="track-row" v-for="(song,index) in songlist" :key="index">
                    <div v-if="albumInformation!=null" class="track-icon-box">
                      <label class="drag-icon">
                        <img src="/assets/images/track-row-drag-icon.png" alt>
                      </label>
                      <label v-if="albumInformation.ownerId==user.id" class="track-row-check">
                        <input
                          type="checkbox"
                          :id="'song'+song.id"
                          :value="song.id"
                          class="track-check"
                          @change="storesongsIds"
                        >
                        <span class="check-box"></span>
                      </label>
                      <label class="track-play-btn">
                        <button>
                          <img src="/assets/images/track-leaf.png" alt>
                        </button>
                      </label>
                    </div>
                    <div class="track-information">
                      <label class="track-name">
                        <span class="numbering">{{index+1}}</span>
                        {{song.fileTitle}}
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
                        <!-- <li><a href="javascript:;" class="open-playlist"><span class="icon-plus"></span>Add to </a></li> -->
                        <li
                          class="delete-h-s"
                          v-if="albumInformation.ownerId==user.id"
                          style="display:none"
                          :id="song.id+'delete'"
                          @click="deleteSpecificSong(song.id)"
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
  <div class="modal fade" id="logoutModalfordeletealbum">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <!-- Modal body -->
        <div class="modal-body">
          <img src="/assets/images/log-out-modal-icon.png">
          <p class="sign-out-modal-text">
            Are you sure you want to
            Delete This Album?
          </p>
          <p class="modal-btn-para">
            <button type="button" @click="deleteAlbum" class="btn fan-play-btn">Yes</button>
          </p>
          <p class="modal-btn-para mb-0">
            <a href="javascript:;" class="modal-close-btn" data-dismiss="modal">Cancel</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="logoutModalfordeletealbumforsingle">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <!-- Modal body -->
        <div class="modal-body">
          <img src="/assets/images/log-out-modal-icon.png">
          <p class="sign-out-modal-text">
            Are you sure you want to
            Delete This Song?
          </p>
          <p class="modal-btn-para">
            <button type="button" @click="deletesongs" class="btn fan-play-btn">Yes</button>
          </p>
          <p class="modal-btn-para mb-0">
            <a href="javascript:;" class="modal-close-btn" data-dismiss="modal">Cancel</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="playlist-overlay sidebar-close"></div>
  <div class="add-play-list-aside">
    <span class="sidebar-close icon-close"></span>
    <div class="header-area">
      <div class="row">
        <div class="col-6">
          <h3>Add to Playlist</h3>
        </div>
        <div class="col-6">
          <button class="new-play-list-btn">
            <span class="icon-plus"></span>&nbsp;&nbsp;&nbsp; Create New Playlist
          </button>
        </div>
      </div>
    </div>
    <ul>
      <li>
        <div class="media custom-media">
          <img src="assets/images/album-image.png">
          <div class="media-body">
            <h4>Best Songs 2017-2018</h4>
            <p>17 Songs</p>
          </div>
        </div>
        <label class="file-check">
          <input type="checkbox">
          <span class="file-check-icon">Add</span>
        </label>
      </li>

      <li>
        <div class="media custom-media">
          <img src="images/album-image1.png">
          <div class="media-body">
            <h4>Best Songs 2017-2018</h4>
            <p>17 Songs</p>
          </div>
        </div>
        <label class="file-check">
          <input type="checkbox">
          <span class="file-check-icon">Add</span>
        </label>
      </li>

      <li>
        <div class="media custom-media">
          <img src="images/album-image2.png">
          <div class="media-body">
            <h4>Best Songs 2017-2018</h4>
            <p>17 Songs</p>
          </div>
        </div>
        <label class="file-check">
          <input type="checkbox">
          <span class="file-check-icon">Add</span>
        </label>
      </li>

      <li>
        <div class="media custom-media">
          <img src="images/album-image3.png">
          <div class="media-body">
            <h4>Best Songs 2017-2018</h4>
            <p>17 Songs</p>
          </div>
        </div>
        <label class="file-check">
          <input type="checkbox">
          <span class="file-check-icon">Add</span>
        </label>
      </li>

      <li>
        <div class="media custom-media">
          <img src="images/album-image4.png">
          <div class="media-body">
            <h4>Best Songs 2017-2018</h4>
            <p>17 Songs</p>
          </div>
        </div>
        <label class="file-check">
          <input type="checkbox">
          <span class="file-check-icon">Add</span>
        </label>
      </li>

      <li>
        <div class="media custom-media">
          <img src="images/album-image5.png">
          <div class="media-body">
            <h4>Best Songs 2017-2018</h4>
            <p>17 Songs</p>
          </div>
        </div>
        <label class="file-check">
          <input type="checkbox">
          <span class="file-check-icon">Add</span>
        </label>
      </li>

      <li>
        <div class="media custom-media">
          <img src="images/album-image6.png">
          <div class="media-body">
            <h4>Best Songs 2017-2018</h4>
            <p>17 Songs</p>
          </div>
        </div>
        <label class="file-check">
          <input type="checkbox">
          <span class="file-check-icon">Add</span>
        </label>
      </li>

      <li>
        <div class="media custom-media">
          <img src="images/album-image7.png">
          <div class="media-body">
            <h4>Best Songs 2017-2018</h4>
            <p>17 Songs</p>
          </div>
        </div>
        <label class="file-check">
          <input type="checkbox">
          <span class="file-check-icon">Add</span>
        </label>
      </li>
    </ul>
    <div class="add-song-btn">
      <button class="new-play-list-btn">Done</button>
    </div>
  </div>

	 <!-- fan album share modal -->
    <div class="modal contest-modal" id="album_share_modal" data-backdrop="static" data-keyboard="false">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <!-- Modal body -->
          <div class="modal-body">
            <div class="modal-inner-body">
							<ul class="share-list">
              <social-sharing :url="url" network-tag="li" inline-template>
              <div>
								<network network="facebook">
									<i class="fa fa-facebook"></i> Facebook
								</network>
								<network network="googleplus">
									<i class="fa fa-google-plus"></i> Google +
								</network>
								<network network="twitter">
									<i class="fa fa-twitter"></i> Twitter
								</network>
								<network network="pinterest">
									<i class="fa fa-pinterest"></i> Pinterest
								</network>
							</div>
							</social-sharing>
							</ul>
              <div class="text-center p-3">
								 <button class="modal-cancel" data-dismiss="modal">Not Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import draggable from "vuedraggable";
import { ALL_PATH } from "@/Constants/Constants";
import router from "../router";
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
  name: "ArtistAlbumdetails",
  props: {
    msg: String
  },
  data() {
    return {
      songid: "",
      url: "",
      page: 1,
      songlist: [],
      tempsong: [],
      songids: [],
      albumInformation: null,
      amBumUserInformation: {},
      isdragable: false,
      currentsong: "",
      allpath: ALL_PATH,
      user: JSON.parse(localStorage.getItem("User"))
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
	  socialShare() {
      $("#album_share_modal").modal("show");
       this.albumShare();
		},
    playSong(index) {
      let seobj = {};
      seobj.songs = this.tempsong;
      seobj.index = index;
      seobj.albumCover = this.allpath.album_pictures + this.albumInformation.coverImage;
      this.$store.commit("playSongs", seobj);
    },

    onEnd(e) {},

    deleteAlbum() {
      var head2 = {
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      };

      API.post("delete-album", { albumId: this.songid }, head2).then(response => {
        if (response.data) {
          $("#logoutModalfordeletealbum").modal("hide");
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
      }).catch(error => {});
    },

    infiniteHandler($state) {
      this.page = this.page + 1;
      var senddata2 = {
        albumId: this.songid,
        page: this.page,
        per_page: 10
      };
      API.get("search-song", {
        params: senddata2,
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      }).then(response => {
        if (response.data) {
          response.data.data.map(e => {
            this.songlist.push(e);
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
          if (response.data.data.length == 0) {
            $state.complete();
          } else {
            $state.loaded();
          }
        }
      }).catch(error => {});
    },
    deletesongs() {
      if (this.currentsong != "") {
        this.songids = [];
        this.songids.push(this.currentsong);
        var head2 = {
          headers: {
            "x-access-token": JSON.parse(localStorage.getItem("Token"))
          }
        };

        API.post("remove-album-songs", { files: this.songids }, head2).then(response => {
          if (response.data) {
            $("#logoutModalfordeletealbumforsingle").modal("hide");
            this.songlist.map(e => {
              this.songids.forEach(e1 => {
                if (e.id == e1) {
                  this.songlist = this.songlist.filter(e2 => e2.id != e.id);
                }
              });
            });
            this.songids = [];
            this.currentsong = "";
            $(".delete-h-s").hide();
            $(".track-check").prop("checked", false);
          }
        }).catch(error => {});
      } else {
        var head2 = {
          headers: {
            "x-access-token": JSON.parse(localStorage.getItem("Token"))
          }
        };

        API.post("remove-album-songs", { files: this.songids }, head2)
          .then(response => {
            if (response.data) {
              $("#logoutModalfordeletealbumforsingle").modal("hide");
              this.songlist.map(e => {
                this.songids.forEach(e1 => {
                  if (e.id == e1) {
                    this.songlist = this.songlist.filter(e2 => e2.id != e.id);
                  }
                });
              });
              this.currentsong = "";
              this.songids = [];
              $(".delete-h-s").hide();
              $(".track-check").prop("checked", false);
            }
          })
          .catch(error => {});
      }
    },
    deleteSpecificSong(id = "") {
      $("#logoutModalfordeletealbumforsingle").modal("show");
      if (id != "") {
        this.currentsong = id;
      }
    },
    storesongsIds(e) {
      if (e.target.checked) {
        this.songids.push(e.target.value);
        $("#" + e.target.value + "delete").show();
      } else {
        $("#" + e.target.value + "delete").hide();
        this.songids = this.songids.filter(e1 => e1 != e.target.value);
      }
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
        this.songids = this.songlist.map(e1 => String(e1.id));
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
    },
    renderlist() {
      var senddata1 = {
        albumId: this.songid,
        page: this.page,
        per_page: 10
      };
      API.get("search-song", {
        params: senddata1,
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      })
        .then(response => {
          if (response.data) {
            this.songlist = response.data.data;
            this.songlist.map(e => {
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
          }
        })
        .catch(error => {});
    },
    showHide() {
      this.isdragable = !this.isdragable;
      $(".more-album-menu button").toggleClass("active");
      $(".dynamic-action-list").toggleClass("active");
      $(".play-list-utility-sec ul").toggleClass("open");
      $(".track-icon-box label.track-row-check").toggleClass("open");
    },
    getAlbumDetails() {
      API.get(`album/${this.songid}`, {
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      }).then(response => {
        if (response.data) {
          this.albumInformation = response.data.data;

          this.renderlist();
        }
      }).catch(error => {});
    },
    
    albumShare() {  
      API.get(`share-album/${this.songid}`, {
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      }).then(response => {
        if (response.data) {
            this.url = response.data.link;
        }
      }).catch(error => {});
    },
  },
  created() {
    if (this.$route.params.id != undefined || this.$route.params.id != null) {
      this.songid = this.$route.params.id;
      this.getAlbumDetails();
    } else {
      window.location.href = "/profile";
    }
  },

  mounted() {
    //open btn
    $(".all-check").click(function() {
      if ($(this).prop("checked") == true) {
        $(".track-check").prop("checked", "true");

        $(this).parent(".btn-check").find(".text").text("Deselect All");

        $(".playlist-list").find(".dynamic-action-btn").css("display", "inline-block");

      } else {
        $(".track-check").prop("checked", false);
        $(this).parent(".btn-check").find(".text").text("Select All");
        $(".playlist-list").find(".dynamic-action-btn").css("display", "none");
      }
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile-img-album {
    height: 200px;
    width: 200px; 
    background-size: contain;
    background-repeat: no-repeat;
    overflow: hidden;
    background-position: center;
}
</style>
