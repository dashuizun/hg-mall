<template>
  <div class="home">
    <div class="home-w">
      <home-tab-bar />
      <!--      <home-recommend class="home-recommend" />-->
      <!--      <home-sales-record class="home-sales-record" />-->
      <home-product-all class="home-product-all" />
    </div>
  </div>
</template>

<script>
import HomeTabBar from '@/views/home/child/homeTabBar'
// import HomeRecommend from '@/views/home/child/homeRecommend'
// import HomeSalesRecord from '@/views/home/child/homeSalesRecord'
import HomeProductAll from '@/views/home/child/homeProductAll'
export default {
  name: 'Home',
  components: { HomeProductAll, HomeTabBar }
}
</script>

<style scoped>
.home {
  /*background-color: #f7f7e8;*/
}
.home-w {
  width: 1200px;
  margin: 0 auto;
}
.home-recommend {
  float: left;
}
.home-sales-record {
  float: right;
  margin-left: 10px;
  margin-bottom: 10px;
}
.home-product-all {
  clear: both;
}
</style>
