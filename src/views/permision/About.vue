<template>
  <div class="about">
    <Button>所有人可见</Button>
    <RadioGroup type="button" v-permission="[Admin]">
      <Radio label="large" v-permission="[Admin]">仅Admin可见</Radio>
      <Radio label="default">Default</Radio>
      <Radio label="small">small</Radio>
    </RadioGroup>
    <Button type="primary" v-permission="[Admin]">仅Admin可见</Button>
    <h1 style="margin-bottom:30px">当前权限：{{ GlobalApp.userInfo.role }}</h1>
  </div>
</template>
<script>
import { Admin, Read } from "@/utils/macro";
import permission from "@/directive/permission";
import * as service from "@/api/about"

export default {
  inject: ["GlobalApp"],
  directives: {
    permission
  },
  data() {
    return {
      Admin,
      Read
    };
  },
  methods:{
    getData(){
      service.getList({
        a:0,
        b:'sss'
      }).then((data)=>{

      })
    }
  },
  mounted() {
    this.getData()
  }
};
</script>
