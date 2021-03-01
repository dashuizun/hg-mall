<template>
  <div class="order">
    <div class="order-item" v-for="item in all" :key="item">
      <div class="order-item-title">
        <h2>{{ item.oTime }}</h2>
        <p>订单编号：{{ item.oId }}</p>
      </div>
      <div class="order-item-text">
        <img :src="item.pImage" alt="" />
        <p>卖家：{{ item.oSellName }}</p>
        <br />
        <p>买家：{{ item.oBuyName }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { allorder } from '@/network/allorder'

export default {
  name: 'Order',
  data() {
    return {
      all: []
    }
  },
  created() {
    allorder().then(res => {
      let _res = Array.from(res.data.message)
      // console.log(_res)
      _res.forEach(item =>
        item.oBuyName === sessionStorage.getItem('uName')
          ? this.all.push(item)
          : 0
      )
    })
  }
}
</script>

<style scoped>
.order {
  width: 1200px;
  height: 800px;
  margin: 0 auto;
  color: #000000;

  border: 2px solid #a593e0;
}
.order-item {
  position: relative;
  width: 1000px;
  height: 150px;
  margin: 20px 0 0 100px;
  border: 2px solid #ff5777;
}
.order-item-title {
  margin: 5px 0 0 10px;
}
.order-item-title h2 {
  display: inline;
  margin-right: 40px;
}
.order-item-title p {
  display: inline;
}
.order-item-text img {
  float: left;
  width: 100px;
  height: 100px;
  margin: 10px 30px 0 10px;
}
.order-item-text p {
  float: left;
  margin-top: 10px;
}
</style>
