import axios from "axios";
import router from "../../router";

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
    //     async createUser(context, user) {
    //         try{
    //             console.log(1)
    //             context.commit("updateErrorMessage", '')
    //             let res = await axios.post(`http://localhost:3000/api/auth/registration/`, user)
    //             context.commit("updateUser", res.data)
    //             await router.push({path:'/auth/login'})
    //             console.log( res)
    //         } catch (e){
    //             console.log(e)
    //             console.log(e.response)
    //             if (e.response.status === 400) {
    //                 context.commit("updateErrorMessage", e.response.data.message)
    //                 console.log(111111111,e.response.data)
    //             }
    //         }
    //
    //     },
    //     async authorizationUser(context, dataUser){
    //         try {
    //             let result = await axios.post(`http://localhost:3000/api/auth/login/`, data)
    //             context.commit("updateToken", result.data.token)
    //             console.log(result.data)
    //         } catch (e) {
    //             if (e.response.status === 400) {
    //                 context.commit("updateErrorMessage", 'e.response.data.message')
    //                 console.log(e.response.data)
    //
    //             }
    //         }
    //     }
    },
    mutations: {
        updateUser(state, user) {
            state.user = user
        },
        // updateErrorMessage(state, errorMessage) {
        //     state.errorMessage = errorMessage
        // },
        updateToken(state,token){
            state.token = token
        },
        updateIsAuth(state, isAuth) {
            state.isAuth = isAuth
        },
        // updateUsername(state,username){
        //     state.username = username
        // },
        // updatePassword(state,password){
        //     state.password = password
        // }
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
        // errorMessage(state){
        //     return state.errorMessage
        // },
        // username(state){
        //     return state.username
        // },
        // password(state){
        //     return state.password
        // }
    }

}