<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
export default {
    name:"TabBar"
}
</script>

<style scoped>
    #tab-bar{
    display: flex;
    background-color:#f6f6f6; 
    
    /* 定位到下面 */
    position:fixed;
    /* flexed不行 用absolute */
    left: 0;
    right: 0;
    bottom: 0;

    /* 下面的分类栏上面弄阴影 */
    box-shadow: 0 -2px 1px rgba(100, 100, 100, .2);

  }

</style>