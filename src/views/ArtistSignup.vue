<template>
  <div class="nothome">
    <div v-if="user">
      <AuthAppHeader></AuthAppHeader>
    </div>
    <div v-else>
      <UnAuthAppHeader></UnAuthAppHeader>
    </div>
    <div class="body-wraper no-footer">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-10 col-lg-10">
            <h3 class="miv-header">MiV’s Uniquely Powerful Platform <br>Can Transform Your Career</h3>
          </div>
        </div>
      </div>
      <div class="Miv_Artist">
        <section class="Competition_App_section">
          <div class="container-fluid CompetitionBG">
            <div class="row">
              <div class="container-fluid">
                <div class="row justify-content-center">
                  <div class="col-md-12 col-lg-11">
                    <div class="row Competition_App_area">
                      <div class="col-md-6 col-lg-5">
                        <!-- thaumBg -->
                        
                      </div>
                      <div class="col-md-6 col-lg-7">
                        <h1 class="Miv_Artist_Header">
                          <i>The</i> Music Competition App
                          <i
                            class="Miv_Artist_subHeader"
                          >By MiV ...Music is Vivid</i>
                        </h1>
                        <h2 class="page-main-heading">Tomorrow’s Stars Today</h2>

                        <h4 class="Mvi_Subject">Independent Artists…</h4>
                        <div class="clearfix">
                          <div class="Mvi_tagBand Mvi_tagBand_yellow">
                            <span class="iconImg greenTik"></span>
                            <span class="conTxt conTxt_yellow">Site Exclusivity more fan interest</span>
                          </div>
                        </div>
                        <div class="clearfix text-center">
                          <div class="Mvi_tagBand Mvi_tagBand_yellow">
                            <span class="iconImg greenTik"></span>
                            <span class="conTxt conTxt_yellow">Your Featured 30-40 Times</span>
                          </div>
                        </div>
                        <div class="clearfix">
                          <div class="Mvi_tagBand mB_50">
                            <span class="iconImg greenTik"></span>
                            <span class="conTxt conTxt_yellow">Real Earning Potential</span>
                          </div>
                        </div>

                        <div class="clearfix">
                          <div class="Mvi_tagBand mB_50">
                            <span class="iconImg greenTik"></span>
                            <span class="conTxt conTxt_yellow">No cost to Artist</span>
                          </div>
                        </div>

                        <div class="clearfix">
                          <div class="btnRoundedBody">
                            <button
                              class="btnRounded btnPurple"
                              type="button"
                              v-if="!user"
                              @click="$router.push('artisregister')"
                            >
                              Sign Up Now
                              <!-- <i class="fa fa-long-arrow-right" aria-hidden="true"></i> -->
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row Competition_App_area">
                      <div class="col-md-12 col-lg-5 Contest_Starts">
                        <h4 class="Mvi_Subject">Contest Starts</h4>
                        <div class="clearfix">
                          <div class="hexagonItem">
                            <div class="hexagonNew purple">
                              <span>1</span>
                            </div>
                            <p>
                              You are
                              <b>FEATURED</b> worldwide;
                              <b>24 Times and 40+</b> more in the Tournament.
                            </p>
                          </div>
                          <div class="hexagonItem">
                            <div class="hexagonNew oreng">
                              <span>2</span>
                            </div>
                            <p>Only 240 Artists in a Genre</p>
                          </div>
                          <div class="mB_30 hexagonItem">
                            <div class="hexagonNew sky">
                              <span>3</span>
                            </div>
                            <p>
                              Only
                              <b>Member/Fans</b> Vote… they are 100% in charge.
                              <b>Transparent</b> and
                              <b>Honest</b> process 100%.
                              Even first seeding is based on fan Following
                            </p>
                          </div>
                          <div class="clearfix">
                            <div class="btnRoundedBody">
                              <button
                                class="btnRounded btnPurple"
                                type="button"
                                v-if="!user"
                                @click="$router.push('artisregister')"
                              >
                                Sign Up Now
                                <!-- <i class="fa fa-long-arrow-right" aria-hidden="true"></i> -->
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-12 col-lg-7">
                        <!-- purpleBg -->
                        <div class="context-start-right">
                          <div class="artists_Area">
                            <img src="/assets/images/winner.png">
                            <h4 class="artists_point">240</h4>
                            <span>Artists</span>
                          </div>
                          <div class="alternativeMenu">
                            <ul>
                              <li class="active">
                                <a class>
                                  <img src="/assets/images/volumLavels.png">
                                  <span>Alternative</span>
                                </a>
                              </li>
                              <li>
                                <a class>
                                  <img src="/assets/images/icon8country_music.png">
                                  <span>Country</span>
                                </a>
                              </li>
                              <li>
                                <a class>
                                  <img src="/assets/images/headPhone.png">
                                  <span>EDM</span>
                                </a>
                              </li>
                              <li>
                                <a class>
                                  <img src="/assets/images/maracas.png">
                                  <span>World</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div class="stCardArea">
                            <div class="card-item-wraper">
                              <div class="stCardItem">
                                <div class="stCardImg">
                                  <img src="/assets/images/stCard_img1.png">
                                </div>
                                <div class="stCardConTxt">
                                  <span class="stCardHeart">
                                    <i class="fa fa-heart" aria-hidden="true"></i>
                                  </span>
                                  <h5>Zana</h5>
                                  <p>
                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                    Grand Prairie, Texas
                                  </p>
                                  <a class="stCardBtn">Vote 1st</a>
                                </div>
                              </div>
                            </div>
                            <div class="card-item-wraper">
                              <div class="stCardItem active">
                                <img src="/assets/images/sticker.png" class="sticker-icon">
                                <div class="stCardImg">
                                  <img src="/assets/images/stCard_img2.png">
                                </div>
                                <div class="stCardConTxt">
                                  <span class="stCardHeart">
                                    <i class="fa fa-heart" aria-hidden="true"></i>
                                  </span>
                                  <h5>Piper</h5>
                                  <p>
                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                    Grand Prairie, Texas
                                  </p>
                                  <a class="stCardBtn">Vote 2nd</a>
                                </div>
                              </div>
                            </div>

                            <div class="card-item-wraper">
                              <div class="stCardItem active">
                                <img src="/assets/images/sticker2.png" class="sticker-icon">
                                <div class="stCardImg">
                                  <img src="/assets/images/stCard_img3.png">
                                </div>
                                <div class="stCardConTxt">
                                  <span class="stCardHeart">
                                    <i class="fa fa-heart" aria-hidden="true"></i>
                                  </span>
                                  <h5>Bianca Ryan</h5>
                                  <p>
                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                    Grand Prairie, Texas
                                  </p>
                                  <a class="stCardBtn">Vote 3rd</a>
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
            </div>
          </div>
          <div class="container-fluid">
            <div class="row justify-content-center">
              <div class="col-md-12 col-lg-11">
                <p class="bulet">
                  <span>
                    <label>
                      Artist are seeded in LIVE/CENTER STAGE or OPENING ACTS/DRAFT sections based on fan Following. It’s important that you have their support because only
                      <b>Member/fans</b> can vote. The contest voting determines artist rank and earnings. The contest also means more followers are listening so you
                      can engage with a wider world-wide audience. You can qualify For
                      <b>Live, Draft</b> or our
                      <b>Que</b>. So we encourage you to sign up now.
                    </label>
                    <img src="/assets/images/graphics.png">
                  </span>
                </p>
                <p class="bulet">
                  <span>
                    <label>
                      There will be
                      <b>2 Contest Series</b> a year so earning payout for all
                      <b>Live Contestants</b> (only Independents) is 30 days upon close of a series.
                      We pay an
                      <b>Artist Fund</b> secured at a bank every month.
                    </label>
                  </span>
                </p>
              </div>
            </div>
            <div class="row justify-content-center Competition_App_area earnToSection">
              <div class="col-md-5 col-lg-6 pullUpMd text-lg-right">
                <img src="/assets/images/earnTo.png" class="img-fluid">
              </div>
              <div class="col-md-7 col-lg-6 pullUpMd">
                <h4 class="Mvi_Subject">Earn To Freedom</h4>
                <div class="clearfix">
                  <div class="hexagonItem">
                    <div class="hexagonNew purple">
                      <span>1</span>
                    </div>
                    <p>
                      Example; 2.0 million Members (signed up for 12 full months at $3.99/
                      month). More Members = greater Artist funds.
                    </p>
                  </div>
                  <div class="hexagonItem">
                    <div class="hexagonNew purple">
                      <span>2</span>
                    </div>
                    <p>
                      This example generates an estimated and
                      <b>
                        approximate up to $15 million
                        dollars
                      </b> annually which is divided in two contests in the year. This figure
                      is for
                      <b>Artists</b> and
                      <b>Copyright</b> costs.
                    </p>
                  </div>
                  <div class="hexagonItem">
                    <div class="hexagonNew purple">
                      <span>3</span>
                    </div>
                    <p>
                      Only the
                      <b>Live</b> contestants
                      <b>Earn</b> and
                      <b>Payout</b> determined only by member
                      votes and final Rank.
                      <b>Draft Artist</b> section is for development & discovery
                      & possible promotion to Live. The above numbers are estimates &
                      details & rules must be reviewed and agreed to in the
                      <b>
                        <u>Artists Agreement</u>
                      </b>.
                    </p>
                  </div>
                  <div class="hexagonItem">
                    <div class="hexagonNew purple">
                      <span>4</span>
                    </div>
                    <p>
                      Limited Space, only 240 artists and 8 genres. This means more Features and
                      earning Potential for You!
                      <b>No cost or Fees</b> for Artists.
                    </p>
                  </div>
                  <div class="clearfix">
                    <div class="btnRoundedBody">
                      <button
                        class="btnRounded btnPurple"
                        type="button"
                        v-if="!user"
                        @click="$router.push('artisregister')"
                      >
                        Sign Up Now
                        <!-- <i class="fa fa-long-arrow-right" aria-hidden="true"></i> -->
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="greatFunnSection">
          <div class="container-fluid">
            <div class="row justify-content-center">
              <div class="col-md-11">
                <h4 class="Mvi_Subject text-center">Great Fan Connections For You</h4>
                <h6
                  class="text-center mB_50 font-20"
                >Social Features so Fans Listen, Vote and Engage with You</h6>
                <div class="footer-block-container">
                  <div class="footer-item-block">
                    <img src="/assets/images/mob_img_1-new.png" class="img-fluid">
                  </div>
                  <div class="footer-item-block">
                    <img src="/assets/images/mobImg_2-new.png" class="img-fluid">
                  </div>
                  <div class="footer-item-block">
                    <img src="/assets/images/mob-img-2-new.png" class="img-fluid">
                  </div>
                  <div class="footer-item-block">
                    <img src="/assets/images/mobImg_3-new.png" class="img-fluid">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import router from "../router";
