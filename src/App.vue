<template>
    <router-view v-if="showView"/>
</template>

<script>
import { Admin, Read } from "@/utils/macro";
export default {
  name: "App",
  data() {
    return {
      userInfo: {
        role: []
      },
      showView: false
    };
  },
  provide() {
    return { GlobalApp: this };
  },
  methods: {
    init() {
      setTimeout(() => {
        this.userInfo.role = [Admin];
        this.showView = true
      }, 0);
    }
  },
  mounted() {
    this.init();
  }
};
</script>
