<template>
  <div>
    <AppHeader></AppHeader>
    <div class="body-wraper no-footer">
      <div class="profile-container">
        <div class="container-fluid">
          <div class="box-model-wraper edit">
            <div class="profile-dashboard-area edit">
              <div class="row justify-content-center">
                <div class="col-12 col-lg-10">
                  <div class="profile-right-section-edit">
                    <h2 class="alb-page-heading">Upload Song</h2>
                    <div class="alb-page-body">
                      <div class="row">
                        <loading
                          :active.sync="isLoading"
                          :can-cancel="false"
                          loader="dots"
                          :is-full-page="fullPage"
                        ></loading>
                        <div class="album-cover-block">
                          <span class="album-cover">
                            <img
                              v-if="!iscoverUploaded"
                              src="/assets/images/default_songs.png"
                              class="w-100"
                              alt
                            >
                            <img v-else :src="coverpicurl" class="w-100" alt>
                          </span>
                        </div>
                        <div class="album-cover-upload">
                          <div class="cover-upload-block">
                            <label for="cover-upload">Image of Song</label>
                            <label class="cover-uploader">
                              <input type="file" id="cover-upload" @change="coverUpload">
                              <i class="icon-photo-camera"></i> Upload Song Image
                            </label>
                          </div>
                          <div class="title-section">
                            <label for="alb-title" class="alb-title">Song Title</label>
                            <input
                              type="text"
                              v-model="songTitle"
                              v-validate="'required'"
                              name="Song Title"
                              class="form-control"
                              id="alb-title"
                            >
                            <span
                              class="text-danger1"
                              v-show="errors.has('Song Title')"
                            >{{ errors.first('Song Title') }}</span>
                            <span v-if="iserror" class="text-danger1">{{errormessage}}</span>
                          </div>
                        </div>
                      </div>
                      <div class="edit-profile-devidor mb-3"></div>
                      <div class="song-upload-section-alb">
                        <label for class="title">Upload Song</label>

                        <div class="row justify-content-center relativediv">
                          <div class="col-md-8">
                            <div class="text-danger2" v-if="typeError">Please Slect A Mp3 File</div>
                            <div class="text-danger2" v-if="isuploaded">Please Slect A Song</div>
                            <form method="post">
                              <label class="drag-drop" @dragover.prevent @drop="onDrop">
                                <span class="content">
                                  <strong>Drag &amp; Drop</strong>To Upload song
                                </span>
                                <span class="upload-here">or , Click to Browse Song</span>
                                <input
                                  type="file"
                                  accept=".mp3"
                                  @click="$event.target.value=null"
                                  @change="onChange"
                                >
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
                                <span class="progress-bar">
                                  <!-- <span class="fill" style="width: 60%;"></span> -->
                                </span>
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
                      <div class="edit-profile-devidor mb-3"></div>
                      <div class="song-upload-section-alb">
                        <div class="relativediv">
                          <label for class="title">Attach to Album</label>
                          <span class="text-danger2" v-if="isSlect">Please Slect A Album</span>
                        </div>
                        <div class="row justify-content-center">
                          <div class="col-md-8">
                            <ul class="album-list">
                              <li v-for="(album,index) in AlbumList" :key="index">
                                <label>
                                  <input
                                    type="radio"
                                    @change="assigntosong(album.id)"
                                    name="albums"
                                  >
                                  <span>
                                    <img
                                      v-if="album.coverImage==null"
                                      src="assets/images/album-cover-photo-1.png"
                                      alt
                                    >
                                    <img v-else :src="allpath.album_pictures+album.coverImage">
                                  </span>
                                </label>
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
                        </div>
                      </div>
                    </div>
                    <!-- <div class="edit-profile-devidor mb-3"></div>
									<div class="song-upload-section-alb">
										<label class="title">Share With</label>
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
import { API } from "@/api/api";
import router from "../router";
import { HELPER } from "@/Helper/Helper";
import { ALL_PATH } from "@/Constants/Constants";
import InfiniteLoading from "vue-infinite-loading";
import vue2Dropzone from "vue2-dropzone";
import Loading from "vue-loading-overlay";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import "vue-loading-overlay/dist/vue-loading.css";
import AppHeader from "@/components/AuthHeader.vue";
import AppFooter from "@/components/ComonFotter.vue";
export default {
  name: "adddsong",
  props: {
    msg: String
  },
  components: {
    vueDropzone: vue2Dropzone,
    Loading,
    AppHeader,
    AppFooter,
    InfiniteLoading
  },
  data() {
    return {
      allpath: ALL_PATH,
      albumId: null,
      fullPage: true,
      iserror: false,
      errorMessage: "",
      fileId: null,
      isSlect: false,
      isuploaded: false,
      songTitle: "",
      albumRefs: null,
      fileCategory: "M",
      subCategoryType: 1,
      coverImage: 1,
      albumName: "",
      page: 1,
      parentAlbum: 0,
      isLoading: false,
      typeError: false,
      iscoverUploaded: false,
      coverpicurl: "",
      AlbumList: [],
      albumSong: [],
      coverFile: '',
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
    assigntosong(id) {
      this.albumRefs = id;
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
      //   Array.from(e.target.files).forEach(file => {
      // 	  	if(file.type =='audio/mp3'){
      // 		this.albumSong.push(file);
      // 		  }
      // 		  else{
      // 			  this.typeError = true;
      // 		  }
      //   });
      if ((e.target.files[0].name).split('.').pop() === "mp3") {
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
      //   Array.from(files).forEach(file => {
      // 			  	if(file.type =='audio/mp3'){
      //  				this.albumSong.push(file);
      // 				  }
      // 				  else{
      // 					  this.typeError = true;
      // 				  }
      // 		  });

      if ((files[0].name).split('.').pop() === "mp3") {
        this.typeError = false;
        this.albumSong = [];
        this.albumSong.push(files[0]);
      } else {
        this.typeError = true;
      }
    },
    createAlbum() {
      var head2 = {
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      };
      var snedoj = {
        songTitle: this.songTitle,
        albumRefs: this.albumRefs,
        fileCategory: this.fileCategory,
        subCategoryType: this.subCategoryType
      };
      if (this.albumSong.length == 0) {
        this.isuploaded = true;
        return;
      }
      this.isuploaded = false;
      if (snedoj.albumRefs == null || snedoj.albumRefs == "") {
        this.isSlect = true;
        return;
      }

      API.post("create-song", snedoj, head2)
        .then(response => {
          if (response.data) {
            this.iserror = false;
            this.isuploaded = false;
            this.isSlect = false;
            this.errorMessage = "";
            this.fileId = response.data.data.id;

            if (this.albumSong.length > 0) {
              var formData1 = new FormData();
              this.isLoading = true;

              formData1.append("fileId", this.fileId);
              if (this.coverFile) {
                formData1.append("songImage", this.coverFile);
              }
              this.albumSong.forEach((file, index) => {
                formData1.append("songFile", file, file.name);
                API.post("upload-file-to-create-song", formData1, head2)
                  .then(response => {
                    if (response.data) {
                      if (index == this.albumSong.length - 1) {
                        this.isLoading = false;
                        if (
                          JSON.parse(localStorage.getItem("User")).userType ==
                          "2"
                        ) {
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
                  })
                  .catch(error => {});
              });
            }
          }
        })
        .catch(error => {
          this.iserror = true;
          let data = error.response.data.errors;
          this.errormessage = data[0].msg;
        });
    },

    sendingEvent(file, xhr, formData) {
      //    this.isLoading = true;
      //       formData.append('musicImage', data1);
    },

    maxfilereach(file) {
      var errorDisplay = document.querySelectorAll("[data-dz-errormessage]");
      errorDisplay[errorDisplay.length - 1].innerHTML = "Max File Reached";
    },

    success(file, response) {
      //   this.isLoading = false;
      //   if(response.data.introductionVideoUploaded=="Y"){
      //       this.introvideo = false;
      //   }
      //     if(response.data.promotionalVideoUploaded=="Y"){
      //       this.promovideo = false;
      //   }
    },

    error(file, message, xhr) {},

    inprogress(file, progress, bytesSent) {},

    infiniteHandler($state) {
      this.page = this.page + 1;
      var senddata2 = {
        albums_of_user: JSON.parse(localStorage.getItem("User")).id,
        page: this.page,
        per_page: 10
      };
      API.get("album-list", {
        params: senddata2,
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      })
        .then(response => {
          if (response.data) {
            response.data.albumlist.map(e => {
              this.AlbumList.push(e);
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
        .catch(error => {});
    }
  },
  created() {
    var senddata1 = {
      albums_of_user: JSON.parse(localStorage.getItem("User")).id,
      page: this.page,
      per_page: 10
    };
    API.get("album-list", {
      params: senddata1,
      headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
    }).then(response => {
      if (response.data) {
        this.AlbumList = response.data.albumlist;
      }
    }).catch(error => {});
  }
};
</script>


