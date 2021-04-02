<template>
  <header class="profile-page-header">
    <div class="header-wraper">
      <div class="container-fluid">
        <div class="row align-items-center justify-content-between">
          <div class="logo inner-page">
            <router-link :to="``">
              <img src="/assets/images/Music-Equalizer-v3.png" alt>
            </router-link>
          </div>
          <div></div>

          <div class="desktop-profile-menu">
            <ul>
              <li>
                <router-link :to="`/profile`">
                  <span class="menu-profile-img">
                    <img v-if="$store.state.profilepicture==1" src="/assets/images/Spinner.gif" alt>
                    <img
                      v-if="$store.state.profilepicture==null"
                      src="/assets/images/default_artist.png"
                      alt
                    >
                    <img v-else :src="$store.state.profilepicture" alt>
                  </span>
                </router-link>
              </li>

              <li>
                <div v-if="userType=='3'">
                  <router-link :to="`/myplaylist`">
                    <i class="icon-music-player"></i>
                  </router-link>
                </div>

                <div v-else>
                  <router-link :to="`/analytics`">
                    <i class="icon-analytics"></i>
                  </router-link>
                </div>
              </li>

              <li>
                <router-link :to="`/searchartist`">
                  <i class="icon-search"></i>
                </router-link>
              </li>

              <li v-if="userType=='2'">
                <router-link :to="`/leader-board`">
                  <i class="icon-leaderboard"></i>
                </router-link>
              </li>



              <li v-if="userType=='3'">
                <router-link :to="`/startcontest`">
                  <i class="icon-leaderboard"></i>
                </router-link>
              </li>
              <li>
                <a href="javascript:;" class="top-menu-profile">
                  <i class="icon-new-menu"></i>
                </a>
              </li>
            </ul>
          </div>

          <div class="header-right-menu">
            <button class="btn-menu-button-close-desk" type="button">
              <i class="icon-close"></i>
            </button>

            <div class="right-menu-box">
              <nav class="navigation">
                <ul>
                  <li>
                    <a href="javascript:;">
                      <i class="icon-settings"></i>Settings
                    </a>
                    <ul class="profile-child-memu">
                      <li>
                        <router-link v-if="user.userType=='3'" :to="`/fan-edit`">Information</router-link>
                      </li>
                      <li>
                        <router-link v-if="user.userType=='2'" :to="`/artist-edit`">Information</router-link>
                      </li>
                      <li v-if="user.userType=='3'">
                        <a href="javascript:;" @click="changedata">Payment method</a>
                      </li>
                      <li v-if="isPaidMember && user.userType=='3'">
                        <router-link :to="'/setting-autoplay'">Setting for Auto-play</router-link>
                      </li>
                    </ul>
                  </li>

                  <li v-if="user.userType=='3'">
                    <a href="javascript:;">
                      <i class="icon-settings"></i>Records
                    </a>
                    <ul class="profile-child-memu">
                      <!-- first time before subscription -->
                      <li v-if="!user.PaymentRecord">
                        <router-link :to="`/membership-popup`">Leaderboard</router-link>
                      </li>
                       <!-- first time subscription end -->
                       <li v-if="(user.PaymentRecord && (user.PaymentRecord.isActive === 0))">
                        <router-link :to="`/membership-popup`">Leaderboard</router-link>
                      </li>
                       <!--user on subscription period-->
                    <li v-if="(user.PaymentRecord && (user.PaymentRecord.isActive === 1))">
                        <router-link :to="`/leader-board`">Leaderboard</router-link>
                      </li>
                     
                      <li>
                        <router-link :to="`/competition-work-flow`">How it works</router-link>
                      </li>
                    </ul>

                    <ul class="profile-child-memu">
                      <li>
                        <router-link :to="`/analytics`">Analytics</router-link>
                      </li>
                    </ul>
                  </li>


                  <li v-if="user.userType=='2'">
                    <a href="javascript:;">
                      <i class="icon-settings"></i>Records
                    </a>
                    <ul class="profile-child-memu">
                    <!-- <li>
                        <router-link :to="`/contest-music`">Contest Music</router-link>
                      </li> -->
                      <li>
                        <router-link :to="`/competition-work-flow`">How it works</router-link>
                      </li>
                    </ul>
                  </li>





                  <li>
                    <a href="javascript:;">
                      <i class="icon-user"></i>Account
                    </a>
                    <ul class="profile-child-memu">
                      <li>
                        <router-link :to="`/invite`">Invite</router-link>
                      </li>

                      <li>
                        <router-link :to="'artist-change-password'">Change Password</router-link>
                      </li>

                      <li>
                        <a
                          href="javascript:;"
                          class="log_out_modal_btn"
                          data-toggle="modal"
                          data-target="#logoutModal"
                        >Logout</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <i class="icon-about"></i>About
                    </a>
                    <ul class="profile-child-memu">
                      <li>
                        <router-link :to="'/report'">Report</router-link>
                      </li>
                      <li v-if="user.userType=='2'">
                        <router-link :to="'/user-agreement'">Legal</router-link>
                      </li>
                      <li v-if="isPaidMember && user.userType=='3'">
                        <router-link :to="'/setting-autoplay'">Setting for Auto-play</router-link>
                      </li>
                      <li>
                        <router-link :to="'/privacy-cookies-policy'">Privacy</router-link>
                      </li>
                    </ul>
                  </li>
                  <!-- <li><a href="javascript:;"><i class="icon-avatar"></i> My Profile</a></li>
                    <li><a href="javascript:;"><i class="icon-analytics"></i> Analytics</a></li>
                    <li><a href="javascript:;"><i class="icon-search"></i> Search</a></li>
                  <li><a href="javascript:;"><i class="icon-leaderboard"></i> Leaderboard</a></li>-->
                  <!-- <li><a href="javascript:;"><i class="icon-menu"></i>Menu</a>
                      <ul class="main-child">
                        <li>
                          <a href="javascript:;"><i class="icon-settings"></i>Settings</a>
                          <ul class="profile-child-memu">
                            <li><a href="javascript:;">Information</a></li>
                            <li><a href="javascript:;">Notifications</a></li>
                            <li><a href="javascript:;">Payment method</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="javascript:;"><i class="icon-about"></i>About</a>
                          <ul class="profile-child-memu">
                            <li><a href="javascript:;">Report</a></li>
                            <li><a href="javascript:;">Legal</a></li>
                            <li><a href="javascript:;">Privacy policy</a></li>
                          </ul>
                        </li>
                      </ul>
                  </li>-->
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="logoutModal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <!-- Modal body -->
          <div class="modal-body">
            <img src="/assets/images/log-out-modal-icon.png">
            <p class="sign-out-modal-text">
              Are you sure you want to
              Logout?
            </p>
            <p class="modal-btn-para">
              <button type="button" @click="logout" class="logout-btn fan-play-btn">Yes</button>
            </p>
            <p class="modal-btn-para mb-0">
              <a href="javascript:;" class="modal-close-btn" data-dismiss="modal">Cancel</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import router from "../router";
