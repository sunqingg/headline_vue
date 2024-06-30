<template>
  数据: {{loginUser}}
  账号:<input class="ipt" type="text" v-model="loginUser.username">
  密码:<input class="ipt" type="text" v-model="loginUser.userPwd" name="" id="">
  <button @click="login"></button>
</template>
<script setup>
import {reactive} from "vue";
import request from "../utils/request.js";

let loginUser = reactive({
  username:"1",
  userPwd:"1"
})

let login =async () => {
  let {data}= await request.post("uer/login",loginUser)
  console.log(data)
}
</script>