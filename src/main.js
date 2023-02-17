import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import './assets/main.css'
import {router} from "@/router";
import Bridge from "@/utils/bridge";

import Page10 from "@/pages/page10/Page10.vue";
import Page11 from "@/pages/demo11/Page11.vue";

export {Page10, Page11}

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use.prototype = Bridge
app.mount('#app')
