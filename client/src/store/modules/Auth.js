import axios from "axios";
import router from "../../router";

export default {
    state: {
        token: '',
        errorMessage: '',
        user: {},
        username: '',
        password: '',
    },
    actions: {
        async createUser(context, user) {
            try{
                console.log(1)
                context.commit("updateErrorMessage", '')
                let res = await axios.post(`http://localhost:3000/api/auth/registration/`, user)
                context.commit("updateUser", res.data)
                await router.push({path:'/auth/login'})
                console.log( res)
            } catch (e){
                console.log(e)
                console.log(e.response)
                if (e.response.status === 400) {
                    context.commit("updateErrorMessage", e.response.data.message)
                    console.log(111111111,e.response.data)
                }
            }

        },
        async authorizationUser(context, dataUser){
            try {
                let result = await axios.post(`http://localhost:3000/api/auth/login/`, data)
                context.commit("updateToken", result.data.token)
                console.log(result.data)
            } catch (e) {
                if (e.response.status === 400) {
                    context.commit("updateErrorMessage", 'e.response.data.message')
                    console.log(e.response.data)

                }
            }
        }
    },
    mutations: {
        updateUser(state, user) {
            state.user = user
        },
        updateErrorMessage(state, errorMessage) {
            state.errorMessage = errorMessage
        },
        updateToken(state,token){
            state.token = token
        },
        updateUsername(state,username){
            state.username = username
        },
        updatePassword(state,password){
            state.password = password
        }
    },
    getters:{
        user(state){
            return state.user
        },
        errorMessage(state){
            return state.errorMessage
        },
        username(state){
            return state.username
        },
        password(state){
            return state.password
        }
    }

}