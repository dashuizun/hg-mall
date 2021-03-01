<template>
  <div class="search">
    <div
      class="search-item"
      v-for="(item, index) in all"
      :key="index"
      @click="goSearch(item.pId)"
    >
      <div class="search-item-title">
        <h2>标题：{{ item.pTitle }}</h2>
      </div>
      <div class="search-item-img">
        <img :src="item.pImage" />
      </div>
      <div class="search-item-price">
        <p>价格：{{ item.pPrice }}</p>
      </div>
      <div class="search-item-text">
        <p>详细：{{ item.pText }}</p>
      </div>
    </div>
  </div>
</template>

<script>
// import { allorder } from '@/network/allorder'

import { allProduct } from '@/network/product'

export default {
  name: 'Search',
  data() {
    return {
      all: [],
      key: null
    }
  },
  created() {
    // this.$router.go(0)
    this.getProduct()
    this.key = this.$route.params.Key
    // console.log(this.key)
    // this.$store.commit('addUserProduct')
  },
  methods: {
    getProduct() {
      allProduct().then(res => {
        res.data.message.forEach(item => {
          // console.log(item.pTitle, item.pTitle.length)
          if (item.pText.indexOf(this.key) !== -1) {
            this.all.push(item)
            console.log('---------------')
          }
        })
      })
    },
    goSearch(pId) {
      this.$router.push('/product/' + pId)
    }
  }
}
</script>

<style scoped>
.search {
  width: 1200px;
  height: auto;
  margin: 0 auto;
  padding: 20px 0;
  color: #000000;

  border: 2px solid #a593e0;
}
.search-item {
  position: relative;
  width: 1000px;
  height: 150px;
  margin: 20px 0 0 100px;
  border: 2px solid #ff5777;
}
.search-item p {
  margin: 10px 0 10px 20px;
}
.search-item-title {
  margin: 5px 0 0 10px;
}
.search-item-title h2 {
  display: inline;
  margin-right: 40px;
}
.search-item-img img {
  float: left;
  width: 100px;
  height: 100px;
  margin: 10px 30px 0 10px;
}
</style>
