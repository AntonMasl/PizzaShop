import axios from "axios";

export default {
    state: {
        pizzas: [],
        pizza: {},
    },

    actions: {
        async getPizzas(context) {
            try {
                const res = await axios.get('http://localhost:3000/api/pizza')
                context.commit('updatePizzas', res.data)
            } catch (error) {
                console.log(error)
            }
        },
        async getOnePizza(context, id) {
            try {
                const res = await axios.get(`http://localhost:3000/api/pizza/${id}`)
                context.commit('updatePizzaItem', res.data)
            } catch (error) {
                console.log(error)
            }
        },
        // async ShowPizzaItem(context,id) {
        //     await router.push({path: `/pizzas/${id}`})
        // }
    },

    mutations: {
        updatePizzas(state, pizzas) {
            state.pizzas = pizzas
        },
        updatePizzaItem(state, pizza) {
            state.pizza = pizza
        },

        // async showPizzaItemView(state, pizzaId) {
        //     state.pizzaId = pizzaId
        //     await router.push({path: `/pizzas/${state.pizzaId}`})
        //
        // }
    },

    getters: {
        allPizzas(state) {
            return state.pizzas
        },
        pizzaItem(state) {
            return state.pizza
        },


    }
}