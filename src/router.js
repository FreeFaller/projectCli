import Vue from "vue";
import Router from "vue-router";
import { Admin } from "@/utils/macro";

Vue.use(Router);

import Layout from "@/layout";
/**
 * baseRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const baseRoutes = [
  {
    path: "/404",
    component: () => import(/* webpackChunkName: "404" */ "@/views/404"),
    hidden: true
  },
  {
    path: "/",
    component: Layout,
    redirect: "/permision"
  },
  {
    path: "/permision",
    component: Layout,
    children: [
      {
        path: "permision2",
        name: "permision2",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/About.vue"),
        meta: { title: "权限设置" }
        // hidden: true
      }
    ],
    // upWhenOnlyOneChild: true,
    meta: { title: "权限管理" }
  },
  {
    path: "/resource",
    name: "resource",
    component: Layout,
    meta: {
      title: "资源管理",
      role: [Admin]
    }
  },
  {
    path: "/system",
    name: "system",
    component: Layout,
    meta: { title: "系统管理" }
  },
  {
    path: "/system222",
    name: "system222",
    component: Layout,
    meta: { title: "2222222" }
  },
  {
    path: "/product",
    component: Layout,
    children: [
      {
        path: "app1",
        name: "application1",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
        meta: { title: "应用1" },
        children: [
          {
            path: "cluster1",
            name: "cluster1",
            component: () =>
              import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
            meta: { title: "集群1" }
          },
          {
            path: "cluster2",
            name: "cluster2",
            component: () =>
              import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
            meta: { title: "集群2", role: [Admin] }
          }
        ]
      },
      {
        path: "app2",
        name: "application",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
        meta: { title: "应用2" },
        // upWhenOnlyOneChild: true,
        children: [
          {
            path: "cluster3",
            name: "cluster3",
            component: () =>
              import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
            meta: { title: "集群3" }
          }
        ]
      }
    ],
    meta: { title: "产品" }
  },
  {
    path: "http://www.baidu.com",
    component: Layout,
    meta: { title: "百度" }
  },
  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true }
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: baseRoutes
  });
const router = createRouter();

export default router;
