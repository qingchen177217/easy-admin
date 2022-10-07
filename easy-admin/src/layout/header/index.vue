<template>
     <div class="navbar">
            <hanbao id="hanbao"></hanbao>
            <bread></bread>
            <div class="nav-right">
              <driver class="guide"></driver>
              <screenfull class="big" id="screenfull"></screenfull>
              <lang class="language" id="lang"></lang>
              <headout></headout>
            </div>
     </div>
</template>

<script setup lang='ts'>
import hanbao from './hanbaobutton.vue/index.vue'
import bread from './bread/index.vue'
import headout from './headout/index.vue'
import lang from './lang.vue'
import screenfull from './screenfull.vue'
import driver from './driver/index.vue'
</script>

<style lang='less' scoped>
   .navbar{
     height: 100%;
     width: 100%;
     display:flex;
     font-size:16px;
     box-shadow:1px 0 0 2px rgba(0,0,0,.1);
     padding:0 14px;
     align-items: center;
     box-sizing: border-box;
     position:relative;
     overflow:hidden;
    .nav-right{
      flex:1;
      display:flex;
      justify-content: right;
      align-items: center;
      .language{
        margin-right:20px;
      }
      .big{
        width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
      }
      .guide{
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
      }
    }
   }
</style>