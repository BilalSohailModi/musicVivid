<template>
  <div>
    <AppHeader></AppHeader>
    <section class="inner-page">
      <div class="view-play-list-wraper">
        <div class="view-play-list">
          <img src="/assets/images/album-banner.jpg" class="cover-img">

          <div class="cover-overlay">
            <div class="row justify-content-center">
              <div class="col-12 col-lg-10">
                <div class="play-list-banner">
                  <div class="album-details-row">
                    <div class="row">
                      <div class="col-sm-12">
                        <div class="album-img">
                          <img src="/assets/images/autoplay.png" />
                        </div>
                        <div class="album-details-sec">
                          <h2>Auto-Play Album</h2>
                        </div>
                      </div>
                      <!-- <div class="col-sm-4">
        
                      </div>-->
                    </div>
                  </div>
                  <label class="more-album-menu">
                    <button hidden>
                      <span class="icon-more-button-of-three-dots"></span>
                    </button>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Listing body section -->
        <div class="play-list-listing-wrap">
          <div class="row justify-content-center">
            <div class="col-12 col-lg-10">
              <div class="play-listing-container">
                <div class="track-row-container b-t-2">
                  <div class>
                    <div class="track-row row-header">
                      <div class="track-icon-box">#</div>
                      <div class="track-information">
                        <label class="track-name">
                          <span class="numbering">Title</span>
                        </label>
                        <label class="artist-name">Artist</label>
                      </div>
                    </div>
                  </div>
                  <div v-if="songlist.length == 0 && !isLoadingSongs">No Audio available</div>

                  <div class="track-row" v-for="(_songItem,index) in songlist" :key="index">
                    <div class="track-icon-box">
                      <label class="track-play-btn">
                        <button @click="playSong(index)" :id="'button'+_songItem.id">
                          <img
                            src="/assets/images/track-leaf.png"
                            :id="'image'+_songItem.id"
                            class="imagechangeinsong"
                            alt
                          >
                        </button>
                      </label>
                    </div>
                    <div class="track-information">
                      <label class="track-name">
                        <span class="numbering">{{index+1}}</span>
                        {{_songItem.fileTitle}}
                      </label>
                      <label class="artist-name">{{_songItem.artist.fullName}}</label>
                    </div>
                  </div>

                  <infinite-loading v-show="isLoadingSongs">
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
      </div>
    </section>
  </div>
  <!-- <AppFooter></AppFooter> -->
</template>

<script>
import { API } from "@/api/api";
import AppHeader from "@/components/AuthHeader.vue";
import InfiniteLoading from "vue-infinite-loading";
import { ALL_PATH } from "@/Constants/Constants";

export default {
  name: "AutoPlayAlumb",
  props: {},
  components: {
    AppHeader,
    InfiniteLoading
  },
  data() {
    return {
      loggedUser: JSON.parse(localStorage.getItem("User")),
      albumInformation: null,
      songlist: [],
      enabledragdrop: false,
      isLoadingSongs: true,
      tempsong: [],
      ALL_PATH: ALL_PATH,
      limitedSongs: [],
      limit: 10,
      crntPage: 1,
    };
  },
  computed: {
    currentlyPlayingSongId: function(){
      return this.$store.state.currentlyPlayingSongId;
    }
  },
  watch: {
    currentlyPlayingSongId: function(){
      this.updateCurrntSongAnimation();
    },
    isLoadingSongs: function(){
      if(!this.isLoadingSongs){
        this.updateCurrntSongAnimation();
      }
    }
  },
  methods: {

    loginUserDetails: function() {
      let head2 = {
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      };
      API.get("me", head2).then( async response => {
        this.loggedUser = await response.data;
        setTimeout(() => {
          localStorage.setItem("User", JSON.stringify(this.loggedUser));
        }, 500);
      }).catch(error => {});
    },

    loadAutoPlayList: function() {
      let head2 = {
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      };
      API.get("autoplaySongs/1", head2).then( async response => {
        let _songList = await response.data.data.filter(x=>x.UserFiles.length > 0);
        for(const _item of _songList) {

          let _userObj = Object.assign({}, _item);
          delete _userObj.UserFiles;

          for(let _song of _item.UserFiles) {
            _song.artist = _userObj;
            this.songlist.push(_song);


            // creating songPlayObj
            let _songPlayObj = {};

            _songPlayObj.id = _song.id;
            _songPlayObj.title = _song.fileTitle;
            _songPlayObj.autoplay = false;
            _songPlayObj.src = this.ALL_PATH.user_uploaded_musics + _song.fileName;
            
            if (_song.musicImage == null) {
              _songPlayObj.pic = "";
            } else {
              _songPlayObj.pic = this.ALL_PATH.user_uploaded_musics + _song.musicImage;
            }

            this.tempsong.push(_songPlayObj);
          }
        }

        // this.songlist = this.songlist.sort(this.compareValues('id'))
        this.isLoadingSongs = false;
        if(this.currentlyPlayingSongId == null && this.songlist.length > 0){
          this.playSong(0);
        }
      })
    },    

    compareValues(key, order = 'asc') {
      return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
          // property doesn't exist on either object
          return 0;
        }

        const varA = (typeof a[key] === 'string')
          ? a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string')
          ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
          comparison = 1;
        } else if (varA < varB) {
          comparison = -1;
        }
        return (
          (order === 'desc') ? (comparison * -1) : comparison
        );
      };
    },

    playSong: function(index) {
      let seobj = {};
      seobj.songs = this.tempsong;
      seobj.index = index;
      seobj.isAutoPlayAlumb = true;
      seobj.albumCover = null //this.ALL_PATH.playist_pictures + this.albumInformation.coverImage;
      this.$store.commit("playSongs", seobj);
    },

    updateCurrntSongAnimation: function() {
      $(".play-listing-container .track-icon-box label.track-play-btn button:disabled img.imagechangeinsong.playing").removeClass("playing");
      $(".play-listing-container .track-icon-box label.track-play-btn button:disabled img.imagechangeinsong").attr("src", "/assets/images/track-leaf.png");
      $(".play-listing-container .track-icon-box label.track-play-btn button:disabled").prop("disabled", false);
      setTimeout(()=>{
        if(this.currentlyPlayingSongId != null) {
          if(!$("#button" + this.currentlyPlayingSongId).is(":disabled")) {
            $("#button" + this.currentlyPlayingSongId).prop("disabled", true);
            $("#image" + this.currentlyPlayingSongId).addClass("playing")
            $("#image" + this.currentlyPlayingSongId).attr("src", "/assets/images/miv60x60.gif")
          }
        }
      }, 500)
    }
  },

  created() {
    this.loginUserDetails();
    this.loadAutoPlayList();
    this.updateCurrntSongAnimation();
  },

  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style ></style>
