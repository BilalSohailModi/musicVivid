<template>
  <div>
    <AppHeader></AppHeader>
    <section class="payment-method-container">
      <div class="payment-header">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-12 col-lg-10 text-center payment-bg">
              <h1>Auto-Play Settings</h1>
            </div>
          </div>
        </div>
      </div>

      <div class="card-wraper-outer">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-12 col-lg-8">
              <div class="autoplay-setup-container">
                <form class="" @submit="submitAutoPlaySetupFun($event)" method="post">
                  <div class="row autoplay-from-cont">
                    <div class="col-md-12">
                      <div class="genre-block">
                        <label class="autoplay-title">Choose Genre</label>
                        <div class="text-center" v-if="!isGenreListLoaded">
                          <img src="/assets/images/loader.gif" />
                        </div>
                        <div v-else-if="genreList.length > 0">
                          <div class="contest-item text-left">
                            <label v-for="(_genre, index) in genreList" :key="index" @click="selectGenreOpt($event, _genre.id)">
                              <input
                                type="checkbox"
                                :value="_genre.id"
                                :name="'generic_option'"
                                :checked="selectedGenericList.includes(_genre.id)"
                                disabled
                              >
                              <span class="col-md-3 contest-type-check">
                                <img :src="GENRE_IMG_LINK + _genre.image" alt="icon">
                                {{_genre.name}}
                              </span>
                            </label>
                          </div>
                        </div>
                        <div v-else class="text-center">Genre not found</div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="preference-block">
                        <label class="autoplay-title">Preference</label>
                        <div class="sign_unsign-div d-block">
                          <label class="radio-channel">
                            <input type="radio" name="autoplay_type" v-model="autoPlayType" :value="0">
                            <span class="channel-checkmark"><i class="icon-shuffle" aria-hidden="true"></i>Random</span>
                          </label>
                          <label class="radio-channel">
                            <input type="radio" name="autoplay_type" v-model="autoPlayType" :value="1">
                            <span class="channel-checkmark"><i class="icon-album" aria-hidden="true"></i>Genre Play</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <p class="autoplay-setup-note"><span>Note</span>Select up to Three Genres. The top 10 Leaderboard artists will auto load and update with each Completed Contest. Select Sequential or Random Play.</p>
                    </div>
                  </div>
                  <div class="row justify-content-center pt-3">
                    <div class="col-auto">
                      <button class="btn-signin d-inline-block" type="submit" :disabled="isSubmitted">Save</button>
                      <button type="button" class="btn-cancel" @click="redirectToProfile($event)" :disabled="isSubmitted">Cancel</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade genre-selection-modal" id="notify_genre_selection">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <!-- Modal body -->
            <div class="modal-body">
              <img src="/assets/images/log-out-modal-icon.png">
              <p class="notify-genre-modal-text dev-autoplay-err-msg">
                You can select maximum 3 genres
              </p>
              <p class="modal-btn-para mb-0">
                <a href="javascript:;" class="btn fan-play-btn" data-dismiss="modal">Ok</a>
              </p>
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
import { ALL_PATH } from "@/Constants/Constants";

export default {
  name: "Addcard",
  props: {
    msg: String
  },
  components: {
    AppHeader
    // Card
  },
  data() {
    return {
      user: JSON.parse(localStorage.getItem("User")),
      autoPlayType: null,
      genreList: [],
      selectedGenericList: [],
      isSubmitted: false,
      GENRE_IMG_LINK: ALL_PATH.genre_image_link,
      isGenreListLoaded: false,
    };
  },
  watch: {},
  methods: {
    loginUserDetails() {
      let head2 = {
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      };
      API.get("me", head2).then( async response => {
          this.user = await response.data;
          this.autoPlayType = await this.user.autoplayType;
          let _autoplayGenreListArr = await this.user.autoplayGenreList.split(",");
          if(_autoplayGenreListArr.length > 0) {
            this.selectedGenericList = await _autoplayGenreListArr.filter(x => !Number.isNaN(parseInt(x))).map(x=>{return parseInt(x)})
            this.user.autoplayGenreList = await this.selectedGenericList.toString()
          }
          setTimeout(() => {
            localStorage.setItem("User", JSON.stringify(this.user));
          }, 500);
        })
        .catch(error => {console.error("Error: ", error)});
    },

    loadGenreList(){
      let head2 = {
        headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
      };
      API.get("genre-list", head2).then(async response => {
        this.genreList = await response.data.filter(x=>x.p_cat == 0).sort(this.compareValues("id"));
        this.isGenreListLoaded = true;
      }).catch(error => {
        console.error("error: ", error)
      });
    },

    compareValues(key, order = 'asc') {
      return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
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

    selectGenreOpt(event, _genreId) {
      if(this.selectedGenericList.includes(_genreId)) {
        this.selectedGenericList = this.selectedGenericList.filter(x=> x != _genreId);
      } else {
        if(this.selectedGenericList.length < 3) {
          this.selectedGenericList.push(_genreId);
        } else {
          $("#notify_genre_selection p.dev-autoplay-err-msg").text("You can select maximum 3 genres");
          $("#notify_genre_selection").modal("show");
        }
      }
    },

    submitAutoPlaySetupFun: async function(event){
      event.preventDefault();
      
      if(this.selectedGenericList.length == 0) {
        $("#notify_genre_selection p.dev-autoplay-err-msg").text("You need to select at least one genre");
        $("#notify_genre_selection").modal("show");
      } else {
        this.isSubmitted = true;
        let _apiHead = {
          headers: { "x-access-token": JSON.parse(localStorage.getItem("Token")) }
        };

        let _formValues = {
          autoplayGenreList: await this.selectedGenericList.filter(x => parseInt(x) != NaN).toString(),
          autoplayType: this.autoPlayType
        }
        
        API.post("autoPlaySettings", _formValues, _apiHead).then( async res => {
          await this.loginUserDetails();
          this.isSubmitted = false;
          this.$toast.open({
            icon : 'check',
            position:'top-right',
            message: "Auto-Play Settings has been saved successfully.",
            type: "success",
            duration: 5000,
            dismissible: true
          })
        }).catch(error => {
          console.error("Error: ", error);
          this.isSubmitted = false;
        });
      }
    },

    redirectToProfile(event) {
      if(this.user.userType == '3') {
        this.$router.push('fan-profile');
      } else if(this.user.userType == '2') {
        this.$router.push('profile');
      }
    }
  },

  created() {
    this.loginUserDetails();
    this.loadGenreList();
  },

  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  button.btn-signin:disabled, button.btn-cancel:disabled {
    cursor: not-allowed !important;
    pointer-events: none;
  }
</style>
