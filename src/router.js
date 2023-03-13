import { createRouter, createWebHashHistory } from "vue-router";
import MainLayout from "./layouts/MainLayout.vue"
import Home from "./pages/Home.vue"
import Detail from "./pages/Detail.vue"
const routes = [{
    path: '/',
    name: 'layout',
    component: MainLayout,
    children: [{
            path: '',
            name: 'home',
            component: Home
        },
        {
            path: 'detail',
            name: 'detail',
            component: Detail
        }
    ]
}]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;