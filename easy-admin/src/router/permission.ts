// 路由守卫
import router from './index'

import store from '../store/login'

// 设置白名单，用户没有登录时也可以访问的页面
let whiteList=['/loading']

router.beforeEach((to,from,next)=>{
    const  usestore=store()
    document.title=to.meta.title as string
     if(usestore.Goodtoken){//判断当token存在时，
        if(to.path=='/loading'){//当path是从登录页来的时候，跳转到首页
            next('/')
        }else{//如果是其他页面则不指定去的地方
            next()
        }
    }else{//如果没有token值
        if(whiteList.includes(to.path)){
            next()
        }else{
            next('/loading')
        }
    }
})