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
    redirect: "/notice"
  },
  {
    path: "/notice",
    component: Layout,
    redirect: "/notice/list",
    children: [
      {
        path: "list",
        name: "list",
        component: () =>
          import(/* webpackChunkName: "notice" */ "@/views/notice/NoticeList.vue"),
        meta: {
          title: "公告列表",
          role: [Admin]
        },
        hidden: true
      }
    ],
    meta: { title: "公告列表" }
  },
  {
    path: "/permision",
    component: Layout,
    children: [
      {
        path: "about",
        name: "about",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/permision/About.vue"),
        meta: { title: "权限设置" },
      }
    ],
    upWhenOnlyOneChild: true,
    meta: { title: "权限管理" }
  },
  {
    path: "/consumption",
    name: "consumption",
    redirect: "/consumption/resource",
    component: Layout,
    children: [
      {
        path: "resource",
        name: "resource",
        redirect: "/consumption/resource/stander",
        component: () =>
          import(/* webpackChunkName: "consumption" */ "@/views/consumption/Resource.vue"),
        children: [
          {
            path: "stander",
            name: "stander",
            component: () =>
              import(/* webpackChunkName: "consumption" */ "@/views/consumption/Stander.vue"),
            hidden: true
          },
          {
            path: "port",
            name: "port",
            component: () =>
              import(/* webpackChunkName: "consumption" */ "@/views/consumption/Port.vue"),
            hidden: true
          },
          {
            path: "bandwidth",
            name: "bandwidth",
            component: () =>
              import(/* webpackChunkName: "consumption" */ "@/views/consumption/Bandwidth.vue"),
            hidden: true
          }
        ],
        meta: {
          title: "资源清单"
        }
      }
    ],
    meta: { title: "用量明细" }
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
