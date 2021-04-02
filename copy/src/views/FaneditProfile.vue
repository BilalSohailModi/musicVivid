<template>
  <div>
    <AppHeader></AppHeader>
    <div class="body-wraper no-footer">
      <div class="profile-container">
        <div class="container-fluid">
          <div class="box-model-wraper edit">
            <!-- <div class="profile-header">
						<div class="profile-details-section">
							<div class="peofile-picture-section edit">
								<div class="profile-picture edit">
									<img src="images/profile-picture.png" alt="" />
								</div>
								<button type="button" class="profile-change-image"><i class="icon-photo-camera"></i></button>
							</div>
						</div>
            </div>-->
            <div class="profile-dashboard-area edit">
              <div class="row justify-content-center">
                <div class="col-12 col-lg-10">
                  <div class="profile-right-section-edit">
                    <form>
                      <div class="row justify-content-center">
                        <div class="peofile-picture-section edit">
                          <div class="profile-picture edit">
                            <img v-if="profilepictur == 1 " src="/assets/images/doublering.gif" alt>
                            <img
                              v-if="user.profilePicture == null || user.profilePicture == '' "
                              src="/assets/images/default_artist.png"
                              alt >
                            <div
                              v-if="user.profilePicture != null || user.profilePicture != '' "
                              class="profile-image-view"
                              v-bind:style="{ 'background-image': 'url(' + profilepictur + ')' }">
                                
                                <label class="picture-select" for="file"></label>
                                  <input type="file" id="file"
                                    @change="filesChange($event.target.name, $event.target.files)" 
                                    accept="image/*" hidden>
                            </div>
                          </div>
                          <label class="profile-change-image" id="fan-dp-upload"  v-if="!user.profilePicture && profilepictur !== 1">
                            <i class="icon-photo-camera"></i>
                            <input
                              type="file"
                              id="fan-change-dp"
                              @change="filesChange($event.target.name, $event.target.files)"
                              accept="image/*"
                              hidden
                            >
                          </label>
                        </div>
                      </div>
                      <div class="edit-profile-devidor mb-1-mob"></div>
                      <div class="row justify-content-center">
                        <div class="col-xl-8 col-lg-10 col-md-12 custom-form">
                          <div v-if="isError" class="error-messages">{{errormessage}}</div>
                          <div
                            v-if="isSuccess"
                            class="success-messages"
                          >Profile has been updated successfully!</div>
                          <div class="row">
                            <div class="col-lg-6 col-sm-6">
                              <div class="form-group mb-3">
                                <label>Name</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  name="Name"
                                  v-validate="'required'"
                                  v-model="user.fullName"
                                >
                                <span
                                  class="text-danger1"
                                  v-show="errors.has('Name')"
                                >{{ errors.first('Name') }}</span>
                              </div>
                            </div>
                            <div class="col-lg-6 col-sm-6">
                              <div class="form-group mb-3">
                                <label>Username</label>
                                <input
                                  type="text"
                                  name="Username"
                                  v-validate="'required'"
                                  class="form-control"
                                  v-model="user.username"
                                >
                                <span
                                  class="text-danger1"
                                  v-show="errors.has('Username')"
                                >{{ errors.first('Username') }}</span>
                              </div>
                            </div>
                            <!-- </div> -->
                            <!-- <div class="row"> -->
                            <!-- <div class="col-lg-6 col-sm-6">
														<div class="form-group mb-3 edit-profile">
																<label>Phone Number</label>
													<input type="text" class="form-control"  name="PhoneNumber" v-validate="'required|max:10|min:10'" v-model="user.phoneNo">
                                                    <span class="text-danger1"  v-show="errors.has('PhoneNumber')">{{ errors.first('PhoneNumber') }}</span>
														</div>
                            </div>-->
                            <div class="col-lg-6 col-sm-6">
                              <div class="form-group mb-3 edit-profile">
                                <label>Email</label>
                                <input
                                  type="text"
                                  v-model="user.email"
                                  name="Email"
                                  v-validate="'required|email'"
                                  class="form-control"
                                  readonly
                                >
                                <span
                                  class="text-danger1"
                                  v-show="errors.has('Email')"
                                >{{ errors.first('Email') }}</span>
                              </div>
                            </div>
                            <!-- </div> -->
                            <!-- <div class="row"> -->
                            <div class="col-lg-6 col-sm-6">
                              <div class="form-group mb-3 edit-profile">
                                <label>Date of Birth</label>
                                <!-- <input type="text" class="form-control datepicker hasDatepicker" value="01/01/2019" id="dp1550734295418"> -->
                                <datetime
                                  v-model="user.dob"
                                  input-class="form-control datepicker hasDatepicker"
                                  name="dob"
                                  v-validate="'required'"
                                  data-vv-delay="1000"
                                  :max-datetime="maxDatetime"
                                  placeholder="Date Of Birth"
                                ></datetime>
                              </div>
                            </div>
                            <div class="col-lg-6 col-sm-6">
                              <div class="form-group mb-3 edit-profile">
                                <label>Gender</label>
                                <span class="w-100 d-flex">
                                  <label class="normal-radio fan-radio-gender">
                                    <input
                                      type="radio"
                                      v-model="user.gender"
                                      value="2"
                                      name="gender"
                                    >
                                    <span>Male</span>
                                  </label>
                                  <label class="normal-radio fan-radio-gender">
                                    <input
                                      type="radio"
                                      v-model="user.gender"
                                      value="3"
                                      name="gender"
                                    >
                                    <span>Female</span>
                                  </label>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="edit-profile-devidor mb-4 mb-1-mob"></div>
                      <div class="row justify-content-center">
                        <div class="col-auto">
                          <button
                            class="btn-signin d-inline-block"
                            @click="validateBeforeSubmit"
                            type="button"
                          >Save</button>
                          <router-link :to="`/fan-profile`" class="btn-cancel">Cancel</router-link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <!-- End -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
