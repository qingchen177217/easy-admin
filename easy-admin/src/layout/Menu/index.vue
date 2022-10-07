<template>
    <el-menu 
    active-text-color="#13c2c2" 
    background-color="#2f4158" 
    class="el-menu-vertical-demo" 
    text-color="#ccc"
    :default-active=defaultActive
    unique-opened
    router
    :collapse="!usestore.sliderType"
    >
        <el-sub-menu :index=item.id.toString() v-for="(item,index) in menulist" :key=item.id.toString()>
            <template #title>
                <el-icon>
                   <component  :is="iconList[index]"></component>
                </el-icon>
                <span>{{item.authName}}</span>
            </template>
            <el-menu-item :index="'/'+it.path" v-for="it in item.children" :key=it.id.toString @click="changePath(it.path)">
                <template #title>
                <el-icon>
                   <component :is="icon"></component>
                </el-icon>
                <span>{{it.authName}}</span>
               </template>
            </el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>

<script setup lang='ts'>
import { menuList } from '../../api/menu'
import store from '../../store/login'

const usestore =store()
const iconList=ref(['user','setting','shop','tickets','pie-chart'])
const icon=ref('menu')


const menulist = ref()
const initMenuList = async () => {
    menulist.value = await menuList() as any
}
const defaultActive=ref(sessionStorage.getItem('path')||'user')

const changePath=(path:string)=>{
       sessionStorage.setItem('path',`/${path}`)
}
initMenuList()
</script>

<style lang='less' scoped>
:deep(.is-active) {
    background-color: #13c2c2 !important;
    color: #fff !important;
}
</style>