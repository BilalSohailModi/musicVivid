(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d003d82"],{"279a":function(t,a,e){},"817d":function(t,a,e){"use strict";var s=e("279a"),i=e.n(s);i.a},"86d0":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"profile-page-header"},[e("div",{staticClass:"header-wraper"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row align-items-center justify-content-between"},[e("div",{staticClass:"logo inner-page"},[e("router-link",{attrs:{to:""}},[e("img",{attrs:{src:"/assets/images/Music-Equalizer-v3.png",alt:""}})])],1),e("div"),e("div",{staticClass:"desktop-profile-menu"},[e("ul",[e("li",[e("router-link",{attrs:{to:"/profile"}},[e("span",{staticClass:"menu-profile-img"},[1==t.$store.state.profilepicture?e("img",{attrs:{src:"/assets/images/Spinner.gif",alt:""}}):t._e(),null==t.$store.state.profilepicture?e("img",{attrs:{src:"/assets/images/default_artist.png",alt:""}}):e("img",{attrs:{src:t.$store.state.profilepicture,alt:""}})])])],1),e("li",["3"==t.userType?e("div",[e("router-link",{attrs:{to:"/myplaylist"}},[e("i",{staticClass:"icon-music-player"})])],1):e("div",[e("router-link",{attrs:{to:"/analytics"}},[e("i",{staticClass:"icon-analytics"})])],1)]),e("li",[e("router-link",{attrs:{to:"/searchartist"}},[e("i",{staticClass:"icon-search"})])],1),"2"==t.userType?e("li",[e("router-link",{attrs:{to:"/leader-board"}},[e("i",{staticClass:"icon-leaderboard"})])],1):t._e(),"3"==t.userType?e("li",[e("router-link",{attrs:{to:"/startcontest"}},[e("i",{staticClass:"icon-leaderboard"})])],1):t._e(),t._m(0)])]),e("div",{staticClass:"header-right-menu"},[t._m(1),e("div",{staticClass:"right-menu-box"},[e("nav",{staticClass:"navigation"},[e("ul",[e("li",[t._m(2),e("ul",{staticClass:"profile-child-memu"},[e("li",["3"==t.user.userType?e("router-link",{attrs:{to:"/fan-edit"}},[t._v("Information")]):t._e()],1),e("li",["2"==t.user.userType?e("router-link",{attrs:{to:"/artist-edit"}},[t._v("Information")]):t._e()],1),"3"==t.user.userType?e("li",[e("a",{attrs:{href:"javascript:;"},on:{click:t.changedata}},[t._v("Payment method")])]):t._e(),t.isPaidMember&&"3"==t.user.userType?e("li",[e("router-link",{attrs:{to:"/setting-autoplay"}},[t._v("Setting for Auto-play")])],1):t._e()])]),"3"==t.user.userType?e("li",[t._m(3),e("ul",{staticClass:"profile-child-memu"},[t.user.PaymentRecord?t._e():e("li",[e("router-link",{attrs:{to:"/membership-popup"}},[t._v("Leaderboard")])],1),t.user.PaymentRecord&&0===t.user.PaymentRecord.isActive?e("li",[e("router-link",{attrs:{to:"/membership-popup"}},[t._v("Leaderboard")])],1):t._e(),t.user.PaymentRecord&&1===t.user.PaymentRecord.isActive?e("li",[e("router-link",{attrs:{to:"/leader-board"}},[t._v("Leaderboard")])],1):t._e(),e("li",[e("router-link",{attrs:{to:"/competition-work-flow"}},[t._v("How it works")])],1)]),e("ul",{staticClass:"profile-child-memu"},[e("li",[e("router-link",{attrs:{to:"/analytics"}},[t._v("Analytics")])],1)])]):t._e(),"2"==t.user.userType?e("li",[t._m(4),e("ul",{staticClass:"profile-child-memu"},[e("li",[e("router-link",{attrs:{to:"/competition-work-flow"}},[t._v("How it works")])],1)])]):t._e(),e("li",[t._m(5),e("ul",{staticClass:"profile-child-memu"},[e("li",[e("router-link",{attrs:{to:"/invite"}},[t._v("Invite")])],1),e("li",[e("router-link",{attrs:{to:"artist-change-password"}},[t._v("Change Password")])],1),t._m(6)])]),e("li",[t._m(7),e("ul",{staticClass:"profile-child-memu"},[e("li",[e("router-link",{attrs:{to:"/report"}},[t._v("Report")])],1),"2"==t.user.userType?e("li",[e("router-link",{attrs:{to:"/user-agreement"}},[t._v("Legal")])],1):t._e(),t.isPaidMember&&"3"==t.user.userType?e("li",[e("router-link",{attrs:{to:"/setting-autoplay"}},[t._v("Setting for Auto-play")])],1):t._e(),e("li",[e("router-link",{attrs:{to:"/privacy-cookies-policy"}},[t._v("Privacy")])],1)])])])])])])])])]),e("div",{staticClass:"modal fade",attrs:{id:"logoutModal"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-body"},[e("img",{attrs:{src:"/assets/images/log-out-modal-icon.png"}}),e("p",{staticClass:"sign-out-modal-text"},[t._v("\n            Are you sure you want to\n            Logout?\n          ")]),e("p",{staticClass:"modal-btn-para"},[e("button",{staticClass:"logout-btn fan-play-btn",attrs:{type:"button"},on:{click:t.logout}},[t._v("Yes")])]),t._m(8)])])])])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("a",{staticClass:"top-menu-profile",attrs:{href:"javascript:;"}},[e("i",{staticClass:"icon-new-menu"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"btn-menu-button-close-desk",attrs:{type:"button"}},[e("i",{staticClass:"icon-close"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{attrs:{href:"javascript:;"}},[e("i",{staticClass:"icon-settings"}),t._v("Settings\n                  ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{attrs:{href:"javascript:;"}},[e("i",{staticClass:"icon-settings"}),t._v("Records\n                  ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{attrs:{href:"javascript:;"}},[e("i",{staticClass:"icon-settings"}),t._v("Records\n                  ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{attrs:{href:"javascript:;"}},[e("i",{staticClass:"icon-user"}),t._v("Account\n                  ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("a",{staticClass:"log_out_modal_btn",attrs:{href:"javascript:;","data-toggle":"modal","data-target":"#logoutModal"}},[t._v("Logout")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{attrs:{href:"javascript:;"}},[e("i",{staticClass:"icon-about"}),t._v("About\n                  ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",{staticClass:"modal-btn-para mb-0"},[e("a",{staticClass:"modal-close-btn",attrs:{href:"javascript:;","data-dismiss":"modal"}},[t._v("Cancel")])])}],r=e("f499"),o=e.n(r),n=e("41cb"),l=e("6bf9"),c=e("b7d6"),u={name:"AuthHeader",props:{msg:String},data:function(){return{userType:"",user:"",profilemage:1,isPaidMember:!1}},methods:{checkIsPaidMember:function(){var t=JSON.parse(localStorage.getItem("User"));null==t&&void 0==t||void 0!=t.PaymentRecord&&void 0!=t.PaymentRecord.isActive&&1==t.PaymentRecord.isActive&&(this.isPaidMember=!0)},changedata:function(){this.$store.state.ispopup=!1,n["a"].push({path:"/addcard"})},logout:function(){localStorage.removeItem("User"),localStorage.removeItem("stripeId"),localStorage.removeItem("UserType"),localStorage.removeItem("Token"),localStorage.removeItem("contestMusicCount"),localStorage.removeItem("userEmail"),window.location.href="/login"}},mounted:function(){$(".btn-menu-button").click(function(){$(".header-right").addClass("active")}),$(".btn-menu-button-close").click(function(){$(".header-right").removeClass("active")}),$(".top-menu-profile").click(function(){$(".header-right-menu").addClass("show")}),$(".btn-menu-button-close-desk").click(function(){$(".header-right-menu").removeClass("show")}),this.checkIsPaidMember()},created:function(){var t=this;this.userType=JSON.parse(localStorage.getItem("UserType")),c["a"].getUser("",function(a){localStorage.setItem("User",o()(a)),t.user=JSON.parse(localStorage.getItem("User")),t.user.profilePicture?t.$store.state.profilepicture=l["a"].profile_image_path+t.user.profilePicture:t.$store.state.profilepicture=null})},updated:function(){$(".btn-menu-button").click(function(){$(".header-right").addClass("active")}),$(".btn-menu-button-close").click(function(){$(".header-right").removeClass("active")}),$(".top-menu-profile").click(function(){$(".header-right-menu").addClass("show")}),$(".btn-menu-button-close-desk").click(function(){$(".header-right-menu").removeClass("show")})}},d=u,m=(e("d287"),e("2877")),p=Object(m["a"])(d,s,i,!1,null,"307dc479",null);a["a"]=p.exports},a6ee:function(t,a,e){},b861:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"footer-colum"},[e("img",{staticClass:"flogo",attrs:{src:"/assets/images/Music-Equalizer-v3.png",alt:""}}),e("h3",[t._v("MiV")]),e("h4",{staticClass:"cursr",on:{click:function(a){return t.$router.push("how-what-why")}}},[t._v("How, What and Why")]),e("h4",{staticClass:"cursr",on:{click:function(a){return t.$router.push("artist-signup")}}},[t._v("Artist Landing Page")])]),t._m(0),t._m(1),t._m(2)]),e("div",{staticClass:"footer-bottom"},[t._m(3),e("p",{staticClass:"copyright-text"},[t._v("© MiV LLC. "+t._s(t.currentYear)+", All Rights Reserved")])])])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footer-colum"},[e("h3",{staticClass:"footer-title"},[t._v("Friends Center for")]),e("div",{staticClass:"friends_logo"},[e("img",{attrs:{src:"/assets/images/f_artist.png",alt:""}}),e("img",{attrs:{src:"/assets/images/f_fans.png",alt:""}})]),e("div",{staticClass:"footer_accor"},[e("h6",[e("a",{attrs:{href:"javascript:;"}},[t._v("Members")])]),e("p",[t._v("\n            If you have any interesting and fun comments we\n            may add them here send to\n            "),e("a",{attrs:{href:"mailto:admin@musicisvivid.com"}},[t._v("admin@musicisvivid.com")]),t._v("\n            and Please keep this short,\n            add a picture if you want.\n          ")])]),e("div",{staticClass:"footer_accor"},[e("h6",[e("a",{attrs:{href:"javascript:;"}},[t._v("Artist")])]),e("p",[t._v("\n            If you have any interesting recommendations or a story to share please feel free\n            to send us an email at\n            "),e("a",{attrs:{href:"mailto:admin@musicisvivid.com"}},[t._v("admin@musicisvivid.com")]),t._v(" and also\n            state if you are a Member or Non-Member. Please keep\n            messaging short. If you have a story we may share it here.\n          ")])]),e("div",{staticClass:"footer_accor"},[e("h6",[e("a",{attrs:{href:"javascript:;"}},[t._v("Affiliates")])]),e("p",[t._v("\n            We may list Affiliates (for example, aggregators who participate and those that do\n            not) and possibly any positive input from affiliates for Members and Artists.\n          ")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footer-colum"},[e("h3",{staticClass:"footer-title"},[t._v("Help")]),e("p",[t._v("\n          If you have questions or comments\n          regarding Navigation, or Report an Issue.\n          Please Send your information to\n          "),e("a",{attrs:{href:"mailto:admin@musicisvivid.com"}},[t._v("admin@musicisvivid.com")]),t._v(".\n          Please state in the Subject Line,\n          Navigation Issue or Report an Issue.\n        ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footer-colum"},[e("div",{staticClass:"footer_app"},[e("h3",{staticClass:"footer-title no-border"},[t._v("Download The MiV App")]),e("a",{staticClass:"footer-store-btn",attrs:{href:"https://play.google.com/store/apps/details?id=com.techno.miv.miv&hl=en",target:"_blank"}},[e("img",{attrs:{src:"assets/images/footer-gplay-btn.png",alt:""}})]),e("a",{staticClass:"footer-store-btn",attrs:{href:"https://apps.apple.com/in/app/music-is-vivid/id1489035451",target:"_blank"}},[e("img",{attrs:{src:"assets/images/footer-appstore-btn.png",alt:""}})])]),e("div",{staticClass:"social_link"},[e("h3",{staticClass:"footer-title no-border"},[t._v("Follow us")]),e("nav",{staticClass:"footer-social"},[e("ul",[e("li",[e("a",{attrs:{href:"https://www.facebook.com/musicisvivid/",target:"_blank"}},[e("i",{staticClass:"icon-facebook"})])]),e("li",[e("a",{attrs:{href:"https://www.instagram.com/musicisvivid/",target:"_blank"}},[e("i",{staticClass:"icon-instagram"})])]),e("li",[e("a",{attrs:{href:"https://twitter.com/musicisvivid",target:"_blank"}},[e("i",{staticClass:"icon-twitter"})])]),e("li",[e("a",{attrs:{href:"https://in.pinterest.com/musicisvivid/pins/",target:"_blank"}},[e("i",{staticClass:"icon-pinterest"})])])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"footer-bottom-menu"},[e("ul",[e("li",[e("a",{attrs:{href:"/user-agreement",target:"_blank"}},[t._v("Terms of Use")])]),e("li",[e("a",{attrs:{href:"/privacy-cookies-policy",target:"_blank"}},[t._v("Privacy & Cookies Policy")])]),e("li",[e("a",{attrs:{href:"/disclaimer",target:"_blank"}},[t._v("Disclaimer")])]),e("li",[e("a",{attrs:{href:"http://blog.musicisvivid.com",target:"_blank"}},[t._v("Blog")])])])])}],r={name:"ComonFotter",props:{msg:String},created:function(){this.currentYear=(new Date).getFullYear()}};$("body").on("click",".footer_accor h6 a",function(){var t=$(this).parent().parent(".footer_accor");t.children("p").is(":visible")?t.children("p").slideUp(400):($(".footer_accor p").slideUp(400),t.children("p").slideDown(400))});var o=r,n=(e("817d"),e("2877")),l=Object(n["a"])(o,s,i,!1,null,"eae83bd2",null);a["a"]=l.exports},d287:function(t,a,e){"use strict";var s=e("a6ee"),i=e.n(s);i.a},e254:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col col-lg-3 col-md-4 col-xl-2 hidden-small-device custom-column-left-side"},[e("div",{staticClass:"side-menu-bar"},[e("div",{staticClass:"menu-wraper"},[e("ul",{staticClass:"menu-ul"},[e("li",[e("a",{staticClass:"active",attrs:{href:"#"}},[e("i",{staticClass:"icon-avatar"}),t._v("\tMy Profile\n\t\t\t\t\t\t\t\t\t\t\t\t")])]),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"icon-analytics"}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tAnalytics\n\t\t\t\t\t\t\t\t\t\t\t\t")])]),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"icon-search"}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tSearch\n\t\t\t\t\t\t\t\t\t\t\t\t")])]),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"icon-leaderboard"}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tLeaderboard\n\t\t\t\t\t\t\t\t\t\t\t\t")])])])])])])}],r={name:"LeftManu",props:{msg:String},mounted:function(){},updated:function(){}},o=r,n=e("2877"),l=Object(n["a"])(o,s,i,!1,null,"23a8600f",null);a["a"]=l.exports},f015:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"body-wraper no-footer bg-profile"},[e("div",{staticClass:"profile-container"},[e("loading",{attrs:{active:t.isLoading,"can-cancel":!1,loader:"dots","is-full-page":t.fullPage},on:{"update:active":function(a){t.isLoading=a}}}),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"box-model-wraper"},[e("div",{staticClass:"profile-header"},[e("div",{staticClass:"profile-banner"},[1==t.coverpictur?e("img",{attrs:{src:"/assets/images/Spinner.gif",alt:""}}):t._e(),null==t.coverpictur?e("img",{attrs:{src:"/assets/images/Profile-banner.png",alt:""}}):e("img",{attrs:{src:t.coverpictur,alt:""}})]),e("div",{staticClass:"profile-details-section"},[e("div",{staticClass:"peofile-picture-section"},[e("div",{staticClass:"profile-picture"},[null==t.profilemage||""==t.user.profilePicture?e("img",{attrs:{src:"/assets/images/default_artist.png",alt:""}}):t._e(),e("img",{attrs:{src:t.profilemage,alt:""}})])]),e("div",{staticClass:"following-container"},[e("div",{staticClass:"left"},[e("h2",{staticClass:"user-name"},[t._v(t._s(t.user.fullName))]),e("h3",{staticClass:"user-address"},[t._v(t._s(t.user.address))])]),e("div",{staticClass:"right"},[e("button",{staticClass:"follow-btn",class:{followed:t.follower.length>0&&"0 "!=t.follower[0].isFollowing},attrs:{id:"followbtn"},on:{click:t.togglefollow}},[e("img",{staticClass:"unfollow-icon",attrs:{src:"/assets/images/followed.png",alt:"icon"}}),e("img",{staticClass:"followed-icon",attrs:{src:"/assets/images/follow.png",alt:"icon"}}),t.follower.length>0&&"0 "!=t.follower[0].isFollowing?e("span",{attrs:{id:"followartist"}},[t._v("Following")]):e("span",[t._v("Follow")])])])])])]),e("div",{staticClass:"profile-dashboard-area"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-12 col-lg-9 col-md-8 col-xl-10 custom-column-right"},[e("div",{staticClass:"profile-right-section"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6 col-md-7"},[e("div",{staticClass:"top-section display-flex"},[e("div",{staticClass:"tab-nav-section"},[e("ul",{staticClass:"nav nav-tabs fan-profile-tab"},[e("li",{staticClass:"active"},[e("a",{staticClass:"active show",attrs:{"data-toggle":"pill",href:"#playlist"},on:{click:function(a){t.isAlbum=!0,t.search_key_album=""}}},[t._v("Album")])]),e("li",[e("a",{attrs:{"data-toggle":"pill",href:"#new_releases"},on:{click:function(a){t.isAlbum=!1,t.search_key_songs=""}}},[t._v("Songs")])])])])])]),t.isAlbum?e("div",{staticClass:"col-sm-6 col-md-5"},[e("div",{staticClass:"input-search-wrap"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search_key_album,expression:"search_key_album"}],staticClass:"form-control search-input",attrs:{type:"text",placeholder:"search album",autocomplete:"off"},domProps:{value:t.search_key_album},on:{keyup:function(a){return"keyCode"in a&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.albumsearch(a)},input:function(a){a.target.composing||(t.search_key_album=a.target.value)}}})])]):e("div",{staticClass:"col-sm-6 col-md-5"},[e("div",{staticClass:"input-search-wrap"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search_key_songs,expression:"search_key_songs"}],staticClass:"form-control search-input",attrs:{type:"text",placeholder:"search song",autocomplete:"OFF"},domProps:{value:t.search_key_songs},on:{keyup:function(a){return"keyCode"in a&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.songsearch(a)},input:function(a){a.target.composing||(t.search_key_songs=a.target.value)}}})])])]),e("div",{staticClass:"album-wraper"},[e("div",{staticClass:"tab-content"},[e("div",{staticClass:"tab-pane fade active",attrs:{id:"playlist"}},[e("ul",{staticClass:"album-ul"},t._l(t.myALbums,function(a,s){return e("li",{key:s},[e("router-link",{attrs:{to:{name:"FanAlbumDetails",params:{id:a.id}}}},[null==a.coverImage?e("img",{attrs:{src:"/assets/images/deefault_album.png"}}):e("img",{attrs:{src:t.allpath.album_pictures+a.coverImage}})])],1)}),0),e("infinite-loading",{on:{infinite:t.infiniteHandler}},[e("div",{attrs:{slot:"spinner"},slot:"spinner"},[e("img",{attrs:{src:"/assets/images/loader.gif"}})]),e("div",{attrs:{slot:"no-more"},slot:"no-more"},[t._v(t._s(""))]),e("div",{attrs:{slot:"no-results"},slot:"no-results"},[t._v(t._s(""))])])],1),e("div",{staticClass:"tab-pane fade",attrs:{id:"new_releases"}},[e("ul",{staticClass:"album-ul"},t._l(t.mySongs,function(a,s){return e("li",{key:s},[null==a.musicImage?e("img",{attrs:{src:"/assets/images/default_songs.png"}}):e("img",{attrs:{src:t.allpath.user_uploaded_musics+a.musicImage}}),e("span",[t._v(t._s(a.fileTitle))])])}),0),e("infinite-loading",{on:{infinite:t.infiniteHandler1}},[e("div",{attrs:{slot:"spinner"},slot:"spinner"},[e("img",{attrs:{src:"/assets/images/loader.gif"}})]),e("div",{attrs:{slot:"no-more"},slot:"no-more"},[t._v(t._s(""))]),e("div",{attrs:{slot:"no-results"},slot:"no-results"},[t._v(t._s(""))])])],1)])])])])])])])])],1)])])},i=[],r=e("6bf9"),o=(e("b7d6"),e("9062")),n=e.n(o),l=(e("e40d"),e("86d0")),c=(e("bc3a"),e("b861")),u=e("e166"),d=e.n(u),m=e("e254"),p=e("4ec3"),f={name:"GlobalArtist",props:["passid"],components:{AppHeader:l["a"],AppFooter:c["a"],LeftManu:m["a"],Loading:n.a,InfiniteLoading:d.a},data:function(){return{user:"",profilemage:null,isLoading:!1,coverpictur:1,fullPage:!0,myALbums:[],allpath:r["a"],page:1,artistid:"",search_key_album:"",search_key_songs:"",isAlbum:!0,mySongs:[],page1:1,follower:[]}},methods:{togglefollow:function(){var t=this;p["a"].get("follow/".concat(this.artistid),{headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}}).then(function(a){a.data&&(t.follower=[],t.follower.push(a.data.data))}).catch(function(t){})},infiniteHandler1:function(t){var a=this;this.page1=this.page1+1;var e={page:this.page1,perPage:10,artistId:this.artistid};p["a"].get("search-song",{params:e,headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}}).then(function(e){e.data&&(e.data.data.length>0&&e.data.data.map(function(t){a.mySongs.push(t)}),0==e.data.data.length?t.complete():t.loaded())}).catch(function(t){})},infiniteHandler:function(t){var a=this;this.page=this.page+1;var e={albums_of_user:this.artistid,page:this.page,per_page:10};p["a"].get("album-list",{params:e,headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}}).then(function(e){e.data&&(e.data.albumlist.map(function(t){a.myALbums.push(t)}),0==e.data.albumlist.length?t.complete():t.loaded())}).catch(function(t){})},albumsearch:function(){var t=this,a={search_key:this.search_key_album,page:1,perPage:20,artistId:this.artistid};p["a"].get("search-album",{params:a,headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}}).then(function(a){a.data&&(t.myALbums=a.data.data)}).catch(function(t){})},songsearch:function(){var t=this,a={search_key:this.search_key_songs,page:1,perPage:10,artistId:this.artistid};p["a"].get("search-song",{params:a,headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}}).then(function(a){a.data&&(t.mySongs=a.data.data)}).catch(function(t){})},initializesongsList:function(){var t=this,a={page:1,perPage:10,artistId:this.artistid};p["a"].get("search-song",{params:a,headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}}).then(function(a){a.data&&(t.mySongs=a.data.data)}).catch(function(t){})},initializealbumlist:function(){var t=this,a={albums_of_user:this.artistid,page:1,per_page:10};p["a"].get("album-list",{params:a,headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}}).then(function(a){a.data&&(t.myALbums=a.data.albumlist)}).catch(function(t){})},upDatecover:function(t,a){var e=this;this.isLoading=!0;var s=new FormData;s.append("coverPicture",a[0]);var i={headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}};p["a"].post("update-cover-picture",s,i).then(function(t){t.data&&(e.coverpictur=r["a"].cover_pictures+t.data.data.coverPicture,e.isLoading=!1)}).catch(function(t){e.isLoading=!1})}},created:function(){var t=this;this.artistid=this.passid,this.initializealbumlist(),this.initializesongsList(),p["a"].get("fan/artist/".concat(this.artistid),{headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}}).then(function(a){a.data&&(t.user=a.data.data,t.follower=t.user.follower,null!=t.user.profilePicture&&(t.profilemage=r["a"].profile_image_path+t.user.profilePicture),null!=t.user.coverPicture?t.coverpictur=r["a"].cover_pictures+t.user.coverPicture:t.coverpictur=null)}).catch(function(t){})}},v=f,g=e("2877"),h=Object(g["a"])(v,s,i,!1,null,"989a334c",null);a["a"]=h.exports}}]);
//# sourceMappingURL=chunk-4d003d82.5ddae5da.js.map