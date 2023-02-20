import * as VueRouter from "vue-router";
import Page10 from "@/pages/page10/Page10.vue";
import Page11 from "@/pages/demo11/Page11.vue";
import Page13 from "@/pages/demo13/Page13.vue";

const routes = [
    {path: '/', component: Page10},
    {path: '/page11', component: Page11},
    {path: '/page13', name: 'Page13', component: Page13},
]

export const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})


