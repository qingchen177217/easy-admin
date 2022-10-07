<template>
          <span class="icon">
              <i class="iconfont icon-indentdecrease" @click="toggleClick"></i>
          </span>
</template>

<script setup lang='ts'>
import store from '../../../store/login'

const toggleClick=(e:any)=>{
const useStore=store()
   if(useStore.sliderType){
      e.target.classList.remove('icon-indentdecrease')
      e.target.classList.add('icon-indent-increase')
   }else{
      e.target.classList.remove('icon-indent-increase')
      e.target.classList.add('icon-indentdecrease')
   }
   useStore.changeSiderType()
   //当点击的时候，改变sliderType的值
}



</script>

<style lang='less' scoped>
  .icon{
     width: 60px;
     height: 60px;
     line-height: 60px;
     .iconfont{
        font-size:30px;
     }
  }
</style>