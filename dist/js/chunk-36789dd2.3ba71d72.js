(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36789dd2"],{"0687":function(t,e,a){},"20fd":function(t,e,a){"use strict";var s=a("d9f6"),i=a("aebd");t.exports=function(t,e,a){e in t?s.f(t,e,i(0,a)):t[e]=a}},"23c0":function(t,e,a){"use strict";var s=a("0687"),i=a.n(s);i.a},"549b":function(t,e,a){"use strict";var s=a("d864"),i=a("63b6"),n=a("241e"),r=a("b0dc"),o=a("3702"),c=a("b447"),l=a("20fd"),d=a("7cd6");i(i.S+i.F*!a("4ee1")(function(t){Array.from(t)}),"Array",{from:function(t){var e,a,i,u,p=n(t),m="function"==typeof this?this:Array,f=arguments.length,v=f>1?arguments[1]:void 0,g=void 0!==v,b=0,h=d(p);if(g&&(v=s(v,f>2?arguments[2]:void 0,2)),void 0==h||m==Array&&o(h))for(e=c(p.length),a=new m(e);e>b;b++)l(a,b,g?v(p[b],b):p[b]);else for(u=h.call(p),a=new m;!(i=u.next()).done;b++)l(a,b,g?r(u,v,[i.value,b],!0):i.value);return a.length=b,a}})},"774e":function(t,e,a){t.exports=a("d2d5")},"7f7f":function(t,e,a){var s=a("86cc").f,i=Function.prototype,n=/^\s*function ([^ (]*)/,r="name";r in i||a("9e1e")&&s(i,r,{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(t){return""}}})},ac6a:function(t,e,a){for(var s=a("cadf"),i=a("0d58"),n=a("2aba"),r=a("7726"),o=a("32e9"),c=a("84f2"),l=a("2b4c"),d=l("iterator"),u=l("toStringTag"),p=c.Array,m={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=i(m),v=0;v<f.length;v++){var g,b=f[v],h=m[b],C=r[b],y=C&&C.prototype;if(y&&(y[d]||o(y,d,p),y[u]||o(y,u,b),c[b]=p,h))for(g in s)y[g]||n(y,g,s[g],!0)}},d2d5:function(t,e,a){a("1654"),a("549b"),t.exports=a("584a").Array.from},dffa:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("AppHeader"),a("div",{staticClass:"body-wraper no-footer"},[a("div",{staticClass:"profile-container"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"box-model-wraper edit"},[a("div",{staticClass:"profile-dashboard-area edit"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-12 col-lg-10"},[a("div",{staticClass:"profile-right-section-edit"},[a("loading",{attrs:{active:t.isLoading,"can-cancel":!1,loader:"dots","is-full-page":t.fullPage},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"alb-page-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"album-cover-block"},[a("span",{staticClass:"album-cover"},[""!=t.coverpicurl?a("img",{staticClass:"w-100",attrs:{src:t.coverpicurl,alt:""}}):t.iscoverUploaded&&""!=t.coverpicurl?a("img",{staticClass:"w-100",attrs:{src:t.coverpicurl,alt:""}}):a("img",{staticClass:"w-100",attrs:{src:"/assets/images/deefault_album.png",alt:""}})])]),a("div",{staticClass:"album-cover-upload"},[a("div",{staticClass:"cover-upload-block"},[a("label",{attrs:{for:"cover-upload"}},[t._v("Album Cover")]),a("label",{staticClass:"cover-uploader"},[a("input",{attrs:{type:"file",id:"cover-upload"},on:{change:t.coverUpload}}),a("i",{staticClass:"icon-photo-camera"}),t._v(" Upload Album Cover\n                            ")]),t.success?a("span",{staticClass:"text-success"},[t._v(t._s(t.successMessage))]):t._e()]),a("div",{staticClass:"title-section"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 alb-title-sec"},[a("label",{staticClass:"alb-title",attrs:{for:"alb-title"}},[t._v("Album Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.updatealbum.albumName,expression:"updatealbum.albumName"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"text",name:"Album Name",id:"alb-title"},domProps:{value:t.updatealbum.albumName},on:{input:function(e){e.target.composing||t.$set(t.updatealbum,"albumName",e.target.value)}}}),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("Album Name"),expression:"errors.has('Album Name')"}],staticClass:"text-danger1"},[t._v(t._s(t.errors.first("Album Name")))]),t.iserror?a("span",{staticClass:"text-danger1"},[t._v(t._s(t.errormessage))]):t._e()])])])])]),a("div",{staticClass:"edit-profile-devidor mb-3"}),a("div",{staticClass:"inner-contest-item"},[a("h2",{staticClass:"header-text"},[t._v("Select Event Gener")]),a("div",{staticClass:"contest-item text-center"},[a("label",[a("input",{attrs:{type:"radio",name:"contest_type"},domProps:{checked:1===t.genreId}}),a("span",{staticClass:"contest-type-check",on:{click:function(e){return t.genreIdData(1)}}},[a("img",{attrs:{src:"/assets/images/alternative.png",alt:"icon"}}),t._v("\n                              Alternative\n                            ")])]),a("label",[a("input",{attrs:{type:"radio",name:"contest_type"},domProps:{checked:2===t.genreId}}),a("span",{staticClass:"contest-type-check",on:{click:function(e){return t.genreIdData(2)}}},[a("img",{attrs:{src:"/assets/images/country_music.png",alt:"icon"}}),t._v("\n                              Country\n                            ")])]),a("label",[a("input",{attrs:{type:"radio",name:"contest_type"},domProps:{checked:3===t.genreId}}),a("span",{staticClass:"contest-type-check",on:{click:function(e){return t.genreIdData(3)}}},[a("img",{attrs:{src:"/assets/images/edm.png",alt:"icon"}}),t._v("\n                              EDM\n                            ")])]),a("label",[a("input",{attrs:{type:"radio",name:"contest_type"},domProps:{checked:4===t.genreId}}),a("span",{staticClass:"contest-type-check",on:{click:function(e){return t.genreIdData(4)}}},[a("img",{attrs:{src:"/assets/images/hiphop.png",alt:"icon"}}),t._v("\n                              Hiphop-RAP\n                            ")])])]),a("div",{staticClass:"contest-item text-center relativediv"},[a("label",{},[a("input",{attrs:{type:"radio",name:"contest_type"},domProps:{checked:5===t.genreId}}),a("span",{staticClass:"contest-type-check",on:{click:function(e){return t.genreIdData(5)}}},[a("img",{attrs:{src:"/assets/images/latin.png",alt:"icon"}}),t._v("\n                              World\n                            ")])]),a("label",[a("input",{attrs:{type:"radio",name:"contest_type"},domProps:{checked:6===t.genreId}}),a("span",{staticClass:"contest-type-check",on:{click:function(e){return t.genreIdData(6)}}},[a("img",{attrs:{src:"/assets/images/pop.png",alt:"icon"}}),t._v("\n                              Pop\n                            ")])]),a("label",{},[a("input",{attrs:{type:"radio",name:"contest_type"},domProps:{checked:7===t.genreId}}),a("span",{staticClass:"contest-type-check",on:{click:function(e){return t.genreIdData(7)}}},[a("img",{attrs:{src:"/assets/images/metal.png",alt:"icon"}}),t._v("\n                              "+t._s(t.craftLabel)+"\n                            ")]),a("div",{ref:"craftDropdown",staticClass:"subsubchild",staticStyle:{visibility:"hidden",bottom:"-65px"}},t._l(t.craftSubGenreList,function(e,s){return a("label",{key:s+e},[a("span",{staticClass:"contest-type-check"},[a("img",{attrs:{src:"/assets/images/metal.png",alt:"icon"}}),t._v("\n                                  "+t._s(e.lable)+"\n                                ")])])}),0)]),a("label",[a("input",{attrs:{type:"radio",name:"contest_type"},domProps:{checked:8===t.genreId}}),a("span",{staticClass:"contest-type-check",on:{click:function(e){return t.genreIdData(8)}}},[a("img",{attrs:{src:"/assets/images/rock.png",alt:"icon"}}),t._v("\n                              Rock\n                            ")])])])]),a("div",{staticClass:"edit-profile-devidor mb-3"}),a("div",{staticClass:"song-upload-section-alb"},[a("label",{staticClass:"title",attrs:{for:""}},[t._v("Upload Songs")]),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-8"},[t.typeError?a("div",{staticClass:"error-messages"},[t._v("Please Select A Mp3 File")]):t._e(),a("form",{attrs:{method:"post"}},[a("label",{staticClass:"drag-drop",on:{dragover:function(t){t.preventDefault()},drop:t.onDrop}},[a("input",{attrs:{type:"file",multiple:""},on:{click:function(t){t.target.value=null},change:t.onChange}}),t._m(0),a("span",{staticClass:"upload-here"},[t._v("or , Click to Browse Songs")])])])]),a("div",{staticClass:"col-md-8"},t._l(t.albumSong,function(e,s){return a("label",{key:s,staticClass:"upload-progress"},[t._m(1,!0),a("span",{staticClass:"name-progress-size"},[a("span",{staticClass:"title"},[t._v(t._s(e.name))]),a("span",{staticClass:"title"},[t._v(t._s(t._f("mb")(e.size)))]),t._m(2,!0)]),a("span",{staticClass:"cancel-upload"},[a("a",{staticClass:"remove-upload",attrs:{href:"javascript:;"},on:{click:function(e){return t.removeFile(s)}}},[a("i",{staticClass:"icon-close"})])])])}),0),a("div",{staticClass:"col-md-8"}),a("div",{staticClass:"col-md-8"})])])]),a("div",{staticClass:"edit-profile-devidor mb-5 mt-5"}),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-auto"},[a("button",{staticClass:"btn-signin d-inline-block",attrs:{disabled:t.isDisable,type:"button"},on:{click:t.createAlbum}},[t._v("Save")]),a("router-link",{staticClass:"btn-cancel",attrs:{to:"/profile"}},[t._v("Cancel")])],1)])],1)])])])])])])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"content"},[a("strong",[t._v("Drag & Drop")]),t._v("To Upload songs\n                                ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"music-icon"},[a("img",{attrs:{src:"/assets/images/music-file.png",width:"30",alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"progress-bar"},[a("span",{staticClass:"fill",staticStyle:{width:"60%"}})])}],n=(a("7f7f"),a("28a5"),a("774e")),r=a.n(n),o=(a("ac6a"),a("795b")),c=a.n(o),l=a("4ec3"),d=a("41cb"),u=(a("b7d6"),a("6bf9")),p=a("92c3"),m=a.n(p),f=a("9062"),v=a.n(f),g=(a("1e3f"),a("e40d"),a("86d0")),b=a("b861"),h={name:"ArtistAlbumEdit",props:{msg:String},components:{vueDropzone:m.a,Loading:v.a,AppHeader:g["a"],AppFooter:b["a"]},data:function(){return{craftLabel:"Craft",craftSubGenreList:JSON.parse('[\n        {"code":"71","lable":"R&B-Rhythm and Blues"},\n        {"code":"72","lable":"Soul"},\n        {"code":"73","lable":"Jazz"},\n        {"code":"74","lable":"Folk"},\n        {"code":"75","lable":"Gospel"},\n        {"code":"76","lable":"ALL Other"}]'),albumId:null,success:!1,successMessage:"",updatealbum:{},allpath:u["a"],isDisable:!1,fullPage:!0,iserror:!1,errorMessage:"",coverImage:1,albumName:"",parentAlbum:0,isLoading:!1,typeError:!1,iscoverUploaded:!1,coverpicurl:"",albumInformation:null,genreId:1,albumSong:[],coverFile:null,dropzoneOptions:{dictInvalidFileType:"Invalid file type",timeout:3e5,url:"https://miv.musicisvivid.com/api/update-album",dictResponseError:"400",thumbnailWidth:150,maxFilesize:20,maxFiles:5,addRemoveLinks:!0,accept:function(t,e){e()},params:{user_id:JSON.parse(localStorage.getItem("User")).id},method:"POST",acceptedFiles:"mp3/*",paramName:"promotionalVideo",dictMaxFilesExceeded:"Max file size reached",dictFileTooBig:"File size is too big"}}},filters:{mb:function(t){if(!t)return"";var e=new Array("Bytes","KB","MB","GB"),a=0;while(t>900)t/=1024,a++;var s=Math.round(100*t)/100+" "+e[a];return s}},computed:{craftDropdownVisible:{get:function(){return"hidden"!==this.$refs.craftDropdown.style.visibility||"collapse"!==this.$refs.craftDropdown.style.visibility},set:function(t){this.$refs.craftDropdown.style.visibility=t?"visible":"hidden"}}},watch:{genreId:function(t){t=String(t);var e=this.$refs.craftDropdown.parentElement.classList;null!==t&&"7"===t[0]?(e.add("subgenre-selected"),this.craftDropdownVisible=!1):e.remove("subgenre-selected")}},methods:{mouseHoverEvent:function(t){this.craftDropdownVisible="mouseover"===t.type},removeFile:function(t){this.albumSong=this.albumSong.filter(function(e,a){return t!=a})},coverUpload:function(t){var e=this,a=t.target.files[0];function s(t){return new c.a(function(e,a){var s=new FileReader;s.readAsDataURL(t),s.onload=function(){return e(s.result)},s.onerror=function(t){return a(t)}})}s(a).then(function(t){e.iscoverUploaded=!0,e.coverpicurl=t}),this.coverFile=t.target.files[0]},onChange:function(t){var e=this;r()(t.target.files).forEach(function(t){"mp3"==t.name.split(".").pop()?e.albumSong.push(t):e.typeError=!0})},onDrop:function(t){var e=this;t.stopPropagation(),t.preventDefault();var a=t.dataTransfer.files;r()(a).forEach(function(t){"mp3"==t.name.split(".").pop()?e.albumSong.push(t):e.typeError=!0})},genreIdData:function(t){this.genreId=t},createAlbum:function(){var t=this;this.isLoading=!0,this.isDisable=!0;var e=new FormData;e.append("parentAlbum",0),e.append("albumName",this.updatealbum.albumName),e.append("genreId",this.genreId),this.coverFile&&e.append("albumImage",this.coverFile),e.append("albumId",this.songid);var a={headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}};l["a"].post("update-album",e,a).then(function(e){if(e.data)if(t.iserror=!1,t.errorMessage="",t.albumId=e.data.data.id,t.albumSong.length>0){var s=new FormData;t.albumSong.forEach(function(t){s.append("albumSong",t,t.name)}),s.append("albumId",t.albumId),l["a"].post("update-album-songs",s,a).then(function(e){e.data&&(t.isLoading=!1,t.success=!0,t.successMessage="Album Updated",t.albumSong=[],d["a"].push("/artist-album-view/".concat(t.songid)))}).catch(function(t){})}else t.isLoading=!1,t.success=!0,t.successMessage="Album Updated",d["a"].push("/artist-album-view/".concat(t.songid))}).catch(function(e){t.isDisable=!1,t.iserror=!0;var a=e.response.data.errors;t.errormessage=a[0].msg})},sendingEvent:function(t,e,a){},maxfilereach:function(t){var e=document.querySelectorAll("[data-dz-errormessage]");e[e.length-1].innerHTML="Max File Reached"},error:function(t,e,a){},inprogress:function(t,e,a){},getAlbumDetails:function(){var t=this;l["a"].get("album/".concat(this.songid),{headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}}).then(function(e){if(e.data)if(e.data.data.ownerId!=JSON.parse(localStorage.getItem("User")).id)window.location.href="/profile";else{t.albumInformation=e.data.data,null!=t.albumInformation.coverImage&&(t.coverpicurl=t.allpath.album_pictures+t.albumInformation.coverImage);var a=t.albumInformation,s=a.albumName,i=a.genreId,n=a.id;t.updatealbum.albumName=s,t.updatealbum.id=n,t.updatealbum.genreId=i,t.genreId=t.albumInformation.genreId}}).catch(function(t){})}},created:function(){void 0!=this.$route.params.id||null!=this.$route.params.id?(this.songid=this.$route.params.id,this.getAlbumDetails()):window.location.href="/profile"}},C=h,y=(a("23c0"),a("2877")),_=Object(y["a"])(C,s,i,!1,null,"51cee912",null);e["default"]=_.exports}}]);
//# sourceMappingURL=chunk-36789dd2.3ba71d72.js.map