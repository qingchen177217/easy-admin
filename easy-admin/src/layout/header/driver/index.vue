<template>
     <div id="guide" @click.prevent.stop="handleGuide">
          <i class="iconfont icon-guide"></i>
     </div>
</template>

<script setup lang='ts'>
import { ref,onMounted} from 'vue'
import Driver from 'driver.js';
import 'driver.js/dist/driver.min.css';
import {steps} from './step'
import i18n from '../../../i18n/index'
import {watchLang}from '../../../i18n/watch'

const t=i18n.global.t//初始化i18n，进行使用



let driver:any

onMounted(()=>{
    initDriver()//在初始化时使用创建引导页
})

const initDriver=()=>{  //进行封装，多次使用
    driver=new Driver({
        className: 'scoped-class',        // className to wrap driver.js popover
  animate: true,                    // Whether to animate or not
  opacity: 0.75,                    // Background opacity (0 means only popovers and without overlay)
  padding: 10,                      // Distance of element from around the edges
  allowClose: true,                 // Whether the click on overlay should close or not
  overlayClickNext: false,          // Whether the click on overlay should move next
  doneBtnText: t('driver.doneBtnText'),              // Text on the final button
  closeBtnText: t('driver.closeBtnText'),            // Text on the close button for this step
  stageBackground: '#ffffff',       // Background color for the staged behind highlighted element
  nextBtnText: t('driver.nextBtnText'),              // Next button text for this step
  prevBtnText: t('driver.prevBtnText'),          // Previous button text for this step
    })
}

watchLang(initDriver)//引入监听函数，在语言进行改变时在进行一次调用
//这样底部按钮的语言就会根据i18n语言切换进行展示了

const handleGuide=()=>{
    driver.defineSteps(steps(t))
    driver.start()
}

</script>

<style lang='less' scoped>

     .iconfont{
         font-size:30px;
     }
</style>