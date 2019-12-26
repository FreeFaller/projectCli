<template>
  <div v-if="showItem">
    <template
      v-if="noShowingChild(route.children, route) || (route.upWhenOnlyOneChild && oneShowingChild)"
    >
      <side-link v-if="displayNode.meta" :to="resolvePath(displayNode.path)">
        <MenuItem :name="nameOfRoute(displayNode.meta.title)">
          <Icon type="ios-stats" />{{ displayNode.meta.title }}
        </MenuItem>
      </side-link>
    </template>

    <Submenu v-else ref="subMenu" :name="nameOfSubRoute(displayNode.meta.title)">
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
import sideLink from "./Link";
import myMenu from "componentDock/menu";

export default {
  name: "SidebarItem",
  components: { 
    sideLink ,
    Submenu:myMenu.Sub,
    MenuItem:myMenu.Item,
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
  data() {
    this.displayNode = null;
    return {
      oneShowingChild:false
    };
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
          // 下一行注释代码用于v-permission，当前逻辑用于v-role
          // return role.indexOf(meta.role) > -1
          return role.some(item => {
            return meta.role.includes(item);
          });
        }
      }
      return false;
    },
    // 取路由中的名字（name）作为menuItem的名字
    nameOfRoute: function(routeName) {
      return routeName=>{
        return routeName
      }
    },
    nameOfSubRoute(routeName) {
      return ()=>{ return this.route.meta.title}
    }
  },
  methods: {
    noShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        !item.hidden && (this.displayNode = item);
        return !item.hidden;
      });
      this.oneShowingChild = (showingChildren.length === 1) ? true : false 
      // 没有子节点显示时显示父节点可选中
      if (showingChildren.length === 0) {
        this.displayNode = { ...parent, path: "" };
        return true;
      }
      return false;
    },
  }
};
</script>
<style lang="less" scoped>
.ivu-menu-item-selected {
  color: #fff !important;
  background: #2d8cf0 !important;
}
.sider-style {
  .ivu-menu-vertical .ivu-menu-submenu-title-icon{right:10px}
  .router-link-active li{
    color: #fff !important;
    background: #4886FF !important;
  }
}
</style>
