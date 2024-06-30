<script>
import {defineUser} from "../store/UserStore.js";
import pinia from "../pinia.js";
import {reactive} from "vue";

let user = reactive(defineUser(pinia))

</script>

<template>
  <h1 class="h1">欢迎使用日程管理</h1>
  <div class="prompt">
    <span>欢迎{{user}}</span>
    <button type="submit" class="btn1">退出登录</button>
    <button type="submit" class="btn1">查看我的日程</button>
  </div>

  <br>

  <table class="tab">
    <tr class="ltr">
      <td>编号</td>
      <td>内容</td>
      <td>进度</td>
      <td>操作</td>
    </tr>
    <tr class="ltr">
      <td></td>
      <td></td>
      <td></td>
      <td class="buttonContainer">
        <button type="submit" class="btn1">删除</button>
        <button type="submit" class="btn1">保存操作</button>
      </td>
    </tr>
    <tr class="ltr">
      <td></td>
      <td></td>
      <td></td>
      <td class="buttonContainer">
        <button type="submit" class="btn1">删除</button>
        <button type="submit" class="btn1">保存操作</button>
      </td>
    </tr>
    <tr class="ltr">
      <td class="buttonContainer" colspan="4">
        <button type="submit" class="btn1">新增日程</button>
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
.prompt {
  float: right;
}
</style>