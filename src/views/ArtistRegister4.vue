<template>
  <div class="homegb">
    <AppHeader></AppHeader>
    <div class="artist-sign-up-container">
      <div class="container">
        <loading
          :active.sync="isLoading"
          :can-cancel="false"
          loader="dots"
          :is-full-page="fullPage"
        ></loading>
        <div class="row">
          <div class="artist-sign-up-wraper medium">
            <form action="signup_success_msg.html">
              <div class="ar-signup-heading-container" id="scrolldiv">
                <h1>Complete Your Profile</h1>
                <span v-if="ispromo" class="error-messages"
                  >Please insert promotional video</span
                >
                <span v-if="isintro" class="error-messages"
                  >Please insert introductional video</span
                >
              </div>
              <vue-dropzone
                :options="dropzoneOptions"
                :useCustomSlot="true"
                v-on:vdropzone-sending="sendingEvent"
                v-on:vdropzone-file-added="thumbnail"
                v-on:vdropzone-success="success"
                v-on:vdropzone-error="error"
                v-on:vdropzone-max-files-reached="maxfilereach"
                ref="myVueDropzone"
                id="customdropzone"
              >
                <div class="video-upload-container">
                  <ul class="video-upload-wraper">
                    <li class="video-upload-box"></li>
                    <li class="video-upload-btn-container">
                      <h1 class="video-upload-heading">Drag an Video Here</h1>

                      <p class="video-upload-btn-para">
                        Or
                        <button type="button" class="video-upload-btn btn-join">
                          Upload an Video
                        </button>
                        <input type="file" hidden class="video-upload-input" />
                      </p>
                      <p class="video-format-para">
                        Video Format : 3gp, Mp4, AVI
                      </p>
                    </li>
                  </ul>
                  <div class="video-upload-caption">
                    Please put together a music video preview. This video is a
                    maximum of 3 minutes
                  </div>
                </div>
              </vue-dropzone>
              <!-- <div class="video-upload-container">
                           
                          <ul class="video-upload-wraper">
                            <li class="video-upload-box"></li>
                            <li class="video-upload-btn-container">
                           
                                  <h1 class="video-upload-heading">Drag an Video Here</h1>
                              
                                    <p class="video-upload-btn-para">Or <button type="button"  @click="triggerBrowse" class="video-upload-btn btn-join">Upload an Video</button><input type="file" hidden="" class="video-upload-input"></p>
                                    <p class="video-format-para">Video Format : 3gp, Mp4, AVI</p>
                                    
                            </li>
                          </ul>
                          <div class="video-upload-caption">
                              Please put together a music video preview. This video is a maximum of 3 minutes 
                              and will be featured in as a promotional video as well as digital events.
                          </div>
              </div>-->
              <!-- <vue-dropzone
                :options="dropzoneOptions1"
                :useCustomSlot="true"
                v-on:vdropzone-sending="sendingEvent"
                v-on:vdropzone-file-added="thumbnail"
                v-on:vdropzone-success="success"
                v-on:vdropzone-error="error"
                v-on:vdropzone-max-files-reached="maxfilereach"
                ref="myVueDropzone1"
                id="customdropzone1"
              >
                <div class="video-upload-container">
                  <ul class="video-upload-wraper">
                    <li class="video-upload-box"></li>
                    <li class="video-upload-btn-container">
                      <h1 class="video-upload-heading">Drag an Video Here</h1>
                      <p class="video-upload-btn-para">
                        Or
                        <button type="button" class="video-upload-btn btn-join">
                          Upload an Video
                        </button>
                        <input type="file" hidden class="video-upload-input" />
                      </p>
                      <p class="video-format-para">
                        Video Format : 3gp, Mp4, AVI
                      </p>
                    </li>
                  </ul>
                  <div class="video-upload-caption">
                    Please put together a maximum 30 second introduction video
                    about your story. Who you are, where you’re from, How you
                    become interested in music, etc. Make it unique.
                  </div>
                </div>
              </vue-dropzone> -->
              <div class="row">
                <div class="col">
                  <button
                    class="btn-signin success_msg_btn max-width-385"
                    @click="sucesspage"
                    type="button"
                    :disabled="disableSubmit"
                  >
                    Complete
                  </button>
                </div>
                <div class="col">
                  <button
                    class="btn-signin success_msg_btn max-width-385"
                    @click="skippage"
                    type="button"
                    :disabled="disableSubmit"
                  >
                    Skip
                  </button>
                </div>
              </div>
            </form>
            <ul class="step-count-ul">
              <li class="active"></li>
              <li class="active"></li>
              <li class="active"></li>
              <li class="active"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
