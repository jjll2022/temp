(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b03bc0f"],{"0fd9":function(t,e,i){"use strict";var a=i("ade3"),n=i("5530"),s=(i("d3b7"),i("caad"),i("2532"),i("99af"),i("b64b"),i("ac1f"),i("5319"),i("4ec9"),i("3ca3"),i("ddb0"),i("159b"),i("4b85"),i("2b0e")),r=i("d9f7"),o=i("80d2"),c=["sm","md","lg","xl"],l=["start","end","center"];function d(t,e){return c.reduce((function(i,a){return i[t+Object(o["A"])(a)]=e(),i}),{})}var u=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},h=d("align",(function(){return{type:String,default:null,validator:u}})),m=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},g=d("justify",(function(){return{type:String,default:null,validator:m}})),p=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},v=d("alignContent",(function(){return{type:String,default:null,validator:p}})),f={align:Object.keys(h),justify:Object.keys(g),alignContent:Object.keys(v)},b={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,i){var a=b[t];if(null!=i){if(e){var n=e.replace(t,"");a+="-".concat(n)}return a+="-".concat(i),a.toLowerCase()}}var S=new Map;e["a"]=s["a"].extend({name:"v-row",functional:!0,props:Object(n["a"])(Object(n["a"])(Object(n["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u}},h),{},{justify:{type:String,default:null,validator:m}},g),{},{alignContent:{type:String,default:null,validator:p}},v),render:function(t,e){var i=e.props,n=e.data,s=e.children,o="";for(var c in i)o+=String(i[c]);var l=S.get(o);return l||function(){var t,e;for(e in l=[],f)f[e].forEach((function(t){var a=i[t],n=y(e,t,a);n&&l.push(n)}));l.push((t={"no-gutters":i.noGutters,"row--dense":i.dense},Object(a["a"])(t,"align-".concat(i.align),i.align),Object(a["a"])(t,"justify-".concat(i.justify),i.justify),Object(a["a"])(t,"align-content-".concat(i.alignContent),i.alignContent),t)),S.set(o,l)}(),t(i.tag,Object(r["a"])(n,{staticClass:"row",class:l}),s)}})},"132d":function(t,e,i){"use strict";var a,n=i("5530"),s=(i("c96a"),i("d3b7"),i("caad"),i("2532"),i("ac1f"),i("00b4"),i("a9e3"),i("498a"),i("7db0"),i("fb6a"),i("4804"),i("7e2b")),r=i("a9ad"),o=i("af2b"),c=i("7560"),l=i("80d2"),d=i("2b0e"),u=i("58df");function h(t){return["fas","far","fal","fab","fad","fak"].some((function(e){return t.includes(e)}))}function m(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(a||(a={}));var g=Object(u["a"])(s["a"],r["a"],o["a"],c["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(l["y"])(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(l["v"])(t).find((function(e){return t[e]}));return e&&a[e]||Object(l["g"])(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(n["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=Object(n["a"])(Object(n["a"])({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(t){t.class=Object(n["a"])(Object(n["a"])({},t.class),this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var i=[],a=this.getDefaultData(),n="material-icons",s=t.indexOf("-"),r=s<=-1;r?i.push(t):(n=t.slice(0,s),h(n)&&(n="")),a.class[n]=!0,a.class[t]=!r;var o=this.getSize();return o&&(a.style={fontSize:o}),this.applyColors(a),e(this.hasClickListener?"button":this.tag,a,i)},renderSvgIcon:function(t,e){var i={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},a=this.getSize();return a&&(i.style={fontSize:a,height:a,width:a}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",i,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var i={class:{"v-icon__component":!0}},a=this.getSize();a&&(i.style={fontSize:a,height:a,width:a}),this.applyColors(i);var n=t.component;return i.props=t.props,i.nativeOn=i.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(n,i)])}},render:function(t){var e=this.getIcon();return"string"===typeof e?m(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=d["a"].extend({name:"v-icon",$_wrapperFor:g,functional:!0,render:function(t,e){var i=e.data,a=e.children,n="";return i.domProps&&(n=i.domProps.textContent||i.domProps.innerHTML||n,delete i.domProps.textContent,delete i.domProps.innerHTML),t(g,i,n?[n]:a)}})},"294a":function(t,e,i){"use strict";i("a39a")},"36a7":function(t,e,i){},4804:function(t,e,i){},"53ec":function(t,e,i){"use strict";var a={home:{main_description:"IVY 출신 최상위 유학 과외만 제공합니다.",secondary_description:"지금 바로 가입하세요!"},faq:[{title:"매칭 된 선생님과는 어떻게 수업을 진행하나요?",value:"Hello World",category:"수업 방식"},{title:"과외비는 어떤 주기로 정산 받나요?",value:"No money fo you",category:"선생님"},{title:"학생이 수업에 들어오질 않았어요.. :(",value:"Yo still get paid. no worries",category:"선생님"},{title:"결제 후 바로 수업 진행이 가능한가요?",value:"No mang, yo gotta wait a year",category:"결제/환불"},{title:"아이패드 안주나요?",value:"Give us some time",category:"기타"}]};e["a"]=a},"8a79":function(t,e,i){"use strict";var a=i("23e7"),n=i("e330"),s=i("06cf").f,r=i("50c4"),o=i("577e"),c=i("5a34"),l=i("1d80"),d=i("ab13"),u=i("c430"),h=n("".endsWith),m=n("".slice),g=Math.min,p=d("endsWith"),v=!u&&!p&&!!function(){var t=s(String.prototype,"endsWith");return t&&!t.writable}();a({target:"String",proto:!0,forced:!v&&!p},{endsWith:function(t){var e=o(l(this));c(t);var i=arguments.length>1?arguments[1]:void 0,a=e.length,n=void 0===i?a:g(r(i),a),s=o(t);return h?h(e,s,n):m(e,n-s.length,n)===s}})},"8efc":function(t,e,i){},"9d99":function(t,e,i){t.exports=i.p+"img/teacher.c8fd784a.svg"},a39a:function(t,e,i){},a523:function(t,e,i){"use strict";i("4de4"),i("d3b7"),i("b64b"),i("2ca0"),i("99af"),i("20f6"),i("4b85"),i("498a"),i("a15b");var a=i("2b0e");function n(t){return a["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,i){var a=i.props,n=i.data,s=i.children;n.staticClass="".concat(t," ").concat(n.staticClass||"").trim();var r=n.attrs;if(r){n.attrs={};var o=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(n.staticClass+=" ".concat(o.join(" ")))}return a.id&&(n.domProps=n.domProps||{},n.domProps.id=a.id),e(a.tag,n,s)}})}var s=i("d9f7");e["a"]=n("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var i,a=e.props,n=e.data,r=e.children,o=n.attrs;return o&&(n.attrs={},i=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}))),a.id&&(n.domProps=n.domProps||{},n.domProps.id=a.id),t(a.tag,Object(s["a"])(n,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(i||[])}),r)}})},adda:function(t,e,i){"use strict";var a=i("53ca"),n=(i("a9e3"),i("a15b"),i("8a79"),i("2ca0"),i("8efc"),i("90a2")),s=(i("36a7"),i("24b2")),r=i("58df"),o=Object(r["a"])(s["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=o,l=i("7560"),d=i("d9f7"),u=i("d9bd"),h="undefined"!==typeof window&&"IntersectionObserver"in window;e["a"]=Object(r["a"])(c,l["a"]).extend({name:"v-img",directives:{intersect:n["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(a["a"])(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,i){if(!h||i||this.eager){if(this.normalisedSrc.lazySrc){var a=new Image;a.src=this.normalisedSrc.lazySrc,this.pollForSize(a,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){Object(u["c"])("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,this.hasError=!1,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),e.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,a=function a(){var n=t.naturalHeight,s=t.naturalWidth;n||s?(e.naturalWidth=s,e.calculatedAspectRatio=s/n):t.complete||!e.isLoading||e.hasError||null==i||setTimeout(a,i)};a()},genContent:function(){var t=c.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=c.options.render.call(this,t),i=Object(d["a"])(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:h?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},b611:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"background-color":"white"}},[a("v-container",{staticClass:"hero-container white--text",attrs:{fluid:""}},[a("v-container",{staticClass:"new-container"},[a("v-row",{attrs:{dense:"",align:"center"}},[a("v-col",{staticClass:"center-horizontal",attrs:{cols:"12"}},[a("h1",{staticClass:"font-weight-bold mb-5 text-center",class:{"text-h1":t.$vuetify.breakpoint.xs,"text-h1":t.$vuetify.breakpoint.sm,"text-large":t.$vuetify.breakpoint.mdAndUp}},[t._v(" "+t._s(t.data.main_description)+" ")]),a("p",{staticClass:"mb-10",class:{"text-h4":t.$vuetify.breakpoint.xs,"text-h3":t.$vuetify.breakpoint.sm,"text-h3":t.$vuetify.breakpoint.mdAndUp}},[t._v(" "+t._s(t.data.secondary_description)+" ")]),a("v-btn",{staticClass:"font-weight-medium text-none",class:{"text-subtitle-1":t.$vuetify.breakpoint.xs,"text-h6":t.$vuetify.breakpoint.sm,"text-h5":t.$vuetify.breakpoint.mdAndUp},attrs:{rounded:"",color:"white","x-large":"",to:"/register",outlined:""}},[t._v("가입하기!")])],1),a("v-col",{staticClass:"center-horizontal mt-5",attrs:{cols:"12"}},[a("v-btn",{attrs:{color:"white",text:""},on:{click:function(e){return t.scrollto("success-section","mycourses-section")}}},[a("v-icon",{attrs:{size:"40",color:"white"}},[t._v("mdi-chevron-triple-down")])],1)],1)],1)],1)],1),a("v-container",{staticClass:"new-container",class:{"mb-0":t.$vuetify.breakpoint.smAndDown,"mt-0":t.$vuetify.breakpoint.smAndDown,"pb-5":t.$vuetify.breakpoint.mdAndUp,"pt-5":t.$vuetify.breakpoint.mdAndUp},attrs:{id:"success-section"}},[a("v-row",{staticClass:"mt-10 mb-10",class:{"mb-1":t.$vuetify.breakpoint.smAndDown,"mt-1":t.$vuetify.breakpoint.smAndDown}},[a("v-col",{staticClass:"center-vertical",class:{"center-horizontal":t.$vuetify.breakpoint.smAndDown,"pr-3":t.$vuetify.breakpoint.smAndDown,"pr-16":t.$vuetify.breakpoint.mdAndUp},attrs:{md:"6",sm:"12"}},[a("h2",{staticClass:"mb-10 mt-10 font-weight-bold",class:{"text-h3":t.$vuetify.breakpoint.smAndDown,"text-center":t.$vuetify.breakpoint.smAndDown,"text-h2":t.$vuetify.breakpoint.md,"text-large":t.$vuetify.breakpoint.lgAndUp}},[t._v(" [고쳐야함] 자녀를 끝까지 책임져줄수 있는 최상위급 과외 플랫폼 ")]),a("p",{staticClass:"mb-5 mt-5 font-weight-light",class:{"text-subtitle-1":t.$vuetify.breakpoint.smAndDown,"text-center":t.$vuetify.breakpoint.smAndDown,"text-h3":t.$vuetify.breakpoint.mdAndUp}},[t._v(" Find great instructors. Enrich your knowlage. Take your future to the next level. ")]),a("v-btn",{staticClass:"white--text mb-10 text-h4",class:{"text-subtitle-1":t.$vuetify.breakpoint.smAndDown,"text-center":t.$vuetify.breakpoint.smAndDown},attrs:{"x-large":"",width:"200",height:"80",to:"/register",color:"primary",outlined:""}},[t._v(" Join now ")])],1),t.$vuetify.breakpoint.mdAndUp?a("v-col",{attrs:{md:"6"}},[a("v-img",{staticClass:"rounded-img",attrs:{height:"500",src:i("9d99")}})],1):t._e()],1)],1),a("v-container",{staticClass:"goals-section pt-10 pb-10",attrs:{fluid:""}},[a("v-container",{staticClass:"new-container"},[a("v-row",{staticClass:"mt-3",class:{"mb-5":t.$vuetify.breakpoint.xs},attrs:{justify:"center",align:"center"}},[a("v-col",[a("h2",{staticClass:"text-center font-weight-bold",class:{"text-h3":t.$vuetify.breakpoint.smAndDown,"text-large":t.$vuetify.breakpoint.mdAndUp}},[t._v(" A great place to learn ")])])],1),a("v-row",[a("v-col",{attrs:{md:"3",sm:"6",cols:"12"}},[a("v-card",{staticClass:"text-center pa-5",attrs:{color:"rgb(245, 245, 245)",elevation:"0"}},[a("v-icon",{staticClass:"mb-8",attrs:{size:"60",color:"primary"}},[t._v("mdi-note-edit")]),a("h3",{staticClass:"mb-3 text-h4 font-weight-light"},[t._v(" Take your quizes online and know your results immediately. ")])],1)],1),a("v-col",{attrs:{md:"3",sm:"6",cols:"12"}},[a("v-card",{staticClass:"text-center pa-5",attrs:{color:"rgb(245, 245, 245)",elevation:"0"}},[a("v-icon",{staticClass:"mb-8",attrs:{size:"60",color:"primary"}},[t._v("mdi-youtube")]),a("h3",{staticClass:"mb-3 text-h4 font-weight-light"},[t._v(" Watch youtube videos and learn from the best. ")])],1)],1),a("v-col",{attrs:{md:"3",sm:"6",cols:"12"}},[a("v-card",{staticClass:"text-center pa-5",attrs:{color:"rgb(245, 245, 245)",elevation:"0"}},[a("v-icon",{staticClass:"mb-8",attrs:{size:"60",color:"primary"}},[t._v("mdi-account-question")]),a("h3",{staticClass:"mb-3 text-h4 font-weight-light"},[t._v(" Ask questions and have answers from your instructors. ")])],1)],1),a("v-col",{attrs:{md:"3",sm:"6",cols:"12"}},[a("v-card",{staticClass:"text-center pa-5",attrs:{color:"rgb(245, 245, 245)",elevation:"0"}},[a("v-icon",{staticClass:"mb-8",attrs:{size:"60",color:"primary"}},[t._v("mdi-lightbulb")]),a("h3",{staticClass:"mb-3 text-h4 font-weight-light"},[t._v("Explore different ways to learn")])],1)],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"auto"}},[a("v-btn",{staticClass:"white--text text-h4",class:{"text-subtitle-1":t.$vuetify.breakpoint.smAndDown,"text-center":t.$vuetify.breakpoint.smAndDown},attrs:{"x-large":"",width:"200",height:"80",to:"/register",color:"primary",outlined:""}},[t._v(" Start now ")])],1)],1)],1)],1)],1)},n=[],s=i("53ec"),r={name:"Home",methods:{scrollto:function(t,e){var i=document.body.getBoundingClientRect().top,a=document.getElementById(t);null==a&&(a=document.getElementById(e));var n=70,s=a.getBoundingClientRect().top,r=s-i-n;window.scrollTo({top:r,behavior:"smooth"})}},beforeRouteEnter:function(t,e,i){var a=JSON.parse(localStorage.getItem("userData"));null==a?i():i("/feed")},computed:{},data:function(){return{data:s["a"].home}}},o=r,c=(i("294a"),i("2877")),l=i("6544"),d=i.n(l),u=i("8336"),h=i("b0af"),m=i("62ad"),g=i("a523"),p=i("132d"),v=i("adda"),f=i("0fd9"),b=Object(c["a"])(o,a,n,!1,null,"eb95c60a",null);e["default"]=b.exports;d()(b,{VBtn:u["a"],VCard:h["a"],VCol:m["a"],VContainer:g["a"],VIcon:p["a"],VImg:v["a"],VRow:f["a"]})}}]);
//# sourceMappingURL=chunk-6b03bc0f.a30e9e2c.js.map