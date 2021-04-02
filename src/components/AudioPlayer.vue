<template>
  <div class="player-outer-wraper" v-if="$store.state.isShow">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10">
          <div class="player-inner clearfix">
            <div class="current-track-info float-left">
              <div class="media player-media-object">
                <img
                  v-if="!($store.state.albumCoverImage)"
                  src="/assets/images/default_songs.png"
                  alt="Track"
                  class="playing-track-img"
                >
                <img
                  v-else
                  :src="$store.state.albumCoverImage"
                  alt="Track"
                  class="playing-track-img"
                >
                <div class="media-body">
                  <h4
                    class="playing-track-name"
                  >{{$store.state.mp3.songs[$store.state.mp3.index].title}}</h4>
                  <p class="playing-track-details"></p>
                </div>
              </div>
            </div>
            <div class="player-control-wraper float-right">
              <div class="controls-inner">
                <div class="time-duration-wrap">
                  <ul class="basic-controls">
                    <li>
                      <button
                        :disabled="$store.state.mp3.songs.length==1"
                        @click="prev"
                        class="next-prev-btn btn-prev"
                      >
                        <i class="icon-back"></i>
                      </button>
                    </li>
                    <li class="play-pause-btn-cont">
                      <button v-if="$store.state.isPlaying" @click="pause" class="play-pause-btn" >
                        <i class="icon-pause" style="margin-top:2px"></i>
                      </button>
                      <button v-else class="play-pause-btn" @click="play" >
                        <i class="icon-music-player-play" style="margin-left:5px;margin-top:2px"></i>
                      </button>
                    </li>
                    <!-- icon-pause   /  icon-music-player-play-->
                    <li>
                      <button
                        :disabled="$store.state.mp3.songs.length==1"
                        @click="next"
                        class="next-prev-btn btn-nxt"
                      >
                        <i class="icon-next"></i>
                      </button>
                    </li>
                  </ul>
                  <ul class="time-duration-label">
                    <li class="time-label">
                      <span id="cangespan" class="playing-time">0:00</span>
                    </li>
                    <li class="loading-time">
                      <div
                        class="total-length"
                        @mouseleave="museleave"
                        @mousedown="startDrag"
                        @mousemove="seek($event)"
                        @mouseup="stopseek($event)"
                      >
                        <div class="progressive-length" style="width:0%;"></div>
                      </div>
                    </li>
                    <li class="time-label text-right">
                      <span
                        class="total-time"
                      >{{ formatTime(Math.round($store.state.sound.duration()))}}</span>
                    </li>
                  </ul>
                </div>
                <div class="more-control-div">
                  <ul class="more-control-list">
                    <!-- <li>
                      <button class="shuffel-track active">
                        <span class="icon-shuffle"></span>
                      </button>
                    </li>
                    <li>
                      <button class="repeat-track">
                        <span class="icon-repeat"></span>
                      </button>
                    </li> -->

                    <li class="dynamic-action-btn playlist_global" v-if="(user.userType == 3)">
                      <button @click="playlistOpen()" class="open-playlist palylist-view">
                        <span class="icon-plus palylist-icon-view"></span>
                      </button>
                    </li>
                     <!-- <li>
                    <button type="button" class="close repeat-track" aria-label="Close">
                     <span aria-hidden="true">&times;</span>
                    </button>
                    </li>  -->
                  </ul>
                  <div class="volume-div">
                    <span v-if="!$store.state.isSoundMuted" class="volume-icon" @click="mute">
                      <i class="icon-speaker"></i>
                    </span>
                    <span v-else class="volume-icon" @click="unmute">
                      <img
                        src="/assets/images/speaker.png"
                        style="width:26px; vertical-align:-3px"
                        alt
                      >
                    </span>
                    <div
                      @mousedown="startDragvol"
                      @mousemove="seekvol($event)"
                      @mouseleave="volmuseleave"
                      @mouseup="stopseekvol"
                      class="total-volume-length"
                    >
                      <div class="volume-length" @click="seekenetervol($event)">
                        <div class="progressive-volume" style="width:50%;"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
         <div class="close-btn">
          <button type="button" @click="closePlayer" class="close repeat-track close-btn-details" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    </div>

    <div class="playlist-overlay sidebar-close"></div>
    <div class="add-play-list-aside1">
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
                src="/assets/images/album-cover-photo.png"
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
        <button :disabled="ischacked" v-bind:class="{ disableCls: ischacked }" @click="addSongstoPlaylist" class="new-play-list-btn">Done</button>
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
                    <img
                      v-if="coverpicurl == ''"
                      src="/assets/images/upload-pop-img.png"
                      alt="image"
                    >
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
        <loading :active.sync="isLoading" 
        :can-cancel="false" 
        loader='dots'
        :is-full-page="fullPage"></loading>
  </div>
