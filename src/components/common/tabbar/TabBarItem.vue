<template>
<!-- 所有item都展示同一图片，同一文字 -->
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
        <!-- <div><slot name="item-text"></slot></div> -->
        <!-- v-bind动态绑定一个style，并把style抽到计算属性里 -->
        <!-- <img src="../../assets/img/tabbar/home.png" alt=""> -->
        <!-- <div>首页</div> -->
    </div>
</template>

<script>
    export default {
        name:"TabBarItem",
        props:{                         //父组件向子组件传递数据
            path:String,
            activeColor:{
                type:String,
                default:'red'
            }

        },
        data(){
            return{
                // isActive:false,
            
            }
        },
        // 计算属性
        computed: {
            isActive(){
                // home  -> item1(/home) =true
                // home  -> item1(/category) =f
                // home  -> item1(/cart) =f
                // home  -> item1(/profile  ) =f
                return this.$route.path.indexOf(this.path)!==-1;   
            },
            activeStyle(){
                return this.isActive? {color:this.activeColor}:{}
            }
        },
        methods: {
            itemClick(){
                // this.isActive=true,
                // console.log(this.path,1111111111111111);
                this.$router.push({path:this.path})
                // 所有组件里面都有this.router对象
            }
        }
    }
    
</script>

<style scoped>
    .tab-bar-item {
        flex: 1;
        text-align: center;
        height: 49px;
        font-size: 14px;
    }

    .tab-bar-item img{
        width: 24px;
        height: 24px;
        margin-top: 3px;

        /* 清除图片下面和文字之间的空间 */
        vertical-align: middle;
        margin-bottom: 2px;
    }
    /* .active{
        color:red;
        } */
</style>