import { createApp } from 'vue'
import './assets/css/reset.css'
import App from './App.vue'
import router from './router/index'

const app=createApp(App)
router.beforeEach((to,from,next)=>{
    document.title=to.meta.title as string
    next()
})
router.afterEach((to,from)=>{})

app.use(router)
app.mount('#app')
