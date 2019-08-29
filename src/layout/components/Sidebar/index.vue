<template>
  <Sider hide-trigger :style="{ background: '#fff', overflow: 'auto' }">
    <myMenu
      active-name="1-2"
      theme="dark"
      width="auto"
      :open-names="[$route.path]"
    >
      <SidebarItem
        v-for="route in routes"
        :key="route.path"
        :route="route"
        :base-path="route.path"
      />
    </myMenu>
  </Sider>
</template>

<script>
import SidebarItem from "./SidebarItem";
import myLayout from "componentDock/layout";
import myMenu from "componentDock/menu";

export default {
  components: { 
    SidebarItem ,
    Sider:myLayout.Sider,
    myMenu
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    }
  }
};
</script>