var data1 = null;
import vue2Dropzone from "vue2-dropzone";
import Loading from "vue-loading-overlay";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import "vue-loading-overlay/dist/vue-loading.css";
import AppHeader from "@/components/AuthHeader.vue";
import AppFooter from "@/components/ComonFotter.vue";
import router from "../router";
import { API } from "../api/api";
import { HELPER } from "../Helper/Helper";
export default {
  name: "ArtistRegister4",
  components: {
    vueDropzone: vue2Dropzone,
    Loading,
    AppHeader,
    AppFooter,
  },
  props: {
    msg: String,
  },

  data() {
    return {
      disableSubmit: false,
      errmessage: "",
      isSecond: false,
      ispromo: false,
      isintro: false,
      iserror: false,
      isLoading: false,
      fullPage: true,
      introvideo: true,
      promovideo: true,
      dropzoneOptions1: {
        dictInvalidFileType: "Invalid file type",
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
        paramName: "introductionVideo",

        dictMaxFilesExceeded: "Max file size reached",
        dictFileTooBig: "File size is too big",
      },
      dropzoneOptions: {
        dictInvalidFileType: "Invalid file type",
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
    skippage() {
      let config = {
        headers: {
          "x-access-token": JSON.parse(localStorage.getItem("Token")),
        },
      };
      this.disableSubmit = true;
      API.put("skip-profile", null, config)
        .then((response) => {
          this.disableSubmit = false;
          router.push({
            path: "/contest-music",
          });
        })
        .catch((error) => {
          this.disableSubmit = false;
          console.error(error);
        });
    },

    sendingEvent(file, xhr, formData) {
      this.isLoading = true;
      formData.append("musicImage", data1);
    },

    sucesspage() {
      if (this.introvideo) {
        this.isintro = true;
      } else {
        this.isintro = false;
      }
      if (this.promovideo) {
        this.ispromo = true;
      } else {
        this.ispromo = false;
      }
      document.getElementById("scrolldiv").scrollIntoView(true);
      if (!this.isintro && !this.ispromo) {
        router.push({
          path: "/contest-music",
        });
      }
    },
    maxfilereach(file) {
      var errorDisplay = document.querySelectorAll("[data-dz-errormessage]");
      errorDisplay[errorDisplay.length - 1].innerHTML = "Max File Reached";
    },
    thumbnail: function (file, xhr, formData) {},

    success(file, response) {
      this.isLoading = false;
      if (response.data.introductionVideoUploaded == "Y") {
        this.introvideo = false;
      }
      if (response.data.promotionalVideoUploaded == "Y") {
        this.promovideo = false;
      }
    },
    error(file, message, xhr) {
      var message = message.errors; // modify it to your error message
      if (xhr != undefined) {
        var errorDisplay = document.querySelectorAll("[data-dz-errormessage]");
        errorDisplay[errorDisplay.length - 1].innerHTML =
          "File Already Uploaded";
      }
      this.isLoading = false;
      this.iserror = true;
      this.errmessage = message;
    },
  },
  created() {},
  mounted() {},
  beforeRouteEnter(to, from, next) {
    var config = {
      headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) },
    };
    API.get("me", config)
      .then((response) => {
        if (response.data) {
          let user = response.data;
          if (user.profileSetup == 0) {
            next({ path: "/contest-music" });
          } else {
            next();
          }
        }
      })
      .catch((err) => {
        console.error("Error: ", err);
      });
  },
};
</script>
<style></style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
