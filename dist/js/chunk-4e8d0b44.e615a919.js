(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e8d0b44"],{"279a":function(t,e,s){},"817d":function(t,e,s){"use strict";var a=s("279a"),i=s.n(a);i.a},"86d0":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"profile-page-header"},[s("div",{staticClass:"header-wraper"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row align-items-center justify-content-between"},[s("div",{staticClass:"logo inner-page"},[s("router-link",{attrs:{to:""}},[s("img",{attrs:{src:"/assets/images/Music-Equalizer-v3.png",alt:""}})])],1),s("div"),s("div",{staticClass:"desktop-profile-menu"},[s("ul",[s("li",[s("router-link",{attrs:{to:"/profile"}},[s("span",{staticClass:"menu-profile-img"},[1==t.$store.state.profilepicture?s("img",{attrs:{src:"/assets/images/Spinner.gif",alt:""}}):t._e(),null==t.$store.state.profilepicture?s("img",{attrs:{src:"/assets/images/default_artist.png",alt:""}}):s("img",{attrs:{src:t.$store.state.profilepicture,alt:""}})])])],1),s("li",["3"==t.userType?s("div",[s("router-link",{attrs:{to:"/myplaylist"}},[s("i",{staticClass:"icon-music-player"})])],1):s("div",[s("router-link",{attrs:{to:"/analytics"}},[s("i",{staticClass:"icon-analytics"})])],1)]),s("li",[s("router-link",{attrs:{to:"/searchartist"}},[s("i",{staticClass:"icon-search"})])],1),"2"==t.userType?s("li",[s("router-link",{attrs:{to:"/leader-board"}},[s("i",{staticClass:"icon-leaderboard"})])],1):t._e(),"3"==t.userType?s("li",[s("router-link",{attrs:{to:"/startcontest"}},[s("i",{staticClass:"icon-leaderboard"})])],1):t._e(),t._m(0)])]),s("div",{staticClass:"header-right-menu"},[t._m(1),s("div",{staticClass:"right-menu-box"},[s("nav",{staticClass:"navigation"},[s("ul",[s("li",[t._m(2),s("ul",{staticClass:"profile-child-memu"},[s("li",["3"==t.user.userType?s("router-link",{attrs:{to:"/fan-edit"}},[t._v("Information")]):t._e()],1),s("li",["2"==t.user.userType?s("router-link",{attrs:{to:"/artist-edit"}},[t._v("Information")]):t._e()],1),"3"==t.user.userType?s("li",[s("a",{attrs:{href:"javascript:;"},on:{click:t.changedata}},[t._v("Payment method")])]):t._e(),t.isPaidMember&&"3"==t.user.userType?s("li",[s("router-link",{attrs:{to:"/setting-autoplay"}},[t._v("Setting for Auto-play")])],1):t._e()])]),"3"==t.user.userType?s("li",[t._m(3),s("ul",{staticClass:"profile-child-memu"},[t.user.PaymentRecord?t._e():s("li",[s("router-link",{attrs:{to:"/membership-popup"}},[t._v("Leaderboard")])],1),t.user.PaymentRecord&&0===t.user.PaymentRecord.isActive?s("li",[s("router-link",{attrs:{to:"/membership-popup"}},[t._v("Leaderboard")])],1):t._e(),t.user.PaymentRecord&&1===t.user.PaymentRecord.isActive?s("li",[s("router-link",{attrs:{to:"/leader-board"}},[t._v("Leaderboard")])],1):t._e(),s("li",[s("router-link",{attrs:{to:"/competition-work-flow"}},[t._v("How it works")])],1)]),s("ul",{staticClass:"profile-child-memu"},[s("li",[s("router-link",{attrs:{to:"/analytics"}},[t._v("Analytics")])],1)])]):t._e(),"2"==t.user.userType?s("li",[t._m(4),s("ul",{staticClass:"profile-child-memu"},[s("li",[s("router-link",{attrs:{to:"/competition-work-flow"}},[t._v("How it works")])],1)])]):t._e(),s("li",[t._m(5),s("ul",{staticClass:"profile-child-memu"},[s("li",[s("router-link",{attrs:{to:"/invite"}},[t._v("Invite")])],1),s("li",[s("router-link",{attrs:{to:"artist-change-password"}},[t._v("Change Password")])],1),t._m(6)])]),s("li",[t._m(7),s("ul",{staticClass:"profile-child-memu"},[s("li",[s("router-link",{attrs:{to:"/report"}},[t._v("Report")])],1),"2"==t.user.userType?s("li",[s("router-link",{attrs:{to:"/user-agreement"}},[t._v("Legal")])],1):t._e(),t.isPaidMember&&"3"==t.user.userType?s("li",[s("router-link",{attrs:{to:"/setting-autoplay"}},[t._v("Setting for Auto-play")])],1):t._e(),s("li",[s("router-link",{attrs:{to:"/privacy-cookies-policy"}},[t._v("Privacy")])],1)])])])])])])])])]),s("div",{staticClass:"modal fade",attrs:{id:"logoutModal"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered"},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-body"},[s("img",{attrs:{src:"/assets/images/log-out-modal-icon.png"}}),s("p",{staticClass:"sign-out-modal-text"},[t._v("\n            Are you sure you want to\n            Logout?\n          ")]),s("p",{staticClass:"modal-btn-para"},[s("button",{staticClass:"logout-btn fan-play-btn",attrs:{type:"button"},on:{click:t.logout}},[t._v("Yes")])]),t._m(8)])])])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("a",{staticClass:"top-menu-profile",attrs:{href:"javascript:;"}},[s("i",{staticClass:"icon-new-menu"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn-menu-button-close-desk",attrs:{type:"button"}},[s("i",{staticClass:"icon-close"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{href:"javascript:;"}},[s("i",{staticClass:"icon-settings"}),t._v("Settings\n                  ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{href:"javascript:;"}},[s("i",{staticClass:"icon-settings"}),t._v("Records\n                  ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{href:"javascript:;"}},[s("i",{staticClass:"icon-settings"}),t._v("Records\n                  ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{href:"javascript:;"}},[s("i",{staticClass:"icon-user"}),t._v("Account\n                  ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("a",{staticClass:"log_out_modal_btn",attrs:{href:"javascript:;","data-toggle":"modal","data-target":"#logoutModal"}},[t._v("Logout")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{href:"javascript:;"}},[s("i",{staticClass:"icon-about"}),t._v("About\n                  ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"modal-btn-para mb-0"},[s("a",{staticClass:"modal-close-btn",attrs:{href:"javascript:;","data-dismiss":"modal"}},[t._v("Cancel")])])}],n=s("f499"),r=s.n(n),o=s("41cb"),c=s("6bf9"),l=s("b7d6"),u={name:"AuthHeader",props:{msg:String},data:function(){return{userType:"",user:"",profilemage:1,isPaidMember:!1}},methods:{checkIsPaidMember:function(){var t=JSON.parse(localStorage.getItem("User"));null==t&&void 0==t||void 0!=t.PaymentRecord&&void 0!=t.PaymentRecord.isActive&&1==t.PaymentRecord.isActive&&(this.isPaidMember=!0)},changedata:function(){this.$store.state.ispopup=!1,o["a"].push({path:"/addcard"})},logout:function(){localStorage.removeItem("User"),localStorage.removeItem("stripeId"),localStorage.removeItem("UserType"),localStorage.removeItem("Token"),localStorage.removeItem("contestMusicCount"),localStorage.removeItem("userEmail"),window.location.href="/login"}},mounted:function(){$(".btn-menu-button").click(function(){$(".header-right").addClass("active")}),$(".btn-menu-button-close").click(function(){$(".header-right").removeClass("active")}),$(".top-menu-profile").click(function(){$(".header-right-menu").addClass("show")}),$(".btn-menu-button-close-desk").click(function(){$(".header-right-menu").removeClass("show")}),this.checkIsPaidMember()},created:function(){var t=this;this.userType=JSON.parse(localStorage.getItem("UserType")),l["a"].getUser("",function(e){localStorage.setItem("User",r()(e)),t.user=JSON.parse(localStorage.getItem("User")),t.user.profilePicture?t.$store.state.profilepicture=c["a"].profile_image_path+t.user.profilePicture:t.$store.state.profilepicture=null})},updated:function(){$(".btn-menu-button").click(function(){$(".header-right").addClass("active")}),$(".btn-menu-button-close").click(function(){$(".header-right").removeClass("active")}),$(".top-menu-profile").click(function(){$(".header-right-menu").addClass("show")}),$(".btn-menu-button-close-desk").click(function(){$(".header-right-menu").removeClass("show")})}},m=u,d=(s("d287"),s("2877")),v=Object(d["a"])(m,a,i,!1,null,"307dc479",null);e["a"]=v.exports},a6ee:function(t,e,s){},b861:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"footer-colum"},[s("img",{staticClass:"flogo",attrs:{src:"/assets/images/Music-Equalizer-v3.png",alt:""}}),s("h3",[t._v("MiV")]),s("h4",{staticClass:"cursr",on:{click:function(e){return t.$router.push("how-what-why")}}},[t._v("How, What and Why")]),s("h4",{staticClass:"cursr",on:{click:function(e){return t.$router.push("artist-signup")}}},[t._v("Artist Landing Page")])]),t._m(0),t._m(1),t._m(2)]),s("div",{staticClass:"footer-bottom"},[t._m(3),s("p",{staticClass:"copyright-text"},[t._v("© MiV LLC. "+t._s(t.currentYear)+", All Rights Reserved")])])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer-colum"},[s("h3",{staticClass:"footer-title"},[t._v("Friends Center for")]),s("div",{staticClass:"friends_logo"},[s("img",{attrs:{src:"/assets/images/f_artist.png",alt:""}}),s("img",{attrs:{src:"/assets/images/f_fans.png",alt:""}})]),s("div",{staticClass:"footer_accor"},[s("h6",[s("a",{attrs:{href:"javascript:;"}},[t._v("Members")])]),s("p",[t._v("\n            If you have any interesting and fun comments we\n            may add them here send to\n            "),s("a",{attrs:{href:"mailto:admin@musicisvivid.com"}},[t._v("admin@musicisvivid.com")]),t._v("\n            and Please keep this short,\n            add a picture if you want.\n          ")])]),s("div",{staticClass:"footer_accor"},[s("h6",[s("a",{attrs:{href:"javascript:;"}},[t._v("Artist")])]),s("p",[t._v("\n            If you have any interesting recommendations or a story to share please feel free\n            to send us an email at\n            "),s("a",{attrs:{href:"mailto:admin@musicisvivid.com"}},[t._v("admin@musicisvivid.com")]),t._v(" and also\n            state if you are a Member or Non-Member. Please keep\n            messaging short. If you have a story we may share it here.\n          ")])]),s("div",{staticClass:"footer_accor"},[s("h6",[s("a",{attrs:{href:"javascript:;"}},[t._v("Affiliates")])]),s("p",[t._v("\n            We may list Affiliates (for example, aggregators who participate and those that do\n            not) and possibly any positive input from affiliates for Members and Artists.\n          ")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer-colum"},[s("h3",{staticClass:"footer-title"},[t._v("Help")]),s("p",[t._v("\n          If you have questions or comments\n          regarding Navigation, or Report an Issue.\n          Please Send your information to\n          "),s("a",{attrs:{href:"mailto:admin@musicisvivid.com"}},[t._v("admin@musicisvivid.com")]),t._v(".\n          Please state in the Subject Line,\n          Navigation Issue or Report an Issue.\n        ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer-colum"},[s("div",{staticClass:"footer_app"},[s("h3",{staticClass:"footer-title no-border"},[t._v("Download The MiV App")]),s("a",{staticClass:"footer-store-btn",attrs:{href:"https://play.google.com/store/apps/details?id=com.techno.miv.miv&hl=en",target:"_blank"}},[s("img",{attrs:{src:"assets/images/footer-gplay-btn.png",alt:""}})]),s("a",{staticClass:"footer-store-btn",attrs:{href:"https://apps.apple.com/in/app/music-is-vivid/id1489035451",target:"_blank"}},[s("img",{attrs:{src:"assets/images/footer-appstore-btn.png",alt:""}})])]),s("div",{staticClass:"social_link"},[s("h3",{staticClass:"footer-title no-border"},[t._v("Follow us")]),s("nav",{staticClass:"footer-social"},[s("ul",[s("li",[s("a",{attrs:{href:"https://www.facebook.com/musicisvivid/",target:"_blank"}},[s("i",{staticClass:"icon-facebook"})])]),s("li",[s("a",{attrs:{href:"https://www.instagram.com/musicisvivid/",target:"_blank"}},[s("i",{staticClass:"icon-instagram"})])]),s("li",[s("a",{attrs:{href:"https://twitter.com/musicisvivid",target:"_blank"}},[s("i",{staticClass:"icon-twitter"})])]),s("li",[s("a",{attrs:{href:"https://in.pinterest.com/musicisvivid/pins/",target:"_blank"}},[s("i",{staticClass:"icon-pinterest"})])])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"footer-bottom-menu"},[s("ul",[s("li",[s("a",{attrs:{href:"/user-agreement",target:"_blank"}},[t._v("Terms of Use")])]),s("li",[s("a",{attrs:{href:"/privacy-cookies-policy",target:"_blank"}},[t._v("Privacy & Cookies Policy")])]),s("li",[s("a",{attrs:{href:"/disclaimer",target:"_blank"}},[t._v("Disclaimer")])]),s("li",[s("a",{attrs:{href:"http://blog.musicisvivid.com",target:"_blank"}},[t._v("Blog")])])])])}],n={name:"ComonFotter",props:{msg:String},created:function(){this.currentYear=(new Date).getFullYear()}};$("body").on("click",".footer_accor h6 a",function(){var t=$(this).parent().parent(".footer_accor");t.children("p").is(":visible")?t.children("p").slideUp(400):($(".footer_accor p").slideUp(400),t.children("p").slideDown(400))});var r=n,o=(s("817d"),s("2877")),c=Object(o["a"])(r,a,i,!1,null,"eae83bd2",null);e["a"]=c.exports},c6b3:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"homegb_new"},[s("AppHeader"),s("div",{staticClass:"main-banner"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-between align-items-center"},[s("div",{staticClass:"banner-image"},[s("div",{staticClass:"custom-video-container"},[s("img",{attrs:{src:"/assets/images/frame.png",alt:""}}),s("div",{staticClass:"frame-video-container"},[s("video-player",{ref:"videoPlayer",staticClass:"video-player-box",attrs:{options:t.playerOptions,playsinline:!0},on:{play:function(e){return t.onPlayerPlay(e)},pause:function(e){return t.onPlayerPause(e)},ended:function(e){return t.onPlayerEnded(e)},loadeddata:function(e){return t.onPlayerLoadeddata(e)},waiting:function(e){return t.onPlayerWaiting(e)},playing:function(e){return t.onPlayerPlaying(e)},timeupdate:function(e){return t.onPlayerTimeupdate(e)},canplay:function(e){return t.onPlayerCanplay(e)},canplaythrough:function(e){return t.onPlayerCanplaythrough(e)},ready:t.playerReadied,statechanged:function(e){return t.playerStateChanged(e)}}})],1)])]),t._m(0)])]),s("div",{staticClass:"home_vote_section"},[s("div",{staticClass:"container"},[t._m(1),s("h2",{staticClass:"home-sub-heading"},[t._v("Great Video and Sound Quality \n               ")]),t._m(2),s("div",{staticClass:"flexdiv"},[s("div",{staticClass:"home_vote_section_each"},[s("img",{attrs:{src:"/assets/images/sl1.png",alt:""}}),s("div",{staticClass:"home_vote_section_each_content"},[s("a",{staticClass:"block-anchor",attrs:{href:"javacsript:;"},on:{click:t.openModal}},[t._m(3)]),s("p",{staticClass:"btn-container"})])]),t._m(4),t._m(5),t._m(6)])])]),t._m(7),t._m(8),s("div",{staticClass:"member_section"},[s("div",{staticClass:"container"},[s("h4",{staticClass:"banner-title"},[t._v("Sign Up Now")]),s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col-md-6 col-lg-6"},[s("div",{staticClass:"membership_plan_outer clearfix"},[s("div",{staticClass:"membership_plan"},[s("h3",[t._v("Membership Plan")]),s("p",[t._v("First 7 Days Free Only Members Vote")]),t._m(9),s("div",{staticClass:"member_price"},[t._v("\n                              For\n                              "),s("sup",[t._v("$")]),s("font",[t._v("3.99/")]),t._v("mo\n                           ")],1),s("span",[t._v("Cancel anytime")])])])]),s("div",{staticClass:"col-md-6 col-lg-6 small-device-center"},[s("span",{staticClass:"member_price"},[s("font",[t._v("$3.99/")]),t._v("Month\n                     ")],1),s("div",{staticClass:"pl-35"},[s("span",[t._v("Cancel anytime")]),s("p",{staticClass:"rightdidep"},[t._v("First 7 Days Free Only Members Vote")]),"3"==t.user.userType?s("button",{staticClass:"btn btn-default subscribenow",attrs:{type:"button"},on:{click:function(e){return t.$router.push("/contest/1")}}},[t._v("\n                        Subscribe Now\n                        ")]):t._e()])])])])])]),s("div",{staticClass:"custom-pop-up",attrs:{id:"custom-pop-up"}},[s("div",{staticClass:"custom-modal-overlay",attrs:{id:"custom-modal-overlay"},on:{click:t.closeModal}}),s("button",{staticClass:"custom-close-btn",on:{click:t.closeModal}},[s("img",{attrs:{src:"/assets/images/close.svg"}})]),t._m(10)]),s("AppFooter")],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"banner-content"},[s("h1",{staticClass:"banner-title"},[s("em",[t._v("The")]),t._v(" Music Competition App\n                  ")]),s("h2",[t._v("By MiV ...Music is Vivid")]),s("div",{staticClass:"download_apps_button"},[s("a",{staticClass:"store-button",attrs:{href:"https://play.google.com/store/apps/details?id=com.techno.miv.miv&hl=en",target:"_blank"}},[s("img",{attrs:{src:"assets/images/google-play-btn.png",alt:""}})]),s("a",{staticClass:"store-button",attrs:{href:"https://apps.apple.com/in/app/music-is-vivid/id1489035451",target:"_blank"}},[s("img",{attrs:{src:"assets/images/apple-store-btn.png",alt:""}})])]),s("h2",{staticClass:"new-title"},[t._v("Tomorrow's Stars Today")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h3",[s("img",{attrs:{src:"/assets/images/positive-vote.svg",alt:""}}),s("em",[t._v("Only Members can vote ... Fans are 100% in Charge")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h3",{staticClass:"noad-heading"},[s("span",[t._v("NO ADS")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"boldtitle"},[t._v("Fan Vote "),s("i",{staticClass:"fa fa-heart link-icon",attrs:{"aria-hidden":"true"}}),s("i",{staticClass:"fa fa-thumbs-up link-icon",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home_vote_section_each"},[s("img",{attrs:{src:"/assets/images/sl2.png",alt:""}}),s("div",{staticClass:"home_vote_section_each_content"},[t._v("Fans 100% in Charge")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home_vote_section_each"},[s("img",{attrs:{src:"/assets/images/s13-new.jpg",alt:""}}),s("div",{staticClass:"home_vote_section_each_content"},[t._v("Live Contest Voting")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home_vote_section_each"},[s("img",{attrs:{src:"/assets/images/sl4-new.jpg",alt:""}}),s("div",{staticClass:"home_vote_section_each_content"},[t._v("Contest Genre Winner")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"fan_favourite"},[s("div",{staticClass:"fan_favourite_inner"},[s("div",{staticClass:"container"},[s("h4",[t._v("Fan Favorites")]),s("div",{staticClass:"fan_favourite_screen"},[s("div",{staticClass:"fan_favourite_screen_each"},[s("div",{staticClass:"inner-fav-screen"},[s("img",{attrs:{src:"/assets/images/s1.png",alt:""}}),s("div",{staticClass:"fan_favourite_screen_each_content"},[t._v("Group Friends")])])]),s("div",{staticClass:"fan_favourite_screen_each"},[s("div",{staticClass:"inner-fav-screen"},[s("img",{attrs:{src:"/assets/images/my-profile-new-image.png",alt:""}}),s("div",{staticClass:"fan_favourite_screen_each_content"},[t._v("My Profile")])])]),s("div",{staticClass:"fan_favourite_screen_each"},[s("div",{staticClass:"inner-fav-screen"},[s("img",{attrs:{src:"/assets/images/create-playlist-new.png",alt:""}}),s("div",{staticClass:"fan_favourite_screen_each_content"},[t._v("Create Playlist")])])]),s("div",{staticClass:"fan_favourite_screen_each"},[s("div",{staticClass:"inner-fav-screen"},[s("img",{attrs:{src:"/assets/images/s4-new.jpg",alt:""}}),s("div",{staticClass:"fan_favourite_screen_each_content"},[t._v("Fan Sharing")])])]),s("div",{staticClass:"fan_favourite_screen_each"},[s("div",{staticClass:"inner-fav-screen"},[s("img",{attrs:{src:"/assets/images/s5.png",alt:""}}),s("div",{staticClass:"fan_favourite_screen_each_content"},[t._v("Members Only")])])])]),s("div",{staticClass:"buttondiv"})])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"howitworks"},[s("div",{staticClass:"container"},[s("h4",[t._v("How MiV Works")]),s("div",{staticClass:"howitworks_flex"},[s("div",{staticClass:"howitworks_content"},[s("div",{staticClass:"download_apps_button app-store-link"},[s("a",{staticClass:"store-button",attrs:{href:"https://play.google.com/store/apps/details?id=com.techno.miv.miv&hl=en",target:"_blank"}},[s("img",{attrs:{src:"assets/images/google-play-store.png",alt:""}})]),s("a",{staticClass:"store-button",attrs:{href:"https://apps.apple.com/in/app/music-is-vivid/id1489035451",target:"_blank"}},[s("img",{attrs:{src:"assets/images/ios-app-store.png",alt:""}})])]),s("div",{staticClass:"how-its-work-content-container"},[s("div",{staticClass:"howitworks_content_each"},[s("span",{staticClass:"hexagon"},[t._v("1")]),s("span",{staticClass:"text"},[t._v("Fans Are 100% in Charge; Vote in Contests-Follow-Like-Love.")])]),s("div",{staticClass:"howitworks_content_each"},[s("span",{staticClass:"hexagon yellow-bg"},[t._v("2")]),s("span",{staticClass:"text"},[t._v("\n                          New Contest Every 30 minutes, 24 hours in each Genre. \n                           ")])]),s("div",{staticClass:"howitworks_content_each"},[s("span",{staticClass:"hexagon orange-bg"},[t._v("3")]),s("span",{staticClass:"text"},[t._v("\n                          Limited Number of “Best” Independent Artist chosen by “ Fan \nFollowing”. Artist Earn!\n                           ")])]),s("div",{staticClass:"howitworks_content_each"},[s("span",{staticClass:"hexagon green-bg"},[t._v("4")]),s("span",{staticClass:"text"},[t._v("Link to Demo...")])]),s("div",{staticClass:"howitworks_content_each"},[s("span",{staticClass:"hexagon pink-bg"},[t._v("5")]),s("span",{staticClass:"text"},[t._v("\n                         More for Fans; Discover new artist/music, Listen anytime, Build \nPlaylists, Share. Member- Rewards-Events-Special Fans.\n                           ")])])])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("span",{staticClass:"announcement_icon"},[s("img",{attrs:{src:"/assets/images/annoucement.svg"}})]),s("span",[t._v("\n                                 Vote for Your Favorite Artist ..\n                                 Only Members Vote..Your 100% in Charge\n                                 ")])]),s("li",[s("span",{staticClass:"announcement_icon"},[s("img",{attrs:{src:"/assets/images/contest_icon.svg"}})]),s("span",[t._v("Unlimited music contest")])]),s("li",[s("span",{staticClass:"announcement_icon"},[s("img",{attrs:{src:"/assets/images/vote_icon.svg"}})]),s("span",[t._v("\n                                 Only Members Vote, see results and\n                                 get Leaderboard access\n                                 ")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"custom-modal-dialog"},[s("div",{staticClass:"media-container"},[s("img",{attrs:{src:"/assets/images/animation.gif"}})])])}],n=s("86d0"),r=(s("bc3a"),s("b861")),o=(s("fda2"),s("d6d3"),{name:"AuthHome",data:function(){return{playerOptions:{height:"550",width:"250",muted:!1,loop:!0,autoplay:!0,preload:"auto",language:"en",sources:[{type:"video/mp4",src:"/assets/images/banner-image-new.mp4"}]},user:JSON.parse(localStorage.getItem("User"))}},computed:{player:function(){return this.$refs.videoPlayer.player}},components:{AppHeader:n["a"],AppFooter:r["a"]},methods:{onPlayerPlay:function(t){console.log("player play!",this.$refs.videoPlayer)},onPlayerPause:function(t){console.log("player pause!",t)},onPlayerEnded:function(t){},onPlayerLoadeddata:function(t){},onPlayerWaiting:function(t){},onPlayerPlaying:function(t){},onPlayerTimeupdate:function(t){},onPlayerCanplay:function(t){},onPlayerCanplaythrough:function(t){},playerStateChanged:function(t){},playerReadied:function(t){},openModal:function(){document.getElementById("custom-pop-up").classList.add("open"),document.body.classList.add("no-scroll"),document.getElementById("custom-modal-overlay").classList.add("open")},closeModal:function(){document.getElementById("custom-pop-up").classList.remove("open"),document.body.classList.remove("no-scroll"),document.getElementById("custom-modal-overlay").classList.remove("open")},happyDear:function(){console.log("test"),console.log("This is a vue project with node backend")}}}),c=o,l=s("2877"),u=Object(l["a"])(c,a,i,!1,null,null,null);e["default"]=u.exports},d287:function(t,e,s){"use strict";var a=s("a6ee"),i=s.n(a);i.a}}]);
//# sourceMappingURL=chunk-4e8d0b44.e615a919.js.map