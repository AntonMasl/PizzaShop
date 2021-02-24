import Vue from 'vue'
import Vuex from 'vuex'
import Pizzas from "./modules/Pizzas";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Pizzas
    }
})
