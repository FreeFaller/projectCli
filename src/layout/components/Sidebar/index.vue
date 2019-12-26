<template>
  <Sider hide-trigger :style="{ background: '#fff', overflow: 'auto' }">
    <Menu
      :key="findAllOpenNames().join()"
      theme="dark"
      width="auto"
      :active-name="menuActiveName"
      :open-names="findAllOpenNames()"
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
    },
    menuActiveName(){// 当前菜单选中的name
      return this.$route.meta.title // 当前路由
    },
  },
  methods:{
    findAllOpenNames(){
      let names = []
      let router = this.$router.options.routes
      const curRoute = this.$route.path
      if (curRoute) {
        let pathList = curRoute.split('/')
        if (pathList.length > 0) {
          pathList.forEach(item=>{
            let index = 0
            router.forEach((ele,i) =>{
              if (ele.path && (ele.path === item || ele.path === '/'+item) ) {
                if (ele.meta) {
                  index = i
                  names.push(ele.meta.title)
                }
              }
            })
            if (router[index].children) {
              router = router[index].children
            }
          })
        }
      }
      return names
    }
  }
};
</script>
