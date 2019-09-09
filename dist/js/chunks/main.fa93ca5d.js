(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "+76r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_13877386_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("uK2o");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_13877386_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_13877386_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_13877386_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "33uJ":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "OHce":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarItem_vue_vue_type_style_index_0_id_2d2bbdc2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("33uJ");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarItem_vue_vue_type_style_index_0_id_2d2bbdc2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarItem_vue_vue_type_style_index_0_id_2d2bbdc2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarItem_vue_vue_type_style_index_0_id_2d2bbdc2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "Vtdi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("Kw5r");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90&
var Appvue_type_template_id_7ba5bd90_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.showView ? _c("router-view") : _vm._e()
}
var staticRenderFns = []
Appvue_type_template_id_7ba5bd90_render._withStripped = true


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=7ba5bd90&

// EXTERNAL MODULE: ./src/utils/macro.js
var macro = __webpack_require__("ubb6");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&
//
//
//
//


/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: "App",
  data: function data() {
    return {
      userInfo: {
        role: []
      },
      showView: false
    };
  },
  provide: function provide() {
    return { GlobalApp: this };
  },

  methods: {
    init: function init() {
      var _this = this;

      setTimeout(function () {
        _this.userInfo.role = [macro["a" /* Admin */]];
        _this.showView = true;
      }, 0);
    }
  },
  mounted: function mounted() {
    this.init();
  }
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("KHd+");

// CONCATENATED MODULE: ./src/App.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_js_,
  Appvue_type_template_id_7ba5bd90_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/App.vue"
