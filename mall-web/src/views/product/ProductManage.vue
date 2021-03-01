<template>
  <div class="product-management">
    <div
      class="product-management-item"
      v-for="(item, index) in all"
      :key="index"
    >
      <div class="product-management-item-title">
        <h2>标题：{{ item.pTitle }}</h2>
      </div>
      <div class="product-management-item-img">
        <img :src="item.pImage" />
      </div>
      <div class="product-management-item-price">
        <p>价格：{{ item.pPrice }}</p>
      </div>
      <div class="product-management-item-text">
        <p>详细：{{ item.pText }}</p>
      </div>
      <div class="product-management-item-submit">
        <button @click="subDelete(item.pId)">删除</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Product, deleteProduct } from '@/network/product'

export default {
  name: 'ProductManagement',
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
      Product().then(res => {
        this.all = res.data.message
      })
    },
    subDelete(pId) {
      deleteProduct(pId).then(res => {
        console.log(res.data)
        this.$router.go(0)
      })
      // console.log(pId)
    }
  }
}
</script>

<style scoped>
.product-management {
  width: 1200px;
  height: 800px;
  margin: 0 auto;
  color: #000000;

  border: 2px solid #a593e0;
}
.product-management-item {
  position: relative;
  width: 1000px;
  height: 150px;
  margin: 20px 0 0 100px;
  border: 2px solid #ff5777;
}
.product-management-item p {
  margin: 10px 0 10px 20px;
}
.product-management-item-title {
  margin: 5px 0 0 10px;
}
.product-management-item-title h2 {
  display: inline;
  margin-right: 40px;
}
.product-management-item-img img {
  float: left;
  width: 100px;
  height: 100px;
  margin: 10px 30px 0 10px;
}
</style>
