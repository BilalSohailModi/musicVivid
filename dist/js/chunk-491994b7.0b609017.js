(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-491994b7"],{"7f7f":function(t,e,a){var s=a("86cc").f,i=Function.prototype,o=/^\s*function ([^ (]*)/,l="name";l in i||a("9e1e")&&s(i,l,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},"86a5":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("AppHeader"),a("div",{staticClass:"body-wraper no-footer"},[a("div",{staticClass:"profile-container"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"box-model-wraper edit"},[a("div",{staticClass:"profile-dashboard-area edit"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-12 col-lg-10"},[a("div",{staticClass:"profile-right-section-edit"},[a("h2",{staticClass:"alb-page-heading"},[t._v("Upload Song")]),a("div",{staticClass:"alb-page-body"},[a("div",{staticClass:"row"},[a("loading",{attrs:{active:t.isLoading,"can-cancel":!1,loader:"dots","is-full-page":t.fullPage},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"album-cover-block"},[a("span",{staticClass:"album-cover"},[t.iscoverUploaded?a("img",{staticClass:"w-100",attrs:{src:t.coverpicurl,alt:""}}):a("img",{staticClass:"w-100",attrs:{src:"/assets/images/default_songs.png",alt:""}})])]),a("div",{staticClass:"album-cover-upload"},[a("div",{staticClass:"cover-upload-block"},[a("label",{attrs:{for:"cover-upload"}},[t._v("Image of Song")]),a("label",{staticClass:"cover-uploader"},[a("input",{attrs:{type:"file",id:"cover-upload"},on:{change:t.coverUpload}}),a("i",{staticClass:"icon-photo-camera"}),t._v(" Upload Song Image\n                            ")])]),a("div",{staticClass:"title-section"},[a("label",{staticClass:"alb-title",attrs:{for:"alb-title"}},[t._v("Song Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.songTitle,expression:"songTitle"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"text",name:"Song Title",id:"alb-title"},domProps:{value:t.songTitle},on:{input:function(e){e.target.composing||(t.songTitle=e.target.value)}}}),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("Song Title"),expression:"errors.has('Song Title')"}],staticClass:"text-danger1"},[t._v(t._s(t.errors.first("Song Title")))]),t.iserror?a("span",{staticClass:"text-danger1"},[t._v(t._s(t.errormessage))]):t._e()])])],1),a("div",{staticClass:"edit-profile-devidor mb-3"}),a("div",{staticClass:"song-upload-section-alb"},[a("label",{staticClass:"title",attrs:{for:""}},[t._v("Upload Song")]),a("div",{staticClass:"row justify-content-center relativediv"},[a("div",{staticClass:"col-md-8"},[t.typeError?a("div",{staticClass:"text-danger2"},[t._v("Please Slect A Mp3 File")]):t._e(),t.isuploaded?a("div",{staticClass:"text-danger2"},[t._v("Please Slect A Song")]):t._e(),a("form",{attrs:{method:"post"}},[a("label",{staticClass:"drag-drop",on:{dragover:function(t){t.preventDefault()},drop:t.onDrop}},[t._m(0),a("span",{staticClass:"upload-here"},[t._v("or , Click to Browse Song")]),a("input",{attrs:{type:"file",accept:".mp3"},on:{click:function(t){t.target.value=null},change:t.onChange}})])])]),a("div",{staticClass:"col-md-8"},t._l(t.albumSong,function(e,s){return a("label",{key:s,staticClass:"upload-progress"},[t._m(1,!0),a("span",{staticClass:"name-progress-size"},[a("span",{staticClass:"title"},[t._v(t._s(e.name))]),a("span",{staticClass:"title"},[t._v(t._s(t._f("mb")(e.size)))]),a("span",{staticClass:"progress-bar"})]),a("span",{staticClass:"cancel-upload"},[a("a",{staticClass:"remove-upload",attrs:{href:"javascript:;"},on:{click:function(e){return t.removeFile(s)}}},[a("i",{staticClass:"icon-close"})])])])}),0),a("div",{staticClass:"col-md-8"}),a("div",{staticClass:"col-md-8"})])]),a("div",{staticClass:"edit-profile-devidor mb-3"}),a("div",{staticClass:"song-upload-section-alb"},[a("div",{staticClass:"relativediv"},[a("label",{staticClass:"title",attrs:{for:""}},[t._v("Attach to Album")]),t.isSlect?a("span",{staticClass:"text-danger2"},[t._v("Please Slect A Album")]):t._e()]),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-8"},[a("ul",{staticClass:"album-list"},[t._l(t.AlbumList,function(e,s){return a("li",{key:s},[a("label",[a("input",{attrs:{type:"radio",name:"albums"},on:{change:function(a){return t.assigntosong(e.id)}}}),a("span",[null==e.coverImage?a("img",{attrs:{src:"assets/images/album-cover-photo-1.png",alt:""}}):a("img",{attrs:{src:t.allpath.album_pictures+e.coverImage}})])])])}),a("infinite-loading",{on:{infinite:t.infiniteHandler}},[a("div",{attrs:{slot:"spinner"},slot:"spinner"},[a("img",{attrs:{src:"/assets/images/loader.gif"}})]),a("div",{attrs:{slot:"no-more"},slot:"no-more"},[t._v(t._s(""))]),a("div",{attrs:{slot:"no-results"},slot:"no-results"},[t._v(t._s(""))])])],2)])])])]),a("div",{staticClass:"edit-profile-devidor mb-5 mt-5"}),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-auto"},[a("button",{staticClass:"btn-signin d-inline-block",attrs:{type:"button"},on:{click:t.createAlbum}},[t._v("Save")]),a("router-link",{staticClass:"btn-cancel",attrs:{to:"/profile"}},[t._v("Cancel")])],1)])])])])])])])])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"content"},[a("strong",[t._v("Drag & Drop")]),t._v("To Upload song\n                                ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"music-icon"},[a("img",{attrs:{src:"/assets/images/music-file.png",width:"30",alt:""}})])}],o=(a("ac6a"),a("7f7f"),a("28a5"),a("795b")),l=a.n(o),r=a("4ec3"),n=a("41cb"),c=(a("b7d6"),a("6bf9")),d=a("e166"),u=a.n(d),p=a("92c3"),g=a.n(p),m=a("9062"),f=a.n(m),v=(a("1e3f"),a("e40d"),a("86d0")),h=a("b861"),b={name:"adddsong",props:{msg:String},components:{vueDropzone:g.a,Loading:f.a,AppHeader:v["a"],AppFooter:h["a"],InfiniteLoading:u.a},data:function(){return{allpath:c["a"],albumId:null,fullPage:!0,iserror:!1,errorMessage:"",fileId:null,isSlect:!1,isuploaded:!1,songTitle:"",albumRefs:null,fileCategory:"M",subCategoryType:1,coverImage:1,albumName:"",page:1,parentAlbum:0,isLoading:!1,typeError:!1,iscoverUploaded:!1,coverpicurl:"",AlbumList:[],albumSong:[],coverFile:"",dropzoneOptions:{dictInvalidFileType:"Invalid file type",timeout:3e5,url:"https://miv.musicisvivid.com/api/update-album",dictResponseError:"400",thumbnailWidth:150,maxFilesize:20,maxFiles:5,addRemoveLinks:!0,accept:function(t,e){e()},params:{user_id:JSON.parse(localStorage.getItem("User")).id},method:"POST",acceptedFiles:"mp3/*",paramName:"promotionalVideo",dictMaxFilesExceeded:"Max file size reached",dictFileTooBig:"File size is too big"}}},filters:{mb:function(t){if(!t)return"";var e=new Array("Bytes","KB","MB","GB"),a=0;while(t>900)t/=1024,a++;var s=Math.round(100*t)/100+" "+e[a];return s}},methods:{assigntosong:function(t){this.albumRefs=t},removeFile:function(t){this.albumSong=this.albumSong.filter(function(e,a){return t!=a})},coverUpload:function(t){var e=this,a=t.target.files[0];function s(t){return new l.a(function(e,a){var s=new FileReader;s.readAsDataURL(t),s.onload=function(){return e(s.result)},s.onerror=function(t){return a(t)}})}s(a).then(function(t){e.iscoverUploaded=!0,e.coverpicurl=t}),this.coverFile=t.target.files[0]},onChange:function(t){"mp3"===t.target.files[0].name.split(".").pop()?(this.typeError=!1,this.albumSong=[],this.albumSong.push(t.target.files[0])):this.typeError=!0},onDrop:function(t){t.stopPropagation(),t.preventDefault();var e=t.dataTransfer.files;"mp3"===e[0].name.split(".").pop()?(this.typeError=!1,this.albumSong=[],this.albumSong.push(e[0])):this.typeError=!0},createAlbum:function(){var t=this,e={headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}},a={songTitle:this.songTitle,albumRefs:this.albumRefs,fileCategory:this.fileCategory,subCategoryType:this.subCategoryType};0!=this.albumSong.length?(this.isuploaded=!1,null!=a.albumRefs&&""!=a.albumRefs?r["a"].post("create-song",a,e).then(function(a){if(a.data&&(t.iserror=!1,t.isuploaded=!1,t.isSlect=!1,t.errorMessage="",t.fileId=a.data.data.id,t.albumSong.length>0)){var s=new FormData;t.isLoading=!0,s.append("fileId",t.fileId),t.coverFile&&s.append("songImage",t.coverFile),t.albumSong.forEach(function(a,i){s.append("songFile",a,a.name),r["a"].post("upload-file-to-create-song",s,e).then(function(e){e.data&&i==t.albumSong.length-1&&(t.isLoading=!1,"2"==JSON.parse(localStorage.getItem("User")).userType?n["a"].push({name:"FanProfile"}):n["a"].push({name:"ArtistProfile"}))}).catch(function(t){})})}}).catch(function(e){t.iserror=!0;var a=e.response.data.errors;t.errormessage=a[0].msg}):this.isSlect=!0):this.isuploaded=!0},sendingEvent:function(t,e,a){},maxfilereach:function(t){var e=document.querySelectorAll("[data-dz-errormessage]");e[e.length-1].innerHTML="Max File Reached"},success:function(t,e){},error:function(t,e,a){},inprogress:function(t,e,a){},infiniteHandler:function(t){var e=this;this.page=this.page+1;var a={albums_of_user:JSON.parse(localStorage.getItem("User")).id,page:this.page,per_page:10};r["a"].get("album-list",{params:a,headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}}).then(function(a){a.data&&(a.data.albumlist.map(function(t){e.AlbumList.push(t)}),0==a.data.albumlist.length?t.complete():t.loaded())}).catch(function(t){})}},created:function(){var t=this,e={albums_of_user:JSON.parse(localStorage.getItem("User")).id,page:this.page,per_page:10};r["a"].get("album-list",{params:e,headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}}).then(function(e){e.data&&(t.AlbumList=e.data.albumlist)}).catch(function(t){})}},C=b,S=a("2877"),_=Object(S["a"])(C,s,i,!1,null,null,null);e["default"]=_.exports},ac6a:function(t,e,a){for(var s=a("cadf"),i=a("0d58"),o=a("2aba"),l=a("7726"),r=a("32e9"),n=a("84f2"),c=a("2b4c"),d=c("iterator"),u=c("toStringTag"),p=n.Array,g={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=i(g),f=0;f<m.length;f++){var v,h=m[f],b=g[h],C=l[h],S=C&&C.prototype;if(S&&(S[d]||r(S,d,p),S[u]||r(S,u,h),n[h]=p,b))for(v in s)S[v]||o(S,v,s[v],!0)}}}]);
//# sourceMappingURL=chunk-491994b7.0b609017.js.map