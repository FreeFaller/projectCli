<template>
  <div class="layout">
    <myLayout :style="{ height: '100%' }">
      <Header>
        <myMenu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>
              Item 1
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad"></Icon>
              Item 2
            </MenuItem>
            <MenuItem name="3">
              <Icon type="ios-analytics"></Icon>
              Item 3
            </MenuItem>
            <MenuItem name="4">
              <Icon type="ios-paper"></Icon>
              Item 4
            </MenuItem>
          </div>
        </myMenu>
      </Header>
      <myLayout :style="{ height: '100%' }">
        <Sider hide-trigger :style="{ overflow: 'auto' }">
          <Sidebar />
        </Sider>
        <myLayout :style="{ padding: '20px', height: '100%' }">
          <router-view></router-view>
        </myLayout>
      </myLayout>
    </myLayout>
  </div>
</template>
<script>
import Sidebar from "./components/Sidebar";
import myLayout from "componentDock/layout";
import myMenu from "componentDock/menu";
export default {
  name: "mainLayout",
  components: {
    Sidebar,
    myLayout,
    Sider:myLayout.Sider,
    Header:myLayout.Header,
    myMenu,
    MenuItem:myMenu.Item,
  }
};
</script>
<style scoped>
.layout {
  background: #f5f7f9;
  position: relative;
  overflow: hidden;
  height: 100%;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>
