module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "c721":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_skeleton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d305");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_skeleton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_skeleton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_skeleton_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d305":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"689b3468-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/Skeleton/src/skeleton.vue?vue&type=template&id=57fdb72c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"bravo-loading-fade"},on:{"after-leave":_vm.handleAfterLeave}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"bravo-loading-mask",class:[_vm.customClass, { 'is-fullscreen': _vm.fullscreen }],style:({ backgroundColor: _vm.background || '' })},[(!_vm.texts&&!_vm.circle&&!_vm.pics)?_c('div',{staticClass:"bravo-loading-spinner"},[(!_vm.spinner)?_c('svg',{staticClass:"circular",attrs:{"viewBox":"25 25 50 50"}},[_c('circle',{staticClass:"path",attrs:{"cx":"50","cy":"50","r":"20","fill":"none"}})]):_c('i',{class:_vm.spinner}),(_vm.text)?_c('p',{staticClass:"bravo-loading-text"},[_vm._v(_vm._s(_vm.text))]):_vm._e()]):_c('div',{staticClass:"skeleton"},[(_vm.circle)?_c('div',{staticStyle:{"margin-bottom":"20px","display":"flex"}},[_c('div',{staticClass:"mask-animation skeleton-circle",style:({margin:!_vm.texts?'auto':'',
        height:!_vm.texts?_vm.shorter+'px':'120px',
        width:!_vm.texts?_vm.shorter+'px':'120px',
        borderRadius:!_vm.texts?_vm.shorter+'px':'120px'})}),(_vm.texts)?_c('div',{staticStyle:{"width":"calc(100% - 140px)","margin":"10px"}},_vm._l((3),function(index){return _c('div',{key:index,staticClass:"mask-animation skeleton-texts",class:{indent:index%3==1,tail:index%3==0}})}),0):_vm._e()]):_vm._e(),(_vm.texts)?_c('div',{staticStyle:{"margin-bottom":"20px"}},_vm._l((_vm.lineAmount),function(index){return _c('div',{key:index,staticClass:"mask-animation skeleton-texts",class:{indent:index%5==1,tail:index%5==0,contextTail:index==_vm.lineAmount}})}),0):_vm._e(),(_vm.pics)?_c('div',{staticStyle:{"display":"flex","flex-wrap":"wrap"}},_vm._l((_vm.picsAmount),function(index){return _c('div',{key:index,staticClass:"mask-animation skeleton-pic"})}),0):_vm._e()])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/Skeleton/src/skeleton.vue?vue&type=template&id=57fdb72c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/Skeleton/src/skeleton.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var skeletonvue_type_script_lang_js_ = ({
  data() {
    return {
      text: null,
      spinner: null,
      background: null,
      fullscreen: true,
      visible: false,
      customClass: '',
      texts:false,
      circle:false,
      pics:false,
      elHeight:0,
      elWidth:0,
    };
  },
  computed:{
    lineAmount(){
      let amount = parseInt((this.elHeight-(this.circle?1:0)*140-(this.pics?1:0)*140)/40)-1
      return amount>0?amount:0
    },
    shorter(){
      return (this.elHeight<this.elWidth?this.elHeight:this.elWidth) - 60
    },
    picsAmount(){
      let amount = parseInt(this.elWidth/140)-1
      let times = 1
      times = Math.floor((this.elHeight - (this.circle?1:0)*140 - (this.texts?1:0)*this.lineAmount*40)/ 140)
      console.log(this.elHeight)
      amount *= times
      return amount>0?amount:0
    },
  },
  mounted(){

  },
  methods: {
    handleAfterLeave() {
      this.$emit('after-leave');
    },
    setText(text) {
      this.text = text;
    }
  },
  watch:{
    visible(){
      this.$nextTick(()=>{
        this.elHeight = this.$el.offsetHeight
        this.elWidth = this.$el.offsetWidth
      })
    }
  }
});

// CONCATENATED MODULE: ./packages/Skeleton/src/skeleton.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_skeletonvue_type_script_lang_js_ = (skeletonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/Skeleton/src/skeleton.vue?vue&type=style&index=0&lang=scss&
var skeletonvue_type_style_index_0_lang_scss_ = __webpack_require__("c721");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/Skeleton/src/skeleton.vue






/* normalize component */

var component = normalizeComponent(
  src_skeletonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var skeleton = (component.exports);
// CONCATENATED MODULE: ./packages/Skeleton/utils/dom.js
/* istanbul ignore next */
/* eslint-disable */



const isServer = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.prototype.$isServer;
const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;
const ieVersion = isServer ? 0 : Number(document.documentMode);

/* istanbul ignore next */
const trim = function(string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};
/* istanbul ignore next */
const camelCase = function(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
};

/* istanbul ignore next */
const on = (function() {
  if (!isServer && document.addEventListener) {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
})();

/* istanbul ignore next */
const off = (function() {
  if (!isServer && document.removeEventListener) {
    return function(element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return function(element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler);
      }
    };
  }
})();

/* istanbul ignore next */
const once = function(el, event, fn) {
  var listener = function() {
    if (fn) {
      fn.apply(this, arguments);
    }
    off(el, event, listener);
  };
  on(el, event, listener);
};

/* istanbul ignore next */
function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
};

