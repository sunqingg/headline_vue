<script>

</script>

<template>
  <h1 class="h1">欢迎使用日程管理</h1>
  <h2 class="h1">请注册</h2>
  <table class="tab" cellpadding="0px">
    <tr class="ltr">
      <td>请输入账号</td>
      <td ><input class="ipt" type="text"><span id="usernameMsg" v-text="usernameMsg"></span></td>
    </tr>
    <tr class="ltr">
      <td >请输入密码</td>
      <td ><input class="ipt" type="text" name="" id=""></td>
    </tr>
    <tr class="ltr">
      <td >确认密码</td>
      <td ><input class="ipt" type="text" name="" id=""></td>
    </tr>
    <tr class="ltr">
      <td colspan="2" class="buttonContainer">
        <!--        <input type="text">-->
        <!--        <input type="text">-->
        <!--        <input type="text">-->
        <button type="submit" class="btn1">注册</button>
        <button type="reset"  class="btn1">重置</button>
        <router-link to="/headlinenews">
        <button type="submit" class="btn1">去登录</button>
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