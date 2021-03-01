<template>
  <div class="tab-bar">
    <tab-bar-top></tab-bar-top>
    <tab-bar-bottom></tab-bar-bottom>
  </div>
</template>

<script>
import TabBarTop from '@/components/tabbar/child/TabBarTop'
import TabBarBottom from '@/components/tabbar/child/TabBarBottom'
export default {
  name: 'TabBar',
  components: { TabBarBottom, TabBarTop }
}
</script>

<style scoped>
.tab-bar {
  color: #ff5777;
}
</style>
