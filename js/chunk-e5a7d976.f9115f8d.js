(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e5a7d976"],{"0fd9":function(t,e,n){"use strict";var i=n("ade3"),a=n("5530"),s=(n("d3b7"),n("caad"),n("2532"),n("99af"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("3ca3"),n("ddb0"),n("159b"),n("4b85"),n("2b0e")),r=n("d9f7"),o=n("80d2"),c=["sm","md","lg","xl"],l=["start","end","center"];function u(t,e){return c.reduce((function(n,i){return n[t+Object(o["A"])(i)]=e(),n}),{})}var h=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},d=u("align",(function(){return{type:String,default:null,validator:h}})),f=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},p=u("justify",(function(){return{type:String,default:null,validator:f}})),v=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},g=u("alignContent",(function(){return{type:String,default:null,validator:v}})),m={align:Object.keys(d),justify:Object.keys(p),alignContent:Object.keys(g)},b={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,n){var i=b[t];if(null!=n){if(e){var a=e.replace(t,"");i+="-".concat(a)}return i+="-".concat(n),i.toLowerCase()}}var C=new Map;e["a"]=s["a"].extend({name:"v-row",functional:!0,props:Object(a["a"])(Object(a["a"])(Object(a["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h}},d),{},{justify:{type:String,default:null,validator:f}},p),{},{alignContent:{type:String,default:null,validator:v}},g),render:function(t,e){var n=e.props,a=e.data,s=e.children,o="";for(var c in n)o+=String(n[c]);var l=C.get(o);return l||function(){var t,e;for(e in l=[],m)m[e].forEach((function(t){var i=n[t],a=y(e,t,i);a&&l.push(a)}));l.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(i["a"])(t,"align-".concat(n.align),n.align),Object(i["a"])(t,"justify-".concat(n.justify),n.justify),Object(i["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),C.set(o,l)}(),t(n.tag,Object(r["a"])(a,{staticClass:"row",class:l}),s)}})},"132d":function(t,e,n){"use strict";var i,a=n("5530"),s=(n("c96a"),n("d3b7"),n("caad"),n("2532"),n("ac1f"),n("00b4"),n("a9e3"),n("498a"),n("7db0"),n("fb6a"),n("4804"),n("7e2b")),r=n("a9ad"),o=n("af2b"),c=n("7560"),l=n("80d2"),u=n("2b0e"),h=n("58df");function d(t){return["fas","far","fal","fab","fad","fak"].some((function(e){return t.includes(e)}))}function f(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(i||(i={}));var p=Object(h["a"])(s["a"],r["a"],o["a"],c["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(l["y"])(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(l["v"])(t).find((function(e){return t[e]}));return e&&i[e]||Object(l["g"])(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(a["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=Object(a["a"])(Object(a["a"])({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(t){t.class=Object(a["a"])(Object(a["a"])({},t.class),this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var n=[],i=this.getDefaultData(),a="material-icons",s=t.indexOf("-"),r=s<=-1;r?n.push(t):(a=t.slice(0,s),d(a)&&(a="")),i.class[a]=!0,i.class[t]=!r;var o=this.getSize();return o&&(i.style={fontSize:o}),this.applyColors(i),e(this.hasClickListener?"button":this.tag,i,n)},renderSvgIcon:function(t,e){var n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},i=this.getSize();return i&&(n.style={fontSize:i,height:i,width:i}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var n={class:{"v-icon__component":!0}},i=this.getSize();i&&(n.style={fontSize:i,height:i,width:i}),this.applyColors(n);var a=t.component;return n.props=t.props,n.nativeOn=n.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(a,n)])}},render:function(t){var e=this.getIcon();return"string"===typeof e?f(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=u["a"].extend({name:"v-icon",$_wrapperFor:p,functional:!0,render:function(t,e){var n=e.data,i=e.children,a="";return n.domProps&&(a=n.domProps.textContent||n.domProps.innerHTML||a,delete n.domProps.textContent,delete n.domProps.innerHTML),t(p,n,a?[a]:i)}})},3011:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"4"}},[n("h1",{staticClass:"display-3 font-weight-medium my-3 hidden-sm-and-down"},[t._v("Manage Users")]),n("h1",{staticClass:"display-2 font-weight-medium my-5 hidden-md-and-up"},[t._v("Manage Users")])])],1),n("v-simple-table",{attrs:{height:"75vh","fixed-header":""},scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[t._v("Name")]),n("th",{staticClass:"text-left"},[t._v("Role")])])]),n("tbody",t._l(t.users,(function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.firstName)+" "+t._s(e.lastName))]),n("td",["instructor"===e.type?n("v-switch",{attrs:{disabled:"",label:e.type,color:"green"},model:{value:t.switchOn,callback:function(e){t.switchOn=e},expression:"switchOn"}}):t._e(),"learner"===e.type?n("v-switch",{attrs:{label:e.type},on:{click:function(n){return t.updateUserRole(e.id)}}}):t._e()],1)])})),0)]},proxy:!0}])})],1)],1)},a=[],s=n("365c"),r={data:function(){return{switchOn:!0,switchOff:!0,users:[]}},methods:{fetchUsers:function(){var t=this;s["a"].fetchAllUsers().then((function(e){t.users=e.data}))},updateUserRole:function(t){var e=this;s["a"].updateUserRole(t).then((function(){e.fetchUsers()}))}},mounted:function(){this.fetchUsers()}},o=r,c=n("2877"),l=n("6544"),u=n.n(l),h=n("62ad"),d=n("a523"),f=n("0fd9"),p=n("5530"),v=(n("a9e3"),n("8b37"),n("80d2")),g=n("7560"),m=n("58df"),b=Object(m["a"])(g["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(p["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(v["g"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}}),y=n("15fd"),C=(n("0481"),n("4069"),n("ec29"),n("9d01"),n("fe09")),w=n("c37a"),S=n("c3f0"),j=n("0789"),O=n("490a"),x=["title"],k=C["a"].extend({name:"v-switch",directives:{Touch:S["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(p["a"])(Object(p["a"])({},w["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var t=this.attrs$,e=(t.title,Object(y["a"])(t,x));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(p["a"])(Object(p["a"])({},this.attrs),e)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(p["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(p["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(j["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(O["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===v["u"].left&&this.isActive||t.keyCode===v["u"].right&&!this.isActive)&&this.onChange()}}}),_=Object(c["a"])(o,i,a,!1,null,null,null);e["default"]=_.exports;u()(_,{VCol:h["a"],VContainer:d["a"],VRow:f["a"],VSimpleTable:b,VSwitch:k})},4804:function(t,e,n){},5311:function(t,e,n){"use strict";var i=n("5607"),a=n("2b0e");e["a"]=a["a"].extend({name:"rippleable",directives:{ripple:i["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}})},8547:function(t,e,n){"use strict";var i=n("2b0e"),a=n("80d2");e["a"]=i["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:a["j"]}}})},"8b37":function(t,e,n){},"9d01":function(t,e,n){},a523:function(t,e,n){"use strict";n("4de4"),n("d3b7"),n("b64b"),n("2ca0"),n("99af"),n("20f6"),n("4b85"),n("498a"),n("a15b");var i=n("2b0e");function a(t){return i["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,n){var i=n.props,a=n.data,s=n.children;a.staticClass="".concat(t," ").concat(a.staticClass||"").trim();var r=a.attrs;if(r){a.attrs={};var o=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(a.staticClass+=" ".concat(o.join(" ")))}return i.id&&(a.domProps=a.domProps||{},a.domProps.id=i.id),e(i.tag,a,s)}})}var s=n("d9f7");e["a"]=a("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,i=e.props,a=e.data,r=e.children,o=a.attrs;return o&&(a.attrs={},n=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e}))),i.id&&(a.domProps=a.domProps||{},a.domProps.id=i.id),t(i.tag,Object(s["a"])(a,{staticClass:"container",class:Array({"container--fluid":i.fluid}).concat(n||[])}),r)}})},c3f0:function(t,e,n){"use strict";n("d3b7"),n("159b");var i=n("80d2"),a=function(t){var e=t.touchstartX,n=t.touchendX,i=t.touchstartY,a=t.touchendY,s=.5,r=16;t.offsetX=n-e,t.offsetY=a-i,Math.abs(t.offsetY)<s*Math.abs(t.offsetX)&&(t.left&&n<e-r&&t.left(t),t.right&&n>e+r&&t.right(t)),Math.abs(t.offsetX)<s*Math.abs(t.offsetY)&&(t.up&&a<i-r&&t.up(t),t.down&&a>i+r&&t.down(t))};function s(t,e){var n=t.changedTouches[0];e.touchstartX=n.clientX,e.touchstartY=n.clientY,e.start&&e.start(Object.assign(t,e))}function r(t,e){var n=t.changedTouches[0];e.touchendX=n.clientX,e.touchendY=n.clientY,e.end&&e.end(Object.assign(t,e)),a(e)}function o(t,e){var n=t.changedTouches[0];e.touchmoveX=n.clientX,e.touchmoveY=n.clientY,e.move&&e.move(Object.assign(t,e))}function c(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return s(t,e)},touchend:function(t){return r(t,e)},touchmove:function(t){return o(t,e)}}}function l(t,e,n){var a=e.value,s=a.parent?t.parentElement:t,r=a.options||{passive:!0};if(s){var o=c(e.value);s._touchHandlers=Object(s._touchHandlers),s._touchHandlers[n.context._uid]=o,Object(i["v"])(o).forEach((function(t){s.addEventListener(t,o[t],r)}))}}function u(t,e,n){var a=e.value.parent?t.parentElement:t;if(a&&a._touchHandlers){var s=a._touchHandlers[n.context._uid];Object(i["v"])(s).forEach((function(t){a.removeEventListener(t,s[t])})),delete a._touchHandlers[n.context._uid]}}var h={inserted:l,unbind:u};e["a"]=h},ec29:function(t,e,n){},fe09:function(t,e,n){"use strict";n.d(e,"b",(function(){return o}));n("d3b7"),n("25f0"),n("4de4");var i=n("c37a"),a=n("5311"),s=n("8547"),r=n("58df");function o(t){t.preventDefault()}e["a"]=Object(r["a"])(i["a"],a["a"],s["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,n=this.internalValue;return this.isMultiple?!!Array.isArray(n)&&n.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,n):Boolean(n):this.valueComparator(n,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=i["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:o},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:o},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,n=this.internalValue;if(this.isMultiple){Array.isArray(n)||(n=[]);var i=n.length;n=n.filter((function(n){return!t.valueComparator(n,e)})),n.length===i&&n.push(e)}else n=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(n,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(n,e)?null:e:!n;this.validate(!0,n),this.internalValue=n,this.hasColor=n}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})}}]);
//# sourceMappingURL=chunk-e5a7d976.f9115f8d.js.map