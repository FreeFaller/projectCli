import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/permission"; // permission control
import "@/styles/index.less"; // global css

import bView from "bview";
import "@/components/bview/src/style.js" 

import "@/components/business/componentDocker/styles/iview.css";

Vue.config.productionTip = false;

Vue.use(bView)

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

