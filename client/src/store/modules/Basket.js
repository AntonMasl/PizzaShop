import axios from "axios";

export default {
    state: {
        token: '',
        isAuth: false,
        user: {}

    },
    actions: {
        async auth(context){
            try {
                console.log(1111111111111111111)
                const response = await axios.get('http://localhost:3000/api/auth/auth',
                    {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
                )
                console.log(111,response)
                localStorage.setItem('token', response.data.token)
                context.commit("updateUser",response.data.user)
                context.commit("updateIsAuth",true)

            } catch (e) {
                console.log(222,e)
                localStorage.removeItem('token')
            }
        }
    },
    mutations: {
        updateUser(state, user) {
            state.user = user
        },

        updateToken(state,token){
            state.token = token
        },
        updateIsAuth(state, isAuth) {
            state.isAuth = isAuth
        },

    },
    getters:{
        token(state){
            return state.token
        },
        user(state){
            return state.user
        },
        isAuth(state){
            return state.isAuth
        }

    }

}