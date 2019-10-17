/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-17 10:21:00
 * @LastEditTime: 2019-10-17 10:21:00
 * @LastEditors: your name
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/permission"; // permission control
import "@/styles/index.less"; // global css

import iView from 'view-design'
import 'view-design/dist/styles/iview.css';
Vue.use(iView)

Vue.config.productionTip = false;

function initVue() {
  new Vue({
    router,
    render: h => h(App),
    data: {
      eventHub: new Vue()
    }
  }).$mount("#app");
}

initVue()

if (module.hot) {
  module.hot.accept('./App.vue', function () {
    initVue()
  })
}