</template>

<script>
import InfiniteLoading from "vue-infinite-loading";
import { API } from "@/api/api";
import { ALL_PATH } from "@/Constants/Constants";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
export default {
  name: "AudioPlayer",
  props: {
    msg: String,
    minutes: 0,
    seconds: 0,
    cal: null
  },
  data() {
    return {
      user: JSON.parse(localStorage.getItem("User")),
      songids: [],
      myPlayList: [],
      // iscoverupload: false,
      istiltleGiven: false,
      ischacked: true,
      coverpicurl: "",
      title: "",
      title1: "",
      allpath: ALL_PATH,
      page: 1,
      page1: 1,
      isLoading: false,
      fullPage: true
    };
  },
  components: {
      InfiniteLoading,
      Loading
  },
  methods: {
    mute() {
      this.$store.state.muteshow = false;
      this.$store.state.sound.mute(true);
      this.$store.state.isSoundMuted = true;
    },
    unmute() {
      this.$store.state.muteshow = true;
      this.$store.state.sound.mute(false);
      this.$store.state.isSoundMuted = false;
    },
    stopseek(e) {
      this.$store.state.startseek = false;
      this.$store.state.sound.seek(
        (e.offsetX / 448) * this.$store.state.sound.duration()
      );
    },
    museleave() {
      this.$store.state.startseek = false;
    },
    volmouseot() {
      this.$store.state.startseekvol = false;
    },
    stopseekvol() {
      this.$store.state.startseekvol = false;
    },
    volmuseleave() {
      this.$store.state.startseekvol = false;
    },
    seekeneter(e) {
      $(".progressive-length").css(
        "width",
        ((Math.ceil(e.offsetX / 2) / this.$store.state.sound.duration()) *
          100 || 0) + "%"
      );
      this.$store.state.sound.seek(Math.ceil(e.offsetX / 2));
    },
    mousdown(e) {
      $(".progressive-length").css(
        "width",
        ((e.offsetX / 2 / this.$store.state.sound.duration()) * 100 || 0) + "%"
      );
      this.$store.state.sound.seek(e.offsetX / 2);
    },
    seek(e) {
      if (this.$store.state.startseek) {
        $(".progressive-length").css(
          "width",
          ((((e.offsetX / 448) * this.$store.state.sound.duration()) /
            this.$store.state.sound.duration()) *
            100 || 0) + "%"
        );
        this.$store.state.sound.seek(
          (e.offsetX / 448) * this.$store.state.sound.duration()
        );
      }
    },
    next() {
      if (
        this.$store.state.mp3.songs.length - 1 >
        this.$store.state.mp3.index
      ) {
        let sendobj = {};
        sendobj.songs = this.$store.state.mp3.songs;
        sendobj.index = this.$store.state.mp3.index + 1;

        this.$store.commit("playSongs", sendobj);
      } else {
        //that.pause();
      }
    },
    prev() {
      if (this.$store.state.mp3.index != 0) {
        let sendobj = {};
        sendobj.songs = this.$store.state.mp3.songs;
        sendobj.index = this.$store.state.mp3.index - 1;

        this.$store.commit("playSongs", sendobj);
      } else {
        //that.pause();
      }
    },
    seekvol(e) {
      if (this.$store.state.startseekvol) {
        const MAX = e.offsetX == 114 ? 100 : e.offsetX;
        const DIV = e.offsetX > 9 ? 100 : 100;
        if (MAX / DIV > 1) {
          return;
        }
        $(".progressive-volume").css("width", MAX + "%");
        var vol = MAX / DIV < 1 ? MAX / DIV : 1;

        let _volume = MAX / DIV

        this.$store.state.volume = _volume
        
        this.$store.state.sound.volume(MAX / DIV);
        this.unmute();
      }
    },
    seekenetervol(e) {
      var MAX = e.offsetX == 114 ? 100 : e.offsetX;
      const DIV = e.offsetX > 9 ? 100 : 100;
      if (MAX > 100) {
        MAX = 100;
      }

      $(".progressive-volume").css("width", MAX + "%");
      let _volume = MAX / DIV

      this.$store.state.volume = _volume
      this.$store.state.sound.volume(_volume);
      this.unmute();
    },
    startDrag() {
      this.$store.state.startseek = true;
    },
    startDragvol() {
      this.$store.state.startseekvol = true;
    },
    pause() {
      this.$store.state.sound.pause();
      this.$store.state.isPlaying = false;
    },
    play() {
      this.$store.state.sound.play();
      this.$store.state.isPlaying = true;
    },
    reall() {
      if (this.$store.state.cal != null) {
        clearInterval(this.$store.state.cal);
      }

      var sound = this.$store.state.sound;
      $("#cangespan").html(this.formatTime(Math.round(sound.seek())));

      this.$store.state.cal = setInterval(() => {
        $("#cangespan").html(this.formatTime(Math.round(sound.seek())));
        var seek = sound.seek() || 0;

        $(".progressive-length").css(
          "width",
          ((seek / sound.duration()) * 100 || 0) + "%"
        );
        if (sound.seek() == 0) {
          clearInterval(this.$store.state.cal);
          return;
        }
      }, 1000);
    },
    formatTime: function(secs) {
      var minutes = Math.floor(secs / 60) || 0;
      var seconds = secs - minutes * 60 || 0;
      return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    },

    playlistOpen(id = "") {
      var that = this;
      id =  that.$store.state.mp3.songs[that.$store.state.mp3.index].id; 
      if (id != "") {
        $("#song" + id).prop("checked", true);
        this.songids = [];
        this.songids.push(id);
      }
      $(".add-play-list-aside1").addClass("open_add-play-list-aside1");
    },
    createPlayLiast() {
       if (this.title == "") {
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
        API.post("playlist", formData, head3).then(response => {
          this.isLoading = false;
          if (response.data) {
            this.myPlayList.unshift(response.data.data);
            this.istiltleGiven = false;
            this.coverpicurl = "";
            this.coverFile = "";
            this.title1 = this.title;
            this.title = "";
            $("#create-play-list-Modal").modal("hide");
            $("#create-playlistsuccess-Modal").modal("show");
          }
        }).catch(error => {
          this.isLoading = false;
        });
      }
    },
    coverUpload: function(e) {
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
    closeModal() {
      this.istiltleGiven = false;
      $("#create-play-list-Modal").modal("hide");
      this.coverpicurl = "";
      this.coverFile = "";
      this.title = "";
    },

    closemodal1() {
      $("#create-playlistsuccess-Modal").modal("hide");
    },
    initializepalylist() {
      var senddata1 = {
        page: 1,
        perPage: 10
      };
      API.get("playlist", {
        params: senddata1,
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      }).then(response => {
        if (response.data) {
          this.myPlayList = response.data.data;
        }
      }).catch(error => {});
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
      }).then(response => {
        if (response.data) {
          response.data.data.map(e => {
            this.myPlayList.push(e);
          });
          if (response.data.data.length == 0) {
            $state.complete();
          } else {
            $state.loaded();
          }
        }
      }).catch(error => {});
    },
    closesidebar() {
      this.playlistid = "";
      this.ischacked = true;
      $(".radioclass").prop("checked", false);
      $(".track-check").prop("checked", false);
      $(".add-play-list-aside1").removeClass("open_add-play-list-aside1");
    },

    addSongstoPlaylist() {
      let head9 = {
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      };
      let sendadat = { songIds: this.songids };
      API.post(`playlist/${this.playlistid}/song`, sendadat, head9).then(response => {
        if (response.data) {
          this.playlistid = "";
          this.songids = [];
          this.ischacked = true;
          $(".dynamic-action-btn").css("display", "none");

          $(".radioclass").prop("checked", false);

          $(".playlist-list .dynamic-action-btn").css("display", "none");
          
          $(".dynamic-action-list").removeClass("active");
          
          $(".btn-check").find(".text").text("Select All");
          
          $(".btn-check").find(".all-check").prop("checked", false);
          
          $(".track-check").prop("checked", false);
          
          $(".add-play-list-aside1").removeClass("open_add-play-list-aside1");
          
          swal("Added!", "Successfully Added To PlayList !", "success");
        }
      }).catch(error => {
        this.isLoading = false;
      });
    },
    onDrop(e) {
      e.stopPropagation();
      e.preventDefault();
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
    getPlayListid(id) {
      this.playlistid = id;
      this.ischacked = false;
    },
    closePlayer() {
      this.$store.state.sound.pause();
      this.$store.state.isPlaying = false;
      this.$store.state.isShow = false;
      this.$store.state.currentlyPlayingSongId = null;
    },
    initPlayerVolume: function() {
      let _uiVolumeLength = this.$store.state.volume * 100;
      this.$store.state.sound.volume(this.$store.state.volume);
      $(".progressive-volume").css("width", _uiVolumeLength + "%");
    }
  },
  created() {
    this.initializepalylist();
  },

  mounted() {
    this.initPlayerVolume();
    
    this.$store.state.muteshow = true;
    var that = this;
    this.$store.state.sound.on("pause", function() {
      $(
        "#button" + that.$store.state.mp3.songs[that.$store.state.mp3.index].id
      ).prop("disabled", false);
      $(
        "#image" + that.$store.state.mp3.songs[that.$store.state.mp3.index].id
      ).attr("src", "/assets/images/track-leaf.png");
      $(
        "#image" + that.$store.state.mp3.songs[that.$store.state.mp3.index].id
      ).removeClass("playing");
    });
    this.$store.state.sound.on("play", function() {
      $(".track-play-btn button").prop("disabled", false);
      $(".imagechangeinsong").removeClass("playing");

      $(".imagechangeinsong").attr("src", "/assets/images/track-leaf.png");
      $(
        "#image" + that.$store.state.mp3.songs[that.$store.state.mp3.index].id
      ).attr("src", "/assets/images/miv60x60.gif");
      $(
        "#image" + that.$store.state.mp3.songs[that.$store.state.mp3.index].id
      ).addClass("playing");
      $(
        "#button" + that.$store.state.mp3.songs[that.$store.state.mp3.index].id
      ).prop("disabled", true);

      that.reall();
    });
    this.$store.state.sound.on("end", function() {
      // that.pause();
      $(
        "#button" + that.$store.state.mp3.songs[that.$store.state.mp3.index].id
      ).prop("disabled", false);
      $(
        "#image" + that.$store.state.mp3.songs[that.$store.state.mp3.index].id
      ).attr("src", "/assets/images/track-leaf.png");
      if (that.$store.state.mp3.songs.length > 1) {
        if (
          that.$store.state.mp3.songs.length - 1 >
          that.$store.state.mp3.index
        ) {
          let sendobj = {};
          sendobj.songs = that.$store.state.mp3.songs;
          sendobj.index = that.$store.state.mp3.index + 1;
          that.$store.commit("playSongs", sendobj);
        } else {
          that.pause();
        }
      } else {
        that.pause();
      }
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
/* Media player */
.player-outer-wraper {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #413f8a;
  padding: 7px 0;
  z-index: 9999;
  display: flex;
  align-items: center;
}
.current-track-info {
  width: 315px;
  box-sizing: border-box;
}
.player-control-wraper {
  width: calc(100% - 315px);
  box-sizing: border-box;
  padding: 0 15px;
}
.player-media-object {
  align-items: center;
  padding-right: 15px;
  border-right: 1px solid #fff;
  margin-top: 4px;
  height: 60px;
}
.current-track-info .playing-track-img {
    width: auto;
    margin-right: 8px;
    height: 100%;
    max-width: 60px;
}
.current-track-info .playing-track-name {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  color: #fff;
  font-family: "Quicksand", sans-serif;
  font-size: 15px;
}
.current-track-info .playing-track-details {
  font-family: "Quicksand", sans-serif;
  font-size: 13px;
  color: #fff;
  margin: 0;
}
.media-body {
  width: calc(100% - 65px);
}
.basic-controls {
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding-left: 0;
}
.basic-controls li {
  margin: 0 15px;
}
.basic-controls li.play-pause-btn-cont {
  display: flex;
  justify-content: center;
  align-items: center;
}
.next-prev-btn {
  padding: 0;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 25px;
  cursor: pointer;
}
.basic-controls li .next-prev-btn:focus,
.basic-controls li .play-pause-btn:focus {
  outline: none;
}
.basic-controls li .play-pause-btn {
  width: 43px;
  height: 43px;
  border-radius: 50%;
  border: none;
  background-color: #fff;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  /*padding-left: 10px;*/
  padding-top: 0px;
  color: #413f8a;
  cursor: pointer;
  line-height: 43px;
  text-align: center;
}
.time-duration-label {
  list-style: none;
  padding: 0;
  color: #fff;
  margin: 0;
  display: flex;
  align-items: center;
}
.time-duration-label li.time-label {
  width: 50px;
  box-sizing: border-box;
}
.time-duration-label li.loading-time {
  width: calc(100% - 100px);
  box-sizing: border-box;
  display: flex;
  align-items: center;
}
.time-duration-label li .total-length {
  width: 100%;
  display: inline-block;
  height: 20px;
  position: relative;
  background-color: transparent;
  cursor: pointer;
}
.time-duration-label li .total-length:after {
  content: " ";
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 3px;
  background-color: #7b78af;
  z-index: 0;
  top: 8px;
}
.time-duration-label li .total-length .progressive-length {
  position: absolute;
  left: 0;
  top: 8px;
  bottom: 0;
  background: #fff;
  height: 3px;
  cursor: pointer;
  max-width: 100%;
  z-index: 1;
}
.time-duration-label li .total-length .progressive-length:after {
  content: " ";
  position: absolute;
  height: 15px;
  width: 2px;
  background-color: #fff;
  right: 0;
  top: -6px;
  cursor: pointer;
}
.controls-inner {
  display: flex;
  align-items: center;
}
.controls-inner .more-control-div {
  width: 200px;
  padding: 0 15px 0 30px;
  box-sizing: border-box;
}
.controls-inner .time-duration-wrap {
  width: calc(100% - 200px);
  box-sizing: border-box;
}
ul.more-control-list {
  padding: 0;
  margin: 0;
  list-style: none;
}
ul.more-control-list li {
  display: inline-block;
  margin-right: 15px;
}
ul.more-control-list li:last-child {
  margin-right: 0;
}
ul.more-control-list li .shuffel-track,
ul.more-control-list li .repeat-track {
  padding: 0;
  border: none;
  background: transparent;
  color: #fff;
  font-size: 23px;
  cursor: pointer;
  opacity: 0.5;
}
ul.more-control-list li .shuffel-track:focus,
ul.more-control-list li .repeat-track:focus {
  outline: none;
}
ul.more-control-list li .shuffel-track.active,
ul.more-control-list li .repeat-track.active {
  opacity: 1;
}
.volume-div {
  display: flex;
  align-items: center;
}
.volume-div .volume-icon {
  width: 30px;
  box-sizing: border-box;
  color: #fff;
  font-size: 22px;
}
.volume-div .total-volume-length {
  width: calc(100% - 30px);
  box-sizing: border-box;
  padding-left: 10px;
}
.volume-div .total-volume-length .volume-length {
  width: 100%;
  display: flex;
  height: 20px;
  position: relative;
  background-color: transparent;
  cursor: pointer;
}
.volume-div .total-volume-length .volume-length:after {
  content: " ";
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 2px;
  background-color: #7b78af;
  z-index: 0;
  top: 8px;
}
.volume-div .total-volume-length .volume-length .progressive-volume {
  position: absolute;
  left: 0;
  top: 8px;
  bottom: 0;
  background: #fff;
  height: 2px;
  cursor: pointer;
  max-width: 100%;
  z-index: 1;
}
.volume-div .total-volume-length .volume-length .progressive-volume:after {
  content: " ";
  position: absolute;
  height: 10px;
  width: 2px;
  background-color: #fff;
  right: 0;
  top: -4px;
  cursor: pointer;
}
.view-play-list-wraper {
  padding-bottom: 100px;
}
.palylist-view {
    background: transparent;
    border: none;
    outline:none !important;
    box-shadow: none !important;
    cursor: pointer;
    padding: 0;
}
.palylist-icon-view {
    color: #fff;
    font-size: 20px;
}
.disableCls {
  cursor: not-allowed !important;
  color: #c7c5c5 !important;
  border: 2px solid #c7c5c5 !important;
}
.close-btn {
  position: absolute;
  right: 10px;
}
.close-btn-details {
    color: #fff;
    border: none;
    outline:none !important;
    box-shadow: none !important;
    font-size: 25px;
}
.close-btn-details:hover { 
  color: #fff !important;
}
</style>
