export default {
    state: {
        loading: true
    },
    mutations: {
        isLoaded(state, loading) {
            state.loading = loading
        },
    },

    getters: {
        loading(state) {
            return state.loading
        }

    }
}