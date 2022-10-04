import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


export default defineConfig({
  plugins: [vue(),
  AutoImport({
    resolvers: [ElementPlusResolver()],
    imports:['vue'],
    dts:'src/auto-import.d.ts'//声明文件
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  }),
  ]
})
