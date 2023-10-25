import { createApp } from 'vue'
import App from './App.vue'
import * as fundebug from "fundebug-javascript";
import FundebugVue from "fundebug-vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
require("fundebug-revideo");
// 插件版本 >= 2.0.0，可使用init方法配置
fundebug.init({
    apikey: "c18830a888d7564d5a5a71b20fb95f063491981becaffa7c73eec10f440f8334",
    appversion: "1.0.0",  // 应用版本
    releasestage : "development",  // 测试，development、test、production
    silentConsole : true,  // 避免干扰console打印
    silentWebsocket : true,
    metaData : {  // 其他自定义信息
        company: {
            name: "test",
            nation: "China"
        }
    }
})

createApp(App)
    .use(new FundebugVue(fundebug))  // Vue 3.x
    .use(ElementPlus)
    .mount('#app')
