(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2fa46d3b"],{"00ee":function(e,a,t){"use strict";var s=t("0172"),r=t.n(s);r.a},"0172":function(e,a,t){},"4bea":function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("AppHeader"),t("div",{staticClass:"profile-container"},[t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"box-model-wraper edit"},[t("loading",{attrs:{active:e.isLoading,"can-cancel":!1,loader:"dots","is-full-page":e.fullPage},on:{"update:active":function(a){e.isLoading=a}}}),t("div",{staticClass:"profile-dashboard-area edit"},[t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-12 col-lg-10"},[t("div",{staticClass:"profile-right-section-edit"},[t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"peofile-picture-section edit"},[t("div",{staticClass:"profile-picture edit",attrs:{id:"scrolldiv"}},[1==e.profilepictur?t("img",{attrs:{src:"/assets/images/doublering.gif",alt:""}}):e._e(),null==e.$store.state.registerdata2.profilePicture||""==e.$store.state.registerdata2.profilePicture?t("img",{attrs:{src:"/assets/images/default_artist.png",alt:""}}):e._e(),null!=e.$store.state.registerdata2.profilePicture||""!=e.$store.state.registerdata2.profilePicture?t("div",{staticClass:"profile-image-view",style:{"background-image":"url("+e.profilepictur+")"}},[t("label",{staticClass:"picture-select",attrs:{for:"file"}}),t("input",{attrs:{type:"file",id:"file",accept:"image/*",hidden:""},on:{change:function(a){return e.filesChange(a.target.name,a.target.files)}}})]):e._e()]),e.$store.state.registerdata2.profilePicture||1===e.profilepictur?e._e():t("button",{staticClass:"profile-change-image profile-pic-upload-btn",attrs:{type:"button"}},[t("label",{staticClass:"file-upld"},[t("input",{attrs:{type:"file",accept:"image/*"},on:{change:function(a){return e.filesChange(a.target.name,a.target.files)}}}),t("i",{staticClass:"icon-photo-camera"})])])])]),t("div",{staticClass:"edit-profile-devidor"}),t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-xl-8 col-lg-10 col-md-12 custom-form"},[e.isError?t("div",{staticClass:"error-messages"},[e._v("\n                        "+e._s(e.errormessage)+"\n                      ")]):e._e(),e.isSuccess?t("div",{staticClass:"success-messages"},[e._v("\n                        Profile has been updated successfully!\n                      ")]):e._e(),t("div",{staticClass:"row"},[t("div",{staticClass:"form-group mb-3 col-lg-6 col-sm-6 edit-profile"},[t("label",[e._v("Name")]),t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.rgisterdata.fullName,expression:"rgisterdata.fullName"}],staticClass:"form-control",attrs:{type:"text",name:"fullName"},domProps:{value:e.rgisterdata.fullName},on:{input:function(a){a.target.composing||e.$set(e.rgisterdata,"fullName",a.target.value)}}}),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("fullName"),expression:"errors.has('fullName')"}],staticClass:"message"},[e._v(e._s(e.errors.first("fullName")))])]),t("div",{staticClass:"form-group mb-3 col-lg-6 col-sm-6 edit-profile"},[t("label",[e._v("Username")]),t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.rgisterdata.username,expression:"rgisterdata.username"}],staticClass:"form-control",attrs:{type:"text",name:"username"},domProps:{value:e.rgisterdata.username},on:{input:function(a){a.target.composing||e.$set(e.rgisterdata,"username",a.target.value)}}}),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("username"),expression:"errors.has('username')"}],staticClass:"message"},[e._v(e._s(e.errors.first("username")))])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"form-group mb-3 col-lg-6 col-sm-6 edit-profile"},[t("label",[e._v("Phone Number")]),t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:10|min:10",expression:"'required|max:10|min:10'"},{name:"model",rawName:"v-model",value:e.rgisterdata.phoneNo,expression:"rgisterdata.phoneNo"}],staticClass:"form-control",attrs:{type:"number",onkeydown:"javascript: return event.keyCode === 8 || event.keyCode === 46 ? true : !isNaN(Number(event.key))",name:"Phone No"},domProps:{value:e.rgisterdata.phoneNo},on:{input:function(a){a.target.composing||e.$set(e.rgisterdata,"phoneNo",a.target.value)}}}),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("Phone No"),expression:"errors.has('Phone No')"}],staticClass:"message"},[e._v(e._s(e.errors.first("Phone No")))])]),t("div",{staticClass:"form-group mb-3 col-lg-6 col-sm-6 edit-profile"},[t("label",[e._v("Email")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.rgisterdata.email,expression:"rgisterdata.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",attrs:{type:"text",name:"email",readonly:""},domProps:{value:e.rgisterdata.email},on:{input:function(a){a.target.composing||e.$set(e.rgisterdata,"email",a.target.value)}}}),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("email"),expression:"errors.has('email')"}],staticClass:"message"},[e._v(e._s(e.errors.first("email")))])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"form-group mb-3 col-lg-6 col-sm-6 edit-profile"},[t("label",[e._v("Are You Signed With A Major Label?")]),t("span",{staticClass:"form-control pen-radio"},[t("label",{staticClass:"radio-item",attrs:{for:"option1"}},[t("span",[e._v("Unsigned")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.rgisterdata.signedType,expression:"rgisterdata.signedType"}],attrs:{type:"radio",id:"option1",name:"options",value:"2"},domProps:{checked:e._q(e.rgisterdata.signedType,"2")},on:{change:function(a){return e.$set(e.rgisterdata,"signedType","2")}}}),e._m(0)]),t("label",{staticClass:"radio-item",attrs:{for:"option2"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.rgisterdata.signedType,expression:"rgisterdata.signedType"}],attrs:{type:"radio",id:"option2",name:"options",value:"1"},domProps:{checked:e._q(e.rgisterdata.signedType,"1")},on:{change:function(a){return e.$set(e.rgisterdata,"signedType","1")}}}),e._m(1),t("span",[e._v("Signed")])])])]),t("div",{staticClass:"form-group mb-3 col-lg-6 col-sm-6 edit-profile"},[t("label",[e._v("Preferred Channel")]),t("span",{staticClass:"w-100 d-flex"},[t("label",{staticClass:"normal-radio"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.rgisterdata.prefferedChannel,expression:"rgisterdata.prefferedChannel"}],attrs:{type:"radio",value:"1",id:"channel2",name:"channels"},domProps:{checked:e._q(e.rgisterdata.prefferedChannel,"1")},on:{change:function(a){return e.$set(e.rgisterdata,"prefferedChannel","1")}}}),e._m(2)]),t("label",{staticClass:"normal-radio"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.rgisterdata.prefferedChannel,expression:"rgisterdata.prefferedChannel"}],attrs:{type:"radio",value:"2",id:"channel2",name:"channels"},domProps:{checked:e._q(e.rgisterdata.prefferedChannel,"2")},on:{change:function(a){return e.$set(e.rgisterdata,"prefferedChannel","2")}}}),e._m(3)])])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"form-group mb-3 col-lg-6 col-sm-6 edit-profile"},[t("label",[e._v("Channel Name")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.rgisterdata.channelName,expression:"rgisterdata.channelName"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"text",name:"channelName"},domProps:{value:e.rgisterdata.channelName},on:{input:function(a){a.target.composing||e.$set(e.rgisterdata,"channelName",a.target.value)}}}),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("channelName"),expression:"errors.has('channelName')"}],staticClass:"message"},[e._v(e._s(e.errors.first("channelName")))])]),t("div",{staticClass:"form-group mb-3 col-lg-6 col-sm-6 edit-profile"},[t("label",[e._v("Hometown")]),t("vue-google-autocomplete",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],ref:"address",staticClass:"form-control",attrs:{name:"address",id:"map",types:"(cities)",country:e.geocode,placeholder:"city"},on:{inputChange:e.checkingCity,placechanged:e.getAddressData},model:{value:e.rgisterdata.address,callback:function(a){e.$set(e.rgisterdata,"address",a)},expression:"rgisterdata.address"}}),t("span",{directives:[{name:"show",rawName:"v-show",value:!e.isCity,expression:"!isCity"}],staticClass:"message"},[e._v(e._s("city fielad is reqired"))])],1)]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-12 col-sm-12 d-flex"},[t("label",{staticClass:"swipe-button w-100"},[e._v("\n                            Have You Played at Any Festivals Within The Last\n                            Year?\n                            "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.answer,expression:"answer"}],attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(e.answer)?e._i(e.answer,"1")>-1:e.answer},on:{change:[function(a){var t=e.answer,s=a.target,r=!!s.checked;if(Array.isArray(t)){var i="1",n=e._i(t,i);s.checked?n<0&&(e.answer=t.concat([i])):n>-1&&(e.answer=t.slice(0,n).concat(t.slice(n+1)))}else e.answer=r},e.setsendData]}}),t("span")])]),t("div",{staticClass:"col-lg-12 col-sm-12 d-flex"},[t("label",{staticClass:"swipe-button w-100"},[e._v("\n                            Are You Currently Touring?\n                            "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.answer,expression:"answer"}],attrs:{type:"checkbox",value:"2"},domProps:{checked:Array.isArray(e.answer)?e._i(e.answer,"2")>-1:e.answer},on:{change:[function(a){var t=e.answer,s=a.target,r=!!s.checked;if(Array.isArray(t)){var i="2",n=e._i(t,i);s.checked?n<0&&(e.answer=t.concat([i])):n>-1&&(e.answer=t.slice(0,n).concat(t.slice(n+1)))}else e.answer=r},e.setsendData]}}),t("span")])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-12 col-sm-12 d-flex"},[t("label",{staticClass:"swipe-button w-100"},[e._v("\n                            Does Your Music Contain Explicit Content?\n                            "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.answer,expression:"answer"}],attrs:{type:"checkbox",value:"4"},domProps:{checked:Array.isArray(e.answer)?e._i(e.answer,"4")>-1:e.answer},on:{change:[function(a){var t=e.answer,s=a.target,r=!!s.checked;if(Array.isArray(t)){var i="4",n=e._i(t,i);s.checked?n<0&&(e.answer=t.concat([i])):n>-1&&(e.answer=t.slice(0,n).concat(t.slice(n+1)))}else e.answer=r},e.setsendData]}}),t("span")])]),t("div",{staticClass:"col-lg-12 col-sm-12 d-flex"},[t("label",{staticClass:"swipe-button w-100"},[e._v("\n                            Is Music is Your Primary Career ?\n                            "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.answer,expression:"answer"}],attrs:{type:"checkbox",value:"3"},domProps:{checked:Array.isArray(e.answer)?e._i(e.answer,"3")>-1:e.answer},on:{change:[function(a){var t=e.answer,s=a.target,r=!!s.checked;if(Array.isArray(t)){var i="3",n=e._i(t,i);s.checked?n<0&&(e.answer=t.concat([i])):n>-1&&(e.answer=t.slice(0,n).concat(t.slice(n+1)))}else e.answer=r},e.setsendData]}}),t("span")]),t("span",{directives:[{name:"show",rawName:"v-show",value:e.isAgre1,expression:"isAgre1"}],staticStyle:{"background-color":"red"}},[e._v(e._s("This Field Is Required"))])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-12 col-sm-12 d-flex"},[t("label",{staticClass:"swipe-button w-100"},[e._v("\n                            Do You Agree That Any Payments From MiV Are Only For\n                            The Artist Or Band And Not 3rd Party’s?\n                            "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.answer,expression:"answer"}],attrs:{type:"checkbox",value:"5"},domProps:{checked:Array.isArray(e.answer)?e._i(e.answer,"5")>-1:e.answer},on:{change:[function(a){var t=e.answer,s=a.target,r=!!s.checked;if(Array.isArray(t)){var i="5",n=e._i(t,i);s.checked?n<0&&(e.answer=t.concat([i])):n>-1&&(e.answer=t.slice(0,n).concat(t.slice(n+1)))}else e.answer=r},e.setsendData]}}),t("span")])]),t("div",{staticClass:"col-lg-12 col-sm-12 d-flex"},[t("label",{staticClass:"swipe-button w-100"},[e._v("\n                            Are You The Originator And/Or Hold The Rights To Use\n                            The Music You Intend To Upload On MiV?\n                            "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.answer,expression:"answer"}],attrs:{type:"checkbox",value:"6"},domProps:{checked:Array.isArray(e.answer)?e._i(e.answer,"6")>-1:e.answer},on:{change:[function(a){var t=e.answer,s=a.target,r=!!s.checked;if(Array.isArray(t)){var i="6",n=e._i(t,i);s.checked?n<0&&(e.answer=t.concat([i])):n>-1&&(e.answer=t.slice(0,n).concat(t.slice(n+1)))}else e.answer=r},e.setsendData]}}),t("span")])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-12 col-sm-12"},[t("label",{staticClass:"swipe-button w-100"},[e._v("\n                            Is The Copyright Holder For Music You Intend To Use\n                            On MiV Registered With BMI, ASCAP, SESAC, Merlin Or\n                            Any Other Private Firms?\n                            "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.answer,expression:"answer"}],attrs:{type:"checkbox",value:"7"},domProps:{checked:Array.isArray(e.answer)?e._i(e.answer,"7")>-1:e.answer},on:{change:[function(a){var t=e.answer,s=a.target,r=!!s.checked;if(Array.isArray(t)){var i="7",n=e._i(t,i);s.checked?n<0&&(e.answer=t.concat([i])):n>-1&&(e.answer=t.slice(0,n).concat(t.slice(n+1)))}else e.answer=r},e.setsendData]}}),t("span")]),e.isTextarea?t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.rgisterdata.copyrightHolder,expression:"rgisterdata.copyrightHolder"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control-area mt-20",staticStyle:{display:"block"},attrs:{name:"copyrightHolder"},domProps:{value:e.rgisterdata.copyrightHolder},on:{input:function(a){a.target.composing||e.$set(e.rgisterdata,"copyrightHolder",a.target.value)}}}):e._e(),t("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("copyrightHolder"),expression:"errors.has('copyrightHolder')"}],staticClass:"text-danger1"},[e._v(e._s(e.errors.first("copyrightHolder")))])]),t("div",{staticClass:"col-lg-12 col-sm-12 d-flex"},[t("label",{staticClass:"swipe-button w-100"},[e._v("\n                            Do You Agree Not To Use Any Music Owned And Managed\n                            By Any Of The Major Music Labels?\n                            "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.answer,expression:"answer"}],attrs:{type:"checkbox",value:"8"},domProps:{checked:Array.isArray(e.answer)?e._i(e.answer,"8")>-1:e.answer},on:{change:[function(a){var t=e.answer,s=a.target,r=!!s.checked;if(Array.isArray(t)){var i="8",n=e._i(t,i);s.checked?n<0&&(e.answer=t.concat([i])):n>-1&&(e.answer=t.slice(0,n).concat(t.slice(n+1)))}else e.answer=r},e.setsendData]}}),t("span")])])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-12 col-sm-12 d-flex"},[t("label",{staticClass:"swipe-button w-100"},[e._v("\n                            Do You Agree To The User Agreement For Music is\n                            Vivid (MiV) For Artists?\n                            "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.answer,expression:"answer"}],attrs:{type:"checkbox",value:"9"},domProps:{checked:Array.isArray(e.answer)?e._i(e.answer,"9")>-1:e.answer},on:{change:[function(a){var t=e.answer,s=a.target,r=!!s.checked;if(Array.isArray(t)){var i="9",n=e._i(t,i);s.checked?n<0&&(e.answer=t.concat([i])):n>-1&&(e.answer=t.slice(0,n).concat(t.slice(n+1)))}else e.answer=r},e.setsendData]}}),t("span")]),t("span",{directives:[{name:"show",rawName:"v-show",value:e.isAgre,expression:"isAgre"}],staticStyle:{"background-color":"red"}},[e._v(e._s("This Field Is Required"))])])])])]),t("div",{staticClass:"edit-profile-devidor mb-4"}),t("div",{staticClass:"edit-profile-devidor mb-4"}),t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-auto"},[t("button",{staticClass:"btn-signin d-inline-block",attrs:{type:"button"},on:{click:e.validateBeforeSubmit}},[e._v("\n                        Save\n                      ")]),t("router-link",{staticClass:"btn-cancel",attrs:{to:"/profile"}},[e._v("Cancel")])],1)])])])])]),t("div",{staticClass:"modal fade",attrs:{id:"deleteModal"}},[t("div",{staticClass:"modal-dialog modal-dialog-centered"},[t("div",{staticClass:"modal-content"},[e._m(4),t("div",{staticClass:"modal-footer justify-content-center"},[t("button",{staticClass:"btn modal-delete-btn",attrs:{type:"button"},on:{click:function(a){return e.deletevideo(e.introductionalid,"intro")}}},[e._v("\n                    Delete\n                  ")]),t("button",{staticClass:"btn modal-cancel-btn ml-0",attrs:{type:"button","data-dismiss":"modal"},on:{click:e.closemodal}},[e._v("\n                    Cancel\n                  ")])])])])]),t("div",{staticClass:"modal fade",attrs:{id:"deleteModal1"}},[t("div",{staticClass:"modal-dialog modal-dialog-centered"},[t("div",{staticClass:"modal-content"},[e._m(5),t("div",{staticClass:"modal-footer justify-content-center"},[t("button",{staticClass:"btn modal-delete-btn",attrs:{type:"button"},on:{click:function(a){return e.deletevideo(e.promotionalid,"prormo")}}},[e._v("\n                    Delete\n                  ")]),t("button",{staticClass:"btn modal-cancel-btn ml-0",attrs:{type:"button","data-dismiss":"modal"},on:{click:e.closemodal1}},[e._v("\n                    Cancel\n                  ")])])])])])],1)])])],1)},r=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("span",{staticClass:"radio"},[t("i",{staticClass:"icon-pen-line"})])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("span",{staticClass:"radio"},[t("i",{staticClass:"icon-pen"})])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("span",[t("i",{staticClass:"icon-youtube"}),e._v("Youtube ")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("span",[t("i",{staticClass:"icon-vimeo"}),e._v("Vimeo ")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"modal-body"},[t("img",{attrs:{src:"/assets/images/bin.png"}}),t("p",[e._v("\n                    Are you sure\n                    "),t("br"),e._v("you want to delete this video?\n                  ")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"modal-body"},[t("img",{attrs:{src:"/assets/images/bin.png"}}),t("p",[e._v("\n                    Are you sure\n                    "),t("br"),e._v("you want to delete this video?\n                  ")])])}],i=t("f499"),n=t.n(i),o=(t("7f7f"),t("34ef"),t("28a5"),t("92c3")),l=t.n(o),d=t("9062"),c=t.n(d),u=(t("1e3f"),t("e40d"),t("86d0")),m=t("b861"),p=t("0118"),v=t("62b0"),g=(t("41cb"),t("4ec3")),h=t("b7d6"),f=t("6bf9"),w=null,y={name:"Artisteditprofile",props:{msg:String},components:{vueDropzone:l.a,Loading:c.a,AppHeader:u["a"],AppFooter:m["a"],VueGoogleAutocomplete:p["a"]},data:function(){return{user:{},isLoading:!1,geocode:[],isCity:!0,fullPage:!0,answer:[],isTextarea:!1,isAgre:!1,isAgre1:!1,firstIsagre:!1,secondIsagre:!1,sendarray:["0","0","0","0","0","0","0","0","0"],isError:!1,errormessage:"",isSuccess:!1,promosonallink:null,intoductionallink:null,introthumpnail:"",promothumbnail:"",promotionalid:"",introductionalid:"",profilepictur:1,dropzoneOptions1:{dictInvalidFileType:"Invalid file type",timeout:18e5,url:"https://miv.musicisvivid.com/api/setup-profile",dictResponseError:"400",thumbnailWidth:150,maxFilesize:600,maxFiles:1,addRemoveLinks:!0,accept:function(e,a){e=e;var t=new FileReader;t.onload=function(){var s=new Blob([t.result],{type:e.type}),r=URL.createObjectURL(s),i=document.createElement("video");function n(e){var a;a=e.split(",")[0].indexOf("base64")>=0?atob(e.split(",")[1]):unescape(e.split(",")[1]);e.split(",")[0].split(":")[1].split(";")[0];for(var t=new Uint8Array(a.length),s=0;s<a.length;s++)t[s]=a.charCodeAt(s);var r=new Blob([t],{type:" image/png "}),i=new File([r],"thumbnail"+(new Date).getTime()+".png",{type:" image/png ",lastModified:(new Date).getTime()});return i}var o=function e(){l()&&(i.removeEventListener("timeupdate",e),i.pause())};i.addEventListener("loadeddata",function(){l()&&i.removeEventListener("timeupdate",o)});var l=function(){var e=document.createElement("canvas");e.width=i.videoWidth,e.height=i.videoHeight,e.getContext("2d").drawImage(i,0,0,e.width,e.height);var t=e.toDataURL(),s=t.length>1e5;if(s){document.createElement("img");w=n(t),a()}return s};i.addEventListener("timeupdate",o),i.preload="metadata",i.src=r,i.muted=!0,i.playsInline=!0,i.play()},t.readAsArrayBuffer(e)},params:{user_id:JSON.parse(localStorage.getItem("User")).id},method:"POST",acceptedFiles:"video/*",paramName:"introductionVideo",dictMaxFilesExceeded:"Max file size reached",dictFileTooBig:"File size is too big",dictDefaultMessage:"Upload Introductional Video"},dropzoneOptions:{dictInvalidFileType:"Invalid file type",dictDefaultMessage:"Upload Promotional Video",timeout:18e5,url:"https://miv.musicisvivid.com/api/setup-profile",dictResponseError:"400",thumbnailWidth:150,maxFilesize:600,maxFiles:1,addRemoveLinks:!0,accept:function(e,a){e=e;var t=new FileReader;t.onload=function(){var s=new Blob([t.result],{type:e.type}),r=URL.createObjectURL(s),i=document.createElement("video");function n(e){var a;a=e.split(",")[0].indexOf("base64")>=0?atob(e.split(",")[1]):unescape(e.split(",")[1]);e.split(",")[0].split(":")[1].split(";")[0];for(var t=new Uint8Array(a.length),s=0;s<a.length;s++)t[s]=a.charCodeAt(s);var r=new Blob([t],{type:" image/png "}),i=new File([r],"thumbnail"+(new Date).getTime()+".png",{type:" image/png ",lastModified:(new Date).getTime()});return i}var o=function e(){l()&&(i.removeEventListener("timeupdate",e),i.pause())};i.addEventListener("loadeddata",function(){l()&&i.removeEventListener("timeupdate",o)});var l=function(){var e=document.createElement("canvas");e.width=i.videoWidth,e.height=i.videoHeight,e.getContext("2d").drawImage(i,0,0,e.width,e.height);var t=e.toDataURL(),s=t.length>1e5;if(s){document.createElement("img");w=n(t),a()}return s};i.addEventListener("timeupdate",o),i.preload="metadata",i.src=r,i.muted=!0,i.playsInline=!0,i.play()},t.readAsArrayBuffer(e)},params:{user_id:JSON.parse(localStorage.getItem("User")).id},method:"POST",acceptedFiles:"video/*",paramName:"promotionalVideo",dictMaxFilesExceeded:"Max file size reached",dictFileTooBig:"File size is too big"}}},computed:{rgisterdata:function(){return this.$store.state.registerdata2}},methods:{filesChange:function(e,a){this.isLoading=!0,this.profilepictur=1;var t=this;new v["a"](a[0],{quality:.6,convertSize:2e5,success:function(e){var a=new FormData;a.append("profilePicture",e,e.name);var s={headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}};g["a"].post("update-profile-picture",a,s).then(function(e){e.data&&(t.isLoading=!1,t.initializedata(),t.$store.state.profilepicture=f["a"].profile_image_path+e.data.data.profilePicture)}).catch(function(e){})},error:function(e){console.error(e.message)}})},sendingEvent:function(e,a,t){this.isLoading=!0,t.append("musicImage",w)},sucesspage:function(){this.introvideo?this.isintro=!0:this.isintro=!1,this.promovideo?this.ispromo=!0:this.ispromo=!1,this.isintro||this.ispromo||(window.location.href="sucess")},maxfilereach:function(e){var a=document.querySelectorAll("[data-dz-errormessage]");a[a.length-1].innerHTML="Max File Reached"},thumbnail:function(e,a,t){},success:function(e,a){this.isLoading=!1,"Y"==a.data.introductionVideoUploaded&&(this.introvideo=!1),"Y"==a.data.promotionalVideoUploaded&&(this.promovideo=!1),this.initializedata()},error:function(e,a,t){a=a.errors;if(void 0!=t){var s=document.querySelectorAll("[data-dz-errormessage]");s[s.length-1].innerHTML=a}this.isLoading=!1,this.iserror=!0,this.errmessage=a},deletevideo:function(e,a){var t=this;this.isLoading=!0,"intro"==a?$("#deleteModal").removeClass("show").hide():$("#deleteModal1").removeClass("show").hide();var s={headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}};g["a"].post("delete-file",{fileId:e},s).then(function(e){t.isLoading=!1,"intro"==a?t.intoductionallink=null:t.promosonallink=null}).catch(function(e){})},showdetelemodal:function(){$("#deleteModal").addClass("show").show()},showdetelemodal1:function(){$("#deleteModal1").addClass("show").show()},closemodal:function(){$("#deleteModal").removeClass("show").hide()},closemodal1:function(){$("#deleteModal1").removeClass("show").hide()},checkingCity:function(e){""==e.newVal?this.isCity=!1:this.isCity=!0,this.$store.state.registerdata2.address=e.newVal},setisAgre1:function(e){this.firstIsagre=!this.firstIsagre},initializedata:function(){var e=this,a={headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}};g["a"].get("edit-profile-details",a).then(function(a){if(a.data){e.user=a.data.data.user,e.$store.state.registerdata2=e.user,$("#deleteModal").removeClass("show").hide(),$("#deleteModal1").removeClass("show").hide(),e.profilepictur=f["a"].profile_image_path+e.$store.state.registerdata2.profilePicture;var t=a.data.data.files.filter(function(e){return 1==e.subCategoryType});e.promotionalid=t.length>0?t[0].id:null,e.promosonallink=t.length>0?f["a"].video_path+t[0].fileName:null;var s=a.data.data.files.filter(function(e){return 2==e.subCategoryType});e.introductionalid=s.length>0?s[0].id:null,e.intoductionallink=s.length>0?f["a"].video_path+s[0].fileName:null,"1"==a.data.data.answers[6].answer&&(e.isTextarea=!0),e.answer=a.data.data.answers.map(function(e,a){return"1"==e.answer?String(a+1):null}),e.sendarray=a.data.data.answers.map(function(e,a){return"1"==e.answer?"1":"0"})}}).catch(function(e){})},setisAgre:function(e){this.secondIsagre=!this.secondIsagre},setsendData:function(e){event.target.checked&&1*event.target.value==7&&(this.isTextarea=!0),event.target.checked||1*event.target.value!=7||(this.isTextarea=!1),event.target.checked?this.sendarray[1*event.target.value-1]="1":this.sendarray[1*event.target.value-1]="0"},validateBeforeSubmit:function(){var e=this;this.$validator.validateAll().then(function(a){if(a)if(e.$store.state.registerdata2.answers=e.sendarray,"0"==e.$store.state.registerdata2.answers[2])e.isAgre1=!0;else if("0"==e.$store.state.registerdata2.answers[8])e.isAgre=!0;else{var t={headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}};g["a"].post("update-profile",e.$store.state.registerdata2,t).then(function(a){a.data&&(e.isAgre1=!1,e.isAgre=!1,e.isError=!1,e.isSuccess=!0,e.errormessage="",h["a"].getUser("",function(e){localStorage.setItem("User",n()(e));var a=document.getElementById("scrolldiv");a.scrollIntoView(!0)}))}).catch(function(a){e.isSuccess=!1,e.isError=!0;var t=a.response.data.errors;e.errormessage=t[0].msg})}})},getAddressData:function(e,a,t){this.geocode.push(a.address_components[3].short_name),this.$store.state.registerdata2.address=a.formatted_address,this.$store.state.registerdata2.latitude=e.latitude,this.$store.state.registerdata2.longitude=e.longitude}},created:function(){this.initializedata()},mounted:function(){this.$refs.address.update(JSON.parse(localStorage.getItem("User")).address)}},C=y,b=(t("00ee"),t("2877")),_=Object(b["a"])(C,s,r,!1,null,"f2a5e134",null);a["default"]=_.exports}}]);
//# sourceMappingURL=chunk-2fa46d3b.ed841250.js.map