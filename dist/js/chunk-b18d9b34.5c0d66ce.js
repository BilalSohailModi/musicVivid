(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b18d9b34"],{"02f4":function(t,e,a){var s=a("4588"),i=a("be13");t.exports=function(t){return function(e,a){var r,n,o=String(i(e)),l=s(a),c=o.length;return l<0||l>=c?t?"":void 0:(r=o.charCodeAt(l),r<55296||r>56319||l+1===c||(n=o.charCodeAt(l+1))<56320||n>57343?t?o.charAt(l):r:t?o.slice(l,l+2):n-56320+(r-55296<<10)+65536)}}},"0390":function(t,e,a){"use strict";var s=a("02f4")(!0);t.exports=function(t,e,a){return e+(a?s(t,e).length:1)}},"06c6":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("AppHeader"),a("div",{staticClass:"body-wraper",staticStyle:{"padding-bottom":"0"}},[a("loading",{attrs:{active:t.isLoading,"can-cancel":!1,loader:"dots","is-full-page":t.fullPage},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"profile-container"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"box-model-wraper",staticStyle:{"background-color":"white"}},[a("div",{staticClass:"profile-header"},[a("div",{staticClass:"profile-banner"},[1==t.coverpictur?a("img",{attrs:{src:"/assets/images/Spinner.gif",alt:""}}):t._e(),null==t.coverpictur?a("img",{attrs:{src:"/assets/images/Profile-banner.png",alt:""}}):a("img",{attrs:{src:t.coverpictur,alt:""}}),a("div",{staticClass:"profile-banner-uploader"},[null==t.coverpictur?a("label",{},[a("input",{ref:"imageUploader",attrs:{type:"file"},on:{click:t.resetImageUploader,change:function(e){return t.upDatecover(e)}}}),a("i",{staticClass:"icon-photo-camera"})]):t._e()]),t.coverpictur?a("div",[a("label",{staticClass:"upload-select",attrs:{for:"file"}}),a("input",{ref:"imageUploader",attrs:{type:"file",id:"file",accept:"image/*",hidden:""},on:{click:t.resetImageUploader,change:function(e){return t.upDatecover(e)}}})]):t._e()]),a("div",{staticClass:"profile-details-section"},[a("div",{staticClass:"peofile-picture-section"},[a("div",{staticClass:"profile-picture"},[""==t.user.profilePicture||null==t.user.profilePicture?a("img",{attrs:{src:"/assets/images/default_artist.png",alt:""}}):t._e(),t.user.profilePicture?a("div",{staticClass:"profile-image-view",style:{"background-image":"url("+t.allpath.profile_image_path+t.user.profilePicture+")"}}):t._e()]),a("router-link",{attrs:{to:"/fan-edit"}},[a("a",{staticClass:"profile-edit-btn",attrs:{href:"javascript:void(0)"}},[t._v("Edit")])])],1),a("h2",{staticClass:"user-name"},[t._v(t._s(t.user.fullName))])])]),a("div",{staticClass:"profile-dashboard-area",staticStyle:{"background-color":"white"}},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-12 col-lg-10 custom-column-right"},[a("div",{staticClass:"profile-right-section"},[t._m(0),a("div",{staticClass:"album-wraper"},[a("div",{staticClass:"tab-content"},[a("div",{staticClass:"tab-pane fade in active show",attrs:{id:"playlist"}},[a("ul",{staticClass:"album-ul"},[t._m(1),t.isPaidUser&&"3"==t.user.userType?a("li",[a("router-link",{staticClass:"pop-up-btn",attrs:{to:"/autoplay-album-list"}},[a("img",{attrs:{src:"assets/images/autoplay.png"}})])],1):t._e(),t._l(t.myPlayList,function(e,s){return a("li",{key:s},[a("router-link",{attrs:{to:{name:"FanAlbumview",params:{id:e.id}}}},[""==e.coverImage||null==e.coverImage?a("img",{attrs:{src:"assets/images/album-cover-photo.png"}}):a("img",{attrs:{src:t.allpath.playist_pictures+e.coverImage}})])],1)}),a("infinite-loading",{on:{infinite:t.infiniteHandler}},[a("div",{attrs:{slot:"spinner"},slot:"spinner"},[a("img",{attrs:{src:"/assets/images/loader.gif"}})]),a("div",{attrs:{slot:"no-more"},slot:"no-more"},[t._v(t._s(""))]),a("div",{attrs:{slot:"no-results"},slot:"no-results"},[t._v(t._s(""))])])],2)]),a("div",{staticClass:"tab-pane fade",attrs:{id:"new_releases"}},[a("ul",{staticClass:"fan-new-releases-album-ul"},[t._l(t.newReleaseAlbumArr,function(e,s){return a("li",{key:s},[a("router-link",{attrs:{to:{name:"ArtistAlbumdetails",params:{id:e.id}}}},[""==e.coverImage||null==e.coverImage?a("img",{attrs:{src:"assets/images/deefault_album.png"}}):a("img",{attrs:{src:t.allpath.album_pictures+e.coverImage}})])],1)}),a("infinite-loading",{on:{infinite:t.infiniteHandler2}},[a("div",{attrs:{slot:"spinner"},slot:"spinner"},[a("img",{attrs:{src:"/assets/images/loader.gif"}})]),a("div",{attrs:{slot:"no-more"},slot:"no-more"},[t._v(t._s(""))]),a("div",{attrs:{slot:"no-results"},slot:"no-results"},[t._v(t._s(""))])])],2)])])])])])])])])]),a("div",{staticClass:"modal custom-pop-up fade show",staticStyle:{display:"none","padding-right":"17px"},attrs:{id:"create-play-list-Modal"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h4",{staticClass:"modal-title"},[t._v("Create Album")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.closeModal}},[t._v("\n                  ×\n                ")])]),a("div",{staticClass:"modal-body"},[a("form",[a("div",{staticClass:"pop-up-drag-n-drop"},[t.istiltleGiven?a("div",{staticClass:"error-messages"},[t._v("\n                      Please Give A Title\n                    ")]):t._e(),a("label",{on:{dragover:function(t){t.preventDefault()},drop:t.onDrop}},[""==t.coverpicurl?a("img",{attrs:{src:"/assets/images/upload-pop-img.png",alt:"image"}}):a("img",{attrs:{src:t.coverpicurl,alt:"image"}}),a("p",{staticClass:"drg-n-drp-para"},[t._v("Drag and Drop File to Upload")]),t._m(2),a("input",{attrs:{type:"file"},on:{change:t.coverUpload}})])]),a("div",{staticClass:"form-group pop-up-form-group"},[a("label",[t._v("Playlist Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Eg. Best of Justin Bieber"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),a("p",{staticClass:"text-center"},[a("button",{staticClass:"fan-play-btn mt-0",attrs:{type:"button"},on:{click:t.createPlayLiast}},[t._v("\n                      Save\n                    ")])])])])])])]),a("div",{staticClass:"modal custom-pop-up fade show",staticStyle:{"padding-right":"17px",display:"none"},attrs:{id:"create-playlistsuccess-Modal"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-body success-modal"},[t._m(3),a("h3",{staticClass:"success-heading"},[t._v("Playlist Created Successfully")]),a("p",{staticClass:"text-center"},[t._v("‘"+t._s(t.title1)+"’ Successfully Created")]),a("p",{staticClass:"text-center"},[a("a",{staticClass:"fan-play-btn",attrs:{href:"javascript:void(0)"},on:{click:t.closemodal1}},[t._v("Continue")])])])])])])])],1),a("div",{staticClass:"modal contest-modal",attrs:{id:"image_resize_modal","data-backdrop":"static","data-keyboard":"false"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"modal-inner-body"},[a("div",[a("div",[a("vue-cropper",{ref:"cropper",attrs:{guides:!0,"view-mode":2,"drag-mode":"move","auto-crop-area":.3,background:!0,rotatable:!0,cropBoxResizable:!1,src:t.imgSrc,alt:"Source Image"}})],1)]),a("div",{staticClass:"text-center p-3"},[""!=t.imgSrc?a("button",{staticClass:"btn btn-success",on:{click:function(e){return t.updateImage()}}},[t._v("\n                  Save\n                ")]):t._e(),""!=t.imgSrc?a("button",{staticClass:"btn btn-info",on:{click:function(e){return t.rotate()}}},[t._v("\n                  Rotate\n                ")]):t._e(),a("button",{staticClass:"btn btn-dark",on:{click:function(e){return t.closeCropper()}}},[t._v("\n                  Cancel\n                ")])])])])])])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"top-section display-flex"},[a("div",{staticClass:"tab-nav-section"},[a("ul",{staticClass:"nav nav-tabs fan-profile-tab"},[a("li",{staticClass:"active"},[a("a",{staticClass:"active show",attrs:{"data-toggle":"pill",href:"#playlist"}},[t._v("My Playlist")])]),a("li",[a("a",{attrs:{"data-toggle":"pill",href:"#new_releases"}},[t._v("New Releases")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{staticClass:"pop-up-btn",attrs:{href:"javascript:;","data-toggle":"modal","data-target":"#create-play-list-Modal"}},[a("img",{attrs:{src:"assets/images/add.png"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"browse"},[t._v("\n                        or\n                        "),a("span",[t._v("browse")]),t._v(" to choose image\n                      ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"success-img-sec text-center"},[a("img",{staticClass:"img-fluid",attrs:{src:"/assets/images/success-bg.png",alt:"image"}}),a("div",{staticClass:"text-center success-img"},[a("img",{attrs:{src:"/assets/images/success-img.png",alt:""}})])])}],r=a("f499"),n=a.n(r),o=(a("a481"),a("6762"),a("2fdb"),a("7f7f"),a("795b")),l=a.n(o),c=a("6bf9"),u=a("b7d6"),d=a("9062"),p=a.n(d),f=(a("e40d"),a("86d0")),m=(a("bc3a"),a("b861")),v=a("e166"),g=a.n(v),h=a("e254"),_=a("4ec3"),b=a("95c3"),C=a.n(b),y=(a("6107"),{name:"ArtistProfile",props:{msg:String},components:{AppHeader:f["a"],AppFooter:m["a"],LeftManu:h["a"],Loading:p.a,InfiniteLoading:g.a,VueCropper:C.a},data:function(){return{user:"",profilemage:null,isLoading:!1,istiltleGiven:!1,coverpictur:1,fullPage:!0,coverpicurl:"",title:"",myPlayList:[],newReleaseAlbumArr:[],coverFile:"",allpath:c["a"],page:1,page1:1,title1:"",imgSrc:"",cropImg:"",fileName:"",isPaidUser:!1}},methods:{resetImageUploader:function(){this.$refs.imageUploader.value=""},onDrop:function(t){var e=this;t.stopPropagation(),t.preventDefault();var a=t.dataTransfer.files[0];function s(t){return new l.a(function(e,a){var s=new FileReader;s.readAsDataURL(t),s.onload=function(){return e(s.result)},s.onerror=function(t){return a(t)}})}s(a).then(function(t){e.iscoverUploaded=!0,e.coverpicurl=t}),this.coverFile=t.dataTransfer.files[0]},initializepalylist:function(){var t=this;this.page;_["a"].get("playlist",{headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}}).then(function(e){e.data&&(t.myPlayList=e.data.data)}).catch(function(t){})},closeModal:function(){this.istiltleGiven=!1,$("#create-play-list-Modal").modal("hide"),this.coverpicurl="",this.coverFile="",this.title=""},closemodal1:function(){$("#create-playlistsuccess-Modal").modal("hide")},coverUpload:function(t){var e=this,a=t.target.files[0];function s(t){return new l.a(function(e,a){var s=new FileReader;s.readAsDataURL(t),s.onload=function(){return e(s.result)},s.onerror=function(t){return a(t)}})}s(a).then(function(t){e.iscoverUploaded=!0,e.coverpicurl=t}),this.coverFile=t.target.files[0]},createPlayLiast:function(){var t=this;if(""==this.title)this.istiltleGiven=!0;else{this.isLoading=!0;var e=new FormData;e.append("title",this.title),e.append("coverImage",this.coverFile);var a={headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}};_["a"].post("playlist",e,a).then(function(e){t.isLoading=!1,e.data&&(t.initializepalylist(),t.istiltleGiven=!1,$("#create-play-list-Modal").modal("hide"),$("#create-playlistsuccess-Modal").modal("show"),t.coverpicurl="",t.coverFile="",t.title1=t.title,t.title="")}).catch(function(e){t.isLoading=!1})}},infiniteHandler:function(t){var e=this;this.page=this.page+1;var a={page:this.page,perPage:10};_["a"].get("playlist",{params:a,headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}}).then(function(a){a.data&&(a.data.data.map(function(t){e.myPlayList.push(t)}),0==a.data.data.length?t.complete():t.loaded())}).catch(function(t){})},upDatecover:function(t){var e=this,a=t.target.files[0];if(t.target.files[0]&&t.target.files[0].name&&(this.fileName=t.target.files[0].name),a.type.includes("image/"))if($("#image_resize_modal").modal("show"),$("#image_resize_modal").modal({backdrop:"static",keyboard:!1}),"function"===typeof FileReader){var s=new FileReader;s.onload=function(t){e.imgSrc=t.target.result,e.$refs.cropper.replace(t.target.result)},s.readAsDataURL(a)}else alert("Sorry, FileReader API not supported");else alert("Please select an image file")},updateImage:function(){var t=this;this.cropImg=this.$refs.cropper.getCroppedCanvas().toDataURL();var e=this.cropImg;$("#image_resize_modal").modal("hide"),this.isLoading=!0,fetch(e).then(function(t){return t.blob()}).then(function(e){var a=new FormData,s=new File([e],t.fileName);a.append("coverPicture",s);var i={headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}};_["a"].post("update-cover-picture",a,i).then(function(e){e.data&&(t.coverpictur=c["a"].cover_pictures+e.data.data.coverPicture,t.isLoading=!1)}).catch(function(e){t.isLoading=!1})})},rotate:function(){this.$refs.cropper.rotate(90)},closeCropper:function(){$("#image_resize_modal").modal("hide")},infiniteHandler2:function(t){var e=this;this.page1=this.page1+1;var a={page:this.page1,perPage:10};_["a"].get("new-releases",{params:a,headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}}).then(function(a){a.data&&(a.data.data.map(function(t){e.newReleaseAlbumArr.push(t)}),0==a.data.data.length?t.complete():t.loaded())}).catch(function(t){})},getNewReleaseAlbumList:function(){var t=this,e={page:1,perPage:10};_["a"].get("new-releases",{params:e,headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}}).then(function(e){e.data&&(t.newReleaseAlbumArr=e.data.data)}).catch(function(t){})},checkUserIsPaid:function(){var t=JSON.parse(localStorage.getItem("User"));null==t&&void 0==t||t.PaymentRecord.isActive&&(this.isPaidUser=!0)}},created:function(){var t=this;this.checkUserIsPaid(),this.getNewReleaseAlbumList(),this.initializepalylist(),u["a"].getUser("profile",function(e){localStorage.setItem("User",n()(e.user)),t.user=JSON.parse(localStorage.getItem("User")),null!=t.user.profilePicture&&(t.profilemage=c["a"].profile_image_path+t.user.profilePicture),null!=t.user.coverPicture?t.coverpictur=c["a"].cover_pictures+t.user.coverPicture:t.coverpictur=null})},mounted:function(){}}),k=y,w=(a("a3d8"),a("2877")),S=Object(w["a"])(k,s,i,!1,null,"211eadd6",null);e["default"]=S.exports},"0bfb":function(t,e,a){"use strict";var s=a("cb7c");t.exports=function(){var t=s(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,a){"use strict";a("b0c5");var s=a("2aba"),i=a("32e9"),r=a("79e5"),n=a("be13"),o=a("2b4c"),l=a("520a"),c=o("species"),u=!r(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),d=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2===a.length&&"a"===a[0]&&"b"===a[1]}();t.exports=function(t,e,a){var p=o(t),f=!r(function(){var e={};return e[p]=function(){return 7},7!=""[t](e)}),m=f?!r(function(){var e=!1,a=/a/;return a.exec=function(){return e=!0,null},"split"===t&&(a.constructor={},a.constructor[c]=function(){return a}),a[p](""),!e}):void 0;if(!f||!m||"replace"===t&&!u||"split"===t&&!d){var v=/./[p],g=a(n,p,""[t],function(t,e,a,s,i){return e.exec===l?f&&!i?{done:!0,value:v.call(e,a,s)}:{done:!0,value:t.call(a,e,s)}:{done:!1}}),h=g[0],_=g[1];s(String.prototype,t,h),i(RegExp.prototype,p,2==e?function(t,e){return _.call(t,this,e)}:function(t){return _.call(t,this)})}}},"279a":function(t,e,a){},"2fdb":function(t,e,a){"use strict";var s=a("5ca1"),i=a("d2c8"),r="includes";s(s.P+s.F*a("5147")(r),"String",{includes:function(t){return!!~i(this,t,r).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},5147:function(t,e,a){var s=a("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[s]=!1,!"/./"[t](e)}catch(i){}}return!0}},"520a":function(t,e,a){"use strict";var s=a("0bfb"),i=RegExp.prototype.exec,r=String.prototype.replace,n=i,o="lastIndex",l=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[o]||0!==e[o]}(),c=void 0!==/()??/.exec("")[1],u=l||c;u&&(n=function(t){var e,a,n,u,d=this;return c&&(a=new RegExp("^"+d.source+"$(?!\\s)",s.call(d))),l&&(e=d[o]),n=i.call(d,t),l&&n&&(d[o]=d.global?n.index+n[0].length:e),c&&n&&n.length>1&&r.call(n[0],a,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(n[u]=void 0)}),n}),t.exports=n},"5f1b":function(t,e,a){"use strict";var s=a("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var r=a.call(t,e);if("object"!==typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==s(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},6762:function(t,e,a){"use strict";var s=a("5ca1"),i=a("c366")(!0);s(s.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")("includes")},"7f7f":function(t,e,a){var s=a("86cc").f,i=Function.prototype,r=/^\s*function ([^ (]*)/,n="name";n in i||a("9e1e")&&s(i,n,{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(t){return""}}})},"817d":function(t,e,a){"use strict";var s=a("279a"),i=a.n(s);i.a},"86d0":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"profile-page-header"},[a("div",{staticClass:"header-wraper"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row align-items-center justify-content-between"},[a("div",{staticClass:"logo inner-page"},[a("router-link",{attrs:{to:""}},[a("img",{attrs:{src:"/assets/images/Music-Equalizer-v3.png",alt:""}})])],1),a("div"),a("div",{staticClass:"desktop-profile-menu"},[a("ul",[a("li",[a("router-link",{attrs:{to:"/profile"}},[a("span",{staticClass:"menu-profile-img"},[1==t.$store.state.profilepicture?a("img",{attrs:{src:"/assets/images/Spinner.gif",alt:""}}):t._e(),null==t.$store.state.profilepicture?a("img",{attrs:{src:"/assets/images/default_artist.png",alt:""}}):a("img",{attrs:{src:t.$store.state.profilepicture,alt:""}})])])],1),a("li",["3"==t.userType?a("div",[a("router-link",{attrs:{to:"/myplaylist"}},[a("i",{staticClass:"icon-music-player"})])],1):a("div",[a("router-link",{attrs:{to:"/analytics"}},[a("i",{staticClass:"icon-analytics"})])],1)]),a("li",[a("router-link",{attrs:{to:"/searchartist"}},[a("i",{staticClass:"icon-search"})])],1),"2"==t.userType?a("li",[a("router-link",{attrs:{to:"/leader-board"}},[a("i",{staticClass:"icon-leaderboard"})])],1):t._e(),"3"==t.userType?a("li",[a("router-link",{attrs:{to:"/startcontest"}},[a("i",{staticClass:"icon-leaderboard"})])],1):t._e(),t._m(0)])]),a("div",{staticClass:"header-right-menu"},[t._m(1),a("div",{staticClass:"right-menu-box"},[a("nav",{staticClass:"navigation"},[a("ul",[a("li",[t._m(2),a("ul",{staticClass:"profile-child-memu"},[a("li",["3"==t.user.userType?a("router-link",{attrs:{to:"/fan-edit"}},[t._v("Information")]):t._e()],1),a("li",["2"==t.user.userType?a("router-link",{attrs:{to:"/artist-edit"}},[t._v("Information")]):t._e()],1),"3"==t.user.userType?a("li",[a("a",{attrs:{href:"javascript:;"},on:{click:t.changedata}},[t._v("Payment method")])]):t._e(),t.isPaidMember&&"3"==t.user.userType?a("li",[a("router-link",{attrs:{to:"/setting-autoplay"}},[t._v("Setting for Auto-play")])],1):t._e()])]),"3"==t.user.userType?a("li",[t._m(3),a("ul",{staticClass:"profile-child-memu"},[t.user.PaymentRecord?t._e():a("li",[a("router-link",{attrs:{to:"/membership-popup"}},[t._v("Leaderboard")])],1),t.user.PaymentRecord&&0===t.user.PaymentRecord.isActive?a("li",[a("router-link",{attrs:{to:"/membership-popup"}},[t._v("Leaderboard")])],1):t._e(),t.user.PaymentRecord&&1===t.user.PaymentRecord.isActive?a("li",[a("router-link",{attrs:{to:"/leader-board"}},[t._v("Leaderboard")])],1):t._e(),a("li",[a("router-link",{attrs:{to:"/competition-work-flow"}},[t._v("How it works")])],1)]),a("ul",{staticClass:"profile-child-memu"},[a("li",[a("router-link",{attrs:{to:"/analytics"}},[t._v("Analytics")])],1)])]):t._e(),"2"==t.user.userType?a("li",[t._m(4),a("ul",{staticClass:"profile-child-memu"},[a("li",[a("router-link",{attrs:{to:"/competition-work-flow"}},[t._v("How it works")])],1)])]):t._e(),a("li",[t._m(5),a("ul",{staticClass:"profile-child-memu"},[a("li",[a("router-link",{attrs:{to:"/invite"}},[t._v("Invite")])],1),a("li",[a("router-link",{attrs:{to:"artist-change-password"}},[t._v("Change Password")])],1),t._m(6)])]),a("li",[t._m(7),a("ul",{staticClass:"profile-child-memu"},[a("li",[a("router-link",{attrs:{to:"/report"}},[t._v("Report")])],1),"2"==t.user.userType?a("li",[a("router-link",{attrs:{to:"/user-agreement"}},[t._v("Legal")])],1):t._e(),t.isPaidMember&&"3"==t.user.userType?a("li",[a("router-link",{attrs:{to:"/setting-autoplay"}},[t._v("Setting for Auto-play")])],1):t._e(),a("li",[a("router-link",{attrs:{to:"/privacy-cookies-policy"}},[t._v("Privacy")])],1)])])])])])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"logoutModal"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-body"},[a("img",{attrs:{src:"/assets/images/log-out-modal-icon.png"}}),a("p",{staticClass:"sign-out-modal-text"},[t._v("\n            Are you sure you want to\n            Logout?\n          ")]),a("p",{staticClass:"modal-btn-para"},[a("button",{staticClass:"logout-btn fan-play-btn",attrs:{type:"button"},on:{click:t.logout}},[t._v("Yes")])]),t._m(8)])])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{staticClass:"top-menu-profile",attrs:{href:"javascript:;"}},[a("i",{staticClass:"icon-new-menu"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"btn-menu-button-close-desk",attrs:{type:"button"}},[a("i",{staticClass:"icon-close"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"javascript:;"}},[a("i",{staticClass:"icon-settings"}),t._v("Settings\n                  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"javascript:;"}},[a("i",{staticClass:"icon-settings"}),t._v("Records\n                  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"javascript:;"}},[a("i",{staticClass:"icon-settings"}),t._v("Records\n                  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"javascript:;"}},[a("i",{staticClass:"icon-user"}),t._v("Account\n                  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{staticClass:"log_out_modal_btn",attrs:{href:"javascript:;","data-toggle":"modal","data-target":"#logoutModal"}},[t._v("Logout")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"javascript:;"}},[a("i",{staticClass:"icon-about"}),t._v("About\n                  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"modal-btn-para mb-0"},[a("a",{staticClass:"modal-close-btn",attrs:{href:"javascript:;","data-dismiss":"modal"}},[t._v("Cancel")])])}],r=a("f499"),n=a.n(r),o=a("41cb"),l=a("6bf9"),c=a("b7d6"),u={name:"AuthHeader",props:{msg:String},data:function(){return{userType:"",user:"",profilemage:1,isPaidMember:!1}},methods:{checkIsPaidMember:function(){var t=JSON.parse(localStorage.getItem("User"));null==t&&void 0==t||void 0!=t.PaymentRecord&&void 0!=t.PaymentRecord.isActive&&1==t.PaymentRecord.isActive&&(this.isPaidMember=!0)},changedata:function(){this.$store.state.ispopup=!1,o["a"].push({path:"/addcard"})},logout:function(){localStorage.removeItem("User"),localStorage.removeItem("stripeId"),localStorage.removeItem("UserType"),localStorage.removeItem("Token"),localStorage.removeItem("contestMusicCount"),localStorage.removeItem("userEmail"),window.location.href="/login"}},mounted:function(){$(".btn-menu-button").click(function(){$(".header-right").addClass("active")}),$(".btn-menu-button-close").click(function(){$(".header-right").removeClass("active")}),$(".top-menu-profile").click(function(){$(".header-right-menu").addClass("show")}),$(".btn-menu-button-close-desk").click(function(){$(".header-right-menu").removeClass("show")}),this.checkIsPaidMember()},created:function(){var t=this;this.userType=JSON.parse(localStorage.getItem("UserType")),c["a"].getUser("",function(e){localStorage.setItem("User",n()(e)),t.user=JSON.parse(localStorage.getItem("User")),t.user.profilePicture?t.$store.state.profilepicture=l["a"].profile_image_path+t.user.profilePicture:t.$store.state.profilepicture=null})},updated:function(){$(".btn-menu-button").click(function(){$(".header-right").addClass("active")}),$(".btn-menu-button-close").click(function(){$(".header-right").removeClass("active")}),$(".top-menu-profile").click(function(){$(".header-right-menu").addClass("show")}),$(".btn-menu-button-close-desk").click(function(){$(".header-right-menu").removeClass("show")})}},d=u,p=(a("d287"),a("2877")),f=Object(p["a"])(d,s,i,!1,null,"307dc479",null);e["a"]=f.exports},a3d8:function(t,e,a){"use strict";var s=a("e206"),i=a.n(s);i.a},a481:function(t,e,a){"use strict";var s=a("cb7c"),i=a("4bf8"),r=a("9def"),n=a("4588"),o=a("0390"),l=a("5f1b"),c=Math.max,u=Math.min,d=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g,m=function(t){return void 0===t?t:String(t)};a("214f")("replace",2,function(t,e,a,v){return[function(s,i){var r=t(this),n=void 0==s?void 0:s[e];return void 0!==n?n.call(s,r,i):a.call(String(r),s,i)},function(t,e){var i=v(a,t,this,e);if(i.done)return i.value;var d=s(t),p=String(this),f="function"===typeof e;f||(e=String(e));var h=d.global;if(h){var _=d.unicode;d.lastIndex=0}var b=[];while(1){var C=l(d,p);if(null===C)break;if(b.push(C),!h)break;var y=String(C[0]);""===y&&(d.lastIndex=o(p,r(d.lastIndex),_))}for(var k="",w=0,S=0;S<b.length;S++){C=b[S];for(var $=String(C[0]),x=c(u(n(C.index),p.length),0),P=[],I=1;I<C.length;I++)P.push(m(C[I]));var A=C.groups;if(f){var R=[$].concat(P,x,p);void 0!==A&&R.push(A);var E=String(e.apply(void 0,R))}else E=g($,p,x,P,A,e);x>=w&&(k+=p.slice(w,x)+E,w=x+$.length)}return k+p.slice(w)}];function g(t,e,s,r,n,o){var l=s+t.length,c=r.length,u=f;return void 0!==n&&(n=i(n),u=p),a.call(o,u,function(a,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,s);case"'":return e.slice(l);case"<":o=n[i.slice(1,-1)];break;default:var u=+i;if(0===u)return a;if(u>c){var p=d(u/10);return 0===p?a:p<=c?void 0===r[p-1]?i.charAt(1):r[p-1]+i.charAt(1):a}o=r[u-1]}return void 0===o?"":o})}})},a6ee:function(t,e,a){},aae3:function(t,e,a){var s=a("d3f4"),i=a("2d95"),r=a("2b4c")("match");t.exports=function(t){var e;return s(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==i(t))}},b0c5:function(t,e,a){"use strict";var s=a("520a");a("5ca1")({target:"RegExp",proto:!0,forced:s!==/./.exec},{exec:s})},b861:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"footer-colum"},[a("img",{staticClass:"flogo",attrs:{src:"/assets/images/Music-Equalizer-v3.png",alt:""}}),a("h3",[t._v("MiV")]),a("h4",{staticClass:"cursr",on:{click:function(e){return t.$router.push("how-what-why")}}},[t._v("How, What and Why")]),a("h4",{staticClass:"cursr",on:{click:function(e){return t.$router.push("artist-signup")}}},[t._v("Artist Landing Page")])]),t._m(0),t._m(1),t._m(2)]),a("div",{staticClass:"footer-bottom"},[t._m(3),a("p",{staticClass:"copyright-text"},[t._v("© MiV LLC. "+t._s(t.currentYear)+", All Rights Reserved")])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-colum"},[a("h3",{staticClass:"footer-title"},[t._v("Friends Center for")]),a("div",{staticClass:"friends_logo"},[a("img",{attrs:{src:"/assets/images/f_artist.png",alt:""}}),a("img",{attrs:{src:"/assets/images/f_fans.png",alt:""}})]),a("div",{staticClass:"footer_accor"},[a("h6",[a("a",{attrs:{href:"javascript:;"}},[t._v("Members")])]),a("p",[t._v("\n            If you have any interesting and fun comments we\n            may add them here send to\n            "),a("a",{attrs:{href:"mailto:admin@musicisvivid.com"}},[t._v("admin@musicisvivid.com")]),t._v("\n            and Please keep this short,\n            add a picture if you want.\n          ")])]),a("div",{staticClass:"footer_accor"},[a("h6",[a("a",{attrs:{href:"javascript:;"}},[t._v("Artist")])]),a("p",[t._v("\n            If you have any interesting recommendations or a story to share please feel free\n            to send us an email at\n            "),a("a",{attrs:{href:"mailto:admin@musicisvivid.com"}},[t._v("admin@musicisvivid.com")]),t._v(" and also\n            state if you are a Member or Non-Member. Please keep\n            messaging short. If you have a story we may share it here.\n          ")])]),a("div",{staticClass:"footer_accor"},[a("h6",[a("a",{attrs:{href:"javascript:;"}},[t._v("Affiliates")])]),a("p",[t._v("\n            We may list Affiliates (for example, aggregators who participate and those that do\n            not) and possibly any positive input from affiliates for Members and Artists.\n          ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-colum"},[a("h3",{staticClass:"footer-title"},[t._v("Help")]),a("p",[t._v("\n          If you have questions or comments\n          regarding Navigation, or Report an Issue.\n          Please Send your information to\n          "),a("a",{attrs:{href:"mailto:admin@musicisvivid.com"}},[t._v("admin@musicisvivid.com")]),t._v(".\n          Please state in the Subject Line,\n          Navigation Issue or Report an Issue.\n        ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-colum"},[a("div",{staticClass:"footer_app"},[a("h3",{staticClass:"footer-title no-border"},[t._v("Download The MiV App")]),a("a",{staticClass:"footer-store-btn",attrs:{href:"https://play.google.com/store/apps/details?id=com.techno.miv.miv&hl=en",target:"_blank"}},[a("img",{attrs:{src:"assets/images/footer-gplay-btn.png",alt:""}})]),a("a",{staticClass:"footer-store-btn",attrs:{href:"https://apps.apple.com/in/app/music-is-vivid/id1489035451",target:"_blank"}},[a("img",{attrs:{src:"assets/images/footer-appstore-btn.png",alt:""}})])]),a("div",{staticClass:"social_link"},[a("h3",{staticClass:"footer-title no-border"},[t._v("Follow us")]),a("nav",{staticClass:"footer-social"},[a("ul",[a("li",[a("a",{attrs:{href:"https://www.facebook.com/musicisvivid/",target:"_blank"}},[a("i",{staticClass:"icon-facebook"})])]),a("li",[a("a",{attrs:{href:"https://www.instagram.com/musicisvivid/",target:"_blank"}},[a("i",{staticClass:"icon-instagram"})])]),a("li",[a("a",{attrs:{href:"https://twitter.com/musicisvivid",target:"_blank"}},[a("i",{staticClass:"icon-twitter"})])]),a("li",[a("a",{attrs:{href:"https://in.pinterest.com/musicisvivid/pins/",target:"_blank"}},[a("i",{staticClass:"icon-pinterest"})])])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"footer-bottom-menu"},[a("ul",[a("li",[a("a",{attrs:{href:"/user-agreement",target:"_blank"}},[t._v("Terms of Use")])]),a("li",[a("a",{attrs:{href:"/privacy-cookies-policy",target:"_blank"}},[t._v("Privacy & Cookies Policy")])]),a("li",[a("a",{attrs:{href:"/disclaimer",target:"_blank"}},[t._v("Disclaimer")])]),a("li",[a("a",{attrs:{href:"http://blog.musicisvivid.com",target:"_blank"}},[t._v("Blog")])])])])}],r={name:"ComonFotter",props:{msg:String},created:function(){this.currentYear=(new Date).getFullYear()}};$("body").on("click",".footer_accor h6 a",function(){var t=$(this).parent().parent(".footer_accor");t.children("p").is(":visible")?t.children("p").slideUp(400):($(".footer_accor p").slideUp(400),t.children("p").slideDown(400))});var n=r,o=(a("817d"),a("2877")),l=Object(o["a"])(n,s,i,!1,null,"eae83bd2",null);e["a"]=l.exports},d287:function(t,e,a){"use strict";var s=a("a6ee"),i=a.n(s);i.a},d2c8:function(t,e,a){var s=a("aae3"),i=a("be13");t.exports=function(t,e,a){if(s(e))throw TypeError("String#"+a+" doesn't accept regex!");return String(i(t))}},e206:function(t,e,a){},e254:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col col-lg-3 col-md-4 col-xl-2 hidden-small-device custom-column-left-side"},[a("div",{staticClass:"side-menu-bar"},[a("div",{staticClass:"menu-wraper"},[a("ul",{staticClass:"menu-ul"},[a("li",[a("a",{staticClass:"active",attrs:{href:"#"}},[a("i",{staticClass:"icon-avatar"}),t._v("\tMy Profile\n\t\t\t\t\t\t\t\t\t\t\t\t")])]),a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"icon-analytics"}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tAnalytics\n\t\t\t\t\t\t\t\t\t\t\t\t")])]),a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"icon-search"}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tSearch\n\t\t\t\t\t\t\t\t\t\t\t\t")])]),a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"icon-leaderboard"}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tLeaderboard\n\t\t\t\t\t\t\t\t\t\t\t\t")])])])])])])}],r={name:"LeftManu",props:{msg:String},mounted:function(){},updated:function(){}},n=r,o=a("2877"),l=Object(o["a"])(n,s,i,!1,null,"23a8600f",null);e["a"]=l.exports}}]);
//# sourceMappingURL=chunk-b18d9b34.5c0d66ce.js.map