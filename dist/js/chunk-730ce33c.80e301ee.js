(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-730ce33c"],{2898:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"homegb"},[a("AppHeader"),a("div",{staticClass:"artist-sign-up-container"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"artist-sign-up-wraper medium"},[a("form",{attrs:{action:"artist-sign-up-step-4.html"},on:{submit:function(t){return t.preventDefault(),e.validateBeforeSubmit(t)}}},[e._m(0),e.errormessage?a("div",{staticClass:"error-cls text-center"},[e._v("Please Select Digital Events Genre")]):e._e(),a("div",{staticClass:"artist-category-sec"},[a("ul",{staticClass:"artist-catagory-ul"},[a("li",[a("label",{staticClass:"digi-check-btn"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.rgisterdata.baseGenreId,expression:"rgisterdata.baseGenreId"}],attrs:{type:"radio",value:"1",name:"artist-radio"},domProps:{checked:e._q(e.rgisterdata.baseGenreId,"1")},on:{change:[function(t){return e.$set(e.rgisterdata,"baseGenreId","1")},function(t){return e.changeGenreId(e.rgisterdata.baseGenreId)}]}}),a("span",{staticClass:"digi-checkmark"}),e._m(1)])]),a("li",[a("label",{staticClass:"digi-check-btn"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.rgisterdata.baseGenreId,expression:"rgisterdata.baseGenreId"}],attrs:{type:"radio",value:"2",name:"artist-radio"},domProps:{checked:e._q(e.rgisterdata.baseGenreId,"2")},on:{change:[function(t){return e.$set(e.rgisterdata,"baseGenreId","2")},function(t){return e.changeGenreId(e.rgisterdata.baseGenreId)}]}}),a("span",{staticClass:"digi-checkmark"}),e._m(2)])]),a("li",[a("label",{staticClass:"digi-check-btn"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.rgisterdata.baseGenreId,expression:"rgisterdata.baseGenreId"}],attrs:{type:"radio",value:"3",name:"artist-radio"},domProps:{checked:e._q(e.rgisterdata.baseGenreId,"3")},on:{change:[function(t){return e.$set(e.rgisterdata,"baseGenreId","3")},function(t){return e.changeGenreId(e.rgisterdata.baseGenreId)}]}}),a("span",{staticClass:"digi-checkmark"}),e._m(3)])]),a("li",[a("label",{staticClass:"digi-check-btn"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.rgisterdata.baseGenreId,expression:"rgisterdata.baseGenreId"}],attrs:{type:"radio",value:"4",name:"artist-radio"},domProps:{checked:e._q(e.rgisterdata.baseGenreId,"4")},on:{change:[function(t){return e.$set(e.rgisterdata,"baseGenreId","4")},function(t){return e.changeGenreId(e.rgisterdata.baseGenreId)}]}}),a("span",{staticClass:"digi-checkmark"}),e._m(4)])]),a("li",[a("label",{staticClass:"digi-check-btn"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.rgisterdata.baseGenreId,expression:"rgisterdata.baseGenreId"}],attrs:{type:"radio",value:"5",name:"artist-radio"},domProps:{checked:e._q(e.rgisterdata.baseGenreId,"5")},on:{change:[function(t){return e.$set(e.rgisterdata,"baseGenreId","5")},function(t){return e.changeGenreId(e.rgisterdata.baseGenreId)}]}}),a("span",{staticClass:"digi-checkmark"}),e._m(5)])]),a("li",[a("label",{staticClass:"digi-check-btn"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.rgisterdata.baseGenreId,expression:"rgisterdata.baseGenreId"}],attrs:{type:"radio",value:"6",name:"artist-radio"},domProps:{checked:e._q(e.rgisterdata.baseGenreId,"6")},on:{change:[function(t){return e.$set(e.rgisterdata,"baseGenreId","6")},function(t){return e.changeGenreId(e.rgisterdata.baseGenreId)}]}}),a("span",{staticClass:"digi-checkmark"}),e._m(6)])]),a("li",[a("label",{staticClass:"digi-check-btn",on:{mouseover:e.mouseHoverEvent,mouseleave:e.mouseHoverEvent}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.rgisterdata.baseGenreId,expression:"rgisterdata.baseGenreId"}],attrs:{type:"radio",value:"7",name:"artist-radio"},domProps:{checked:e._q(e.rgisterdata.baseGenreId,"7")},on:{change:[function(t){return e.$set(e.rgisterdata,"baseGenreId","7")},function(t){return e.changeGenreId(e.rgisterdata.baseGenreId)}]}}),a("span",{staticClass:"digi-checkmark"}),a("span",{staticClass:"digi-label"},[a("p",[a("img",{attrs:{src:"/assets/images/metal-icon.png"}}),e._v(e._s(e.craftLabel)+"\n                        ")])])])]),a("li",[a("label",{staticClass:"digi-check-btn"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.rgisterdata.baseGenreId,expression:"rgisterdata.baseGenreId"}],attrs:{type:"radio",value:"8",name:"artist-radio"},domProps:{checked:e._q(e.rgisterdata.baseGenreId,"8")},on:{change:[function(t){return e.$set(e.rgisterdata,"baseGenreId","8")},function(t){return e.changeGenreId(e.rgisterdata.baseGenreId)}]}}),a("span",{staticClass:"digi-checkmark"}),e._m(7)])]),a("div",{staticClass:"clearfix"})]),a("div",{ref:"craftDropdown",staticClass:"craftDropdown",staticStyle:{display:"none"}},[a("ul",e._l(e.craftSubGenreList,function(t,s){return a("li",{key:s+t},[a("label",{staticClass:"digi-check-btn"},[a("span",{staticClass:"digi-checkmark"}),a("span",{staticClass:"digi-label"},[a("p",[a("img",{attrs:{src:"/assets/images/metal-icon.png"}}),e._v(e._s(t.lable)+"\n                              ")])])])])}),0)])]),a("button",{staticClass:"btn-signin success_msg_btn",attrs:{type:"submit",disabled:e.disableSubmit}},[e._v("Continue")])]),a("div",{staticClass:"signup3-text"},[e._v("\n              Artists; If you have signed up in POP and you don’t qualify with\n              enough Followers for the POP Live section, but your total\n              followers would qualify in the Alternative Genre/ Live section\n              then MiV will move you to the Live Alternative Genre.\n            ")]),e._m(8)])])])]),a("AppFooter")],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ar-signup-heading-container"},[a("h1",[e._v("Select Digital Events Genre")]),a("p",[e._v("Please Note This Cannot be Changed Once Profile is Created")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"digi-label"},[a("p",[a("img",{attrs:{src:"/assets/images/alternativ-icon.png"}}),e._v("Alternative\n                        ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"digi-label"},[a("p",[a("img",{attrs:{src:"/assets/images/country-icon.png"}}),e._v("Country\n                        ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"digi-label"},[a("p",[a("img",{attrs:{src:"/assets/images/edm-icon.png"}}),e._v("EDM\n                        ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"digi-label"},[a("p",[a("img",{attrs:{src:"/assets/images/hippop-icon.png"}}),e._v("Hiphop-RAP\n                        ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"digi-label",attrs:{title:"Dear Artist,\nYou may sign up in one of the eight genres only. This keeps the competition and feature program fair for all Artists. Choose the World Genre if you would like to compete with your fellow countrymen and other artists from other countries."}},[a("p",[a("img",{attrs:{src:"/assets/images/latin-icon.png"}}),e._v("World\n                        ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"digi-label"},[a("p",[a("img",{attrs:{src:"/assets/images/pop-icon.png"}}),e._v("Pop\n                        ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"digi-label"},[a("p",[a("img",{attrs:{src:"/assets/images/rock-icon.png"}}),e._v("Rock\n                        ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"step-count-ul"},[a("li",{staticClass:"active"}),a("li",{staticClass:"active"}),a("li",{staticClass:"active"}),a("li")])}],i=a("f499"),n=a.n(i),c=a("cebc"),l=a("86d0"),o=a("b861"),d=a("4ec3"),u=a("41cb"),g=a("b7d6"),m={name:"ArtistRegister3",props:{msg:String},components:{AppHeader:l["a"],AppFooter:o["a"]},data:function(){return{localUser:null,craftLabel:"Craft",craftSubGenreList:JSON.parse('[\n        {"code":"71","lable":"R&B-Rhythm and Blues"},\n        {"code":"72","lable":"Soul"},\n        {"code":"73","lable":"Jazz"},\n        {"code":"74","lable":"Folk"},\n        {"code":"75","lable":"Gospel"},\n        {"code":"76","lable":"ALL Other"}]'),disableSubmit:!1,rgisterdata:{baseGenreId:null},errormessage:""}},computed:{craftDropdownVisible:{get:function(){return"none"!==this.$refs.craftDropdown.style.display||"block"!==this.$refs.craftDropdown.style.display},set:function(e){this.$refs.craftDropdown.style.display=e?"block":"none"}}},watch:{"rgisterdata.baseGenreId":function(e){var t=this.$refs.craftDropdown.parentElement.classList;null!==e&&"7"===e[0]?(t.add("subgenre-selected"),this.craftDropdownVisible=!1):t.remove("subgenre-selected")}},methods:{mouseHoverEvent:function(e){this.craftDropdownVisible="mouseover"===e.type},validateBeforeSubmit:function(){var e=this;if(!this.rgisterdata.baseGenreId)return window.scrollTo(0,0),void(this.errormessage="Please Select Digital Events Genre");this.$validator.validateAll().then(function(t){t?(window.scrollTo(0,0),e.sendBackend(e.rgisterdata)):console.error("err")})},changeGenreId:function(e){this.errormessage=e?"":"Please Select Digital Events Genre"},sendBackend:function(e){var t=this;e["username"]=JSON.parse(localStorage.User).username,e["stepNo"]=3;var a={headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}};this.disableSubmit=!0,d["a"].put("update-profile",e,a).then(function(a){t.disableSubmit=!1,a.data&&a.data.status&&"success"==a.data.status&&(t.localUser=Object(c["a"])({},t.localUser&&t.localUser,e),localStorage.setItem("setupProfile",n()(t.localUser)),g["a"].getUser("",function(e){localStorage.setItem("User",n()(e));var t=document.getElementById("scrolldiv");t.scrollIntoView(!0)}),u["a"].push({name:"ArtistRegister4"}))}).then(function(e){t.disableSubmit=!1}).catch(function(e){t.disableSubmit=!1})}},created:function(){},mounted:function(){this.localUser=JSON.parse(localStorage.getItem("setupProfile")),this.localUser&&this.localUser.baseGenreId&&(this.rgisterdata.baseGenreId=this.localUser.baseGenreId)},beforeRouteEnter:function(e,t,a){var s={headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}};d["a"].get("me",s).then(function(e){if(e.data){var t=e.data;0==t.profileSetup?a({path:"/contest-music"}):a()}})}},p=m,b=(a("384a"),a("2877")),h=Object(b["a"])(p,s,r,!1,null,"395fc855",null);t["default"]=h.exports},"384a":function(e,t,a){"use strict";var s=a("79d2"),r=a.n(s);r.a},"79d2":function(e,t,a){}}]);
//# sourceMappingURL=chunk-730ce33c.80e301ee.js.map