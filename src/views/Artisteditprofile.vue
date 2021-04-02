<template>
  <div>
    <AppHeader></AppHeader>

    <div class="profile-container">
      <div class="container-fluid">
        <div class="box-model-wraper edit">
          <loading
            :active.sync="isLoading"
            :can-cancel="false"
            loader="dots"
            :is-full-page="fullPage"
          ></loading>
          <div class="profile-dashboard-area edit">
            <div class="row justify-content-center">
              <div class="col-12 col-lg-10">
                <div class="profile-right-section-edit">
                  <div class="row justify-content-center">
                    <div class="peofile-picture-section edit">
                      <div id="scrolldiv" class="profile-picture edit">
                        <img
                          v-if="profilepictur == 1"
                          src="/assets/images/doublering.gif"
                          alt
                        />
                        <img
                          v-if="
                            $store.state.registerdata2.profilePicture == null ||
                            $store.state.registerdata2.profilePicture == ''
                          "
                          src="/assets/images/default_artist.png"
                          alt
                        />
                        <!-- <img v-if="$store.state.registerdata2.profilePicture != null || $store.state.registerdata2.profilePicture != '' " :src="profilepictur" alt=""> -->

                        <div
                          v-if="
                            $store.state.registerdata2.profilePicture != null ||
                            $store.state.registerdata2.profilePicture != ''
                          "
                          class="profile-image-view"
                          v-bind:style="{
                            'background-image': 'url(' + profilepictur + ')',
                          }"
                        >
                          <label class="picture-select" for="file"></label>
                          <input
                            type="file"
                            id="file"
                            @change="
                              filesChange(
                                $event.target.name,
                                $event.target.files
                              )
                            "
                            accept="image/*"
                            hidden
                          />
                        </div>
                      </div>
                      <!-- <div class="profile-picture edit" >
												
											</div>
                      <div class="profile-picture edit" >
												
                      </div>-->
                      <button
                        type="button"
                        class="profile-change-image profile-pic-upload-btn"
                        v-if="
                          !$store.state.registerdata2.profilePicture &&
                          profilepictur !== 1
                        "
                      >
                        <label class="file-upld">
                          <input
                            type="file"
                            @change="
                              filesChange(
                                $event.target.name,
                                $event.target.files
                              )
                            "
                            accept="image/*"
                          />
                          <i class="icon-photo-camera"></i>
                        </label>
                      </button>
                    </div>
                  </div>
                  <div class="edit-profile-devidor"></div>
                  <div class="row justify-content-center">
                    <div class="col-xl-8 col-lg-10 col-md-12 custom-form">
                      <div v-if="isError" class="error-messages">
                        {{ errormessage }}
                      </div>
                      <div v-if="isSuccess" class="success-messages">
                        Profile has been updated successfully!
                      </div>
                      <div class="row">
                        <div
                          class="form-group mb-3 col-lg-6 col-sm-6 edit-profile"
                        >
                          <label>Name</label>
                          <input
                            type="text"
                            class="form-control"
                            name="fullName"
                            v-validate="'required'"
                            v-model="rgisterdata.fullName"
                          />
                          <span
                            class="message"
                            v-show="errors.has('fullName')"
                            >{{ errors.first("fullName") }}</span
                          >
                        </div>
                        <div
                          class="form-group mb-3 col-lg-6 col-sm-6 edit-profile"
                        >
                          <label>Username</label>
                          <input
                            type="text"
                            name="username"
                            v-validate="'required'"
                            class="form-control"
                            v-model="rgisterdata.username"
                          />
                          <span
                            class="message"
                            v-show="errors.has('username')"
                            >{{ errors.first("username") }}</span
                          >
                        </div>
                      </div>
                      <div class="row">
                        <div
                          class="form-group mb-3 col-lg-6 col-sm-6 edit-profile"
                        >
                          <label>Phone Number</label>
                          <input
                            type="number"
                            onkeydown="javascript: return event.keyCode === 8 || event.keyCode === 46 ? true : !isNaN(Number(event.key))"
                            class="form-control"
                            name="Phone No"
                            v-validate="'required|max:10|min:10'"
                            v-model="rgisterdata.phoneNo"
                          />
                          <span
                            class="message"
                            v-show="errors.has('Phone No')"
                            >{{ errors.first("Phone No") }}</span
                          >
                        </div>
                        <div
                          class="form-group mb-3 col-lg-6 col-sm-6 edit-profile"
                        >
                          <label>Email</label>
                          <input
                            type="text"
                            v-model="rgisterdata.email"
                            name="email"
                            v-validate="'required|email'"
                            class="form-control"
                            readonly
                          />
                          <span class="message" v-show="errors.has('email')">{{
                            errors.first("email")
                          }}</span>
                        </div>
                      </div>
                      <div class="row">
                        <div
                          class="form-group mb-3 col-lg-6 col-sm-6 edit-profile"
                        >
                          <label>Are You Signed With A Major Label?</label>
                          <span class="form-control pen-radio">
                            <label for="option1" class="radio-item">
                              <span>Unsigned</span>
                              <input
                                type="radio"
                                id="option1"
                                name="options"
                                value="2"
                                v-model="rgisterdata.signedType"
                              />
                              <span class="radio">
                                <i class="icon-pen-line"></i>
                              </span>
                            </label>
                            <label for="option2" class="radio-item">
                              <input
                                type="radio"
                                id="option2"
                                name="options"
                                value="1"
                                v-model="rgisterdata.signedType"
                              />
                              <span class="radio">
                                <i class="icon-pen"></i>
                              </span>
                              <span>Signed</span>
                            </label>
                          </span>
                        </div>
                        <div
                          class="form-group mb-3 col-lg-6 col-sm-6 edit-profile"
                        >
                          <label>Preferred Channel</label>
                          <span class="w-100 d-flex">
                            <label class="normal-radio">
                              <input
                                type="radio"
                                value="1"
                                v-model="rgisterdata.prefferedChannel"
                                id="channel2"
                                name="channels"
                              />
                              <span> <i class="icon-youtube"></i>Youtube </span>
                            </label>
                            <label class="normal-radio">
                              <input
                                type="radio"
                                value="2"
                                v-model="rgisterdata.prefferedChannel"
                                id="channel2"
                                name="channels"
                              />
                              <span> <i class="icon-vimeo"></i>Vimeo </span>
                            </label>
                          </span>
                        </div>
                      </div>
                      <div class="row">
                        <div
                          class="form-group mb-3 col-lg-6 col-sm-6 edit-profile"
                        >
                          <label>Channel Name</label>
                          <input
                            type="text"
                            v-model="rgisterdata.channelName"
                            name="channelName"
                            v-validate="'required'"
                            class="form-control"
                          />
                          <span
                            class="message"
                            v-show="errors.has('channelName')"
                            >{{ errors.first("channelName") }}</span
                          >
                        </div>
                        <div
                          class="form-group mb-3 col-lg-6 col-sm-6 edit-profile"
                        >
                          <label>Hometown</label>

                          <vue-google-autocomplete
                            v-model="rgisterdata.address"
                            v-on:inputChange="checkingCity"
                            name="address"
                            id="map"
                            v-validate="'required'"
                            ref="address"
                            types="(cities)"
                            class="form-control"
                            :country="geocode"
                            placeholder="city"
                            v-on:placechanged="getAddressData"
                          ></vue-google-autocomplete>
                          <span class="message" v-show="!isCity">{{
                            "city fielad is reqired"
                          }}</span>
                        </div>
                      </div>
                      <!-- <div class="row">
												<div class="col-lg-7 col-sm-7">
													<div class="form-group mb-3 edit-profile">
														<label>Address</label>
														<input type="text" class="form-control">
													</div>
												</div>
												<div class="col-lg-5 col-sm-5">
													<div class="form-group mb-3 edit-profile">
														<label>Preferred Channel</label>
														<span class="w-100 d-flex">
															<label class="normal-radio">
																<input type="radio" value="channel-2" id="channel2" name="channels">
																<span><i class="icon-youtube"></i>Youtube</span>
															</label>
															<label class="normal-radio">
																<input type="radio" value="channel-2" id="channel2" name="channels">
																<span><i class="icon-vimeo"></i>Vimeo</span>
															</label>
														</span>
													</div>
												</div>
                      </div>-->
                      <div class="row">
                        <div class="col-lg-12 col-sm-12 d-flex">
                          <label class="swipe-button w-100">
                            Have You Played at Any Festivals Within The Last
                            Year?
                            <input
                              type="checkbox"
                              @change="setsendData"
                              value="1"
                              v-model="answer"
                            />
                            <span></span>
                          </label>
                        </div>
                        <div class="col-lg-12 col-sm-12 d-flex">
                          <label class="swipe-button w-100">
                            Are You Currently Touring?
                            <input
                              type="checkbox"
                              @change="setsendData"
                              value="2"
                              v-model="answer"
                            />
                            <span></span>
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-12 col-sm-12 d-flex">
                          <label class="swipe-button w-100">
                            Does Your Music Contain Explicit Content?
                            <input
                              type="checkbox"
                              @change="setsendData"
                              value="4"
                              v-model="answer"
                            />
                            <span></span>
                          </label>
                        </div>
                        <div class="col-lg-12 col-sm-12 d-flex">
                          <label class="swipe-button w-100">
                            Is Music is Your Primary Career ?
                            <input
                              type="checkbox"
                              value="3"
                              @change="setsendData"
                              v-model="answer"
                            />
                            <span></span>
                          </label>
                          <span
                            style="background-color: red"
                            v-show="isAgre1"
                            >{{ "This Field Is Required" }}</span
                          >
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-lg-12 col-sm-12 d-flex">
                          <label class="swipe-button w-100">
                            Do You Agree That Any Payments From MiV Are Only For
                            The Artist Or Band And Not 3rd Party’s?
                            <input
                              type="checkbox"
                              @change="setsendData"
                              value="5"
                              v-model="answer"
                            />
                            <span></span>
                          </label>
                        </div>
                        <div class="col-lg-12 col-sm-12 d-flex">
                          <label class="swipe-button w-100">
                            Are You The Originator And/Or Hold The Rights To Use
                            The Music You Intend To Upload On MiV?
                            <input
                              type="checkbox"
                              @change="setsendData"
                              value="6"
                              v-model="answer"
                            />
                            <span></span>
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-12 col-sm-12">
                          <label class="swipe-button w-100">
                            Is The Copyright Holder For Music You Intend To Use
                            On MiV Registered With BMI, ASCAP, SESAC, Merlin Or
                            Any Other Private Firms?
                            <input
                              type="checkbox"
                              @change="setsendData"
                              value="7"
                              v-model="answer"
                            />
                            <span></span>
                          </label>
                          <textarea
                            v-if="isTextarea"
                            v-model="rgisterdata.copyrightHolder"
                            v-validate="'required'"
                            name="copyrightHolder"
                            class="form-control-area mt-20"
                            style="display: block"
                          ></textarea>
                          <span
                            class="text-danger1"
                            v-show="errors.has('copyrightHolder')"
                            >{{ errors.first("copyrightHolder") }}</span
                          >
                        </div>
                        <div class="col-lg-12 col-sm-12 d-flex">
                          <label class="swipe-button w-100">
                            Do You Agree Not To Use Any Music Owned And Managed
                            By Any Of The Major Music Labels?
                            <input
                              type="checkbox"
                              @change="setsendData"
                              value="8"
                              v-model="answer"
                            />
                            <span></span>
                          </label>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-12 col-sm-12 d-flex">
                          <label class="swipe-button w-100">
                            Do You Agree To The User Agreement For Music is
                            Vivid (MiV) For Artists?
                            <input
                              type="checkbox"
                              value="9"
                              @change="setsendData"
                              v-model="answer"
                            />
                            <span></span>
                          </label>
                          <span style="background-color: red" v-show="isAgre">{{
                            "This Field Is Required"
                          }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="edit-profile-devidor mb-4"></div>
                  <!-- <div class="video-sec">
                    <div class="vid-row">
                      <div class="vid-colum">
                        <div class="vid-card">
                          <div
                            class="vid-card-head"
                            v-if="promosonallink!=null && promosonallink !=undefined"
                          >
                            <div class="row justify-content-between align-items-center">
                              <div class="col-auto">
                                <h3 class="vid-card-title">Promotional Video</h3>
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
                            v-if="promosonallink!=null && promosonallink !=undefined"
                            class="vid-card-body"
                          >
                            <video width="100%" controls :src="promosonallink" preload="auto"></video>
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
                            v-if="promosonallink!=null && promosonallink !=undefined"
                            class="vid-card-footer"
                          >
                            <div class="row justify-content-between">
                              <div class="col-auto">
                                <p>
                                  <i class="icon-heart"></i> 2550
                                </p>
                              </div>
                              <div class="col-auto">
                                <p>1452 Views</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="vid-colum">
                        <div class="vid-card">
                          <div
                            v-if="intoductionallink!=null && intoductionallink !=undefined"
                            class="vid-card-head"
                          >
                            <div class="row justify-content-between align-items-center">
                              <div class="col-auto">
                                <h3 class="vid-card-title">Introduction Video</h3>
                              </div>
                              <div class="col-auto">
                                <a
                                  href="javascript:;"
                                  class="vid-card-acc"
                                  data-toggle="modal"
                                  @click="showdetelemodal"
                                >
                                  <i class="icon-close"></i>
                                  <span>Delete</span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            v-if="intoductionallink!=null && intoductionallink !=undefined"
                            class="vid-card-body"
                          >
                            <video width="100%" controls :src="intoductionallink" preload="auto"></video>
                          </div>
                          <div v-else>
                            <vue-dropzone
                              :options="dropzoneOptions1"
                              v-on:vdropzone-sending="sendingEvent"
                              v-on:vdropzone-file-added="thumbnail"
                              v-on:vdropzone-success="success"
                              v-on:vdropzone-error="error"
                              v-on:vdropzone-max-files-reached="maxfilereach"
                              ref="myVueDropzone1"
                              id="customdropzone1"
                            ></vue-dropzone>
                          </div>
                          <div
                            v-if="intoductionallink!=null && intoductionallink !=undefined"
                            class="vid-card-footer"
                          >
                            <div class="row justify-content-between">
                              <div class="col-auto">
                                <p>
                                  <i class="icon-heart"></i> 2550
                                </p>
                              </div>
                              <div class="col-auto">
                                <p>1452 Views</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> -->
                  <div class="edit-profile-devidor mb-4"></div>
                  <div class="row justify-content-center">
                    <div class="col-auto">
                      <button
                        class="btn-signin d-inline-block"
                        @click="validateBeforeSubmit"
                        type="button"
                      >
                        Save
                      </button>
                      <router-link :to="`/profile`" class="btn-cancel"
                        >Cancel</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
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
</template>
<script>
var data1 = null;
import vue2Dropzone from "vue2-dropzone";
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
  name: "Artisteditprofile",
  props: {
    msg: String,
  },
  components: {
    vueDropzone: vue2Dropzone,
    Loading,
    AppHeader,
    AppFooter,
    VueGoogleAutocomplete,
  },
  data() {
    return {
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
        dictDefaultMessage: "Upload Introductional Video",
      },
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

  computed: {
    rgisterdata() {
      return this.$store.state.registerdata2;
    },
  },
  methods: {
    filesChange(name, files) {
      this.isLoading = true;
      this.profilepictur = 1;
      //  this.isLoading= true;
      var that = this;
      new ImageCompressor(files[0], {
        quality: 0.6,
        convertSize: 200000,
        success(result) {
          var formData = new FormData();
          formData.append("profilePicture", result, result.name);
          var head2 = {
            headers: {
              "x-access-token": JSON.parse(localStorage.getItem("Token")),
            },
          };

          API.post("update-profile-picture", formData, head2)
            .then((response) => {
              if (response.data) {
                that.isLoading = false;
                that.initializedata();
                that.$store.state.profilepicture =
                  ALL_PATH.profile_image_path +
                  response.data.data.profilePicture;
              }
            })
            .catch((error) => {});
        },
        error(e) {
          console.error(e.message);
        },
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
    },

    maxfilereach(file) {
      var errorDisplay = document.querySelectorAll("[data-dz-errormessage]");
      errorDisplay[errorDisplay.length - 1].innerHTML = "Max File Reached";
    },

    thumbnail: function (file, xhr, formData) {},

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
        var errorDisplay = document.querySelectorAll("[data-dz-errormessage]");
        errorDisplay[errorDisplay.length - 1].innerHTML = message;
      }

      this.isLoading = false;
      this.iserror = true;
      this.errmessage = message;
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
    checkingCity: function (e) {
      if (e.newVal == "") {
        this.isCity = false;
      } else {
        this.isCity = true;
      }
      this.$store.state.registerdata2.address = e.newVal;
    },
    setisAgre1(e) {
      this.firstIsagre = !this.firstIsagre;
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
    setisAgre(e) {
      this.secondIsagre = !this.secondIsagre;
    },
    setsendData(e) {
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
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.$store.state.registerdata2.answers = this.sendarray;
          if (this.$store.state.registerdata2.answers[2] == "0") {
            this.isAgre1 = true;
          } else if (this.$store.state.registerdata2.answers[8] == "0") {
            this.isAgre = true;
          } else {
            var head = {
              headers: {
                "x-access-token": JSON.parse(localStorage.getItem("Token")),
              },
            };

            API.post("update-profile", this.$store.state.registerdata2, head)
              .then((response) => {
                if (response.data) {
                  this.isAgre1 = false;
                  this.isAgre = false;
                  this.isError = false;
                  this.isSuccess = true;
                  this.errormessage = "";

                  HELPER.getUser("", (user) => {
                    localStorage.setItem("User", JSON.stringify(user));
                    var elmnt = document.getElementById("scrolldiv");
                    elmnt.scrollIntoView(true);
                  });
                }
              })
              .catch((error) => {
                this.isSuccess = false;
                this.isError = true;
                let data = error.response.data.errors;
                this.errormessage = data[0].msg;
              });
          }
        }
      });
    },
    getAddressData: function (addressData, placeResultData, id) {
      this.geocode.push(placeResultData.address_components[3].short_name);
      this.$store.state.registerdata2.address =
        placeResultData.formatted_address;
      this.$store.state.registerdata2.latitude = addressData.latitude;
      this.$store.state.registerdata2.longitude = addressData.longitude;
    },
  },
  created() {
    this.initializedata();
  },
  mounted() {
    this.$refs.address.update(JSON.parse(localStorage.getItem("User")).address);
  },
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
}
.picture-select {
  height: 165px;
  width: 165px;
  cursor: pointer;
}
.file-upld {
  padding: 0px 10px;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
