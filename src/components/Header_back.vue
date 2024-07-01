<script setup>

</script>

<template>
<div>
  <h1 class="h1">欢迎使用日程管理</h1>
  <div class="optionDiv">
    <router-link to="/login">
      <button class="bls">登录</button>
    </router-link>
  <router-link to="/regist">
    <button class="bls">注册</button>
  </router-link>

  </div>
<!--  <hr>-->
  <br>
</div>


</template>

<style scoped lang="less">
  .h1 {
    color: aquamarine;
    text-align: center;
  }
  .bls {
    border: solid 2px aquamarine;
    background-color: #ecece0;
    margin: 1px;
  }

  .optionDiv{
    float: right;
  }

</style>