<template>
  <div class="home-tab-bar">
    <div class="home-tab-bar-nav">
      <div class="home-tab-bar-nav-item" @click="$router.push('/search/手机')">
        <h2>手机</h2>
        <p>></p>
      </div>
      <div class="home-tab-bar-nav-item" @click="$router.push('/search/数码')">
        <h2>数码</h2>
        <p>></p>
      </div>
      <div class="home-tab-bar-nav-item" @click="$router.push('/search/玩具')">
        <h2>玩具</h2>
        <p>></p>
      </div>
      <div class="home-tab-bar-nav-item" @click="$router.push('/search/衣服')">
        <h2>衣服</h2>
        <p>></p>
      </div>
      <div class="home-tab-bar-nav-item" @click="$router.push('/search/潮鞋')">
        <h2>潮鞋</h2>
        <p>></p>
      </div>
    </div>
    <div class="home-tab-bar-views">
      <div class="home-tab-bar-views-img">
        <img src="../../../../public/img/top.jpg" />
      </div>
    </div>
    <div class="home-tab-bar-user">
      <!--      <img src="#" />-->
      <h2>用户：{{ uName }}</h2>
      <p>发布的商品：</p>
      <p>{{ uProductLength }}</p>
      <p>已买到的商品：</p>
      <p>{{ uOrderLength }}</p>
    </div>
  </div>
</template>

<script>
import { allorder } from '@/network/allorder'
import { allProduct } from '@/network/product'

export default {
  name: 'homeTabBar',
  data() {
    return {
      uOrderLength: 0,
      uProductLength: 0,
      uName: sessionStorage.getItem('uName')
    }
  },
  created() {
    this.CuOrderLength()
    this.CuProductLength()
  },
  computed: {},
  methods: {
    CuOrderLength() {
      allorder().then(res => {
        let _res = res.data.message
        _res.forEach(item => {
          item.oBuyName === sessionStorage.getItem('uName')
            ? this.uOrderLength++
            : 0
        })
      })
    },
    CuProductLength() {
      allProduct().then(res => {
        let _res = res.data.message
        _res.forEach(item => {
          item.uName === sessionStorage.getItem('uName')
            ? this.uProductLength++
            : 0
        })
      })
    }
  }
}
</script>

<style scoped>
.home-tab-bar {
  height: 320px;
  margin: 20px auto;
  background-color: #a3d2ca;
}
.home-tab-bar-nav {
  float: left;
  width: 200px;
  line-height: 40px;
  color: #000000;
  background-color: #a3d2ca;
}
.home-tab-bar-nav-item {
  position: relative;
  margin: 20px;
}
.home-tab-bar-nav-item p {
  position: absolute;
  top: 2px;
  right: 3px;
}
.home-tab-bar-views-img {
  float: left;
  width: 800px;
  height: 320px;
  /*background-color: blue;*/
}
.home-tab-bar-views-img img {
  width: 100%;
  height: 100%;
}
.home-tab-bar-user {
  float: left;
  margin-top: 40px;
  margin-left: 25px;
  width: 150px;
  height: 200px;
  text-align: center;
  color: #000000;
  /*background-color: pink;*/
}
.home-tab-bar-user img {
  align-content: center;
  width: 80px;
  height: 80px;
}
</style>
