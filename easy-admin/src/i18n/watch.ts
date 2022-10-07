import {createBlock, watch}from 'vue'
import store from '../store/login'

//监听语言的切换，进行转换语言
const usestore=store()
export const watchLang=(...args:any)=>{
    watch(()=>usestore.langChange,()=>{
        args.forEach((cb:any)=>cb(usestore.langChange))
    },{deep:true})
}



























