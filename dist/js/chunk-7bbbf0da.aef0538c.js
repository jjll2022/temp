(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7bbbf0da"],{"53ec":function(t,e,n){"use strict";var o={home:{main_description:"IVY 출신 최상위 유학 과외만 제공합니다.",secondary_description:"지금 바로 가입하세요!"},faq:[{title:"매칭 된 선생님과는 어떻게 수업을 진행하나요?",value:"Hello World",category:"수업 방식"},{title:"과외비는 어떤 주기로 정산 받나요?",value:"No money fo you",category:"선생님"},{title:"학생이 수업에 들어오질 않았어요.. :(",value:"Yo still get paid. no worries",category:"선생님"},{title:"결제 후 바로 수업 진행이 가능한가요?",value:"No mang, yo gotta wait a year",category:"결제/환불"},{title:"아이패드 안주나요?",value:"Give us some time",category:"기타"}]};e["a"]=o},6263:function(t,e,n){"use strict";n("a74d")},"744c":function(t,e,n){"use strict";(function(t){var o=n("7c76"),a={name:"VueFaqAccordion",components:{CollapseTransition:o["a"]},data:function(){return{activeTab:"",activeQuestionIndex:null,showAccordion:!0}},props:{items:{type:Array,required:!0},questionProperty:{type:String,default:"title"},answerProperty:{type:String,default:"value"},tabName:{type:String,default:"category"},activeColor:{type:String,default:"#D50000"},borderColor:{type:String,default:"#9E9E9E"},fontColor:{type:String,default:"#000000"},initialTab:{type:String,default:null},initialQuestionIndex:{type:Number,default:null}},computed:{categories:function(){var t=this,e=this.items.map((function(e){return e[t.tabName]})).filter((function(t,e,n){return n.indexOf(t)===e}));return this.activeTab=this.initialTab||e[0],this.activeQuestionIndex=this.initialQuestionIndex||null,e},categoryItems:function(){var t=this;return this.items.filter((function(e){return e[t.tabName]===t.activeTab}))},hasNavigation:function(){return!!this.categories[0]}},methods:{makeActive:function(t){this.activeQuestionIndex=this.activeQuestionIndex===t?null:t,this.$emit("itemSelect",{itemIndex:t})},generateButtonClasses:function(t){return["accordion__toggle-button",this.activeQuestionIndex===t?"accordion__toggle-button_active":null]},generateQuestionClasses:function(t){return["accordion__title",this.activeQuestionIndex===t?"accordion__title_active":null]},makeActiveCategory:function(t,e){var n=this;this.activeTab!==t&&(this.showAccordion=!1,this.activeTab=t,this.activeQuestionIndex=null,setTimeout((function(){n.$emit("categorySelect",{categoryIndex:e}),n.showAccordion=!0}),300))},generateCategoryClasses:function(t){return["faq__nav-item",this.activeTab===t?"faq__nav-item_active":null]}},mounted:function(){this.$refs.rootEl.style.setProperty("--active-color",this.activeColor),this.$refs.rootEl.style.setProperty("--border-color",this.borderColor),this.$refs.rootEl.style.setProperty("--font-color",this.fontColor)}};function i(t,e,n,o,a,i,r,s,c,l){"boolean"!==typeof r&&(c=s,s=r,r=!1);var d,u="function"===typeof n?n.options:n;if(t&&t.render&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0,a&&(u.functional=!0)),o&&(u._scopeId=o),i?(d=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=d):e&&(d=r?function(t){e.call(this,l(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,s(t))}),d)if(u.functional){var m=u.render;u.render=function(t,e){return d.call(e),m(t,e)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,d):[d]}return n}var r,s="undefined"!==typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function c(t){return function(t,e){return d(t,e)}}var l={};function d(t,e){var n=s?e.media||"default":t,o=l[n]||(l[n]={ids:new Set,styles:[]});if(!o.ids.has(t)){o.ids.add(t);var a=e.source;if(e.map&&(a+="\n/*# sourceURL="+e.map.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),o.element||(o.element=document.createElement("style"),o.element.type="text/css",e.media&&o.element.setAttribute("media",e.media),void 0===r&&(r=document.head||document.getElementsByTagName("head")[0]),r.appendChild(o.element)),"styleSheet"in o.element)o.styles.push(a),o.element.styleSheet.cssText=o.styles.filter(Boolean).join("\n");else{var i=o.ids.size-1,c=document.createTextNode(a),d=o.element.childNodes;d[i]&&o.element.removeChild(d[i]),d.length?o.element.insertBefore(c,d[i]):o.element.appendChild(c)}}}var u=a,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{ref:"rootEl",staticClass:"faq"},[n("div",{staticClass:"faq-wrapper"},[t.hasNavigation?n("nav",{staticClass:"faq__nav"},t._l(t.categories,(function(e,o){return n("div",{key:"category-"+o,class:t.generateCategoryClasses(e),domProps:{innerHTML:t._s(e)},on:{click:function(n){return t.makeActiveCategory(e,o)}}})})),0):t._e(),t._v(" "),n("transition",{attrs:{name:"accordion-fade-slide",mode:"out-in"}},[t.showAccordion?n("div",{staticClass:"accordion"},t._l(t.categoryItems,(function(e,o){return n("div",{key:"accordion-item-"+o,staticClass:"accordion__item"},[n("div",{class:t.generateQuestionClasses(o),on:{click:function(e){return t.makeActive(o)}}},[n("p",{staticClass:"accordion__title-text",domProps:{innerHTML:t._s(e[t.questionProperty])}}),t._v(" "),n("button",{class:t.generateButtonClasses(o)})]),t._v(" "),n("collapse-transition",[o===t.activeQuestionIndex?n("div",[n("div",{staticClass:"accordion__value"},[t._t("default",[n("div",{domProps:{innerHTML:t._s(e[t.answerProperty])}})],null,e)],2)]):t._e()])],1)})),0):t._e()])],1)])},p=[];m._withStripped=!0;var f=function(t){t&&t("data-v-5d9392b3_0",{source:'*[data-v-5d9392b3] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nbutton[data-v-5d9392b3] {\n  border: none;\n  background: none;\n  outline: none;\n}\n.faq[data-v-5d9392b3] {\n  width: 100%;\n  padding: 0 10px;\n}\n.faq-wrapper[data-v-5d9392b3] {\n  max-width: 825px;\n}\n.faq__title[data-v-5d9392b3] {\n  text-align: center;\n  margin-bottom: 25px;\n}\n.faq__nav[data-v-5d9392b3] {\n  display: flex;\n  justify-content: space-between;\n  border: 2px solid var(--border-color);\n  border-radius: 5px;\n}\n.faq__nav-item[data-v-5d9392b3] {\n  height: 60px;\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-right: 2px solid var(--border-color);\n  cursor: pointer;\n  font-weight: 600;\n  transition: all 0.3s;\n  text-align: center;\n  user-select: none;\n  color: var(--font-color);\n}\n.faq__nav-item_active[data-v-5d9392b3] {\n  color: var(--active-color);\n}\n.faq__nav-item[data-v-5d9392b3]:hover {\n  color: var(--active-color);\n}\n.faq__nav-item[data-v-5d9392b3]:last-child {\n  border-right: none;\n}\n.faq__accordion[data-v-5d9392b3] {\n  min-height: 250px;\n}\n.accordion-fade-slide-enter-active[data-v-5d9392b3], .accordion-fade-slide-leave-active[data-v-5d9392b3] {\n  transition: all 0.3s;\n}\n.accordion-fade-slide-enter[data-v-5d9392b3] {\n  transform: translateY(-25px);\n  opacity: 0;\n}\n.accordion-fade-slide-leave-to[data-v-5d9392b3] {\n  transform: translateY(25px);\n  opacity: 0;\n}\n.accordion[data-v-5d9392b3] {\n  border: 2px solid var(--border-color);\n  border-radius: 5px;\n  margin-top: 15px;\n}\n.accordion__item[data-v-5d9392b3] {\n  border-bottom: 2px solid var(--border-color);\n}\n.accordion__item[data-v-5d9392b3]:last-child {\n  border-bottom: none;\n}\n.accordion__title[data-v-5d9392b3] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 25px;\n  cursor: pointer;\n  transition: all 0.3s;\n  color: var(--font-color);\n}\n.accordion__title_active[data-v-5d9392b3] {\n  color: var(--active-color);\n}\n.accordion__title[data-v-5d9392b3]:hover {\n  color: var(--active-color);\n}\n.accordion__title:hover .accordion__toggle-button[data-v-5d9392b3]::before, .accordion__title:hover .accordion__toggle-button[data-v-5d9392b3]::after {\n  background: var(--active-color);\n}\n.accordion__title-text[data-v-5d9392b3] {\n  margin-right: 10px;\n}\n.accordion__value[data-v-5d9392b3] {\n  padding: 0 25px 25px 25px;\n  text-align: left;\n  color: var(--font-color);\n}\n.accordion__toggle-button[data-v-5d9392b3] {\n  position: relative;\n  width: 16px;\n  height: 16px;\n  transition: all 0.3s;\n  transform-origin: 50% 50%;\n  padding-left: 16px;\n  cursor: pointer;\n}\n.accordion__toggle-button[data-v-5d9392b3]::before, .accordion__toggle-button[data-v-5d9392b3]::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  transition: all 0.3s;\n  background: black;\n}\n.accordion__toggle-button[data-v-5d9392b3]::before {\n  transform: rotate(90deg);\n}\n.accordion__toggle-button_active[data-v-5d9392b3] {\n  transform: rotate(45deg);\n}\n.accordion__toggle-button_active[data-v-5d9392b3]::before, .accordion__toggle-button_active[data-v-5d9392b3]::after {\n  background: var(--active-color);\n}\n\n/*# sourceMappingURL=vue-faq-accordion.vue.map */',map:{version:3,sources:["/Users/gerasimvol/Documents/Projects/Own/vue-faq-accordion/src/vue-faq-accordion.vue","vue-faq-accordion.vue"],names:[],mappings:"AAqMA;EACA,sBAAA;EACA,SAAA;EACA,UAAA;ACpMA;ADuMA;EACA,YAAA;EACA,gBAAA;EACA,aAAA;ACpMA;ADuMA;EACA,WAAA;EACA,eAAA;ACpMA;ADsMA;EACA,gBAAA;ACpMA;ADuMA;EACA,kBAAA;EACA,mBAAA;ACrMA;ADwMA;EACA,aAAA;EACA,8BAAA;EACA,qCAAA;EACA,kBAAA;ACtMA;ADyMA;EACA,YAAA;EACA,OAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,2CAAA;EACA,eAAA;EACA,gBAAA;EACA,oBAAA;EACA,kBAAA;EACA,iBAAA;EACA,wBAAA;ACvMA;ADyMA;EACA,0BAAA;ACvMA;AD0MA;EACA,0BAAA;ACxMA;AD2MA;EACA,kBAAA;ACzMA;AD6MA;EACA,iBAAA;AC3MA;ADgNA;EAEA,oBAAA;AC9MA;ADgNA;EACA,4BAAA;EACA,UAAA;AC9MA;ADgNA;EACA,2BAAA;EACA,UAAA;AC9MA;ADkNA;EACA,qCAAA;EACA,kBAAA;EACA,gBAAA;AC/MA;ADiNA;EACA,4CAAA;AC/MA;ADiNA;EACA,mBAAA;AC/MA;ADmNA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,aAAA;EACA,eAAA;EACA,oBAAA;EACA,wBAAA;ACjNA;ADmNA;EACA,0BAAA;ACjNA;ADoNA;EACA,0BAAA;AClNA;ADqNA;EAEA,+BAAA;ACpNA;ADyNA;EACA,kBAAA;ACvNA;AD2NA;EACA,yBAAA;EACA,gBAAA;EACA,wBAAA;ACzNA;AD4NA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,oBAAA;EACA,yBAAA;EACA,kBAAA;EACA,eAAA;AC1NA;AD4NA;EAEA,WAAA;EACA,kBAAA;EACA,OAAA;EACA,WAAA;EACA,WAAA;EACA,oBAAA;EACA,iBAAA;AC3NA;AD8NA;EACA,wBAAA;AC5NA;AD+NA;EACA,wBAAA;AC7NA;AD+NA;EAEA,+BAAA;AC9NA;;AAEA,gDAAgD",file:"vue-faq-accordion.vue",sourcesContent:['<template>\n<section class="faq" ref="rootEl">\n  <div class="faq-wrapper">\n    <nav v-if="hasNavigation" class="faq__nav">\n      <div\n        v-for="(category, i) in categories"\n        :key="`category-${i}`"\n        v-html="category"\n        :class="generateCategoryClasses(category)"\n        @click="makeActiveCategory(category, i)"\n      ></div>\n    </nav>\n\n    <transition name="accordion-fade-slide" mode="out-in">\n      <div v-if="showAccordion" class="accordion">\n        <div\n          class="accordion__item"\n          v-for="(item, i) in categoryItems"\n          :key="`accordion-item-${i}`"\n        >\n          <div :class="generateQuestionClasses(i)" @click="makeActive(i)">\n            <p class="accordion__title-text" v-html="item[questionProperty]"></p>\n            <button :class="generateButtonClasses(i)"></button>\n          </div>\n            <collapse-transition>\n              <div v-if="i === activeQuestionIndex">\n                  <div class="accordion__value">\n                    <slot v-bind="item">\n                      <div v-html="item[answerProperty]"></div>\n                    </slot>\n                  </div>\n              </div>\n            </collapse-transition>\n        </div>\n      </div>\n    </transition>\n  </div>\n</section>\n</template>\n\n<script>\n  import { CollapseTransition } from \'vue2-transitions\'\n\n  export default {\n    name: \'VueFaqAccordion\',\n\n    components: {\n      CollapseTransition\n    },\n\n    data () {\n      return {\n        activeTab: \'\',\n        activeQuestionIndex: null,\n        showAccordion: true\n      }\n    },\n\n    props: {\n      /**\n       * Array of items\n       * Object style {questionProperty: string, answerProperty: string, tabName: string}\n       * You can change object keys names using other props (questionProperty, answerProperty, tabName)\n       */\n      items: {\n        type: Array,\n        required: true\n      },\n      /**\n       * Key name of object in items array for specifying title of question\n       */\n      questionProperty: {\n        type: String,\n        default: \'title\'\n      },\n      /**\n       * Key name of object in items array for specifying content text of open question\n       */\n      answerProperty: {\n        type: String,\n        default: \'value\'\n      },\n      /**\n       * Key name of object in items array for specifying navigation tab name\n       */\n      tabName: {\n        type: String,\n        default: \'category\'\n      },\n      /**\n       * Color for hover and active tab/question\n       * possible values: \'red\', \'#F00\', \'rgb(255, 0, 0)\'\n       */\n      activeColor: {\n        type: String,\n        default: \'#D50000\'\n      },\n      /**\n       * Color for borders\n       */\n      borderColor: {\n        type: String,\n        default: \'#9E9E9E\'\n      },\n      /**\n       * Color for fonts\n       */\n      fontColor: {\n        type: String,\n        default: \'#000000\'\n      },\n      /**\n       * Opened by default tabName (category)\n       */\n      initialTab: {\n        type: String,\n        default: null\n      },\n      /**\n       * Opened by default question\n       * All closed by default\n       */\n      initialQuestionIndex: {\n        type: Number,\n        default: null\n      }\n    },\n\n    computed: {\n      categories () {\n        const uniqueCategories = this.items\n          .map(item => item[this.tabName])\n          .filter((category, index, categories) => categories.indexOf(category) === index)\n        this.activeTab = this.initialTab || uniqueCategories[0]\n        this.activeQuestionIndex = this.initialQuestionIndex || null\n        return uniqueCategories\n      },\n      categoryItems () {\n        return this.items\n          .filter(item => item[this.tabName] === this.activeTab)\n      },\n      hasNavigation () {\n        return !!this.categories[0]\n      }\n    },\n\n    methods: {\n      makeActive (itemIndex) {\n        this.activeQuestionIndex = this.activeQuestionIndex === itemIndex ? null : itemIndex\n        this.$emit(\'itemSelect\', { itemIndex })\n      },\n      generateButtonClasses (buttonIndex) {\n        return [\n          \'accordion__toggle-button\',\n          this.activeQuestionIndex === buttonIndex\n            ? \'accordion__toggle-button_active\'\n            : null\n        ]\n      },\n      generateQuestionClasses (questionIndex) {\n        return [\n          \'accordion__title\',\n          this.activeQuestionIndex === questionIndex\n            ? \'accordion__title_active\'\n            : null\n        ]\n      },\n      makeActiveCategory (category, categoryIndex) {\n        if (this.activeTab === category) return\n\n        this.showAccordion = false\n        this.activeTab = category\n        this.activeQuestionIndex = null\n        setTimeout( () => {\n          this.$emit(\'categorySelect\', { categoryIndex })\n          this.showAccordion = true\n        }, 300 )\n      },\n      generateCategoryClasses (category) {\n        return [\n          \'faq__nav-item\',\n          this.activeTab === category\n            ? \'faq__nav-item_active\'\n            : null\n        ]\n      }\n    },\n\n    mounted () {\n      this.$refs.rootEl.style.setProperty(\'--active-color\', this.activeColor)\n      this.$refs.rootEl.style.setProperty(\'--border-color\', this.borderColor)\n      this.$refs.rootEl.style.setProperty(\'--font-color\', this.fontColor)\n    }\n  }\n<\/script>\n\n<style lang="scss" scoped>\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n\n  button {\n    border: none;\n    background: none;\n    outline: none;\n  }\n\n  .faq {\n    width: 100%;\n    padding: 0 10px;\n\n    &-wrapper {\n      max-width: 825px;\n    }\n\n    &__title {\n      text-align: center;\n      margin-bottom: 25px;\n    }\n\n    &__nav {\n      display: flex;\n      justify-content: space-between;\n      border: 2px solid var(--border-color);\n      border-radius: 5px;\n    }\n\n    &__nav-item {\n      height: 60px;\n      flex: 1;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      border-right: 2px solid var(--border-color);\n      cursor: pointer;\n      font-weight: 600;\n      transition: all 0.3s;\n      text-align: center;\n      user-select: none;\n      color: var(--font-color);\n\n      &_active {\n        color: var(--active-color);\n      }\n\n      &:hover {\n        color: var(--active-color);\n      }\n\n      &:last-child {\n        border-right: none;\n      }\n    }\n\n    &__accordion {\n      min-height: 250px;\n    }\n  }\n\n  .accordion-fade-slide {\n    &-enter-active,\n    &-leave-active {\n      transition: all 0.3s;\n    }\n    &-enter {\n      transform: translateY(-25px);\n      opacity: 0;\n    }\n    &-leave-to {\n      transform: translateY(25px);\n      opacity: 0;\n    }\n  }\n\n  .accordion {\n    border: 2px solid var(--border-color);\n    border-radius: 5px;\n    margin-top: 15px;\n\n    &__item {\n      border-bottom: 2px solid var(--border-color);\n\n      &:last-child {\n        border-bottom: none;\n      }\n    }\n\n    &__title {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      padding: 25px;\n      cursor: pointer;\n      transition: all 0.3s;\n      color: var(--font-color);\n\n      &_active {\n        color: var(--active-color);\n      }\n\n      &:hover {\n        color: var(--active-color);\n\n        .accordion__toggle-button {\n          &::before,\n          &::after {\n            background: var(--active-color);\n          }\n        }\n      }\n\n      &-text {\n        margin-right: 10px;\n      }\n    }\n\n    &__value {\n      padding: 0 25px 25px 25px;\n      text-align: left;\n      color: var(--font-color);\n    }\n\n    &__toggle-button {\n      position: relative;\n      width: 16px;\n      height: 16px;\n      transition: all 0.3s;\n      transform-origin: 50% 50%;\n      padding-left: 16px;\n      cursor: pointer;\n\n      &::before,\n      &::after {\n        content: \'\';\n        position: absolute;\n        left: 0;\n        width: 100%;\n        height: 2px;\n        transition: all 0.3s;\n        background: black;\n      }\n\n      &::before {\n        transform: rotate(90deg);\n      }\n\n      &_active {\n        transform: rotate(45deg);\n\n        &::before,\n        &::after {\n          background: var(--active-color);\n        }\n      }\n    }\n  }\n</style>\n','* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbutton {\n  border: none;\n  background: none;\n  outline: none;\n}\n\n.faq {\n  width: 100%;\n  padding: 0 10px;\n}\n.faq-wrapper {\n  max-width: 825px;\n}\n.faq__title {\n  text-align: center;\n  margin-bottom: 25px;\n}\n.faq__nav {\n  display: flex;\n  justify-content: space-between;\n  border: 2px solid var(--border-color);\n  border-radius: 5px;\n}\n.faq__nav-item {\n  height: 60px;\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-right: 2px solid var(--border-color);\n  cursor: pointer;\n  font-weight: 600;\n  transition: all 0.3s;\n  text-align: center;\n  user-select: none;\n  color: var(--font-color);\n}\n.faq__nav-item_active {\n  color: var(--active-color);\n}\n.faq__nav-item:hover {\n  color: var(--active-color);\n}\n.faq__nav-item:last-child {\n  border-right: none;\n}\n.faq__accordion {\n  min-height: 250px;\n}\n\n.accordion-fade-slide-enter-active, .accordion-fade-slide-leave-active {\n  transition: all 0.3s;\n}\n.accordion-fade-slide-enter {\n  transform: translateY(-25px);\n  opacity: 0;\n}\n.accordion-fade-slide-leave-to {\n  transform: translateY(25px);\n  opacity: 0;\n}\n\n.accordion {\n  border: 2px solid var(--border-color);\n  border-radius: 5px;\n  margin-top: 15px;\n}\n.accordion__item {\n  border-bottom: 2px solid var(--border-color);\n}\n.accordion__item:last-child {\n  border-bottom: none;\n}\n.accordion__title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 25px;\n  cursor: pointer;\n  transition: all 0.3s;\n  color: var(--font-color);\n}\n.accordion__title_active {\n  color: var(--active-color);\n}\n.accordion__title:hover {\n  color: var(--active-color);\n}\n.accordion__title:hover .accordion__toggle-button::before, .accordion__title:hover .accordion__toggle-button::after {\n  background: var(--active-color);\n}\n.accordion__title-text {\n  margin-right: 10px;\n}\n.accordion__value {\n  padding: 0 25px 25px 25px;\n  text-align: left;\n  color: var(--font-color);\n}\n.accordion__toggle-button {\n  position: relative;\n  width: 16px;\n  height: 16px;\n  transition: all 0.3s;\n  transform-origin: 50% 50%;\n  padding-left: 16px;\n  cursor: pointer;\n}\n.accordion__toggle-button::before, .accordion__toggle-button::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  transition: all 0.3s;\n  background: black;\n}\n.accordion__toggle-button::before {\n  transform: rotate(90deg);\n}\n.accordion__toggle-button_active {\n  transform: rotate(45deg);\n}\n.accordion__toggle-button_active::before, .accordion__toggle-button_active::after {\n  background: var(--active-color);\n}\n\n/*# sourceMappingURL=vue-faq-accordion.vue.map */']},media:void 0})},A="data-v-5d9392b3",v=void 0,g=!1,y=i({render:m,staticRenderFns:p},f,u,A,g,v,!1,c,void 0,void 0);function h(t){h.installed||(h.installed=!0,t.component("VueFaqAccordion",y))}var b={install:h},_=null;"undefined"!==typeof window?_=window.Vue:"undefined"!==typeof t&&(_=t.Vue),_&&_.use(b),e["a"]=y}).call(this,n("c8ba"))},"7c76":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));
/*!
 * vue2-transitions v0.3.0
 * (c) 2019-present cristij <joracristi@gmail.com>
 * Released under the MIT License.
 */
var o={inheritAttrs:!1,props:{duration:{type:[Number,Object],default:300},delay:{type:[Number,Object],default:0},group:Boolean,tag:{type:String,default:"span"},origin:{type:String,default:""},styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"ease-out"}}}},computed:{componentType:function(){return this.group?"transition-group":"transition"},hooks:function(){return Object.assign({beforeEnter:this.beforeEnter,afterEnter:this.cleanUpStyles,beforeLeave:this.beforeLeave,leave:this.leave,afterLeave:this.cleanUpStyles},this.$listeners)}},methods:{beforeEnter:function(t){var e=this.duration.enter?this.duration.enter:this.duration;t.style.animationDuration=e+"ms";var n=this.delay.enter?this.delay.enter:this.delay;t.style.animationDelay=n+"ms",this.setStyles(t)},cleanUpStyles:function(t){var e=this;Object.keys(this.styles).forEach((function(n){var o=e.styles[n];o&&(t.style[n]="")})),t.style.animationDuration="",t.style.animationDelay=""},beforeLeave:function(t){var e=this.duration.leave?this.duration.leave:this.duration;t.style.animationDuration=e+"ms";var n=this.delay.leave?this.delay.leave:this.delay;t.style.animationDelay=n+"ms",this.setStyles(t)},leave:function(t){this.setAbsolutePosition(t)},setStyles:function(t){var e=this;this.setTransformOrigin(t),Object.keys(this.styles).forEach((function(n){var o=e.styles[n];o&&(t.style[n]=o)}))},setAbsolutePosition:function(t){return this.group&&(t.style.position="absolute"),this},setTransformOrigin:function(t){return this.origin&&(t.style.transformOrigin=this.origin),this}}};(function(){if("undefined"!==typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),n=" @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } } .fadeIn { animation-name: fadeIn; } @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } } .fadeOut { animation-name: fadeOut; } .fade-move { transition: transform .3s ease-out; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n)),t.appendChild(e)}})();var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.componentType,t._g(t._b({tag:"component",attrs:{tag:t.tag,"enter-active-class":"fadeIn","move-class":"fade-move","leave-active-class":"fadeOut"}},"component",t.$attrs,!1),t.hooks),[t._t("default")],2)},staticRenderFns:[],name:"fade-transition",mixins:[o]};(function(){if("undefined"!==typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),n=".zoom-move { transition: transform .3s ease-out; } @keyframes zoomIn { from { opacity: 0; transform: scale3d(0.3, 0.3, 0.3); } 50% { opacity: 1; } } .zoomIn { animation-name: zoomIn; } @keyframes zoomOut { from { opacity: 1; } 50% { opacity: 0; transform: scale3d(0.3, 0.3, 0.3); } to { opacity: 0; } } .zoomOut { animation-name: zoomOut; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n)),t.appendChild(e)}})();var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.componentType,t._g(t._b({tag:"component",attrs:{tag:t.tag,"enter-active-class":"zoomIn","move-class":"zoom-move","leave-active-class":"zoomOut"}},"component",t.$attrs,!1),t.hooks),[t._t("default")],2)},staticRenderFns:[],name:"zoom-center-transition",mixins:[o]};(function(){if("undefined"!==typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),n=".zoom-move { transition: transform .3s ease-out; } @keyframes zoomInX { from { opacity: 0; transform: scaleX(0); } 50% { opacity: 1; } } .zoomInX { animation-name: zoomInX; } @keyframes zoomOutX { from { opacity: 1; } 50% { opacity: 0; transform: scaleX(0); } to { opacity: 0; } } .zoomOutX { animation-name: zoomOutX; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n)),t.appendChild(e)}})();var r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.componentType,t._g(t._b({tag:"component",attrs:{tag:t.tag,"enter-active-class":"zoomInX","move-class":"zoom-move","leave-active-class":"zoomOutX"}},"component",t.$attrs,!1),t.hooks),[t._t("default")],2)},staticRenderFns:[],name:"zoom-x-transition",props:{styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.55,0,.1,1)"}}}},mixins:[o]};(function(){if("undefined"!==typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),n=".zoom-move { transition: transform .3s ease-out; } @keyframes zoomInY { from { opacity: 0; transform: scaleY(0); } 50% { opacity: 1; tranform: scaleY(1); } } .zoomInY { animation-name: zoomInY; } @keyframes zoomOutY { from { opacity: 1; } 50% { opacity: 0; transform: scaleY(0); } to { opacity: 0; } } .zoomOutY { animation-name: zoomOutY; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n)),t.appendChild(e)}})();var s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.componentType,t._g(t._b({tag:"component",attrs:{tag:t.tag,"enter-active-class":"zoomInY","move-class":"zoom-move","leave-active-class":"zoomOutY"}},"component",t.$attrs,!1),t.hooks),[t._t("default")],2)},staticRenderFns:[],name:"zoom-y-transition",mixins:[o],props:{styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.55,0,.1,1)"}}}}};(function(){if("undefined"!==typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),n=" .collapse-move { transition: transform .3s ease-in-out; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n)),t.appendChild(e)}})();var c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.componentType,t._g(t._b({tag:"component",attrs:{tag:t.tag,"move-class":"collapse-move"},on:{"before-enter":t.beforeEnter,"after-enter":t.afterEnter,enter:t.enter,"before-leave":t.beforeLeave,leave:t.leave,"after-leave":t.afterLeave}},"component",t.$attrs,!1),t.$listeners),[t._t("default")],2)},staticRenderFns:[],name:"collapse-transition",mixins:[o],methods:{transitionStyle:function(t){void 0===t&&(t=300);var e=t/1e3,n=e+"s height ease-in-out, "+e+"s padding-top ease-in-out, "+e+"s padding-bottom ease-in-out";return n},beforeEnter:function(t){var e=this.duration.enter?this.duration.enter:this.duration;t.style.transition=this.transitionStyle(e),t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.height="0",t.style.paddingTop=0,t.style.paddingBottom=0,this.setStyles(t)},enter:function(t){t.dataset.oldOverflow=t.style.overflow,0!==t.scrollHeight?(t.style.height=t.scrollHeight+"px",t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom):(t.style.height="",t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom),t.style.overflow="hidden"},afterEnter:function(t){t.style.transition="",t.style.height="",t.style.overflow=t.dataset.oldOverflow},beforeLeave:function(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.height=t.scrollHeight+"px",t.style.overflow="hidden",this.setStyles(t)},leave:function(t){var e=this.duration.leave?this.duration.leave:this.duration;0!==t.scrollHeight&&(t.style.transition=this.transitionStyle(e),t.style.height=0,t.style.paddingTop=0,t.style.paddingBottom=0),this.setAbsolutePosition(t)},afterLeave:function(t){t.style.transition="",t.style.height="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom}}};(function(){if("undefined"!==typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),n=" @keyframes scaleIn { from { opacity: 0; transform: scale(0) } to { opacity: 1; } } .scaleIn { animation-name: scaleIn; } @keyframes scaleOut { from { opacity: 1; } to { opacity: 0; transform: scale(0); } } .scaleOut { animation-name: scaleOut; } .scale-move { transition: transform .3s cubic-bezier(.25, .8, .50, 1); } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n)),t.appendChild(e)}})();var l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.componentType,t._g(t._b({tag:"component",attrs:{tag:t.tag,"enter-active-class":"scaleIn","move-class":"scale-move","leave-active-class":"scaleOut"}},"component",t.$attrs,!1),t.hooks),[t._t("default")],2)},staticRenderFns:[],name:"scale-transition",mixins:[o],props:{origin:{type:String,default:"top left"},styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.25,.8,.50,1)"}}}}};(function(){if("undefined"!==typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),n=".slide-move { transition: transform .3s; } @keyframes slideYIn { from { opacity: 0; transform: translateY(-15px); } to { opacity: 1; } } .slideYIn { animation-name: slideYIn; } @keyframes slideYOut { from { opacity: 1; } to { opacity: 0; transform: translateY(-15px); } } .slideYOut { animation-name: slideYOut; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n)),t.appendChild(e)}})();var d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.componentType,t._g(t._b({tag:"component",attrs:{tag:t.tag,type:"animation","enter-active-class":"slideYIn","move-class":"slide-move","leave-active-class":"slideYOut"}},"component",t.$attrs,!1),t.hooks),[t._t("default")],2)},staticRenderFns:[],name:"slide-y-up-transition",mixins:[o],props:{styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.25,.8,.50,1)"}}}}};(function(){if("undefined"!==typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),n=".slide-move { transition: transform .3s; } @keyframes slideYDownIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; } } .slideYDownIn { animation-name: slideYDownIn; } @keyframes slideYDownOut { from { opacity: 1; } to { opacity: 0; transform: translateY(15px); } } .slideYDownOut { animation-name: slideYDownOut; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n)),t.appendChild(e)}})();var u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.componentType,t._g(t._b({tag:"component",attrs:{tag:t.tag,"enter-active-class":"slideYDownIn","leave-active-class":"slideYDownOut"}},"component",t.$attrs,!1),t.hooks),[t._t("default")],2)},staticRenderFns:[],name:"slide-y-down-transition",mixins:[o],props:{styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.25,.8,.50,1)"}}}}};(function(){if("undefined"!==typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),n=".slide-move { transition: transform .3s; } @keyframes slideXLeftIn { from { opacity: 0; transform: translateX(-15px); } to { opacity: 1; } } .slideXLeftIn { animation-name: slideXLeftIn; } @keyframes slideXLeftOut { from { opacity: 1; } to { opacity: 0; transform: translateX(-15px); } } .slideXLeftOut { animation-name: slideXLeftOut; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n)),t.appendChild(e)}})();var m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.componentType,t._g(t._b({tag:"component",attrs:{tag:t.tag,"enter-active-class":"slideXLeftIn","move-class":"slide-move","leave-active-class":"slideXLeftOut"}},"component",t.$attrs,!1),t.hooks),[t._t("default")],2)},staticRenderFns:[],name:"slide-x-left-transition",mixins:[o],props:{styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.25,.8,.50,1)"}}}}};(function(){if("undefined"!==typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),n=".slide-move { transition: transform .3s; } @keyframes slideXRightIn { from { opacity: 0; transform: translateX(15px); } to { opacity: 1; } } .slideXRightIn { animation-name: slideXRightIn; } @keyframes slideXRightOut { from { opacity: 1; } to { opacity: 0; transform: translateX(15px); } } .slideXRightOut { animation-name: slideXRightOut; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n)),t.appendChild(e)}})();var p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.componentType,t._g(t._b({tag:"component",attrs:{tag:t.tag,"enter-active-class":"slideXRightIn","move-class":"slide-move","leave-active-class":"slideXRightOut"}},"component",t.$attrs,!1),t.hooks),[t._t("default")],2)},staticRenderFns:[],name:"slide-x-right-transition",mixins:[o],props:{styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.25,.8,.50,1)"}}}}},f={};function A(t,e){e&&e.components?e.components.forEach((function(e){return t.component(e.name,f[e.name])})):Object.keys(f).forEach((function(e){t.component(e,f[e])}))}f[a.name]=a,f[i.name]=i,f[r.name]=r,f[s.name]=s,f[c.name]=c,f[l.name]=l,f[d.name]=d,f[u.name]=u,f[m.name]=m,f[p.name]=p,"undefined"!==typeof window&&window.Vue&&window.Vue.use({install:A})},a523:function(t,e,n){"use strict";n("4de4"),n("d3b7"),n("b64b"),n("2ca0"),n("99af"),n("20f6"),n("4b85"),n("498a"),n("a15b");var o=n("2b0e");function a(t){return o["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,n){var o=n.props,a=n.data,i=n.children;a.staticClass="".concat(t," ").concat(a.staticClass||"").trim();var r=a.attrs;if(r){a.attrs={};var s=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e}));s.length&&(a.staticClass+=" ".concat(s.join(" ")))}return o.id&&(a.domProps=a.domProps||{},a.domProps.id=o.id),e(o.tag,a,i)}})}var i=n("d9f7");e["a"]=a("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,o=e.props,a=e.data,r=e.children,s=a.attrs;return s&&(a.attrs={},n=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e}))),o.id&&(a.domProps=a.domProps||{},a.domProps.id=o.id),t(o.tag,Object(i["a"])(a,{staticClass:"container",class:Array({"container--fluid":o.fluid}).concat(n||[])}),r)}})},a74d:function(t,e,n){},b37f:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"new-container",class:{"mb-0":t.$vuetify.breakpoint.smAndDown,"mt-0":t.$vuetify.breakpoint.smAndDown,"pb-5":t.$vuetify.breakpoint.mdAndUp,"pt-5":t.$vuetify.breakpoint.mdAndUp},attrs:{id:"success-section"}},[n("VueFaqAccordion",{attrs:{items:t.data}})],1)},a=[],i=(n("a9e3"),n("744c")),r=n("53ec"),s={components:{VueFaqAccordion:i["a"]},data:function(){return{data:r["a"].faq}},props:{items:{type:Array,required:!0},questionProperty:{type:String,default:"title"},answerProperty:{type:String,default:"value"},tabName:{type:String,default:"category"},activeColor:{type:String,default:"#D50000"},borderColor:{type:String,default:"#9E9E9E"},fontColor:{type:String,default:"#000000"},initialTab:{type:String,default:null},initialQuestionIndex:{type:Number,default:null}}},c=s,l=(n("6263"),n("2877")),d=n("6544"),u=n.n(d),m=n("a523"),p=Object(l["a"])(c,o,a,!1,null,"7bba76ca",null);e["default"]=p.exports;u()(p,{VContainer:m["a"]})}}]);
//# sourceMappingURL=chunk-7bbbf0da.aef0538c.js.map