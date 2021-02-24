<template>
  <li class="card">
    <div class="card__inner">
      <img class="card__img" src="../images/pizza1.png" alt="">
      <div class="card__name">{{ pizza.name }}</div>
      <div class="card__specification-items">
        <div class="card__specification-item">
          <div class="active">{{pizza.typeOfDough[0]}}</div>
          <div>{{ pizza.typeOfDough[1] }}</div>
        </div>
        <div class="card__specification-item">
          <div>{{ pizza.diameter[0] }}</div>
          <div class="active">{{ pizza.diameter[1] }}</div>
          <div>{{ pizza.diameter[2] }}</div>
        </div>
      </div>
      <div class="card__bottom">
        <div class="card__quantity">
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
        <div class="card__sum">
          <div class="card__price">{{pizza.price[0]}} <span>руб</span></div>
          <div class="card__weight">400 г</div>
        </div>
      </div>
      <button class="card__btn-buy">+ в корзину</button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['pizza']
}
</script>

<style lang="scss" scoped>
.card {
  max-width: 280px;
  box-shadow: 0px 0px 10px black;

  &__inner {

  }

  &__img {
    margin-bottom: 11px;
  }

  &__name {
    font-size: 20px;
    font-weight: 800;
    line-height: 24px;
    margin-bottom: 22px;
  }

  &__specification-items {
    background: #F3F3F3;
    border-radius: 10px;
    padding: 7px 5.7px;
    margin-bottom: 20px;
  }

  &__specification-item {
    display: flex;
    justify-content: space-between;

    .active {
      background-color: white;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
      border-radius: 5px;
    }

    &:first-child {
      margin-bottom: 7px;

      div {
        width: 132px;
        font-size: 14px;
        line-height: 17px;
        font-weight: 700;
        padding: 8px 0;
        cursor: pointer;
      }
    }

    &:last-child {
      div {
        width: 86px;
        font-size: 14px;
        line-height: 17px;
        font-weight: 700;
        padding: 8px 0;
        cursor: pointer;
      }
    }
  }

  &__bottom {
    padding: 0 15px;
    display: flex;
    justify-content: space-around;
  }

  &__quantity {
    display: flex;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 20px;

    button {
      height: 32px;
      width: 32px;
      background: #F3F3F3;
      font-weight: 400;
      font-size: 20px;
    }

    span {
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 32px;
      width: 32px;
      background: #F3F3F3;
    }
  }

  &__price {
    font-size: 20px;
    font-weight: 600;

    span {
      font-size: 14px;
    }
  }

  &__btn-buy {
    width: 100%;
    height: 40px;
    border-radius: 10px;
  }
}
</style>