import UnAuthAppHeader from "@/components/UnauthHeader.vue";
import AuthAppHeader from "@/components/AuthHeader.vue";
import axios from "axios";
import AppFooter from "@/components/ComonFotter.vue";
import "video.js/dist/video-js.css";
import { videoPlayer } from "vue-video-player";
export default {
  name: "ArtistSignup",
  data() {
    return {
      playerOptions: {
        height: "550",
        width: "250",
        muted: false,
        loop: true,
        autoplay: true,
        preload: "auto",
        language: "en",
        sources: [
          {
            type: "video/mp4",
            src: "/assets/images/banner-image-new.mp4"
          }
        ]
      },
      user: JSON.parse(localStorage.getItem("User"))
    };
  },
  //  head: {
  //   title: {
  //     inner: 'Music Artist Sign-Up | Best Music Streaming Platform'
  //   },
  //   meta: [

  //     { name: 'description', content: 'Magical moments only start with music. Sign up MiV as An Artist, a trusted Art platform. Enjoy unlimited music with digital artists & music lovers' },
  //     { name:"keywords", content:'Artist Sign Up,digital artist online sign up, sign up for artist,art platform sign up,sign up as an artist,music artist sign up'}
  //   ]
  //  },
  components: {
    AuthAppHeader,
    UnAuthAppHeader,
    AppFooter
  },
  methods: {
    onPlayerPlay(player) {
      console.log("player play!", this.$refs.videoPlayer);
    },
    onPlayerPause(player) {
      console.log("player pause!", player);
    },
    onPlayerEnded(player) {
      // console.log('player ended!', player)
    },
    onPlayerLoadeddata(player) {
      // console.log('player Loadeddata!', player)
    },
    onPlayerWaiting(player) {
      // console.log('player Waiting!', player)
    },
    onPlayerPlaying(player) {
      // console.log('player Playing!', player)
    },
    onPlayerTimeupdate(player) {
      // console.log('player Timeupdate!', player.currentTime())
    },
    onPlayerCanplay(player) {
      // console.log('player Canplay!', player)
    },
    onPlayerCanplaythrough(player) {
      // console.log('player Canplaythrough!', player)
    },
    // or listen state event
    playerStateChanged(playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },
    // player is ready
    playerReadied(player) {
      // console.log('example 01: the player is readied', player)
    }
  },
  created() {},

  mounted() {
    // let vid = document.getElementById("previewVideo");
    // console.log(vid);
    // $("#previewVideo").attr({ autoplay: "true" });
    // vid.oncanplay = () => {
    //   setTimeout(() => {
    //     vid.play();
    //   },1000)
    // };
  },
  updated() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mb-35 {
  margin-bottom: 35px;
}
.miv-header {
  margin: 0;
  font-size: 25px;
  text-align: left;
  color: #2e3192;
  font-weight: 800
}
</style>