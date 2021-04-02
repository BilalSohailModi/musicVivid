<template>
  <div>
    <AppHeader></AppHeader>
    <div class="body-wraper" style="padding-bottom:0">
      <loading :active.sync="isLoading" :can-cancel="false" loader="dots" :is-full-page="fullPage"></loading>
      <div class="profile-container">
        <div class="container-fluid">
          <div class="box-model-wraper">
            <div class="seacrhsubdiv playlistpage">
              <div class="seacrhsubdivtitle">
                <i class="icon-music-player"></i> Playlists
              </div>
            </div>
            <!-- Profile dashboard area -->
            <div class="profile-dashboard-area">
              <!-- end tab -->
              <!-- top Section -->

              <!-- Album section -->
              <div class="album-wraper">
                <div class="tab-content">
                  <div id="playlist" class="tab-pane fade in active show">
                    <ul class="album-ul">
                      <li>
                        <a
                          href="javascript:;"
                          class="pop-up-btn"
                          data-toggle="modal"
                          data-target="#create-play-list-Modal"
                        >
                          <img src="assets/images/add.png">
                        </a>
                      </li>
                      <li v-for="(track,index) in myPlayList" :key="index">
                        <router-link :to="{ name: 'FanAlbumview', params: { id: track.id }}">
                          <img
                            v-if="track.coverImage=='' || track.coverImage==null"
                            src="assets/images/deefault_album.png"
                          >
                          <img v-else :src="allpath.playist_pictures+track.coverImage">
                        </router-link>
                      </li>
                      <infinite-loading @infinite="infiniteHandler">
                        <div slot="spinner">
                          <img src="/assets/images/loader.gif">
                        </div>
                        <div slot="no-more">{{""}}</div>
                        <div slot="no-results">{{""}}</div>
                      </infinite-loading>
                    </ul>
                  </div>
                  <div id="new_releases" class="tab-pane fade">
                    <ul class="fan-new-releases-album-ul">
                      <li>
                        <a href="javascript:;">
                          <img src="assets/images/new-release-1.png">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;">
                          <img src="assets/images/new-release-2.png">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;">
                          <img src="assets/images/new-release-3.png">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;">
                          <img src="assets/images/new-release-4.png">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;">
                          <img src="assets/images/new-release-5.png">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;">
                          <img src="assets/images/new-release-6.png">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;">
                          <img src="assets/images/album-cover-photo-2.png">
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;">
                          <img src="assets/images/album-cover-photo-3.png">
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- End tab content -->
            </div>
          </div>
          <!-- End -->
        </div>
      </div>

      <!-- The Modal -->
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
                  <!-- <div v-if="iscoverupload" class="error-messages">Please Select A File</div> -->
                  <div v-if="istiltleGiven" class="error-messages">Please Give A Title</div>
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
  </div>
  <!-- <AppFooter></AppFooter> -->
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
  name: "Playlist",
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
      // iscoverupload: false,
      istiltleGiven: false,
      coverpictur: 1,
      fullPage: true,
      coverpicurl: "",
      title: "",
      myPlayList: [],
      coverFile: "",
      allpath: ALL_PATH,
      page: 1,
      title1: ""
    };
  },
  methods: {
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
        page: this.page,
        perPage: 10
      };
      API.get("playlist", {
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
        // this.iscoverupload = true;
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
              this.initializepalylist();
              // this.iscoverupload = false;
              this.istiltleGiven = false;
              $("#create-play-list-Modal").modal("hide");
              $("#create-playlistsuccess-Modal").modal("show");
              this.coverpicurl = "";
              this.coverFile = "";
              this.title1 = this.title;
              this.title = "";
              //    this.coverpictur= ALL_PATH.cover_pictures+ response.data.data.coverPicture;
            }
          })
          .catch(error => {
            this.isLoading = false;
          });
      }
    },
    infiniteHandler($state) {
      this.page = this.page + 1;
      var senddata2 = {
        page: this.page,
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
    }
  },
  created() {
    this.initializepalylist();
    HELPER.getUser("profile", data => {
      localStorage.setItem("User", JSON.stringify(data.user));
      this.user = JSON.parse(localStorage.getItem("User"));
      if (this.user.profilePicture != null) {
        this.profilemage =
          ALL_PATH.profile_image_path + this.user.profilePicture;
      }

      if (this.user.coverPicture != null) {
        this.coverpictur = ALL_PATH.cover_pictures + this.user.coverPicture;
      } else {
        this.coverpictur = null;
      }
      //	this.myALbums = data.albums;
    });

    //    API.get("fan-profile", { headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }})
    //           .then(response => {
    //             if (response.data) {

    //             }
    //           })
    //           .catch(error => {

    //           });
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
