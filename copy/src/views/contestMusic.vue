<template>
  <div>
    <AppHeader></AppHeader>
    <div class="live-contest-section">
      <div class="live-contest-header">
        <h1>Contest Music</h1>
      </div>
      <div class="text-right p-3" v-if="songList.length < 3">
        <button class="dash-board-btn" @click="addSongView()">Add Song/Video</button>
      </div>
      <!-- upload songs section -->
      <div class="row m-0 details-animated" v-if="isUploadView">
        <div class="col-md-2"></div>
        <div class="col-md-8 upload-div m-5">
          <h2 class="alb-page-heading">Upload Song/Video</h2>
          <div class="p-5">
            <label class="song-title">Title</label>
            <input
              placeholder="Enter your Song/Video title"
              type="text"
              v-model="songTitle"
              v-validate="'required'"
              name="Song Title"
              class="form-control"
            >
            <div class="text-danger mt-1" v-if="isSongTitle">Please Select A Title</div>
          </div>

          <div class="justify-content-center relativediv">
            <div class="col-md-12">
              <div class="text-danger2" v-if="typeError">Please Select A Mp3/Mp4 File</div>
              <div class="text-danger2" v-if="isuploaded">Please Select A Song</div>
              <form method="post">
                <label class="drag-drop" @dragover.prevent @drop="onDrop">
                  <span class="content">
                    <strong>Drag &amp; Drop</strong>To Upload song
                  </span>
                  <span class="upload-here">or, Click to Browse Song</span>
                  <input type="file" @click="$event.target.value=null" @change="onChange">
                </label>
              </form>
            </div>
            <div class="col-md-12">
              <label v-for="(file,index ) in albumSong" :key="index" class="upload-progress">
                <span class="music-icon">
                  <img
                    :src="(file.type == 'audio/mp3') ? '/assets/images/music-file.png' : '/assets/images/video-file.png'"
                    width="30"
                    alt
                  >
                </span>
                <span class="name-progress-size">
                  <span class="title">{{file.name}} {{file.type}}</span>
                  <span class="title">{{file.size | mb}}</span>
                </span>
                <span class="cancel-upload">
                  <a href="javascript:;" @click="removeFile(index)" class="remove-upload">
                    <i class="icon-close"></i>
                  </a>
                </span>
              </label>
            </div>
            <div class="text-center p-3">
              <button
                type="button"
                class="btn-signin d-inline-block"
                @click="saveUploadedFile()"
              >Save</button>
              <a class="btn-cancel" @click="cancel()">Cancel</a>
            </div>

            <loading
              :active.sync="isLoading"
              :can-cancel="false"
              loader="dots" :is-full-page="fullPage">
                <div>Uploading music.....</div>
              <div class="progress-bar">
                <span class="progress-bar-details">
                  <span class="fill-value" 
                  v-bind:style="{width: this.widthValue + '%'}">{{widthValue}}%</span>
                </span>
              </div>
            </loading>
          </div>
        </div>
        <div class="col-md-2"></div>
      </div>
      <!-- upload songs section -->
      <!-- contest songs section -->
      <div class="col-md-10 m-auto border-cls">
        <div class="track-row-container">
          <div class="track-row row-header">
            <div class="track-icon-box">#</div>
            <div class="track-information">
              <label class="track-name">
                <span class="numbering">Title</span>
              </label>
              <label class="artist-name"></label>
            </div>
            <div class="track-action-box"></div>
          </div>

          <div class="text-center" v-if="errorMsg">Please upload at least one music</div>
          <div>
            <draggable v-model="songList" @end="onEnd">
              <div class="track-row" v-for="(song,index) in songList" :key="index">
                <div class="track-icon-box">
                  <label class="drag-icon">
                    <img src="/assets/images/track-row-drag-icon.png" alt>
                  </label>
                  <label class="track-row-check">
                    <span class="check-box"></span>
                  </label>
                  <label class="track-play-btn">
                    <button @click="playSong(song,index)" :id="'button'+song.id">
                      <img
                        :src="(song.mimeType == 'video/mp4') ? '/assets/images/video-camera.png' : '/assets/images/track-leaf.png'"
                        :id="'image'+song.id"
                        class="imagechangeinsong"
                        alt
                      >
                    </button>
                  </label>
                </div>
                <div class="track-information">
                  <label class="track-name">
                    <span class="numbering"></span>
                    {{song.title}}
                  </label>
                  <!-- <div>
                    <input type="text" v-model="song.title" class="input-field">
                  </div> -->
                </div>
                <div class="track-action-box">
                  <span class="open-track-menu">
                    <img src="/assets/images/track-row-drag-icon.png" alt>
                  </span>
                  <ul>

                    <!-- <li class="delete-h-s" @click="EditSpecificSong(song)">
                      <a href="javascript:;" class="edit-color">
                        <i class="fa fa-pencil-square-o edit-icon" aria-hidden="true"></i>Edit
                      </a>
                    </li> -->

                    <li class="delete-h-s" @click="deleteSpecificSong(song)" v-if="songList.length > 1">
                      <a href="javascript:;" class="delete-color">
                        <span class="icon-rubbish-bin"></span>Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </draggable>
          </div>
        </div>
      </div>
    </div>

    <!-- delete particular song  -->
    <div class="modal fade" id="delete-song-modal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <!-- Modal body -->
          <div class="modal-body">
            <div class="modal-video-container text-center no-video-msg">Are you sure to delete?</div>
            <div class="clearfix text-center">
              <button class="modal-back-btn m-2" @click="confirmDelete()">Confirm</button>
              <button class="m-2 modal-back-btn" data-dismiss="modal">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- video modal  -->
    <div class="modal fade" id="video-model-view" data-backdrop="static" data-keyboard="false">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <div><b>{{fileTitle}}</b></div>
            <button type="button" class="close" @click="closeModel()" aria-hidden="true">×</button>
          </div>
          <!-- Modal body -->
          <div class="modal-body">
            <div class="modal-video-container">
              <div class="text-center"><img v-bind:class="{ rotate: rotation }" v-if="(fileType == 'mp3')" src="/assets/images/music-static.png"></div>
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
                 v-bind:class="{ disabledBtn : (currentIndex == 0)}"
                :disabled="(currentIndex == 0)"
                @click="getPrevious()"
               
              >Previous</button>
              <button @click="getNext()" 
               v-bind:class="{ disabledBtn : (currentIndex == songList.length -1)}"
              :disabled="(currentIndex == songList.length -1)"
                class="modal-story-btn float-right" 
              >Next</button>
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
import AppHeader from "@/components/AuthHeader.vue";
import axios from "axios";
import { API } from "@/api/api";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "contestMusic",
  props: {
    msg: String
  },
  data() {
    return {
      user: JSON.parse(localStorage.getItem("User")),
      allpath: ALL_PATH,
      isUploadView: false,
      albumSong: [],
      typeError: false,
      songTitle: "",
      isuploaded: false,
      songList: [],
      songsIdArr : [],
      errorMsg: false,
      songId: null,
      isLoading: false,
      fullPage: true,
      isSongTitle: false,
      url : '',
      currentIndex : null,
      fileTitle : '',
      fileType : '',
      rotation : false,
      widthValue : 0,
      fileSize : null,
    };
  },
  components: {
    AppHeader,
    draggable,
    Loading
  },
  filters: {
    mb: function(value) {
      if (!value) return "";
      var fSExt = new Array("Bytes", "KB", "MB", "GB"),
        i = 0;
      while (value > 900) {
        value /= 1024;
        i++;
      }
      var exactSize = Math.round(value * 100) / 100 + " " + fSExt[i];
      return exactSize;
    }
  },
  methods: {
    updatePaused(el) {
      console.log(el);
      if(el.type == 'playing') {
        this.rotation = true;
      } 
      else if(el.type == 'ended') {
         this.getNext();
      }
      else {
        this.rotation = false;
      }
    },
    contestMusicList() {
      API.get(`contest-music/${this.user.id}`, {
        headers: {
          "x-access-token": JSON.parse(localStorage.getItem("Token"))
        }
      })
        .then(response => {
          if (response.data) {
            this.songList = response.data.data;
            this.songsIdArr = [];
            this.songList.forEach((item) => {
              this.songsIdArr.push(item.id); 
            })
            let contestMusicValue = localStorage.getItem("contestMusicCount");
             contestMusicValue = this.songList.length;
             localStorage.setItem("contestMusicCount", JSON.stringify(contestMusicValue));
            if (this.songList.length == 0) {
              this.errorMsg = true;
            } else {
              this.errorMsg = false;
            }
            console.log("contest music list", JSON.parse(JSON.stringify(this.songsIdArr)));
          }
        })
        .catch(error => {});
    },

    onEnd(e) {
      console.log("drag", this.songList);
      let updatedPriorityId = [];
      let priorityId = [];
      this.songList.forEach(item => {
        updatedPriorityId.push(item.id);
      });
      console.log("ids", updatedPriorityId);
      if(JSON.stringify(this.songsIdArr) != JSON.stringify(updatedPriorityId)) {
        let head2 = {
          headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
        };
       API.put("contest-music", { priorityIds: updatedPriorityId }, head2)
        .then(response => {
          console.log("update list", response.data);
          swal("Priority Changed!", "Priority changed successfully", "success");
          this.contestMusicList();
        })
        .catch(error => {});
       }
    },

    addSongView() {
      this.isUploadView = !this.isUploadView;
    },

    removeFile(index1) {
      this.albumSong = this.albumSong.filter((e, index) => index1 != index);
    },

    playSong(song,index) {
      console.log("aa",song,index);
      $("#video-model-view").modal('show');
      $("#video-model-view").modal({
        backdrop: 'static',
        keyboard: false
      })
      this.currentIndex = index;
      this.url = this.allpath.user_contest_music + song.fileName;
       this.fileTitle = song.title;
       this.fileType =  this.url.split('.').pop();
    },

    getPrevious() {
         this.currentIndex--; // the global variable
        this.show( this.currentIndex, this.songList);
        this.rotation = false;
    },
    getNext() {
         this.currentIndex++; // the global variable
        this.show( this.currentIndex, this.songList);
        this.rotation = false;
    },
    show(index, arr) {
       console.log("test previous next",index,arr);
       if(index == 0) {
         this.url = this.allpath.user_contest_music + arr[0].fileName;
         this.fileTitle = arr[0].title;
         this.fileType =  this.url.split('.').pop();
       } else if(index == 1) {
          this.url =  arr[1] ? this.allpath.user_contest_music + arr[1].fileName : '';
          this.fileTitle =  arr[1] ? arr[1].title : '';
          this.fileType =  this.url && arr[1] ? this.url.split('.').pop() : '';
       } else {
           this.url = arr[2] ? this.allpath.user_contest_music + arr[2].fileName : '';
           this.fileTitle = arr[2] ? arr[2].title : '';
           this.fileType =  this.url && arr[2] ? this.url.split('.').pop() : '';
       }
    },

    closeModel() {
       this.url ='';
      $("#video-model-view").modal('hide');
      this.rotation = false;
    },

    // EditSpecificSong(songObj) {
    //   console.log("edit",songObj);
    //   songObj.isEdit = false;
    // },

    deleteSpecificSong(songObj) {
      this.songId = songObj.id;
      $("#delete-song-modal").modal("show");
    },

    confirmDelete() {
      API.delete(`contest-music/${this.songId}`, {
        headers: {
          "x-access-token": JSON.parse(localStorage.getItem("Token"))
        }
      })
        .then(response => {
          if (response.data) {
            console.log("contest music delete", response.data);
            $("#delete-song-modal").modal("hide");
            swal("Deleted!", "Successfully Deleted", "success");
            this.contestMusicList();
          }
        })
        .catch(error => {});
    },

    onChange(e) {
      console.log("file type ==>",e.target.files[0]);
      this.fileSize = null;
      this.fileSize = e.target.files[0].size;
      if (
       (e.target.files[0].name).split('.').pop() === "mp3" ||
       (e.target.files[0].name).split('.').pop() === "mp4"
      ) {
        this.typeError = false;
        this.albumSong = [];
        this.albumSong.push(e.target.files[0]);
      } else {
        this.typeError = true;
      }
    },

    onDrop(e) {
      e.stopPropagation();
      e.preventDefault();
      var files = e.dataTransfer.files;
      console.log("drop file",files);
      this.fileSize = null;
      this.fileSize = files[0].size;
      if (
        (files[0].name).split('.').pop() === "mp3" || 
         (files[0].name).split('.').pop() === "mp4") {
        this.typeError = false;
        this.albumSong = [];
        this.albumSong.push(files[0]);
      } else {
        this.typeError = true;
      }
    },

    progressBar() {
      this.widthValue = 0;
      let intervalTime = this.fileSize/20000;
      console.log(this.fileSize,intervalTime);
      setInterval(() => {
        if(this.widthValue < 90) {
         this.widthValue =  this.widthValue +5;
         console.log( this.widthValue);
        }
      },intervalTime);
    },

    saveUploadedFile() {
      if (this.albumSong.length == 0) {
        this.isuploaded = true;
        return;
      } else {
        this.isuploaded = false;
      }
      if (!this.songTitle) {
        this.isSongTitle = true;
        window.scrollTo(0,0);
        return;
      }
      this.progressBar();
      this.isuploaded = false;
      this.isLoading = true;
      var formData = new FormData();
      formData.append("title", this.songTitle);
      this.albumSong.forEach(file => {
        formData.append("contestMusic", file, file.name);
      });
      if (this.songList.length == 0) {
        formData.append("priority", 1);
      } else if (this.songList.length == 1) {
        formData.append("priority", 2);
      } else {
        formData.append("priority", 3);
      }
      var head2 = {
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      };
      API.post("contest-music", formData, head2).then(response => {
        this.widthValue = 100;
        setTimeout(()=> {
          if (response.data) {
              this.isLoading = false;
              this.songTitle = "";
              this.albumSong = [];
              this.isUploadView = false;
              this.isSongTitle = false;
              this.contestMusicList();
              this.fileSize = null;
          }
        },1000);
      }).catch(error => {
        this.isLoading = false;
        console.log(error);
      });
    },
    cancel() {
      this.isUploadView = false;
      this.isSongTitle = false;
    }
  },

  created() {
    this.contestMusicList();
  },
  beforeRouteEnter(to, from, next){
    var config = { headers: { 'x-access-token':JSON.parse(localStorage.getItem("Token"))} }
    API.get("me", config ).then(response => {
      if (response.data) {
        console.log('@me',response.data);
        let user=response.data

        let paths=['/contest-music','/artistregisterstep1','/artistregisterstep2','/artistregisterstep3','/artistregisterstep4']
        
        if(to.path!=paths[user.profileSetup]){
          next({path: paths[user.profileSetup]});
        }
        else{
          next();
        }
        
      }
    });
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song-title {
  color: #514b91;
  font-weight: 700;
  font-size: 20px;
}
.upload-div {
  box-shadow: #d4d4d4 0px 1px 14px 0px;
}
.mb-30 {
  margin-bottom: 30px;
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-1.25em);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.details-animated {
  animation-name: fadeInDown;
  animation-duration: 0.5s;
}
.disabledBtn {
  cursor:not-allowed;
  background: #8b8aae;
  color: #fff;

}
.edit-icon {
    margin-right: 8px;
    font-size: 17px;
}

.input-field {
    border-radius: 5px;
    border: none;
    outline: none;
    padding: 5px 10px;
}
.border-cls{
  border-top: 2px solid #ccc;
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
.progress-bar {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 80%;
    height: 20px;
    width: 300px;
}
.progress-bar-details {
    height: 20px;
    border-radius: 5px;
    background: #d9d7ed;
    width: 100%;
    position: relative;
}
.fill-value {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background: #514e91;
    display: block;
    transition: width 500ms ease-in-out;
    line-height: 18px;
}




</style>