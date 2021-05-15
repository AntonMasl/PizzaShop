<template>
  <main class="authorization">
    <div class="authorization__inner">
      <div class="authorization__logo">
        <a class="authorization__logo-link" href="#">
          <img class="authorization__logo-img" src="@/assets/images/logo-pizza.png" alt="">
        </a>
      </div>
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
import ButtonBack from "@/components/ButtonBack";
export default {
  components: {ButtonBack}
}
</script>

<style lang="scss">
.authorization {
  position: relative;
  min-height: 100vh;

  &::after {
    content: "";
    display: block;
    width: 276px;
    height: 365px;
    position: absolute;
    bottom: 74px;
    right: 178px;
  }

  &__inner {
    max-width: 665px;
    padding: 0 15px;
    padding-top: 166px;
    margin: 0 auto;
  }

  &__logo {
    text-align: center;
    margin-bottom: 80px;
  }

  &__logo-img {
    width: 240px;
  }

  &__logo-link {
    display: inline-block;
  }
}

.form {
  box-shadow: 0 0 25px 10px $v_orange;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 33px 24px 23px;
  display: flex;
  flex-direction: column;

  &__message-error{
    font-size: 18px;

    color: white;
    display: flex;
    align-items: center !important;
    justify-content: center;
    flex-grow: 1;
    height: 54px;
    padding: 10px;
    color: #ff5252;
    font-weight: 700;
    //border-radius: 8px;
    //background-color: #ff5252 ;

  }

  &__title {
    text-align: center;
    font-size: 28px;
    line-height: 22px;
    font-weight: 700;
    color: #0c0d10;
    margin-bottom: 34px;
  }

  %inputstyle {
    border: 1px solid #d7d9e1;
    border-radius: 8px;
    height: 48px;
    padding: 0 25px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    &::placeholder {
      color: #d7d9e1;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 5px 2px $v-orange;
    }
  }

  &__input-login {
    @extend %inputstyle;
    margin-bottom: 15px;
  }

  &__input-mail {
    @extend %inputstyle;
    margin-bottom: 15px;
  }

  &__input-name {
    @extend %inputstyle;
    margin-bottom: 15px;
  }

  &__input-surname {
    @extend %inputstyle;
    margin-bottom: 15px;
  }

  &__input-password {
    @extend %inputstyle;
    margin-bottom: 25px;
  }

  &__btn {
    margin-right: 30px;
    width: 144px;
    height: 48px;
    background: $v_orange;
    letter-spacing: 1px;
    border-radius: 8px;
    font-size: 18px;
    line-height: 17px;
    font-weight: 700;
    color: #ffffff;
    transition: background-color 0.4s;

    &:active {
      outline: none;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 5px 2px rgba($v-orange, 0.7);
    }

    &:hover {
      background-color: rgba($v_orange, 0.8);
    }
  }

  &__link-registration {
    font-size: 18px;
    text-decoration: underline;

    &:hover {
      color: $v_orange;
    }
  }
}

.registration__form {
  padding-bottom: 47px;
}
</style>