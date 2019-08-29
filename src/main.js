import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/permission"; // permission control
import "@/styles/index.less"; // global css

import bView from "bview";
import "@/components/bview/src/style.js"
Vue.use(bView)

import iView from 'iview'
import 'iview/dist/styles/iview.css';
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
