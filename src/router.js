import { createRouter, createWebHashHistory } from "vue-router";
import MainLayout from './layouts/MainLayout.vue';
import Home from './pages/Home.vue';
import DetailProduct from './pages/DetailProduct.vue';


const routes = [
    {
        path: '/' ,name:'layout',component:MainLayout,
        children:[
            {
                path:'',name:Home,component:Home
            },
            {
                path:'detail',name:'detail',component:DetailProduct
            }
        ]
    }
]


const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router;