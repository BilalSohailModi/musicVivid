(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b41aa344"],{"02f4":function(t,e,s){var i=s("4588"),a=s("be13");t.exports=function(t){return function(e,s){var n,o,r=String(a(e)),l=i(s),c=r.length;return l<0||l>=c?t?"":void 0:(n=r.charCodeAt(l),n<55296||n>56319||l+1===c||(o=r.charCodeAt(l+1))<56320||o>57343?t?r.charAt(l):n:t?r.slice(l,l+2):o-56320+(n-55296<<10)+65536)}}},"0390":function(t,e,s){"use strict";var i=s("02f4")(!0);t.exports=function(t,e,s){return e+(s?i(t,e).length:1)}},"0bfb":function(t,e,s){"use strict";var i=s("cb7c");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"1ddf":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"live-contest-section"},[t._m(0),t.songList.length<3?s("div",{staticClass:"text-right p-3"},[s("button",{staticClass:"dash-board-btn",on:{click:function(e){return t.addSongView()}}},[t._v("\n        Add Song/Video\n      ")])]):t._e(),t.isUploadView?s("div",{staticClass:"row m-0 details-animated"},[s("div",{staticClass:"col-md-2"}),s("div",{staticClass:"col-md-8 upload-div m-5"},[s("h2",{staticClass:"alb-page-heading"},[t._v("Upload Song/Video")]),s("div",{staticClass:"p-5"},[s("label",{staticClass:"song-title"},[t._v("Title")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.songTitle,expression:"songTitle"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{placeholder:"Enter your Song/Video title",type:"text",name:"Song Title"},domProps:{value:t.songTitle},on:{input:function(e){e.target.composing||(t.songTitle=e.target.value)}}}),t.isSongTitle?s("div",{staticClass:"text-danger mt-1"},[t._v("\n            Please Select A Title\n          ")]):t._e()]),s("div",{staticClass:"justify-content-center relativediv"},[s("div",{staticClass:"col-md-12"},[t.typeError?s("div",{staticClass:"text-danger2"},[t._v("\n              Please Select A Mp3/Mp4 File\n            ")]):t._e(),t.isuploaded?s("div",{staticClass:"text-danger2"},[t._v("\n              Please Select A Song\n            ")]):t._e(),s("form",{attrs:{method:"post"}},[s("label",{staticClass:"drag-drop",on:{dragover:function(t){t.preventDefault()},drop:t.onDrop}},[t._m(1),s("span",{staticClass:"upload-here"},[t._v("or, Click to Browse Song")]),s("input",{attrs:{type:"file"},on:{click:function(t){t.target.value=null},change:t.onChange}})])])]),s("div",{staticClass:"col-md-12"},t._l(t.albumSong,function(e,i){return s("label",{key:i,staticClass:"upload-progress"},[s("span",{staticClass:"music-icon"},[s("img",{attrs:{src:"audio/mp3"==e.type?"/assets/images/music-file.png":"/assets/images/video-file.png",width:"30",alt:""}})]),s("span",{staticClass:"name-progress-size"},[s("span",{staticClass:"title"},[t._v(t._s(e.name)+" "+t._s(e.type))]),s("span",{staticClass:"title"},[t._v(t._s(t._f("mb")(e.size)))])]),s("span",{staticClass:"cancel-upload"},[s("a",{staticClass:"remove-upload",attrs:{href:"javascript:;"},on:{click:function(e){return t.removeFile(i)}}},[s("i",{staticClass:"icon-close"})])])])}),0),s("div",{staticClass:"text-center p-3"},[s("button",{staticClass:"btn-signin d-inline-block",attrs:{type:"button"},on:{click:function(e){return t.saveUploadedFile()}}},[t._v("\n              Save\n            ")]),s("a",{staticClass:"btn-cancel",on:{click:function(e){return t.cancel()}}},[t._v("Cancel")])]),s("loading",{attrs:{active:t.isLoading,"can-cancel":!1,loader:"dots","is-full-page":t.fullPage},on:{"update:active":function(e){t.isLoading=e}}},[s("div",[t._v("Uploading music.....")]),s("div",{staticClass:"progress-bar"},[s("span",{staticClass:"progress-bar-details"},[s("span",{staticClass:"fill-value",style:{width:this.widthValue+"%"}},[t._v(t._s(t.widthValue)+"%")])])])])],1)]),s("div",{staticClass:"col-md-2"})]):t._e(),s("div",{staticClass:"col-md-10 m-auto border-cls"},[s("div",{staticClass:"track-row-container"},[t._m(2),t.errorMsg?s("div",{staticClass:"text-center"},[t._v("\n          Please upload at least one music\n        ")]):t._e(),s("div",[s("draggable",{on:{end:t.onEnd},model:{value:t.songList,callback:function(e){t.songList=e},expression:"songList"}},t._l(t.songList,function(e,i){return s("div",{key:i,staticClass:"track-row"},[s("div",{staticClass:"track-icon-box"},[s("label",{staticClass:"drag-icon"},[s("img",{attrs:{src:"/assets/images/track-row-drag-icon.png",alt:""}})]),s("label",{staticClass:"track-row-check"},[s("span",{staticClass:"check-box"})]),s("label",{staticClass:"track-play-btn"},[s("button",{attrs:{id:"button"+e.id},on:{click:function(s){return t.playSong(e,i)}}},[s("img",{staticClass:"imagechangeinsong",attrs:{src:"video/mp4"==e.mimeType?"/assets/images/video-camera.png":"/assets/images/track-leaf.png",id:"image"+e.id,alt:""}})])])]),s("div",{staticClass:"track-information"},[s("label",{staticClass:"track-name"},[s("span",{staticClass:"numbering"}),t._v("\n                  "+t._s(e.title)+"\n                ")])]),s("div",{staticClass:"track-action-box"},[s("span",{staticClass:"open-track-menu"},[s("img",{attrs:{src:"/assets/images/track-row-drag-icon.png",alt:""}})]),s("ul",[t.songList.length>1?s("li",{staticClass:"delete-h-s",on:{click:function(s){return t.deleteSpecificSong(e)}}},[s("a",{staticClass:"delete-color",attrs:{href:"javascript:;"}},[s("span",{staticClass:"icon-rubbish-bin"}),t._v("Delete\n                    ")])]):t._e()])])])}),0)],1)])])]),s("div",{staticClass:"modal fade",attrs:{id:"delete-song-modal"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered"},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-body"},[s("div",{staticClass:"modal-video-container text-center no-video-msg"},[t._v("\n            Are you sure to delete?\n          ")]),s("div",{staticClass:"clearfix text-center"},[s("button",{staticClass:"modal-back-btn m-2",on:{click:function(e){return t.confirmDelete()}}},[t._v("\n              Confirm\n            ")]),s("button",{staticClass:"m-2 modal-back-btn",attrs:{"data-dismiss":"modal"}},[t._v("\n              Cancel\n            ")])])])])])]),s("div",{staticClass:"modal fade",attrs:{id:"video-model-view","data-backdrop":"static","data-keyboard":"false"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered"},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("div",[s("b",[t._v(t._s(t.fileTitle))])]),s("button",{staticClass:"close",attrs:{type:"button","aria-hidden":"true"},on:{click:function(e){return t.closeModel()}}},[t._v("\n            ×\n          ")])]),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"modal-video-container"},[s("div",{staticClass:"text-center"},["mp3"==t.fileType?s("img",{class:{rotate:t.rotation},attrs:{src:"/assets/images/music-static.png"}}):t._e()]),s("video",{class:{containerSize:"mp3"==t.fileType},attrs:{controls:"",src:t.url,preload:"auto"},on:{playing:function(e){return t.updatePaused(e)},pause:function(e){return t.updatePaused(e)},ended:function(e){return t.updatePaused(e)}}})]),s("div",{staticClass:"modal-div-btn clearfix"},[s("button",{staticClass:"modal-back-btn float-left",class:{disabledBtn:0==t.currentIndex},attrs:{disabled:0==t.currentIndex},on:{click:function(e){return t.getPrevious()}}},[t._v("\n              Previous\n            ")]),s("button",{staticClass:"modal-story-btn float-right",class:{disabledBtn:t.currentIndex==t.songList.length-1},attrs:{disabled:t.currentIndex==t.songList.length-1},on:{click:function(e){return t.getNext()}}},[t._v("\n              Next\n            ")])])])])])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"live-contest-header"},[s("h1",[t._v("Contest Music")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"content"},[s("strong",[t._v("Drag & Drop")]),t._v("To Upload song\n                ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"track-row row-header"},[s("div",{staticClass:"track-icon-box"},[t._v("#")]),s("div",{staticClass:"track-information"},[s("label",{staticClass:"track-name"},[s("span",{staticClass:"numbering"},[t._v("Title")])]),s("label",{staticClass:"artist-name"})]),s("div",{staticClass:"track-action-box"})])}],n=(s("7f7f"),s("28a5"),s("f499")),o=s.n(n),r=(s("ac6a"),s("1980")),l=s.n(r),c=(s("41cb"),s("6bf9")),u=s("86d0"),d=(s("bc3a"),s("4ec3")),p=s("9062"),g=s.n(p),f=(s("e40d"),{name:"contestMusic",props:{msg:String},data:function(){return{user:JSON.parse(localStorage.getItem("User")),allpath:c["a"],isUploadView:!1,albumSong:[],typeError:!1,songTitle:"",isuploaded:!1,songList:[],songsIdArr:[],errorMsg:!1,songId:null,isLoading:!1,fullPage:!0,isSongTitle:!1,url:"",currentIndex:null,fileTitle:"",fileType:"",rotation:!1,widthValue:0,fileSize:null}},components:{AppHeader:u["a"],draggable:l.a,Loading:g.a},filters:{mb:function(t){if(!t)return"";var e=new Array("Bytes","KB","MB","GB"),s=0;while(t>900)t/=1024,s++;var i=Math.round(100*t)/100+" "+e[s];return i}},methods:{updatePaused:function(t){console.log(t),"playing"==t.type?this.rotation=!0:"ended"==t.type?this.getNext():this.rotation=!1},contestMusicList:function(){var t=this;d["a"].get("contest-music/".concat(this.user.id),{headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}}).then(function(e){if(e.data){t.songList=e.data.data,t.songsIdArr=[],t.songList.forEach(function(e){t.songsIdArr.push(e.id)});var s=localStorage.getItem("contestMusicCount");s=t.songList.length,localStorage.setItem("contestMusicCount",o()(s)),0==t.songList.length?t.errorMsg=!0:t.errorMsg=!1,console.log("contest music list",JSON.parse(o()(t.songsIdArr)))}}).catch(function(t){})},onEnd:function(t){var e=this;console.log("drag",this.songList);var s=[];if(this.songList.forEach(function(t){s.push(t.id)}),console.log("ids",s),o()(this.songsIdArr)!=o()(s)){var i={headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}};d["a"].put("contest-music",{priorityIds:s},i).then(function(t){console.log("update list",t.data),swal("Priority Changed!","Priority changed successfully","success"),e.contestMusicList()}).catch(function(t){})}},addSongView:function(){this.isUploadView=!this.isUploadView},removeFile:function(t){this.albumSong=this.albumSong.filter(function(e,s){return t!=s})},playSong:function(t,e){console.log("aa",t,e),$("#video-model-view").modal("show"),$("#video-model-view").modal({backdrop:"static",keyboard:!1}),this.currentIndex=e,this.url=this.allpath.user_contest_music+t.fileName,this.fileTitle=t.title,this.fileType=this.url.split(".").pop()},getPrevious:function(){this.currentIndex--,this.show(this.currentIndex,this.songList),this.rotation=!1},getNext:function(){this.currentIndex++,this.show(this.currentIndex,this.songList),this.rotation=!1},show:function(t,e){console.log("test previous next",t,e),0==t?(this.url=this.allpath.user_contest_music+e[0].fileName,this.fileTitle=e[0].title,this.fileType=this.url.split(".").pop()):1==t?(this.url=e[1]?this.allpath.user_contest_music+e[1].fileName:"",this.fileTitle=e[1]?e[1].title:"",this.fileType=this.url&&e[1]?this.url.split(".").pop():""):(this.url=e[2]?this.allpath.user_contest_music+e[2].fileName:"",this.fileTitle=e[2]?e[2].title:"",this.fileType=this.url&&e[2]?this.url.split(".").pop():"")},closeModel:function(){this.url="",$("#video-model-view").modal("hide"),this.rotation=!1},deleteSpecificSong:function(t){this.songId=t.id,$("#delete-song-modal").modal("show")},confirmDelete:function(){var t=this;d["a"].delete("contest-music/".concat(this.songId),{headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}}).then(function(e){e.data&&(console.log("contest music delete",e.data),$("#delete-song-modal").modal("hide"),swal("Deleted!","Successfully Deleted","success"),t.contestMusicList())}).catch(function(t){})},onChange:function(t){console.log("file type ==>",t.target.files[0]),this.fileSize=null,this.fileSize=t.target.files[0].size,"mp3"===t.target.files[0].name.split(".").pop()||"mp4"===t.target.files[0].name.split(".").pop()?(this.typeError=!1,this.albumSong=[],this.albumSong.push(t.target.files[0])):this.typeError=!0},onDrop:function(t){t.stopPropagation(),t.preventDefault();var e=t.dataTransfer.files;console.log("drop file",e),this.fileSize=null,this.fileSize=e[0].size,"mp3"===e[0].name.split(".").pop()||"mp4"===e[0].name.split(".").pop()?(this.typeError=!1,this.albumSong=[],this.albumSong.push(e[0])):this.typeError=!0},progressBar:function(){var t=this;this.widthValue=0;var e=this.fileSize/2e4;console.log(this.fileSize,e),setInterval(function(){t.widthValue<90&&(t.widthValue=t.widthValue+5,console.log(t.widthValue))},e)},saveUploadedFile:function(){var t=this;if(0!=this.albumSong.length){if(this.isuploaded=!1,!this.songTitle)return this.isSongTitle=!0,void window.scrollTo(0,0);this.progressBar(),this.isuploaded=!1,this.isLoading=!0;var e=new FormData;e.append("title",this.songTitle),this.albumSong.forEach(function(t){e.append("contestMusic",t,t.name)}),0==this.songList.length?e.append("priority",1):1==this.songList.length?e.append("priority",2):e.append("priority",3);var s={headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}};d["a"].post("contest-music",e,s).then(function(e){t.widthValue=100,setTimeout(function(){e.data&&(t.isLoading=!1,t.songTitle="",t.albumSong=[],t.isUploadView=!1,t.isSongTitle=!1,t.contestMusicList(),t.fileSize=null)},1e3)}).catch(function(e){t.isLoading=!1,console.log(e)})}else this.isuploaded=!0},cancel:function(){this.isUploadView=!1,this.isSongTitle=!1}},created:function(){this.contestMusicList()},beforeRouteEnter:function(t,e,s){var i={headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}};d["a"].get("me",i).then(function(e){if(e.data){console.log("@me",e.data);var i=e.data,a=["/contest-music","/artistregisterstep1","/artistregisterstep2","/artistregisterstep3","/artistregisterstep4"];t.path!=a[i.profileSetup]?s({path:a[i.profileSetup]}):s()}})},mounted:function(){}}),m=f,h=(s("edfa"),s("2877")),v=Object(h["a"])(m,i,a,!1,null,"903a8cb4",null);e["default"]=v.exports},"214f":function(t,e,s){"use strict";s("b0c5");var i=s("2aba"),a=s("32e9"),n=s("79e5"),o=s("be13"),r=s("2b4c"),l=s("520a"),c=r("species"),u=!n(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),d=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var s="ab".split(t);return 2===s.length&&"a"===s[0]&&"b"===s[1]}();t.exports=function(t,e,s){var p=r(t),g=!n(function(){var e={};return e[p]=function(){return 7},7!=""[t](e)}),f=g?!n(function(){var e=!1,s=/a/;return s.exec=function(){return e=!0,null},"split"===t&&(s.constructor={},s.constructor[c]=function(){return s}),s[p](""),!e}):void 0;if(!g||!f||"replace"===t&&!u||"split"===t&&!d){var m=/./[p],h=s(o,p,""[t],function(t,e,s,i,a){return e.exec===l?g&&!a?{done:!0,value:m.call(e,s,i)}:{done:!0,value:t.call(s,e,i)}:{done:!1}}),v=h[0],b=h[1];i(String.prototype,t,v),a(RegExp.prototype,p,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},"28a5":function(t,e,s){"use strict";var i=s("aae3"),a=s("cb7c"),n=s("ebd6"),o=s("0390"),r=s("9def"),l=s("5f1b"),c=s("520a"),u=s("79e5"),d=Math.min,p=[].push,g="split",f="length",m="lastIndex",h=4294967295,v=!u(function(){RegExp(h,"y")});s("214f")("split",2,function(t,e,s,u){var b;return b="c"=="abbc"[g](/(b)*/)[1]||4!="test"[g](/(?:)/,-1)[f]||2!="ab"[g](/(?:ab)*/)[f]||4!="."[g](/(.?)(.?)/)[f]||"."[g](/()()/)[f]>1||""[g](/.?/)[f]?function(t,e){var a=String(this);if(void 0===t&&0===e)return[];if(!i(t))return s.call(a,t,e);var n,o,r,l=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,g=void 0===e?h:e>>>0,v=new RegExp(t.source,u+"g");while(n=c.call(v,a)){if(o=v[m],o>d&&(l.push(a.slice(d,n.index)),n[f]>1&&n.index<a[f]&&p.apply(l,n.slice(1)),r=n[0][f],d=o,l[f]>=g))break;v[m]===n.index&&v[m]++}return d===a[f]?!r&&v.test("")||l.push(""):l.push(a.slice(d)),l[f]>g?l.slice(0,g):l}:"0"[g](void 0,0)[f]?function(t,e){return void 0===t&&0===e?[]:s.call(this,t,e)}:s,[function(s,i){var a=t(this),n=void 0==s?void 0:s[e];return void 0!==n?n.call(s,a,i):b.call(String(a),s,i)},function(t,e){var i=u(b,t,this,e,b!==s);if(i.done)return i.value;var c=a(t),p=String(this),g=n(c,RegExp),f=c.unicode,m=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(v?"y":"g"),C=new g(v?c:"^(?:"+c.source+")",m),_=void 0===e?h:e>>>0;if(0===_)return[];if(0===p.length)return null===l(C,p)?[p]:[];var y=0,k=0,S=[];while(k<p.length){C.lastIndex=v?k:0;var x,w=l(C,v?p:p.slice(k));if(null===w||(x=d(r(C.lastIndex+(v?0:k)),p.length))===y)k=o(p,k,f);else{if(S.push(p.slice(y,k)),S.length===_)return S;for(var T=1;T<=w.length-1;T++)if(S.push(w[T]),S.length===_)return S;k=y=x}}return S.push(p.slice(y)),S}]})},"520a":function(t,e,s){"use strict";var i=s("0bfb"),a=RegExp.prototype.exec,n=String.prototype.replace,o=a,r="lastIndex",l=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t[r]||0!==e[r]}(),c=void 0!==/()??/.exec("")[1],u=l||c;u&&(o=function(t){var e,s,o,u,d=this;return c&&(s=new RegExp("^"+d.source+"$(?!\\s)",i.call(d))),l&&(e=d[r]),o=a.call(d,t),l&&o&&(d[r]=d.global?o.index+o[0].length:e),c&&o&&o.length>1&&n.call(o[0],s,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(o[u]=void 0)}),o}),t.exports=o},5778:function(t,e,s){},"5f1b":function(t,e,s){"use strict";var i=s("23c6"),a=RegExp.prototype.exec;t.exports=function(t,e){var s=t.exec;if("function"===typeof s){var n=s.call(t,e);if("object"!==typeof n)throw new TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==i(t))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"7f7f":function(t,e,s){var i=s("86cc").f,a=Function.prototype,n=/^\s*function ([^ (]*)/,o="name";o in a||s("9e1e")&&i(a,o,{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(t){return""}}})},"86d0":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"profile-page-header"},[s("div",{staticClass:"header-wraper"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row align-items-center justify-content-between"},[s("div",{staticClass:"logo inner-page"},[s("router-link",{attrs:{to:""}},[s("img",{attrs:{src:"/assets/images/Music-Equalizer-v3.png",alt:""}})])],1),s("div"),s("div",{staticClass:"desktop-profile-menu"},[s("ul",[s("li",[s("router-link",{attrs:{to:"/profile"}},[s("span",{staticClass:"menu-profile-img"},[1==t.$store.state.profilepicture?s("img",{attrs:{src:"/assets/images/Spinner.gif",alt:""}}):t._e(),null==t.$store.state.profilepicture?s("img",{attrs:{src:"/assets/images/default_artist.png",alt:""}}):s("img",{attrs:{src:t.$store.state.profilepicture,alt:""}})])])],1),s("li",["3"==t.userType?s("div",[s("router-link",{attrs:{to:"/myplaylist"}},[s("i",{staticClass:"icon-music-player"})])],1):s("div",[s("router-link",{attrs:{to:"/analytics"}},[s("i",{staticClass:"icon-analytics"})])],1)]),s("li",[s("router-link",{attrs:{to:"/searchartist"}},[s("i",{staticClass:"icon-search"})])],1),"2"==t.userType?s("li",[s("router-link",{attrs:{to:"/leader-board"}},[s("i",{staticClass:"icon-leaderboard"})])],1):t._e(),"3"==t.userType?s("li",[s("router-link",{attrs:{to:"/startcontest"}},[s("i",{staticClass:"icon-leaderboard"})])],1):t._e(),t._m(0)])]),s("div",{staticClass:"header-right-menu"},[t._m(1),s("div",{staticClass:"right-menu-box"},[s("nav",{staticClass:"navigation"},[s("ul",[s("li",[t._m(2),s("ul",{staticClass:"profile-child-memu"},[s("li",["3"==t.user.userType?s("router-link",{attrs:{to:"/fan-edit"}},[t._v("Information")]):t._e()],1),s("li",["2"==t.user.userType?s("router-link",{attrs:{to:"/artist-edit"}},[t._v("Information")]):t._e()],1),"3"==t.user.userType?s("li",[s("a",{attrs:{href:"javascript:;"},on:{click:t.changedata}},[t._v("Payment method")])]):t._e(),t.isPaidMember&&"3"==t.user.userType?s("li",[s("router-link",{attrs:{to:"/setting-autoplay"}},[t._v("Setting for Auto-play")])],1):t._e()])]),"3"==t.user.userType?s("li",[t._m(3),s("ul",{staticClass:"profile-child-memu"},[t.user.PaymentRecord?t._e():s("li",[s("router-link",{attrs:{to:"/membership-popup"}},[t._v("Leaderboard")])],1),t.user.PaymentRecord&&0===t.user.PaymentRecord.isActive?s("li",[s("router-link",{attrs:{to:"/membership-popup"}},[t._v("Leaderboard")])],1):t._e(),t.user.PaymentRecord&&1===t.user.PaymentRecord.isActive?s("li",[s("router-link",{attrs:{to:"/leader-board"}},[t._v("Leaderboard")])],1):t._e(),s("li",[s("router-link",{attrs:{to:"/competition-work-flow"}},[t._v("How it works")])],1)]),s("ul",{staticClass:"profile-child-memu"},[s("li",[s("router-link",{attrs:{to:"/analytics"}},[t._v("Analytics")])],1)])]):t._e(),"2"==t.user.userType?s("li",[t._m(4),s("ul",{staticClass:"profile-child-memu"},[s("li",[s("router-link",{attrs:{to:"/competition-work-flow"}},[t._v("How it works")])],1)])]):t._e(),s("li",[t._m(5),s("ul",{staticClass:"profile-child-memu"},[s("li",[s("router-link",{attrs:{to:"/invite"}},[t._v("Invite")])],1),s("li",[s("router-link",{attrs:{to:"artist-change-password"}},[t._v("Change Password")])],1),t._m(6)])]),s("li",[t._m(7),s("ul",{staticClass:"profile-child-memu"},[s("li",[s("router-link",{attrs:{to:"/report"}},[t._v("Report")])],1),"2"==t.user.userType?s("li",[s("router-link",{attrs:{to:"/user-agreement"}},[t._v("Legal")])],1):t._e(),t.isPaidMember&&"3"==t.user.userType?s("li",[s("router-link",{attrs:{to:"/setting-autoplay"}},[t._v("Setting for Auto-play")])],1):t._e(),s("li",[s("router-link",{attrs:{to:"/privacy-cookies-policy"}},[t._v("Privacy")])],1)])])])])])])])])]),s("div",{staticClass:"modal fade",attrs:{id:"logoutModal"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered"},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-body"},[s("img",{attrs:{src:"/assets/images/log-out-modal-icon.png"}}),s("p",{staticClass:"sign-out-modal-text"},[t._v("\n            Are you sure you want to\n            Logout?\n          ")]),s("p",{staticClass:"modal-btn-para"},[s("button",{staticClass:"logout-btn fan-play-btn",attrs:{type:"button"},on:{click:t.logout}},[t._v("Yes")])]),t._m(8)])])])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("a",{staticClass:"top-menu-profile",attrs:{href:"javascript:;"}},[s("i",{staticClass:"icon-new-menu"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn-menu-button-close-desk",attrs:{type:"button"}},[s("i",{staticClass:"icon-close"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{href:"javascript:;"}},[s("i",{staticClass:"icon-settings"}),t._v("Settings\n                  ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{href:"javascript:;"}},[s("i",{staticClass:"icon-settings"}),t._v("Records\n                  ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{href:"javascript:;"}},[s("i",{staticClass:"icon-settings"}),t._v("Records\n                  ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{href:"javascript:;"}},[s("i",{staticClass:"icon-user"}),t._v("Account\n                  ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("a",{staticClass:"log_out_modal_btn",attrs:{href:"javascript:;","data-toggle":"modal","data-target":"#logoutModal"}},[t._v("Logout")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{attrs:{href:"javascript:;"}},[s("i",{staticClass:"icon-about"}),t._v("About\n                  ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"modal-btn-para mb-0"},[s("a",{staticClass:"modal-close-btn",attrs:{href:"javascript:;","data-dismiss":"modal"}},[t._v("Cancel")])])}],n=s("f499"),o=s.n(n),r=s("41cb"),l=s("6bf9"),c=s("b7d6"),u={name:"AuthHeader",props:{msg:String},data:function(){return{userType:"",user:"",profilemage:1,isPaidMember:!1}},methods:{checkIsPaidMember:function(){var t=JSON.parse(localStorage.getItem("User"));null==t&&void 0==t||void 0!=t.PaymentRecord&&void 0!=t.PaymentRecord.isActive&&1==t.PaymentRecord.isActive&&(this.isPaidMember=!0)},changedata:function(){this.$store.state.ispopup=!1,r["a"].push({path:"/addcard"})},logout:function(){localStorage.removeItem("User"),localStorage.removeItem("stripeId"),localStorage.removeItem("UserType"),localStorage.removeItem("Token"),localStorage.removeItem("contestMusicCount"),localStorage.removeItem("userEmail"),window.location.href="/login"}},mounted:function(){$(".btn-menu-button").click(function(){$(".header-right").addClass("active")}),$(".btn-menu-button-close").click(function(){$(".header-right").removeClass("active")}),$(".top-menu-profile").click(function(){$(".header-right-menu").addClass("show")}),$(".btn-menu-button-close-desk").click(function(){$(".header-right-menu").removeClass("show")}),this.checkIsPaidMember()},created:function(){var t=this;this.userType=JSON.parse(localStorage.getItem("UserType")),c["a"].getUser("",function(e){localStorage.setItem("User",o()(e)),t.user=JSON.parse(localStorage.getItem("User")),t.user.profilePicture?t.$store.state.profilepicture=l["a"].profile_image_path+t.user.profilePicture:t.$store.state.profilepicture=null})},updated:function(){$(".btn-menu-button").click(function(){$(".header-right").addClass("active")}),$(".btn-menu-button-close").click(function(){$(".header-right").removeClass("active")}),$(".top-menu-profile").click(function(){$(".header-right-menu").addClass("show")}),$(".btn-menu-button-close-desk").click(function(){$(".header-right-menu").removeClass("show")})}},d=u,p=(s("d287"),s("2877")),g=Object(p["a"])(d,i,a,!1,null,"307dc479",null);e["a"]=g.exports},a6ee:function(t,e,s){},aae3:function(t,e,s){var i=s("d3f4"),a=s("2d95"),n=s("2b4c")("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[n])?!!e:"RegExp"==a(t))}},b0c5:function(t,e,s){"use strict";var i=s("520a");s("5ca1")({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})},d287:function(t,e,s){"use strict";var i=s("a6ee"),a=s.n(i);a.a},edfa:function(t,e,s){"use strict";var i=s("5778"),a=s.n(i);a.a}}]);
//# sourceMappingURL=chunk-b41aa344.16296bd3.js.map