import {createRouter,createWebHashHistory}from 'vue-router'

const routes=[
    {
        path:"/loading",
        name:"Loading",
        meta:{
            title:"登录"
        },
        component:()=>import('../views/loading/loading.vue')
    },
    {
        path:"/",
        name:"布局",
        meta:{
            title:"布局"
        },
        component:()=>import('../layout/index.vue'),
        redirect:"/users",
        children:[
            {
                path:"/users",
                component:()=>import('../views/users/index.vue')
            },
            {
                path:"/rights",
                component:()=>import('../views/rights/index.vue')
            },
            {
                path:"/roles",
                component:()=>import('../views/rights/roles.vue')
            },
            {
                path:"reports",
                component:()=>import('../views/report/index.vue')
            },
            {
                path:"/orders",
                component:()=>import('../views/orders/index.vue')
            },
            {
                path:"/goods",
                component:()=>import('../views/goods/index.vue')
            },
            {
                path:"/params",
                component:()=>import('../views/goods/params.vue')
            },{
                path:"categories",
                component:()=>import('../views/goods/categories.vue')
            }
        ]
    },
    
]

const router=createRouter({
    history:createWebHashHistory(),
    routes
})

export default router



