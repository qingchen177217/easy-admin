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
        name:"导航栏",
        meta:{
            title:"布局"
        },
        component:()=>import('../layout/index.vue'),
        redirect:"/users",
        children:[
            {
                path:"/users",
                name:"用户列表",
                component:()=>import('../views/users/index.vue')
            },
            {
                path:"/rights",
                name:"权限列表",
                component:()=>import('../views/rights/index.vue')
            },
            {
                path:"/roles",
                name:"角色管理",
                component:()=>import('../views/rights/roles.vue')
            },
            {
                path:"reports",
                name:"数据报表",
                component:()=>import('../views/report/index.vue')
            },
            {
                path:"/orders",
                name:"订单列表",
                component:()=>import('../views/orders/index.vue')
            },
            {
                path:"/goods",
                name:"商品列表",
                component:()=>import('../views/goods/index.vue')
            },
            {
                path:"/params",
                name:"分类参数",
                component:()=>import('../views/goods/params.vue')
            },{
                path:"categories",
                name:"商品分类",
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



