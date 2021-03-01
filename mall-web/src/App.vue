<template>
  <div id="nav">
    <!--    <router-link to="/">Home</router-link>-->
    <TabBar></TabBar>
  </div>
  <router-view />
</template>

<style lang="scss">
@import './assets/css/base.css';
template {
  background-color: #f7f7e8;
}
</style>
<script>
import TabBar from './components/tabbar/TabBar'
export default {
  components: { TabBar }
}
</script>
