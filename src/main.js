import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
// 验证 引入dist包
// import VueVirtualTree from '../dist/vue-virtual-tree.es.js';
// import '../dist/vue-virtual-tree.css';

const app = createApp(App)

app.use(ElementPlus)
// 全局注册
// app.use(VueVirtualTree.install(app));
app.mount('#app')