<template>
     <el-dropdown @command="handleCommand">
    <span class="el-dropdown-link">
        <i class="iconfont icon-language"></i>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="currentLanguage=='zh'" command="zh">中文</el-dropdown-item>
        <el-dropdown-item :disabled="currentLanguage=='en'" command="en">English</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang='ts'>
import { ref ,computed} from 'vue'
import {useI18n} from 'vue-i18n'
import store from '../../store/login'
const usestore=store()
const i18n=useI18n()

const currentLanguage=computed(()=>{//获取当前的语言
    return i18n.locale.value
})    
const handleCommand=(val:any)=>{
    i18n.locale.value=val
    usestore.changelang(val)
    localStorage.setItem('lang',val)
}


</script>

<style lang='less' scoped>
   .el-dropdown-link{
      width: 60px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      .iconfont{
        font-size:20px;
      }
   }
</style>
