<template>
  <div>
    <AppHeader></AppHeader>
    <div class="body-wraper" style="padding-bottom: 0">
      <loading
        :active.sync="isLoading"
        :can-cancel="false"
        loader="dots"
        :is-full-page="fullPage"
      ></loading>
      <div class="profile-container">
        <div class="container-fluid">
          <div class="box-model-wraper" style="background-color: white">
            <div class="profile-header">
              <div class="profile-banner">
                <!-- <img
                  v-if="coverpictur == 1"
                  src="/assets/images/Profile-banner2.png"
                  alt
                /> -->
                <img
                  v-if="coverpictur == null"
                  src="/assets/images/Profile-banner.png"
                  alt
                />
                <img v-else :src="coverpictur" alt />

                <div class="profile-banner-uploader">
                  <label class="" v-if="coverpictur == null">
                    <input
                      type="file"
                      ref="imageUploader"
                      @click="resetImageUploader"
                      @change="upDatecover($event)"
                    />
                    <i class="icon-photo-camera"></i>
                  </label>
                </div>
                <div v-if="coverpictur">
                  <label for="file" class="upload-select"></label>
                  <input
                    type="file"
                    id="file"
                    ref="imageUploader"
                    @click="resetImageUploader"
                    @change="upDatecover($event)"
                    accept="image/*"
                    hidden
                  />
                </div>
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
                      v-if="
                        user.profilePicture == '' || user.profilePicture == null
                      "
                      src="/assets/images/default_artist.png"
                      alt
                    />
                    <!-- <img v-else :src="allpath.profile_image_path+user.profilePicture" alt> -->
                    <div
                      v-if="user.profilePicture"
                      class="profile-image-view"
                      v-bind:style="{
                        'background-image':
                          'url(' +
                          allpath.profile_image_path +
                          user.profilePicture +
                          ')',
                      }"
                    ></div>
                  </div>

                  <router-link :to="'/fan-edit'">
                    <a href="javascript:void(0)" class="profile-edit-btn"
                      >Edit</a
                    >
                  </router-link>
                </div>
                <h2 class="user-name">{{ user.fullName }}</h2>
                <!-- <h3 class="user-address">Los Angeles, California</h3> -->
                <!--<button class="fan-play-btn">Play</button>-->
              </div>
            </div>
            <!-- Profile dashboard area -->
            <div class="profile-dashboard-area" style="background-color: white">
              <div class="row justify-content-center">
                <div class="col-12 col-lg-10 custom-column-right">
                  <div class="profile-right-section">
                    <!-- end tab -->
                    <!-- top Section -->
                    <div class="top-section display-flex">
                      <div class="tab-nav-section">
                        <ul class="nav nav-tabs fan-profile-tab">
                          <li class="active">
                            <a
                              data-toggle="pill"
                              href="#playlist"
                              class="active show"
                              >My Playlist</a
                            >
                          </li>
                          <li>
                            <a data-toggle="pill" href="#new_releases" class
                              >New Releases</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
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
                                <img src="assets/images/add.png" />
                              </a>
                            </li>
                            <li v-if="isPaidUser && user.userType == '3'">
                              <router-link
                                to="/autoplay-album-list"
                                class="pop-up-btn"
                              >
                                <img src="assets/images/autoplay.png" />
                              </router-link>
                            </li>
                            <li
                              v-for="(track, index) in myPlayList"
                              :key="index"
                            >
                              <router-link
                                :to="{
                                  name: 'FanAlbumview',
                                  params: { id: track.id },
                                }"
                              >
                                <img
                                  v-if="
                                    track.coverImage == '' ||
                                    track.coverImage == null
                                  "
                                  src="assets/images/album-cover-photo.png"
                                />
                                <img
                                  v-else
                                  :src="
                                    allpath.playist_pictures + track.coverImage
                                  "
                                />
                              </router-link>
                            </li>
                            <infinite-loading @infinite="infiniteHandler">
                              <div slot="spinner">
                                <img src="/assets/images/loader.gif" />
                              </div>
                              <div slot="no-more">{{ "" }}</div>
                              <div slot="no-results">{{ "" }}</div>
                            </infinite-loading>
                          </ul>
                        </div>
                        <!-- new release album -->
                        <div id="new_releases" class="tab-pane fade">
                          <ul class="fan-new-releases-album-ul">
                            <li
                              v-for="(eachAlbum, index) in newReleaseAlbumArr"
                              :key="index"
                            >
                              <router-link
                                :to="{
                                  name: 'ArtistAlbumdetails',
                                  params: { id: eachAlbum.id },
                                }"
                              >
                                <img
                                  v-if="
                                    eachAlbum.coverImage == '' ||
                                    eachAlbum.coverImage == null
                                  "
                                  src="assets/images/deefault_album.png"
                                />
                                <img
                                  v-else
                                  :src="
                                    allpath.album_pictures +
                                    eachAlbum.coverImage
                                  "
                                />
                              </router-link>
                            </li>
                            <!-- <li><a href="javascript:;"><img src="assets/images/new-release-2.png"></a></li>
													<li><a href="javascript:;"><img src="assets/images/new-release-3.png"></a></li>
													<li><a href="javascript:;"><img src="assets/images/new-release-4.png"></a></li>
													<li><a href="javascript:;"><img src="assets/images/new-release-5.png"></a></li>
													<li><a href="javascript:;"><img src="assets/images/new-release-6.png"></a></li>
													<li><a href="javascript:;"><img src="assets/images/album-cover-photo-2.png"></a></li>
                            <li><a href="javascript:;"><img src="assets/images/album-cover-photo-3.png"></a></li>-->

                            <infinite-loading @infinite="infiniteHandler2">
                              <div slot="spinner">
                                <img src="/assets/images/loader.gif" />
                              </div>
                              <div slot="no-more">{{ "" }}</div>
                              <div slot="no-results">{{ "" }}</div>
                            </infinite-loading>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <!-- End tab content -->
                  </div>
                </div>
              </div>
            </div>
            <!-- End -->
          </div>
        </div>

        <!-- The Modal -->
        <div
          class="modal custom-pop-up fade show"
          id="create-play-list-Modal"
          style="display: none; padding-right: 17px"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <!-- Modal Header -->
              <div class="modal-header">
                <h4 class="modal-title">Create Album</h4>
                <button
                  type="button"
                  @click="closeModal"
                  class="close"
                  data-dismiss="modal"
                >
                  ×
                </button>
              </div>

              <!-- Modal body -->
              <div class="modal-body">
                <form>
                  <div class="pop-up-drag-n-drop">
                    <!-- <div v-if="iscoverupload" class="error-messages">Please Select A File</div> -->
                    <div v-if="istiltleGiven" class="error-messages">
                      Please Give A Title
                    </div>
                    <label @dragover.prevent @drop="onDrop">
                      <img
                        v-if="coverpicurl == ''"
                        src="/assets/images/upload-pop-img.png"
                        alt="image"
                      />
                      <img v-else :src="coverpicurl" alt="image" />
                      <p class="drg-n-drp-para">Drag and Drop File to Upload</p>
                      <p class="browse">
                        or
                        <span>browse</span> to choose image
                      </p>
                      <input @change="coverUpload" type="file" />
                    </label>
                  </div>
                  <div class="form-group pop-up-form-group">
                    <label>Playlist Title</label>
                    <input
                      type="text"
                      v-model="title"
                      class="form-control"
                      placeholder="Eg. Best of Justin Bieber"
                    />
                  </div>
                  <p class="text-center">
                    <button
                      @click="createPlayLiast"
                      type="button"
                      class="fan-play-btn mt-0"
                    >
                      Save
                    </button>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal custom-pop-up fade show"
          id="create-playlistsuccess-Modal"
          style="padding-right: 17px; display: none"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <!-- Modal body -->
              <div class="modal-body success-modal">
                <div class="success-img-sec text-center">
                  <img
                    src="/assets/images/success-bg.png"
                    alt="image"
                    class="img-fluid"
                  />
                  <div class="text-center success-img">
                    <img src="/assets/images/success-img.png" alt />
                  </div>
                </div>
                <h3 class="success-heading">Playlist Created Successfully</h3>
                <p class="text-center">‘{{ title1 }}’ Successfully Created</p>
                <p class="text-center">
                  <a
                    href="javascript:void(0)"
                    @click="closemodal1"
                    class="fan-play-btn"
                    >Continue</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- image resize modal -->
    <div
      class="modal contest-modal"
      id="image_resize_modal"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <!-- Modal body -->
          <div class="modal-body">
            <div class="modal-inner-body">
              <div>
                <div>
                  <vue-cropper
                    ref="cropper"
                    :guides="true"
                    :view-mode="2"
                    drag-mode="move"
                    :auto-crop-area="0.3"
                    :background="true"
                    :rotatable="true"
                    :cropBoxResizable="false"
                    :src="imgSrc"
                    alt="Source Image"
                  >
                  </vue-cropper>
                </div>
              </div>
              <div class="text-center p-3">
                <button
                  class="btn btn-success"
                  @click="updateImage()"
                  v-if="imgSrc != ''"
                >
                  Save
                </button>
                <button
                  class="btn btn-info"
                  @click="rotate()"
                  v-if="imgSrc != ''"
                >
                  Rotate
                </button>
                <button class="btn btn-dark" @click="closeCropper()">
                  Cancel
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

