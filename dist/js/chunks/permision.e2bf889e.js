(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "fY0S":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/permision/About.vue?vue&type=template&id=6003aea2&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "about" },
    [
      _c("Button", [_vm._v("所有人可见")]),
      _vm._v(" "),
      _c(
        "RadioGroup",
        {
          directives: [
            {
              name: "permission",
              rawName: "v-permission",
              value: [_vm.Admin],
              expression: "[Admin]"
            }
          ],
          attrs: { type: "button" }
        },
        [
          _c(
            "Radio",
            {
              directives: [
                {
                  name: "permission",
                  rawName: "v-permission",
                  value: [_vm.Admin],
                  expression: "[Admin]"
                }
              ],
              attrs: { label: "large" }
            },
            [_vm._v("仅Admin可见")]
          ),
          _vm._v(" "),
          _c("Radio", { attrs: { label: "default" } }, [_vm._v("Default")]),
          _vm._v(" "),
          _c("Radio", { attrs: { label: "small" } }, [_vm._v("small")])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "Button",
        {
          directives: [
            {
              name: "permission",
              rawName: "v-permission",
              value: [_vm.Admin],
              expression: "[Admin]"
            }
          ],
          attrs: { type: "primary" }
        },
        [_vm._v("仅Admin可见")]
      ),
      _vm._v(" "),
      _c("h1", { staticStyle: { "margin-bottom": "30px" } }, [
        _vm._v("当前权限：" + _vm._s(_vm.GlobalApp.userInfo.role))
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/views/permision/About.vue?vue&type=template&id=6003aea2&

// EXTERNAL MODULE: ./src/utils/macro.js
var macro = __webpack_require__("ubb6");

// CONCATENATED MODULE: ./src/directive/permission/permission.js
var ref = {};
var index = 0;
//获取用户权限
function getRoles(vnode) {
  if (!vnode) {
    return [];
  }
  var GlobalApp = vnode.context.GlobalApp;

  if (GlobalApp && GlobalApp.userInfo) {
    return GlobalApp.userInfo.role || [];
  } else {
    var appNode = vnode.context.$root.$children[0];
    if (appNode && appNode.userInfo) {
      return appNode.userInfo.role || [];
    } else {
      return [];
    }
  }
}
/* harmony default export */ var permission = ({
  inserted: function inserted(el, binding, vnode) {
    var _uid = index;
    index++;
    ref[_uid] = {
      node: document.createComment('v-permission'),
      flag: false,
      parentNode: el.parentNode
    };
    el._uid = _uid;
    var roles = getRoles(vnode);
    var value = binding.value;

    if (value && value instanceof Array && value.length > 0) {
      var permissionRoles = value;
      var hasPermission = roles.some(function (role) {
        return permissionRoles.includes(role);
      });
      // 对无权限的节点进行删除和标记
      if (!hasPermission) {
        el.parentNode.insertBefore(ref[_uid].node, el);
        el.parentNode && el.parentNode.removeChild(el);
        ref[_uid].flag = true;
      }
    } else {
      throw new Error('need roles! Like v-permission="[\'admin\',\'readonly\']"');
    }
  },

  // update(el, binding, vnode){
  //   const _uid = el._uid
  //   const roles = getRoles(vnode)
  //   const { value } = binding
  //   if (value && value instanceof Array && value.length > 0) {
  //     const permissionRoles = value
  //     const hasPermission = roles.some(role => {
  //       return permissionRoles.includes(role)
  //     })
  //     const permissionFlag = ref[_uid].flag
  //     if (!hasPermission) {
  //       // 无权限且未被标记过时，进行节点删除和标记
  //       if (!permissionFlag) {
  //         el.parentNode.insertBefore(ref[_uid].node, el);
  //         el.parentNode && el.parentNode.removeChild(el)
  //         ref[_uid].flag = true
  //       }
  //     } else {
  //       //有权限且有标记过的位置才做节点还原和删除标记
  //       if (permissionFlag) {
  //         ref[_uid].parentNode.insertBefore(el, ref[_uid].node);
  //         ref[_uid].parentNode.removeChild(ref[_uid].node, el);
  //       }
  //     }
  //   } else {
  //     throw new Error(`need roles! Like v-permission="['admin','readonly']"`)
  //   }
  // },
  unbind: function unbind(el) {
    var _uid = el._uid;
    // console.log(_uid)
    delete ref._uid;
  }
});
// CONCATENATED MODULE: ./src/directive/permission/index.js


var permission_install = function install(Vue) {
  Vue.directive("permission", permission);
};

if (window.Vue) {
  window["permission"] = permission;
  Vue.use(permission_install); // eslint-disable-line
}

permission.install = permission_install;
/* harmony default export */ var directive_permission = (permission);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("vDqi");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("Kw5r");

// CONCATENATED MODULE: ./src/utils/request.js
/*
 * --------------------------------------------
 * 通用发送请求文件
 * 默认返回json结构
 * - retCode : 返回码  默认200为成功，其他失败
 * - retDesc : 返回信息
 * - result : 返回信息结构体，必须为Object
 * --------------------------------------------
 */



var TIMEOUT = 10000,
    baseUrl = "/";

// 新建axios实例，避免污染全局axios
var request_axios = axios_default.a.create({});
// 错误处理通用方法
var request_errorHandler = function errorHandler(res, message) {
  // 抛出错误
  if (message) {
    vue_runtime_esm["default"].toast.fail("\u8BF7\u6C42\u5931\u8D25\uFF1A" + message);
  }
  return Promise.reject(res);
};

// 请求拦截器
request_axios.interceptors.request.use(function (config) {
  config.url = baseUrl + config.url;
  config.timeout || (config.timeout = TIMEOUT);

  return config;
}, function (error) {
  var message = error.message;

  return request_errorHandler({
    config: error.config,
    data: {
      retCode: -2,
      retDesc: "\u8BF7\u6C42\u9519\u8BEF\uFF1A" + message
    }
  }, message);
});

// 返回拦截器
request_axios.interceptors.response.use(function (res) {
  var data = res.data;
  var message = data.message;


  if (data.code == "200" || data.code == "10200") {
    return Promise.resolve(data.data);
  } else {
    return request_errorHandler(res, message);
  }
}, function (error) {
  var response = error.response;

  var message = response.data.message || "";
  // 超时等其他catch到的错误
  return request_errorHandler({
    config: error.config,
    data: {
      retCode: -1,
      retDesc: "\u8BF7\u6C42\u5931\u8D25\uFF1A" + message,
      code: response.data.code
    }
  }, message);
});

var ajax = {},
    methods = ["get", "post", "delete", "put"];

methods.forEach(function (m) {
  /**
   * 参数说明
   * 降低修改成本，url和data参数保持原样
   * 其他所有参数改成解构，需要其他参数自行添加
   * =>timeout  number  超时时间  默认10s
   */
  ajax[m] = function (url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        _ref$timeout = _ref.timeout,
        timeout = _ref$timeout === undefined ? 10000 : _ref$timeout;

    var config = {
      timeout: timeout
    };
    // post和其他method区分
    if (m !== "post" && m !== "put") {
      // 获取一个副本，避免修改data时影响传入的参数对象
      var params = Object.assign({}, data);
      // 非post请求 追加时间戳参数
      params.t = new Date().getTime();
      config.params = params;
      return request_axios[m](url, config);
    } else {
      // post请求 追加header
      config.headers = {
        "Content-Type": "application/json"
      };
      return request_axios[m](url, data, config);
    }
  };
});

/* harmony default export */ var request = (ajax);
// CONCATENATED MODULE: ./src/api/about.js


function getList(params) {
    return request.get('api/clusters/list', params);
}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/permision/About.vue?vue&type=script&lang=js&
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





/* harmony default export */ var Aboutvue_type_script_lang_js_ = ({
  inject: ["GlobalApp"],
  directives: {
    permission: directive_permission
  },
  data: function data() {
    return {
      Admin: macro["a" /* Admin */],
      Read: macro["b" /* Read */]
    };
  },

  methods: {
    getData: function getData() {
      getList({
        a: 0,
        b: 'sss'
      }).then(function (data) {});
    }
  },
  mounted: function mounted() {
    this.getData();
  }
});
// CONCATENATED MODULE: ./src/views/permision/About.vue?vue&type=script&lang=js&
 /* harmony default export */ var permision_Aboutvue_type_script_lang_js_ = (Aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("KHd+");

// CONCATENATED MODULE: ./src/views/permision/About.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  permision_Aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/permision/About.vue"
/* harmony default export */ var About = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);