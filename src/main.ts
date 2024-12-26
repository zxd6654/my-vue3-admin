import { createApp } from 'vue'
import './style.css'

import { createPinia } from "pinia";
import App from './App.vue'

// 本地SVG图标
import 'virtual:svg-icons-register';
//UnoCSS 是一个具有高性能且极具灵活性的即时原子化 CSS 引擎 。
import 'uno.css'

createApp(App).use(createPinia()).mount("#app");
