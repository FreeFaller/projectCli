import router from "./router";
import Layout from "@/layout";
import { Admin, Read } from "@/utils/macro";

//异步路由只根据返回权限添加一次
let flag = true;
router.beforeEach((to, from, next) => {
  if (flag) {
    var addRouters = [
      {
        path: "/pig",
        component: Layout,
        name: "测试2222",
        meta: { role: [Admin], title: "测试2222" } //页面需要的权限
      }
      // { path: "*", redirect: "/404", hidden: true }
    ];
    addRouters.forEach(item => {
      router.options.routes.push(item);
    });
    router.addRoutes(addRouters);
    flag = false;
    next({ ...to, replace: true });
  } else {
    next();
  }
});
