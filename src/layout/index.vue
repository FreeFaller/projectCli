<template>
  <div class="layout">
    <Layout :style="{ height: '100%' }">
      <Header>
        <div class="layout-logo">
          <img src="./logo2@2x.png" class="logo" />
        </div>
      </Header>
      <Layout :style="{ height: '100%' }">
        <Sider hide-trigger width="180" class="sider-style">
          <Sidebar />
        </Sider>
        <Layout :style="{ padding: '20px', height: '100%' }">
          <router-view></router-view>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import Sidebar from "./components/Sidebar";
export default {
  name: "mainLayout",
  components: {
    Sidebar
  }
};
</script>
<style lang="less" scoped>
.layout {
  background: #f5f7f9;
  position: relative;
  overflow: hidden;
  height: 100%;
}
.layout-logo {
  width: 180px;
  height: 64px;
  position: absolute;
  text-align: center;
  padding: 9px 10px 9px 0;
  background: #2a313c;
  z-index: 10;
  .logo {
    width: 105px;
    height: 32px;
  }
}
.ivu-layout-header{padding: 0;background:#fff;}
.sider-style {
  overflow: auto;
  background: #2a313c;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>
