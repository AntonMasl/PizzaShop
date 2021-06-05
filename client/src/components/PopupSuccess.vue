<template>
  <div class="popup">
    <div class="form">
      <div class="form__inner">
        <div>{{user.name}}, ваш заказ оформлен!!!</div>
        <div>Ожидайте звонка менеджера для подтверждения заказа</div>
        <button @click="closePopup">&#10006;</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      isClose: false
    }
  },
  computed: {
    ...mapGetters(["user"])
  },
  methods: {
    closePopup() {
      this.$emit("close-popup")
    }
  }
}
</script>

<style scoped lang="scss">
.popup {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  &::before {
    content: "";
    background-color: #888888;
    position: absolute;
    opacity: 0.7;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
  }
}

.form {
  font-size: 26px;
  text-align: center;
  position: sticky;
  z-index: 6;
  max-width: 600px;
  padding: 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &__inner{
    div:first-child{
      margin-bottom: 10px;
    }
  }
}

button {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 30px;
  font-weight: 900;
  background-color: white;
  color: red;
}
</style>