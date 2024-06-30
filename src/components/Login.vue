<script setup>
import {reactive,ref} from "vue";
import request from "../utils/request.js";
import {useRouter} from 'vue-router'
const router = useRouter()

let loginUser = reactive({
  username:"zhangsan",
  userPwd:"123456"
})
let usernameMsg = ref("")
let checkUserName = () =>{

}
async function login() {
  let {data} = await request.post("user/login",loginUser)
  console.log(data)
  if (data.code === 200){
    alert("登录成功!");
    router.push("headlinenews")
  }else if (data.code === 501) {
    alert("账号不存在!");
    return false
  }else if (data.code === 503) {
    alert("密码错误!")
    return false
  }
}

</script>

<template>
<h2 class="h1">请登录</h2>
  <table class="tab" cellpadding="0px">
    <tr class="ltr">
      <td>请输入账号</td>
      <td ><input class="ipt" type="text" v-model="loginUser.username" ><span id="usernameMsg" v-text="usernameMsg"></span></td>
    </tr>
    <tr class="ltr">
      <td >请输入密码</td>
      <td ><input class="ipt" type="text" v-model="loginUser.userPwd" name="" id=""></td>
    </tr>
    <tr class="ltr">
      <td colspan="2" class="buttonContainer">
<!--        <input type="text">-->
<!--        <input type="text">-->
<!--        <input type="text">-->
<!--        <router-link to="/showSchedule">-->
          <button type="submit" class="btn1" @click="login()">登录</button>
<!--        </router-link>-->

        <button type="reset"  class="btn1">重置</button>
        <router-link to="/regist">
        <button type="submit" class="btn1">去注册</button>
        </router-link>
      </td>
    </tr>
  </table>

</template>

<style scoped lang="less">
.h1 {
  color: aquamarine;
  text-align: center;
}
.tab{
  width: 500px;
  border: aquamarine 2px solid;
  border-radius: 5px;
  margin: auto;
}
.ltr td {
  border: solid 1px powderblue;
  margin: auto;

  //width: 20px;
}
.ipt{
  border: 0;
  width: 50%;

}
//tr {
//  height: 20px;
//}
.buttonContainer {
  text-align: center;
}
.btn1 {
  border: solid 2px powderblue;
  border-radius: 4px;
  //width:20px;
  //height: 10px;
  margin-left: 10px;

  display: inline-block;
  background-color: antiquewhite;
  // 调整button 大小 设置文字的大小!!! 不能加width
  font-size: 15px;

}
</style>