import { ALL_PATH } from "@/Constants/Constants";
import { HELPER } from "@/Helper/Helper";
export default {
  name: "AuthHeader",
  props: {
    msg: String
  },

  data() {
    return {
      userType: "",
      user: "",
      profilemage: 1,
      isPaidMember: false,
    };
  },

  methods: {
    checkIsPaidMember(){
      let _loggedUser = JSON.parse(localStorage.getItem("User"));
      if(_loggedUser != null || _loggedUser != undefined){
        if(_loggedUser.PaymentRecord != undefined && _loggedUser.PaymentRecord.isActive != undefined && _loggedUser.PaymentRecord.isActive == 1) {
          this.isPaidMember = true;
        }
      }
    },
    changedata() {
      this.$store.state.ispopup = false;
      router.push({ path: "/addcard" });
    },
    logout() {
      localStorage.removeItem("User");
      localStorage.removeItem("stripeId");
      localStorage.removeItem("UserType");
      localStorage.removeItem("Token");
      localStorage.removeItem("contestMusicCount");
      localStorage.removeItem("userEmail");
      window.location.href = "/login";
    }
  },
  mounted() {
    $(".btn-menu-button").click(function() {
      $(".header-right").addClass("active");
    });
    $(".btn-menu-button-close").click(function() {
      $(".header-right").removeClass("active");
    });
    $(".top-menu-profile").click(function() {
      $(".header-right-menu").addClass("show");
    });
    $(".btn-menu-button-close-desk").click(function() {
      $(".header-right-menu").removeClass("show");
    });
    this.checkIsPaidMember();
  },
  created() {
    this.userType = JSON.parse(localStorage.getItem("UserType"));

    HELPER.getUser("", user => {
      localStorage.setItem("User", JSON.stringify(user));
      this.user = JSON.parse(localStorage.getItem("User"));
      if (this.user.profilePicture) {
        this.$store.state.profilepicture =
          ALL_PATH.profile_image_path + this.user.profilePicture;
      } else {
        this.$store.state.profilepicture = null;
      }
    });
  },
  updated() {
    $(".btn-menu-button").click(function() {
      $(".header-right").addClass("active");
    });
    $(".btn-menu-button-close").click(function() {
      $(".header-right").removeClass("active");
    });
    $(".top-menu-profile").click(function() {
      $(".header-right-menu").addClass("show");
    });
    $(".btn-menu-button-close-desk").click(function() {
      $(".header-right-menu").removeClass("show");
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.logout-btn {
    display: inline-block;
    box-shadow: 0px 5px 0.625rem 1px rgba(0, 0, 0, 0.19);
    line-height: 1.85rem;
    outline: none;
    font-weight: 400;
    position: relative;
    overflow: hidden;
    transition: .2s ease-out;
    text-decoration: none;
}
</style>
