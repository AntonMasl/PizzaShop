import Vue from 'vue'
import Vuex from 'vuex'
import Products from "@/store/modules/Products";
// import Loading from "@/store/modules/Loading";
import Categories from "@/store/modules/Categories";
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        // Loading,
        Categories,
        Products,
    }
})
