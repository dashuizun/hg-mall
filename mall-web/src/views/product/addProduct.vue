<template>
  <div class="add-product">
    <div class="add-product-w">
      <div class="add-product-img">
        <!--        <img src="#" alt="" />-->
        <label
          >添加图片：<input
            type="file"
            name="file"
            class="upload"
            accept="image/*"
            @change="bannerChange"
        /></label>
      </div>
      <div class="add-product-title">
        <h2>标题</h2>
        <input type="text" v-model="pTitle" />
      </div>
      <div class="add-product-price">
        <p>价格：</p>
        <input type="text" v-model="pPrice" />
      </div>
      <div class="add-product-submit">
        <button @click="subAddProduct">确认添加</button>
      </div>
      <div class="add-product-text">
        <h2>详情：</h2>
        <label>
          <textarea v-model="pText">xx</textarea>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { addProduct } from '@/network/product'

export default {
  name: 'addProduct',
  data() {
    return {
      pData: '',
      pTitle: '',
      pPrice: '',
      pText: '',
      pTime: ''
    }
  },
  methods: {
    subAddProduct() {
      if (this.pTitle) {
        alert('标题为空')
        return
      }
      if (this.pData) {
        alert('请添加图片')
        return
      }
      if (this.pPrice) {
        alert('价格为空')
        return
      }
      if (this.pText) {
        alert('内容为空')
        return
      }
      let myDate = new Date()
      this.pTime = myDate.toLocaleDateString()
      this.pData.append('uName', sessionStorage.getItem('uName'))
      this.pData.append('pTitle', this.pTitle)
      this.pData.append('pPrice', this.pPrice)
      this.pData.append('pText', this.pText)
      this.pData.append('pTime', this.pTime)
      addProduct(this.pData).then(res => {
        console.log(res)
        this.$router.push('/productManage')
      })
    },
    bannerChange(event) {
      // console.log(event.target.files[0])
      let file = event.target.files[0]
      let data = new FormData()
      // console.log(data)
      data.append('file', file, file.name)
      // 在这里添加数据
      data.append('data', 112)
      this.pData = data
      console.log(data)
      // console.log(this.pImage)
      // console.log('123', data.get('file'))
    }
  }
}
</script>

<style scoped>
.add-product {
  width: 1200px;
  height: 800px;
  margin: 0 auto;
  color: #000000;

  border: 2px solid #a593e0;
}
.add-product-w {
  position: relative;
  top: 30px;
  left: 100px;
  width: 1000px;
  /*background-color: red;*/
}
.add-product-img {
  float: left;
  width: 400px;
  height: 400px;
  margin-bottom: 60px;
  border: 1px solid #2d78f4;
}
.add-product-img input {
  width: 300px;
  height: 300px;
  margin-bottom: 60px;
}
.upload {
  padding: 4px 10px;
  height: 20px;
  line-height: 20px;
  border: 1px solid #999;
  text-decoration: none;
  color: #666;
}
.add-product-title {
  float: left;
  width: 580px;
  height: 100px;
  margin: 0 0 20px 20px;
}
.add-product-title h2 {
  font-size: 30px;
}
.add-product-title input {
  width: 400px;
}
.add-product-price {
  float: left;
  width: 580px;
  height: 100px;
  margin: 0 0 20px 20px;
  background-color: #f7f7e8;
}
.add-product-price p input {
  float: left;
  line-height: 100px;
  color: #000000;
  font-size: 20px;
}
.add-product-submit button {
  margin-top: 50px;
  margin-left: 100px;
  width: 160px;
  height: 80px;
}
.add-product-text {
  clear: both;
  width: auto;
  height: 260px;
  padding: 15px;
  border: 2px solid #a593e0;
}
.add-product-text h2 {
  margin-bottom: 20px;
}
.add-product-text textarea {
  width: 800px;
  height: 150px;
}
</style>
