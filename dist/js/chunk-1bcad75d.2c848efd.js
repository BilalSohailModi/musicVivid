(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1bcad75d"],{"11e9":function(t,e,a){var r=a("52a7"),s=a("4630"),i=a("6821"),o=a("6a99"),n=a("69a8"),c=a("c69a"),l=Object.getOwnPropertyDescriptor;e.f=a("9e1e")?l:function(t,e){if(t=i(t),e=o(e,!0),c)try{return l(t,e)}catch(a){}if(n(t,e))return s(!r.f.call(t,e),t[e])}},"5dbc":function(t,e,a){var r=a("d3f4"),s=a("8b97").set;t.exports=function(t,e,a){var i,o=e.constructor;return o!==a&&"function"==typeof o&&(i=o.prototype)!==a.prototype&&r(i)&&s&&s(t,i),t}},"5df1":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("body",{staticClass:"inner-page"},[a("AppHeader"),a("div",{staticClass:"live-contest-section"},[t._m(0),a("div",{},[a("div",{staticClass:"m-5"},[a("a",{staticClass:"btn btn-social-icon btn-facebook",on:{click:function(e){return t.facebook()}}},[a("span",{staticClass:"fa fa-facebook"})])]),a("div",{staticClass:"m-5"},[a("a",{staticClass:"btn btn-social-icon btn-instagram",on:{click:function(e){return t.instagram()}}},[a("span",{staticClass:"fa fa-instagram"})])]),a("div",{staticClass:"m-5"},[a("a",{staticClass:"btn btn-social-icon btn-instagram",on:{click:function(e){return t.saveData()}}},[a("span",{staticClass:"fa fa-instagram"})])])])])],1)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"live-contest-header"},[a("h1",[t._v("Social Followers")])])}],i=(a("c5f6"),a("41cb"),a("6bf9")),o=(a("b7d6"),a("9062"),a("e40d"),a("86d0")),n=(a("bc3a"),a("4ec3")),c={name:"SocialFollowers",props:{msg:String},data:function(){return{user:JSON.parse(localStorage.getItem("User")),allpath:i["a"],follows:Number}},components:{AppHeader:o["a"]},methods:{facebook:function(){window.fbAsyncInit=function(){FB.init({appId:"312588969643910",cookie:!0,xfbml:!0,version:"v3.2"})}},instagram:function(){var t=this;$.ajax({url:"https://api.instagram.com/v1/users/self",dataType:"jsonp",type:"GET",data:{access_token:"7235681046.52f4a1e.34f20cf7a38143d3b2f82b807a45fa2a"},success:function(e){t.follows=e["data"]["counts"]["followed_by"],console.log(e)},error:function(t){console.log(t)}})},saveData:function(t){var e={headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}};n["a"].put("update-social-followers",{socialFollowersType:2,countSocialFollowers:this.follows},e).then(function(t){}).catch(function(t){})}},created:function(){},mounted:function(){}},l=c,u=a("2877"),f=Object(u["a"])(l,r,s,!1,null,"f86198e4",null);e["default"]=f.exports},"86d0":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"profile-page-header"},[a("div",{staticClass:"header-wraper"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row align-items-center justify-content-between"},[a("div",{staticClass:"logo inner-page"},[a("router-link",{attrs:{to:""}},[a("img",{attrs:{src:"/assets/images/Music-Equalizer-v3.png",alt:""}})])],1),a("div"),a("div",{staticClass:"desktop-profile-menu"},[a("ul",[a("li",[a("router-link",{attrs:{to:"/profile"}},[a("span",{staticClass:"menu-profile-img"},[1==t.$store.state.profilepicture?a("img",{attrs:{src:"/assets/images/Spinner.gif",alt:""}}):t._e(),null==t.$store.state.profilepicture?a("img",{attrs:{src:"/assets/images/default_artist.png",alt:""}}):a("img",{attrs:{src:t.$store.state.profilepicture,alt:""}})])])],1),a("li",["3"==t.userType?a("div",[a("router-link",{attrs:{to:"/myplaylist"}},[a("i",{staticClass:"icon-music-player"})])],1):a("div",[a("router-link",{attrs:{to:"/analytics"}},[a("i",{staticClass:"icon-analytics"})])],1)]),a("li",[a("router-link",{attrs:{to:"/searchartist"}},[a("i",{staticClass:"icon-search"})])],1),"2"==t.userType?a("li",[a("router-link",{attrs:{to:"/leader-board"}},[a("i",{staticClass:"icon-leaderboard"})])],1):t._e(),"3"==t.userType?a("li",[a("router-link",{attrs:{to:"/startcontest"}},[a("i",{staticClass:"icon-leaderboard"})])],1):t._e(),t._m(0)])]),a("div",{staticClass:"header-right-menu"},[t._m(1),a("div",{staticClass:"right-menu-box"},[a("nav",{staticClass:"navigation"},[a("ul",[a("li",[t._m(2),a("ul",{staticClass:"profile-child-memu"},[a("li",["3"==t.user.userType?a("router-link",{attrs:{to:"/fan-edit"}},[t._v("Information")]):t._e()],1),a("li",["2"==t.user.userType?a("router-link",{attrs:{to:"/artist-edit"}},[t._v("Information")]):t._e()],1),"3"==t.user.userType?a("li",[a("a",{attrs:{href:"javascript:;"},on:{click:t.changedata}},[t._v("Payment method")])]):t._e(),t.isPaidMember&&"3"==t.user.userType?a("li",[a("router-link",{attrs:{to:"/setting-autoplay"}},[t._v("Setting for Auto-play")])],1):t._e()])]),"3"==t.user.userType?a("li",[t._m(3),a("ul",{staticClass:"profile-child-memu"},[t.user.PaymentRecord?t._e():a("li",[a("router-link",{attrs:{to:"/membership-popup"}},[t._v("Leaderboard")])],1),t.user.PaymentRecord&&0===t.user.PaymentRecord.isActive?a("li",[a("router-link",{attrs:{to:"/membership-popup"}},[t._v("Leaderboard")])],1):t._e(),t.user.PaymentRecord&&1===t.user.PaymentRecord.isActive?a("li",[a("router-link",{attrs:{to:"/leader-board"}},[t._v("Leaderboard")])],1):t._e(),a("li",[a("router-link",{attrs:{to:"/competition-work-flow"}},[t._v("How it works")])],1)]),a("ul",{staticClass:"profile-child-memu"},[a("li",[a("router-link",{attrs:{to:"/analytics"}},[t._v("Analytics")])],1)])]):t._e(),"2"==t.user.userType?a("li",[t._m(4),a("ul",{staticClass:"profile-child-memu"},[a("li",[a("router-link",{attrs:{to:"/competition-work-flow"}},[t._v("How it works")])],1)])]):t._e(),a("li",[t._m(5),a("ul",{staticClass:"profile-child-memu"},[a("li",[a("router-link",{attrs:{to:"/invite"}},[t._v("Invite")])],1),a("li",[a("router-link",{attrs:{to:"artist-change-password"}},[t._v("Change Password")])],1),t._m(6)])]),a("li",[t._m(7),a("ul",{staticClass:"profile-child-memu"},[a("li",[a("router-link",{attrs:{to:"/report"}},[t._v("Report")])],1),"2"==t.user.userType?a("li",[a("router-link",{attrs:{to:"/user-agreement"}},[t._v("Legal")])],1):t._e(),t.isPaidMember&&"3"==t.user.userType?a("li",[a("router-link",{attrs:{to:"/setting-autoplay"}},[t._v("Setting for Auto-play")])],1):t._e(),a("li",[a("router-link",{attrs:{to:"/privacy-cookies-policy"}},[t._v("Privacy")])],1)])])])])])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"logoutModal"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-body"},[a("img",{attrs:{src:"/assets/images/log-out-modal-icon.png"}}),a("p",{staticClass:"sign-out-modal-text"},[t._v("\n            Are you sure you want to\n            Logout?\n          ")]),a("p",{staticClass:"modal-btn-para"},[a("button",{staticClass:"logout-btn fan-play-btn",attrs:{type:"button"},on:{click:t.logout}},[t._v("Yes")])]),t._m(8)])])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{staticClass:"top-menu-profile",attrs:{href:"javascript:;"}},[a("i",{staticClass:"icon-new-menu"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"btn-menu-button-close-desk",attrs:{type:"button"}},[a("i",{staticClass:"icon-close"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"javascript:;"}},[a("i",{staticClass:"icon-settings"}),t._v("Settings\n                  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"javascript:;"}},[a("i",{staticClass:"icon-settings"}),t._v("Records\n                  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"javascript:;"}},[a("i",{staticClass:"icon-settings"}),t._v("Records\n                  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"javascript:;"}},[a("i",{staticClass:"icon-user"}),t._v("Account\n                  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{staticClass:"log_out_modal_btn",attrs:{href:"javascript:;","data-toggle":"modal","data-target":"#logoutModal"}},[t._v("Logout")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"javascript:;"}},[a("i",{staticClass:"icon-about"}),t._v("About\n                  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"modal-btn-para mb-0"},[a("a",{staticClass:"modal-close-btn",attrs:{href:"javascript:;","data-dismiss":"modal"}},[t._v("Cancel")])])}],i=a("f499"),o=a.n(i),n=a("41cb"),c=a("6bf9"),l=a("b7d6"),u={name:"AuthHeader",props:{msg:String},data:function(){return{userType:"",user:"",profilemage:1,isPaidMember:!1}},methods:{checkIsPaidMember:function(){var t=JSON.parse(localStorage.getItem("User"));null==t&&void 0==t||void 0!=t.PaymentRecord&&void 0!=t.PaymentRecord.isActive&&1==t.PaymentRecord.isActive&&(this.isPaidMember=!0)},changedata:function(){this.$store.state.ispopup=!1,n["a"].push({path:"/addcard"})},logout:function(){localStorage.removeItem("User"),localStorage.removeItem("stripeId"),localStorage.removeItem("UserType"),localStorage.removeItem("Token"),localStorage.removeItem("contestMusicCount"),localStorage.removeItem("userEmail"),window.location.href="/login"}},mounted:function(){$(".btn-menu-button").click(function(){$(".header-right").addClass("active")}),$(".btn-menu-button-close").click(function(){$(".header-right").removeClass("active")}),$(".top-menu-profile").click(function(){$(".header-right-menu").addClass("show")}),$(".btn-menu-button-close-desk").click(function(){$(".header-right-menu").removeClass("show")}),this.checkIsPaidMember()},created:function(){var t=this;this.userType=JSON.parse(localStorage.getItem("UserType")),l["a"].getUser("",function(e){localStorage.setItem("User",o()(e)),t.user=JSON.parse(localStorage.getItem("User")),t.user.profilePicture?t.$store.state.profilepicture=c["a"].profile_image_path+t.user.profilePicture:t.$store.state.profilepicture=null})},updated:function(){$(".btn-menu-button").click(function(){$(".header-right").addClass("active")}),$(".btn-menu-button-close").click(function(){$(".header-right").removeClass("active")}),$(".top-menu-profile").click(function(){$(".header-right-menu").addClass("show")}),$(".btn-menu-button-close-desk").click(function(){$(".header-right-menu").removeClass("show")})}},f=u,d=(a("d287"),a("2877")),p=Object(d["a"])(f,r,s,!1,null,"307dc479",null);e["a"]=p.exports},"8b97":function(t,e,a){var r=a("d3f4"),s=a("cb7c"),i=function(t,e){if(s(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(s){e=!0}return function(t,a){return i(t,a),e?t.__proto__=a:r(t,a),t}}({},!1):void 0),check:i}},9093:function(t,e,a){var r=a("ce10"),s=a("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,s)}},a6ee:function(t,e,a){},aa77:function(t,e,a){var r=a("5ca1"),s=a("be13"),i=a("79e5"),o=a("fdef"),n="["+o+"]",c="​",l=RegExp("^"+n+n+"*"),u=RegExp(n+n+"*$"),f=function(t,e,a){var s={},n=i(function(){return!!o[t]()||c[t]()!=c}),l=s[t]=n?e(d):o[t];a&&(s[a]=l),r(r.P+r.F*n,"String",s)},d=f.trim=function(t,e){return t=String(s(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=f},c5f6:function(t,e,a){"use strict";var r=a("7726"),s=a("69a8"),i=a("2d95"),o=a("5dbc"),n=a("6a99"),c=a("79e5"),l=a("9093").f,u=a("11e9").f,f=a("86cc").f,d=a("aa77").trim,p="Number",m=r[p],v=m,g=m.prototype,h=i(a("2aeb")(g))==p,_="trim"in String.prototype,b=function(t){var e=n(t,!1);if("string"==typeof e&&e.length>2){e=_?e.trim():d(e,3);var a,r,s,i=e.charCodeAt(0);if(43===i||45===i){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:r=2,s=49;break;case 79:case 111:r=8,s=55;break;default:return+e}for(var o,c=e.slice(2),l=0,u=c.length;l<u;l++)if(o=c.charCodeAt(l),o<48||o>s)return NaN;return parseInt(c,r)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof m&&(h?c(function(){g.valueOf.call(a)}):i(a)!=p)?o(new v(b(e)),a,m):b(e)};for(var y,C=a("9e1e")?l(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;C.length>k;k++)s(v,y=C[k])&&!s(m,y)&&f(m,y,u(v,y));m.prototype=g,g.constructor=m,a("2aba")(r,p,m)}},d287:function(t,e,a){"use strict";var r=a("a6ee"),s=a.n(r);s.a},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-1bcad75d.2c848efd.js.map