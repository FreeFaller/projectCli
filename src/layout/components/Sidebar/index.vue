<template>
  <Sider hide-trigger width = 180 :style="{ background: '#fff', overflow: 'auto' }">
    <Menu
      :key="findAllOpenNames().join()"
      theme="dark"
      width=180
      :active-name="menuActiveName"
      :open-names="findAllOpenNames()"
    >
      <SidebarItem
        v-for="route in routes"
        :key="route.path"
        :route="route"
        :base-path="route.path"
        :style="{background:'#2A313C'}"
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
      if (this.$route.meta.title) {
        return this.$route.meta.title // 当前路由
      }else{
        //沿父路由上上查询
        let matched = this.$route.matched
        if (matched.length > 0) {
          for (let i = matched.length - 1; i >= 0; i--) {
            if (matched[i].meta.title) {
              return matched[i].meta.title
            }else{
              continue
            }
          }
        }
      }
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
