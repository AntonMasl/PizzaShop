import Vue from 'vue'
import Vuex from 'vuex'
import Pizzas from "@/store/modules/Pizzas";
import Salads from "@/store/modules/Salads";
import Loading from "@/store/modules/Loading";
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Loading,
        Pizzas,
        Salads
    }
})
