(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-617af2ea"],{"279a":function(t,s,e){},"4c42":function(t,s,e){"use strict";var a=e("5097"),i=e.n(a);i.a},5097:function(t,s,e){},"817d":function(t,s,e){"use strict";var a=e("279a"),i=e.n(a);i.a},"8ef9":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("header",{staticClass:"fixed-header-wraper"},[e("div",{staticClass:"header-wraper"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row align-items-center justify-content-between"},[e("div",{staticClass:"logo"},[e("router-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"/assets/images/logo.png",alt:""}})])],1),e("button",{staticClass:"btn-menu-button",attrs:{type:"button"},on:{click:function(s){return t.showmenu()}}},[e("i",{staticClass:"icon-menu-2line"})]),e("div",{staticClass:"header-right"},[e("button",{staticClass:"btn-menu-button-close",attrs:{type:"button"},on:{click:function(s){return t.closemenu()}}},[e("i",{staticClass:"icon-close"})]),e("div",{staticClass:"button-block"},[e("router-link",{staticClass:"btn btn-primary",attrs:{to:"/login"}},[t._v("\n\t\t\t\t\t\t Login\n\t\t\t\t\t\t")]),e("button",{staticClass:"btn btn-default",attrs:{type:"button",id:"signup"},on:{click:function(s){return t.showmodal()}}},[t._v("Sign Up")])],1),e("div",{staticClass:"menu-box"},[e("nav",{staticClass:"navigation"},[e("ul",[e("li",[e("router-link",{attrs:{to:"/albumglobalsearch"}},[t._v(" Albums")])],1),e("li",[e("router-link",{attrs:{to:"/artistglobalsearch"}},[t._v("Artists")])],1),e("li",[e("router-link",{attrs:{to:"/songglobalsearch"}},[t._v("Songs")])],1),e("li",[e("router-link",{attrs:{to:"/competition-work-flow"}},[t._v("Contest")])],1)])])])])])]),e("div",{staticClass:"modal-mask bg-mask d-none"},[e("div",{staticClass:"modal-dialog modal-lg  modal-dialog-centered"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"popup-header text-center"},[e("img",{attrs:{src:"assets/images/logo2.png",alt:""}}),e("h3",{staticClass:"title"},[t._v("New to MiV?")]),e("a",{staticClass:"popup-close",attrs:{href:"javascript:;","data-dismiss":"modal"},on:{click:t.hidemodal}},[t._v("×")])]),e("div",{staticClass:"popup-body"},[e("form",{staticClass:"select-signup-categorys",attrs:{id:"idForm"}},[e("label",{staticClass:"select-signup-category",attrs:{for:"fan"}},[e("input",{attrs:{type:"radio",id:"fan",value:"fan",name:"signupOption"},on:{click:function(s){return t.selectType(1)}}}),t._m(0),e("span",{staticClass:"label"},[t._v("Fan Sign Up")])]),e("label",{staticClass:"select-signup-category",attrs:{for:"artist"}},[e("input",{attrs:{type:"radio",id:"artist",value:"artist",name:"signupOption"},on:{click:function(s){return t.selectType(2)}}}),t._m(1),e("span",{staticClass:"label"},[t._v("Artist Sign Up")])])])])])])])])])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",[e("img",{attrs:{src:"assets/images/fan-sign-up.png",alt:"icon"}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",[e("img",{attrs:{src:"assets/images/artist-sign-up-img.png",alt:" "}})])}],r=e("41cb"),n={name:"UnauthHeader",props:{msg:String},methods:{selectType:function(t){1==t?r["a"].push({name:"FanRegister"}):r["a"].push({path:"/artistregister"})},showmodal:function(){this.$store.commit("showmodal")},hidemodal:function(){this.$store.commit("hidemodal")},showmenu:function(){this.$store.commit("showmenu")},closemenu:function(){this.$store.commit("closemenu")}},mounted:function(){$(window).scroll(function(){$(window).scrollTop()>50?$(".header-wraper").addClass("fixed-menu"):$(".header-wraper").removeClass("fixed-menu")})}},o=n,l=e("2877"),c=Object(l["a"])(o,a,i,!1,null,"fd454c78",null);s["a"]=c.exports},ac7e:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"homegb"},[e("AppHeader"),t.$store.state.registerstep2?t.$store.state.registerstep2&&!t.$store.state.otprecive?e("div",[e("FanRegisterStep2")],1):t._e():e("div",[e("FanRegisterStep1")],1),t.$store.state.otprecive?e("div",[e("FanRegisterOtp")],1):t._e(),e("AppFooter")],1)},i=[],r=e("8ef9"),n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"login-section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"register-box"},[e("div",{staticClass:"register-right"},[e("h3",{staticClass:"title"},[t._v("Create Account")]),e("p",{staticClass:"content"}),e("form",{staticClass:"login-filds",on:{submit:function(s){return s.preventDefault(),t.validateBeforeSubmit(s)}}},[t.errors.length?e("p",[e("b",[t._v("Please correct the following error(s):")]),e("ul",t._l(t.errors,function(s,a){return e("li",{key:a,attrs:{error:s}},[t._v(t._s(s))])}),0)]):t._e(),e("div",{staticClass:"filds-group mb-20",class:{input:!0,error:t.errors.has("Full Name")}},[t._m(0),e("input",{directives:[{name:"model",rawName:"v-model",value:t.rgisterdata.fullName,expression:"rgisterdata.fullName"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"filds",class:{input:!0,"":t.errors.has("Full Name")},attrs:{type:"text",name:"Full Name","data-vv-delay":"500",placeholder:"Name"},domProps:{value:t.rgisterdata.fullName},on:{input:function(s){s.target.composing||t.$set(t.rgisterdata,"fullName",s.target.value)}}}),e("div",{staticClass:"fild-icon-right"},[e("i",{staticClass:"icon-warning"}),e("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("Full Name"),expression:"errors.has('Full Name')"}],staticClass:"message"},[t._v(t._s(t.errors.first("Full Name")))])])]),e("div",{staticClass:"filds-group mb-20",class:{input:!0,error:t.errors.has("Password")}},[t._m(1),e("input",{directives:[{name:"model",rawName:"v-model",value:t.rgisterdata.password,expression:"rgisterdata.password"},{name:"validate",rawName:"v-validate",value:"required|min:8",expression:"'required|min:8'"}],ref:"password",staticClass:"filds",class:{input:!0,"is-danger":t.errors.has("Password")},attrs:{type:"password",name:"Password","data-vv-delay":"1000",placeholder:"Password"},domProps:{value:t.rgisterdata.password},on:{input:function(s){s.target.composing||t.$set(t.rgisterdata,"password",s.target.value)}}}),e("div",{staticClass:"fild-icon-right"},[e("i",{staticClass:"icon-warning"}),e("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("Password"),expression:"errors.has('Password')"}],staticClass:"message"},[t._v(t._s(t.errors.first("Password")))])])]),e("div",{staticClass:"filds-group mb-20",class:{input:!0,error:t.errors.has("Confirm Password")}},[t._m(2),e("input",{directives:[{name:"model",rawName:"v-model",value:t.rgisterdata.password_confirmation,expression:"rgisterdata.password_confirmation"},{name:"validate",rawName:"v-validate",value:"required|confirmed:password",expression:"'required|confirmed:password'"}],staticClass:"filds",attrs:{type:"password","data-vv-delay":"1000",placeholder:"Confirm Password",name:"Confirm Password"},domProps:{value:t.rgisterdata.password_confirmation},on:{input:function(s){s.target.composing||t.$set(t.rgisterdata,"password_confirmation",s.target.value)}}}),e("div",{staticClass:"fild-icon-right"},[e("i",{staticClass:"icon-warning"}),e("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("Confirm Password"),expression:"errors.has('Confirm Password')"}],staticClass:"message"},[t._v(t._s(t.errors.first("Confirm Password")))])])]),t._m(3),t._m(4),e("p",{staticClass:"login-right-msg text-center mt-34"},[t._v("Already Have an Account !  "),e("router-link",{staticClass:"link",attrs:{to:"/login"}},[t._v("\n\t\t\t\t\t\t Login\n\t\t\t\t")])],1)])])])])])},o=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"fild-icon"},[e("i",{staticClass:"icon-user"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"fild-icon"},[e("i",{staticClass:"icon-locked"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"fild-icon"},[e("i",{staticClass:"icon-locked"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"colum-group"},[e("button",{staticClass:"btn-signin",attrs:{type:"submit"}},[t._v("\n\t\t\t\t\t\t\t\tContinue\n\t\t\t\t\t\t\t")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",{staticClass:"step"},[e("li",{staticClass:"active"}),e("li")])}],l=(e("4ec3"),{name:"FanRegisterStep1",props:{msg:String},data:function(){return{}},computed:{rgisterdata:function(){return this.$store.state.registerdata}},methods:{validateBeforeSubmit:function(){var t=this;this.$validator.validateAll().then(function(s){s&&(t.$store.state.registerstep2=!0)})}},mounted:function(){}}),c=l,d=e("2877"),m=Object(d["a"])(c,n,o,!1,null,"a79fa1f2",null),u=m.exports,v=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"login-section"},[t.rgisterdata.error?e("span",{staticClass:"validation-message error",class:{show:t.rgisterdata.error}},[t._m(0),e("i",{staticClass:"icon-error"}),t._v("\n\t\t\t"+t._s(t.rgisterdata.errormessage)+"\n\t\t")]):t._e(),e("div",{staticClass:"container"},[e("div",{staticClass:"register-box"},[e("div",{staticClass:"register-right"},[e("h3",{staticClass:"title"},[t._v("Create Account")]),e("form",{staticClass:"login-filds",on:{submit:function(s){return s.preventDefault(),t.validateBeforeSubmit(s)}}},[t.errors.length?e("p",[e("b",[t._v("Please correct the following error(s):")]),e("ul",t._l(t.errors,function(s,a){return e("li",{key:a,attrs:{error:s}},[t._v(t._s(s))])}),0)]):t._e(),e("div",{staticClass:"filds-group mb-20",class:{input:!0,error:t.errors.has("Email")}},[t._m(1),e("input",{directives:[{name:"model",rawName:"v-model",value:t.rgisterdata.email,expression:"rgisterdata.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"filds",attrs:{type:"email",name:"Email","data-vv-delay":"1000",placeholder:"Email"},domProps:{value:t.rgisterdata.email},on:{input:function(s){s.target.composing||t.$set(t.rgisterdata,"email",s.target.value)}}}),e("div",{staticClass:"fild-icon-right"},[e("i",{staticClass:"icon-warning"}),e("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("Email"),expression:"errors.has('Email')"}],staticClass:"message"},[t._v(t._s(t.errors.first("Email")))])])]),e("div",{staticClass:"filds-group mb-20  custom-select-box",class:{input:!0,error:t.errors.has("Dob")}},[t._m(2),e("datetime",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"input-class":"filds",name:"Dob","data-vv-delay":"1000","max-datetime":t.maxDatetime,placeholder:"Date Of Birth"},on:{click:t.open},model:{value:t.rgisterdata.dob,callback:function(s){t.$set(t.rgisterdata,"dob",s)},expression:"rgisterdata.dob"}}),e("div",{staticClass:"fild-icon-right"},[e("i",{staticClass:"icon-warning"}),e("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("Dob"),expression:"errors.has('Dob')"}],staticClass:"message"},[t._v(t._s(t.errors.first("Dob")))])])],1),e("div",[e("p",{staticClass:"aggrement"},[e("input",{staticClass:"checkbox-cls",attrs:{type:"checkbox"},on:{change:function(s){return t.checkedValue(s)}}}),t._v("\n                  Do You Agree To The "),t._m(3),t._v("\n               \n                For Music is Vivid (MiV) For Fans?\n\t\t\t\t\t\t\t\t "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.errorMsg,expression:"errorMsg"}],staticClass:"text-danger"},[t._v("To proceed, you must accept the user agreement")])])]),t._m(4),t._m(5),e("p",{staticClass:"login-right-msg text-center mt-34"},[t._v("Already Have an Account!  "),e("router-link",{staticClass:"link",attrs:{to:"/login"}},[t._v("\n\t\t\t\t\t\t Login\n\t\t\t\t")])],1)])])])])])},p=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"close",attrs:{href:"javascript:;"}},[e("i",{staticClass:"icon-close"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"fild-icon"},[e("i",{staticClass:"icon-envelope"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"fild-icon"},[e("i",{staticClass:"icon-calendar"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",[e("a",{attrs:{href:"/fan-agreement",target:"_blank"}},[t._v("User Agreement")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"colum-group"},[e("button",{staticClass:"btn-signin",attrs:{type:"submit"}},[t._v("\n\t\t\t\t\t\t\t\tComplete Registration\n\t\t\t\t\t\t\t")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",{staticClass:"step"},[e("li"),e("li",{staticClass:"active"})])}],f=e("859b"),g={name:"FanRegisterStep2",props:{msg:String},data:function(){return{maxDatetime:"",isAgree:!1,errorMsg:!1}},components:{Datetime:f["Datetime"]},computed:{rgisterdata:function(){return this.$store.state.registerdata}},methods:{validateBeforeSubmit:function(){var t=this;this.isAgree?(this.errorMsg=!1,this.$validator.validateAll().then(function(s){if(s){var e=t.$store.state.registerdata,a=e.fullName,i=e.dob,r=e.email,n=e.password,o=(e.gender,i),l=new Date(o),c=l.getFullYear(),d=l.getMonth()+1,m=l.getDate();m<10&&(m="0"+m),d<10&&(d="0"+d),o=m+"/"+d+"/"+c;var u={fullName:a,dob:o,email:r,password:n,userType:"3",username:r};t.$store.commit("fanRgister",u)}})):this.errorMsg=!0},checkedValue:function(t){!0===t.target.checked?(this.isAgree=!0,this.errorMsg=!1):this.isAgree=!1},open:function(){}},mounted:function(){var t=new Date,s=t.getFullYear(),e=t.getMonth(),a=t.getDate(),i=new Date(s-18,e,a);this.maxDatetime=i.toISOString()}},h=g,_=(e("4c42"),Object(d["a"])(h,v,p,!1,null,"4f0ede75",null)),C=_.exports,w=(e("bc3a"),e("b861")),b={name:"FanRegister",props:{msg:String},components:{AppHeader:r["a"],AppFooter:w["a"],FanRegisterStep1:u,FanRegisterStep2:C},data:function(){return{isError:!1,errorMessage:"",step2:!1}}},y=b,k=Object(d["a"])(y,a,i,!1,null,"160b0cb6",null);s["default"]=k.exports},b861:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("footer",[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"footer-colum"},[e("img",{staticClass:"flogo",attrs:{src:"/assets/images/Music-Equalizer-v3.png",alt:""}}),e("h3",[t._v("MiV")]),e("h4",{staticClass:"cursr",on:{click:function(s){return t.$router.push("how-what-why")}}},[t._v("How, What and Why")]),e("h4",{staticClass:"cursr",on:{click:function(s){return t.$router.push("artist-signup")}}},[t._v("Artist Landing Page")])]),t._m(0),t._m(1),t._m(2)]),e("div",{staticClass:"footer-bottom"},[t._m(3),e("p",{staticClass:"copyright-text"},[t._v("© MiV LLC. "+t._s(t.currentYear)+", All Rights Reserved")])])])])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"footer-colum"},[e("h3",{staticClass:"footer-title"},[t._v("Friends Center for")]),e("div",{staticClass:"friends_logo"},[e("img",{attrs:{src:"/assets/images/f_artist.png",alt:""}}),e("img",{attrs:{src:"/assets/images/f_fans.png",alt:""}})]),e("div",{staticClass:"footer_accor"},[e("h6",[e("a",{attrs:{href:"javascript:;"}},[t._v("Members")])]),e("p",[t._v("\n            If you have any interesting and fun comments we\n            may add them here send to\n            "),e("a",{attrs:{href:"mailto:admin@musicisvivid.com"}},[t._v("admin@musicisvivid.com")]),t._v("\n            and Please keep this short,\n            add a picture if you want.\n          ")])]),e("div",{staticClass:"footer_accor"},[e("h6",[e("a",{attrs:{href:"javascript:;"}},[t._v("Artist")])]),e("p",[t._v("\n            If you have any interesting recommendations or a story to share please feel free\n            to send us an email at\n            "),e("a",{attrs:{href:"mailto:admin@musicisvivid.com"}},[t._v("admin@musicisvivid.com")]),t._v(" and also\n            state if you are a Member or Non-Member. Please keep\n            messaging short. If you have a story we may share it here.\n          ")])]),e("div",{staticClass:"footer_accor"},[e("h6",[e("a",{attrs:{href:"javascript:;"}},[t._v("Affiliates")])]),e("p",[t._v("\n            We may list Affiliates (for example, aggregators who participate and those that do\n            not) and possibly any positive input from affiliates for Members and Artists.\n          ")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"footer-colum"},[e("h3",{staticClass:"footer-title"},[t._v("Help")]),e("p",[t._v("\n          If you have questions or comments\n          regarding Navigation, or Report an Issue.\n          Please Send your information to\n          "),e("a",{attrs:{href:"mailto:admin@musicisvivid.com"}},[t._v("admin@musicisvivid.com")]),t._v(".\n          Please state in the Subject Line,\n          Navigation Issue or Report an Issue.\n        ")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"footer-colum"},[e("div",{staticClass:"footer_app"},[e("h3",{staticClass:"footer-title no-border"},[t._v("Download The MiV App")]),e("a",{staticClass:"footer-store-btn",attrs:{href:"https://play.google.com/store/apps/details?id=com.techno.miv.miv&hl=en",target:"_blank"}},[e("img",{attrs:{src:"assets/images/footer-gplay-btn.png",alt:""}})]),e("a",{staticClass:"footer-store-btn",attrs:{href:"https://apps.apple.com/in/app/music-is-vivid/id1489035451",target:"_blank"}},[e("img",{attrs:{src:"assets/images/footer-appstore-btn.png",alt:""}})])]),e("div",{staticClass:"social_link"},[e("h3",{staticClass:"footer-title no-border"},[t._v("Follow us")]),e("nav",{staticClass:"footer-social"},[e("ul",[e("li",[e("a",{attrs:{href:"https://www.facebook.com/musicisvivid/",target:"_blank"}},[e("i",{staticClass:"icon-facebook"})])]),e("li",[e("a",{attrs:{href:"https://www.instagram.com/musicisvivid/",target:"_blank"}},[e("i",{staticClass:"icon-instagram"})])]),e("li",[e("a",{attrs:{href:"https://twitter.com/musicisvivid",target:"_blank"}},[e("i",{staticClass:"icon-twitter"})])]),e("li",[e("a",{attrs:{href:"https://in.pinterest.com/musicisvivid/pins/",target:"_blank"}},[e("i",{staticClass:"icon-pinterest"})])])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("nav",{staticClass:"footer-bottom-menu"},[e("ul",[e("li",[e("a",{attrs:{href:"/user-agreement",target:"_blank"}},[t._v("Terms of Use")])]),e("li",[e("a",{attrs:{href:"/privacy-cookies-policy",target:"_blank"}},[t._v("Privacy & Cookies Policy")])]),e("li",[e("a",{attrs:{href:"/disclaimer",target:"_blank"}},[t._v("Disclaimer")])]),e("li",[e("a",{attrs:{href:"http://blog.musicisvivid.com",target:"_blank"}},[t._v("Blog")])])])])}],r={name:"ComonFotter",props:{msg:String},created:function(){this.currentYear=(new Date).getFullYear()}};$("body").on("click",".footer_accor h6 a",function(){var t=$(this).parent().parent(".footer_accor");t.children("p").is(":visible")?t.children("p").slideUp(400):($(".footer_accor p").slideUp(400),t.children("p").slideDown(400))});var n=r,o=(e("817d"),e("2877")),l=Object(o["a"])(n,a,i,!1,null,"eae83bd2",null);s["a"]=l.exports}}]);
//# sourceMappingURL=chunk-617af2ea.ff16c4d0.js.map