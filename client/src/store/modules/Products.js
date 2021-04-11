import axios from "axios";
import router from "@/router";

export default {
    state: {
        products: [],
        product: {},
        loading: true
    },

    actions: {
        async getProducts(context, categoryId) {
            try {
                context.commit("isLoaded", true)
                const res = await axios.get('http://localhost:3000/api/product/', {
                    params: {
                        categoryId: categoryId
                    }
                })
                console.log(res)
                context.commit('updateProducts', res.data)
                context.commit("isLoaded", false)
            } catch (error) {
                console.log(error)
            }
        },
        async getOneProduct(context, id) {
            try {
                const res = await axios.get(`http://localhost:3000/api/product/${id}`)
                context.commit('updateProductItem', res.data)
            } catch (error) {
                console.log(error)
            }
        },
        // async ShowProductItem(context,id) {
        //     await router.push({path: `/pizzas/${id}`})
        // }
    },

    mutations: {
        updateProducts(state, products) {
            state.products = products
        },
        isLoaded(state, loading) {
            state.loading = loading
        },
        updateProductItem(state, product) {
            state.product = product
        },

        // async showPizzaItemView(state, pizzaId) {
        //     state.pizzaId = pizzaId
        //     await router.push({path: `/pizzas/${state.pizzaId}`})
        //
        // }
    },

    getters: {
        allProducts(state) {
            return state.products
        },
        loading(state) {
            return state.loading
        },
        productItem(state) {
            return state.product
        },
    }
}