/* istanbul ignore next */
function addClass(el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || '').split(' ');

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName;
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
};

/* istanbul ignore next */
function removeClass(el, cls) {
  if (!el || !cls) return;
  var classes = cls.split(' ');
  var curClass = ' ' + el.className + ' ';

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ');
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
};

/* istanbul ignore next */
const getStyle = ieVersion < 9 ? function(element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'styleFloat';
  }
  try {
    switch (styleName) {
      case 'opacity':
        try {
          return element.filters.item('alpha').opacity / 100;
        } catch (e) {
          return 1.0;
        }
      default:
        return (element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null);
    }
  } catch (e) {
    return element.style[styleName];
  }
} : function(element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    var computed = document.defaultView.getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch (e) {
    return element.style[styleName];
  }
};

/* istanbul ignore next */
function setStyle(element, styleName, value) {
  if (!element || !styleName) return;

  if (typeof styleName === 'object') {
    for (var prop in styleName) {
      if (styleName.hasOwnProperty(prop)) {
        setStyle(element, prop, styleName[prop]);
      }
    }
  } else {
    styleName = camelCase(styleName);
    if (styleName === 'opacity' && ieVersion < 9) {
      element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')';
    } else {
      element.style[styleName] = value;
    }
  }
};

const isScroll = (el, vertical) => {
  if (isServer) return;

  const determinedDirection = vertical !== null || vertical !== undefined;
  const overflow = determinedDirection
    ? vertical
      ? getStyle(el, 'overflow-y')
      : getStyle(el, 'overflow-x')
    : getStyle(el, 'overflow');

  return overflow.match(/(scroll|auto)/);
};

const getScrollContainer = (el, vertical) => {
  if (isServer) return;

  let parent = el;
  while (parent) {
    if ([window, document, document.documentElement].includes(parent)) {
      return window;
    }
    if (isScroll(parent, vertical)) {
      return parent;
    }
    parent = parent.parentNode;
  }

  return parent;
};

const isInContainer = (el, container) => {
  if (isServer || !el || !container) return false;

  const elRect = el.getBoundingClientRect();
  let containerRect;

  if ([window, document, document.documentElement, null, undefined].includes(container)) {
    containerRect = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0
    };
  } else {
    containerRect = container.getBoundingClientRect();
  }

  return elRect.top < containerRect.bottom &&
    elRect.bottom > containerRect.top &&
    elRect.right > containerRect.left &&
    elRect.left < containerRect.right;
};

// CONCATENATED MODULE: ./packages/Skeleton/utils/after-leave.js
/**
 * Bind after-leave event for vue instance. Make sure after-leave is called in any browsers.
 *
 * @param {Vue} instance Vue instance.
 * @param {Function} callback callback of after-leave event
 * @param {Number} speed the speed of transition, default value is 300ms
 * @param {Boolean} once weather bind after-leave once. default value is false.
 */
/* eslint-disable */
/* harmony default export */ var after_leave = (function(instance, callback, speed = 300, once = false) {
  if (!instance || !callback) throw new Error('instance & callback is required');
  let called = false;
  const afterLeaveCallback = function() {
    if (called) return;
    called = true;
    if (callback) {
      callback.apply(null, arguments);
    }
  };
  if (once) {
    instance.$once('after-leave', afterLeaveCallback);
  } else {
    instance.$on('after-leave', afterLeaveCallback);
  }
  setTimeout(() => {
    afterLeaveCallback();
  }, speed + 100);
});;

// CONCATENATED MODULE: ./packages/Skeleton/src/directive.js
/* eslint-disable */




const Mask = external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend(skeleton);

