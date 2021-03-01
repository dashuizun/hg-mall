<template>
  <div class="tab-bar-top">
    <div class="tab-bar-top-left">
      Hi，
      <a href="/login">请登录</a>
      <a href="/register">快速注册</a>
    </div>
    <div class="tab-bar-top-right">
      <div class="tab-bar-top-right-item">
        <img src="#" />
        <a href="/order">我的订单</a>
      </div>
      <div class="tab-bar-top-right-item">
        <img src="#" />
        <a href="/productManage">商品管理</a>
      </div>
      <div class="tab-bar-top-right-item">
        <img src="#" />
        <!--        <a href="#">消息</a>-->
        <a href="/logout">注销</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarTop'
}
</script>

<style scoped>
.tab-bar-top {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: white;
  font-size: 16px;

  background-color: #314e52;
}
.tab-bar-top img {
  vertical-align: middle;
}
.tab-bar-top-left {
  position: absolute;
  right: 50%;
  margin-right: 300px;
}
.tab-bar-top-left a {
  margin-left: 10px;
  margin-right: 30px;
  color: red;
}
.tab-bar-top-right {
  position: absolute;
  left: 50%;
  margin-left: 200px;
}
.tab-bar-top-right-item {
  float: left;
  margin-right: 30px;
}
.tab-bar-top-right-item a {
  color: white;
}
</style>
