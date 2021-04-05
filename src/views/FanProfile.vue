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
                      v-if="profilemage == null || user.profilePicture == ''"
                      src="/assets/images/default_artist.png"
                      alt
                    />
                    <!-- <img :src="profilemage" alt> -->
                    <div
                      v-if="profilemage"
                      class="profile-image-view"
                      v-bind:style="{
                        'background-image': 'url(' + profilemage + ')',
                      }"
                    ></div>
                  </div>
                  <router-link :to="'/artist-edit'">
                    <a href="javascript:void(0)" class="profile-edit-btn"
                      >Edit</a
                    >
                  </router-link>
                </div>
                <h2 class="user-name">{{ user.fullName }}</h2>
                <h3 class="user-address">{{ user.address }}</h3>
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
                    <div class="top-section display-flex">
                      <div class="heading-div">
                        <h1>My Music</h1>
                      </div>
                      <div class="btn-side">
                        <button
                          @click="showPromotionalVideo()"
                          type="button"
                          class="dash-board-btn"
                        >
                          Add About Me Video
                        </button>
                        <button
                          @click="showContestVideo()"
                          type="button"
                          class="dash-board-btn"
                        >
                          Add Contest Video
                        </button>
                        <router-link :to="'/addalbum'">
                          <button type="button" class="dash-board-btn">
                            Add Album
                          </button>
                        </router-link>

                        <router-link :to="'/addsong'">
                          <button type="button" class="dash-board-btn">
                            Add Song
                          </button>
                        </router-link>
                      </div>
                    </div>

                    <!-- Album section -->
                    <div class="album-wraper">
                      <div v-if="myALbums.length == 0">
                        No Music Album Available please Add one
                      </div>
                      <ul class="album-ul">
                        <li v-for="(album, index) in myALbums" :key="index">
                          <router-link
                            :to="{
                              name: 'ArtistAlbumdetails',
                              params: { id: album.id },
                            }"
                          >
                            <img
                              v-if="album.coverImage == null"
                              src="/assets/images/deefault_album.png"
                            />
                            <img
                              v-else
                              :src="allpath.album_pictures + album.coverImage"
                            />
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

                    <div class="video-sec" v-show="showPromotionalVideoBoolean">
                      <div class="vid-row">
                        <div class="vid-colum">
                          <div class="vid-card">
                            <div
                              class="vid-card-head"
                              v-if="
                                promosonallink != null &&
                                promosonallink != undefined
                              "
                            >
                              <div
                                class="row justify-content-between align-items-center"
                              >
                                <div class="col-auto">
                                  <h3 class="vid-card-title">ABOUT ME VIDEO</h3>
                                </div>
                                <div class="col-auto">
                                  <a
                                    href="javascript:;"
                                    class="vid-card-acc"
                                    @click="showdetelemodal1"
                                  >
                                    <i class="icon-close"></i>
                                    <span>Delete</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div
                              v-if="
                                promosonallink != null &&
                                promosonallink != undefined
                              "
                              class="vid-card-body"
                            >
                              <video
                                width="100%"
                                controls
                                :src="promosonallink"
                                preload="auto"
                              ></video>
                            </div>
                            <div v-else class="vid-card-body">
                              <vue-dropzone
                                :options="dropzoneOptions"
                                v-on:vdropzone-sending="sendingEvent"
                                v-on:vdropzone-file-added="thumbnail"
                                v-on:vdropzone-success="success"
                                v-on:vdropzone-error="error"
                                v-on:vdropzone-max-files-reached="maxfilereach"
                                ref="myVueDropzone"
                                id="customdropzone"
                              ></vue-dropzone>
                            </div>
                            <div
                              v-if="
                                promosonallink != null &&
                                promosonallink != undefined
                              "
                              class="vid-card-footer"
                            >
                              <div class="row justify-content-between">
                                <div class="col-auto">
                                  <p><i class="icon-heart"></i> 2550</p>
                                </div>
                                <div class="col-auto">
                                  <p>1452 Views</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-show="showContestVideoBoolean">
                <ContestMusic></ContestMusic>
              </div>
            </div>
            <!-- End -->

            <div class="modal fade" id="deleteModal">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <!-- Modal body -->
                  <div class="modal-body">
                    <img src="/assets/images/bin.png" />
                    <p>
                      Are you sure
                      <br />you want to delete this video?
                    </p>
                  </div>

                  <!-- Modal footer -->
                  <div class="modal-footer justify-content-center">
                    <button
                      type="button"
                      @click="deletevideo(introductionalid, 'intro')"
                      class="btn modal-delete-btn"
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      @click="closemodal"
                      class="btn modal-cancel-btn ml-0"
                      data-dismiss="modal"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal fade" id="deleteModal1">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <!-- Modal body -->
                  <div class="modal-body">
                    <img src="/assets/images/bin.png" />
                    <p>
                      Are you sure
                      <br />you want to delete this video?
                    </p>
                  </div>

                  <!-- Modal footer -->
                  <div class="modal-footer justify-content-center">
                    <button
                      type="button"
                      @click="deletevideo(promotionalid, 'prormo')"
                      class="btn modal-delete-btn"
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      @click="closemodal1"
                      class="btn modal-cancel-btn ml-0"
                      data-dismiss="modal"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- image resize modal -->
    <!-- <div class="modal contest-modal" id="image-resize_modal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <div class="modal-inner-body">
              <p>Are you sure you want to cancel this subscription?</p>
              <div class="text-center">
                <button class="modal-learn-more" @click="cancelSub()">Confirm</button>
                <button class="modal-cancel" data-dismiss="modal">Not Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

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
                <button class="btn btn-dark" @click="closeModal()">
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
var data1 = null;
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import "vue-loading-overlay/dist/vue-loading.css";
import VueGoogleAutocomplete from "vue-google-autocomplete";
import ImageCompressor from "image-compressor.js";
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
// import cropperjs for cover image //
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";

