<template>
  <li class="basket-card">
    <div class="inner">
      <div class="left">
        <div class="image">
          <img :src="`http://localhost:3000/${item.imageSrc}`" alt="">
        </div>
        <div class="info">
          <div class="name">{{ item.name }}</div>
          <div v-if="item.diameter" class="weight"><span>Диаметр: </span>{{ item.diameter }} см</div>
          <div v-if="item.typeDough" class="weight"><span>Тесто: </span>{{ item.typeDough.text }}</div>
          <div class="weight"><span>Вес:</span> {{ item.weight }}</div>
        </div>
      </div>
      <div class="right">
        <div class="data">{{ item.price }} руб</div>
<!--        <div class="data">{{ item.count }}</div>-->
        <div class="data counter-product ">
          <button @click="item.count!=1?item.count--:''">-</button>
          <span>{{ item.count }}</span>
          <button @click="item.count++">+</button>
        </div>
        <div class="data">{{ item.price * item.count }} руб</div>
        <div class="delete" @click="deleteProductBasket">Удалить</div>
      </div>
    </div>
  </li>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  props: ["item"],
  methods: {
    ...mapActions(["deleteProductInBasket"]),
    deleteProductBasket() {
      const data = {
        product: this.item,
        userId: this.user.id}
      this.deleteProductInBasket(data)
    }
  },
  computed: {
    ...mapGetters(["user"])
  }
}
</script>

<style scoped lang="scss">
.counter-product {
  display: flex;
  border-radius: 10px;
  overflow: hidden;

  button {
    height: 32px;
    width: 32px;
    background: #F3F3F3;
    font-weight: 400;
    font-size: 20px;

    &:hover {
      background: $v_orange;
      color: white;
    }
  }

  span {
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 32px;
    background: #F3F3F3;
  }
}
.basket-card {
  font-size: 16px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  margin-bottom: 20px;
}

span {
  font-weight: 600;
}

.inner {
  display: flex;
  width: 100%;
  height: 120px;
  justify-content: space-between;
  padding: 10px;
}

.left {
  display: flex;
  align-items: center;
}

.image {
  margin-right: 20px;

  img {
    width: 100px;
    height: 100%;
  }
}

.info {
  div {
    margin-bottom: 5px;
  }
}

.title {
  text-decoration: underline;
  margin-bottom: 10px !important;
}

.name {
  font-size: 22px;
}

.weight {
}

.right {
  display: flex;
  align-items: center;

  div {
    //margin-right: 40px;
    //margin-left: 40px;
    width: 148px;
    display: flex;
    justify-content: center;
    font-size: 20px;
    &:nth-child(2){
      width: 100px;
    }
  }
}

.price-info {
}

.data {
  font-size: 18px;
  font-weight: 700;
}

.price {
}

.count-info {
}

.count {
}

.summa-info {
}

.delete {
  display: flex;
  align-items: center;
  font-size: 16px !important;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: $v-orange;
  }
}
</style>