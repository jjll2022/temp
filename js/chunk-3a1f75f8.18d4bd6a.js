(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a1f75f8"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},2909:function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var n=i("6b75");function s(t){if(Array.isArray(t))return Object(n["a"])(t)}i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630");function r(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var o=i("06c5");function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return s(t)||r(t)||Object(o["a"])(t)||a()}},"2b19":function(t,e,i){var n=i("23e7"),s=i("129f");n({target:"Object",stat:!0},{is:s})},"497c":function(t,e,i){"use strict";i("ce10")},"4bd4":function(t,e,i){"use strict";var n=i("5530"),s=(i("caad"),i("2532"),i("07ac"),i("4de4"),i("d3b7"),i("159b"),i("7db0"),i("58df")),r=i("7e2b"),o=i("3206");e["a"]=Object(s["a"])(r["a"],Object(o["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",(function(i){e.$set(e.errorBag,t._uid,i)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=i(t)))})):n.valid=i(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var i=this.watchers.find((function(t){return t._uid===e._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(n["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"4ff9":function(t,e,i){},8654:function(t,e,i){"use strict";var n=i("15fd"),s=i("2909"),r=i("5530"),o=(i("a9e3"),i("0481"),i("4069"),i("d3b7"),i("25f0"),i("caad"),i("2b19"),i("4ff9"),i("c37a")),a=(i("99af"),i("e9b1"),i("7560")),l=i("58df"),u=Object(l["a"])(a["a"]).extend({name:"v-counter",functional:!0,props:{value:{type:[Number,String],default:""},max:[Number,String]},render:function(t,e){var i=e.props,n=parseInt(i.max,10),s=parseInt(i.value,10),o=n?"".concat(s," / ").concat(n):String(i.value),l=n&&s>n;return t("div",{staticClass:"v-counter",class:Object(r["a"])({"error--text":l},Object(a["b"])(e))},o)}}),c=u,d=i("ba87"),h=i("90a2"),f=i("d9bd"),p=i("2b0e");function v(t){return p["a"].extend({name:"intersectable",data:function(){return{isIntersecting:!1}},mounted:function(){h["a"].inserted(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},destroyed:function(){h["a"].unbind(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},methods:{onObserve:function(e,i,n){if(this.isIntersecting=n,n)for(var s=0,r=t.onVisible.length;s<r;s++){var o=this[t.onVisible[s]];"function"!==typeof o?Object(f["c"])(t.onVisible[s]+" method is not available on the instance but referenced in intersectable mixin options"):o()}}}})}var b=i("297c"),m=i("38cb"),g=i("dc22"),x=i("5607"),$=i("dd89"),w=i("80d2"),y=["title"],V=Object(l["a"])(o["a"],v({onVisible:["onResize","tryAutofocus"]}),b["a"]),S=["color","file","time","date","datetime-local","week","month"];e["a"]=V.extend().extend({name:"v-text-field",directives:{resize:g["a"],ripple:x["a"]},inheritAttrs:!1,props:{appendOuterIcon:String,autofocus:Boolean,clearable:Boolean,clearIcon:{type:String,default:"$clear"},counter:[Boolean,Number,String],counterValue:Function,filled:Boolean,flat:Boolean,fullWidth:Boolean,label:String,outlined:Boolean,placeholder:String,prefix:String,prependInnerIcon:String,persistentPlaceholder:Boolean,reverse:Boolean,rounded:Boolean,shaped:Boolean,singleLine:Boolean,solo:Boolean,soloInverted:Boolean,suffix:String,type:{type:String,default:"text"}},data:function(){return{badInput:!1,labelWidth:0,prefixWidth:0,prependWidth:0,initialValue:null,isBooted:!1,isClearing:!1}},computed:{classes:function(){return Object(r["a"])(Object(r["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-text-field":!0,"v-text-field--full-width":this.fullWidth,"v-text-field--prefix":this.prefix,"v-text-field--single-line":this.isSingle,"v-text-field--solo":this.isSolo,"v-text-field--solo-inverted":this.soloInverted,"v-text-field--solo-flat":this.flat,"v-text-field--filled":this.filled,"v-text-field--is-booted":this.isBooted,"v-text-field--enclosed":this.isEnclosed,"v-text-field--reverse":this.reverse,"v-text-field--outlined":this.outlined,"v-text-field--placeholder":this.placeholder,"v-text-field--rounded":this.rounded,"v-text-field--shaped":this.shaped})},computedColor:function(){var t=m["a"].options.computed.computedColor.call(this);return this.soloInverted&&this.isFocused?this.color||"primary":t},computedCounterValue:function(){return"function"===typeof this.counterValue?this.counterValue(this.internalValue):Object(s["a"])((this.internalValue||"").toString()).length},hasCounter:function(){return!1!==this.counter&&null!=this.counter},hasDetails:function(){return o["a"].options.computed.hasDetails.call(this)||this.hasCounter},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("input",this.lazyValue)}},isDirty:function(){var t;return(null==(t=this.lazyValue)?void 0:t.toString().length)>0||this.badInput},isEnclosed:function(){return this.filled||this.isSolo||this.outlined},isLabelActive:function(){return this.isDirty||S.includes(this.type)},isSingle:function(){return this.isSolo||this.singleLine||this.fullWidth||this.filled&&!this.hasLabel},isSolo:function(){return this.solo||this.soloInverted},labelPosition:function(){var t=this.prefix&&!this.labelValue?this.prefixWidth:0;return this.labelValue&&this.prependWidth&&(t-=this.prependWidth),this.$vuetify.rtl===this.reverse?{left:t,right:"auto"}:{left:"auto",right:t}},showLabel:function(){return this.hasLabel&&!(this.isSingle&&this.labelValue)},labelValue:function(){return this.isFocused||this.isLabelActive||this.persistentPlaceholder}},watch:{outlined:"setLabelWidth",label:function(){this.$nextTick(this.setLabelWidth)},prefix:function(){this.$nextTick(this.setPrefixWidth)},isFocused:"updateValue",value:function(t){this.lazyValue=t}},created:function(){this.$attrs.hasOwnProperty("box")&&Object(f["a"])("box","filled",this),this.$attrs.hasOwnProperty("browser-autocomplete")&&Object(f["a"])("browser-autocomplete","autocomplete",this),this.shaped&&!(this.filled||this.outlined||this.isSolo)&&Object(f["c"])("shaped should be used with either filled or outlined",this)},mounted:function(){var t=this;this.$watch((function(){return t.labelValue}),this.setLabelWidth),this.autofocus&&this.tryAutofocus(),requestAnimationFrame((function(){t.isBooted=!0,requestAnimationFrame((function(){t.isIntersecting||t.onResize()}))}))},methods:{focus:function(){this.onFocus()},blur:function(t){var e=this;window.requestAnimationFrame((function(){e.$refs.input&&e.$refs.input.blur()}))},clearableCallback:function(){var t=this;this.$refs.input&&this.$refs.input.focus(),this.$nextTick((function(){return t.internalValue=null}))},genAppendSlot:function(){var t=[];return this.$slots["append-outer"]?t.push(this.$slots["append-outer"]):this.appendOuterIcon&&t.push(this.genIcon("appendOuter")),this.genSlot("append","outer",t)},genPrependInnerSlot:function(){var t=[];return this.$slots["prepend-inner"]?t.push(this.$slots["prepend-inner"]):this.prependInnerIcon&&t.push(this.genIcon("prependInner")),this.genSlot("prepend","inner",t)},genIconSlot:function(){var t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","inner",t)},genInputSlot:function(){var t=o["a"].options.methods.genInputSlot.call(this),e=this.genPrependInnerSlot();return e&&(t.children=t.children||[],t.children.unshift(e)),t},genClearIcon:function(){return this.clearable?this.isDirty?this.genSlot("append","inner",[this.genIcon("clear",this.clearableCallback)]):this.genSlot("append","inner",[this.$createElement("div")]):null},genCounter:function(){var t,e,i;if(!this.hasCounter)return null;var n=!0===this.counter?this.attrs$.maxlength:this.counter,s={dark:this.dark,light:this.light,max:n,value:this.computedCounterValue};return null!=(t=null==(e=(i=this.$scopedSlots).counter)?void 0:e.call(i,{props:s}))?t:this.$createElement(c,{props:s})},genControl:function(){return o["a"].options.methods.genControl.call(this)},genDefaultSlot:function(){return[this.genFieldset(),this.genTextFieldSlot(),this.genClearIcon(),this.genIconSlot(),this.genProgress()]},genFieldset:function(){return this.outlined?this.$createElement("fieldset",{attrs:{"aria-hidden":!0}},[this.genLegend()]):null},genLabel:function(){if(!this.showLabel)return null;var t={props:{absolute:!0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:!this.isSingle&&(this.isFocused||!!this.validationState),for:this.computedId,left:this.labelPosition.left,light:this.light,right:this.labelPosition.right,value:this.labelValue}};return this.$createElement(d["a"],t,this.$slots.label||this.label)},genLegend:function(){var t=this.singleLine||!this.labelValue&&!this.isDirty?0:this.labelWidth,e=this.$createElement("span",{domProps:{innerHTML:"&#8203;"},staticClass:"notranslate"});return this.$createElement("legend",{style:{width:this.isSingle?void 0:Object(w["g"])(t)}},[e])},genInput:function(){var t=Object.assign({},this.listeners$);delete t.change;var e=this.attrs$,i=(e.title,Object(n["a"])(e,y));return this.$createElement("input",{style:{},domProps:{value:"number"===this.type&&Object.is(this.lazyValue,-0)?"-0":this.lazyValue},attrs:Object(r["a"])(Object(r["a"])({},i),{},{autofocus:this.autofocus,disabled:this.isDisabled,id:this.computedId,placeholder:this.persistentPlaceholder||this.isFocused||!this.hasLabel?this.placeholder:void 0,readonly:this.isReadonly,type:this.type}),on:Object.assign(t,{blur:this.onBlur,input:this.onInput,focus:this.onFocus,keydown:this.onKeyDown}),ref:"input",directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]})},genMessages:function(){if(!this.showDetails)return null;var t=o["a"].options.methods.genMessages.call(this),e=this.genCounter();return this.$createElement("div",{staticClass:"v-text-field__details"},[t,e])},genTextFieldSlot:function(){return this.$createElement("div",{staticClass:"v-text-field__slot"},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,this.genInput(),this.suffix?this.genAffix("suffix"):null])},genAffix:function(t){return this.$createElement("div",{class:"v-text-field__".concat(t),ref:t},this[t])},onBlur:function(t){var e=this;this.isFocused=!1,t&&this.$nextTick((function(){return e.$emit("blur",t)}))},onClick:function(){this.isFocused||this.isDisabled||!this.$refs.input||this.$refs.input.focus()},onFocus:function(t){if(this.$refs.input){var e=Object($["a"])(this.$el);if(e)return e.activeElement!==this.$refs.input?this.$refs.input.focus():void(this.isFocused||(this.isFocused=!0,t&&this.$emit("focus",t)))}},onInput:function(t){var e=t.target;this.internalValue=e.value,this.badInput=e.validity&&e.validity.badInput},onKeyDown:function(t){t.keyCode===w["u"].enter&&this.lazyValue!==this.initialValue&&(this.initialValue=this.lazyValue,this.$emit("change",this.initialValue)),this.$emit("keydown",t)},onMouseDown:function(t){t.target!==this.$refs.input&&(t.preventDefault(),t.stopPropagation()),o["a"].options.methods.onMouseDown.call(this,t)},onMouseUp:function(t){this.hasMouseDown&&this.focus(),o["a"].options.methods.onMouseUp.call(this,t)},setLabelWidth:function(){this.outlined&&(this.labelWidth=this.$refs.label?Math.min(.75*this.$refs.label.scrollWidth+6,this.$el.offsetWidth-24):0)},setPrefixWidth:function(){this.$refs.prefix&&(this.prefixWidth=this.$refs.prefix.offsetWidth)},setPrependWidth:function(){this.outlined&&this.$refs["prepend-inner"]&&(this.prependWidth=this.$refs["prepend-inner"].offsetWidth)},tryAutofocus:function(){if(!this.autofocus||"undefined"===typeof document||!this.$refs.input)return!1;var t=Object($["a"])(this.$el);return!(!t||t.activeElement===this.$refs.input)&&(this.$refs.input.focus(),!0)},updateValue:function(t){this.hasColor=t,t?this.initialValue=this.lazyValue:this.initialValue!==this.lazyValue&&this.$emit("change",this.lazyValue)},onResize:function(){this.setLabelWidth(),this.setPrefixWidth(),this.setPrependWidth()}}})},ce10:function(t,e,i){},da0d:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"fill-height"},[n("v-row",{staticClass:"mt-1",attrs:{"no-gutters":"",justify:"center"}},[n("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"auto"}},[n("v-card",{attrs:{color:"white",elevation:"2"}},[n("v-form",{ref:"loginform",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-row",{staticClass:"text-h3 font-weight-medium",attrs:{"no-gutters":"",justify:"center",align:"center"}},[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("img",{staticClass:"mr-3",attrs:{src:i("da55"),height:"400"}})])],1),n("v-row",{staticClass:"px-5 text-h4",attrs:{"no-gutters":"",justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"9"}},[n("v-text-field",{attrs:{outlined:"",label:"Username",required:"",rules:[t.rules.required],dense:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),n("v-col",{attrs:{cols:"9"}},[n("v-text-field",{attrs:{outlined:"",label:"Password",required:"","append-icon":t.showPassword?"mdi-eye":"mdi-eye-off",rules:[t.rules.required],type:t.showPassword?"text":"password",dense:""},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),n("v-row",{staticClass:"px-5 mt-0 mb-10",attrs:{justify:"center",align:"center"}},[n("v-col",{staticClass:"text-center",attrs:{cols:"9"}},[n("v-btn",{staticClass:"text-h4",attrs:{width:"70%",rounded:"",outlined:"",color:"primary"},on:{click:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[t._v("Login")])],1)],1),n("v-row",{staticClass:"text-h3 font-weight-medium",attrs:{justify:"center",align:"center","no-gutters":""}},[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("v-card",{staticClass:"px-5 pt-5 pb-5 border ma-0",attrs:{color:"secondbackground",elevation:"0"}},[n("v-row",{staticClass:"mt-3",attrs:{"no-gutters":"",justify:"center"}},[n("v-col",{staticClass:"text-center text-body-2",attrs:{cols:"12"}},[t._v(" 아직 가입하지 않으셨나요?")]),n("v-col",{staticClass:"mt-4 mb-3",attrs:{cols:"9"}},[n("v-btn",{staticClass:"text-h4 text-none",attrs:{width:"70%",to:"/register",rounded:"",outlined:"",color:"primary"}},[t._v("회원가입")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)},s=[],r=i("1da1"),o=(i("96cf"),i("e9c4"),i("365c")),a={data:function(){return{valid:!0,showPassword:!1,password:"",username:"",rules:{required:function(t){return!!t||"Required."}},sendRequest:!1}},methods:{submitForm:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var i,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.$refs.loginform.validate()){e.next=2;break}return e.abrupt("return");case 2:return t.sendRequest=!0,e.next=5,o["a"].loginUser({username:t.username,password:t.password});case 5:i=e.sent,200===i.status?(n=i.data.token,s=i.data.data,localStorage.setItem("userToken",JSON.stringify(n)),localStorage.setItem("userData",JSON.stringify(s.user)),t.$store.state.snackbarMessage="Welcome to Our Website",t.$store.state.snackbar=!0,t.$store.state.snackbarColor="green darken-2",t.$store.state.currentUser=s.user,t.$router.push("/feed")):(t.$store.state.snackbarMessage="Wrong Username or Password",t.$store.state.snackbar=!0,t.$store.state.snackbarColor="red darken-2"),t.sendRequest=!1,t.$refs.loginform.reset();case 9:case"end":return e.stop()}}),e)})))()}}},l=a,u=(i("497c"),i("2877")),c=i("6544"),d=i.n(c),h=i("8336"),f=i("b0af"),p=i("62ad"),v=i("a523"),b=i("4bd4"),m=i("0fd9"),g=i("8654"),x=Object(u["a"])(l,n,s,!1,null,"419d5dda",null);e["default"]=x.exports;d()(x,{VBtn:h["a"],VCard:f["a"],VCol:p["a"],VContainer:v["a"],VForm:b["a"],VRow:m["a"],VTextField:g["a"]})},da55:function(t,e,i){t.exports=i.p+"img/IvyEd-cornell-color.834a74e7.png"},dc22:function(t,e,i){"use strict";function n(t,e,i){var n=e.value,s=e.options||{passive:!0};window.addEventListener("resize",n,s),t._onResize=Object(t._onResize),t._onResize[i.context._uid]={callback:n,options:s},e.modifiers&&e.modifiers.quiet||n()}function s(t,e,i){var n;if(null!=(n=t._onResize)&&n[i.context._uid]){var s=t._onResize[i.context._uid],r=s.callback,o=s.options;window.removeEventListener("resize",r,o),delete t._onResize[i.context._uid]}}var r={inserted:n,unbind:s};e["a"]=r},dd89:function(t,e,i){"use strict";function n(t){if("function"!==typeof t.getRootNode){while(t.parentNode)t=t.parentNode;return t!==document?null:document}var e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}i.d(e,"a",(function(){return n}))},e9b1:function(t,e,i){}}]);
//# sourceMappingURL=chunk-3a1f75f8.18d4bd6a.js.map