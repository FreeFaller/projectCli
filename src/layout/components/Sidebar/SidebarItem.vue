<template>
  <div v-if="showItem">
    <template
      v-if="noShowingChild(route.children, route) || route.upWhenOnlyOneChild"
    >
      <side-link v-if="displayNode.meta" :to="resolvePath(displayNode.path)">
        <MenuItem :name="resolvePath(displayNode.path)">
          <Icon type="ios-stats" />{{ displayNode.meta.title }}
        </MenuItem>
      </side-link>
    </template>

    <Submenu v-else ref="subMenu" :name="resolvePath(route.path)">
      <template slot="title">
        <Icon type="ios-stats" />{{ route.meta.title }}
      </template>
      <sidebar-item
        v-for="child in route.children"
        :key="child.path"
        :route="child"
        :base-path="resolvePath(child.path)"
      />
    </Submenu>
  </div>
</template>

<script>
import path from "path";
import { isExternal } from "@/utils/validate";
// import Item from './Item'
import sideLink from "./Link";

export default {
  name: "SidebarItem",
  components: { sideLink },
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
  data() {
    this.displayNode = null;
    return {};
  },
  computed: {
    //拼接跳转路由
    resolvePath: function() {
      return routePath => {
        if (isExternal(routePath)) {
          return routePath;
        }
        if (isExternal(this.basePath)) {
          return this.basePath;
        }
        return path.resolve(this.basePath, routePath);
      };
    },
    //通过 hidden 和 权限来判断是否显示菜单
    showItem() {
      const role = this.GlobalApp.userInfo.role;
      const { hidden, meta } = this.route;
      if (hidden) {
        return false;
      }
      if (meta) {
        if (!meta.role) {
          //无权限校验模块直接显示
          return true;
        } else {
          return role.some(item => {
            return meta.role.includes(item);
          });
        }
      }
      return false;
    }
  },
  methods: {
    noShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        !item.hidden && (this.displayNode = item);
        return !item.hidden;
      });
      // 没有子节点显示时显示父节点可选中
      if (showingChildren.length === 0) {
        this.displayNode = { ...parent, path: "" };
        return true;
      }
      return false;
    }
  }
};
</script>
<style scoped>
.ivu-menu-item-selected {
  color: #fff !important;
  background: #2d8cf0 !important;
}
</style>
