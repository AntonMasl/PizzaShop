import Vue from 'vue'
import VueRouter from 'vue-router'
import FormCreateProduct from "@/components/FormCreateProduct";
import ProductsView from "@/views/ProductsView";
import ProductView from "@/views/ProductView";
import ProductMainView from "@/views/ProductMainView";
import AuthView from "@/views/AuthView";
import Login from "@/components/Login";
import Registration from "@/components/Registration";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/products'
    },
    {
        path: '/products',
        component: ProductMainView,
        children: [
            {path: '', component: ProductsView},
            {path: ":id", component: ProductView}
        ]
    },
    {
        path: '/auth',
        component: AuthView,
        redirect: '/auth/login',
        children: [
            {path: 'login', component: Login},
            {path: "registration", component: Registration}
        ]
    },

    // {
    //     path: '/products/:id',
    //     component: ProductView
    // },
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
