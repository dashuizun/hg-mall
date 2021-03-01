<template>
  <div class="home-recommend">
    <div class="home-recommend-title">
      <h2>热门推荐</h2>
    </div>
    <div class="home-recommend-item">
      <img src="#" />
      <p>小米10</p>
    </div>
    <div class="home-recommend-item">
      <img src="#" />
      <p>小米8</p>
    </div>
    <div class="home-recommend-item">
      <img src="#" />
      <p>小米8</p>
    </div>
    <div class="home-recommend-item">
      <img src="#" />
      <p>小米8</p>
    </div>
    <div class="home-recommend-item">
      <img src="#" />
      <p>小米8</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeRecommend'
}
</script>

<style scoped>
.home-recommend {
  width: 870px;
  height: 240px;
  background-color: #a3d2ca;
}
.home-recommend-title {
  height: 30px;
  margin: 10px 0 10px 20px;
  color: #000000;
  /*background-color: #000000;*/
}
.home-recommend-item {
  float: left;
  width: 150px;
  height: 150px;
  margin-top: 20px;
  margin-left: 20px;
  text-align: center;
  background-color: #f0e5d8;
}
.home-recommend-item img {
  width: 100%;
  height: 100px;
  margin-bottom: 12px;
}
.home-recommend-item p {
  color: #000000;
  font-size: 20px;
}
</style>
