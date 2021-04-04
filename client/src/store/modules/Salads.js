import axios from "axios";

export default {
    state: {
        salads: [],
        salad: {},
        loading: true
    },

    actions: {
        async getSalads(context) {
            try {
                const res = await axios.get('http://localhost:3000/api/salad')
                context.commit('updateSalads', res.data)
            } catch (error) {
                console.log(error)
            }
        },
        async getOneSalad(context, id) {
            try {
                const res = await axios.get(`http://localhost:3000/api/salad/${id}`)
                context.commit('updateSaladItem', res.data)
                const loading = false
                context.commit('isLoaded', loading)
            } catch (error) {
                console.log(error)
            }
        },
        // async ShowPizzaItem(context,id) {
        //     await router.push({path: `/pizzas/${id}`})
        // }
    },

    mutations: {
        updateSalads(state, salads) {
            state.salads = salads
        },
        updateSaladItem(state, salad) {
            state.salad = salad
        },
        // async showPizzaItemView(state, pizzaId) {
        //     state.pizzaId = pizzaId
        //     await router.push({path: `/pizzas/${state.pizzaId}`})
        //
        // }
    },

    getters: {
        allSalads(state) {
            return state.salads
        },
        saladItem(state) {
            return state.salad
        },
    }
}