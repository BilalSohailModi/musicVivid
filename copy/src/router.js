import Vue from "vue";
import Router from "vue-router";

const Home = (r) => require.ensure([], () => r(require("@/views/Home")));
const FanRegister = (r) =>
  require.ensure([], () => r(require("@/views/FanRegister")));
const Login = (r) => require.ensure([], () => r(require("@/views/Login")));
const FanRegisterOtp = (r) =>
  require.ensure([], () => r(require("@/views/FanRegisterOtp")));
const FanProfile = (r) =>
  require.ensure([], () => r(require("@/views/FanProfile")));
const ArtistRegister = (r) =>
  require.ensure([], () => r(require("@/views/ArtistRegister")));
const ArtistRegister1 = (r) =>
  require.ensure([], () => r(require("@/views/ArtistRegister1")));
const ArtistRegister2 = (r) =>
  require.ensure([], () => r(require("@/views/ArtistRegister2")));
const ArtistRegister3 = (r) =>
  require.ensure([], () => r(require("@/views/ArtistRegister3")));
const ArtistRegister4 = (r) =>
  require.ensure([], () => r(require("@/views/ArtistRegister4")));
const Sucess = (r) => require.ensure([], () => r(require("@/views/Sucess")));
const Artisteditprofile = (r) =>
  require.ensure([], () => r(require("@/views/Artisteditprofile")));
const Addalbum = (r) =>
  require.ensure([], () => r(require("@/views/Addalbum")));
const adddsong = (r) =>
  require.ensure([], () => r(require("@/views/adddsong")));
const ForgotpassWord = (r) =>
  require.ensure([], () => r(require("@/views/ForgotpassWord")));
const Forgototp = (r) =>
  require.ensure([], () => r(require("@/views/Forgototp")));
const Setpassword = (r) =>
  require.ensure([], () => r(require("@/views/Setpassword")));
const PasswordSuccess = (r) =>
  require.ensure([], () => r(require("@/views/PasswordSuccess")));
const ArtistChangePassword = (r) =>
  require.ensure([], () => r(require("@/views/ArtistChangePassword")));
const Artistsearch = (r) =>
  require.ensure([], () => r(require("@/views/Artistsearch")));
const ArtistAlbumsearch = (r) =>
  require.ensure([], () => r(require("@/views/ArtistAlbumsearch")));
const ArtistSongsearch = (r) =>
  require.ensure([], () => r(require("@/views/ArtistSongsearch")));
const ArtistAlbumdetails = (r) =>
  require.ensure([], () => r(require("@/views/ArtistAlbumdetails")));
const Artistsearchglobal = (r) =>
  require.ensure([], () => r(require("@/views/Artistsearchglobal")));
const SongsearchGlobal = (r) =>
  require.ensure([], () => r(require("@/views/SongsearchGlobal")));
const AlbumsearchGlobal = (r) =>
  require.ensure([], () => r(require("@/views/AlbumsearchGlobal")));
const ArtistProfile = (r) =>
  require.ensure([], () => r(require("@/views/ArtistProfile")));
const FanAlbumDetails = (r) =>
  require.ensure([], () => r(require("@/views/FanAlbumDetails")));
const FaneditProfile = (r) =>
  require.ensure([], () => r(require("@/views/FaneditProfile")));
const FanAlbumview = (r) =>
  require.ensure([], () => r(require("@/views/FanAlbumview")));
const ArtistViewFanside = (r) =>
  require.ensure([], () => r(require("@/views/ArtistViewFanside")));
const FanSuccess = (r) =>
  require.ensure([], () => r(require("@/views/FanSuccess")));
const ArtistAlbumEdit = (r) =>
  require.ensure([], () => r(require("@/views/ArtistAlbumEdit")));
const Contest = (r) => require.ensure([], () => r(require("@/views/Contest")));
const StartContest = (r) =>
  require.ensure([], () => r(require("@/views/StartContest")));
