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
									<img src="images/default_artist.png" alt="" />
								</div>
								<button type="button" class="profile-change-image"><i class="icon-photo-camera"></i></button>
							</div>
						</div>
            </div>-->
            <div class="profile-dashboard-area edit">
              <div class="row justify-content-center">
                <div class="col-12 col-lg-10">
                  <div class="profile-right-section-edit">
                    <loading
                      :active.sync="isLoading"
                      :can-cancel="false"
                      loader="dots"
                      :is-full-page="fullPage"
                    ></loading>
                    <div class="alb-page-body">
                      <div class="row">
                        <div class="album-cover-block">
                          <span class="album-cover">
                            <img
                              v-if="!iscoverUploaded"
                              src="/assets/images/deefault_album.png"
                              class="w-100"
                              alt
                            >
                            <img v-else :src="coverpicurl" class="w-100" alt>
                          </span>
                        </div>
                        <div class="album-cover-upload">
                          <div class="cover-upload-block">
                            <label for="cover-upload">Album Cover</label>
                            <label class="cover-uploader">
                              <input type="file" id="cover-upload" @change="coverUpload">
                              <i class="icon-photo-camera"></i> Upload Album Cover
                            </label>
                          </div>
                          <div class="title-section">
                            <div class="row">
                              <div class="col-md-6 alb-title-sec">
                                <label for="alb-title" class="alb-title">Album Title</label>
                                <input
                                  type="text"
                                  v-model="albumName"
                                  name="Album Name"
                                  class="form-control"
                                  id="alb-title"
                                >
                                <span
                                  class="text-danger1"
                                  v-show="errors.has('Album Name')"
                                >{{ errors.first('Album Name') }}</span>
                                <span v-if="iserror" class="text-danger1">{{errormessage}}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="edit-profile-devidor mb-3"></div>

                      <div class="inner-contest-item">
                        <h2 class="header-text">Select Event Gener</h2>
                        <div class="contest-item text-center">
                          <label>
                            <input type="radio" name="contest_type" checked>
                            <span class="contest-type-check" @click="genreIdData(1)">
                              <img src="/assets/images/alternative.png" alt="icon">
                              Alternative
                            </span>
                          </label>
                          <label>
                            <input type="radio" name="contest_type">
                            <span class="contest-type-check" @click="genreIdData(2)">
                              <img src="/assets/images/country_music.png" alt="icon">
                              Country
                            </span>
                          </label>

                          <label>
                            <input type="radio" name="contest_type">
                            <span class="contest-type-check" @click="genreIdData(3)">
                              <img src="/assets/images/edm.png" alt="icon">
                              EDM
                            </span>
                          </label>

                          <label>
                            <input type="radio" name="contest_type">
                            <span class="contest-type-check" @click="genreIdData(4)">
                              <img src="/assets/images/hiphop.png" alt="icon">
                              Hiphop-RAP
                            </span>
                          </label>
                        </div>
                        <div class="contest-item text-center relativediv">
                          <label>
                            <input type="radio" name="contest_type">
                            <span class="contest-type-check" @click="genreIdData(5)">
                              <img src="/assets/images/latin.png" alt="icon">
                              World
                            </span>
                          </label>

                          <label>
                            <input type="radio" name="contest_type">
                            <span class="contest-type-check" @click="genreIdData(6)">
                              <img src="/assets/images/pop.png" alt="icon">
                              Pop
                            </span>
                          </label>
                          <label
                            class=""
                          >
                            <input type="radio" name="contest_type">
                            <span class="contest-type-check" @click="genreIdData(7)">
                              <img src="/assets/images/metal.png" alt="icon">
                              Craft
                            </span>
                          </label>
                          <label>
                            <input type="radio" name="contest_type">
                            <span class="contest-type-check" @click="genreIdData(8)">
                              <img src="/assets/images/rock.png" alt="icon">
                              Rock
                            </span>
                          </label>
                        </div>
                      </div>
                        <div class="edit-profile-devidor mb-3"></div>

                      <div class="song-upload-section-alb">
                        <label for class="title">Upload Songs</label>
                        <div class="row justify-content-center">
                          <div class="col-md-8">
                            <div class="error-messages" v-if="typeError">Please Select A Mp3 File</div>
                            <form method="post">
                              <label class="drag-drop" @dragover.prevent @drop="onDrop">
                                <input
                                  type="file"
                                  @click="$event.target.value=null"
                                  multiple
                                  @change="onChange"
                                >
                                <span class="content">
                                  <strong>Drag &amp; Drop</strong>To Upload songs
                                </span>
                                <span class="upload-here">or , Click to Browse Songs</span>
                              </label>
                            </form>
                          </div>
                          <div class="col-md-8">
                            <label
                              v-for="(file,index ) in albumSong"
                              :key="index"
                              class="upload-progress"
                            >
                              <span class="music-icon">
                                <img src="/assets/images/music-file.png" width="30" alt>
                              </span>
                              <span class="name-progress-size">
                                <span class="title">{{file.name}}</span>
                                <span class="title">{{file.size | mb}}</span>
                                <!-- <span class="progress-bar">
                                  <span class="fill" style="width: 60%;"></span>
                                </span>-->
                              </span>
                              <span class="cancel-upload">
                                <a
                                  href="javascript:;"
                                  @click="removeFile(index)"
                                  class="remove-upload"
                                >
                                  <i class="icon-close"></i>
                                </a>
                              </span>
                            </label>
                          </div>
                          <div class="col-md-8"></div>
                          <div class="col-md-8"></div>
                        </div>
                      </div>
                    </div>
                    <!-- <div class="edit-profile-devidor mb-3"></div>
                    <div class="song-upload-section-alb">
                      <label for class="title">Share With</label>
                      <div class="row justify-content-center">
                        <div class="col-md-8 d-flex justify-content-center">
                          <ul class="music-share">
                            <li>
                              <label>
                                <input type="checkbox">
                                <i class="icon-facebook facebook"></i>
                              </label>
                            </li>
                            <li>
                              <label>
                                <input type="checkbox">
                                <i class="icon-instagram instagram"></i>
                              </label>
                            </li>
                            <li>
                              <label>
                                <input type="checkbox">
                                <i class="icon-twitter twitter"></i>
                              </label>
                            </li>
                            <li>
                              <label>
                                <input type="checkbox">
                                <i class="icon-pinterest pinterest"></i>
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>-->
                    <div class="edit-profile-devidor mb-5 mt-5"></div>
                    <div class="row justify-content-center">
                      <div class="col-auto">
                        <button
                          class="btn-signin d-inline-block"
                          :disabled="isDisable"
                          @click="createAlbum"
                          type="button"
                        >Save</button>

                        <router-link :to="`/profile`" class="btn-cancel">Cancel</router-link>
                      </div>
                    </div>
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
import router from "../router";
import { API } from "@/api/api";
import { HELPER } from "@/Helper/Helper";
import { ALL_PATH } from "@/Constants/Constants";
import vue2Dropzone from "vue2-dropzone";
import Loading from "vue-loading-overlay";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import "vue-loading-overlay/dist/vue-loading.css";
import AppHeader from "@/components/AuthHeader.vue";
import AppFooter from "@/components/ComonFotter.vue";
export default {
  name: "Addalbum",
  props: {
    msg: String
  },
  components: {
    vueDropzone: vue2Dropzone,
    Loading,
    AppHeader,
    AppFooter
  },
  computed:{
    craftDropdownVisible:{
      get: function () {
        return this.$refs.craftDropdown.style.visibility!=="hidden" ||
          this.$refs.craftDropdown.style.visibility!=="collapse";
      },
      set: function (newValue) {
        this.$refs.craftDropdown.style.visibility= newValue? "visible" : "hidden"
      }
    },
  },
  watch:{
    'genreId':function(newValue){
      newValue=String(newValue)
      let labelClass= this.$refs.craftDropdown.parentElement.classList
      if(newValue!==null && newValue[0]==='7'){
        labelClass.add('subgenre-selected')
        this.craftDropdownVisible=false;
      }
      else{
        labelClass.remove('subgenre-selected')
      }
      
    }
  },
  data() {
    return {
      craftLabel:"Craft",
      craftSubGenreList: JSON.parse(`[
        {"code":"71","lable":"R&B-Rhythm and Blues"},
        {"code":"72","lable":"Soul"},
        {"code":"73","lable":"Jazz"},
        {"code":"74","lable":"Folk"},
        {"code":"75","lable":"Gospel"},
        {"code":"76","lable":"ALL Other"}]`),
      albumId: null,
      isDisable: false,
      fullPage: true,
      iserror: false,
      errorMessage: "",
      coverImage: 1,
      albumName: "",
      parentAlbum: 0,
      isLoading: false,
      typeError: false,
      iscoverUploaded: false,
      coverpicurl: "",
      genreId: 1,
      albumSong: [],
      coverFile: null,
      dropzoneOptions: {
        dictInvalidFileType: "Invalid file type",
        timeout: 300000,
        url: "https://miv.musicisvivid.com/api/update-album",
        dictResponseError: "400",
        thumbnailWidth: 150,
        maxFilesize: 20,
        maxFiles: 5,
        addRemoveLinks: true,
        accept: function(file, done) {
          done();
        },
        params: {
          user_id: JSON.parse(localStorage.getItem("User")).id
        },
        method: "POST",
        acceptedFiles: "mp3/*",
        paramName: "promotionalVideo",

        dictMaxFilesExceeded: "Max file size reached",
        dictFileTooBig: "File size is too big"
      }
    };
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
    mouseHoverEvent(e){
      this.craftDropdownVisible= e.type==="mouseover"
    },
    removeFile(index1) {
      this.albumSong = this.albumSong.filter((e, index) => index1 != index);
    },
    coverUpload(e) {
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
    onChange(e) {
      Array.from(e.target.files).forEach(file => {
        if (file.name.split(".").pop() === "mp3") {
          this.albumSong.push(file);
        } else {
          this.typeError = true;
        }
      });
    },
    onDrop(e) {
      e.stopPropagation();
      e.preventDefault();
      var files = e.dataTransfer.files;

      Array.from(files).forEach(file => {
        if (file.name.split(".").pop() === "mp3") {
          this.albumSong.push(file);
        } else {
          this.typeError = true;
        }
      });
    },
    genreIdData(id) {
      this.genreId = id;
    },

    createAlbum() {
      this.isDisable = true;
      var formData = new FormData();
      formData.append("parentAlbum", 0);
      formData.append("albumName", this.albumName);
      formData.append("genreId", this.genreId);
    
      if (this.coverFile) {
        formData.append("albumImage", this.coverFile);
      }
      var head2 = {
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      };
      
      API.post("create-album", formData, head2).then(response => {
        if (response.data) {
          this.iserror = false;
          this.errorMessage = "";
          this.albumId = response.data.albumObj.id;
          if (response.data.albumObj.coverImage) {
            this.coverImage =
              ALL_PATH.album_pictures + response.data.albumObj.coverImage;
          } else {
            this.coverImage = null;
          }
          
          if (this.albumSong.length > 0) {
            var formData1 = new FormData();
            this.albumSong.forEach(file => {
              formData1.append("albumSong", file, file.name);
            });
            this.isLoading = true;

            formData1.append("albumId", this.albumId);
            
            API.post("update-album-songs", formData1, head2).then(response => {
              if (response.data) {
                this.isLoading = false;
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
          } else {
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
        }
      }).catch(error => {
        this.isDisable = false;
        this.iserror = true;
        let data = error.response.data.errors;
        
        this.errormessage = data[0].msg;
      });
    },
    
    sendingEvent(file, xhr, formData) {},

    maxfilereach(file) {
      var errorDisplay = document.querySelectorAll("[data-dz-errormessage]");
      errorDisplay[errorDisplay.length - 1].innerHTML = "Max File Reached";
    },

    success(file, response) {},

    error(file, message, xhr) {},

    inprogress(file, progress, bytesSent) {}
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-text {
      font-size: 22px;
    text-align: center;
    padding: 12px 0px;
    color: #514c93;
    font-weight: 700;
}
label.subgenre-selected > span.contest-type-check{
  background-color: #fff;
  border-color: #514c93;
}
</style>