(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-164f3dcf"],{"11e9":function(t,e,s){var a=s("52a7"),n=s("4630"),i=s("6821"),r=s("6a99"),c=s("69a8"),o=s("c69a"),l=Object.getOwnPropertyDescriptor;e.f=s("9e1e")?l:function(t,e){if(t=i(t),e=r(e,!0),o)try{return l(t,e)}catch(s){}if(c(t,e))return n(!a.f.call(t,e),t[e])}},"595b":function(t,e,s){"use strict";var a=s("948f"),n=s.n(a);n.a},"5d6b":function(t,e,s){var a=s("e53d").parseInt,n=s("a1ce").trim,i=s("e692"),r=/^[-+]?0[xX]/;t.exports=8!==a(i+"08")||22!==a(i+"0x16")?function(t,e){var s=n(String(t),3);return a(s,e>>>0||(r.test(s)?16:10))}:a},"5dbc":function(t,e,s){var a=s("d3f4"),n=s("8b97").set;t.exports=function(t,e,s){var i,r=e.constructor;return r!==s&&"function"==typeof r&&(i=r.prototype)!==s.prototype&&a(i)&&n&&n(t,i),t}},7445:function(t,e,s){var a=s("63b6"),n=s("5d6b");a(a.G+a.F*(parseInt!=n),{parseInt:n})},"8b5b":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("body",{staticClass:"inner-page"},[s("AppHeader"),s("div",{staticClass:"live-contest-section"},[s("div",{staticClass:"live-contest-header"},[s("h1",[t._v(t._s(1===t.typeIdValue?"Live Contest":"Draft Contest"))]),s("div",{staticClass:"contest-item text-center"},[s("label",[s("input",{attrs:{type:"radio",name:"contest_type",checked:""}}),s("span",{staticClass:"contest-type-check",on:{click:function(e){return t.genreIdData(1)}}},[s("img",{attrs:{src:"/assets/images/alternative.png",alt:"icon"}}),t._v("\n              Alternative\n            ")])]),s("label",[s("input",{attrs:{type:"radio",name:"contest_type"}}),s("span",{staticClass:"contest-type-check",on:{click:function(e){return t.genreIdData(2)}}},[s("img",{attrs:{src:"/assets/images/country_music.png",alt:"icon"}}),t._v("\n              Country\n            ")])]),s("label",[s("input",{attrs:{type:"radio",name:"contest_type"}}),s("span",{staticClass:"contest-type-check",on:{click:function(e){return t.genreIdData(3)}}},[s("img",{attrs:{src:"/assets/images/edm.png",alt:"icon"}}),t._v("\n              EDM\n            ")])]),s("label",[s("input",{attrs:{type:"radio",name:"contest_type"}}),s("span",{staticClass:"contest-type-check",on:{click:function(e){return t.genreIdData(4)}}},[s("img",{attrs:{src:"/assets/images/hiphop.png",alt:"icon"}}),t._v("\n               Hiphop-RAP\n            ")])])]),s("div",{staticClass:"contest-item text-center relativediv"},[s("label",[s("input",{attrs:{type:"radio",name:"contest_type"}}),s("span",{staticClass:"contest-type-check",on:{click:function(e){return t.genreIdData(5)}}},[s("img",{attrs:{src:"/assets/images/latin.png",alt:"icon"}}),t._v("\n              World\n            ")])]),s("label",[s("input",{attrs:{type:"radio",name:"contest_type"}}),s("span",{staticClass:"contest-type-check",on:{click:function(e){return t.genreIdData(6)}}},[s("img",{attrs:{src:"/assets/images/pop.png",alt:"icon"}}),t._v("\n              Pop\n            ")])]),s("label",{},[s("input",{attrs:{type:"radio",name:"contest_type"}}),s("span",{staticClass:"contest-type-check",on:{click:function(e){return t.genreIdData(7)}}},[s("img",{attrs:{src:"/assets/images/metal.png",alt:"icon"}}),t._v("\n            "+t._s(t.craftLabel)+"\n            ")]),s("div",{ref:"craftDropdown",staticClass:"subsubchild",staticStyle:{visibility:"hidden"}},t._l(t.craftSubGenreList,function(e,a){return s("label",{key:a+e},[s("span",{staticClass:"contest-type-check"},[s("img",{attrs:{src:"/assets/images/metal.png",alt:"icon"}}),t._v("\n                  "+t._s(e.lable)+"\n                ")])])}),0)]),s("label",[s("input",{attrs:{type:"radio",name:"contest_type"}}),s("span",{staticClass:"contest-type-check",on:{click:function(e){return t.genreIdData(8)}}},[s("img",{attrs:{src:"/assets/images/rock.png",alt:"icon"}}),t._v("\n              Rock\n            ")])])]),s("div",{staticClass:"serise-time-wrap"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-12 col-md-10"},[s("p",{staticClass:"text-center serise-para"},[t._v("\n                  "+t._s(1===t.contestTypeValue?"Series 2 will Starting Soon":2===t.contestTypeValue?"Playoff will Starting Soon":"Series 1 will Starting Soon")+"\n                  ")])])])]),s("div",{staticClass:"time-box"},[s("div",{staticClass:"minute-box"},[s("span",{staticClass:"minute"},[t._v(t._s(t.hours))]),t._v(" Hours\n            ")]),t._m(0),s("div",{staticClass:"minute-box"},[s("span",{staticClass:"minute"},[t._v(t._s(t.minutes))]),t._v(" Minutes\n            ")]),t._m(1),s("div",{staticClass:"minute-box"},[s("span",{staticClass:"minute"},[t._v(t._s(t.seconds))]),t._v(" Seconds\n            ")])])])]),s("div",{staticClass:"leaderboard-container"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-12 col-xl-10"},[s("div",{staticClass:"leader-board-tab-nav"},[s("ul",{staticClass:"nav nav-pills leaderboard-tab",attrs:{role:"tablist"}},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link active",attrs:{"data-toggle":"pill",href:"#live_lb"},on:{click:function(e){return t.contestType(1)}}},[t._v("Live")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{"data-toggle":"pill",href:"#draft_lb"},on:{click:function(e){return t.contestType(2)}}},[t._v("Draft")])])])]),s("div",{staticClass:"tab-content"},[s("div",{staticClass:"tab-pane active",attrs:{id:"live_lb"}},[s("div",{staticClass:"rank-row leaderboard-row"},[t._l(t.contestSeriesArr,function(e,a){return s("div",{key:a,staticClass:"rank-block series2-block"},[s("div",{staticClass:"inner-rank-block"},[s("span",{staticClass:"position"}),s("img",{attrs:{alt:"candidate",src:e.User.profilePicture?t.allpath.profile_image_path+e.User.profilePicture:"/assets/images/default_artist.png"}}),s("h1",{staticClass:"candidate-name"},[t._v(t._s(e.User?e.User.fullName:""))]),s("p",{staticClass:"location"},[s("img",{attrs:{src:"/assets/images/location.png"}}),t._v("\n                          "+t._s(e.User&&e.User.city?e.User.city:"")),e.User.city&&e.User.country?s("span",[t._v(",")]):t._e(),t._v("\n                          "+t._s(e.User&&e.User.country?e.User.country:"")),e.User.country&&e.User.state?s("span",[t._v(",")]):t._e(),t._v("\n                          "+t._s(e.User&&e.User.state?e.User.state:"")+"\n                          "),e.User.city||e.User.country||e.User.state?t._e():s("span",[t._v(t._s(e.User.address))])]),s("p",{staticClass:"award-point text-center"},[s("img",{attrs:{src:"/assets/images/award-trophy.png",alt:"icon"}}),s("span",[t._v(t._s(e.rank))])])])])}),!this.contestSeriesArr.length&&t.noDataMsg?s("div",{staticClass:"no-data-msg"},[t._v("No data found")]):t._e(),s("infinite-loading",{attrs:{identifier:t.infiniteId},on:{infinite:t.infiniteHandler}},[s("div",{attrs:{slot:"spinner"},slot:"spinner"},[s("img",{attrs:{src:"/assets/images/loader.gif"}})]),s("div",{attrs:{slot:"no-more"},slot:"no-more"},[t._v(t._s(""))]),s("div",{attrs:{slot:"no-results"},slot:"no-results"},[t._v(t._s(""))])])],2)]),s("div",{staticClass:"tab-pane",attrs:{id:"draft_lb"}},[s("div",{staticClass:"rank-row leaderboard-row"},[t._l(t.contestSeriesArr,function(e,a){return s("div",{key:a,staticClass:"rank-block series2-block"},[s("div",{staticClass:"inner-rank-block"},[s("span",{staticClass:"position"}),s("img",{attrs:{alt:"candidate",src:e.User.profilePicture?t.allpath.profile_image_path+e.User.profilePicture:"/assets/images/default_artist.png"}}),s("h1",{staticClass:"candidate-name"},[t._v(t._s(e.User?e.User.fullName:""))]),s("p",{staticClass:"location"},[s("img",{attrs:{src:"/assets/images/location.png"}}),t._v("\n                         "+t._s(e.User&&e.User.city?e.User.city:"")),e.User.country?s("span",[t._v(",")]):t._e(),t._v("\n                          "+t._s(e.User&&e.User.country?e.User.country:"")),e.User.state?s("span",[t._v(",")]):t._e(),t._v("\n                          "+t._s(e.User&&e.User.state?e.User.state:"")+"\n                          "),e.User.city||e.User.country||e.User.state?t._e():s("span",[t._v(t._s(e.User.address))])]),s("p",{staticClass:"award-point text-center"},[s("img",{attrs:{src:"/assets/images/award-trophy.png",alt:"icon"}}),s("span",[t._v(t._s(e.rank))])])])])}),!this.contestSeriesArr.length&&t.noDataMsg?s("div",{staticClass:"no-data-msg"},[t._v("No data found")]):t._e(),s("infinite-loading",{attrs:{identifier:t.infiniteId},on:{infinite:t.infiniteHandler}},[s("div",{attrs:{slot:"spinner"},slot:"spinner"},[s("img",{attrs:{src:"/assets/images/loader.gif"}})]),s("div",{attrs:{slot:"no-more"},slot:"no-more"},[t._v(t._s(""))]),s("div",{attrs:{slot:"no-results"},slot:"no-results"},[t._v(t._s(""))])])],2)])])])])])])])],1)])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"divider-box"},[s("span",[t._v(":")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"divider-box"},[s("span",[t._v(":")])])}],i=s("e814"),r=s.n(i),c=(s("c5f6"),s("6bf9")),o=s("41cb"),l=s("4ec3"),p=s("e166"),u=s.n(p),d=s("86d0"),f=s("f015"),v={name:"Livecontestserise",props:{msg:String},components:{AppHeader:d["a"],InfiniteLoading:u.a,GlobalArtist:f["a"]},data:function(){return{craftLabel:"Craft",craftSubGenreList:JSON.parse('[\n        {"code":"71","lable":"R&B-Rhythm and Blues"},\n        {"code":"72","lable":"Soul"},\n        {"code":"73","lable":"Jazz"},\n        {"code":"74","lable":"Folk"},\n        {"code":"75","lable":"Gospel"},\n        {"code":"76","lable":"ALL Other"}]'),user:JSON.parse(localStorage.getItem("User")),allpath:c["a"],eventTime:0,hours:0,minutes:0,seconds:0,contestSeriesArr:[],genreIdValue:1,typeIdValue:1,page:1,infiniteId:+new Date,noDataMsg:!1,contestTypeValue:Number}},computed:{craftDropdownVisible:{get:function(){return"hidden"!==this.$refs.craftDropdown.style.visibility||"collapse"!==this.$refs.craftDropdown.style.visibility},set:function(t){this.$refs.craftDropdown.style.visibility=t?"visible":"hidden"}},otpCountDown:function(){}},watch:{genreIdValue:function(t){t=String(t);var e=this.$refs.craftDropdown.parentElement.classList;null!==t&&"7"===t[0]?(e.add("subgenre-selected"),this.craftDropdownVisible=!1):e.remove("subgenre-selected")}},methods:{mouseHoverEvent:function(t){this.craftDropdownVisible="mouseover"===t.type},contestSeriseList:function(){var t=this,e={page:1,perPage:10};l["a"].get("contest-result/".concat(this.genreIdValue,"/").concat(this.typeIdValue),{params:e,headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}}).then(function(e){e.data&&(t.contestSeriesArr=e.data.data,t.eventTime=Math.abs(e.data.timeLeft),t.startTimer(t.eventTime),t.contestTypeValue=e.data.contestType),e.data.data.length||(t.noDataMsg=!0),3===t.contestTypeValue&&o["a"].push({path:"/top-three-result"})}).catch(function(t){})},startTimer:function(t){var e=this,s=t;setInterval(function(){e.hours=r()(s/3600,10),e.minutes=r()(s%3600/60,10),e.seconds=r()(s%3600%60,10),e.hours=e.hours<10?"0"+e.hours:e.hours,e.minutes=e.minutes<10?"0"+e.minutes:e.minutes,e.seconds=e.seconds<10?"0"+e.seconds:e.seconds,--s<0&&(s=t)},1e3)},contestType:function(t){this.noDataMsg=!1,this.typeIdValue=t,this.infiniteId+=1,this.contestSeriesArr=[],this.contestSeriseList()},genreIdData:function(t){this.noDataMsg=!1,this.genreIdValue=t,this.infiniteId+=1,this.contestSeriesArr=[],this.contestSeriseList()},infiniteHandler:function(t){var e=this;this.page=this.page+1;var s={page:this.page,perPage:10};l["a"].get("contest-result/".concat(this.genreIdValue,"/").concat(this.typeIdValue),{params:s,headers:{"x-access-token":JSON.parse(localStorage.getItem("Token"))}}).then(function(s){s.data&&(console.log("infinite",s.data),s.data.data.map(function(t){e.contestSeriesArr.push(t)}),0===s.data.data.length?t.complete():t.loaded())}).catch(function(t){})}},mounted:function(){this.contestSeriseList()},created:function(){}},g=v,_=(s("595b"),s("2877")),m=Object(_["a"])(g,a,n,!1,null,"fa06ca4a",null);e["default"]=m.exports},"8b97":function(t,e,s){var a=s("d3f4"),n=s("cb7c"),i=function(t,e){if(n(t),!a(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,a){try{a=s("9b43")(Function.call,s("11e9").f(Object.prototype,"__proto__").set,2),a(t,[]),e=!(t instanceof Array)}catch(n){e=!0}return function(t,s){return i(t,s),e?t.__proto__=s:a(t,s),t}}({},!1):void 0),check:i}},9093:function(t,e,s){var a=s("ce10"),n=s("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,n)}},"948f":function(t,e,s){},a1ce:function(t,e,s){var a=s("63b6"),n=s("25eb"),i=s("294c"),r=s("e692"),c="["+r+"]",o="​",l=RegExp("^"+c+c+"*"),p=RegExp(c+c+"*$"),u=function(t,e,s){var n={},c=i(function(){return!!r[t]()||o[t]()!=o}),l=n[t]=c?e(d):r[t];s&&(n[s]=l),a(a.P+a.F*c,"String",n)},d=u.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(p,"")),t};t.exports=u},aa77:function(t,e,s){var a=s("5ca1"),n=s("be13"),i=s("79e5"),r=s("fdef"),c="["+r+"]",o="​",l=RegExp("^"+c+c+"*"),p=RegExp(c+c+"*$"),u=function(t,e,s){var n={},c=i(function(){return!!r[t]()||o[t]()!=o}),l=n[t]=c?e(d):r[t];s&&(n[s]=l),a(a.P+a.F*c,"String",n)},d=u.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(p,"")),t};t.exports=u},b9e9:function(t,e,s){s("7445"),t.exports=s("584a").parseInt},c5f6:function(t,e,s){"use strict";var a=s("7726"),n=s("69a8"),i=s("2d95"),r=s("5dbc"),c=s("6a99"),o=s("79e5"),l=s("9093").f,p=s("11e9").f,u=s("86cc").f,d=s("aa77").trim,f="Number",v=a[f],g=v,_=v.prototype,m=i(s("2aeb")(_))==f,h="trim"in String.prototype,b=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=h?e.trim():d(e,3);var s,a,n,i=e.charCodeAt(0);if(43===i||45===i){if(s=e.charCodeAt(2),88===s||120===s)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+e}for(var r,o=e.slice(2),l=0,p=o.length;l<p;l++)if(r=o.charCodeAt(l),r<48||r>n)return NaN;return parseInt(o,a)}}return+e};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof v&&(m?o(function(){_.valueOf.call(s)}):i(s)!=f)?r(new g(b(e)),s,v):b(e)};for(var y,C=s("9e1e")?l(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;C.length>k;k++)n(g,y=C[k])&&!n(v,y)&&u(v,y,p(g,y));v.prototype=_,_.constructor=v,s("2aba")(a,f,v)}},e692:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},e814:function(t,e,s){t.exports=s("b9e9")},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-164f3dcf.0b1801f9.js.map