/*
 * --------------------------------------------
 * 通用发送请求文件
 * 默认返回json结构
 * - retCode : 返回码  默认200为成功，其他失败
 * - retDesc : 返回信息
 * - result : 返回信息结构体，必须为Object
 * --------------------------------------------
 */
import axiosFactory from "axios";
import Vue from "vue";

const TIMEOUT = 10000,
  baseUrl = "/";

// 新建axios实例，避免污染全局axios
const axios = axiosFactory.create({});
// 错误处理通用方法
const errorHandler = function (res, message) {
  // 抛出错误
  if (message) {
    Vue.toast.fail(`请求失败：${message}`);
  }
  return Promise.reject(res);
};

// 请求拦截器
axios.interceptors.request.use(
  config => {
    config.url = baseUrl + config.url;
    config.timeout || (config.timeout = TIMEOUT);

    return config;
  },
  error => {
    let { message } = error;
    return errorHandler(
      {
        config: error.config,
        data: {
          retCode: -2,
          retDesc: `请求错误：${message}`
        }
      },
      message
    );
  }
);

// 返回拦截器
axios.interceptors.response.use(
  res => {
    let data = res.data;
    let { message } = data;

    if (data.code == "200" || data.code == "10200") {
      return Promise.resolve(data.data);
    } else {
      return errorHandler(res, message);
    }
  },
  error => {
    let { response } = error;
    let message = response.data.message || "";
    // 超时等其他catch到的错误
    return errorHandler(
      {
        config: error.config,
        data: {
          retCode: -1,
          retDesc: `请求失败：${message}`,
          code: response.data.code
        }
      },
      message
    );
  }
);

let ajax = {},
  methods = ["get", "post", "delete", "put"];

methods.forEach(m => {
  /**
   * 参数说明
   * 降低修改成本，url和data参数保持原样
   * 其他所有参数改成解构，需要其他参数自行添加
   * =>timeout  number  超时时间  默认10s
   */
  ajax[m] = function (url, data = {}, { timeout = 10000 } = {}) {
    let config = {
      timeout
    };
    // post和其他method区分
    if (m !== "post" && m !== "put") {
      // 获取一个副本，避免修改data时影响传入的参数对象
      let params = Object.assign({}, data);
      // 非post请求 追加时间戳参数
      params.t = new Date().getTime();
      config.params = params;
      return axios[m](url, config);
    } else {
      // post请求 追加header
      config.headers = {
        "Content-Type": "application/json"
      };
      return axios[m](url, data, config);
    }
  };
});

export default ajax;
