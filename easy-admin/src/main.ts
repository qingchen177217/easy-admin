import { createApp } from 'vue'
import './assets/css/reset.css'
import App from './App.vue'
import router from './router/index'
import {createPinia} from 'pinia'
import './icon.css'
import 'element-plus/dist/index.css'
import './router/permission'//导入封装好的路由守卫，
import * as ElIcon from '@element-plus/icons-vue'
//引入全局icon，将所有icon进行全局注册
import i18n from './i18n/index'
import filterTimes from './utils/filter'

const app=createApp(App)

for (const [key, component] of Object.entries(ElIcon)) {
    //注册全局组件icon
    app.component(key, component)
}

const pinia =createPinia()//全局注册pinia

app.config.globalProperties.$filters={
  filterTimes//注册全局组件
}
app.use(router)
app.use(pinia)
app.use(i18n)
app.mount('#app')
