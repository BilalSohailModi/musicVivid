(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72d008c2"],{"0b2b":function(t,e,a){"use strict";var s=a("a89c"),i=a.n(s);i.a},"279a":function(t,e,a){},"817d":function(t,e,a){"use strict";var s=a("279a"),i=a.n(s);i.a},8210:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("AppHeader"),a("div",{staticClass:"contest-section"},[t._m(0),a("div",{staticClass:"contest-body"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"contest-body-inner"},[a("h1",{staticClass:"choose-contest"},[t._v("Choose contest Type")]),a("ul",{staticClass:"contest-listing"},[a("li",[a("label",{staticClass:"contest-radio"},[a("input",{attrs:{type:"radio",value:"1",name:"contest_type"},on:{change:t.goToContest}}),t._m(1)])]),a("li",[a("label",{staticClass:"contest-radio"},[a("input",{attrs:{value:"2",type:"radio",name:"contest_type"},on:{change:t.goToContest}}),t._m(2)])])]),a("div",{staticClass:"btnset text-center"},[a("span",{staticClass:"t"},[t._v("For more information")]),a("button",{staticClass:"btn-signin d-inline-block",on:{click:function(e){return t.infoPopup()}}},[a("i",{staticClass:"fa fa-info-circle"}),t._v("  Click here")])])])])])])])]),a("div",{staticClass:"modal contest-modal",attrs:{id:"info-video","data-backdrop":"static","data-keyboard":"false"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("button",{staticClass:"close",attrs:{type:"button","aria-hidden":"true"},on:{click:function(e){return t.closeModel()}}},[t._v("×")])]),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"modal-inner-body"},[a("iframe",{staticClass:"youtube-player",attrs:{id:"player",type:"text/html",src:t.videoSrc,frameborder:"0",allow:"autoplay"}},[t._v("<br />")]),a("div",{staticClass:"text-center"})])])])])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contest-banner"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"contest-banner-inner"},[a("h1",{staticClass:"contest-heading"},[t._v("Contest")])])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("img",{attrs:{src:"/assets/images/live-contest.png",alt:"image"}}),a("img",{staticClass:"check-mark",attrs:{src:"/assets/images/success-img.png"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("img",{attrs:{src:"/assets/images/draft-contest.png",alt:"image"}}),a("img",{staticClass:"check-mark",attrs:{src:"/assets/images/success-img.png"}})])}],r=(a("7514"),a("41cb")),o=a("6bf9"),n=(a("b7d6"),a("9062")),c=a.n(n),l=(a("e40d"),a("86d0")),u=(a("bc3a"),a("b861")),d=a("e166"),m=a.n(d),p=a("e254"),v=(a("4ec3"),{name:"StartContest",props:{msg:String},data:function(){return{songid:"",songlist:[],songids:[],albumInformation:null,playlistid:"",user:JSON.parse(localStorage.getItem("User")),profilemage:null,isLoading:!1,iscoverupload:!1,istiltleGiven:!1,ischacked:!0,coverpictur:1,fullPage:!0,coverpicurl:"",title:"",myPlayList:[],coverFile:"",allpath:o["a"],page:1,title1:"",amBumUserInformation:{},tempsong:[],page1:1,currentsongid:"",videoSrc:""}},components:{AppHeader:l["a"],AppFooter:u["a"],LeftManu:p["a"],Loading:c.a,InfiniteLoading:m.a},methods:{goToContest:function(t){var e=t.target.value;r["a"].push("/contest/".concat(e)),console.log("vote page")},infoPopup:function(){this.videoSrc="https://www.youtube.com/embed/kzoA0kOPhxA?autoplay=1&enablejsapi=1",$("#info-video").modal("show"),$("#info-video").modal({backdrop:"static",keyboard:!1})},closeModel:function(){$("#info-video").modal("hide"),this.videoSrc=""}},created:function(){},mounted:function(){$(".all-check").click(function(){1==$(this).prop("checked")?($(".track-check").prop("checked","true"),$(this).parent(".btn-check").find(".text").text("Deselect All"),$(".playlist-list").find(".dynamic-action-btn").css("display","inline-block")):($(".track-check").prop("checked",!1),$(this).parent(".btn-check").find(".text").text("Select All"),$(".playlist-list").find(".dynamic-action-btn").css("display","none"))})},destroyed:function(){}}),f=v,h=(a("0b2b"),a("2877")),g=Object(h["a"])(f,s,i,!1,null,"63e52b9a",null);e["default"]=g.exports},"86d0":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"profile-page-header"},[a("div",{staticClass:"header-wraper"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row align-items-center justify-content-between"},[a("div",{staticClass:"logo inner-page"},[a("router-link",{attrs:{to:""}},[a("img",{attrs:{src:"/assets/images/Music-Equalizer-v3.png",alt:""}})])],1),a("div"),a("div",{staticClass:"desktop-profile-menu"},[a("ul",[a("li",[a("router-link",{attrs:{to:"/profile"}},[a("span",{staticClass:"menu-profile-img"},[1==t.$store.state.profilepicture?a("img",{attrs:{src:"/assets/images/Spinner.gif",alt:""}}):t._e(),null==t.$store.state.profilepicture?a("img",{attrs:{src:"/assets/images/default_artist.png",alt:""}}):a("img",{attrs:{src:t.$store.state.profilepicture,alt:""}})])])],1),a("li",["3"==t.userType?a("div",[a("router-link",{attrs:{to:"/myplaylist"}},[a("i",{staticClass:"icon-music-player"})])],1):a("div",[a("router-link",{attrs:{to:"/analytics"}},[a("i",{staticClass:"icon-analytics"})])],1)]),a("li",[a("router-link",{attrs:{to:"/searchartist"}},[a("i",{staticClass:"icon-search"})])],1),"2"==t.userType?a("li",[a("router-link",{attrs:{to:"/leader-board"}},[a("i",{staticClass:"icon-leaderboard"})])],1):t._e(),"3"==t.userType?a("li",[a("router-link",{attrs:{to:"/startcontest"}},[a("i",{staticClass:"icon-leaderboard"})])],1):t._e(),t._m(0)])]),a("div",{staticClass:"header-right-menu"},[t._m(1),a("div",{staticClass:"right-menu-box"},[a("nav",{staticClass:"navigation"},[a("ul",[a("li",[t._m(2),a("ul",{staticClass:"profile-child-memu"},[a("li",["3"==t.user.userType?a("router-link",{attrs:{to:"/fan-edit"}},[t._v("Information")]):t._e()],1),a("li",["2"==t.user.userType?a("router-link",{attrs:{to:"/artist-edit"}},[t._v("Information")]):t._e()],1),"3"==t.user.userType?a("li",[a("a",{attrs:{href:"javascript:;"},on:{click:t.changedata}},[t._v("Payment method")])]):t._e(),t.isPaidMember&&"3"==t.user.userType?a("li",[a("router-link",{attrs:{to:"/setting-autoplay"}},[t._v("Setting for Auto-play")])],1):t._e()])]),"3"==t.user.userType?a("li",[t._m(3),a("ul",{staticClass:"profile-child-memu"},[t.user.PaymentRecord?t._e():a("li",[a("router-link",{attrs:{to:"/membership-popup"}},[t._v("Leaderboard")])],1),t.user.PaymentRecord&&0===t.user.PaymentRecord.isActive?a("li",[a("router-link",{attrs:{to:"/membership-popup"}},[t._v("Leaderboard")])],1):t._e(),t.user.PaymentRecord&&1===t.user.PaymentRecord.isActive?a("li",[a("router-link",{attrs:{to:"/leader-board"}},[t._v("Leaderboard")])],1):t._e(),a("li",[a("router-link",{attrs:{to:"/competition-work-flow"}},[t._v("How it works")])],1)]),a("ul",{staticClass:"profile-child-memu"},[a("li",[a("router-link",{attrs:{to:"/analytics"}},[t._v("Analytics")])],1)])]):t._e(),"2"==t.user.userType?a("li",[t._m(4),a("ul",{staticClass:"profile-child-memu"},[a("li",[a("router-link",{attrs:{to:"/competition-work-flow"}},[t._v("How it works")])],1)])]):t._e(),a("li",[t._m(5),a("ul",{staticClass:"profile-child-memu"},[a("li",[a("router-link",{attrs:{to:"/invite"}},[t._v("Invite")])],1),a("li",[a("router-link",{attrs:{to:"artist-change-password"}},[t._v("Change Password")])],1),t._m(6)])]),a("li",[t._m(7),a("ul",{staticClass:"profile-child-memu"},[a("li",[a("router-link",{attrs:{to:"/report"}},[t._v("Report")])],1),"2"==t.user.userType?a("li",[a("router-link",{attrs:{to:"/user-agreement"}},[t._v("Legal")])],1):t._e(),t.isPaidMember&&"3"==t.user.userType?a("li",[a("router-link",{attrs:{to:"/setting-autoplay"}},[t._v("Setting for Auto-play")])],1):t._e(),a("li",[a("router-link",{attrs:{to:"/privacy-cookies-policy"}},[t._v("Privacy")])],1)])])])])])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"logoutModal"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-body"},[a("img",{attrs:{src:"/assets/images/log-out-modal-icon.png"}}),a("p",{staticClass:"sign-out-modal-text"},[t._v("\n            Are you sure you want to\n            Logout?\n          ")]),a("p",{staticClass:"modal-btn-para"},[a("button",{staticClass:"logout-btn fan-play-btn",attrs:{type:"button"},on:{click:t.logout}},[t._v("Yes")])]),t._m(8)])])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{staticClass:"top-menu-profile",attrs:{href:"javascript:;"}},[a("i",{staticClass:"icon-new-menu"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"btn-menu-button-close-desk",attrs:{type:"button"}},[a("i",{staticClass:"icon-close"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"javascript:;"}},[a("i",{staticClass:"icon-settings"}),t._v("Settings\n                  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"javascript:;"}},[a("i",{staticClass:"icon-settings"}),t._v("Records\n                  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"javascript:;"}},[a("i",{staticClass:"icon-settings"}),t._v("Records\n                  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"javascript:;"}},[a("i",{staticClass:"icon-user"}),t._v("Account\n                  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{staticClass:"log_out_modal_btn",attrs:{href:"javascript:;","data-toggle":"modal","data-target":"#logoutModal"}},[t._v("Logout")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"javascript:;"}},[a("i",{staticClass:"icon-about"}),t._v("About\n                  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"modal-btn-para mb-0"},[a("a",{staticClass:"modal-close-btn",attrs:{href:"javascript:;","data-dismiss":"modal"}},[t._v("Cancel")])])}],r=a("f499"),o=a.n(r),n=a("41cb"),c=a("6bf9"),l=a("b7d6"),u={name:"AuthHeader",props:{msg:String},data:function(){return{userType:"",user:"",profilemage:1,isPaidMember:!1}},methods:{checkIsPaidMember:function(){var t=JSON.parse(localStorage.getItem("User"));null==t&&void 0==t||void 0!=t.PaymentRecord&&void 0!=t.PaymentRecord.isActive&&1==t.PaymentRecord.isActive&&(this.isPaidMember=!0)},changedata:function(){this.$store.state.ispopup=!1,n["a"].push({path:"/addcard"})},logout:function(){localStorage.removeItem("User"),localStorage.removeItem("stripeId"),localStorage.removeItem("UserType"),localStorage.removeItem("Token"),localStorage.removeItem("contestMusicCount"),localStorage.removeItem("userEmail"),window.location.href="/login"}},mounted:function(){$(".btn-menu-button").click(function(){$(".header-right").addClass("active")}),$(".btn-menu-button-close").click(function(){$(".header-right").removeClass("active")}),$(".top-menu-profile").click(function(){$(".header-right-menu").addClass("show")}),$(".btn-menu-button-close-desk").click(function(){$(".header-right-menu").removeClass("show")}),this.checkIsPaidMember()},created:function(){var t=this;this.userType=JSON.parse(localStorage.getItem("UserType")),l["a"].getUser("",function(e){localStorage.setItem("User",o()(e)),t.user=JSON.parse(localStorage.getItem("User")),t.user.profilePicture?t.$store.state.profilepicture=c["a"].profile_image_path+t.user.profilePicture:t.$store.state.profilepicture=null})},updated:function(){$(".btn-menu-button").click(function(){$(".header-right").addClass("active")}),$(".btn-menu-button-close").click(function(){$(".header-right").removeClass("active")}),$(".top-menu-profile").click(function(){$(".header-right-menu").addClass("show")}),$(".btn-menu-button-close-desk").click(function(){$(".header-right-menu").removeClass("show")})}},d=u,m=(a("d287"),a("2877")),p=Object(m["a"])(d,s,i,!1,null,"307dc479",null);e["a"]=p.exports},a6ee:function(t,e,a){},a89c:function(t,e,a){},b861:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"footer-colum"},[a("img",{staticClass:"flogo",attrs:{src:"/assets/images/Music-Equalizer-v3.png",alt:""}}),a("h3",[t._v("MiV")]),a("h4",{staticClass:"cursr",on:{click:function(e){return t.$router.push("how-what-why")}}},[t._v("How, What and Why")]),a("h4",{staticClass:"cursr",on:{click:function(e){return t.$router.push("artist-signup")}}},[t._v("Artist Landing Page")])]),t._m(0),t._m(1),t._m(2)]),a("div",{staticClass:"footer-bottom"},[t._m(3),a("p",{staticClass:"copyright-text"},[t._v("© MiV LLC. "+t._s(t.currentYear)+", All Rights Reserved")])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-colum"},[a("h3",{staticClass:"footer-title"},[t._v("Friends Center for")]),a("div",{staticClass:"friends_logo"},[a("img",{attrs:{src:"/assets/images/f_artist.png",alt:""}}),a("img",{attrs:{src:"/assets/images/f_fans.png",alt:""}})]),a("div",{staticClass:"footer_accor"},[a("h6",[a("a",{attrs:{href:"javascript:;"}},[t._v("Members")])]),a("p",[t._v("\n            If you have any interesting and fun comments we\n            may add them here send to\n            "),a("a",{attrs:{href:"mailto:admin@musicisvivid.com"}},[t._v("admin@musicisvivid.com")]),t._v("\n            and Please keep this short,\n            add a picture if you want.\n          ")])]),a("div",{staticClass:"footer_accor"},[a("h6",[a("a",{attrs:{href:"javascript:;"}},[t._v("Artist")])]),a("p",[t._v("\n            If you have any interesting recommendations or a story to share please feel free\n            to send us an email at\n            "),a("a",{attrs:{href:"mailto:admin@musicisvivid.com"}},[t._v("admin@musicisvivid.com")]),t._v(" and also\n            state if you are a Member or Non-Member. Please keep\n            messaging short. If you have a story we may share it here.\n          ")])]),a("div",{staticClass:"footer_accor"},[a("h6",[a("a",{attrs:{href:"javascript:;"}},[t._v("Affiliates")])]),a("p",[t._v("\n            We may list Affiliates (for example, aggregators who participate and those that do\n            not) and possibly any positive input from affiliates for Members and Artists.\n          ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-colum"},[a("h3",{staticClass:"footer-title"},[t._v("Help")]),a("p",[t._v("\n          If you have questions or comments\n          regarding Navigation, or Report an Issue.\n          Please Send your information to\n          "),a("a",{attrs:{href:"mailto:admin@musicisvivid.com"}},[t._v("admin@musicisvivid.com")]),t._v(".\n          Please state in the Subject Line,\n          Navigation Issue or Report an Issue.\n        ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-colum"},[a("div",{staticClass:"footer_app"},[a("h3",{staticClass:"footer-title no-border"},[t._v("Download The MiV App")]),a("a",{staticClass:"footer-store-btn",attrs:{href:"https://play.google.com/store/apps/details?id=com.techno.miv.miv&hl=en",target:"_blank"}},[a("img",{attrs:{src:"assets/images/footer-gplay-btn.png",alt:""}})]),a("a",{staticClass:"footer-store-btn",attrs:{href:"https://apps.apple.com/in/app/music-is-vivid/id1489035451",target:"_blank"}},[a("img",{attrs:{src:"assets/images/footer-appstore-btn.png",alt:""}})])]),a("div",{staticClass:"social_link"},[a("h3",{staticClass:"footer-title no-border"},[t._v("Follow us")]),a("nav",{staticClass:"footer-social"},[a("ul",[a("li",[a("a",{attrs:{href:"https://www.facebook.com/musicisvivid/",target:"_blank"}},[a("i",{staticClass:"icon-facebook"})])]),a("li",[a("a",{attrs:{href:"https://www.instagram.com/musicisvivid/",target:"_blank"}},[a("i",{staticClass:"icon-instagram"})])]),a("li",[a("a",{attrs:{href:"https://twitter.com/musicisvivid",target:"_blank"}},[a("i",{staticClass:"icon-twitter"})])]),a("li",[a("a",{attrs:{href:"https://in.pinterest.com/musicisvivid/pins/",target:"_blank"}},[a("i",{staticClass:"icon-pinterest"})])])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"footer-bottom-menu"},[a("ul",[a("li",[a("a",{attrs:{href:"/user-agreement",target:"_blank"}},[t._v("Terms of Use")])]),a("li",[a("a",{attrs:{href:"/privacy-cookies-policy",target:"_blank"}},[t._v("Privacy & Cookies Policy")])]),a("li",[a("a",{attrs:{href:"/disclaimer",target:"_blank"}},[t._v("Disclaimer")])]),a("li",[a("a",{attrs:{href:"http://blog.musicisvivid.com",target:"_blank"}},[t._v("Blog")])])])])}],r={name:"ComonFotter",props:{msg:String},created:function(){this.currentYear=(new Date).getFullYear()}};$("body").on("click",".footer_accor h6 a",function(){var t=$(this).parent().parent(".footer_accor");t.children("p").is(":visible")?t.children("p").slideUp(400):($(".footer_accor p").slideUp(400),t.children("p").slideDown(400))});var o=r,n=(a("817d"),a("2877")),c=Object(n["a"])(o,s,i,!1,null,"eae83bd2",null);e["a"]=c.exports},d287:function(t,e,a){"use strict";var s=a("a6ee"),i=a.n(s);i.a},e254:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col col-lg-3 col-md-4 col-xl-2 hidden-small-device custom-column-left-side"},[a("div",{staticClass:"side-menu-bar"},[a("div",{staticClass:"menu-wraper"},[a("ul",{staticClass:"menu-ul"},[a("li",[a("a",{staticClass:"active",attrs:{href:"#"}},[a("i",{staticClass:"icon-avatar"}),t._v("\tMy Profile\n\t\t\t\t\t\t\t\t\t\t\t\t")])]),a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"icon-analytics"}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tAnalytics\n\t\t\t\t\t\t\t\t\t\t\t\t")])]),a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"icon-search"}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tSearch\n\t\t\t\t\t\t\t\t\t\t\t\t")])]),a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"icon-leaderboard"}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tLeaderboard\n\t\t\t\t\t\t\t\t\t\t\t\t")])])])])])])}],r={name:"LeftManu",props:{msg:String},mounted:function(){},updated:function(){}},o=r,n=a("2877"),c=Object(n["a"])(o,s,i,!1,null,"23a8600f",null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-72d008c2.07e9789d.js.map