var data1 = null;
import vue2Dropzone from "vue2-dropzone";
import { Datetime } from "vue-datetime";
import Loading from "vue-loading-overlay";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import "vue-loading-overlay/dist/vue-loading.css";
import AppHeader from "@/components/AuthHeader.vue";
import AppFooter from "@/components/ComonFotter.vue";
import VueGoogleAutocomplete from "vue-google-autocomplete";
import ImageCompressor from "image-compressor.js";
import router from "../router";

import { API } from "@/api/api";
import { HELPER } from "@/Helper/Helper";
import { ALL_PATH } from "@/Constants/Constants";
export default {
  name: "FaneditProfile",
  props: {
    msg: String
  },
  components: {
    vueDropzone: vue2Dropzone,
    Loading,
    AppHeader,
    AppFooter,
    VueGoogleAutocomplete,
    Datetime
  },
  data() {
    return {
      maxDatetime: "",
      user: {},
      isLoading: false,
      geocode: [],
      isCity: true,
      fullPage: true,
      answer: [],
      isTextarea: false,
      isAgre: false,
      isAgre1: false,
      firstIsagre: false,
      secondIsagre: false,
      sendarray: ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
      isError: false,
      errormessage: "",
      isSuccess: false,
      promosonallink: null,
      intoductionallink: null,
      introthumpnail: "",
      promothumbnail: "",
      promotionalid: "",
      introductionalid: "",
      profilepictur: 1,
      dropzoneOptions1: {
        dictInvalidFileType: "Invalid file type",
        timeout: 300000,
        url: "https://miv.musicisvivid.com/api/setup-profile",
        dictResponseError: "400",
        thumbnailWidth: 150,
        maxFilesize: 20,
        maxFiles: 1,
        addRemoveLinks: true,
        accept: function(file, done) {
          var file = file;
          var fileReader = new FileReader();
          fileReader.onload = function() {
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
            var timeupdate = function() {
              if (snapImage()) {
                video.removeEventListener("timeupdate", timeupdate);
                video.pause();
              }
            };
            video.addEventListener("loadeddata", function() {
              if (snapImage()) {
                video.removeEventListener("timeupdate", timeupdate);
              }
            });
            var snapImage = function() {
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
          user_id: JSON.parse(localStorage.getItem("User")).id
        },
        method: "POST",
        acceptedFiles: "video/*",
        paramName: "introductionVideo",

        dictMaxFilesExceeded: "Max file size reached",
        dictFileTooBig: "File size is too big",
        dictDefaultMessage: "Upload Introductional Video"
      },
      dropzoneOptions: {
        dictInvalidFileType: "Invalid file type",
        dictDefaultMessage: "Upload Promotional Video",
        timeout: 300000,
        url: "https://miv.musicisvivid.com/api/setup-profile",
        dictResponseError: "400",
        thumbnailWidth: 150,
        maxFilesize: 20,
        maxFiles: 1,
        addRemoveLinks: true,
        accept: function(file, done) {
          var file = file;
          var fileReader = new FileReader();
          fileReader.onload = function() {
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
            var timeupdate = function() {
              if (snapImage()) {
                video.removeEventListener("timeupdate", timeupdate);
                video.pause();
              }
            };
            video.addEventListener("loadeddata", function() {
              if (snapImage()) {
                video.removeEventListener("timeupdate", timeupdate);
              }
            });
            var snapImage = function() {
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
          user_id: JSON.parse(localStorage.getItem("User")).id
        },
        method: "POST",
        acceptedFiles: "video/*",
        paramName: "promotionalVideo",

        dictMaxFilesExceeded: "Max file size reached",
        dictFileTooBig: "File size is too big"
      }
    };
  },

  computed: {
    rgisterdata() {
      return this.$store.state.registerdata2;
    }
  },
  methods: {
    filesChange(name, files) {
      console.log(files[0]);
      this.isLoading = true;
      this.profilepictur = 1;
      //  this.isLoading= true;
      var that = this;
      new ImageCompressor(files[0], {
        quality: 0.6,
        convertSize: 200000,
        success(result) {
          console.log(result);
          var formData = new FormData();
          //var file3 = new File([result], "user"+ new Date().getTime()+'.png', {type:" image/png ", lastModified: new Date().getTime()});
          // console.log(file3);
          formData.append("profilePicture", result, result.name);

          //formData.append('profilePicture', file3);
          // formData.append('file', result, result.name);

          // Send the compressed image file to server with XMLHttpRequest.

          var head2 = {
            headers: {
              "x-access-token": JSON.parse(localStorage.getItem("Token"))
            }
          };

          API.post("update-profile-picture", formData, head2)
            .then(response => {
              if (response.data) {
                console.log(response.data);
                that.isLoading = false;
                that.initializedata();

                // console.log(response.data.data. profilePicture);
                that.$store.state.profilepicture =
                  ALL_PATH.profile_image_path +
                  response.data.data.profilePicture;
              }
            })
            .catch(error => {});
        },
        error(e) {
          console.log(e.message);
        }
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
      if (!this.isintro && !this.ispromo) {
        window.location.href = "sucess";
      }
      //alert("Sucess");
    },
    maxfilereach(file) {
      var errorDisplay = document.querySelectorAll("[data-dz-errormessage]");
      errorDisplay[errorDisplay.length - 1].innerHTML = "Max File Reached";
    },
    thumbnail: function(file, xhr, formData) {
      // console.log(file[0]);
    },
    success(file, response) {
      this.isLoading = false;
      //this.initializedata();
      //   function getBase64(file) {
      //   return new Promise((resolve, reject) => {
      //     const reader = new FileReader();
      //     reader.readAsDataURL(file);
      //     reader.onload = () => resolve(reader.result);
      //     reader.onerror = error => reject(error);
      //   });
      // }
      // getBase64(file).then(
      //   data => {
      //        if(response.data.introductionVideoUploaded=="Y"){
      //        this.intoductionallink = data;

      //       }
      //         if(response.data.promotionalVideoUploaded=="Y"){
      //         this.promosonallink = data;

      //       }
      //   }
      // );

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
        console.log(xhr);
        var errorDisplay = document.querySelectorAll("[data-dz-errormessage]");
        errorDisplay[errorDisplay.length - 1].innerHTML = message;
      }

      // console.log(message);
      this.isLoading = false;
      this.iserror = true;
      this.errmessage = message;
      //   var message = response.message;
    },
    deletevideo(id, key) {
      this.isLoading = true;
      if (key == "intro") {
        $("#deleteModal")
          .removeClass("show")
          .hide();
      } else {
        $("#deleteModal1")
          .removeClass("show")
          .hide();
      }

      var head1 = {
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      };
      API.post("delete-file", { fileId: id }, head1)
        .then(response => {
          console.log(this.isLoading);

          this.isLoading = false;
          if (key == "intro") {
            this.intoductionallink = null;
          } else {
            this.promosonallink = null;
          }
        })
        .catch(error => {});
    },
    showdetelemodal() {
      // $("#deleteModal").modal("show");
      $("#deleteModal")
        .addClass("show")
        .show();
    },
    showdetelemodal1() {
      $("#deleteModal1")
        .addClass("show")
        .show();
    },
    closemodal() {
      $("#deleteModal")
        .removeClass("show")
        .hide();
    },
    closemodal1() {
      $("#deleteModal1")
        .removeClass("show")
        .hide();
    },
    checkingCity: function(e) {
      if (e.newVal == "") {
        this.isCity = false;
      } else {
        this.isCity = true;
      }
      this.$store.state.registerdata2.address = e.newVal;
    },
    setisAgre1(e) {
      console.log(e.target.value);
      this.firstIsagre = !this.firstIsagre;
    },
    initializedata() {
      var head = {
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      };
      API.get("edit-profile-details", head)
        .then(response => {
          if (response.data) {
            this.user = response.data.data.user;

            this.profilepictur =
              ALL_PATH.profile_image_path + this.user.profilePicture;
          }
        })
        .catch(error => {});
    },
    setisAgre(e) {
      //  console.log(e.target.value);
      this.secondIsagre = !this.secondIsagre;
    },
    setsendData(e) {
      // console.log(event.target.value);
      // console.log(event.target.checked);
      if (event.target.checked && event.target.value * 1 == 7) {
        this.isTextarea = true;
      }
      if (!event.target.checked && event.target.value * 1 == 7) {
        this.isTextarea = false;
      }

      if (event.target.checked) {
        this.sendarray[event.target.value * 1 - 1] = "1";
      } else {
        this.sendarray[event.target.value * 1 - 1] = "0";
      }
    },
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          var head = {
            headers: {
              "x-access-token": JSON.parse(localStorage.getItem("Token"))
            }
          };
          const { fullName, dob, email, phoneNo, gender, username } = this.user;
          let strdob = dob;
          let date = new Date(strdob);
          let year = date.getFullYear();
          let month = date.getMonth() + 1;
          let dt = date.getDate();

          if (dt < 10) {
            dt = "0" + dt;
          }
          if (month < 10) {
            month = "0" + month;
          }
          strdob = dt + "/" + month + "/" + year;

          let registarData = {
            fullName,
            dob: strdob,
            email,
            gender,
            userType: "3",
            username: username,
            phoneNo: phoneNo * 1
          };

          API.post("update-profile", registarData, head)
            .then(response => {
              if (response.data) {
                window.scrollTo(0, 0);
                this.isError = false;
                this.isSuccess = true;
                this.errormessage = "";
                //  console.log(response.data);

                HELPER.getUser("", user => {
                  localStorage.setItem("User", JSON.stringify(user));
                  //    var elmnt = document.getElementById("scrolldiv");
                  //     elmnt.scrollIntoView(true);
                });
              }
            })
            .catch(error => {
              //	  console.log(error);
              this.isSuccess = false;
              this.isError = true;
              let data = error.response.data.errors;
              this.errormessage = data[0].msg;
            });
        }
      });
    },
    getAddressData: function(addressData, placeResultData, id) {
      //  console.log(addressData);
      // console.log(placeResultData);
      this.geocode.push(placeResultData.address_components[3].short_name);
      this.$store.state.registerdata2.address =
        placeResultData.formatted_address;
      this.$store.state.registerdata2.latitude = addressData.latitude;
      this.$store.state.registerdata2.longitude = addressData.longitude;
      //console.log(this.$store.state.registerdata2);
    }
  },
  created() {
    this.initializedata();
  },
  mounted() {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var day = today.getDate();
    var pastdate = new Date(year - 18, month, day);
    this.maxDatetime = pastdate.toISOString();
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile-image-view {
  height: 165px;
  width: 165px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #fff;
}
.picture-select {
  height: 165px;
  width: 165px;
  cursor: pointer;
}
</style>


