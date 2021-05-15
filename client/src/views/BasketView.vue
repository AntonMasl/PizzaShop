<template>
  <div>
    <Header/>
    <ButtonBack/>
    <div class="title">КОРЗИНА</div>
    <div v-if="basket.length">
      <BasketList :basket="basket"/>
      <div class="total-summa">
        <div>Сумма заказа:</div>
        <span>{{ totalSumma }} руб</span>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header";
import BasketList from "@/components/BasketList";
import {mapActions, mapGetters} from "vuex";
import ButtonBack from "@/components/ButtonBack";

export default {
  components: {ButtonBack, BasketList, Header},

  async mounted() {
    await this.getBasketUser(this.user.id)
    console.log(this.basket)
  },

  computed: {
    ...mapGetters(["user", "basket", "isAuth", "totalSumma"])
  },
  methods: {
    ...mapActions(["getBasketUser"])
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
.btn-back{
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

  div {
    margin-right: 20px;
    color: #ff9900;
    font-weight: 900;
  }
;

  span {
    font-size: 28px;
    font-weight: 700;
  }
}
</style>