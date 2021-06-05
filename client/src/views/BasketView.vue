<template>
  <div>
    <Header/>
    <ButtonBack/>
    <div class="title">КОРЗИНА</div>
    <div v-if="basket.length">
      <PopupSuccess @close-popup="isOpenPopup=false" v-if="isOpenPopup"/>
      <BasketList :basket="basket"/>
      <div class="total-summa">
        <div>Сумма заказа:</div>
        <span>{{ totalSumma }} руб</span>
      </div>
      <div class="form two">
        <div class="item">
          <span>Имя:</span>
          <div>{{ user.name }}</div>
        </div>
        <div class="item">
          <span>Фамилия:</span>
          <div>{{ user.surname }}</div>
        </div>
        <div class="item">
          <span>Номер телефона:</span>
          <div>{{ user.telephone }}</div>
          <span class="descr">(номер необходим для подтверждения заказы и согласования срока доставки)</span>
        </div>
        <div class="address">
          <span>Адрес доставки (только Тула):</span>
          <input placeholder="Введите..." type="text">
        </div>
        <div class="item">
          <span>К оплате:</span>
          <div>{{ totalSumma }} руб</div>
        </div>
        <div class="item">
          <span>Оплата:</span>
          <div>курьеру - наличными или картой</div>
        </div>
        <button class="buy" @click="isOpenPopup=true">Оформить заказ</button>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header";
import BasketList from "@/components/BasketList";
import {mapActions, mapGetters} from "vuex";
import ButtonBack from "@/components/ButtonBackMain";
import PopupSuccess from "../components/PopupSuccess";

export default {
  components: {PopupSuccess, ButtonBack, BasketList, Header},
  data(){
    return{
      isOpenPopup: false
    }
  },
  // async mounted() {
  //   await this.getBasketUser(this.user.id)
  //   console.log(this.basket)
  // },

  computed: {
    ...mapGetters(["user", "basket", "isAuth", "totalSumma"])
  },
  methods: {
    ...mapActions(["getBasketUser"]),
  },

  watch: {
    isAuth() {
      if (!this.isAuth) {
        this.$router.push({path: '/products'})
      }
    },
    user() {
      this.getBasketUser(this.user.id)
    }
  }
}
</script>
<style scoped lang="scss">
.form.two{
  box-shadow: none;
  border: 1px solid black;
}

.buy {
  margin-top: 40px;
  margin-right: 30px;
  width: 300px;
  height: 54px;
  background: $v_orange;
  letter-spacing: 1px;
  border-radius: 8px;
  font-size: 20px;
  line-height: 17px;
  font-weight: 700;
  color: #ffffff;
  transition: 0.4s;

  &:active {
    outline: none;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    box-shadow: 0 0 5px 2px rgba(green, 0.7);
    background-color: rgba(green, 0.8);
  }
}

.item {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  font-size: 20px;

  .descr {
    margin-left: 10px;
    color: black;
    font-weight: 400;
    font-size: 16px;
  }

  div {
    text-decoration: underline;
  }

  span {
    color: $v_orange;
    font-weight: 700;
    margin-right: 10px;
  }
}

.address {
  margin-bottom: 20px;

  span {
    font-size: 20px;
    color: $v_orange;
    font-weight: 700;
    margin-right: 20px;
  }

  input {
    border: 1px solid #d7d9e1;
    border-radius: 8px;
    height: 30px;
    padding: 0 25px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: black;
    font-size: 18px;
    width: 40%;
    &::placeholder {
      color: #d7d9e1;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 5px 2px $v-orange;
    }
  }
}

.delivery {
  font-size: 20px;
  margin-bottom: 30px;

  span {
    color: $v_orange;
    font-weight: 700;
  }
}

.btn-back {
  width: 160px;
}

.title {
  text-align: center;
  font-size: 30px;
  margin-bottom: 40px;
  margin-top: 60px;
}

.total-summa {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 24px;
  margin-bottom: 30px;

  div {
    margin-right: 20px;
    color: #ff9900;
    font-weight: 900;
  }

  span {
    font-size: 28px;
    font-weight: 700;
    text-decoration: underline;
  }
}
</style>