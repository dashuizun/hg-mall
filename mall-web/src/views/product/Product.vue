<template>
  <div class="product">
    <div class="product-w">
      <div class="product-img">
        <img :src="showPro.pImage" alt="" />
      </div>
      <div class="product-title">
        <h2>{{ showPro.pTitle }}</h2>
        <p>商家：{{ showPro.uName }}</p>
      </div>
      <div class="product-price">
        <p>价格：</p>
        <p>{{ showPro.pPrice }}</p>
      </div>
      <div class="product-submit">
        <button @click="subBuy">立刻购买</button>
      </div>
      <div class="product-text">
        <h2>详情：</h2>
        <p>{{ showPro.pText }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { allProduct } from '@/network/product'
import { addOrder } from '@/network/allorder'

export default {
  name: 'Product',
  data() {
    return {
      pId: null,
      showPro: []
    }
  },
  created() {
    this.pId = this.$route.params.pId
    this.getAll()
  },
  methods: {
    getAll() {
      allProduct().then(res => {
        res.data.message.forEach(item => {
          item.pId.toString() === this.pId ? (this.showPro = item) : 0
        })
      })
    },
    subBuy() {
      let myDate = new Date()
      const oTime = myDate.toLocaleDateString()
      const _pImage = this.showPro.pImage.split('images/').pop()
      const oSellName = this.showPro.uName
      const oBuyName = sessionStorage.getItem('uName')

      addOrder(_pImage, this.showPro.pTitle, oBuyName, oSellName, oTime).then(
        res => {
          console.log(res)
          this.$router.push('/order')
        }
      )
    }
  }
}
</script>

<style scoped>
.product {
  width: 1200px;
  height: 800px;
  margin: 0 auto;
  color: #000000;

  border: 2px solid #a593e0;
}
.product-w {
  position: relative;
  top: 30px;
  left: 100px;
  width: 1000px;
  /*background-color: red;*/
}
.product-img img {
  float: left;
  width: 400px;
  height: 400px;
  margin-bottom: 60px;
}
.product-title {
  float: left;
  width: 580px;
  height: 100px;
  margin: 0 0 20px 20px;
}
.product-title h2 {
  font-size: 30px;
}
.product-price {
  float: left;
  width: 580px;
  height: 100px;
  margin: 0 0 20px 20px;
  background-color: #f7f7e8;
}
.product-price p {
  float: left;
  line-height: 100px;
  color: #000000;
  font-size: 20px;
}
.product-submit button {
  margin-top: 50px;
  margin-left: 100px;
  width: 160px;
  height: 80px;
}
.product-text {
  clear: both;
  width: auto;
  height: 260px;
  padding: 15px;
  border: 2px solid #a593e0;
}
.product-text h2 {
  margin-bottom: 20px;
}
.product-text p {
}
</style>
