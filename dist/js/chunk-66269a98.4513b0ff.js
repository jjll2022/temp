(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66269a98"],{"0481":function(t,e,i){"use strict";var s=i("23e7"),a=i("a2bf"),r=i("7b0b"),n=i("07fa"),o=i("5926"),c=i("65f0");s({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=r(this),i=n(e),s=c(e,0);return s.length=a(s,e,e,i,0,void 0===t?1:o(t)),s}})},"294a":function(t,e,i){"use strict";i("a39a")},"297c":function(t,e,i){"use strict";i("a9e3");var s=i("2b0e"),a=i("37c6");e["a"]=s["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(a["a"],{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"36a7":function(t,e,i){},4069:function(t,e,i){var s=i("44d2");s("flat")},"53ec":function(t,e,i){"use strict";var s={home:{main_description:"IVY 출신 최상위 유학 과외만 제공합니다.",secondary_description:"지금 바로 가입하세요!"},faq:[{title:"매칭 된 선생님과는 어떻게 수업을 진행하나요?",value:"Hello World",category:"수업 방식"},{title:"과외비는 어떤 주기로 정산 받나요?",value:"No money fo you",category:"선생님"},{title:"학생이 수업에 들어오질 않았어요.. :(",value:"Yo still get paid. no worries",category:"선생님"},{title:"결제 후 바로 수업 진행이 가능한가요?",value:"No mang, yo gotta wait a year",category:"결제/환불"},{title:"아이패드 안주나요?",value:"Give us some time",category:"기타"}]};e["a"]=s},"615b":function(t,e,i){},"8a79":function(t,e,i){"use strict";var s=i("23e7"),a=i("e330"),r=i("06cf").f,n=i("50c4"),o=i("577e"),c=i("5a34"),l=i("1d80"),d=i("ab13"),h=i("c430"),u=a("".endsWith),m=a("".slice),v=Math.min,g=d("endsWith"),p=!h&&!g&&!!function(){var t=r(String.prototype,"endsWith");return t&&!t.writable}();s({target:"String",proto:!0,forced:!p&&!g},{endsWith:function(t){var e=o(l(this));c(t);var i=arguments.length>1?arguments[1]:void 0,s=e.length,a=void 0===i?s:v(n(i),s),r=o(t);return u?u(e,r,a):m(e,a-r.length,a)===r}})},"8efc":function(t,e,i){},"9d99":function(t,e,i){t.exports=i.p+"img/teacher.c8fd784a.svg"},a2bf:function(t,e,i){"use strict";var s=i("da84"),a=i("e8b5"),r=i("07fa"),n=i("0366"),o=s.TypeError,c=function(t,e,i,s,l,d,h,u){var m,v,g=l,p=0,f=!!h&&n(h,u);while(p<s){if(p in i){if(m=f?f(i[p],p,e):i[p],d>0&&a(m))v=r(m),g=c(t,e,m,v,g,d-1)-1;else{if(g>=9007199254740991)throw o("Exceed the acceptable array length");t[g]=m}g++}p++}return g};t.exports=c},a39a:function(t,e,i){},adda:function(t,e,i){"use strict";var s=i("53ca"),a=(i("a9e3"),i("a15b"),i("8a79"),i("2ca0"),i("8efc"),i("90a2")),r=(i("36a7"),i("24b2")),n=i("58df"),o=Object(n["a"])(r["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=o,l=i("7560"),d=i("d9f7"),h=i("d9bd"),u="undefined"!==typeof window&&"IntersectionObserver"in window;e["a"]=Object(n["a"])(c,l["a"]).extend({name:"v-img",directives:{intersect:a["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(s["a"])(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,i){if(!u||i||this.eager){if(this.normalisedSrc.lazySrc){var s=new Image;s.src=this.normalisedSrc.lazySrc,this.pollForSize(s,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){Object(h["c"])("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,this.hasError=!1,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),e.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,s=function s(){var a=t.naturalHeight,r=t.naturalWidth;a||r?(e.naturalWidth=r,e.calculatedAspectRatio=r/a):t.complete||!e.isLoading||e.hasError||null==i||setTimeout(s,i)};s()},genContent:function(){var t=c.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=c.options.render.call(this,t),i=Object(d["a"])(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:u?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},b0af:function(t,e,i){"use strict";var s=i("5530"),a=(i("a9e3"),i("0481"),i("4069"),i("615b"),i("10d2")),r=i("297c"),n=i("1c87"),o=i("58df");e["a"]=Object(o["a"])(r["a"],n["a"],a["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({"v-card":!0},n["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},a["a"].options.computed.classes.call(this))},styles:function(){var t=Object(s["a"])({},a["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=r["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),i=e.tag,s=e.data;return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(i,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},b611:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{"background-color":"white"}},[s("v-container",{staticClass:"hero-container white--text",attrs:{fluid:""}},[s("v-container",{staticClass:"new-container"},[s("v-row",{attrs:{dense:"",align:"center"}},[s("v-col",{staticClass:"center-horizontal",attrs:{cols:"12"}},[s("h1",{staticClass:"font-weight-bold mb-5 text-center",class:{"text-h1":t.$vuetify.breakpoint.xs,"text-h1":t.$vuetify.breakpoint.sm,"text-large":t.$vuetify.breakpoint.mdAndUp}},[t._v(" "+t._s(t.data.main_description)+" ")]),s("p",{staticClass:"mb-10",class:{"text-h4":t.$vuetify.breakpoint.xs,"text-h3":t.$vuetify.breakpoint.sm,"text-h3":t.$vuetify.breakpoint.mdAndUp}},[t._v(" "+t._s(t.data.secondary_description)+" ")]),s("v-btn",{staticClass:"font-weight-medium text-none",class:{"text-subtitle-1":t.$vuetify.breakpoint.xs,"text-h6":t.$vuetify.breakpoint.sm,"text-h5":t.$vuetify.breakpoint.mdAndUp},attrs:{rounded:"",color:"white","x-large":"",to:"/register",outlined:""}},[t._v("가입하기!")])],1),s("v-col",{staticClass:"center-horizontal mt-5",attrs:{cols:"12"}},[s("v-btn",{attrs:{color:"white",text:""},on:{click:function(e){return t.scrollto("success-section","mycourses-section")}}},[s("v-icon",{attrs:{size:"40",color:"white"}},[t._v("mdi-chevron-triple-down")])],1)],1)],1)],1)],1),s("v-container",{staticClass:"new-container",class:{"mb-0":t.$vuetify.breakpoint.smAndDown,"mt-0":t.$vuetify.breakpoint.smAndDown,"pb-5":t.$vuetify.breakpoint.mdAndUp,"pt-5":t.$vuetify.breakpoint.mdAndUp},attrs:{id:"success-section"}},[s("v-row",{staticClass:"mt-10 mb-10",class:{"mb-1":t.$vuetify.breakpoint.smAndDown,"mt-1":t.$vuetify.breakpoint.smAndDown}},[s("v-col",{staticClass:"center-vertical",class:{"center-horizontal":t.$vuetify.breakpoint.smAndDown,"pr-3":t.$vuetify.breakpoint.smAndDown,"pr-16":t.$vuetify.breakpoint.mdAndUp},attrs:{md:"6",sm:"12"}},[s("h2",{staticClass:"mb-10 mt-10 font-weight-bold",class:{"text-h3":t.$vuetify.breakpoint.smAndDown,"text-center":t.$vuetify.breakpoint.smAndDown,"text-h2":t.$vuetify.breakpoint.md,"text-large":t.$vuetify.breakpoint.lgAndUp}},[t._v(" [고쳐야함] 자녀를 끝까지 책임져줄수 있는 최상위급 과외 플랫폼 ")]),s("p",{staticClass:"mb-5 mt-5 font-weight-light",class:{"text-subtitle-1":t.$vuetify.breakpoint.smAndDown,"text-center":t.$vuetify.breakpoint.smAndDown,"text-h3":t.$vuetify.breakpoint.mdAndUp}},[t._v(" Find great instructors. Enrich your knowlage. Take your future to the next level. ")]),s("v-btn",{staticClass:"white--text mb-10 text-h4",class:{"text-subtitle-1":t.$vuetify.breakpoint.smAndDown,"text-center":t.$vuetify.breakpoint.smAndDown},attrs:{"x-large":"",width:"200",height:"80",to:"/register",color:"primary",outlined:""}},[t._v(" Join now ")])],1),t.$vuetify.breakpoint.mdAndUp?s("v-col",{attrs:{md:"6"}},[s("v-img",{staticClass:"rounded-img",attrs:{height:"500",src:i("9d99")}})],1):t._e()],1)],1),s("v-container",{staticClass:"goals-section pt-10 pb-10",attrs:{fluid:""}},[s("v-container",{staticClass:"new-container"},[s("v-row",{staticClass:"mt-3",class:{"mb-5":t.$vuetify.breakpoint.xs},attrs:{justify:"center",align:"center"}},[s("v-col",[s("h2",{staticClass:"text-center font-weight-bold",class:{"text-h3":t.$vuetify.breakpoint.smAndDown,"text-large":t.$vuetify.breakpoint.mdAndUp}},[t._v(" A great place to learn ")])])],1),s("v-row",[s("v-col",{attrs:{md:"3",sm:"6",cols:"12"}},[s("v-card",{staticClass:"text-center pa-5",attrs:{color:"rgb(245, 245, 245)",elevation:"0"}},[s("v-icon",{staticClass:"mb-8",attrs:{size:"60",color:"primary"}},[t._v("mdi-note-edit")]),s("h3",{staticClass:"mb-3 text-h4 font-weight-light"},[t._v(" Take your quizes online and know your results immediately. ")])],1)],1),s("v-col",{attrs:{md:"3",sm:"6",cols:"12"}},[s("v-card",{staticClass:"text-center pa-5",attrs:{color:"rgb(245, 245, 245)",elevation:"0"}},[s("v-icon",{staticClass:"mb-8",attrs:{size:"60",color:"primary"}},[t._v("mdi-youtube")]),s("h3",{staticClass:"mb-3 text-h4 font-weight-light"},[t._v(" Watch youtube videos and learn from the best. ")])],1)],1),s("v-col",{attrs:{md:"3",sm:"6",cols:"12"}},[s("v-card",{staticClass:"text-center pa-5",attrs:{color:"rgb(245, 245, 245)",elevation:"0"}},[s("v-icon",{staticClass:"mb-8",attrs:{size:"60",color:"primary"}},[t._v("mdi-account-question")]),s("h3",{staticClass:"mb-3 text-h4 font-weight-light"},[t._v(" Ask questions and have answers from your instructors. ")])],1)],1),s("v-col",{attrs:{md:"3",sm:"6",cols:"12"}},[s("v-card",{staticClass:"text-center pa-5",attrs:{color:"rgb(245, 245, 245)",elevation:"0"}},[s("v-icon",{staticClass:"mb-8",attrs:{size:"60",color:"primary"}},[t._v("mdi-lightbulb")]),s("h3",{staticClass:"mb-3 text-h4 font-weight-light"},[t._v("Explore different ways to learn")])],1)],1)],1),s("v-row",{attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"auto"}},[s("v-btn",{staticClass:"white--text text-h4",class:{"text-subtitle-1":t.$vuetify.breakpoint.smAndDown,"text-center":t.$vuetify.breakpoint.smAndDown},attrs:{"x-large":"",width:"200",height:"80",to:"/register",color:"primary",outlined:""}},[t._v(" Start now ")])],1)],1)],1)],1)],1)},a=[],r=i("53ec"),n={name:"Home",methods:{scrollto:function(t,e){var i=document.body.getBoundingClientRect().top,s=document.getElementById(t);null==s&&(s=document.getElementById(e));var a=70,r=s.getBoundingClientRect().top,n=r-i-a;window.scrollTo({top:n,behavior:"smooth"})}},beforeRouteEnter:function(t,e,i){var s=JSON.parse(localStorage.getItem("userData"));null==s?i():i("/feed")},computed:{},data:function(){return{data:r["a"].home}}},o=n,c=(i("294a"),i("2877")),l=i("6544"),d=i.n(l),h=i("8336"),u=i("b0af"),m=i("62ad"),v=i("a523"),g=i("132d"),p=i("adda"),f=i("0fd9"),b=Object(c["a"])(o,s,a,!1,null,"eb95c60a",null);e["default"]=b.exports;d()(b,{VBtn:h["a"],VCard:u["a"],VCol:m["a"],VContainer:v["a"],VIcon:g["a"],VImg:p["a"],VRow:f["a"]})}}]);
//# sourceMappingURL=chunk-66269a98.4513b0ff.js.map