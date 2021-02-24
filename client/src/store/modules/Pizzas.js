import axios from "axios";

export default {
    state: {
        pizzas: [],
        loading: true
    },

    actions: {
        async getPizzas(context) {
            try {
                const responce = await axios.get('http://localhost:3000/api/pizza')
                context.commit('updatePizzas', responce.data)
            } catch (error) {
                console.log(error)
            }
        }
    },

    mutations: {
        updatePizzas(state, pizzas) {
            state.pizzas = pizzas
        }
    },

    getters: {
        allPizzas(state) {
            return state.pizzas
        },

    }
}