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
                <img v-if="coverpictur==1" src="/assets/images/Spinner.gif" alt>
                <img v-if="coverpictur==null" src="/assets/images/Profile-banner.png" alt>
                <img v-else :src="coverpictur" alt>
                <div class="profile-banner-uploader">
                  <label class="" v-if="coverpictur==null">
                    <input
                      type="file" ref="imageUploader" @click="resetImageUploader"
                      @change="upDatecover($event)"
                    >
                    <i class="icon-photo-camera"></i>
                  </label>
                </div>

                <div v-if="coverpictur">
                <label for="file" class="upload-select"></label>
                <input type="file" id="file" ref="imageUploader" @click="resetImageUploader"
                  @change="upDatecover($event)"
                  accept="image/*" hidden>
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
                      v-if="profilemage==null || user.profilePicture=='' "
                      src="/assets/images/default_artist.png"
                      alt
                    >
                    <!-- <img :src="profilemage" alt> -->
                     <div v-if="profilemage" 
                     class="profile-image-view" 
                     v-bind:style="{ 'background-image': 'url(' + profilemage + ')' }"></div>
                  </div>
                  <router-link :to="'/artist-edit'">
                    <a href="javascript:void(0)" class="profile-edit-btn">Edit</a>
                  </router-link>
                </div>
                <h2 class="user-name">{{user.fullName}}</h2>
                <h3 class="user-address">{{user.address}}</h3>
              </div>
            </div>
            <!-- Profile dashboard area -->
            <div class="profile-dashboard-area">
              <div class="row justify-content-center">
                <!-- leftmanu -->

                <div class="col-12 col-lg-9 col-md-8 col-xl-10 custom-column-right">
                  <div class="profile-right-section">
                    <!-- top Section -->
                    <div class="top-section display-flex">
                      <div class="heading-div">
                        <h1>My Music</h1>
                      </div>
                      <div class="btn-side">
                        <router-link :to="'/contest-music'">
                          <button type="button" class="dash-board-btn">
                            <i class="icon-music-player"></i>
                            Add Contest Video
                          </button>
                        </router-link>
                        <router-link :to="'/addalbum'">
                          <button type="button" class="dash-board-btn">
                            <i class="icon-album"></i>
                            Add Album
                          </button>
                        </router-link>
                        <router-link :to="'/addsong'">
                          <button type="button" class="dash-board-btn">
                            <i class="icon-music-player"></i>
                            Add Song
                          </button>
                        </router-link>
                      </div>
                      
                    </div>
                    
                    <!-- Album section -->
                    <div class="album-wraper">
                      <div v-if="myALbums.length==0">No Music Album Available please Add one</div>
                      <ul class="album-ul">
                        <li v-for="(album,index) in myALbums" :key="index">
                          <router-link
                            :to="{ name: 'ArtistAlbumdetails', params: { id: album.id }}"
                          >
                            <img
                              v-if="album.coverImage==null"
                              src="/assets/images/deefault_album.png"
                            >
                            <img v-else :src="allpath.album_pictures+album.coverImage">
                          </router-link>
                        </li>
                      </ul>
                      <infinite-loading @infinite="infiniteHandler">
                        <div slot="spinner">
                          <img src="/assets/images/loader.gif">
                        </div>
                        <div slot="no-more">{{""}}</div>
                        <div slot="no-results">{{""}}</div>
                      </infinite-loading>
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
    <div class="modal contest-modal" id="image_resize_modal" data-backdrop="static" data-keyboard="false">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <!-- Modal body -->
          <div class="modal-body">
            <div class="modal-inner-body">
             <div>
            <div>
              <vue-cropper
                  ref='cropper'
                  :guides="true"
                  :view-mode="2"
                  drag-mode="move"
                  :auto-crop-area="0.3"
                  :background="true"
                  :rotatable="true"
                  :cropBoxResizable = "false"
                  :src="imgSrc"
                  alt="Source Image"          
                 >
              </vue-cropper>
            </div>
             </div>
              <div class="text-center p-3">
                <button class="btn btn-success" @click="updateImage()" v-if="imgSrc != ''">Save</button>
                <button class="btn btn-info" @click="rotate()" v-if="imgSrc != ''">Rotate</button>
                <button class="btn btn-dark" @click="closeModal()">Cancel</button>
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
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';

export default {
  name: "FanProfile",
  props: {
    msg: String
  },
  components: {
    AppHeader,
    AppFooter,
    LeftManu,
    Loading,
    InfiniteLoading,
    VueCropper
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
      imgSrc: '',
      cropImg: '',
      fileName: ''
    };
  },
  methods: {
    resetImageUploader() { // clear the value of the file input
      this.$refs.imageUploader.value = '';
    },
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
        .catch(error => {});
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
        if(e.target.files[0] && e.target.files[0].name) {
          this.fileName = e.target.files[0].name;
        }
        console.log(file);
        if (!file.type.includes('image/')) {
          alert('Please select an image file');
          return;
        }
           $("#image_resize_modal").modal("show");
           $("#image_resize_modal").modal({
              backdrop: 'static',
              keyboard: false
           })
        if (typeof FileReader === 'function') {
          const reader = new FileReader();
          reader.onload = (event) => {
            this.imgSrc = event.target.result;
            // rebuild cropperjs with the updated source
            this.$refs.cropper.replace(event.target.result);
          };
          reader.readAsDataURL(file);
        } else {
          alert('Sorry, FileReader API not supported');
        }
      },

      updateImage() {
        // get image data for post processing, e.g. upload or setting image src
        this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
        const base64 = this.cropImg;
         $("#image_resize_modal").modal("hide");
         this.isLoading= true;
          fetch(base64).then(res => res.blob()).then(blob => {
            const formData = new FormData();
            const file = new File([blob], this.fileName);
            formData.append('coverPicture', file);
                    let head2 = {
          headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
        };
        API.post("update-cover-picture", formData, head2)
          .then(response => {
            console.log(response);
            if (response.data) {
              this.coverpictur =
                ALL_PATH.cover_pictures + response.data.data.coverPicture;
              this.isLoading = false;
            }
          })
          .catch(error => {
            this.isLoading = false;
           });
          })
      },

      rotate() {
        this.$refs.cropper.rotate(90);
      },
      closeModal() {
         $("#image_resize_modal").modal("hide");
      },

  },
  created() {
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
    var senddata1 = {
      albums_of_user: JSON.parse(localStorage.getItem("User")).id,
      page: this.page,
      per_page: 10
    };
    API.get("album-list", {
      params: senddata1,
      headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
    })
      .then(response => {
        if (response.data) {
          this.myALbums = response.data.albumlist;
          //this.isLoading = false;
          //window.location.href = "/profile";
        }
      })
      .catch(error => {});
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile-image-view {
  height : 130px;
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
