<template>
     <el-dropdown>
    <span class="el-dropdown-link">
        <el-avatar shape="square" :size="50" :src="squareUrl" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item  @click="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
     
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import store from '../../../store/login'
const usestore=store()
const squareUrl=ref(
    'https://img2.baidu.com/it/u=2833484760,1116678162&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1665162000&t=097d0cba93f1322fc897ad934013b807')

    const logout=()=>{
        usestore.logout()
    }


</script>

<style lang='less' scoped>

</style>