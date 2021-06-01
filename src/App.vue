<template>
  <div id="app">
        <!-- 占位 -->
        <router-view/>
        <!-- 完全封装的独立组件 -->
        <main-tab-bar/>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabbar/MainTabBar'

  export default {
    name:'app',
    components: {
      MainTabBar
    }    
  }
</script>

<style>
  @import "assets/css/base.css";

</style>
