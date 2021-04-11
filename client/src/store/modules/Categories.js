import axios from "axios";

export default {
    state: {
        categories: [],
        category: {},
        categoryId: ''
    },

    actions: {
        async getCategories(context) {
            console.log(1111111111111)
            try {
                setTimeout(async ()=>{
                    const res = await axios.get('http://localhost:3000/api/category/')
                    context.commit('updateCategories', res.data)
                    context.commit("updateCategoryId", res.data[0]._id)
                },1000)

            } catch (error) {
                console.log(error)
            }
        },
        // async getOneProduct(context, id) {
        //     try {
        //         const res = await axios.get(`http://localhost:3000/api/pizza/${id}`)
        //         context.commit('updatePizzaItem', res.data)
        //     } catch (error) {
        //         console.log(error)
        //     }
        // },
        // async ShowPizzaItem(context,id) {
        //     await router.push({path: `/pizzas/${id}`})
        // }
    },

    mutations: {
        updateCategories(state, categories) {
            state.categories = categories
        },
        updateCategoryId(state, categoryId){
            state.categoryId = categoryId
        },
        // updatePizzaItem(state, pizza) {
        //     state.products = products
        // },

        // async showPizzaItemView(state, pizzaId) {
        //     state.pizzaId = pizzaId
        //     await router.push({path: `/pizzas/${state.pizzaId}`})
        //
        // }
    },

    getters: {
        allCategories(state) {
            return state.categories
        },
        categoryId(state){
            return state.categoryId
        }


    }
}