const skeletonDirective = {};
skeletonDirective.install = Vue => {
    if (Vue.prototype.$isServer) return;
    const toggleLoading = (el, binding) => {
        if (binding.value) {
            Vue.nextTick(() => {
                if (binding.modifiers.fullscreen) {
                    el.originalPosition = getStyle(document.body, 'position');
                    el.originalOverflow = getStyle(document.body, 'overflow');
                    el.maskStyle.zIndex = 2000;

                    addClass(el.mask, 'is-fullscreen');
                    insertDom(document.body, el, binding);
                } else {
                    removeClass(el.mask, 'is-fullscreen');

                    if (binding.modifiers.body) {
                        el.originalPosition = getStyle(document.body, 'position');

                        ['top', 'left'].forEach(property => {
                            const scroll = property === 'top' ? 'scrollTop' : 'scrollLeft';
                            el.maskStyle[property] = el.getBoundingClientRect()[property] +
                                document.body[scroll] +
                                document.documentElement[scroll] -
                                parseInt(getStyle(document.body, `margin-${ property }`), 10) +
                                'px';
                        });
                        ['height', 'width'].forEach(property => {
                            el.maskStyle[property] = el.getBoundingClientRect()[property] + 'px';
                        });

                        insertDom(document.body, el, binding);
                    } else {
                        el.originalPosition = getStyle(el, 'position');
                        insertDom(el, el, binding);
                    }
                }
            });
        } else {
            after_leave(el.instance, _ => {
                if (!el.instance.hiding) return;
                el.domVisible = false;
                const target = binding.modifiers.fullscreen || binding.modifiers.body
                    ? document.body
                    : el;
                removeClass(target, 'bravo-loading-parent--relative');
                removeClass(target, 'bravo-loading-parent--hidden');
                el.instance.hiding = false;
            }, 300, true);
            el.instance.visible = false;
            el.instance.hiding = true;
        }
    };
    const insertDom = (parent, el, binding) => {
        if (!el.domVisible && getStyle(el, 'display') !== 'none' && getStyle(el, 'visibility') !== 'hidden') {
            Object.keys(el.maskStyle).forEach(property => {
                el.mask.style[property] = el.maskStyle[property];
            });

            if (el.originalPosition !== 'absolute' && el.originalPosition !== 'fixed') {
                addClass(parent, 'bravo-loading-parent--relative');
            }
            if (binding.modifiers.fullscreen && binding.modifiers.lock) {
                addClass(parent, 'bravo-loading-parent--hidden');
            }
            el.domVisible = true;

            parent.appendChild(el.mask);
            Vue.nextTick(() => {
                if (el.instance.hiding) {
                    el.instance.$emit('after-leave');
                } else {
                    el.instance.visible = true;
                }
            });
            el.domInserted = true;
        } else if (el.domVisible && el.instance.hiding === true) {
            el.instance.visible = true;
            el.instance.hiding = false;
        }
    };

    Vue.directive('skeleton', {
        bind: function(el, binding, vnode) {
            const textExr = el.getAttribute('bravo-loading-text');
            const spinnerExr = el.getAttribute('bravo-loading-spinner');
            const backgroundExr = el.getAttribute('bravo-loading-background');
            const customClassExr = el.getAttribute('bravo-loading-custom-class');
            const block = binding.modifiers.block;

            const self = el.$el||el;
            if(block&&window.getComputedStyle(self).display=='inline'){
                self.style.display = 'inline-block'
                self.style.height = self.style.height&&self.style.height<100?self.style.height:'400px'
                self.style.width = self.style.width||'100%'
            }
            const vm = vnode.context;
            const mask = new Mask({
                el: document.createElement('div'),
                data: {
                    text: vm && vm[textExr] || textExr,
                    spinner: vm && vm[spinnerExr] || spinnerExr,
                    background: vm && vm[backgroundExr] || backgroundExr,
                    customClass: vm && vm[customClassExr] || customClassExr,
                    fullscreen: !!binding.modifiers.fullscreen,
                    texts: !!binding.modifiers.texts,
                    circle: !!binding.modifiers.circle,
                    pics:!!binding.modifiers.pics
                }
            });
            el.instance = mask;
            el.mask = mask.$el;
            el.maskStyle = {};

            binding.value && toggleLoading(el, binding);
        },

        update: function(el, binding) {
            el.instance.setText(el.getAttribute('bravo-loading-text'));
            if (binding.oldValue !== binding.value) {
                toggleLoading(el, binding);
            }
        },

        unbind: function(el, binding) {
            if (el.domInserted) {
                el.mask &&
                el.mask.parentNode &&
                el.mask.parentNode.removeChild(el.mask);
                toggleLoading(el, { value: false, modifiers: binding.modifiers });
            }
            el.instance && el.instance.$destroy();
        }
    });
};

/* harmony default export */ var directive = (skeletonDirective);

// CONCATENATED MODULE: ./packages/Skeleton/index.js


/* harmony default export */ var Skeleton = ({
    install(Vue) {
        Vue.use(directive);
    },
    directive: directive,
});

// CONCATENATED MODULE: ./packages/index.js
// 导入颜色选择器组件


// 存储组件列表
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = Vue => {
    // 判断是否安装
    if (install.installed) return;
    // 遍历注册全局组件
    Skeleton.install(Vue)
};

// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
}

/* harmony default export */ var packages_0 = ({
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    // 以下是具体的组件列表
    skeleton: Skeleton
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });