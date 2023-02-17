import * as VueRouter from "vue-router";
import Page10 from "@/pages/page10/Page10.vue";
import Page11 from "@/pages/demo11/Page11.vue";

const routes = [
    {path: '/', component: Page10},
    {path: '/page11', component: Page11}
]

export const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})


