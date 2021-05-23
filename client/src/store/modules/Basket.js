import axios from "axios";

export default {
    state: {
        basket: [],
        totalSumma: 0,
        totalItem: 0
    },
    actions: {
        // async auth(context){
        //     try {
        //         console.log(1111111111111111111)
        //         const response = await axios.get('http://localhost:3000/api/auth/auth',
        //             {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
        //         )
        //         console.log(111,response)
        //         localStorage.setItem('token', response.data.token)
        //         context.commit("updateUser",response.data.user)
        //         context.commit("updateIsAuth",true)
        //
        //     } catch (e) {
        //         console.log(222,e)
        //         localStorage.removeItem('token')
        //     }
        // },
        async addToBasket(context, data) {
            try {
                let res = await axios.post("http://localhost:3000/api/basket/", data)
                if (res.data === null || !res.status === 200) {
                    console.log(123123)
                    return
                }
                context.commit('updateBasket', res.data.products)
                let sum = 0
                context.getters.basket.forEach((item) => {
                    sum += item.price * item.count
                })
                context.commit('updateTotalSumma', sum)
            } catch (error) {
                console.log(error)
            }

        },
        async getBasketUser(context, userId) {
            try {
                console.log(666, userId)
                const res = await axios.get(`http://localhost:3000/api/basket/${userId}`)
                console.log(5555, res)
                if (res.data === null || !res.status === 200) {
                    console.log(123123)
                    return
                }
                context.commit('updateBasket', res.data.products)
                let sum = 0
                context.getters.basket.forEach((item) => {
                    sum += item.price * item.count
                })
                console.log(333,sum)
                context.commit('updateTotalSumma', sum)
                console.log(context.getters.basket)
            } catch (error) {
                console.log(2222222)
                console.log(error)
            }
        },
        async deleteProductInBasket(context, data) {
            try {
                console.log(data)
                const res = await axios.delete(`http://localhost:3000/api/basket/`, {data: data})
                context.commit("updateBasket", res.data)
                let sum = 0
                context.getters.basket.forEach((item) => {
                    sum += item.price * item.count
                })
                context.commit('updateTotalSumma', sum)
            } catch (error) {
                console.log(2222222)
                console.log(error)
            }
        },

    },
    mutations: {
        updateBasket(state, basket) {
            state.basket = basket
        },
        updateTotalSumma(state, totalSumma) {
            state.totalSumma = totalSumma
        },

        //
        // updateToken(state,token){
        //     state.token = token
        // },
        // updateIsAuth(state, isAuth) {
        //     state.isAuth = isAuth
        // },

    },
    getters: {
        basket(state) {
            return state.basket
        },
        totalSumma(state) {
            return state.totalSumma
        },
        // token(state){
        //     return state.token
        // },
        // user(state){
        //     return state.user
        // },
        // isAuth(state){
        //     return state.isAuth
        // }

    }

}