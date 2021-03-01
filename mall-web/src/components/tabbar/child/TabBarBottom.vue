<template>
  <div class="tab-bar-bottom">
    <div class="tab-bar-bottom-w">
      <div class="tab-bar-bottom-logo">
        <a href="/"><img src="#"/></a>
      </div>
      <div class="tab-bar-bottom-search">
        <input type="text" placeholder="输入关键词" v-model="keySearch" />
        <button @click="subSearch">搜索</button>
      </div>
      <div class="tab-bar-bottom-nav">
        <ul>
          <li>
            <a href="/">首页</a>
          </li>
          <!--          <li>-->
          <!--            <a href="#">易物区</a>-->
          <!--          </li>-->
          <!--          <li>-->
          <!--            <a href="#">买卖区</a>-->
          <!--          </li>-->
        </ul>
      </div>
      <div class="tab-bar-bottom-sell">
        <button @click="urlAdd">发布闲置</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarBottom',
  data() {
    return {
      keySearch: ''
    }
  },
  methods: {
    urlAdd() {
      this.$router.push('/addProduct')
    },
    subSearch() {
      this.$router.push('/search/' + this.keySearch)
    }
  }
}
</script>

<style scoped>
.tab-bar-bottom {
  width: 100%;
  margin-bottom: 20px;
  border-bottom: 3px solid #c0c0c0;
  /*background-color: pink;*/
}
.tab-bar-bottom-w {
  position: relative;
  width: 1200px;
  height: 80px;
  margin: 10px auto;
}
.tab-bar-bottom-logo {
  float: left;
  line-height: 30px;
  background-color: red;
}
.tab-bar-bottom-logo img {
  width: 180px;
  height: 60px;
  margin: 0 auto;
}
.tab-bar-bottom-search {
  float: left;
  line-height: 60px;
  margin-left: 100px;
}
.tab-bar-bottom-search input {
  width: 400px;
  height: 30px;
  margin: 0 0;
  padding: 0 10px;
}
.tab-bar-bottom-search button {
  width: 80px;
  height: 30px;
}
.tab-bar-bottom-nav {
  position: absolute;
  left: 300px;
  top: 50px;
}
.tab-bar-bottom-nav ul {
  list-style: none;
}
.tab-bar-bottom-nav a {
  color: #000000;
}
.tab-bar-bottom-nav ul li {
  float: left;
  margin-right: 40px;
  font-size: 20px;
}
.tab-bar-bottom-sell {
  float: left;
  line-height: 60px;
  margin-left: 150px;
}
.tab-bar-bottom-sell button {
  width: 80px;
  height: 40px;
}
</style>
