import { createApp } from 'vue';
import App from './App.vue';
import setupPlugins from '@/plugins';

// 本地SVG图标
import 'virtual:svg-icons-register';
//UnoCSS 是一个具有高性能且极具灵活性的即时原子化 CSS 引擎 。
import 'uno.css';

const app = createApp(App);
//注册插件
app.use(setupPlugins);
app.mount("#app")