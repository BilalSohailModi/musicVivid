(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e6c3a7a"],{"279a":function(t,a,e){},4387:function(t,a,e){},"4eb1":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("AppHeader"),e("body",{staticClass:"inner-page"},[e("div",{staticClass:"body-wraper no-footer"},[e("div",{staticClass:"searchmaingb"},[e("div",{staticClass:"seacrhsubdiv"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-between align-items-center"},[e("div",{staticClass:"col-12 search-container"},[t._m(0),e("div",{staticClass:"seacrhsubdivsearch search-section"},[e("div",{staticClass:"input-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search_key,expression:"search_key"}],staticClass:"form-control input-lg",attrs:{type:"text",placeholder:"Search Song",autocomplete:"OFF","aria-label":"Search","aria-describedby":"Search",id:"search-field"},domProps:{value:t.search_key},on:{keyup:t.searchartist,blur:t.onblur,focus:t.showHistory,input:function(a){a.target.composing||(t.search_key=a.target.value)}}}),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"input-group-text cursor-pointer btn-purple btn-transparent",attrs:{type:"button"},on:{click:t.initialSearchList}},[e("i",{staticClass:"icon-search"}),t._v("Search\n                      ")])])]),t.isHistory?e("div",{staticClass:"search_history-box",class:{show:t.hisToryArray&&t.hisToryArray.length>0}},[e("ul",{staticClass:"search-hidtory-ul"},t._l(t.hisToryArray,function(a){return e("li",{key:a.id},[e("label",{on:{click:function(e){return t.searchFromList(a.fileTitle)}}},[null==a.musicImage?e("img",{attrs:{src:"assets/images/fan-profile-picture.png",alt:""}}):e("img",{attrs:{src:t.allpath.user_uploaded_musics+a.musicImage}}),e("span",[e("a",{attrs:{href:"javascript:void(0)"}},[t._v(t._s(a.fileTitle))])])]),e("button",{staticClass:"history-remove-btn",on:{click:function(e){return t.removeHistory(a.id)}}},[e("i",{staticClass:"icon-close"})])])}),0)]):t._e(),e("div",{staticClass:"search_result-box",class:{show:t.AutoComplete.length>0}},[e("ul",{staticClass:"search-hidtory-ul"},[t._l(t.AutoComplete,function(a){return e("li",{key:a.id,on:{click:function(e){return t.searchFromList(a.fileTitle)}}},[null==a.musicImage?e("img",{attrs:{src:"assets/images/fan-profile-picture.png",alt:""}}):e("img",{attrs:{src:t.allpath.user_uploaded_musics+a.musicImage}}),e("span",[e("a",{attrs:{href:"javascript:void(0)"}},[t._v(t._s(a.fileTitle))])]),t._m(1,!0)])}),e("infinite-loading",{on:{infinite:t.infiniteHandler1}},[e("div",{attrs:{slot:"spinner"},slot:"spinner"},[e("img",{attrs:{src:"/assets/images/loader.gif"}})]),e("div",{attrs:{slot:"no-more"},slot:"no-more"},[t._v(t._s(""))]),e("div",{attrs:{slot:"no-results"},slot:"no-results"},[t._v(t._s(""))])])],2)])])])]),e("ul",{staticClass:"main-search-menu"},[e("li",[e("router-link",{attrs:{to:"/searchartist"}},[e("i",{staticClass:"icon-microphone"}),t._v(" Artists\n                ")])],1),e("li",[e("router-link",{attrs:{to:"/searchartistalbum"}},[e("i",{staticClass:"icon-album"}),t._v(" Album\n                ")])],1),e("li",{staticClass:"active"},[e("router-link",{attrs:{to:"/artistsongsearch"}},[e("i",{staticClass:"icon-music-player"}),t._v("Songs\n                ")])],1)]),e("div",{staticClass:"row justify-content-between align-items-center seacrhsubdivcat"},[e("ul",{staticClass:"serach-tab-menu"},[e("li",{class:{active:""===t.sortByValue}},[e("a",{attrs:{href:"javascript:;",id:"popular"},on:{click:function(a){return t.artistSongSort("")}}},[e("i",{staticClass:"icon-fame"}),t._v(" Popular\n                  ")])]),e("li",{class:{active:"new"===t.sortByValue}},[e("a",{attrs:{href:"javascript:;",id:"new"},on:{click:function(a){return t.artistSongSort("new")}}},[e("i",{staticClass:"icon-new-document"}),t._v(" New\n                  ")])]),e("li",{class:{active:"random"===t.sortByValue}},[e("a",{attrs:{href:"javascript:;",id:"random"},on:{click:function(a){return t.artistSongSort("random")}}},[e("i",{staticClass:"icon-suffle"}),t._v(" Random\n                  ")])]),e("li",{class:{active:"votersPick"===t.sortByValue}},[e("a",{attrs:{href:"javascript:;",id:"votPic"},on:{click:function(a){return t.artistSongSort("votersPick")}}},[e("i",{staticClass:"icon-voters-pic"}),t._v(" Voter's Pick\n                  ")])])])])])]),e("div",{staticClass:"listpopulardiv"},[e("div",{staticClass:"container"},[e("h1",[t._v("Songs")]),e("div",{staticClass:"row align-items-center"},[t._l(t.Artist,function(a,s){return e("div",{key:s,staticClass:"albumeach",on:{click:function(a){return t.hi(s)}}},[e("div",{staticClass:"albumeachimg"},[null==a.musicImage?e("img",{attrs:{src:"assets/images/default_songs.png"}}):e("img",{attrs:{src:t.allpath.user_uploaded_musics+a.musicImage}})]),e("span",[t._v(t._s(a.fileTitle))])])}),!this.Artist.length&&t.noDataMsg?e("div",{staticClass:"no-data-msg"},[t._v("No data found")]):t._e()],2),e("infinite-loading",{attrs:{identifier:t.infiniteId},on:{infinite:t.infiniteHandler}},[e("div",{attrs:{slot:"spinner"},slot:"spinner"},[e("img",{attrs:{src:"/assets/images/loader.gif"}})]),e("div",{attrs:{slot:"no-more"},slot:"no-more"},[t._v(t._s(""))]),e("div",{attrs:{slot:"no-results"},slot:"no-results"},[t._v(t._s(""))])])],1)])])])])],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"seacrhsubdivtitle"},[e("i",{staticClass:"icon-album"}),t._v(" Songs\n                ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"history-remove-btn"},[e("i",{staticClass:"icon-right-arrow"})])}],r=(e("ac6a"),e("f499")),o=e.n(r),n=e("6bf9"),c=(e("b7d6"),e("9062")),l=e.n(c),u=(e("e40d"),e("86d0")),d=(e("bc3a"),e("b861")),m=e("e166"),p=e.n(m),h=e("e254"),f=e("4ec3"),v={name:"ArtistSongsearch",props:{msg:String},components:{AppHeader:u["a"],AppFooter:d["a"],LeftManu:h["a"],Loading:l.a,InfiniteLoading:p.a},data:function(){return{user:"",profilemage:null,isLoading:!1,coverpictur:1,fullPage:!0,Artist:[],allpath:n["a"],AutoComplete:[],page:1,search_key:"",hisToryArray:[],isHistory:!1,tempsong:[],sortByValue:"",noDataMsg:!1,infiniteId:+new Date}},methods:{hi:function(t){var a={};a.songs=this.tempsong,a.index=t,this.$store.commit("playSongs",a)},playSong1:function(t){},onblur:function(){var t=this;setTimeout(function(){t.isHistory=!1},300)},removeHistory:function(t){this.hisToryArray=this.hisToryArray.filter(function(a){return a.id!=t}),localStorage.setItem("hisToryArrayForsong",o()(this.hisToryArray))},showHistory:function(){""==this.search_key&&(this.isHistory=!0)},searchartist:function(t){var a=this;if(""==this.search_key&&(this.AutoComplete=[],this.isHistory=!0),13===t.keyCode)this.searchFromList(t.target.value);else if(""!=t.target.value){var e={page:1,page1:1,perPage:20,search_key:t.target.value};f["a"].get("search-song",{params:e,headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}}).then(function(t){t.data&&(a.AutoComplete=t.data.data)}).catch(function(t){})}},infiniteHandler:function(t){var a=this;this.page=this.page+1;var e={page:this.page,perPage:20,search_key:this.search_key,sortBy:this.sortByValue};f["a"].get("search-song",{params:e,headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}}).then(function(e){e.data&&(e.data.data.map(function(t){a.Artist.push(t);var e={};e.id=t.id,e.title=t.fileTitle,e.autoplay=!0,e.src=a.allpath.user_uploaded_musics+t.fileName,null==t.musicImage?e.pic="":e.pic=a.allpath.user_uploaded_musics+t.musicImage,a.tempsong.push(e)}),0==e.data.data.length?t.complete():t.loaded())}).catch(function(t){})},infiniteHandler1:function(t){var a=this;this.page1=this.page1+1;var e={page:this.page1,perPage:20,search_key:this.search_key};f["a"].get("search-song",{params:e,headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}}).then(function(e){e.data&&(e.data.data.map(function(t){a.AutoComplete.push(t)}),0==e.data.data.length?t.complete():t.loaded())}).catch(function(t){})},upDatecover:function(t,a){var e=this;this.isLoading=!0;var s=new FormData;s.append("coverPicture",a[0]);var i={headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}};f["a"].post("update-cover-picture",s,i).then(function(t){t.data&&(e.coverpictur=n["a"].cover_pictures+t.data.data.coverPicture,e.isLoading=!1)}).catch(function(t){e.isLoading=!1})},searchFromList:function(t){var a=this;this.isHistory=!1,this.AutoComplete=[],this.search_key=t;var e={search_key:t,page:1,perPage:20};f["a"].get("search-song",{params:e,headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}}).then(function(t){if(t.data){var e=null;a.hisToryArray.length>0?a.hisToryArray.forEach(function(a){e=a.id!=t.data.data[0].id}):a.hisToryArray.push(t.data.data[0]),e&&a.hisToryArray.push(t.data.data[0]),a.Artist=t.data.data,a.Artist.map(function(t){var e={};e.id=t.id,e.title=t.fileTitle,e.autoplay=!0,e.src=a.allpath.user_uploaded_musics+t.fileName,null==t.musicImage?e.pic="":e.pic=a.allpath.user_uploaded_musics+t.musicImage,a.tempsong.push(e)}),localStorage.setItem("hisToryArrayForsong",o()(a.hisToryArray))}}).catch(function(t){})},initialSearchList:function(){var t=this;this.AutoComplete=[];var a={search_key:this.search_key,page:1,perPage:20,sortBy:this.sortByValue};f["a"].get("search-song",{params:a,headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}}).then(function(a){a.data&&(t.Artist=a.data.data,t.Artist.map(function(a){var e={};e.id=a.id,e.title=a.fileTitle,e.autoplay=!0,e.src=t.allpath.user_uploaded_musics+a.fileName,null==a.musicImage?e.pic="":e.pic=t.allpath.user_uploaded_musics+a.musicImage,t.tempsong.push(e)}),a.data.data.length||(t.noDataMsg=!0))}).catch(function(t){})},artistSongSort:function(t){this.sortByValue="",this.noDataMsg=!1,this.page=1,this.Artist=[],this.sortByValue=t,this.initialSearchList(),this.infiniteId+=1}},created:function(){this.hisToryArray=JSON.parse(localStorage.getItem("hisToryArrayForsong")),null==this.hisToryArray&&(this.hisToryArray=[]),this.initialSearchList()},mounted:function(){var t=this;$(".inner-page").click(function(a){t.AutoComplete=[]})},updated:function(){}},g=v,_=(e("c906"),e("2877")),y=Object(_["a"])(g,s,i,!1,null,null,null);a["default"]=y.exports},"817d":function(t,a,e){"use strict";var s=e("279a"),i=e.n(s);i.a},"86d0":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"profile-page-header"},[e("div",{staticClass:"header-wraper"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row align-items-center justify-content-between"},[e("div",{staticClass:"logo inner-page"},[e("router-link",{attrs:{to:""}},[e("img",{attrs:{src:"/assets/images/Music-Equalizer-v3.png",alt:""}})])],1),e("div"),e("div",{staticClass:"desktop-profile-menu"},[e("ul",[e("li",[e("router-link",{attrs:{to:"/profile"}},[e("span",{staticClass:"menu-profile-img"},[1==t.$store.state.profilepicture?e("img",{attrs:{src:"/assets/images/Spinner.gif",alt:""}}):t._e(),null==t.$store.state.profilepicture?e("img",{attrs:{src:"/assets/images/default_artist.png",alt:""}}):e("img",{attrs:{src:t.$store.state.profilepicture,alt:""}})])])],1),e("li",["3"==t.userType?e("div",[e("router-link",{attrs:{to:"/myplaylist"}},[e("i",{staticClass:"icon-music-player"})])],1):e("div",[e("router-link",{attrs:{to:"/analytics"}},[e("i",{staticClass:"icon-analytics"})])],1)]),e("li",[e("router-link",{attrs:{to:"/searchartist"}},[e("i",{staticClass:"icon-search"})])],1),"2"==t.userType?e("li",[e("router-link",{attrs:{to:"/leader-board"}},[e("i",{staticClass:"icon-leaderboard"})])],1):t._e(),"3"==t.userType?e("li",[e("router-link",{attrs:{to:"/startcontest"}},[e("i",{staticClass:"icon-leaderboard"})])],1):t._e(),t._m(0)])]),e("div",{staticClass:"header-right-menu"},[t._m(1),e("div",{staticClass:"right-menu-box"},[e("nav",{staticClass:"navigation"},[e("ul",[e("li",[t._m(2),e("ul",{staticClass:"profile-child-memu"},[e("li",["3"==t.user.userType?e("router-link",{attrs:{to:"/fan-edit"}},[t._v("Information")]):t._e()],1),e("li",["2"==t.user.userType?e("router-link",{attrs:{to:"/artist-edit"}},[t._v("Information")]):t._e()],1),"3"==t.user.userType?e("li",[e("a",{attrs:{href:"javascript:;"},on:{click:t.changedata}},[t._v("Payment method")])]):t._e(),t.isPaidMember&&"3"==t.user.userType?e("li",[e("router-link",{attrs:{to:"/setting-autoplay"}},[t._v("Setting for Auto-play")])],1):t._e()])]),"3"==t.user.userType?e("li",[t._m(3),e("ul",{staticClass:"profile-child-memu"},[t.user.PaymentRecord?t._e():e("li",[e("router-link",{attrs:{to:"/membership-popup"}},[t._v("Leaderboard")])],1),t.user.PaymentRecord&&0===t.user.PaymentRecord.isActive?e("li",[e("router-link",{attrs:{to:"/membership-popup"}},[t._v("Leaderboard")])],1):t._e(),t.user.PaymentRecord&&1===t.user.PaymentRecord.isActive?e("li",[e("router-link",{attrs:{to:"/leader-board"}},[t._v("Leaderboard")])],1):t._e(),e("li",[e("router-link",{attrs:{to:"/competition-work-flow"}},[t._v("How it works")])],1)]),e("ul",{staticClass:"profile-child-memu"},[e("li",[e("router-link",{attrs:{to:"/analytics"}},[t._v("Analytics")])],1)])]):t._e(),"2"==t.user.userType?e("li",[t._m(4),e("ul",{staticClass:"profile-child-memu"},[e("li",[e("router-link",{attrs:{to:"/competition-work-flow"}},[t._v("How it works")])],1)])]):t._e(),e("li",[t._m(5),e("ul",{staticClass:"profile-child-memu"},[e("li",[e("router-link",{attrs:{to:"/invite"}},[t._v("Invite")])],1),e("li",[e("router-link",{attrs:{to:"artist-change-password"}},[t._v("Change Password")])],1),t._m(6)])]),e("li",[t._m(7),e("ul",{staticClass:"profile-child-memu"},[e("li",[e("router-link",{attrs:{to:"/report"}},[t._v("Report")])],1),"2"==t.user.userType?e("li",[e("router-link",{attrs:{to:"/user-agreement"}},[t._v("Legal")])],1):t._e(),t.isPaidMember&&"3"==t.user.userType?e("li",[e("router-link",{attrs:{to:"/setting-autoplay"}},[t._v("Setting for Auto-play")])],1):t._e(),e("li",[e("router-link",{attrs:{to:"/privacy-cookies-policy"}},[t._v("Privacy")])],1)])])])])])])])])]),e("div",{staticClass:"modal fade",attrs:{id:"logoutModal"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-body"},[e("img",{attrs:{src:"/assets/images/log-out-modal-icon.png"}}),e("p",{staticClass:"sign-out-modal-text"},[t._v("\n            Are you sure you want to\n            Logout?\n          ")]),e("p",{staticClass:"modal-btn-para"},[e("button",{staticClass:"logout-btn fan-play-btn",attrs:{type:"button"},on:{click:t.logout}},[t._v("Yes")])]),t._m(8)])])])])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("a",{staticClass:"top-menu-profile",attrs:{href:"javascript:;"}},[e("i",{staticClass:"icon-new-menu"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"btn-menu-button-close-desk",attrs:{type:"button"}},[e("i",{staticClass:"icon-close"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{attrs:{href:"javascript:;"}},[e("i",{staticClass:"icon-settings"}),t._v("Settings\n                  ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{attrs:{href:"javascript:;"}},[e("i",{staticClass:"icon-settings"}),t._v("Records\n                  ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{attrs:{href:"javascript:;"}},[e("i",{staticClass:"icon-settings"}),t._v("Records\n                  ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{attrs:{href:"javascript:;"}},[e("i",{staticClass:"icon-user"}),t._v("Account\n                  ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("a",{staticClass:"log_out_modal_btn",attrs:{href:"javascript:;","data-toggle":"modal","data-target":"#logoutModal"}},[t._v("Logout")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{attrs:{href:"javascript:;"}},[e("i",{staticClass:"icon-about"}),t._v("About\n                  ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",{staticClass:"modal-btn-para mb-0"},[e("a",{staticClass:"modal-close-btn",attrs:{href:"javascript:;","data-dismiss":"modal"}},[t._v("Cancel")])])}],r=e("f499"),o=e.n(r),n=e("41cb"),c=e("6bf9"),l=e("b7d6"),u={name:"AuthHeader",props:{msg:String},data:function(){return{userType:"",user:"",profilemage:1,isPaidMember:!1}},methods:{checkIsPaidMember:function(){var t=JSON.parse(localStorage.getItem("User"));null==t&&void 0==t||void 0!=t.PaymentRecord&&void 0!=t.PaymentRecord.isActive&&1==t.PaymentRecord.isActive&&(this.isPaidMember=!0)},changedata:function(){this.$store.state.ispopup=!1,n["a"].push({path:"/addcard"})},logout:function(){localStorage.removeItem("User"),localStorage.removeItem("stripeId"),localStorage.removeItem("UserType"),localStorage.removeItem("Token"),localStorage.removeItem("contestMusicCount"),localStorage.removeItem("userEmail"),window.location.href="/login"}},mounted:function(){$(".btn-menu-button").click(function(){$(".header-right").addClass("active")}),$(".btn-menu-button-close").click(function(){$(".header-right").removeClass("active")}),$(".top-menu-profile").click(function(){$(".header-right-menu").addClass("show")}),$(".btn-menu-button-close-desk").click(function(){$(".header-right-menu").removeClass("show")}),this.checkIsPaidMember()},created:function(){var t=this;this.userType=JSON.parse(localStorage.getItem("UserType")),l["a"].getUser("",function(a){localStorage.setItem("User",o()(a)),t.user=JSON.parse(localStorage.getItem("User")),t.user.profilePicture?t.$store.state.profilepicture=c["a"].profile_image_path+t.user.profilePicture:t.$store.state.profilepicture=null})},updated:function(){$(".btn-menu-button").click(function(){$(".header-right").addClass("active")}),$(".btn-menu-button-close").click(function(){$(".header-right").removeClass("active")}),$(".top-menu-profile").click(function(){$(".header-right-menu").addClass("show")}),$(".btn-menu-button-close-desk").click(function(){$(".header-right-menu").removeClass("show")})}},d=u,m=(e("d287"),e("2877")),p=Object(m["a"])(d,s,i,!1,null,"307dc479",null);a["a"]=p.exports},a6ee:function(t,a,e){},ac6a:function(t,a,e){for(var s=e("cadf"),i=e("0d58"),r=e("2aba"),o=e("7726"),n=e("32e9"),c=e("84f2"),l=e("2b4c"),u=l("iterator"),d=l("toStringTag"),m=c.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=i(p),f=0;f<h.length;f++){var v,g=h[f],_=p[g],y=o[g],C=y&&y.prototype;if(C&&(C[u]||n(C,u,m),C[d]||n(C,d,g),c[g]=m,_))for(v in s)C[v]||r(C,v,s[v],!0)}},b861:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"footer-colum"},[e("img",{staticClass:"flogo",attrs:{src:"/assets/images/Music-Equalizer-v3.png",alt:""}}),e("h3",[t._v("MiV")]),e("h4",{staticClass:"cursr",on:{click:function(a){return t.$router.push("how-what-why")}}},[t._v("How, What and Why")]),e("h4",{staticClass:"cursr",on:{click:function(a){return t.$router.push("artist-signup")}}},[t._v("Artist Landing Page")])]),t._m(0),t._m(1),t._m(2)]),e("div",{staticClass:"footer-bottom"},[t._m(3),e("p",{staticClass:"copyright-text"},[t._v("© MiV LLC. "+t._s(t.currentYear)+", All Rights Reserved")])])])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footer-colum"},[e("h3",{staticClass:"footer-title"},[t._v("Friends Center for")]),e("div",{staticClass:"friends_logo"},[e("img",{attrs:{src:"/assets/images/f_artist.png",alt:""}}),e("img",{attrs:{src:"/assets/images/f_fans.png",alt:""}})]),e("div",{staticClass:"footer_accor"},[e("h6",[e("a",{attrs:{href:"javascript:;"}},[t._v("Members")])]),e("p",[t._v("\n            If you have any interesting and fun comments we\n            may add them here send to\n            "),e("a",{attrs:{href:"mailto:admin@musicisvivid.com"}},[t._v("admin@musicisvivid.com")]),t._v("\n            and Please keep this short,\n            add a picture if you want.\n          ")])]),e("div",{staticClass:"footer_accor"},[e("h6",[e("a",{attrs:{href:"javascript:;"}},[t._v("Artist")])]),e("p",[t._v("\n            If you have any interesting recommendations or a story to share please feel free\n            to send us an email at\n            "),e("a",{attrs:{href:"mailto:admin@musicisvivid.com"}},[t._v("admin@musicisvivid.com")]),t._v(" and also\n            state if you are a Member or Non-Member. Please keep\n            messaging short. If you have a story we may share it here.\n          ")])]),e("div",{staticClass:"footer_accor"},[e("h6",[e("a",{attrs:{href:"javascript:;"}},[t._v("Affiliates")])]),e("p",[t._v("\n            We may list Affiliates (for example, aggregators who participate and those that do\n            not) and possibly any positive input from affiliates for Members and Artists.\n          ")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footer-colum"},[e("h3",{staticClass:"footer-title"},[t._v("Help")]),e("p",[t._v("\n          If you have questions or comments\n          regarding Navigation, or Report an Issue.\n          Please Send your information to\n          "),e("a",{attrs:{href:"mailto:admin@musicisvivid.com"}},[t._v("admin@musicisvivid.com")]),t._v(".\n          Please state in the Subject Line,\n          Navigation Issue or Report an Issue.\n        ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footer-colum"},[e("div",{staticClass:"footer_app"},[e("h3",{staticClass:"footer-title no-border"},[t._v("Download The MiV App")]),e("a",{staticClass:"footer-store-btn",attrs:{href:"https://play.google.com/store/apps/details?id=com.techno.miv.miv&hl=en",target:"_blank"}},[e("img",{attrs:{src:"assets/images/footer-gplay-btn.png",alt:""}})]),e("a",{staticClass:"footer-store-btn",attrs:{href:"https://apps.apple.com/in/app/music-is-vivid/id1489035451",target:"_blank"}},[e("img",{attrs:{src:"assets/images/footer-appstore-btn.png",alt:""}})])]),e("div",{staticClass:"social_link"},[e("h3",{staticClass:"footer-title no-border"},[t._v("Follow us")]),e("nav",{staticClass:"footer-social"},[e("ul",[e("li",[e("a",{attrs:{href:"https://www.facebook.com/musicisvivid/",target:"_blank"}},[e("i",{staticClass:"icon-facebook"})])]),e("li",[e("a",{attrs:{href:"https://www.instagram.com/musicisvivid/",target:"_blank"}},[e("i",{staticClass:"icon-instagram"})])]),e("li",[e("a",{attrs:{href:"https://twitter.com/musicisvivid",target:"_blank"}},[e("i",{staticClass:"icon-twitter"})])]),e("li",[e("a",{attrs:{href:"https://in.pinterest.com/musicisvivid/pins/",target:"_blank"}},[e("i",{staticClass:"icon-pinterest"})])])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"footer-bottom-menu"},[e("ul",[e("li",[e("a",{attrs:{href:"/user-agreement",target:"_blank"}},[t._v("Terms of Use")])]),e("li",[e("a",{attrs:{href:"/privacy-cookies-policy",target:"_blank"}},[t._v("Privacy & Cookies Policy")])]),e("li",[e("a",{attrs:{href:"/disclaimer",target:"_blank"}},[t._v("Disclaimer")])]),e("li",[e("a",{attrs:{href:"http://blog.musicisvivid.com",target:"_blank"}},[t._v("Blog")])])])])}],r={name:"ComonFotter",props:{msg:String},created:function(){this.currentYear=(new Date).getFullYear()}};$("body").on("click",".footer_accor h6 a",function(){var t=$(this).parent().parent(".footer_accor");t.children("p").is(":visible")?t.children("p").slideUp(400):($(".footer_accor p").slideUp(400),t.children("p").slideDown(400))});var o=r,n=(e("817d"),e("2877")),c=Object(n["a"])(o,s,i,!1,null,"eae83bd2",null);a["a"]=c.exports},c906:function(t,a,e){"use strict";var s=e("4387"),i=e.n(s);i.a},d287:function(t,a,e){"use strict";var s=e("a6ee"),i=e.n(s);i.a},e254:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col col-lg-3 col-md-4 col-xl-2 hidden-small-device custom-column-left-side"},[e("div",{staticClass:"side-menu-bar"},[e("div",{staticClass:"menu-wraper"},[e("ul",{staticClass:"menu-ul"},[e("li",[e("a",{staticClass:"active",attrs:{href:"#"}},[e("i",{staticClass:"icon-avatar"}),t._v("\tMy Profile\n\t\t\t\t\t\t\t\t\t\t\t\t")])]),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"icon-analytics"}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tAnalytics\n\t\t\t\t\t\t\t\t\t\t\t\t")])]),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"icon-search"}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tSearch\n\t\t\t\t\t\t\t\t\t\t\t\t")])]),e("li",[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"icon-leaderboard"}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tLeaderboard\n\t\t\t\t\t\t\t\t\t\t\t\t")])])])])])])}],r={name:"LeftManu",props:{msg:String},mounted:function(){},updated:function(){}},o=r,n=e("2877"),c=Object(n["a"])(o,s,i,!1,null,"23a8600f",null);a["a"]=c.exports}}]);
//# sourceMappingURL=chunk-5e6c3a7a.e2a15e75.js.map