<script setup>
import Header from "./components/Header.vue"
// import Login from "./components/Login.vue"
// import Regist from "./components/Regist.vue"
// import ShowSchedule from "./components/ShowSchedule.vue"
import test from "./components/test.vue"
import {computed} from "vue";
import { useRoute } from 'vue-router'
const route = useRoute() // 路由信息对象
const isHeader =  computed(() => {
  return route.name !== "Login" && route.name !== "Register" && route.name !== "addNews";
})

</script>

<template>
<!--  <Header></Header>-->
<!--  <test1></test1>-->

  <Header v-show="isHeader"></Header>
<!--    <hr>-->
  <router-view></router-view>

</template>

<style scoped>

</style>
