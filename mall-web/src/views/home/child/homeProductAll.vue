<template>
  <div class="home-product-all">
    <h2>所有商品</h2>
    <div class="home-product-all-item" v-for="item in all" :key="item">
      <a :href="/product/ + item.pId">
        <img :src="item.pImage" alt="" />
        <p>{{ item.pTitle }}</p>
        <p>¥ {{ item.pPrice }}</p>
      </a>
    </div>
  </div>
</template>

<script>
import { allProduct } from '@/network/product'

export default {
  name: 'homeProductAll',
  data() {
    return {
      all: []
    }
  },
  created() {
    this.getProduct()
    // this.$store.commit('addUserProduct')
  },
  methods: {
    getProduct() {
      allProduct().then(res => {
        this.all = res.data.message
      })
    }
  }
}
</script>

<style scoped>
.home-product-all {
  width: 100%;
  height: 1300px;
  background-color: #a3d2ca;
}
.home-product-all h2 {
  padding-top: 20px;
  margin-left: 30px;
  color: #000000;
  font-size: 30px;
}
.home-product-all-item {
  float: left;
  margin-top: 40px;
  margin-left: 40px;
  width: 250px;
  height: 250px;
  color: #000000;
  font-size: 20px;
  text-align: center;
  background-color: #f0e5d8;
}
.home-product-all-item img {
  width: 100%;
  height: 150px;
}
.home-product-all-item p {
  margin-top: 10px;
}
</style>
