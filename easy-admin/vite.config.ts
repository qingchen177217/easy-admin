import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


export default defineConfig(({mode})=>{
  // 获取当前环境的配置
  const env=loadEnv(mode,process.cwd());   
  //可以读取到.env的环境变量
  return{
    plugins: [vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
        imports:['vue'],
        dts:'src/auto-import.d.ts'//声明文件
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
      server:{
        proxy: {// 跨域代理
          '/api': {//以后在遇到/api开头的请求时 都将其代理到target属性对应的域中去
            target:env.VITE_BASE_URL,
            changeOrigin: true,//允许跨域
            rewrite: (path) => path.replace(/^\/api/, '')
          }
        },
      }
  }
})
