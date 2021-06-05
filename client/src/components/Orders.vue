<template>
  <ul class="orders">
    <li class="order-card">
      <div class="number">1</div>
      <div class="inner">
        <div class="left">
          <div class="inner-part">
            <div>номер заказа: 312744946</div>
            <div>дата заказа: 15:31 17.05.2021</div>
            <div>сумма заказа: 820 руб</div>
            <div>
              <span>заказчик:</span><span> Иванов Иван</span>
            </div>
            <div>телефон: +79039008070</div>
            <div>адрес доставки: ул.Советская д.4</div>
            <button>Выполнен</button>
          </div>
        </div>
        <div class="right" v-if="true">
          <div class="inner-part">
            <div class="title">заказ</div>
            <ul class="items">
              <li class="item">
                пицца Пепперони, тонкое тесто, 25см, 1шт
              </li>
              <li class="item">
                салат Цезарь с курицей, 1шт
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>
    <li class="order-card">
      <div class="number">2</div>
      <div class="inner">
        <div class="left">
          <div class="inner-part">
            <div>номер заказа: 669402583</div>
            <div>дата заказа: 15:34 17.05.2021</div>
            <div>сумма заказа: 2010 руб</div>
            <div>
              <span>заказчик:</span><span> Андрей Андреев</span>
            </div>
            <div>телефон: +79008007060</div>
            <div>адрес доставки: ул.Советская д.10</div>
            <button>Выполнен</button>
          </div>
        </div>
        <div class="right" v-if="true">
          <div class="inner-part">
            <div class="title">заказ</div>
            <ul class="items">
              <li class="item">
                пицца Маргарита, традиционное тесто, 32см, 3шт
              </li>
              <li class="item">
                десерт Тирамису, 1шт
              </li>
              <li class="item">
                салат Греческий, 1шт
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>


  </ul>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters(["categoryId", "token", "user", "isAuth"])
  },
}
</script>

<style scoped lang="scss">
.number{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  font-size: 18px;
  font-weight: 700;
  background-color: $v-orange;
  color: white;
}
.title{
  margin-bottom: 10px;
  font-size: 18px;
}
.orders {
  //display: flex;
  //justify-content: space-between;
  //flex-wrap: wrap;
}

.order-card {
  position: relative;
  font-size: 16px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  margin-bottom: 20px;
  margin-right: 10px;
  margin-left: 10px;
  overflow: hidden;
}

.item {
  list-style-type: decimal;
  border-bottom: 1px solid black;
  margin-bottom: 5px;
}

button {
  margin-top: 15px;
  margin-right: 30px;
  width: 200px;
  height: 34px;
  background: $v_orange;
  letter-spacing: 1px;
  border-radius: 8px;
  font-size: 16px;
  line-height: 1px;
  font-weight: 600;
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

.left {
  .inner-part div {
    margin-bottom: 10px;
    border-bottom: 1px solid black;
  }
}

.inner {
  display: flex;
  width: 100%;
  min-height: 120px;
  justify-content: space-between;
  padding: 10px;
}

.left {
  flex-grow: 1;
}

.right {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

.inner-part {
  display: inline-block;
}
</style>