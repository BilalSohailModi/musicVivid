(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38b40412"],{"86d0":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"profile-page-header"},[s("div",{staticClass:"header-wraper"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row align-items-center justify-content-between"},[s("div",{staticClass:"logo inner-page"},[s("router-link",{attrs:{to:""}},[s("img",{attrs:{src:"/assets/images/Music-Equalizer-v3.png",alt:""}})])],1),s("div"),s("div",{staticClass:"desktop-profile-menu"},[s("ul",[s("li",[s("router-link",{attrs:{to:"/profile"}},[s("span",{staticClass:"menu-profile-img"},[1==t.$store.state.profilepicture?s("img",{attrs:{src:"/assets/images/Spinner.gif",alt:""}}):t._e(),null==t.$store.state.profilepicture?s("img",{attrs:{src:"/assets/images/default_artist.png",alt:""}}):s("img",{attrs:{src:t.$store.state.profilepicture,alt:""}})])])],1),s("li",["3"==t.userType?s("div",[s("router-link",{attrs:{to:"/myplaylist"}},[s("i",{staticClass:"icon-music-player"})])],1):s("div",[s("router-link",{attrs:{to:"/analytics"}},[s("i",{staticClass:"icon-analytics"})])],1)]),s("li",[s("router-link",{attrs:{to:"/searchartist"}},[s("i",{staticClass:"icon-search"})])],1),"2"==t.userType?s("li",[s("router-link",{attrs:{to:"/leader-board"}},[s("i",{staticClass:"icon-leaderboard"})])],1):t._e(),"3"==t.userType?s("li",[s("router-link",{attrs:{to:"/startcontest"}},[s("i",{staticClass:"icon-leaderboard"})])],1):t._e(),t._m(0)])]),s("div",{staticClass:"header-right-menu"},[t._m(1),s("div",{staticClass:"right-menu-box"},[s("nav",{staticClass:"navigation"},[s("ul",[s("li",[t._m(2),s("ul",{staticClass:"profile-child-memu"},[s("li",["3"==t.user.userType?s("router-link",{attrs:{to:"/fan-edit"}},[t._v("Information")]):t._e()],1),s("li",["2"==t.user.userType?s("router-link",{attrs:{to:"/artist-edit"}},[t._v("Information")]):t._e()],1),"3"==t.user.userType?s("li",[s("a",{attrs:{href:"javascript:;"},on:{click:t.changedata}},[t._v("Payment method")])]):t._e(),t.isPaidMember&&"3"==t.user.userType?s("li",[s("router-link",{attrs:{to:"/setting-autoplay"}},[t._v("Setting for Auto-play")])],1):t._e()])]),"3"==t.user.userType?s("li",[t._m(3),s("ul",{staticClass:"profile-child-memu"},[t.user.PaymentRecord?t._e():s("li",[s("router-link",{attrs:{to:"/membership-popup"}},[t._v("Leaderboard")])],1),t.user.PaymentRecord&&0===t.user.PaymentRecord.isActive?s("li",[s("router-link",{attrs:{to:"/membership-popup"}},[t._v("Leaderboard")])],1):t._e(),t.user.PaymentRecord&&1===t.user.PaymentRecord.isActive?s("li",[s("router-link",{attrs:{to:"/leader-board"}},[t._v("Leaderboard")])],1):t._e(),s("li",[s("router-link",{attrs:{to:"/competition-work-flow"}},[t._v("How it works")])],1)]),s("ul",{staticClass:"profile-child-memu"},[s("li",[s("router-link",{attrs:{to:"/analytics"}},[t._v("Analytics")])],1)])]):t._e(),"2"==t.user.userType?s("li",[t._m(4),s("ul",{staticClass:"profile-child-memu"},[s("li",[s("router-link",{attrs:{to:"/competition-work-flow"}},[t._v("How it works")])],1)])]):t._e(),s("li",[t._m(5),s("ul",{staticClass:"profile-child-memu"},[s("li",[s("router-link",{attrs:{to:"/invite"}},[t._v("Invite")])],1),s("li",[s("router-link",{attrs:{to:"artist-change-password"}},[t._v("Change Password")])],1),t._m(6)])]),s("li",[t._m(7),s("ul",{staticClass:"profile-child-memu"},[s("li",[s("router-link",{attrs:{to:"/report"}},[t._v("Report")])],1),"2"==t.user.userType?s("li",[s("router-link",{attrs:{to:"/user-agreement"}},[t._v("Legal")])],1):t._e(),t.isPaidMember&&"3"==t.user.userType?s("li",[s("router-link",{attrs:{to:"/setting-autoplay"}},[t._v("Setting for Auto-play")])],1):t._e(),s("li",[s("router-link",{attrs:{to:"/privacy-cookies-policy"}},[t._v("Privacy")])],1)])])])])])])])])]),s("div",{staticClass:"modal fade",attrs:{id:"logoutModal"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered"},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-body"},[s("img",{attrs:{src:"/assets/images/log-out-modal-icon.png"}}),s("p",{staticClass:"sign-out-modal-text"},[t._v("\n            Are you sure you want to\n            Logout?\n          ")]),s("p",{staticClass:"modal-btn-para"},[s("button",{staticClass:"logout-btn fan-play-btn",attrs:{type:"button"},on:{click:t.logout}},[t._v("Yes")])]),t._m(8)])])])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("a",{staticClass:"top-menu-profile",attrs:{href:"javascript:;"}},[s("i",{staticClass:"icon-new-menu"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn-menu-button-close-desk",attrs:{type:"button"}},[s("i",{staticClass:"icon-close"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{href:"javascript:;"}},[s("i",{staticClass:"icon-settings"}),t._v("Settings\n                  ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{href:"javascript:;"}},[s("i",{staticClass:"icon-settings"}),t._v("Records\n                  ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{href:"javascript:;"}},[s("i",{staticClass:"icon-settings"}),t._v("Records\n                  ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{href:"javascript:;"}},[s("i",{staticClass:"icon-user"}),t._v("Account\n                  ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("a",{staticClass:"log_out_modal_btn",attrs:{href:"javascript:;","data-toggle":"modal","data-target":"#logoutModal"}},[t._v("Logout")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{href:"javascript:;"}},[s("i",{staticClass:"icon-about"}),t._v("About\n                  ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"modal-btn-para mb-0"},[s("a",{staticClass:"modal-close-btn",attrs:{href:"javascript:;","data-dismiss":"modal"}},[t._v("Cancel")])])}],r=s("f499"),o=s.n(r),l=s("41cb"),n=s("6bf9"),c=s("b7d6"),u={name:"AuthHeader",props:{msg:String},data:function(){return{userType:"",user:"",profilemage:1,isPaidMember:!1}},methods:{checkIsPaidMember:function(){var t=JSON.parse(localStorage.getItem("User"));null==t&&void 0==t||void 0!=t.PaymentRecord&&void 0!=t.PaymentRecord.isActive&&1==t.PaymentRecord.isActive&&(this.isPaidMember=!0)},changedata:function(){this.$store.state.ispopup=!1,l["a"].push({path:"/addcard"})},logout:function(){localStorage.removeItem("User"),localStorage.removeItem("stripeId"),localStorage.removeItem("UserType"),localStorage.removeItem("Token"),localStorage.removeItem("contestMusicCount"),localStorage.removeItem("userEmail"),window.location.href="/login"}},mounted:function(){$(".btn-menu-button").click(function(){$(".header-right").addClass("active")}),$(".btn-menu-button-close").click(function(){$(".header-right").removeClass("active")}),$(".top-menu-profile").click(function(){$(".header-right-menu").addClass("show")}),$(".btn-menu-button-close-desk").click(function(){$(".header-right-menu").removeClass("show")}),this.checkIsPaidMember()},created:function(){var t=this;this.userType=JSON.parse(localStorage.getItem("UserType")),c["a"].getUser("",function(e){localStorage.setItem("User",o()(e)),t.user=JSON.parse(localStorage.getItem("User")),t.user.profilePicture?t.$store.state.profilepicture=n["a"].profile_image_path+t.user.profilePicture:t.$store.state.profilepicture=null})},updated:function(){$(".btn-menu-button").click(function(){$(".header-right").addClass("active")}),$(".btn-menu-button-close").click(function(){$(".header-right").removeClass("active")}),$(".top-menu-profile").click(function(){$(".header-right-menu").addClass("show")}),$(".btn-menu-button-close-desk").click(function(){$(".header-right-menu").removeClass("show")})}},m=u,d=(s("d287"),s("2877")),p=Object(d["a"])(m,a,i,!1,null,"307dc479",null);e["a"]=p.exports},"977f":function(t,e,s){},a6ee:function(t,e,s){},d287:function(t,e,s){"use strict";var a=s("a6ee"),i=s.n(a);i.a},f45b:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("AppHeader"),s("div",{staticClass:"view-profile-overlay"}),s("div",{staticClass:"live-contest-section screen-bg"},[s("div",{staticClass:"modal contest-modal",attrs:{id:"live_contest_modal"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered"},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-body"},[s("div",{staticClass:"modal-inner-body"},[s("img",{attrs:{src:"/assets/images/membership-images.png"}}),t._m(0),t.user.PaymentRecord?t._e():s("p",[t._v("You have 1 week Free Trial member")]),t._m(1),s("div",{staticClass:"text-center"},[s("button",{staticClass:"modal-learn-more",attrs:{"data-toggle":"modal","data-target":"#membershipPlan_modal"}},[t._v("Learn More")]),s("br"),s("button",{staticClass:"modal-cancel",on:{click:t.closemodal}},[t._v("Not Now")])])])])])])]),s("div",{staticClass:"modal contest-modal",attrs:{id:"membershipPlan_modal"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered"},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-body"},[s("div",{staticClass:"modal-inner-body"},[s("h1",{staticClass:"modal-main-heading"},[t._v("Membership plan")]),t._m(2),t._m(3),t._m(4),s("div",{staticClass:"text-center"},[s("button",{staticClass:"modal-learn-more",on:{click:t.memberView}},[t._v("Become A Member")]),s("br"),s("button",{staticClass:"modal-cancel",on:{click:t.closeModal1}},[t._v("No, I dont want to subscribe")])])])])])])])])],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"mail-title"},[t._v("\n                This feature is for\n                "),s("br"),t._v("Members only\n              ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",{staticClass:"sub-price"},[t._v("\n                For\n                "),s("span",[t._v("3.99")]),t._v("/mo\n              ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"mail-title"},[t._v("\n                Get unlimited access for 30 days with\n                "),s("br"),t._v("premium features\n              ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"subscribe-features"},[s("li",[s("img",{staticClass:"list-icon-img",attrs:{src:"/assets/images/vote.png"}}),t._v("\n                  Vote for your favorite artist\n                ")]),s("li",[s("img",{staticClass:"list-icon-img",attrs:{src:"/assets/images/contest_result.png"}}),t._v("\n                  Review contest results\n                ")]),s("li",[s("img",{staticClass:"list-icon-img",attrs:{src:"/assets/images/leaderboard.png"}}),t._v("\n                  Unlock leaderboard access\n                ")]),s("li",[s("img",{staticClass:"list-icon-img free-week",attrs:{src:"/assets/images/7_days_logo.jpg"}}),t._v("\n                   1 Week Free membership, We don't charge your Card until then\n                ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",{staticClass:"sub-price"},[t._v("\n                For\n                "),s("span",[t._v("3.99")]),t._v("/mo\n              ")])}],r=s("41cb"),o=(s("6bf9"),s("86d0")),l={name:"MembershipPopup",props:{msg:String},data:function(){return{user:JSON.parse(localStorage.getItem("User"))}},components:{AppHeader:o["a"]},methods:{closemodal:function(){$("#live_contest_modal").modal("hide"),r["a"].push({path:"/fan-profile"})},closeModal1:function(){$("#membershipPlan_modal").modal("hide")},memberView:function(){$(".modal-backdrop").remove(),this.$store.state.ispopup=!0,r["a"].push({path:"/addcard"}),this.$store.state.isLeaderBoaedPayment=!0}},created:function(){},mounted:function(){this.user.PaymentRecord||($("#live_contest_modal").modal("show"),$("#live_contest_modal").modal({backdrop:"static",keyboard:!1}))}},n=l,c=(s("f547"),s("2877")),u=Object(c["a"])(n,a,i,!1,null,"70d5edd6",null);e["default"]=u.exports},f547:function(t,e,s){"use strict";var a=s("977f"),i=s.n(a);i.a}}]);
//# sourceMappingURL=chunk-38b40412.b49a8be4.js.map