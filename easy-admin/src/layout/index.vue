<template>
    <div>
        <el-container class="app-wrapper">
            <el-row>
                <el-col :span="24" class="el-col">
                    <Menu class="el-menu-vertical-demo"></Menu>
                </el-col>
            </el-row>
            <el-container class="container">
                <el-header class="header">
                    <Header></Header>
                </el-header>
                <el-main class="el-main">
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang='ts'>
import Menu from './Menu/index.vue'
import Header from './header/index.vue'
import store from '../store/login'
const usestore=store()

const asideWidth=computed(()=>{
   return usestore.sliderType?'210px':'63px'
})


</script>

<style lang='less' scoped>
@background: rgb(47, 65, 88);

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 250px;
  min-height:100vh;
}
.tac{
    height: 100vh;
    background-color: @background;
}
.app-wrapper {
    display:flex;
    width: 100vw;
    height: 100vh;
    .container{
        flex:1;
    }
}
.header{
    z-index:9999;
}
.el-col {
    height: 100vh;
    background-color: @background;
}
:deep(.el-header){
    padding:0;
}

</style>