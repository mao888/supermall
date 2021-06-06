<template>
    <div id="home">
        <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
        
        <scroll class="content" 
                ref="scroll"
                :probe-type="3"
                @scroll="contentScroll"
                :pull-up-load="true"
                @pullingUp="loadMore">
          <home-swiper :banners="banners"></home-swiper>
          <recommend-view :recommends="recommends"/>
          <feature-view/>
          <tab-control class="tab-control"
                    :titles="['流行', '新款', '精选']"
                    @tabClick="tabClick"/>
          <good-list :goods="showGoods"/>
        </scroll>

        <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>

        <!-- <ul>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
          <li>列表</li>
        </ul> -->
    </div>
</template>

<script>

  // 导入子组件
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

// 导入公共组件
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll.vue'
  import BackTop from 'components/content/backTop/BackTop'
   

// 导入方法 额外数据
  import { getHomeMultidata, getHomeGoods } from "network/home"



    export default {
        name:"Home",
        components:{
            HomeSwiper,
            RecommendView,
            FeatureView,

            NavBar,
            TabControl,
            GoodList,
            Scroll,
            BackTop
              

        },

        data() {
            return {
                banners: [],
                recommends: [],
                goods: {
                  'pop': {page: 0, list: []},
                  'new': {page: 0, list: []},
                  'sell': {page: 0, list: []},
                },
                currentType: 'pop',
                isShowBackTop: true
            }
    },

    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },

    //声明周期函数  组件创建完了  请求数据
    created() {
      // 1.请求多个数据
      //  异步操作  
      this.getHomeMultidata()

      // 2.请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },

    methods: {
      /**
       * 事件监听相关的方法
       */
      tabClick(index) {
        switch (index) {
          case 0:
            // console.log(1);
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },
      backClick() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      contentScroll(position) {
        this.isShowBackTop = (-position.y) > 1000
      },
      loadMore() {
        this.getHomeGoods(this.currentType)
      },
      /**
       * 网络请求相关的方法
       */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // this.result = res;
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        // console.log(type);
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res => {

          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          this.$refs.scroll.finishPullUp();
        })
      }
    }

    }
</script>


<style scoped>
        #home {
        /*padding-top: 44px;*/
        height: 100vh;
        /* vh ->viewport height */
        position: relative;
    }

    .home-nav {
        background-color: var(--color-tint);
        color: #fff;

        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;
    }

    .tab-control {
        position: sticky;
        /* 粘性属性 跟随页面移动sticky  但是到顶端会停留fixed */
        top: 44px;
        z-index: 9;
        /* 使tab-bar不被下面的图片盖住 */
    }

    .content {
        /* overflow: hidden; */

        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
    }

    /* .content {
        height: calc(100% -93px);
       
        overflow: hidden;
        margin-top: 44px;
      } */
</style>