const Report = (r) => require.ensure([], () => r(require("@/views/Report")));
const Privacy = (r) => require.ensure([], () => r(require("@/views/Privacy")));
const Leagal = (r) => require.ensure([], () => r(require("@/views/Leagal")));
const Invite = (r) => require.ensure([], () => r(require("@/views/Invite")));
const Playlist = (r) =>
  require.ensure([], () => r(require("@/views/Playlist")));
const Addcard = (r) => require.ensure([], () => r(require("@/views/Addcard")));
const Leaderboard = (r) =>
  require.ensure([], () => r(require("@/views/Leaderdashboard")));
const Livecontestserise = (r) =>
  require.ensure([], () => r(require("@/views/Livecontestserise")));
const TournamentResult = (r) =>
  require.ensure([], () => r(require("@/views/TournamentResult")));
const TopThreeResult = (r) =>
  require.ensure([], () => r(require("@/views/TopThreeResult")));
const SocialFollowers = (r) =>
  require.ensure([], () => r(require("@/views/SocialFollowers")));
const albumShare = (r) =>
  require.ensure([], () => r(require("@/views/albumShare")));
const MembershipPopup = (r) =>
  require.ensure([], () => r(require("@/views/MembershipPopup")));
const contestMusic = (r) =>
  require.ensure([], () => r(require("@/views/contestMusic")));
const analytics = (r) =>
  require.ensure([], () => r(require("@/views/analytics")));
// const makePayment = r => require.ensure([], () => r(require('@/views/makePayment')));
const subscribe = (r) =>
  require.ensure([], () => r(require("@/views/subscribe")));
const UserAgreement = (r) =>
  require.ensure([], () => r(require("@/views/UserAgreement")));
const FanAgreement = (r) =>
  require.ensure([], () => r(require("@/views/FanAgreement")));
const PrivacyPolicy = (r) =>
  require.ensure([], () => r(require("@/views/PrivacyPolicy")));
const Disclaimer = (r) =>
  require.ensure([], () => r(require("@/views/Disclaimer")));
const CompetitionWorkFlow = (r) =>
  require.ensure([], () => r(require("@/views/CompetitionWorkFlow")));
const PaymentSuccess = (r) =>
  require.ensure([], () => r(require("@/views/PaymentSuccess")));
const Support = (r) => require.ensure([], () => r(require("@/views/Support")));
const AuthHome = (r) =>
  require.ensure([], () => r(require("@/views/AuthHome")));
const ArtistSignup = (r) =>
  require.ensure([], () => r(require("@/views/ArtistSignup")));
const HowWhatWhy = (r) =>
  require.ensure([], () => r(require("@/views/HowWhatWhy")));

// const elavonPayment = r => require.ensure([], () => r(require('@/views/elavonPayment')));
const makePayment = (r) =>
  require.ensure([], () => r(require("@/views/elavonPayment")));
const AutoPlaySetup = (r) =>
  require.ensure([], () => r(require("@/views/AutoPlaySetup")));
const AutoPlayAlumb = (r) =>
  require.ensure([], () => r(require("@/views/AutoPlayAlumb")));

Vue.use(Router);

