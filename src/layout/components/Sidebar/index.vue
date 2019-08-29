<template>
  <Sider hide-trigger :style="{ background: '#fff', overflow: 'auto' }">
    <Menu
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
    </Menu>
  </Sider>
</template>

<script>
import SidebarItem from "./SidebarItem";

export default {
  components: { 
    SidebarItem
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    }
  }
};
</script>
