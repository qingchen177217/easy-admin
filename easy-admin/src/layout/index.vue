<template>
    <div>
        <el-container class="app-wrapper">
            <el-aside width="200px" class="sliderbar">
                <el-scrollbar>
                    <Menu></Menu>
                </el-scrollbar>
            </el-aside>
            <el-container class="container">
                <el-header>Header</el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang='ts'>
import Menu from './Menu/index.vue'

</script>

<style lang='less' scoped>
@background: rgb(47, 65, 88);

.app-wrapper {
    width: 100vw;
    height: 100vh;

    .sliderbar {
        height: 100%;
        width: 250px;
        background-color: @background;
    }

}
</style>