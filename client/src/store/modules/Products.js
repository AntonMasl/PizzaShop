import axios from "axios";

export default {
    state: {
        products: [],
        product: {},
        loading: true,
        valueSearch: '',
        selectedSortType: ''
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
        searchProducts(state, value) {
            state.valueSearch = value
        },
        sortProducts(state, selectedSortType) {
            console.log(selectedSortType)
            state.selectedSortType = selectedSortType
        }

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
        visibleProducts(state) {
            if (state.valueSearch) {
                return state.products.filter(item => item.name.toLowerCase().includes(state.valueSearch.toLowerCase()))
            } else {
                return state.products
            }
        },
        sortAllProducts(state){
            console.log(this.state.selectedSortType)
        }

    }
}