/* harmony default export */ var App = (component.exports);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("jE9Z");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/layout/index.vue?vue&type=template&id=13877386&scoped=true&
var layoutvue_type_template_id_13877386_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "layout" },
    [
      _c(
        "Layout",
        { style: { height: "100%" } },
        [
          _c(
            "Header",
            [
              _c(
                "Menu",
                {
                  attrs: {
                    mode: "horizontal",
                    theme: "dark",
                    "active-name": "1"
                  }
                },
                [
                  _c("div", { staticClass: "layout-logo" }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "layout-nav" },
                    [
                      _c(
                        "MenuItem",
                        { attrs: { name: "1" } },
                        [
                          _c("Icon", { attrs: { type: "ios-navigate" } }),
                          _vm._v("\n            Item 1\n          ")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "MenuItem",
                        { attrs: { name: "2" } },
                        [
                          _c("Icon", { attrs: { type: "ios-keypad" } }),
                          _vm._v("\n            Item 2\n          ")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "MenuItem",
                        { attrs: { name: "3" } },
                        [
                          _c("Icon", { attrs: { type: "ios-analytics" } }),
                          _vm._v("\n            Item 3\n          ")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "MenuItem",
                        { attrs: { name: "4" } },
                        [
                          _c("Icon", { attrs: { type: "ios-paper" } }),
                          _vm._v("\n            Item 4\n          ")
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "Layout",
            { style: { height: "100%" } },
            [
              _c(
                "Sider",
                { style: { overflow: "auto" }, attrs: { "hide-trigger": "" } },
                [_c("Sidebar")],
                1
              ),
              _vm._v(" "),
              _c(
                "Layout",
                { style: { padding: "20px", height: "100%" } },
                [_c("router-view")],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var layoutvue_type_template_id_13877386_scoped_true_staticRenderFns = []
layoutvue_type_template_id_13877386_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./src/layout/index.vue?vue&type=template&id=13877386&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/layout/components/Sidebar/index.vue?vue&type=template&id=33ec43fc&
var Sidebarvue_type_template_id_33ec43fc_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Sider",
    {
      style: { background: "#fff", overflow: "auto" },
      attrs: { "hide-trigger": "" }
    },
    [
      _c(
        "Menu",
        {
          attrs: {
            "active-name": "1-2",
            theme: "dark",
            width: "auto",
            "open-names": [_vm.$route.path]
          }
        },
        _vm._l(_vm.routes, function(route) {
          return _c("SidebarItem", {
            key: route.path,
            attrs: { route: route, "base-path": route.path }
          })
        }),
        1
      )
    ],
    1
  )
}
var Sidebarvue_type_template_id_33ec43fc_staticRenderFns = []
Sidebarvue_type_template_id_33ec43fc_render._withStripped = true


// CONCATENATED MODULE: ./src/layout/components/Sidebar/index.vue?vue&type=template&id=33ec43fc&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/layout/components/Sidebar/SidebarItem.vue?vue&type=template&id=2d2bbdc2&scoped=true&
var SidebarItemvue_type_template_id_2d2bbdc2_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.showItem
    ? _c(
        "div",
        [
          _vm.noShowingChild(_vm.route.children, _vm.route) ||
          (_vm.route.upWhenOnlyOneChild && _vm.oneShowingChild)
            ? [
                _vm.displayNode.meta
                  ? _c(
                      "side-link",
                      { attrs: { to: _vm.resolvePath(_vm.displayNode.path) } },
                      [
                        _c(
                          "MenuItem",
                          {
                            attrs: {
                              name: _vm.resolvePath(_vm.displayNode.path)
                            }
                          },
                          [
                            _c("Icon", { attrs: { type: "ios-stats" } }),
                            _vm._v(
                              _vm._s(_vm.displayNode.meta.title) + "\n      "
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  : _vm._e()
              ]
            : _c(
                "Submenu",
                {
                  ref: "subMenu",
                  attrs: { name: _vm.resolvePath(_vm.route.path) }
                },
                [
                  _c(
                    "template",
                    { slot: "title" },
                    [
                      _c("Icon", { attrs: { type: "ios-stats" } }),
                      _vm._v(_vm._s(_vm.route.meta.title) + "\n    ")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.route.children, function(child) {
                    return _c("sidebar-item", {
                      key: child.path,
                      attrs: {
                        route: child,
                        "base-path": _vm.resolvePath(child.path)
                      }
                    })
                  })
                ],
                2
              )
        ],
        2
      )
    : _vm._e()
}
var SidebarItemvue_type_template_id_2d2bbdc2_scoped_true_staticRenderFns = []
SidebarItemvue_type_template_id_2d2bbdc2_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./src/layout/components/Sidebar/SidebarItem.vue?vue&type=template&id=2d2bbdc2&scoped=true&

// EXTERNAL MODULE: ./node_modules/path-browserify/index.js
var path_browserify = __webpack_require__("33yf");
var path_browserify_default = /*#__PURE__*/__webpack_require__.n(path_browserify);

// CONCATENATED MODULE: ./src/utils/validate.js
/**
 * @param {string} path
 * @returns {Boolean}
 */
function isExternal(path) {
  return (/^(https?:|mailto:|tel:)/.test(path)
  );
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
function validUsername(str) {
  var valid_map = ["admin", "editor"];
  return valid_map.indexOf(str.trim()) >= 0;
}
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/layout/components/Sidebar/Link.vue?vue&type=template&id=32e8ab1a&
var Linkvue_type_template_id_32e8ab1a_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "component",
    _vm._b({}, "component", _vm.linkProps(_vm.to), false),
    [_vm._t("default")],
    2
  )
}
var Linkvue_type_template_id_32e8ab1a_staticRenderFns = []
Linkvue_type_template_id_32e8ab1a_render._withStripped = true


// CONCATENATED MODULE: ./src/layout/components/Sidebar/Link.vue?vue&type=template&id=32e8ab1a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/layout/components/Sidebar/Link.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//



/* harmony default export */ var Linkvue_type_script_lang_js_ = ({
  props: {
    to: {
      type: String,
      required: true
    }
  },
  methods: {
    linkProps: function linkProps(url) {
      if (isExternal(url)) {
        return {
          is: "a",
          href: url,
          target: "_blank",
          rel: "noopener"
        };
      }
      return {
        is: "router-link",
        to: url
      };
    }
  }
});
// CONCATENATED MODULE: ./src/layout/components/Sidebar/Link.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sidebar_Linkvue_type_script_lang_js_ = (Linkvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/layout/components/Sidebar/Link.vue





/* normalize component */

var Link_component = Object(componentNormalizer["a" /* default */])(
  Sidebar_Linkvue_type_script_lang_js_,
  Linkvue_type_template_id_32e8ab1a_render,
  Linkvue_type_template_id_32e8ab1a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Link_api; }
Link_component.options.__file = "src/layout/components/Sidebar/Link.vue"
/* harmony default export */ var Link = (Link_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/business/componentDocker/components/menu/menu.vue?vue&type=template&id=ae611992&
var menuvue_type_template_id_ae611992_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    { class: _vm.classes, style: _vm.styles },
    [_vm._t("default")],
    2
  )
}
var menuvue_type_template_id_ae611992_staticRenderFns = []
menuvue_type_template_id_ae611992_render._withStripped = true


// CONCATENATED MODULE: ./src/components/business/componentDocker/components/menu/menu.vue?vue&type=template&id=ae611992&

// CONCATENATED MODULE: ./src/components/business/componentDocker/utils/assist.js

var isServer = vue_runtime_esm["default"].prototype.$isServer;
// 判断参数是否是其中之一
function oneOf(value, validList) {
    for (var i = 0; i < validList.length; i++) {
        if (value === validList[i]) {
            return true;
        }
    }
    return false;
}

function camelcaseToHyphen(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

// For Modal scrollBar hidden
var cached = void 0;
function getScrollBarSize(fresh) {
    if (isServer) return 0;
    if (fresh || cached === undefined) {
        var inner = document.createElement('div');
        inner.style.width = '100%';
        inner.style.height = '200px';

        var outer = document.createElement('div');
        var outerStyle = outer.style;

        outerStyle.position = 'absolute';
        outerStyle.top = 0;
        outerStyle.left = 0;
        outerStyle.pointerEvents = 'none';
        outerStyle.visibility = 'hidden';
        outerStyle.width = '200px';
        outerStyle.height = '150px';
        outerStyle.overflow = 'hidden';

        outer.appendChild(inner);

        document.body.appendChild(outer);

        var widthContained = inner.offsetWidth;
        outer.style.overflow = 'scroll';
        var widthScroll = inner.offsetWidth;

        if (widthContained === widthScroll) {
            widthScroll = outer.clientWidth;
        }

        document.body.removeChild(outer);

        cached = widthContained - widthScroll;
    }
    return cached;
}

// watch DOM change
var MutationObserver = isServer ? false : window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver || false;

var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
var MOZ_HACK_REGEXP = /^moz([A-Z])/;

function camelCase(name) {
    return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
        return offset ? letter.toUpperCase() : letter;
    }).replace(MOZ_HACK_REGEXP, 'Moz$1');
}
// getStyle
function getStyle(element, styleName) {
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
}

// firstUpperCase
function firstUpperCase(str) {
    return str.toString()[0].toUpperCase() + str.toString().slice(1);
}


// Warn
function warnProp(component, prop, correctType, wrongType) {
    correctType = firstUpperCase(correctType);
    wrongType = firstUpperCase(wrongType);
    console.error('[iView warn]: Invalid prop: type check failed for prop ' + prop + '. Expected ' + correctType + ', got ' + wrongType + '. (found in component: ' + component + ')'); // eslint-disable-line
}

function typeOf(obj) {
    var toString = Object.prototype.toString;
    var map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object'
    };
    return map[toString.call(obj)];
}

// deepCopy
function deepCopy(data) {
    var t = typeOf(data);
    var o = void 0;

    if (t === 'array') {
        o = [];
    } else if (t === 'object') {
        o = {};
    } else {
        return data;
    }

    if (t === 'array') {
        for (var i = 0; i < data.length; i++) {
            o.push(deepCopy(data[i]));
        }
    } else if (t === 'object') {
        for (var _i in data) {
            o[_i] = deepCopy(data[_i]);
        }
    }
    return o;
}



// scrollTop animation
function scrollTop(el) {
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var to = arguments[2];
    var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 500;
    var endCallback = arguments[4];

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
            return window.setTimeout(callback, 1000 / 60);
        };
    }
    var difference = Math.abs(from - to);
    var step = Math.ceil(difference / duration * 50);

    function scroll(start, end, step) {
        if (start === end) {
            endCallback && endCallback();
            return;
        }

        var d = start + step > end ? end : start + step;
        if (start > end) {
            d = start - step < end ? end : start - step;
        }

        if (el === window) {
            window.scrollTo(d, d);
        } else {
            el.scrollTop = d;
        }
        window.requestAnimationFrame(function () {
            return scroll(d, end, step);
        });
    }
    scroll(from, to, step);
}

// Find components upward
function findComponentUpward(context, componentName, componentNames) {
    if (typeof componentName === 'string') {
        componentNames = [componentName];
    } else {
        componentNames = componentName;
    }

    var parent = context.$parent;
    var name = parent.$options.name;
    while (parent && (!name || componentNames.indexOf(name) < 0)) {
        parent = parent.$parent;
        if (parent) name = parent.$options.name;
    }
    return parent;
}


// Find component downward
function findComponentDownward(context, componentName) {
    var childrens = context.$children;
    var children = null;

    if (childrens.length) {
        for (var _iterator = childrens, _isArray = Array.isArray(_iterator), _i2 = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
            var _ref;

            if (_isArray) {
                if (_i2 >= _iterator.length) break;
                _ref = _iterator[_i2++];
            } else {
                _i2 = _iterator.next();
                if (_i2.done) break;
                _ref = _i2.value;
            }

            var child = _ref;

            var name = child.$options.name;
            if (name === componentName) {
                children = child;
                break;
            } else {
                children = findComponentDownward(child, componentName);
                if (children) break;
            }
        }
    }
    return children;
}

// Find components downward
function findComponentsDownward(context, componentName) {
    return context.$children.reduce(function (components, child) {
        if (child.$options.name === componentName) components.push(child);
        var foundChilds = findComponentsDownward(child, componentName);
        return components.concat(foundChilds);
    }, []);
}

// Find components upward
function findComponentsUpward(context, componentName) {
    var parents = [];
    var parent = context.$parent;
    if (parent) {
        if (parent.$options.name === componentName) parents.push(parent);
        return parents.concat(findComponentsUpward(parent, componentName));
    } else {
        return [];
    }
}

// Find brothers components
function findBrothersComponents(context, componentName) {
    var exceptMe = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var res = context.$parent.$children.filter(function (item) {
        return item.$options.name === componentName;
    });
    var index = res.findIndex(function (item) {
        return item._uid === context._uid;
    });
    if (exceptMe) res.splice(index, 1);
    return res;
}

/* istanbul ignore next */
var trim = function trim(string) {
    return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
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
}

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
        } else {
            if (!hasClass(el, clsName)) {
                curClass += ' ' + clsName;
            }
        }
    }
    if (!el.classList) {
        el.className = curClass;
    }
}

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
        } else {
            if (hasClass(el, clsName)) {
                curClass = curClass.replace(' ' + clsName + ' ', ' ');
            }
        }
    }
    if (!el.classList) {
        el.className = trim(curClass);
    }
}

var dimensionMap = {
    xs: '480px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1600px'
};

function setMatchMedia() {
    if (typeof window !== 'undefined') {
        var matchMediaPolyfill = function matchMediaPolyfill(mediaQuery) {
            return {
                media: mediaQuery,
                matches: false,
                on: function on() {},
                off: function off() {}
            };
        };
        window.matchMedia = window.matchMedia || matchMediaPolyfill;
    }
}

var sharpMatcherRegx = /#([^#]+)$/;
// CONCATENATED MODULE: ./src/components/business/componentDocker/mixins/emitter.js
function _broadcast(componentName, eventName, params) {
    this.$children.forEach(function (child) {
        var name = child.$options.name;

        if (name === componentName) {
            child.$emit.apply(child, [eventName].concat(params));
        } else {
            // todo 如果 params 是空数组，接收到的会是 undefined
            _broadcast.apply(child, [componentName, eventName].concat([params]));
        }
    });
}
/* harmony default export */ var emitter = ({
    methods: {
        dispatch: function dispatch(componentName, eventName, params) {
            var parent = this.$parent || this.$root;
            var name = parent.$options.name;

            while (parent && (!name || name !== componentName)) {
                parent = parent.$parent;

                if (parent) {
                    name = parent.$options.name;
                }
            }
            if (parent) {
                parent.$emit.apply(parent, [eventName].concat(params));
            }
        },
        broadcast: function broadcast(componentName, eventName, params) {
            _broadcast.call(this, componentName, eventName, params);
        }
    }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/business/componentDocker/components/menu/menu.vue?vue&type=script&lang=js&
//
//
//




var prefixCls = 'ivu-menu';

/* harmony default export */ var menuvue_type_script_lang_js_ = ({
    name: 'Menu',
    mixins: [emitter],
    props: {
        mode: {
            validator: function validator(value) {
                return oneOf(value, ['horizontal', 'vertical']);
            },

            default: 'vertical'
        },
        theme: {
            validator: function validator(value) {
                return oneOf(value, ['light', 'dark', 'primary']);
            },

            default: 'light'
        },
        activeName: {
            type: [String, Number]
        },
        openNames: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        accordion: {
            type: Boolean,
            default: false
        },
        width: {
            type: String,
            default: '240px'
        }
    },
    data: function data() {
        return {
            currentActiveName: this.activeName,
            openedNames: []
        };
    },

    computed: {
        classes: function classes() {
            var _ref;

            var theme = this.theme;
            if (this.mode === 'vertical' && this.theme === 'primary') theme = 'light';

            return ['' + prefixCls, prefixCls + '-' + theme, (_ref = {}, _ref[prefixCls + '-' + this.mode] = this.mode, _ref)];
        },
        styles: function styles() {
            var style = {};

            if (this.mode === 'vertical') style.width = this.width;

            return style;
        }
    },
    methods: {
        updateActiveName: function updateActiveName() {
            if (this.currentActiveName === undefined) {
                this.currentActiveName = -1;
            }
            this.broadcast('Submenu', 'on-update-active-name', false);
            this.broadcast('MenuItem', 'on-update-active-name', this.currentActiveName);
        },
        updateOpenKeys: function updateOpenKeys(name) {
            var names = [].concat(this.openedNames);
            var index = names.indexOf(name);
            if (this.accordion) findComponentsDownward(this, 'Submenu').forEach(function (item) {
                item.opened = false;
            });
            if (index >= 0) {
                var currentSubmenu = null;
                findComponentsDownward(this, 'Submenu').forEach(function (item) {
                    if (item.name === name) {
                        currentSubmenu = item;
                        item.opened = false;
                    }
                });
                findComponentsUpward(currentSubmenu, 'Submenu').forEach(function (item) {
                    item.opened = true;
                });
                findComponentsDownward(currentSubmenu, 'Submenu').forEach(function (item) {
                    item.opened = false;
                });
            } else {
                if (this.accordion) {
                    var _currentSubmenu = null;
                    findComponentsDownward(this, 'Submenu').forEach(function (item) {
                        if (item.name === name) {
                            _currentSubmenu = item;
                            item.opened = true;
                        }
                    });
                    findComponentsUpward(_currentSubmenu, 'Submenu').forEach(function (item) {
                        item.opened = true;
                    });
                } else {
                    findComponentsDownward(this, 'Submenu').forEach(function (item) {
                        if (item.name === name) item.opened = true;
                    });
                }
            }
            var openedNames = findComponentsDownward(this, 'Submenu').filter(function (item) {
                return item.opened;
            }).map(function (item) {
                return item.name;
            });
            this.openedNames = [].concat(openedNames);
            this.$emit('on-open-change', openedNames);
        },
        updateOpened: function updateOpened() {
            var _this = this;

            var items = findComponentsDownward(this, 'Submenu');

            if (items.length) {
                items.forEach(function (item) {
                    if (_this.openedNames.indexOf(item.name) > -1) item.opened = true;else item.opened = false;
                });
            }
        },
        handleEmitSelectEvent: function handleEmitSelectEvent(name) {
            this.$emit('on-select', name);
        }
    },
    mounted: function mounted() {
        var _this2 = this;

        this.openedNames = [].concat(this.openNames);
        this.updateOpened();
        this.$nextTick(function () {
            return _this2.updateActiveName();
        });
        this.$on('on-menu-item-select', function (name) {
            _this2.currentActiveName = name;
            _this2.$emit('on-select', name);
        });
    },

    watch: {
        openNames: function openNames(names) {
            this.openedNames = names;
        },
        activeName: function activeName(val) {
            this.currentActiveName = val;
        },
        currentActiveName: function currentActiveName() {
            this.updateActiveName();
        }
    }
});
// CONCATENATED MODULE: ./src/components/business/componentDocker/components/menu/menu.vue?vue&type=script&lang=js&
 /* harmony default export */ var menu_menuvue_type_script_lang_js_ = (menuvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/business/componentDocker/components/menu/menu.vue





/* normalize component */

var menu_component = Object(componentNormalizer["a" /* default */])(
  menu_menuvue_type_script_lang_js_,
  menuvue_type_template_id_ae611992_render,
  menuvue_type_template_id_ae611992_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var menu_api; }
menu_component.options.__file = "src/components/business/componentDocker/components/menu/menu.vue"
/* harmony default export */ var menu = (menu_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/business/componentDocker/components/menu/menu-group.vue?vue&type=template&id=5e9ac169&
var menu_groupvue_type_template_id_5e9ac169_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("li", { class: [_vm.prefixCls + "-item-group"] }, [
    _c(
      "div",
      { class: [_vm.prefixCls + "-item-group-title"], style: _vm.groupStyle },
      [_vm._v(_vm._s(_vm.title))]
    ),
    _vm._v(" "),
    _c("ul", [_vm._t("default")], 2)
  ])
}
var menu_groupvue_type_template_id_5e9ac169_staticRenderFns = []
menu_groupvue_type_template_id_5e9ac169_render._withStripped = true


// CONCATENATED MODULE: ./src/components/business/componentDocker/components/menu/menu-group.vue?vue&type=template&id=5e9ac169&

// CONCATENATED MODULE: ./src/components/business/componentDocker/components/menu/mixin.js

/* harmony default export */ var mixin = ({
    data: function data() {
        return {
            menu: findComponentUpward(this, 'Menu')
        };
    },

    computed: {
        hasParentSubmenu: function hasParentSubmenu() {
            return !!findComponentUpward(this, 'Submenu');
        },
        parentSubmenuNum: function parentSubmenuNum() {
            return findComponentsUpward(this, 'Submenu').length;
        },
        mode: function mode() {
            return this.menu.mode;
        }
    }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/business/componentDocker/components/menu/menu-group.vue?vue&type=script&lang=js&
//
//
//
//
//
//


var menu_groupvue_type_script_lang_js_prefixCls = 'ivu-menu';

/* harmony default export */ var menu_groupvue_type_script_lang_js_ = ({
    name: 'MenuGroup',
    mixins: [mixin],
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    data: function data() {
        return {
            prefixCls: menu_groupvue_type_script_lang_js_prefixCls
        };
    },

    computed: {
        groupStyle: function groupStyle() {
            return this.hasParentSubmenu && this.mode !== 'horizontal' ? {
                paddingLeft: 43 + (this.parentSubmenuNum - 1) * 28 + 'px'
            } : {};
        }
    }
});
// CONCATENATED MODULE: ./src/components/business/componentDocker/components/menu/menu-group.vue?vue&type=script&lang=js&
 /* harmony default export */ var menu_menu_groupvue_type_script_lang_js_ = (menu_groupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/business/componentDocker/components/menu/menu-group.vue





/* normalize component */

var menu_group_component = Object(componentNormalizer["a" /* default */])(
  menu_menu_groupvue_type_script_lang_js_,
  menu_groupvue_type_template_id_5e9ac169_render,
  menu_groupvue_type_template_id_5e9ac169_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var menu_group_api; }
menu_group_component.options.__file = "src/components/business/componentDocker/components/menu/menu-group.vue"
/* harmony default export */ var menu_group = (menu_group_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/business/componentDocker/components/menu/menu-item.vue?vue&type=template&id=1237ba19&
var menu_itemvue_type_template_id_1237ba19_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.to
    ? _c(
        "a",
        {
          class: _vm.classes,
          style: _vm.itemStyle,
          attrs: { href: _vm.linkUrl, target: _vm.target },
          on: {
            click: [
              function($event) {
                if (
                  $event.ctrlKey ||
                  $event.shiftKey ||
                  $event.altKey ||
                  $event.metaKey
                ) {
                  return null
                }
                return _vm.handleClickItem($event, false)
              },
              function($event) {
                if (!$event.ctrlKey) {
                  return null
                }
                return _vm.handleClickItem($event, true)
              },
              function($event) {
                if (!$event.metaKey) {
                  return null
                }
                return _vm.handleClickItem($event, true)
              }
            ]
          }
        },
        [_vm._t("default")],
        2
      )
    : _c(
        "li",
        {
          class: _vm.classes,
          style: _vm.itemStyle,
          on: {
            click: function($event) {
              $event.stopPropagation()
              return _vm.handleClickItem($event)
            }
          }
        },
        [_vm._t("default")],
        2
      )
}
var menu_itemvue_type_template_id_1237ba19_staticRenderFns = []
menu_itemvue_type_template_id_1237ba19_render._withStripped = true


// CONCATENATED MODULE: ./src/components/business/componentDocker/components/menu/menu-item.vue?vue&type=template&id=1237ba19&

// CONCATENATED MODULE: ./src/components/business/componentDocker/mixins/link.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



/* harmony default export */ var mixins_link = ({
    props: {
        to: {
            type: [Object, String]
        },
        replace: {
            type: Boolean,
            default: false
        },
        target: {
            type: String,
            validator: function validator(value) {
                return oneOf(value, ['_blank', '_self', '_parent', '_top']);
            },

            default: '_self'
        },
        append: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    computed: {
        linkUrl: function linkUrl() {
            var type = _typeof(this.to);
            if (type !== 'string') {
                return null;
            }
            if (this.to.includes('//')) {
                /* Absolute URL, we do not need to route this */
                return this.to;
            }
            var router = this.$router;
            if (router) {
                var current = this.$route;
                var route = router.resolve(this.to, current, this.append);
                return route ? route.href : this.to;
            }
            return this.to;
        }
    },
    methods: {
        handleClick: function handleClick() {
            var new_window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            var router = this.$router;

            if (new_window) {
                var to = this.to;
                if (router) {
                    var current = this.$route;
                    var route = router.resolve(this.to, current, this.append);
                    to = route ? route.href : this.to;
                }
                window.open(to);
            } else {
                if (router) {
                    this.replace ? this.$router.replace(this.to) : this.$router.push(this.to);
                } else {
                    window.location.href = this.to;
                }
            }
        },
        handleCheckClick: function handleCheckClick(event) {
            var new_window = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (this.to) {
                if (this.target === '_blank') {
                    return false;
                } else {
                    event.preventDefault();
                    this.handleClick(new_window);
                }
            }
        }
    }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/business/componentDocker/components/menu/menu-item.vue?vue&type=script&lang=js&
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






var menu_itemvue_type_script_lang_js_prefixCls = 'ivu-menu';

/* harmony default export */ var menu_itemvue_type_script_lang_js_ = ({
    name: 'MenuItem',
    mixins: [emitter, mixin, mixins_link],
    props: {
        name: {
            type: [String, Number],
            required: true
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            active: false
        };
    },

    computed: {
        classes: function classes() {
            var _ref;

            return [menu_itemvue_type_script_lang_js_prefixCls + '-item', (_ref = {}, _ref[menu_itemvue_type_script_lang_js_prefixCls + '-item-active'] = this.active, _ref[menu_itemvue_type_script_lang_js_prefixCls + '-item-selected'] = this.active, _ref[menu_itemvue_type_script_lang_js_prefixCls + '-item-disabled'] = this.disabled, _ref)];
        },
        itemStyle: function itemStyle() {
            return this.hasParentSubmenu && this.mode !== 'horizontal' ? {
                paddingLeft: 43 + (this.parentSubmenuNum - 1) * 24 + 'px'
            } : {};
        }
    },
    methods: {
        handleClickItem: function handleClickItem(event) {
            var new_window = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (this.disabled) return;

            if (new_window || this.target === '_blank') {
                // 如果是 new_window，直接新开窗口就行，无需发送状态
                this.handleCheckClick(event, new_window);
                var parentMenu = findComponentUpward(this, 'Menu');
                if (parentMenu) parentMenu.handleEmitSelectEvent(this.name);
            } else {
                var parent = findComponentUpward(this, 'Submenu');

                if (parent) {
                    this.dispatch('Submenu', 'on-menu-item-select', this.name);
                } else {
                    this.dispatch('Menu', 'on-menu-item-select', this.name);
                }

                this.handleCheckClick(event, new_window);
            }
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.$on('on-update-active-name', function (name) {
            if (_this.name === name) {
                _this.active = true;
                _this.dispatch('Submenu', 'on-update-active-name', name);
            } else {
                _this.active = false;
            }
        });
    }
});
// CONCATENATED MODULE: ./src/components/business/componentDocker/components/menu/menu-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var menu_menu_itemvue_type_script_lang_js_ = (menu_itemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/business/componentDocker/components/menu/menu-item.vue





/* normalize component */

var menu_item_component = Object(componentNormalizer["a" /* default */])(
  menu_menu_itemvue_type_script_lang_js_,
  menu_itemvue_type_template_id_1237ba19_render,
  menu_itemvue_type_template_id_1237ba19_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var menu_item_api; }
menu_item_component.options.__file = "src/components/business/componentDocker/components/menu/menu-item.vue"
/* harmony default export */ var menu_item = (menu_item_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/business/componentDocker/components/menu/submenu.vue?vue&type=template&id=f6c3d812&
var submenuvue_type_template_id_f6c3d812_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      class: _vm.classes,
      on: { mouseenter: _vm.handleMouseenter, mouseleave: _vm.handleMouseleave }
    },
    [
      _c(
        "div",
        {
          ref: "reference",
          class: [_vm.prefixCls + "-submenu-title"],
          style: _vm.titleStyle,
          on: {
            click: function($event) {
              $event.stopPropagation()
              return _vm.handleClick($event)
            }
          }
        },
        [
          _vm._t("title"),
          _vm._v(" "),
          _c("Icon", {
            class: [_vm.prefixCls + "-submenu-title-icon"],
            attrs: {
              type: _vm.arrowType,
              custom: _vm.customArrowType,
              size: _vm.arrowSize
            }
          })
        ],
        2
      ),
      _vm._v(" "),
      _vm.mode === "vertical"
        ? _c("collapse-transition", [
            _c(
              "ul",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.opened,
                    expression: "opened"
                  }
                ],
                class: [_vm.prefixCls]
              },
              [_vm._t("default")],
              2
            )
          ])
        : _c(
            "transition",
            { attrs: { name: "slide-up" } },
            [
              _c(
                "Drop",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.opened,
                      expression: "opened"
                    }
                  ],
                  ref: "drop",
                  style: _vm.dropStyle,
                  attrs: { placement: "bottom" }
                },
                [
                  _c(
                    "ul",
                    { class: [_vm.prefixCls + "-drop-list"] },
                    [_vm._t("default")],
                    2
                  )
                ]
              )
            ],
            1
          )
    ],
    1
  )
}
var submenuvue_type_template_id_f6c3d812_staticRenderFns = []
submenuvue_type_template_id_f6c3d812_render._withStripped = true


// CONCATENATED MODULE: ./src/components/business/componentDocker/components/menu/submenu.vue?vue&type=template&id=f6c3d812&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/business/componentDocker/components/select/dropdown.vue?vue&type=template&id=0edbbc6c&
var dropdownvue_type_template_id_0edbbc6c_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "ivu-select-dropdown",
      class: _vm.className,
      style: _vm.styles
    },
    [_vm._t("default")],
    2
  )
}
var dropdownvue_type_template_id_0edbbc6c_staticRenderFns = []
dropdownvue_type_template_id_0edbbc6c_render._withStripped = true


// CONCATENATED MODULE: ./src/components/business/componentDocker/components/select/dropdown.vue?vue&type=template&id=0edbbc6c&

// CONCATENATED MODULE: ./src/components/business/componentDocker/utils/transfer-queue.js
var transferIndex = 0;

function transferIncrease() {
    transferIndex++;
}


// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/business/componentDocker/components/select/dropdown.vue?vue&type=script&lang=js&
//
//
//


var dropdownvue_type_script_lang_js_isServer = vue_runtime_esm["default"].prototype.$isServer;

// const Popper = isServer ? function() {} : require('popper.js/dist/umd/popper.js');  // eslint-disable-line



/* harmony default export */ var dropdownvue_type_script_lang_js_ = ({
    name: 'Drop',
    props: {
        placement: {
            type: String,
            default: 'bottom-start'
        },
        className: {
            type: String
        },
        transfer: {
            type: Boolean
        }
    },
    data: function data() {
        return {
            popper: null,
            width: '',
            popperStatus: false,
            tIndex: this.handleGetIndex()
        };
    },

    computed: {
        styles: function styles() {
            var style = {};
            if (this.width) style.minWidth = this.width + 'px';

            if (this.transfer) style['z-index'] = 1060 + this.tIndex;

            return style;
        }
    },
    methods: {
        update: function update() {
            var _this = this;

            if (dropdownvue_type_script_lang_js_isServer) return;
            if (this.popper) {
                this.$nextTick(function () {
                    _this.popper.update();
                    _this.popperStatus = true;
                });
            } else {
                this.$nextTick(function () {
                    // this.popper = new Popper(this.$parent.$refs.reference, this.$el, {
                    //     placement: this.placement,
                    //     modifiers: {
                    //         computeStyle:{
                    //             gpuAcceleration: false
                    //         },
                    //         preventOverflow :{
                    //             boundariesElement: 'window'
                    //         }
                    //     },
                    //     onCreate:()=>{
                    //         this.resetTransformOrigin();
                    //         this.$nextTick(this.popper.update());
                    //     },
                    //     onUpdate:()=>{
                    //         this.resetTransformOrigin();
                    //     }
                    // });
                });
            }
            // set a height for parent is Modal and Select's width is 100%
            if (this.$parent.$options.name === 'iSelect') {
                this.width = parseInt(getStyle(this.$parent.$el, 'width'));
            }
            this.tIndex = this.handleGetIndex();
        },
        destroy: function destroy() {
            var _this2 = this;

            if (this.popper) {
                setTimeout(function () {
                    if (_this2.popper && !_this2.popperStatus) {
                        _this2.popper.destroy();
                        _this2.popper = null;
                    }
                    _this2.popperStatus = false;
                }, 300);
            }
        },
        resetTransformOrigin: function resetTransformOrigin() {
            // 不判断，Select 会报错，不知道为什么
            if (!this.popper) return;

            var x_placement = this.popper.popper.getAttribute('x-placement');
            var placementStart = x_placement.split('-')[0];
            var placementEnd = x_placement.split('-')[1];
            var leftOrRight = x_placement === 'left' || x_placement === 'right';
            if (!leftOrRight) {
                this.popper.popper.style.transformOrigin = placementStart === 'bottom' || placementStart !== 'top' && placementEnd === 'start' ? 'center top' : 'center bottom';
            }
        },
        handleGetIndex: function handleGetIndex() {
            transferIncrease();
            return transferIndex;
        }
    },
    created: function created() {
        this.$on('on-update-popper', this.update);
        this.$on('on-destroy-popper', this.destroy);
    },
    beforeDestroy: function beforeDestroy() {
        if (this.popper) {
            this.popper.destroy();
        }
    }
});
// CONCATENATED MODULE: ./src/components/business/componentDocker/components/select/dropdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var select_dropdownvue_type_script_lang_js_ = (dropdownvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/business/componentDocker/components/select/dropdown.vue





/* normalize component */

var dropdown_component = Object(componentNormalizer["a" /* default */])(
  select_dropdownvue_type_script_lang_js_,
  dropdownvue_type_template_id_0edbbc6c_render,
  dropdownvue_type_template_id_0edbbc6c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var dropdown_api; }
dropdown_component.options.__file = "src/components/business/componentDocker/components/select/dropdown.vue"
/* harmony default export */ var dropdown = (dropdown_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/business/componentDocker/components/icon/icon.vue?vue&type=template&id=83789912&
var iconvue_type_template_id_83789912_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("i", {
    class: _vm.classes,
    style: _vm.styles,
    on: { click: _vm.handleClick }
  })
}
var iconvue_type_template_id_83789912_staticRenderFns = []
iconvue_type_template_id_83789912_render._withStripped = true


// CONCATENATED MODULE: ./src/components/business/componentDocker/components/icon/icon.vue?vue&type=template&id=83789912&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/business/componentDocker/components/icon/icon.vue?vue&type=script&lang=js&
//
//
//

var iconvue_type_script_lang_js_prefixCls = 'ivu-icon';

/* harmony default export */ var iconvue_type_script_lang_js_ = ({
    name: 'Icon',
    props: {
        type: {
            type: String,
            default: ''
        },
        size: [Number, String],
        color: String,
        custom: {
            type: String,
            default: ''
        }
    },
    computed: {
        classes: function classes() {
            var _ref;

            return ['' + iconvue_type_script_lang_js_prefixCls, (_ref = {}, _ref[iconvue_type_script_lang_js_prefixCls + '-' + this.type] = this.type !== '', _ref['' + this.custom] = this.custom !== '', _ref)];
        },
        styles: function styles() {
            var style = {};

            if (this.size) {
                style['font-size'] = this.size + 'px';
            }

            if (this.color) {
                style.color = this.color;
            }

            return style;
        }
    },
    methods: {
        handleClick: function handleClick(event) {
            this.$emit('click', event);
        }
    }
});
// CONCATENATED MODULE: ./src/components/business/componentDocker/components/icon/icon.vue?vue&type=script&lang=js&
 /* harmony default export */ var icon_iconvue_type_script_lang_js_ = (iconvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/business/componentDocker/components/icon/icon.vue





/* normalize component */

var icon_component = Object(componentNormalizer["a" /* default */])(
  icon_iconvue_type_script_lang_js_,
  iconvue_type_template_id_83789912_render,
  iconvue_type_template_id_83789912_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var icon_api; }
icon_component.options.__file = "src/components/business/componentDocker/components/icon/icon.vue"
/* harmony default export */ var icon = (icon_component.exports);
// CONCATENATED MODULE: ./src/components/business/componentDocker/components/base/collapse-transition.js


var Transition = {
    beforeEnter: function beforeEnter(el) {
        addClass(el, 'collapse-transition');
        if (!el.dataset) el.dataset = {};

        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;

        el.style.height = '0';
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
    },
    enter: function enter(el) {
        el.dataset.oldOverflow = el.style.overflow;
        if (el.scrollHeight !== 0) {
            el.style.height = el.scrollHeight + 'px';
            el.style.paddingTop = el.dataset.oldPaddingTop;
            el.style.paddingBottom = el.dataset.oldPaddingBottom;
        } else {
            el.style.height = '';
            el.style.paddingTop = el.dataset.oldPaddingTop;
            el.style.paddingBottom = el.dataset.oldPaddingBottom;
        }

        el.style.overflow = 'hidden';
    },
    afterEnter: function afterEnter(el) {
        // for safari: remove class then reset height is necessary
        removeClass(el, 'collapse-transition');
        el.style.height = '';
        el.style.overflow = el.dataset.oldOverflow;
    },
    beforeLeave: function beforeLeave(el) {
        if (!el.dataset) el.dataset = {};
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        el.dataset.oldOverflow = el.style.overflow;

        el.style.height = el.scrollHeight + 'px';
        el.style.overflow = 'hidden';
    },
    leave: function leave(el) {
        if (el.scrollHeight !== 0) {
            // for safari: add class after set height, or it will jump to zero height suddenly, weired
            addClass(el, 'collapse-transition');
            el.style.height = 0;
            el.style.paddingTop = 0;
            el.style.paddingBottom = 0;
        }
    },
    afterLeave: function afterLeave(el) {
        removeClass(el, 'collapse-transition');
        el.style.height = '';
        el.style.overflow = el.dataset.oldOverflow;
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
    }
};

/* harmony default export */ var collapse_transition = ({
    name: 'CollapseTransition',
    functional: true,
    props: {
        appear: Boolean
    },
    render: function render(h, _ref) {
        var children = _ref.children,
            props = _ref.props;

        var data = {
            on: Transition,
            props: {
                appear: props.appear
            }
        };

        return h('transition', data, children);
    }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/business/componentDocker/components/menu/submenu.vue?vue&type=script&lang=js&
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








var submenuvue_type_script_lang_js_prefixCls = 'ivu-menu';

/* harmony default export */ var submenuvue_type_script_lang_js_ = ({
    name: 'Submenu',
    mixins: [emitter, mixin],
    components: { Icon: icon, Drop: dropdown, CollapseTransition: collapse_transition },
    props: {
        name: {
            type: [String, Number],
            required: true
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            prefixCls: submenuvue_type_script_lang_js_prefixCls,
            active: false,
            opened: false,
            dropWidth: parseFloat(getStyle(this.$el, 'width'))
        };
    },

    computed: {
        classes: function classes() {
            var _ref;

            return [submenuvue_type_script_lang_js_prefixCls + '-submenu', (_ref = {}, _ref[submenuvue_type_script_lang_js_prefixCls + '-item-active'] = this.active && !this.hasParentSubmenu, _ref[submenuvue_type_script_lang_js_prefixCls + '-opened'] = this.opened, _ref[submenuvue_type_script_lang_js_prefixCls + '-submenu-disabled'] = this.disabled, _ref[submenuvue_type_script_lang_js_prefixCls + '-submenu-has-parent-submenu'] = this.hasParentSubmenu, _ref[submenuvue_type_script_lang_js_prefixCls + '-child-item-active'] = this.active, _ref)];
        },
        accordion: function accordion() {
            return this.menu.accordion;
        },
        dropStyle: function dropStyle() {
            var style = {};

            if (this.dropWidth) style.minWidth = this.dropWidth + 'px';
            return style;
        },
        titleStyle: function titleStyle() {
            return this.hasParentSubmenu && this.mode !== 'horizontal' ? {
                paddingLeft: 43 + (this.parentSubmenuNum - 1) * 24 + 'px'
            } : {};
        },

        // 3.4.0, global setting customArrow 有值时，arrow 赋值空
        arrowType: function arrowType() {
            var type = 'ios-arrow-down';

            if (this.$IVIEW) {
                if (this.$IVIEW.menu.customArrow) {
                    type = '';
                } else if (this.$IVIEW.menu.arrow) {
                    type = this.$IVIEW.menu.arrow;
                }
            }
            return type;
        },

        // 3.4.0, global setting
        customArrowType: function customArrowType() {
            var type = '';

            if (this.$IVIEW) {
                if (this.$IVIEW.menu.customArrow) {
                    type = this.$IVIEW.menu.customArrow;
                }
            }
            return type;
        },

        // 3.4.0, global setting
        arrowSize: function arrowSize() {
            var size = '';

            if (this.$IVIEW) {
                if (this.$IVIEW.menu.arrowSize) {
                    size = this.$IVIEW.menu.arrowSize;
                }
            }
            return size;
        }
    },
    methods: {
        handleMouseenter: function handleMouseenter() {
            var _this = this;

            if (this.disabled) return;
            if (this.mode === 'vertical') return;

            clearTimeout(this.timeout);
            this.timeout = setTimeout(function () {
                _this.menu.updateOpenKeys(_this.name);
                _this.opened = true;
            }, 250);
        },
        handleMouseleave: function handleMouseleave() {
            var _this2 = this;

            if (this.disabled) return;
            if (this.mode === 'vertical') return;

            clearTimeout(this.timeout);
            this.timeout = setTimeout(function () {
                _this2.menu.updateOpenKeys(_this2.name);
                _this2.opened = false;
            }, 150);
        },
        handleClick: function handleClick() {
            var _this3 = this;

            if (this.disabled) return;
            if (this.mode === 'horizontal') return;
            var opened = this.opened;
            if (this.accordion) {
                this.$parent.$children.forEach(function (item) {
                    if (item.$options.name === 'Submenu') item.opened = false;
                });
            }
            this.$nextTick(function () {
                _this3.opened = !opened;
            });
            this.menu.updateOpenKeys(this.name);
        }
    },
    watch: {
        mode: function mode(val) {
            if (val === 'horizontal') {
                this.$refs.drop.update();
            }
        },
        opened: function opened(val, old) {
            if (this.mode === 'vertical') return;
            if (val) {
                // set drop a width to fixed when menu has fixed position
                this.dropWidth = parseFloat(getStyle(this.$el, 'width'));
                this.$refs.drop.update();
            } else {
                this.$refs.drop.destroy();
            }
        }
    },
    mounted: function mounted() {
        var _this4 = this;

        this.$on('on-menu-item-select', function (name) {
            if (_this4.mode === 'horizontal') _this4.opened = false;
            _this4.dispatch('Menu', 'on-menu-item-select', name);
            return true;
        });
        this.$on('on-update-active-name', function (status) {
            if (findComponentUpward(_this4, 'Submenu')) _this4.dispatch('Submenu', 'on-update-active-name', status);
            if (findComponentsDownward(_this4, 'Submenu')) findComponentsDownward(_this4, 'Submenu').forEach(function (item) {
                item.active = false;
            });
            _this4.active = status;
        });
    }
});
// CONCATENATED MODULE: ./src/components/business/componentDocker/components/menu/submenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var menu_submenuvue_type_script_lang_js_ = (submenuvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/business/componentDocker/components/menu/submenu.vue





/* normalize component */

var submenu_component = Object(componentNormalizer["a" /* default */])(
  menu_submenuvue_type_script_lang_js_,
  submenuvue_type_template_id_f6c3d812_render,
  submenuvue_type_template_id_f6c3d812_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var submenu_api; }
submenu_component.options.__file = "src/components/business/componentDocker/components/menu/submenu.vue"
/* harmony default export */ var submenu = (submenu_component.exports);
// CONCATENATED MODULE: ./src/components/business/componentDocker/components/menu/index.js





menu.Group = menu_group;
menu.Item = menu_item;
menu.Sub = submenu;

/* harmony default export */ var components_menu = (menu);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/layout/components/Sidebar/SidebarItem.vue?vue&type=script&lang=js&
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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



// import Item from './Item'



/* harmony default export */ var SidebarItemvue_type_script_lang_js_ = ({
  name: "SidebarItem",
  components: {
    sideLink: Link,
    Submenu: components_menu.Sub,
    MenuItem: components_menu.Item
  },
  props: {
    route: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ""
    }
  },
  inject: ["GlobalApp"],
  data: function data() {
    this.displayNode = null;
    return {
      oneShowingChild: false
    };
  },

  computed: {
    //拼接跳转路由
    resolvePath: function resolvePath() {
      var _this = this;

      return function (routePath) {
        if (isExternal(routePath)) {
          return routePath;
        }
        if (isExternal(_this.basePath)) {
          return _this.basePath;
        }
        return path_browserify_default.a.resolve(_this.basePath, routePath);
      };
    },
    //通过 hidden 和 权限来判断是否显示菜单
    showItem: function showItem() {
      var role = this.GlobalApp.userInfo.role;
      var _route = this.route,
          hidden = _route.hidden,
          meta = _route.meta;

      if (hidden) {
        return false;
      }
      if (meta) {
        if (!meta.role) {
          //无权限校验模块直接显示
          return true;
        } else {
          return role.some(function (item) {
            return meta.role.includes(item);
          });
        }
      }
      return false;
    }
  },
  methods: {
    noShowingChild: function noShowingChild() {
      var _this2 = this;

      var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var parent = arguments[1];

      var showingChildren = children.filter(function (item) {
        !item.hidden && (_this2.displayNode = item);
        return !item.hidden;
      });
      this.oneShowingChild = showingChildren.length === 1 ? true : false;
      // 没有子节点显示时显示父节点可选中
      if (showingChildren.length === 0) {
        this.displayNode = _extends({}, parent, { path: "" });
        return true;
      }
      return false;
    }
  }
});
// CONCATENATED MODULE: ./src/layout/components/Sidebar/SidebarItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sidebar_SidebarItemvue_type_script_lang_js_ = (SidebarItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/layout/components/Sidebar/SidebarItem.vue?vue&type=style&index=0&id=2d2bbdc2&scoped=true&lang=css&
var SidebarItemvue_type_style_index_0_id_2d2bbdc2_scoped_true_lang_css_ = __webpack_require__("OHce");

// CONCATENATED MODULE: ./src/layout/components/Sidebar/SidebarItem.vue






/* normalize component */

var SidebarItem_component = Object(componentNormalizer["a" /* default */])(
  Sidebar_SidebarItemvue_type_script_lang_js_,
  SidebarItemvue_type_template_id_2d2bbdc2_scoped_true_render,
  SidebarItemvue_type_template_id_2d2bbdc2_scoped_true_staticRenderFns,
  false,
  null,
  "2d2bbdc2",
  null
  
)

/* hot reload */
if (false) { var SidebarItem_api; }
SidebarItem_component.options.__file = "src/layout/components/Sidebar/SidebarItem.vue"
/* harmony default export */ var SidebarItem = (SidebarItem_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/layout/components/Sidebar/index.vue?vue&type=script&lang=js&
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



/* harmony default export */ var Sidebarvue_type_script_lang_js_ = ({
  components: {
    SidebarItem: SidebarItem
  },
  computed: {
    routes: function routes() {
      return this.$router.options.routes;
    }
  }
});
// CONCATENATED MODULE: ./src/layout/components/Sidebar/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Sidebarvue_type_script_lang_js_ = (Sidebarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/layout/components/Sidebar/index.vue





/* normalize component */

var Sidebar_component = Object(componentNormalizer["a" /* default */])(
  components_Sidebarvue_type_script_lang_js_,
  Sidebarvue_type_template_id_33ec43fc_render,
  Sidebarvue_type_template_id_33ec43fc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Sidebar_api; }
Sidebar_component.options.__file = "src/layout/components/Sidebar/index.vue"
/* harmony default export */ var Sidebar = (Sidebar_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/layout/index.vue?vue&type=script&lang=js&
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
//
//


/* harmony default export */ var layoutvue_type_script_lang_js_ = ({
  name: "mainLayout",
  components: {
    Sidebar: Sidebar
  }
});
// CONCATENATED MODULE: ./src/layout/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_layoutvue_type_script_lang_js_ = (layoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/layout/index.vue?vue&type=style&index=0&id=13877386&scoped=true&lang=css&
var layoutvue_type_style_index_0_id_13877386_scoped_true_lang_css_ = __webpack_require__("+76r");

// CONCATENATED MODULE: ./src/layout/index.vue






/* normalize component */

var layout_component = Object(componentNormalizer["a" /* default */])(
  src_layoutvue_type_script_lang_js_,
  layoutvue_type_template_id_13877386_scoped_true_render,
  layoutvue_type_template_id_13877386_scoped_true_staticRenderFns,
  false,
  null,
  "13877386",
  null
  
)

/* hot reload */
if (false) { var layout_api; }
layout_component.options.__file = "src/layout/index.vue"
/* harmony default export */ var layout = (layout_component.exports);
// CONCATENATED MODULE: ./src/router.js




vue_runtime_esm["default"].use(vue_router_esm["a" /* default */]);


/**
 * baseRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
var baseRoutes = [{
  path: "/404",
  component: function component() {
    return __webpack_require__.e(/* import() | 404 */ 0).then(__webpack_require__.bind(null, "jNvO"));
  },
  hidden: true
}, {
  path: "/",
  component: layout,
  redirect: "/notice"
}, {
  path: "/notice",
  component: layout,
  redirect: "/notice/list",
  children: [{
    path: "list",
    name: "list",
    component: function component() {
      return __webpack_require__.e(/* import() | notice */ 5).then(__webpack_require__.bind(null, "g6jT"));
    },
    meta: {
      title: "公告列表",
      role: [macro["a" /* Admin */]]
    },
    hidden: true
  }],
  meta: { title: "公告列表" }
}, {
  path: "/permision",
  component: layout,
  children: [{
    path: "about",
    name: "about",
    component: function component() {
      return Promise.all(/* import() | permision */[__webpack_require__.e(8), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, "fY0S"));
    },
    meta: { title: "权限设置" }
  }],
  upWhenOnlyOneChild: true,
  meta: { title: "权限管理" }
}, {
  path: "/consumption",
  name: "consumption",
  redirect: "/consumption/resource",
  component: layout,
  children: [{
    path: "resource",
    name: "resource",
    redirect: "/consumption/resource/stander",
    component: function component() {
      return __webpack_require__.e(/* import() | consumption */ 1).then(__webpack_require__.bind(null, "6zad"));
    },
    children: [{
      path: "stander",
      name: "stander",
      component: function component() {
        return __webpack_require__.e(/* import() | consumption */ 1).then(__webpack_require__.bind(null, "3sW7"));
      },
      hidden: true
    }, {
      path: "port",
      name: "port",
      component: function component() {
        return __webpack_require__.e(/* import() | consumption */ 1).then(__webpack_require__.bind(null, "bNvY"));
      },
      hidden: true
    }, {
      path: "bandwidth",
      name: "bandwidth",
      component: function component() {
        return __webpack_require__.e(/* import() | consumption */ 1).then(__webpack_require__.bind(null, "LoKe"));
      },
      hidden: true
    }],
    meta: {
      title: "资源清单"
    }
  }],
  meta: { title: "用量明细" }
}, {
  path: "/product",
  component: layout,
  children: [{
    path: "app1",
    name: "application1",
    component: function component() {
      return __webpack_require__.e(/* import() | home */ 2).then(__webpack_require__.bind(null, "u1G+"));
    },
    meta: { title: "应用1" },
    children: [{
      path: "cluster1",
      name: "cluster1",
      component: function component() {
        return __webpack_require__.e(/* import() | home */ 2).then(__webpack_require__.bind(null, "u1G+"));
      },
      meta: { title: "集群1" }
    }, {
      path: "cluster2",
      name: "cluster2",
      component: function component() {
        return __webpack_require__.e(/* import() | home */ 2).then(__webpack_require__.bind(null, "u1G+"));
      },
      meta: { title: "集群2", role: [macro["a" /* Admin */]] }
    }]
  }, {
    path: "app2",
    name: "application",
    component: function component() {
      return __webpack_require__.e(/* import() | home */ 2).then(__webpack_require__.bind(null, "u1G+"));
    },
    meta: { title: "应用2" },
    children: [{
      path: "cluster3",
      name: "cluster3",
      component: function component() {
        return __webpack_require__.e(/* import() | home */ 2).then(__webpack_require__.bind(null, "u1G+"));
      },
      meta: { title: "集群3" }
    }]
  }],
  meta: { title: "产品" }
}, {
  path: "http://www.baidu.com",
  component: layout,
  meta: { title: "百度" }
},
// 404 page must be placed at the end !!!
{ path: "*", redirect: "/404", hidden: true }];

var router_createRouter = function createRouter() {
  return new vue_router_esm["a" /* default */]({
    // mode: 'history', // require service support
    scrollBehavior: function scrollBehavior() {
      return { y: 0 };
    },
    routes: baseRoutes
  });
};
var router = router_createRouter();

/* harmony default export */ var src_router = (router);
// CONCATENATED MODULE: ./src/permission.js
var permission_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





//异步路由只根据返回权限添加一次
var flag = true;
src_router.beforeEach(function (to, from, next) {
  if (flag) {
    var addRouters = [{
      path: "/pig",
      component: layout,
      name: "测试2222",
      meta: { role: [macro["a" /* Admin */]], title: "测试2222" //页面需要的权限
      }
      // { path: "*", redirect: "/404", hidden: true }
    }];
    addRouters.forEach(function (item) {
      src_router.options.routes.push(item);
    });
    src_router.addRoutes(addRouters);
    flag = false;
    next(permission_extends({}, to, { replace: true }));
  } else {
    next();
  }
});
// EXTERNAL MODULE: ./src/styles/index.less
var styles = __webpack_require__("pLGG");

// EXTERNAL MODULE: ./node_modules/iview/dist/iview.js
var iview = __webpack_require__("4GmL");
var iview_default = /*#__PURE__*/__webpack_require__.n(iview);

// EXTERNAL MODULE: ./node_modules/iview/dist/styles/iview.css
var styles_iview = __webpack_require__("3K29");

// CONCATENATED MODULE: ./src/main.js



 // permission control
 // global css



vue_runtime_esm["default"].use(iview_default.a);

vue_runtime_esm["default"].config.productionTip = false;

function initVue() {
  new vue_runtime_esm["default"]({
    router: src_router,
    render: function render(h) {
      return h(App);
    },
    data: {
      eventHub: new vue_runtime_esm["default"]()
    }
  }).$mount("#app");
}

initVue();

if (false) {}

/***/ }),

/***/ "pLGG":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "uK2o":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ubb6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Admin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Read; });
/*
 * --------------------------------------------
 * extend 公共变量
 * @author   zhengyujie(hzzhengyujie@corp.netease.com)
 * --------------------------------------------
 */

//权限相关的公共变量
var Admin = "admin";
var Read = "readonly";

/***/ })

},[["Vtdi",4,7]]]);