<template>
  <form @submit.prevent="authorizationUser" class="form" action="">
    <h1 class="form__title">Авторизация</h1>
    <input class="form__input-login" type="text" placeholder="Логин" required v-model="username">
    <input class="form__input-password" type="password" placeholder="Пароль" required v-model="password">
    <div class="form__bottom">
      <div>
        <button class="form__btn">Войти</button>
        <router-link class="form__link-registration" to="/auth/registration">Регистрация</router-link>
      </div>
      <div v-if="error" class="form__message-error">{{ error }}!</div>
    </div>
  </form>
</template>
<!--<script>-->
<!--import axios from "axios";-->

<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      username: '',-->
<!--      password: '',-->
<!--      error: ''-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    async authorizationUser() {-->
<!--      this.error = ''-->
<!--      const data = {-->
<!--        username: this.username,-->
<!--        password: this.password-->
<!--      }-->
<!--      try {-->
<!--        let result = await axios.post(`http://localhost:3000/api/auth/login/`, data)-->
<!--        console.log(result)-->
<!--      } catch (e) {-->
<!--        if (e.response.status === 400) {-->
<!--          this.error = e.response.data.message-->
<!--          console.log(e.response.data)-->

<!--        }-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->
<script>


import {mapActions, mapGetters} from "vuex";

export default {
  methods: {
    ...mapActions(['authorizationUser'])
  },
  computed:{
    ...mapGetters(["username","password","errorMessage"])
  }
}
</script>

<style scoped lang="scss">
  .form{
    &__bottom{
      display: flex;
    }
    &__message-error{
      margin-left: 30px;
    }
  }
</style>