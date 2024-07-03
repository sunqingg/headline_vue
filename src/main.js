import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/routers.js";

import 'element-plus/dist/index.css'
import pinia from "./pinia.js";
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import mitt from 'mitt'

let app =  createApp(App)
app.config.globalProperties.Bus = mitt()
app.use(ElementPlus, {
    locale: zhCn,
})
app.use(router)
app.use(pinia)
app.mount('#app')