import ContestMusic from "./contestMusic.vue";

export default {
  name: "FanProfile",
  props: {
    msg: String,
  },
  components: {
    AppHeader,
    AppFooter,
    ContestMusic,
    LeftManu,
    Loading,
    InfiniteLoading,
    VueCropper,
    vueDropzone: vue2Dropzone,
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
      imgSrc: "",
      cropImg: "",
      fileName: "",

      isError: false,
      errormessage: "",
      profilepictur: 1,
      promotionalid: "",
      introductionalid: "",
      answer: [],
      isTextarea: false,
      promosonallink: null,
      intoductionallink: null,
      sendarray: ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
      showPromotionalVideoBoolean: false,
      showContestVideoBoolean: false,
      dropzoneOptions: {
        dictInvalidFileType: "Invalid file type",
        dictDefaultMessage: "Upload Promotional Video",
        timeout: 1800000,
        url: "https://miv.musicisvivid.com/api/setup-profile",
        dictResponseError: "400",
        thumbnailWidth: 150,
        maxFilesize: 600,
        maxFiles: 1,
        addRemoveLinks: true,
        accept: function (file, done) {
          var file = file;
          var fileReader = new FileReader();
          fileReader.onload = function () {
            var blob = new Blob([fileReader.result], { type: file.type });
            var url = URL.createObjectURL(blob);
            var video = document.createElement("video");

            function dataURItoBlob(dataURI) {
              var byteString;
              if (dataURI.split(",")[0].indexOf("base64") >= 0)
                byteString = atob(dataURI.split(",")[1]);
              else byteString = unescape(dataURI.split(",")[1]);
              var mimeString = dataURI
                .split(",")[0]
                .split(":")[1]
                .split(";")[0];
              var ia = new Uint8Array(byteString.length);
              for (var i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
              }
              var blb1 = new Blob([ia], { type: " image/png " });
              var file1 = new File(
                [blb1],
                "thumbnail" + new Date().getTime() + ".png",
                { type: " image/png ", lastModified: new Date().getTime() }
              );
              return file1;
            }
            var timeupdate = function () {
              if (snapImage()) {
                video.removeEventListener("timeupdate", timeupdate);
                video.pause();
              }
            };
            video.addEventListener("loadeddata", function () {
              if (snapImage()) {
                video.removeEventListener("timeupdate", timeupdate);
              }
            });
            var snapImage = function () {
              var canvas = document.createElement("canvas");
              canvas.width = video.videoWidth;
              canvas.height = video.videoHeight;
              canvas
                .getContext("2d")
                .drawImage(video, 0, 0, canvas.width, canvas.height);
              var image = canvas.toDataURL();
              var success = image.length > 100000;
              if (success) {
                var img = document.createElement("img");
                data1 = dataURItoBlob(image);
                done();
              }
              return success;
            };
            video.addEventListener("timeupdate", timeupdate);
            video.preload = "metadata";
            video.src = url;
            // Load video in Safari / IE11
            video.muted = true;
            video.playsInline = true;
            video.play();
          };
          fileReader.readAsArrayBuffer(file);
        },
        params: {
          user_id: JSON.parse(localStorage.getItem("User")).id,
        },
        method: "POST",
        acceptedFiles: "video/*",
        paramName: "promotionalVideo",

        dictMaxFilesExceeded: "Max file size reached",
        dictFileTooBig: "File size is too big",
      },
    };
  },
  methods: {
    showPromotionalVideo() {
      console.log("here");
      this.showPromotionalVideoBoolean ^= true;
      this.showContestVideoBoolean = false;
    },
    showContestVideo() {
      console.log("here");
      this.showContestVideoBoolean ^= true;
      this.showPromotionalVideoBoolean = false;
    },
    sendingEvent(file, xhr, formData) {
      this.isLoading = true;
      formData.append("musicImage", data1);
    },
    thumbnail: function (file, xhr, formData) {},

    success(file, response) {
      this.isLoading = false;

      // Read in the image file as a data URL.

      if (response.data.introductionVideoUploaded == "Y") {
        this.introvideo = false;
      }
      if (response.data.promotionalVideoUploaded == "Y") {
        this.promovideo = false;
      }
      this.initializedata();
    },

    error(file, message, xhr) {
      var message = message.errors; // modify it to your error message
      if (xhr != undefined) {
        var errorDisplay = document.querySelectorAll("[data-dz-errormessage]");
        errorDisplay[errorDisplay.length - 1].innerHTML = message;
      }

      this.isLoading = false;
      this.iserror = true;
      this.errmessage = message;
    },

    maxfilereach(file) {
      var errorDisplay = document.querySelectorAll("[data-dz-errormessage]");
      errorDisplay[errorDisplay.length - 1].innerHTML = "Max File Reached";
    },
    deletevideo(id, key) {
      this.isLoading = true;
      if (key == "intro") {
        $("#deleteModal").removeClass("show").hide();
      } else {
        $("#deleteModal1").removeClass("show").hide();
      }
      var head1 = {
        headers: {
          "x-access-token": JSON.parse(localStorage.getItem("Token")),
        },
      };

      API.post("delete-file", { fileId: id }, head1)
        .then((response) => {
          this.isLoading = false;
          if (key == "intro") {
            this.intoductionallink = null;
          } else {
            this.promosonallink = null;
          }
        })
        .catch((error) => {});
    },
    showdetelemodal() {
      $("#deleteModal").addClass("show").show();
    },
    showdetelemodal1() {
      $("#deleteModal1").addClass("show").show();
    },
    closemodal() {
      $("#deleteModal").removeClass("show").hide();
    },
    closemodal1() {
      $("#deleteModal1").removeClass("show").hide();
    },
    initializedata() {
      var head = {
        headers: {
          "x-access-token": JSON.parse(localStorage.getItem("Token")),
        },
      };
      API.get("edit-profile-details", head)
        .then((response) => {
          if (response.data) {
            this.user = response.data.data.user;
            this.$store.state.registerdata2 = this.user;
            $("#deleteModal").removeClass("show").hide();
            $("#deleteModal1").removeClass("show").hide();

            this.profilepictur =
              ALL_PATH.profile_image_path +
              this.$store.state.registerdata2.profilePicture;
            let pid = response.data.data.files.filter(
              (e) => e.subCategoryType == 1
            );

            this.promotionalid = pid.length > 0 ? pid[0].id : null;
            this.promosonallink =
              pid.length > 0 ? ALL_PATH.video_path + pid[0].fileName : null;

            let eid = response.data.data.files.filter(
              (e) => e.subCategoryType == 2
            );

            this.introductionalid = eid.length > 0 ? eid[0].id : null;
            this.intoductionallink =
              eid.length > 0 ? ALL_PATH.video_path + eid[0].fileName : null;

            //  this.promotionalid=  response.data.data.files[0].subCategoryType == 1 ? response.data.data.files[0].id:null;

            //  this.introductionalid = response.data.data.files[1].subCategoryType == 2 ? response.data.data.files[1].id:null;
            //  this.introthumpnail = ALL_PATH.video_path+response.data.data.files[0].musicImage;
            // this.promothumbnail = ALL_PATH.video_path+response.data.data.files[1].musicImage;

            //  localStorage.setItem("User",response.data.user);

            if (response.data.data.answers[6].answer == "1") {
              this.isTextarea = true;
            }

            this.answer = response.data.data.answers.map((e, index) => {
              if (e.answer == "1") {
                return String(index + 1);
              } else {
                return null;
              }
            });

            this.sendarray = response.data.data.answers.map((e, index) => {
              if (e.answer == "1") {
                return "1";
              } else {
                return "0";
              }
            });
          }
        })
        .catch((error) => {});
    },
    resetImageUploader() {
      // clear the value of the file input
      this.$refs.imageUploader.value = "";
    },
    infiniteHandler($state) {
      this.page = this.page + 1;
      var senddata2 = {
        albums_of_user: JSON.parse(localStorage.getItem("User")).id,
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
            //this.isLoading = false;
            //window.location.href = "/profile";
          }
        })
        .catch((error) => {});
    },

    // upDatecover(filename, file) {
    //   console.log("image upload",file.target.files[0]);
    //   this.isLoading = true;
    //   //  this.isLoading= true;
    //   var formData = new FormData();
    //   formData.append("coverPicture", file.target.files[0]);
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
      console.log(file);
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
              console.log(response);
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
    closeModal() {
      $("#image_resize_modal").modal("hide");
    },
  },
  created() {
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
    var senddata1 = {
      albums_of_user: JSON.parse(localStorage.getItem("User")).id,
      page: this.page,
      per_page: 10,
    };
    API.get("album-list", {
      params: senddata1,
      headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) },
    })
      .then((response) => {
        if (response.data) {
          this.myALbums = response.data.albumlist;
          //this.isLoading = false;
          //window.location.href = "/profile";
        }
      })
      .catch((error) => {});

    this.initializedata();
  },
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
