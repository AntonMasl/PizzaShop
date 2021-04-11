import Vue from 'vue'
import VueRouter from 'vue-router'
import FormCreateProduct from "@/components/FormCreateProduct";
import ProductsView from "@/views/ProductsView";
import ProductView from "@/views/ProductView";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',

    },
    {
        path: '/products',
        component: ProductsView
    },
    {
        path: '/products/:id',
        component: ProductView
    },
    // {
    //     path: '/pizzas',
    //     component: ProductsView
    // },
    // {
    //     path: '/pizzas/:id',
    //     component: PizzaItemView
    // },
    // {
    //     path: '/salads',
    //     component: ProductsView
    // },
    // {
    //     path: '/products/:id',
    //     component: SaladItemView
    // },
    // {
    //     path: '/desserts',
    //     component: ProductsView
    // },
    // {
    //     path: '/drinks',
    //     component: ProductsView
    // },
    // {
    //     path: '/sauces',
    //     component: ProductsView
    // },
    {
        path: '/form',
        component: FormCreateProduct
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
