<template>
  <div class="homegb_new no-bg">
      <div v-if="user">
         <AuthAppHeader></AuthAppHeader>
      </div>
       <div v-else  class="fixed-div">
          <UnAuthAppHeader></UnAuthAppHeader>
      </div>
    <div class="main-banner banner-bg">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-12 col-lg-10">
            <div class="new-banner-section">
              <div class="banner-left">
                <article class="banner-right-article">
                   <p class="text-center">
                      <img src="/assets/images/transparent-logo.png" />
                   </p>
                  <h2 class="new-banner-heading">
                    <em>The</em> Music Competition App for Independent Artists
                  </h2>
                  <h3 class="banner-sub-heading">By MiV ...Music is Vivid</h3>
                  <div class="download_apps_button">
                    <a href="https://play.google.com/store/apps/details?id=com.techno.miv.miv&hl=en" target="_blank" class="store-button">
                      <img src="assets/images/google-play-btn.png" alt />
                    </a>
                    <a href="https://apps.apple.com/in/app/music-is-vivid/id1489035451" target="_blank" class="store-button">
                      <img src="assets/images/apple-store-btn.png" alt />
                    </a>
                  </div>
                </article>
                <div class="banner-label">
                  <img src="/assets/images/positive-vote-1.png" />
                  <span>
                    Only Members Can vote...
                    <br />Fans are 100% in charge
                  </span>
                </div>
              </div>
              <div class="banner-right">
                <div class="right-img-container">
                  <img src="/assets/images/banner-mobile.png" />
                   <img class="shadow-image" src="/assets/images/mobile-shadow.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- independent Artist-->

    <div class="how_competition_work_top independent-artist">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-lg-10 col-md-12">
            <div class="first_section">
              <div class="left_part">
                <img src="/assets/images/how_competition_work_01.png" alt />
              </div>
              <div class="right_part">
                <h4 class="Mvi_Subject">Independent Artists…</h4>
                <div class="clearfix">
                  <div class="Mvi_tagBand Mvi_tagBand_yellow">
                    <span class="iconImg greenTik"></span>
                    <span class="conTxt conTxt_yellow">Only 240 Artists Per genre</span>
                  </div>
                </div>
                <div class="clearfix text-center">
                  <div class="Mvi_tagBand Mvi_tagBand_yellow">
                    <span class="iconImg greenTik"></span>
                    <span class="conTxt conTxt_yellow">Your Featured Many Times</span>
                  </div>
                </div>
                <div class="clearfix">
                  <div class="Mvi_tagBand mB_50">
                    <span class="iconImg greenTik"></span>
                    <span class="conTxt conTxt_yellow">Real Earning Potential</span>
                  </div>
                </div>
                <div class="clearfix">
                  <div class="btnRoundedBody">
                    <button class="btnRounded btnPurple" type="button">
                      Sign Up Now
                      <!-- <i class="fa fa-long-arrow-right" aria-hidden="true"></i> -->
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="ind-artist-info-box">
              <p class="m-0">
                Our Member Fans are 100% in Charge and we want fans all over the world
                to have an Afforbale and Fun Music competition App
                so we have only a $3.99 Member cost.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="new-fan-fav-container">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-lg-10 col-md-12">
            <div class="fan_favourite">
              <div class="fan_favourite_inner">
                <div class="container">
                  <h4>Fan Favorites</h4>
                  <div class="fan_favourite_screen">
                    <div class="fan_favourite_screen_each">
                      <div class="inner-fav-screen">
                        <img src="/assets/images/s1.png" alt />
                        <div class="fan_favourite_screen_each_content">Group Friends</div>
                      </div>
                    </div>
                    <div class="fan_favourite_screen_each">
                      <div class="inner-fav-screen">
                        <img src="/assets/images/sa-new-2.jpg" alt />
                        <div class="fan_favourite_screen_each_content">My Profile</div>
                      </div>
                    </div>
                    <div class="fan_favourite_screen_each">
                      <div class="inner-fav-screen">
                        <img src="/assets/images/s3.png" alt />
                        <div class="fan_favourite_screen_each_content">Create Playlist</div>
                      </div>
                    </div>
                    <div class="fan_favourite_screen_each">
                      <div class="inner-fav-screen">
                        <img src="/assets/images/s4-new.jpg" alt />
                        <div class="fan_favourite_screen_each_content">Fan Sharing</div>
                      </div>
                    </div>
                    <div class="fan_favourite_screen_each">
                      <div class="inner-fav-screen">
                        <img src="/assets/images/s5.png" alt />
                        <div class="fan_favourite_screen_each_content">Members Only</div>
                      </div>
                    </div>
                  </div>
                  <div class="buttondiv">
                    <button
                      type="button"
                      class="btn btn-default subscribenow"
                      @click="$router.push('FanRegister')"
                    >
                      Sign Up for more details
                      <!-- <img src="/assets/images/right-arrow.svg" /> -->
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="gallery-section">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="co-lg-10 col-md-12">
            <div class="gallery-inner">
              <div class="searchmaingb">
                <div class="container">
                  <h4 class="Mvi_Subject text-center">Our Heartfelt Thanks to Many great People</h4>

                  <div class="clearfix galleryContainer">
                    <div class="gallery_Item">
                      <img src="/assets/images/img_1.jpg" />
                    </div>
                    <div class="gallery_Item">
                      <img src="/assets/images/img_2.jpg" />
                    </div>
                    <div class="gallery_Item">
                      <img src="/assets/images/img_3.jpg" />
                    </div>
                    <div class="gallery_Item">
                      <img src="/assets/images/img_4.jpg" />
                    </div>
                    <div class="gallery_Item">
                      <img src="/assets/images/img_5.jpg" />
                    </div>
                    <div class="gallery_Item">
                      <img src="/assets/images/img_6.jpg" />
                    </div>
                    <div class="gallery_Item">
                      <img src="/assets/images/img_7.jpg" />
                    </div>
                    <div class="gallery_Item">
                      <img src="/assets/images/img_8.jpg" />
                    </div>
                    <div class="gallery_Item">
                      <img src="/assets/images/img_9.jpg" />
                    </div>
                    <div class="gallery_Item">
                      <img src="/assets/images/img_10.jpg" />
                    </div>
                     <div class="gallery_Item">
                      <img src="/assets/images/img_11.jpg" />
                    </div>
                     <div class="gallery_Item">
                      <img src="/assets/images/img_12.jpg" />
                    </div>
                     <div class="gallery_Item">
                      <img src="/assets/images/img_13.jpg" />
                    </div>
                     <div class="gallery_Item">
                      <img src="/assets/images/img_14.jpg" />
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import router from '../router';
import UnAuthAppHeader from '@/components/UnauthHeader.vue';
import AuthAppHeader from '@/components/AuthHeader.vue';
import AppFooter from "@/components/ComonFotter.vue";
export default {
  name: 'HowWhatWhy',
  data() {
   return {
      user: JSON.parse(localStorage.getItem("User"))
   };
  },
  components: {
    AuthAppHeader,
    UnAuthAppHeader,
    AppFooter
},
methods:{

},
created(){

},

mounted(){

},

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.no-bg .fixed-div{
      position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 99;
}
.main-banner.banner-bg{
  padding-top:88px;
}
</style>