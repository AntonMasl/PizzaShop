import Vue from 'vue'
import VueRouter from 'vue-router'
import PizzasView from '@/views/PizzasView'
import FormCreateProduct from "@/components/FormCreateProduct";
import DessertsView from "@/views/DessertsView";
import SaladsView from "@/views/SaladsView";
import DrinksView from "@/views/DrinksView";
import SaucesView from "@/views/SaucesView";
import PizzaItemView from "@/views/PizzaItemView";
import SaladItemView from "@/views/SaladItemView";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',

    },
    {
        path: '/pizzas',
        component: PizzasView
    },
    {
        path: '/pizzas/:id',
        component: PizzaItemView
    },
    {
        path: '/salads',
        component: SaladsView
    },
    {
        path: '/salads/:id',
        component: SaladItemView
    },
    {
        path: '/desserts',
        component: DessertsView
    },
    {
        path: '/drinks',
        component: DrinksView
    },
    {
        path: '/sauces',
        component: SaucesView
    },
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
