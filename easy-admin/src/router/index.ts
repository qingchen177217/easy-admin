import {createRouter,createWebHashHistory}from 'vue-router'
import Home from '../views/home.vue'
const routes=[
    {
        path:"/",
        name:"Home",
        meta:{
            title:"首页"
        },
        component:Home
    },
    {
        path:"/loading",
        name:"Loading",
        meta:{
            title:"登录"
        },
        component:()=>import('../views/loading/loading.vue')
    },
    {
        path:"/about",
        name:"About",
        meta:{
            title:"关于"
        },
        component:()=>import('../views/about.vue')
    }
]

const router=createRouter({
    history:createWebHashHistory(),
    routes
})

export default router



