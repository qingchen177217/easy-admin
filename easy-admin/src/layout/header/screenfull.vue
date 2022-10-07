<template>
  <i class="iconfont icon-quanping" @click="handleFullScreen"></i>
</template>

<script setup lang='ts'>
import screenfull from 'screenfull'
//screenfull的属性只有在isEnabled使用后才会出现

const handleFullScreen = (e: any) => {
  if (screenfull.isEnabled) {
    //先判读是否可以使用screenfull，开启插件
    screenfull.toggle()
    if (!screenfull.isFullscreen) {
      e.target.classList.remove('icon-quanping')
      e.target.classList.add('icon-tuichuquanping')
    } else {
      e.target.classList.remove('icon-tuichuquanping')
      e.target.classList.add('icon-quanping')
    }
  }
}
</script>

<style lang='less' scoped>
.iconfont {
  font-size: 25px;
}
</style>