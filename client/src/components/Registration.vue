<template>
  <form @submit.prevent="createUser" class="form">
    <h1 class="form__title">Регистрация</h1>
    <input class="form__input-login" type="text" placeholder="Логин" required v-model="username">
    <input class="form__input-name" type="text" placeholder="Имя" required v-model="name">
    <input class="form__input-surname" type="text" placeholder="Фамилия" required v-model="surname">
    <input class="form__input-mail" type="email" placeholder="Адрес электронной почты" required v-model="email">
    <input class="form__input-password" type="password" placeholder="Пароль" required v-model="password">
    <div class="form__bottom">
      <button @click="errorMessage=''" class="form__btn form__btn-registration">Зарегистрироваться</button>
      <div v-if="errorMessage" class="form__message-error">{{ errorMessage }}!</div>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: '',
      name: '',
      surname: '',
      password: '',
      email: '',
      errorMessage: ''
    }
  },
  methods: {
    async createUser() {
      this.error = ''
      const user = {
        username: this.username,
        name: this.name,
        surname: this.surname,
        password: this.password,
        email: this.email
      }

      try {
        let result = await axios.post(`http://localhost:3000/api/auth/registration/`, user)
        await this.$router.push({path: '/auth/login'})
        console.log(result)
      } catch (e) {
        if (e.response.status === 400) {
          this.errorMessage = e.response.data.message
          console.log(e.response.data)

        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.form {
  &__bottom {
    display: flex;
    align-items: center;
  }

  &__btn-registration {
    min-width: 250px;
    height: 54px;
  }
}
</style>