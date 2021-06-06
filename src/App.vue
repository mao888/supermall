<template>
  <div id="app">
        <!-- 占位 -->
        <keep-alive exclude="Detail">
          <router-view></router-view>
        </keep-alive>
        <!-- 完全封装的独立组件 -->
        <main-tab-bar/>
        <icon></icon>
       <svg-icon></svg-icon>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabbar/MainTabBar'
  import Icon from 'components/content/Icon/Icon.vue'
  import SvgIcon from 'components/content/Icon/svg.vue'

  export default {
    name:'app',
    components: {
      MainTabBar,
      Icon,
      SvgIcon
    }    
  }
</script>

<style>
  @import "assets/css/base.css";
  #app {
    position: relative;
  }
</style>
