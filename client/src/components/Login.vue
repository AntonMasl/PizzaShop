<template>
  <form @submit.prevent="authorizationUser" class="form">
    <h1 class="form__title">Авторизация</h1>
    <input
        class="form__input-login"
        type="text"
        placeholder="Логин"
        required
        v-model="username"
        v-focus
    >
    <input
        class="form__input-password"
        type="password"
        placeholder="Пароль"
        required v-model="password"
    >
    <div class="form__bottom">
      <div>
        <button
            @click="errorMessage=''"
            class="form__btn">Войти
        </button>
        <router-link class="form__link-registration" to="/auth/registration">Регистрация</router-link>
      </div>
      <div v-if="errorMessage" class="form__message-error">{{ errorMessage }}!</div>
    </div>
  </form>
</template>
<script>
import axios from "axios";
import {mapGetters, mapMutations} from "vuex";

export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    async authorizationUser() {
      this.errorMessage = ''
      const data = {
        username: this.username,
        password: this.password
      }
      try {
        const result = await axios.post(`http://localhost:3000/api/auth/login/`, data)
        this.updateUser(result.data.user)
        this.updateIsAuth(true)
        localStorage.setItem('token', result.data.token)
        await this.$router.push({path: '/products'})
        console.log(1111111, result)
      } catch (e) {
        if (e.response.status === 400) {
          this.errorMessage = e.response.data.message
          console.log(e.response.data)

        }
      }
    },
    ...mapMutations(["updateToken", "updateUser", "updateIsAuth"])
  },
  computed: {
    ...mapGetters(["token", "user"])
  }
}
</script>
<!--<script>-->


<!--import {mapActions, mapGetters} from "vuex";-->

<!--export default {-->
<!--  methods: {-->
<!--    ...mapActions(['authorizationUser'])-->
<!--  },-->
<!--  computed:{-->
<!--    ...mapGetters(["username","password","errorMessage"])-->
<!--  }-->
<!--}-->
<!--</script>-->

<style scoped lang="scss">
.form {
  &__bottom {
    display: flex;
  }

  &__message-error {
    margin-left: 30px;
  }
}
</style>