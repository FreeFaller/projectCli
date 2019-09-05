<template>
  <div class="resource">
    <h1>资源清单</h1>
    <Menu mode="horizontal" active-name="1">
      <router-link :to="{ path: 'stander' }">
        <MenuItem name="1">
          机架
        </MenuItem>
      </router-link>
      <router-link :to="{ path: 'port' }">
        <MenuItem name="2">
          端口
        </MenuItem>
      </router-link>
      <router-link :to="{ path: 'bandwidth' }">
        <MenuItem name=3>
          带宽
        </MenuItem>
      </router-link>
    </Menu>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "resource",
};
</script>
<style scoped>

</style>