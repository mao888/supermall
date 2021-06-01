<template>
  <div class="goods">
    <goods-list-item v-for="(item, id) in goods" :goods-item="item" :key="id"/>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'

  export default {
    name: "GoodsList",
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods {
    display: flex;
    /* flex会造成所有数据都显示在一行 */
    flex-wrap: wrap;
    /* flex-wrap:让弹性盒元素在必要的时候拆行 */
    /* wrap包裹  规定灵活的项目在必要的时候拆行或拆列 */

    justify-content: space-around;
    /* 在弹性盒对象的 <div> 元素中的各项周围留有空白： */

    padding: 2px;
  }


</style>
