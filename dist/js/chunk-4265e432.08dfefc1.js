(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4265e432"],{"0118":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("input",{directives:[{name:"model",rawName:"v-model",value:t.autocompleteText,expression:"autocompleteText"}],ref:"autocomplete",class:t.classname,attrs:{type:"text",id:t.id,placeholder:t.placeholder},domProps:{value:t.autocompleteText},on:{focus:function(e){return t.onFocus()},blur:function(e){return t.onBlur()},change:t.onChange,keypress:t.onKeyPress,keyup:t.onKeyUp,input:function(e){e.target.composing||(t.autocompleteText=e.target.value)}}})},i=[],r=a("5d73"),o=a.n(r),n=(a("6762"),a("2fdb"),a("5176")),l=a.n(n),c={street_number:"short_name",route:"long_name",locality:"long_name",administrative_area_level_1:"short_name",administrative_area_level_2:"county",country:"long_name",postal_code:"short_name"},u=["locality","administrative_area_level_3"],d=["locality","sublocality","postal_code","country","administrative_area_level_1","administrative_area_level_2"],m={name:"VueGoogleAutocomplete",props:{id:{type:String,required:!0},classname:String,placeholder:{type:String,default:"Start typing"},types:{type:String,default:"address"},country:{type:[String,Array],default:null},enableGeolocation:{type:Boolean,default:!1},geolocationOptions:{type:Object,default:null}},data:function(){return{autocomplete:null,autocompleteText:"",geolocation:{geocoder:null,loc:null,position:null}}},watch:{autocompleteText:function(t,e){this.$emit("inputChange",{newVal:t,oldVal:e},this.id)},country:function(t,e){this.autocomplete.setComponentRestrictions({country:null===this.country?[]:this.country})}},mounted:function(){var t={};this.types&&(t.types=[this.types]),this.country&&(t.componentRestrictions={country:this.country}),this.autocomplete=new google.maps.places.Autocomplete(document.getElementById(this.id),t),this.autocomplete.addListener("place_changed",this.onPlaceChanged)},methods:{onPlaceChanged:function(){var t=this.autocomplete.getPlace();t.geometry?void 0!==t.address_components&&(this.$emit("placechanged",this.formatResult(t),t,this.id),this.autocompleteText=document.getElementById(this.id).value,this.onChange()):this.$emit("no-results-found",t,this.id)},onFocus:function(){this.biasAutocompleteLocation(),this.$emit("focus")},onBlur:function(){this.$emit("blur")},onChange:function(){this.$emit("change",this.autocompleteText)},onKeyPress:function(t){this.$emit("keypress",t)},onKeyUp:function(t){this.$emit("keyup",t)},clear:function(){this.autocompleteText=""},focus:function(){this.$refs.autocomplete.focus()},blur:function(){this.$refs.autocomplete.blur()},update:function(t){this.autocompleteText=t},updateCoordinates:function(t){var e=this;(t||t.lat||t.lng)&&(this.geolocation.geocoder||(this.geolocation.geocoder=new google.maps.Geocoder),this.geolocation.geocoder.geocode({location:t},function(t,a){"OK"===a?(t=e.filterGeocodeResultTypes(t),t[0]?(e.$emit("placechanged",e.formatResult(t[0]),t[0],e.id),e.update(t[0].formatted_address)):e.$emit("error","no result for provided coordinates")):e.$emit("error","error getting address from coords")}))},geolocate:function(){var t=this;this.updateGeolocation(function(e,a){t.updateCoordinates(e)})},updateGeolocation:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(navigator.geolocation){var a={};this.geolocationOptions&&l()(a,this.geolocationOptions),navigator.geolocation.getCurrentPosition(function(a){var s={lat:a.coords.latitude,lng:a.coords.longitude};t.geolocation.loc=s,t.geolocation.position=a,e&&e(s,a)},function(e){t.$emit("error","Cannot get Coordinates from navigator",e)},a)}},biasAutocompleteLocation:function(){var t=this;this.enableGeolocation&&this.updateGeolocation(function(e,a){var s=new google.maps.Circle({center:e,radius:a.coords.accuracy});t.autocomplete.setBounds(s.getBounds())})},formatResult:function(t){for(var e={},a=0;a<t.address_components.length;a++){var s=t.address_components[a].types[0];if(c[s]){var i=t.address_components[a][c[s]];e[s]=i}}return e["latitude"]=t.geometry.location.lat(),e["longitude"]=t.geometry.location.lng(),e},filterGeocodeResultTypes:function(t){if(!t||!this.types)return t;var e=[],a=[this.types];a.includes("(cities)")&&(a=a.concat(u)),a.includes("(regions)")&&(a=a.concat(d));var s=!0,i=!1,r=void 0;try{for(var n,l=o()(t);!(s=(n=l.next()).done);s=!0){var c=n.value,m=!0,p=!1,h=void 0;try{for(var g,f=o()(c.types);!(m=(g=f.next()).done);m=!0){var v=g.value;if(a.includes(v)){e.push(c);break}}}catch(_){p=!0,h=_}finally{try{m||null==f.return||f.return()}finally{if(p)throw h}}}}catch(_){i=!0,r=_}finally{try{s||null==l.return||l.return()}finally{if(i)throw r}}return e}}},p=m,h=a("2877"),g=Object(h["a"])(p,s,i,!1,null,null,null);e["a"]=g.exports},"279a":function(t,e,a){},"2fdb":function(t,e,a){"use strict";var s=a("5ca1"),i=a("d2c8"),r="includes";s(s.P+s.F*a("5147")(r),"String",{includes:function(t){return!!~i(this,t,r).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"355d":function(t,e){e.f={}.propertyIsEnumerable},"469f":function(t,e,a){a("6c1c"),a("1654"),t.exports=a("7d7b")},4857:function(t,e,a){"use strict";var s=a("d331"),i=a.n(s);i.a},5147:function(t,e,a){var s=a("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[s]=!1,!"/./"[t](e)}catch(i){}}return!0}},5176:function(t,e,a){t.exports=a("51b6")},"51b6":function(t,e,a){a("a3c3"),t.exports=a("584a").Object.assign},"5d73":function(t,e,a){t.exports=a("469f")},6762:function(t,e,a){"use strict";var s=a("5ca1"),i=a("c366")(!0);s(s.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")("includes")},"7d7b":function(t,e,a){var s=a("e4ae"),i=a("7cd6");t.exports=a("584a").getIterator=function(t){var e=i(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return s(e.call(t))}},"817d":function(t,e,a){"use strict";var s=a("279a"),i=a.n(s);i.a},"8ef9":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"fixed-header-wraper"},[a("div",{staticClass:"header-wraper"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row align-items-center justify-content-between"},[a("div",{staticClass:"logo"},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:"/assets/images/logo.png",alt:""}})])],1),a("button",{staticClass:"btn-menu-button",attrs:{type:"button"},on:{click:function(e){return t.showmenu()}}},[a("i",{staticClass:"icon-menu-2line"})]),a("div",{staticClass:"header-right"},[a("button",{staticClass:"btn-menu-button-close",attrs:{type:"button"},on:{click:function(e){return t.closemenu()}}},[a("i",{staticClass:"icon-close"})]),a("div",{staticClass:"button-block"},[a("router-link",{staticClass:"btn btn-primary",attrs:{to:"/login"}},[t._v("\n\t\t\t\t\t\t Login\n\t\t\t\t\t\t")]),a("button",{staticClass:"btn btn-default",attrs:{type:"button",id:"signup"},on:{click:function(e){return t.showmodal()}}},[t._v("Sign Up")])],1),a("div",{staticClass:"menu-box"},[a("nav",{staticClass:"navigation"},[a("ul",[a("li",[a("router-link",{attrs:{to:"/albumglobalsearch"}},[t._v(" Albums")])],1),a("li",[a("router-link",{attrs:{to:"/artistglobalsearch"}},[t._v("Artists")])],1),a("li",[a("router-link",{attrs:{to:"/songglobalsearch"}},[t._v("Songs")])],1),a("li",[a("router-link",{attrs:{to:"/competition-work-flow"}},[t._v("Contest")])],1)])])])])])]),a("div",{staticClass:"modal-mask bg-mask d-none"},[a("div",{staticClass:"modal-dialog modal-lg  modal-dialog-centered"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"popup-header text-center"},[a("img",{attrs:{src:"assets/images/logo2.png",alt:""}}),a("h3",{staticClass:"title"},[t._v("New to MiV?")]),a("a",{staticClass:"popup-close",attrs:{href:"javascript:;","data-dismiss":"modal"},on:{click:t.hidemodal}},[t._v("×")])]),a("div",{staticClass:"popup-body"},[a("form",{staticClass:"select-signup-categorys",attrs:{id:"idForm"}},[a("label",{staticClass:"select-signup-category",attrs:{for:"fan"}},[a("input",{attrs:{type:"radio",id:"fan",value:"fan",name:"signupOption"},on:{click:function(e){return t.selectType(1)}}}),t._m(0),a("span",{staticClass:"label"},[t._v("Fan Sign Up")])]),a("label",{staticClass:"select-signup-category",attrs:{for:"artist"}},[a("input",{attrs:{type:"radio",id:"artist",value:"artist",name:"signupOption"},on:{click:function(e){return t.selectType(2)}}}),t._m(1),a("span",{staticClass:"label"},[t._v("Artist Sign Up")])])])])])])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("img",{attrs:{src:"assets/images/fan-sign-up.png",alt:"icon"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("img",{attrs:{src:"assets/images/artist-sign-up-img.png",alt:" "}})])}],r=a("41cb"),o={name:"UnauthHeader",props:{msg:String},methods:{selectType:function(t){1==t?r["a"].push({name:"FanRegister"}):r["a"].push({path:"/artistregister"})},showmodal:function(){this.$store.commit("showmodal")},hidemodal:function(){this.$store.commit("hidemodal")},showmenu:function(){this.$store.commit("showmenu")},closemenu:function(){this.$store.commit("closemenu")}},mounted:function(){$(window).scroll(function(){$(window).scrollTop()>50?$(".header-wraper").addClass("fixed-menu"):$(".header-wraper").removeClass("fixed-menu")})}},n=o,l=a("2877"),c=Object(l["a"])(n,s,i,!1,null,"fd454c78",null);e["a"]=c.exports},9306:function(t,e,a){"use strict";var s=a("c3a1"),i=a("9aa9"),r=a("355d"),o=a("241e"),n=a("335c"),l=Object.assign;t.exports=!l||a("294c")(function(){var t={},e={},a=Symbol(),s="abcdefghijklmnopqrst";return t[a]=7,s.split("").forEach(function(t){e[t]=t}),7!=l({},t)[a]||Object.keys(l({},e)).join("")!=s})?function(t,e){var a=o(t),l=arguments.length,c=1,u=i.f,d=r.f;while(l>c){var m,p=n(arguments[c++]),h=u?s(p).concat(u(p)):s(p),g=h.length,f=0;while(g>f)d.call(p,m=h[f++])&&(a[m]=p[m])}return a}:l},"9aa9":function(t,e){e.f=Object.getOwnPropertySymbols},a3c3:function(t,e,a){var s=a("63b6");s(s.S+s.F,"Object",{assign:a("9306")})},aae3:function(t,e,a){var s=a("d3f4"),i=a("2d95"),r=a("2b4c")("match");t.exports=function(t){var e;return s(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==i(t))}},b861:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"footer-colum"},[a("img",{staticClass:"flogo",attrs:{src:"/assets/images/Music-Equalizer-v3.png",alt:""}}),a("h3",[t._v("MiV")]),a("h4",{staticClass:"cursr",on:{click:function(e){return t.$router.push("how-what-why")}}},[t._v("How, What and Why")]),a("h4",{staticClass:"cursr",on:{click:function(e){return t.$router.push("artist-signup")}}},[t._v("Artist Landing Page")])]),t._m(0),t._m(1),t._m(2)]),a("div",{staticClass:"footer-bottom"},[t._m(3),a("p",{staticClass:"copyright-text"},[t._v("© MiV LLC. "+t._s(t.currentYear)+", All Rights Reserved")])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-colum"},[a("h3",{staticClass:"footer-title"},[t._v("Friends Center for")]),a("div",{staticClass:"friends_logo"},[a("img",{attrs:{src:"/assets/images/f_artist.png",alt:""}}),a("img",{attrs:{src:"/assets/images/f_fans.png",alt:""}})]),a("div",{staticClass:"footer_accor"},[a("h6",[a("a",{attrs:{href:"javascript:;"}},[t._v("Members")])]),a("p",[t._v("\n            If you have any interesting and fun comments we\n            may add them here send to\n            "),a("a",{attrs:{href:"mailto:admin@musicisvivid.com"}},[t._v("admin@musicisvivid.com")]),t._v("\n            and Please keep this short,\n            add a picture if you want.\n          ")])]),a("div",{staticClass:"footer_accor"},[a("h6",[a("a",{attrs:{href:"javascript:;"}},[t._v("Artist")])]),a("p",[t._v("\n            If you have any interesting recommendations or a story to share please feel free\n            to send us an email at\n            "),a("a",{attrs:{href:"mailto:admin@musicisvivid.com"}},[t._v("admin@musicisvivid.com")]),t._v(" and also\n            state if you are a Member or Non-Member. Please keep\n            messaging short. If you have a story we may share it here.\n          ")])]),a("div",{staticClass:"footer_accor"},[a("h6",[a("a",{attrs:{href:"javascript:;"}},[t._v("Affiliates")])]),a("p",[t._v("\n            We may list Affiliates (for example, aggregators who participate and those that do\n            not) and possibly any positive input from affiliates for Members and Artists.\n          ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-colum"},[a("h3",{staticClass:"footer-title"},[t._v("Help")]),a("p",[t._v("\n          If you have questions or comments\n          regarding Navigation, or Report an Issue.\n          Please Send your information to\n          "),a("a",{attrs:{href:"mailto:admin@musicisvivid.com"}},[t._v("admin@musicisvivid.com")]),t._v(".\n          Please state in the Subject Line,\n          Navigation Issue or Report an Issue.\n        ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-colum"},[a("div",{staticClass:"footer_app"},[a("h3",{staticClass:"footer-title no-border"},[t._v("Download The MiV App")]),a("a",{staticClass:"footer-store-btn",attrs:{href:"https://play.google.com/store/apps/details?id=com.techno.miv.miv&hl=en",target:"_blank"}},[a("img",{attrs:{src:"assets/images/footer-gplay-btn.png",alt:""}})]),a("a",{staticClass:"footer-store-btn",attrs:{href:"https://apps.apple.com/in/app/music-is-vivid/id1489035451",target:"_blank"}},[a("img",{attrs:{src:"assets/images/footer-appstore-btn.png",alt:""}})])]),a("div",{staticClass:"social_link"},[a("h3",{staticClass:"footer-title no-border"},[t._v("Follow us")]),a("nav",{staticClass:"footer-social"},[a("ul",[a("li",[a("a",{attrs:{href:"https://www.facebook.com/musicisvivid/",target:"_blank"}},[a("i",{staticClass:"icon-facebook"})])]),a("li",[a("a",{attrs:{href:"https://www.instagram.com/musicisvivid/",target:"_blank"}},[a("i",{staticClass:"icon-instagram"})])]),a("li",[a("a",{attrs:{href:"https://twitter.com/musicisvivid",target:"_blank"}},[a("i",{staticClass:"icon-twitter"})])]),a("li",[a("a",{attrs:{href:"https://in.pinterest.com/musicisvivid/pins/",target:"_blank"}},[a("i",{staticClass:"icon-pinterest"})])])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"footer-bottom-menu"},[a("ul",[a("li",[a("a",{attrs:{href:"/user-agreement",target:"_blank"}},[t._v("Terms of Use")])]),a("li",[a("a",{attrs:{href:"/privacy-cookies-policy",target:"_blank"}},[t._v("Privacy & Cookies Policy")])]),a("li",[a("a",{attrs:{href:"/disclaimer",target:"_blank"}},[t._v("Disclaimer")])]),a("li",[a("a",{attrs:{href:"http://blog.musicisvivid.com",target:"_blank"}},[t._v("Blog")])])])])}],r={name:"ComonFotter",props:{msg:String},created:function(){this.currentYear=(new Date).getFullYear()}};$("body").on("click",".footer_accor h6 a",function(){var t=$(this).parent().parent(".footer_accor");t.children("p").is(":visible")?t.children("p").slideUp(400):($(".footer_accor p").slideUp(400),t.children("p").slideDown(400))});var o=r,n=(a("817d"),a("2877")),l=Object(n["a"])(o,s,i,!1,null,"eae83bd2",null);e["a"]=l.exports},d2c8:function(t,e,a){var s=a("aae3"),i=a("be13");t.exports=function(t,e,a){if(s(e))throw TypeError("String#"+a+" doesn't accept regex!");return String(i(t))}},d331:function(t,e,a){},de65:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"homegb"},[a("AppHeader"),a("div",{staticClass:"artist-sign-up-container"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"artist-sign-up-wraper"},[a("form",{attrs:{action:"artist-sign-up-step-2.html"},on:{submit:function(e){return e.preventDefault(),t.validateBeforeSubmit(e)}}},[t.errors.length?a("p",[a("b",[t._v("Please correct the following error(s):")]),a("ul",t._l(t.errors,function(e,s){return a("li",{key:s,attrs:{error:e}},[t._v(t._s(e))])}),0)]):t._e(),a("div",{staticClass:"ar-signup-heading-container"},[a("h1",[t._v("Create Account")]),a("p",{staticStyle:{"font-size":"17px !important"}},[t._v("\n                If you want MIV to upload your Music "),a("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.openModal()}}},[t._v("Click Here")])])]),t.$store.state.registerdata2.error?a("span",{staticClass:"error-messages"},[t._v(t._s(t.$store.state.registerdata2.errormessage))]):t._e(),a("div",{staticClass:"filds-group mb-20",class:{input:!0,error:t.errors.has("Full Name")}},[t._m(0),a("input",{directives:[{name:"model",rawName:"v-model",value:t.rgisterdata.fullName,expression:"rgisterdata.fullName"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"filds",class:{input:!0,"":t.errors.has("Full Name")},attrs:{type:"text",autocomplete:"new",name:"Full Name","data-vv-delay":"500",placeholder:"Full name"},domProps:{value:t.rgisterdata.fullName},on:{input:function(e){e.target.composing||t.$set(t.rgisterdata,"fullName",e.target.value)}}}),a("div",{staticClass:"fild-icon-right"},[a("i",{staticClass:"icon-warning"}),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("Full Name"),expression:"errors.has('Full Name')"}],staticClass:"message"},[t._v(t._s(t.errors.first("Full Name")))])])]),a("div",{staticClass:"filds-group mb-20",class:{input:!0,error:t.errors.has("Phone No")}},[t._m(1),a("input",{directives:[{name:"model",rawName:"v-model",value:t.rgisterdata.phoneNo,expression:"rgisterdata.phoneNo"},{name:"validate",rawName:"v-validate",value:"required|max:10|min:10|regex:^[0-9]",expression:"'required|max:10|min:10|regex:^[0-9]'"}],staticClass:"filds",class:{input:!0,"":t.errors.has("Phone No")},attrs:{onkeydown:"javascript: return event.keyCode === 8 || event.keyCode === 46 ? true : !isNaN(Number(event.key))",type:"number",autocomplete:"new",name:"Phone No","data-vv-delay":"500",placeholder:"Phone Number"},domProps:{value:t.rgisterdata.phoneNo},on:{input:function(e){e.target.composing||t.$set(t.rgisterdata,"phoneNo",e.target.value)}}}),a("div",{staticClass:"fild-icon-right"},[a("i",{staticClass:"icon-warning"}),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("Phone No"),expression:"errors.has('Phone No')"}],staticClass:"message"},[t._v(t._s(t.errors.first("Phone No")))])])]),a("div",{staticClass:"filds-group mb-20",class:{input:!0,error:t.errors.has("Email")}},[t._m(2),a("input",{directives:[{name:"model",rawName:"v-model",value:t.rgisterdata.email,expression:"rgisterdata.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"filds",attrs:{type:"email",autocomplete:"off",name:"Email","data-vv-delay":"1000",placeholder:"Email"},domProps:{value:t.rgisterdata.email},on:{input:function(e){e.target.composing||t.$set(t.rgisterdata,"email",e.target.value)}}}),a("div",{staticClass:"fild-icon-right"},[a("i",{staticClass:"icon-warning"}),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("Email"),expression:"errors.has('Email')"}],staticClass:"message"},[t._v(t._s(t.errors.first("Email")))])])]),a("div",{staticClass:"filds-group mb-20",class:{input:!0,error:t.errors.has("Password")}},[t._m(3),a("input",{directives:[{name:"model",rawName:"v-model",value:t.rgisterdata.password,expression:"rgisterdata.password"},{name:"validate",rawName:"v-validate",value:"required|min:8",expression:"'required|min:8'"}],staticClass:"filds",class:{input:!0,"is-danger":t.errors.has("Password")},attrs:{type:"password",autocomplete:"off",name:"Password","data-vv-delay":"1000",placeholder:"Password"},domProps:{value:t.rgisterdata.password},on:{input:function(e){e.target.composing||t.$set(t.rgisterdata,"password",e.target.value)}}}),a("div",{staticClass:"fild-icon-right"},[a("i",{staticClass:"icon-warning"}),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("Password"),expression:"errors.has('Password')"}],staticClass:"message"},[t._v(t._s(t.errors.first("Password")))])])]),a("div",{staticClass:"question-container"},[t._m(4),a("div",{staticClass:"answer-field"},[a("div",{staticClass:"switch-container"},[a("label",{staticClass:"switch"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.rgisterdata.answers,expression:"rgisterdata.answers"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{type:"checkbox",name:"agrement",value:"9"},domProps:{checked:Array.isArray(t.rgisterdata.answers)?t._i(t.rgisterdata.answers,"9")>-1:t.rgisterdata.answers},on:{change:function(e){var a=t.rgisterdata.answers,s=e.target,i=!!s.checked;if(Array.isArray(a)){var r="9",o=t._i(a,r);s.checked?o<0&&t.$set(t.rgisterdata,"answers",a.concat([r])):o>-1&&t.$set(t.rgisterdata,"answers",a.slice(0,o).concat(a.slice(o+1)))}else t.$set(t.rgisterdata,"answers",i)}}}),a("span",{staticClass:"slider round"})]),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("agrement"),expression:"errors.has('agrement')"}],staticClass:"text-danger"},[t._v("To proceed, you must accept the user agreement")])])])]),a("button",{staticClass:"btn-signin success_msg_btn",attrs:{type:"submit",disabled:t.disableSubmit}},[t._v("Sign Up")])])])])])]),a("div",[a("AppFooter")],1),a("div",{staticClass:"modal fade",attrs:{id:"upload-model-view","data-backdrop":"static","data-keyboard":"false"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[t._m(5),a("button",{staticClass:"close",attrs:{type:"button","aria-hidden":"true"},on:{click:function(e){return t.closeModel()}}},[t._v("×")])]),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"modal-video-container"},[a("div",{staticClass:"text-center"},[a("div",{staticClass:"filds-group mb-20"},[t._m(6),a("input",{directives:[{name:"model",rawName:"v-model",value:t.uploadForm.fullName,expression:"uploadForm.fullName"}],staticClass:"filds",attrs:{type:"text",autocomplete:"new",name:"Full Name",placeholder:"Full name"},domProps:{value:t.uploadForm.fullName},on:{input:function(e){e.target.composing||t.$set(t.uploadForm,"fullName",e.target.value)}}}),t._m(7)]),a("div",{staticClass:"filds-group mb-20",class:{error:t.emailCheck}},[t._m(8),a("input",{directives:[{name:"model",rawName:"v-model",value:t.uploadForm.email,expression:"uploadForm.email"}],staticClass:"filds",attrs:{type:"email",autocomplete:"off",name:"Email",placeholder:"Email"},domProps:{value:t.uploadForm.email},on:{keyup:function(e){return t.ValidateEmail()},input:function(e){e.target.composing||t.$set(t.uploadForm,"email",e.target.value)}}})]),a("div",{staticClass:"filds-group mb-20",class:{error:t.phoneCheck}},[t._m(9),a("input",{directives:[{name:"model",rawName:"v-model",value:t.uploadForm.phoneNumber,expression:"uploadForm.phoneNumber"}],staticClass:"filds",attrs:{onkeydown:"javascript: return event.keyCode === 8 || event.keyCode === 46 ? true : !isNaN(Number(event.key))",type:"number",autocomplete:"new",name:"Phone No",placeholder:"Phone Number"},domProps:{value:t.uploadForm.phoneNumber},on:{keyup:function(e){return t.ValidatePhone()},input:function(e){e.target.composing||t.$set(t.uploadForm,"phoneNumber",e.target.value)}}})]),a("div",{staticClass:"filds-group mb-20",class:{error:t.musicUrlCheck}},[t._m(10),a("input",{directives:[{name:"model",rawName:"v-model",value:t.uploadForm.musicUrl,expression:"uploadForm.musicUrl"}],staticClass:"filds",attrs:{type:"text",autocomplete:"off",name:"music",placeholder:"Music URL"},domProps:{value:t.uploadForm.musicUrl},on:{keyup:function(e){return t.ValidateUrl()},input:function(e){e.target.composing||t.$set(t.uploadForm,"musicUrl",e.target.value)}}})]),a("div",{staticClass:"custom-control custom-checkbox"},[a("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"agreementChecked"},on:{change:function(e){return t.isChecked(e)}}}),t._m(11)])])]),a("div",{staticClass:"modal-div-btn clearfix pt-3 mb-2"},[a("button",{staticClass:"btn-signin success_msg_btn",attrs:{disabled:t.isDisable()},on:{click:t.submitData}},[t._v("Submit")])])])])])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fild-icon"},[a("img",{attrs:{src:"/assets/images/user-icon.png"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fild-icon"},[a("img",{attrs:{src:"/assets/images/Phone-icon.png"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fild-icon"},[a("img",{attrs:{src:"/assets/images/mail-icon.png"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fild-icon"},[a("img",{attrs:{src:"/assets/images/Password-icon.png"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{staticClass:"question-field"},[t._v("\n                Do You Agree To The\n                "),a("span",[a("a",{attrs:{href:"/user-agreement",target:"_blank"}},[t._v("User Agreement")])]),t._v("\n                For Music is Vivid (MiV) For Artists?\n              ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b",[t._v("I want MIV to upload my music")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fild-icon"},[a("img",{attrs:{src:"/assets/images/user-icon.png"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fild-icon-right"},[a("i",{staticClass:"icon-warning"}),a("span",{staticClass:"message"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fild-icon"},[a("img",{attrs:{src:"/assets/images/mail-icon.png"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fild-icon"},[a("img",{attrs:{src:"/assets/images/Phone-icon.png"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fild-icon"},[a("img",{attrs:{src:"/assets/images/music-icon.png"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticClass:"custom-control-label",attrs:{for:"agreementChecked"}},[a("span",{staticClass:"question-field"},[t._v("\n                    Do You Agree To The\n                    "),a("span",[a("a",{attrs:{href:"/user-agreement",target:"_blank"}},[t._v("User Agreement")])]),t._v("\n                    For Music is Vivid (MiV) For Artists?\n                  ")])])}],r=a("f499"),o=a.n(r),n=a("8ef9"),l=a("b861"),c=a("41cb"),u=a("0118"),d=a("4ec3"),m=a("bc3a"),p=a.n(m),h={name:"ArtistRegister",props:{msg:String},components:{AppHeader:n["a"],AppFooter:l["a"],VueGoogleAutocomplete:u["a"]},data:function(){return{user:{},geocode:[],isCity:!0,emailCheck:!1,phoneCheck:!1,musicUrlCheck:!1,checkedVal:!1,uploadForm:{},isAgre:!1,disableSubmit:!1,logindata:{email:"",password:"",deviceType:"W",deviceId:"",fcmToken:""}}},computed:{rgisterdata:function(){return this.$store.state.registerdata2}},methods:{logout:function(){localStorage.removeItem("User"),localStorage.removeItem("stripeId"),localStorage.removeItem("UserType"),localStorage.removeItem("Token"),localStorage.removeItem("contestMusicCount"),localStorage.removeItem("userEmail"),window.location.href="/artistregister"},checkingCity:function(t){""==t.newVal?this.isCity=!1:this.isCity=!0,this.$store.state.registerdata2.address=t.newVal},validateBeforeSubmit:function(){var t=this;this.$store.state.registerdata2.address?this.isCity=!0:this.isCity=!1,this.$validator.validateAll().then(function(e){if(e){var a=t.$store.state.registerdata2,s=a.email,i=a.fullName,r=a.phoneNo,n=a.password;t.disableSubmit=!0,d["a"].post("register",{email:s,fullName:i,phoneNo:r,password:n,userType:"2"}).then(function(e){t.logindata.email=s,t.logindata.password=n,e.data&&(t.$store.state.registerdata2.error=!1,t.$store.state.registerdata2.errormessage=""),t.disableSubmit=!1,sessionStorage.setItem("onwatdata",o()(t.$store.state.registerdata2)),t.login()}).catch(function(e){console.error("fail",e);var a=e.response.data.errors;1==a.length&&(t.$store.state.registerdata2.error=!0,t.$store.state.registerdata2.errormessage=a[0].msg)}).then(function(e){t.disableSubmit=!1})}})},login:function(){var t=this;d["a"].post("login",this.logindata).then(function(t){t.data&&(localStorage.setItem("User",o()(t.data.user)),2==t.data.user.userType&&localStorage.setItem("contestMusicCount",o()(t.data.contestMusicCount)),localStorage.setItem("UserType",o()(t.data.user.userType)),localStorage.setItem("Token",o()(t.data.accessToken)),"2"==JSON.parse(localStorage.getItem("User")).userType?0==t.data.contestMusicCount?c["a"].push({name:"ArtistRegister1"}):c["a"].push({name:"FanProfile"}):c["a"].push({name:"ArtistProfile"}))}).catch(function(e){400===e.response.status&&e.response.data.errors[0].otpPending&&(c["a"].push({name:"FanRegisterOtp"}),t.$store.state.isOtpPresent=!0);var a=e.response.data.errors;t.error=!0,t.errormessage=a[0].msg})},getAddressData:function(t,e,a){e&&e.address_components[3]&&this.geocode.push(e.address_components[3].short_name),this.$store.state.registerdata2.address=e.formatted_address,this.$store.state.registerdata2.latitude=t.latitude,this.$store.state.registerdata2.longitude=t.longitude,e&&e.address_components&&(this.$store.state.registerdata2.country=e.address_components[2].long_name,this.$store.state.registerdata2.city=e.address_components[0].long_name,this.$store.state.registerdata2.state=e.address_components[1].long_name)},openModal:function(){$("#upload-model-view").modal("show"),$("#upload-model-view").modal({backdrop:"static",keyboard:!1})},closeModel:function(){$("#upload-model-view").modal("hide")},ValidateEmail:function(){/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.uploadForm.email)?this.emailCheck=!1:this.emailCheck=!0},ValidatePhone:function(){/^\d{10}$/.test(this.uploadForm.phoneNumber)?this.phoneCheck=!1:this.phoneCheck=!0},ValidateUrl:function(){/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g.test(this.uploadForm.musicUrl)?this.musicUrlCheck=!1:this.musicUrlCheck=!0},isChecked:function(t){t.target.checked?this.checkedVal=!0:this.checkedVal=!1},isDisable:function(){return!!(!this.uploadForm.email||this.uploadForm.email&&this.emailCheck)||(!!(!this.uploadForm.phoneNumber||this.uploadForm.phoneNumber&&this.phoneCheck)||(!!(!this.uploadForm.musicUrl||this.uploadForm.musicUrl&&this.musicUrlCheck)||(!this.uploadForm.fullName||!this.checkedVal)))},submitData:function(){var t=this,e={headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}},a={};a.fullname=this.uploadForm.fullName,a.email=this.uploadForm.email,a.phone=this.uploadForm.phoneNumber,a.url=this.uploadForm.musicUrl,d["a"].post("new-artist-popup-mail",a,e).then(function(e){e.data&&(t.uploadForm={},t.showUploadRequestSuccess())}).catch(function(t){})},showUploadRequestSuccess:function(){swal({icon:"success",title:"Success",content:{element:"p",attributes:{innerHTML:'Dear Artist we have received your email and link to upload Music and we will complete this soon and come back to you, so for now please visit our Social media link\n            <nav class="footer-social" style="margin-left: 30%;">\n                <ul>\n                  <li>\n                    <a href="https://www.facebook.com/musicisvivid/" target="_blank">\n                      <i class="icon-facebook"></i>\n                    </a>\n                  </li>\n                  <li>\n                    <a href="https://www.instagram.com/musicisvivid/" target="_blank">\n                      <i class="icon-instagram"></i>\n                    </a>\n                  </li>\n                  <li>\n                    <a href="https://twitter.com/musicisvivid" target="_blank">\n                      <i class="icon-twitter"></i>\n                    </a>\n                  </li>\n                  <li>\n                    <a href="https://in.pinterest.com/musicisvivid/pins/" target="_blank">\n                      <i class="icon-pinterest"></i>\n                    </a>\n                  </li>\n                  \x3c!-- <li><a href="javascript:;"><i class="icon-pinterest"></i></a></li>\n                  <li><a href="javascript:;"><i class="icon-youtube"></i></a></li>--\x3e\n                </ul>\n            </nav>\n            '}}})}},mounted:function(){for(var t=document.getElementsByTagName("input"),e=0;t[e];e++)t[e].className&&-1!=t[e].className.indexOf("disableAutoComplete")&&t[e].setAttribute("autocomplete","off")},created:function(){var t=this;p.a.get("https://api.ipify.org?format=json").then(function(e){e&&(t.logindata.deviceId=e.data.ip,t.logindata.fcmToken=e.data.ip)}).catch(function(t){console.error(t)})},beforeRouteEnter:function(t,e,a){var s=this,i={headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}};d["a"].get("me",i).then(function(e){if("fail"!=e.data.status&&"2"==e.data.userType){var i=e.data,r=["/contest-music","/artistregisterstep1","/artistregisterstep2","/artistregisterstep3","/artistregisterstep4"];t.path!=r[i.profileSetup]?swal({title:"Are you sure?",text:"By going back, for security reasons, you will need to Log Back In.",icon:"warning",buttons:!0,dangerMode:!0}).then(function(t){t?s.logout():a({path:r[i.profileSetup]})}):a()}else a()})}},g=h,f=(a("4857"),a("2877")),v=Object(f["a"])(g,s,i,!1,null,"362af50b",null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-4265e432.08dfefc1.js.map