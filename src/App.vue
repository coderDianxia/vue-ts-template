<script setup lang="ts">
import { appStore } from "@/store/modules/app";
import { ref } from "vue";
import request from "@/request";
let a: number = 1000000022;
const btnFunc = () => {
  request
    .get({
      url: "/1api/biz/proProjectContract/api/receive/projectId/" + a,
    })
    .then((res) => {
      console.log(res);
    });
};
// let userInfo = appStore.title;
</script>

<template>
  <div class="body">
    <el-button type="primary" size="default" @click="btnFunc"
      >测试get请求</el-button
    >

    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
.body {
  background-color: $color;
  width: 100vw;
  height: 100vh;
}
</style>
