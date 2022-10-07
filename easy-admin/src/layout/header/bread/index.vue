<template>
     <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item,index) in breadList" :key="index">
       <span class="no-redirect" v-if="index===breadList.length-1">
        {{item.name}}
       </span>
       <span v-else class="redirect" @click="handleRedirect(item.path)">{{item.path}}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>  
</template>

<script setup lang='ts'>
import { ref,watch} from 'vue'
import  {useRoute,useRouter} from 'vue-router'//获取路由表
const route =useRoute()//收集当前的路由
const router=useRouter()//路由的跳转


const  breadList=ref([])as any

const initBreadList=()=>{
    breadList.value=route.matched
}

const handleRedirect=(path:any)=>{
    router.push(path)
}


watch(route,()=>{
    initBreadList()
},{deep:true,immediate:true})

</script>

<style lang='less' scoped>
.no-redirect{
    color:#97a8be;
    cursor:text;
}

.redirect{
    color:#666;
    font-weight:600;
    cursor: pointer;
    &:hover{
        color:#304156;
    }
}

</style>