var metaConfig = {
  progress: {
    func: [
      { call: "color", modifier: "temp", argument: "#991a2e" },
      { call: "fail", modifier: "temp", argument: "#6e0000" },
      { call: "location", modifier: "temp", argument: "top" },
      {
        call: "transition",
        modifier: "temp",
        argument: { speed: "1.5s", opacity: "0.6s", termination: 400 },
      },
    ],
  },
};
var metaconfigauth = {
  progress: {
    func: [
      { call: "color", modifier: "temp", argument: "#991a2e" },
      { call: "fail", modifier: "temp", argument: "#6e0000" },
      { call: "location", modifier: "temp", argument: "top" },
      {
        call: "transition",
        modifier: "temp",
        argument: { speed: "1.5s", opacity: "0.6s", termination: 400 },
      },
    ],
  },
  requiresAuth: true,
};

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: metaConfig,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) != null ||
          JSON.parse(localStorage.getItem("User")) != undefined
        ) {
          if (JSON.parse(localStorage.getItem("User")).userType == "2") {
            next({ path: "/profile" });
          } else {
            next({ path: "/fan-profile" });
          }
        } else {
          next();
        }
      },
    },

    {
      path: "/fanregister",
      name: "FanRegister",
      component: FanRegister,
      meta: metaConfig,
    },

    {
      path: "/artistglobalsearch",
      name: "Artistsearchglobal",
      component: Artistsearchglobal,
      meta: metaConfig,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) != null ||
          JSON.parse(localStorage.getItem("User")) != undefined
        ) {
          next({ path: "/profile" });
        } else {
          next();
        }
      },
    },

    {
      path: "/albumglobalsearch",
      name: "AlbumsearchGlobal",
      component: AlbumsearchGlobal,
      meta: metaConfig,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) != null ||
          JSON.parse(localStorage.getItem("User")) != undefined
        ) {
          next({ path: "/profile" });
        } else {
          next();
        }
      },
    },

    {
      path: "/songglobalsearch",
      name: "SongsearchGlobal",
      component: SongsearchGlobal,
      meta: metaConfig,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) != null ||
          JSON.parse(localStorage.getItem("User")) != undefined
        ) {
          next({ path: "/profile" });
        } else {
          next();
        }
      },
    },

    {
      path: "/addcard",
      name: "Addcard",
      component: Addcard,
      meta: metaConfig,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) == null ||
          JSON.parse(localStorage.getItem("User")) == undefined
        ) {
          next({ path: "/login" });
        } else {
          next();
        }
      },
    },

    {
      path: "/startcontest",
      name: "StartContest",
      component: StartContest,
      meta: metaConfig,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) != null ||
          JSON.parse(localStorage.getItem("User")) != undefined
        ) {
          next();
        } else {
          next({ path: "/profile" });
        }
      },
    },

    {
      path: "/report",
      name: "Report",
      component: Report,
      meta: metaConfig,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) != null ||
          JSON.parse(localStorage.getItem("User")) != undefined
        ) {
          next();
        } else {
          next({ path: "/profile" });
        }
      },
    },

    {
      path: "/legal",
      name: "Leagal",
      component: Leagal,
      meta: metaConfig,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) != null ||
          JSON.parse(localStorage.getItem("User")) != undefined
        ) {
          next();
        } else {
          next({ path: "/profile" });
        }
      },
    },

    {
      path: "/invite",
      name: "Invite",
      component: Invite,
      meta: metaConfig,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) != null ||
          JSON.parse(localStorage.getItem("User")) != undefined
        ) {
          next();
        } else {
          next({ path: "/profile" });
        }
      },
    },

    {
      path: "/privacy",
      name: "Privacy",
      component: Privacy,
      meta: metaConfig,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) != null ||
          JSON.parse(localStorage.getItem("User")) != undefined
        ) {
          next();
        } else {
          next({ path: "/profile" });
        }
      },
    },

    {
      path: "/forgototp",
      name: "Forgototp",
      component: Forgototp,
      meta: metaConfig,
    },

    {
      path: "/artist-change-password",
      name: "ArtistChangePassword",
      component: ArtistChangePassword,
      meta: metaConfig,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) == null ||
          JSON.parse(localStorage.getItem("User")) == undefined
        ) {
          window.location.href = "/login";
        }
        next();
      },
    },

    {
      path: "/addalbum",
      name: "Addalbum",
      component: Addalbum,
      meta: metaConfig,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) == null ||
          JSON.parse(localStorage.getItem("User")) == undefined
        ) {
          window.location.href = "/login";
        } else {
          if (JSON.parse(localStorage.getItem("User")).userType == "2") {
            next();
          } else {
            window.location.href = "/fan-profile";
          }
        }
      },
    },

    {
      path: "/artist-view-fan-side/:id",
      name: "ArtistViewFanside",
      component: ArtistViewFanside,
      meta: metaConfig,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) == null ||
          JSON.parse(localStorage.getItem("User")) == undefined
        ) {
          window.location.href = "/login";
        } else {
          next();
        }
      },
    },

    {
      path: "/artist-album-edit/:id",
      name: "ArtistAlbumEdit",
      component: ArtistAlbumEdit,
      meta: metaConfig,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) == null ||
          JSON.parse(localStorage.getItem("User")) == undefined
        ) {
          window.location.href = "/login";
        } else {
          next();
        }
      },
    },

    {
      path: "/fan-album-view/:id",
      name: "FanAlbumDetails",
      component: FanAlbumDetails,
      meta: metaConfig,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) == null ||
          JSON.parse(localStorage.getItem("User")) == undefined
        ) {
          window.location.href = "/login";
        } else {
          next();
        }
      },
    },

    {
      path: "/fan-album-selfview/:id",
      name: "FanAlbumview",
      component: FanAlbumview,
      meta: metaConfig,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) == null ||
          JSON.parse(localStorage.getItem("User")) == undefined
        ) {
          window.location.href = "/login";
        } else {
          next();
        }
      },
    },

    {
      path: "/artist-album-view/:id",
      name: "ArtistAlbumdetails",
      component: ArtistAlbumdetails,
      meta: metaConfig,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) == null ||
          JSON.parse(localStorage.getItem("User")) == undefined
        ) {
          window.location.href = "/login";
        } else {
          next();
        }
      },
    },

    {
      path: "/searchartist",
      name: "Artistsearch",
      component: Artistsearch,
      meta: metaConfig,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) == null ||
          JSON.parse(localStorage.getItem("User")) == undefined
        ) {
          window.location.href = "/login";
        }
        next();
      },
    },

    {
      path: "/contest/:id",
      name: "Contest",
      component: Contest,
      meta: metaConfig,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) == null ||
          JSON.parse(localStorage.getItem("User")) == undefined
        ) {
          window.location.href = "/login";
        } else {
          next();
        }
      },
    },

    {
      path: "/artistsongsearch",
      name: "ArtistSongsearch",
      component: ArtistSongsearch,
      meta: metaConfig,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) == null ||
          JSON.parse(localStorage.getItem("User")) == undefined
        ) {
          window.location.href = "/login";
        } else {
          next();
        }
      },
    },

    {
      path: "/searchartistalbum",
      name: "ArtistAlbumsearch",
      component: ArtistAlbumsearch,
      meta: metaConfig,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) == null ||
          JSON.parse(localStorage.getItem("User")) == undefined
        ) {
          window.location.href = "/login";
        } else {
          next();
        }
      },
    },

    {
      path: "/setpassword",
      name: "Setpassword",
      component: Setpassword,
      meta: metaConfig,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("Token")) == null ||
          JSON.parse(localStorage.getItem("Token")) == undefined
        ) {
          window.location.href = "/login";
        } else {
          next();
        }
      },
    },

    {
      path: "/profile",
      name: "FanProfile",
      component: FanProfile,
      meta: metaConfig,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) == null ||
          JSON.parse(localStorage.getItem("User")) == undefined
        ) {
          window.location.href = "/login";
        }
        if (JSON.parse(localStorage.getItem("User")).userType == "2") {
          next({ path: "/fan-profile" });
        } else {
          next({ path: "/fan-profile" });
        }
      },
    },

    {
      path: "/fan-profile",
      name: "ArtistProfile",
      component: ArtistProfile,
      meta: metaConfig,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) == null ||
          JSON.parse(localStorage.getItem("User")) == undefined
        ) {
          window.location.href = "/login";
        }
        if (JSON.parse(localStorage.getItem("User")).userType == "3") {
          next();
        } else {
          next({ path: "/profile" });
        }
      },
    },

    {
      path: "/myplaylist",
      name: "Playlist",
      component: Playlist,
      meta: metaConfig,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) == null ||
          JSON.parse(localStorage.getItem("User")) == undefined
        ) {
          window.location.href = "/login";
        }
        if (JSON.parse(localStorage.getItem("User")).userType == "3") {
          next();
        } else {
          next({ path: "/profile" });
        }
      },
    },

    {
      path: "/login",
      name: "login",
      component: Login,
      meta: metaConfig,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) != null ||
          JSON.parse(localStorage.getItem("User")) != undefined
        ) {
          if (
            JSON.parse(localStorage.getItem("Token")) != null ||
            JSON.parse(localStorage.getItem("Token")) != undefined
          ) {
            next({ path: "/profile" });
          } else {
            next();
          }
        } else {
          next();
        }
      },
    },

    {
      path: "/forgotpassword",
      name: "ForgotpassWord",
      component: ForgotpassWord,
      meta: metaConfig,
    },

    {
      path: "/fanotp",
      name: "FanRegisterOtp",
      component: FanRegisterOtp,
      meta: metaConfig,
    },

    {
      path: "/artistregister",
      name: "ArtistRegister",
      component: ArtistRegister,
      meta: metaConfig,
    },

    {
      path: "/artistregisterstep1",
      name: "ArtistRegister1",
      component: ArtistRegister1,
      meta: metaConfig,
    },

    {
      path: "/artistregisterstep2",
      name: "ArtistRegister2",
      component: ArtistRegister2,
      meta: metaConfig,
    },

    {
      path: "/artistregisterstep3",
      name: "ArtistRegister3",
      component: ArtistRegister3,
      meta: metaConfig,
    },

    {
      path: "/artistregisterstep4",
      name: "ArtistRegister4",
      component: ArtistRegister4,
      meta: metaConfig,
    },

    {
      path: "/sucess",
      name: "Sucess",
      component: Sucess,
      meta: metaConfig,
    },

    {
      path: "/fan-success",
      name: "FanSuccess",
      component: FanSuccess,
      meta: metaConfig,
    },

    {
      path: "/password-sucess",
      name: "PasswordSuccess",
      component: PasswordSuccess,
      meta: metaConfig,
    },
    {
      path: "/addsong",
      name: "adddsong",
      component: adddsong,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) == null ||
          JSON.parse(localStorage.getItem("User")) == undefined
        ) {
          window.location.href = "/login";
        } else {
          next();
        }
      },
      meta: metaConfig,
    },

    {
      path: "/artist-edit",
      name: "Artisteditprofile",
      component: Artisteditprofile,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) == null ||
          JSON.parse(localStorage.getItem("User")) == undefined
        ) {
          window.location.href = "/login";
        }
        next();
      },
      meta: metaConfig,
    },

    {
      path: "/fan-edit",
      name: "FaneditProfile",
      component: FaneditProfile,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) == null ||
          JSON.parse(localStorage.getItem("User")) == undefined
        ) {
          window.location.href = "/login";
        } else {
          next();
        }
      },
      meta: metaConfig,
    },

    {
      path: "/leader-board",
      name: "Leaderboard",
      component: Leaderboard,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) == null ||
          JSON.parse(localStorage.getItem("User")) == undefined
        ) {
          window.location.href = "/login";
        }
        if (JSON.parse(localStorage.getItem("User")).userType == "3") {
          if (JSON.parse(localStorage.getItem("User")).PaymentRecord) {
            if (
              JSON.parse(localStorage.getItem("User")).PaymentRecord
                .paymentType === 1
            ) {
              if (
                JSON.parse(localStorage.getItem("User")).PaymentRecord
                  .isActive === 1
              ) {
                next();
              } else {
                window.location.href = "/fan-profile";
              }
            } else {
              if (
                JSON.parse(localStorage.getItem("User")).PaymentRecord
                  .isActive === 1
              ) {
                next();
              } else {
                window.location.href = "/fan-profile";
              }
            }
          } else {
            window.location.href = "/fan-profile";
          }
        } else {
          next();
        }
      },
      meta: metaConfig,
    },

    {
      path: "/live-contest-serise",
      name: "Livecontestserise",
      component: Livecontestserise,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) == null ||
          JSON.parse(localStorage.getItem("User")) == undefined
        ) {
          window.location.href = "/login";
        }
        if (JSON.parse(localStorage.getItem("User")).userType == "3") {
          next();
        } else {
          window.location.href = "/profile";
        }
      },
      meta: metaConfig,
    },

    {
      path: "/tournament-result/:id",
      name: "TournamentResult",
      component: TournamentResult,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) == null ||
          JSON.parse(localStorage.getItem("User")) == undefined
        ) {
          window.location.href = "/login";
        }
        if (JSON.parse(localStorage.getItem("User")).userType == "3") {
          next();
        } else {
          window.location.href = "/profile";
        }
      },
      meta: metaConfig,
    },

    {
      path: "/top-three-result",
      name: "TopThreeResult",
      component: TopThreeResult,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) == null ||
          JSON.parse(localStorage.getItem("User")) == undefined
        ) {
          window.location.href = "/login";
        }
        if (JSON.parse(localStorage.getItem("User")).userType == "3") {
          next();
        } else {
          window.location.href = "/profile";
        }
      },
      meta: metaConfig,
    },

    // for social followers //
    {
      path: "/social-followers",
      name: "SocialFollowers",
      component: SocialFollowers,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) == null ||
          JSON.parse(localStorage.getItem("User")) == undefined
        ) {
          window.location.href = "/login";
        } else {
          next();
        }
      },
      meta: metaConfig,
    },

    // for membership popup //
    {
      path: "/membership-popup",
      name: "MembershipPopup",
      component: MembershipPopup,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) == null ||
          JSON.parse(localStorage.getItem("User")) == undefined
        ) {
          window.location.href = "/login";
        }
        if (JSON.parse(localStorage.getItem("User")).userType == "3") {
          if (!JSON.parse(localStorage.getItem("User")).PaymentRecord) {
            next();
          } else {
            window.location.href = "/leader-board";
          }
        } else {
          window.location.href = "/profile";
        }
      },
      meta: metaConfig,
    },

    // for contest music //
    {
      path: "/contest-music",
      name: "contestMusic",
      component: contestMusic,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) == null ||
          JSON.parse(localStorage.getItem("User")) == undefined
        ) {
          window.location.href = "/login";
        }
        if (JSON.parse(localStorage.getItem("User")).userType == "2") {
          next();
        } else {
          window.location.href = "/fan-profile";
        }
      },
      meta: metaConfig,
    },

    // for analytics //
    {
      path: "/analytics",
      name: "analytics",
      component: analytics,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) == null ||
          JSON.parse(localStorage.getItem("User")) == undefined
        ) {
          window.location.href = "/login";
        }
        if (JSON.parse(localStorage.getItem("User")).userType == "2") {
          next();
        } else {
          next();
        }
      },
      meta: metaConfig,
    },

    // album share route
    {
      path: "/album-view/:id",
      name: "albumShare",
      component: albumShare,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) == null ||
          JSON.parse(localStorage.getItem("User")) == undefined
        ) {
          window.location.href = "/login";
        } else {
          next();
        }
      },
      meta: metaConfig,
    },

    // payment for APP route
    {
      path: "/makePayment",
      name: "makePayment",
      component: makePayment,
      props: true,
      meta: metaConfig,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) != null ||
          JSON.parse(localStorage.getItem("User")) != undefined
        ) {
          next({ path: "/profile" });
        } else {
          next();
        }
      },
    },

    // check user valid or not route
    {
      path: "/subscribe/:token",
      name: "subscribe",
      component: subscribe,
      meta: metaConfig,
      beforeEnter: (to, from, next) => {
        if (JSON.parse(localStorage.getItem("User"))) {
          next({ path: "/fan-profile" });
        } else {
          next();
        }
      },
    },

    // User Agreement route
    {
      path: "/user-agreement",
      name: "UserAgreement",
      component: UserAgreement,
      meta: metaConfig,
      beforeEnter: (to, from, next) => {
        next();
      },
    },

    // fan Agreement route
    {
      path: "/fan-agreement",
      name: "FanAgreement",
      component: FanAgreement,
      meta: metaConfig,
      beforeEnter: (to, from, next) => {
        next();
      },
    },

    // Privacy Policy route
    {
      path: "/privacy-cookies-policy",
      name: "PrivacyPolicy",
      component: PrivacyPolicy,
      meta: metaConfig,
      beforeEnter: (to, from, next) => {
        next();
      },
    },

    // Disclaimer route
    {
      path: "/disclaimer",
      name: "Disclaimer",
      component: Disclaimer,
      meta: metaConfig,
      beforeEnter: (to, from, next) => {
        next();
      },
    },

    // competition work flow route
    {
      path: "/competition-work-flow",
      name: "CompetitionWorkFlow",
      component: CompetitionWorkFlow,
      meta: metaConfig,
      beforeEnter: (to, from, next) => {
        next();
      },
    },

    // payment success route
    {
      path: "/payment-success",
      name: "PaymentSuccess",
      component: PaymentSuccess,
      meta: metaConfig,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) != null ||
          JSON.parse(localStorage.getItem("User")) != undefined
        ) {
          next({ path: "/login" });
        } else {
          next();
        }
      },
    },
    // auth home route
    {
      path: "/miv-home",
      name: "AuthHome",
      component: AuthHome,
      meta: metaConfig,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) == null ||
          JSON.parse(localStorage.getItem("User")) == undefined
        ) {
          next({ path: "/fan-profile" });
        } else {
          next();
        }
      },
    },

    // support page route
    {
      path: "/support",
      name: "Support",
      component: Support,
      meta: metaConfig,
      beforeEnter: (to, from, next) => {
        if (JSON.parse(localStorage.getItem("User"))) {
          next({ path: "/profile" });
        } else {
          next();
        }
      },
    },

    // artist signup page route
    {
      path: "/artist-signup",
      name: "ArtistSignup",
      component: ArtistSignup,
      meta: metaConfig,
      beforeEnter: (to, from, next) => {
        next();
      },
    },
    // how what why page route
    {
      path: "/how-what-why",
      name: "HowWhatWhy",
      component: HowWhatWhy,
      meta: metaConfig,
      beforeEnter: (to, from, next) => {
        next();
      },
    },

    {
      path: "/setting-autoplay",
      name: "AutoPlaySetup",
      component: AutoPlaySetup,
      meta: metaConfig,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) == null ||
          JSON.parse(localStorage.getItem("User")) == undefined
        ) {
          window.location.href = "/login";
        } else if (
          JSON.parse(localStorage.getItem("User")).PaymentRecord.isActive == 1
        ) {
          next();
        } else {
          next({ path: "/" });
        }
      },
    },

    {
      path: "/autoplay-album-list",
      name: "AutoPlayAlumb",
      component: AutoPlayAlumb,
      meta: metaConfig,
      beforeEnter: (to, from, next) => {
        if (
          JSON.parse(localStorage.getItem("User")) == null ||
          JSON.parse(localStorage.getItem("User")) == undefined
        ) {
          window.location.href = "/login";
        } else if (
          JSON.parse(localStorage.getItem("User")).PaymentRecord.isActive ==
            1 &&
          JSON.parse(localStorage.getItem("User")).userType == "3"
        ) {
          next();
        } else {
          next({ path: "/" });
        }
      },
    },

    // elavon payment route
    // {
    //   path: '/elavon-payment',
    //   name: 'elavonPayment',
    //   component:elavonPayment,
    //   meta: metaConfig,
    //   beforeEnter: (to, from, next) => {
    //     next();
    //   }
    // },

    { path: "*", redirect: "/" },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