// import cropperjs for cover image //
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";

export default {
  name: "ArtistProfile",
  props: {
    msg: String,
  },
  components: {
    AppHeader,
    AppFooter,
    LeftManu,
    Loading,
    InfiniteLoading,
    VueCropper,
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
      newReleaseAlbumArr: [],
      coverFile: "",
      allpath: ALL_PATH,
      page: 1,
      page1: 1,
      title1: "",
      imgSrc: "",
      cropImg: "",
      fileName: "",
      isPaidUser: false,
    };
  },
  methods: {
    resetImageUploader() {
      // clear the value of the file input
      this.$refs.imageUploader.value = "";
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
          reader.onerror = (error) => reject(error);
        });
      }
      getBase64(file1).then((data) => {
        this.iscoverUploaded = true;
        this.coverpicurl = data;
      });
      this.coverFile = e.dataTransfer.files[0];
    },
    initializepalylist() {
      var senddata1 = {
        page: this.page,
        perPage: 10,
      };
      API.get("playlist", {
        headers: {
          "x-access-token": JSON.parse(localStorage.getItem("Token")),
        },
      })
        .then((response) => {
          if (response.data) {
            this.myPlayList = response.data.data;
            //this.isLoading = false;
            //window.location.href = "/profile";
          }
        })
        .catch((error) => {});
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
      let file1 = e.target.files[0];
      function getBase64(file1) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file1);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        });
      }
      getBase64(file1).then((data) => {
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
            "x-access-token": JSON.parse(localStorage.getItem("Token")),
          },
        };
        API.post("playlist", formData, head3)
          .then((response) => {
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
          .catch((error) => {
            this.isLoading = false;
          });
      }
    },
    infiniteHandler($state) {
      this.page = this.page + 1;
      var senddata2 = {
        page: this.page,
        perPage: 10,
      };
      API.get("playlist", {
        params: senddata2,
        headers: {
          "x-access-token": JSON.parse(localStorage.getItem("Token")),
        },
      })
        .then((response) => {
          if (response.data) {
            response.data.data.map((e) => {
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
        .catch((error) => {});
    },
    // upDatecover(filename, file) {
    //   this.isLoading = true;
    //   //  this.isLoading= true;
    //   var formData = new FormData();
    //   formData.append("coverPicture", file[0]);
    //   let head2 = {
    //     headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
    //   };
    //   API.post("update-cover-picture", formData, head2)
    //     .then(response => {
    //       if (response.data) {
    //         this.coverpictur =
    //           ALL_PATH.cover_pictures + response.data.data.coverPicture;
    //         this.isLoading = false;
    //       }
    //     })
    //     .catch(error => {
    //       this.isLoading = false;
    //     });
    // },

    upDatecover(e) {
      const file = e.target.files[0];
      if (e.target.files[0] && e.target.files[0].name) {
        this.fileName = e.target.files[0].name;
      }
      if (!file.type.includes("image/")) {
        alert("Please select an image file");
        return;
      }
      $("#image_resize_modal").modal("show");
      $("#image_resize_modal").modal({
        backdrop: "static",
        keyboard: false,
      });
      if (typeof FileReader === "function") {
        const reader = new FileReader();
        reader.onload = (event) => {
          this.imgSrc = event.target.result;
          // rebuild cropperjs with the updated source
          this.$refs.cropper.replace(event.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Sorry, FileReader API not supported");
      }
    },

    updateImage() {
      // get image data for post processing, e.g. upload or setting image src
      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
      const base64 = this.cropImg;
      $("#image_resize_modal").modal("hide");
      this.isLoading = true;
      fetch(base64)
        .then((res) => res.blob())
        .then((blob) => {
          const formData = new FormData();
          const file = new File([blob], this.fileName);
          formData.append("coverPicture", file);
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
        });
    },

    rotate() {
      this.$refs.cropper.rotate(90);
    },

    closeCropper() {
      $("#image_resize_modal").modal("hide");
    },

    infiniteHandler2($state) {
      this.page1 = this.page1 + 1;
      var senddata3 = {
        page: this.page1,
        perPage: 10,
      };
      API.get("new-releases", {
        params: senddata3,
        headers: {
          "x-access-token": JSON.parse(localStorage.getItem("Token")),
        },
      })
        .then((response) => {
          if (response.data) {
            response.data.data.map((e) => {
              this.newReleaseAlbumArr.push(e);
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
        .catch((error) => {});
    },

    getNewReleaseAlbumList() {
      var sendData3 = {
        page: 1,
        perPage: 10,
      };
      API.get("new-releases", {
        params: sendData3,
        headers: {
          "x-access-token": JSON.parse(localStorage.getItem("Token")),
        },
      })
        .then((response) => {
          if (response.data) {
            this.newReleaseAlbumArr = response.data.data;
          }
        })
        .catch((error) => {});
    },
    checkUserIsPaid() {
      let _loggedUser = JSON.parse(localStorage.getItem("User"));
      if (_loggedUser != null || _loggedUser != undefined) {
        if (_loggedUser.PaymentRecord.isActive) {
          this.isPaidUser = true;
        }
      }
    },
  },

  created() {
    this.checkUserIsPaid();
    this.getNewReleaseAlbumList();
    this.initializepalylist();
    HELPER.getUser("profile", (data) => {
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
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile-image-view {
  height: 130px;
  width: 130px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #fff;
}
.upload-select {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  cursor: pointer;
}
</style>
