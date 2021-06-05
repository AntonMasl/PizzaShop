<template>
  <div class="product">
    <div class="product__inner">
      <div class="product__left">
        <ButtonBackMain/>
        <div class="product__img">
          <img :src="`http://localhost:3000/${product.imageSrc}`" alt="">
        </div>
      </div>
      <div class="product__right">
        <div class="product__name">{{ product.name }}</div>
        <div class="product__foodValue">
          <div class="title">Пищевая ценость на 100 г:</div>
          <ul>
            <li><span>Энерг. ценность</span><span>{{ product.foodValue.energyValue }} ккал</span></li>
            <li><span>Белки</span><span>{{ product.foodValue.proteins }} г</span></li>
            <li><span>Жиры</span><span>{{ product.foodValue.fatСontent }} г</span></li>
            <li><span>Углеводы</span><span>{{ product.foodValue.carbohydrates }} г</span></li>
          </ul>
        </div>
        <div class="product__description">
          <div class="title">Описание:</div>
          <div class="text-descr">{{ product.description }}</div>
        </div>
        <div class="product__calculation">
          <div class="title" v-if="product.category.name==='пицца'">Выбирите тип теста и размер пиццы:</div>
          <CalculationPrice :product="product"/>
        </div>
        <!--        <button class="product__btn-buy">+ в корзину</button>-->
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import CalculationPrice from "@/components/CalculationPrice";
import ButtonBackMain from "@/components/ButtonBackMain";

export default {
  components: {ButtonBackMain, CalculationPrice},
  props: ['product']
}
</script>

<style lang="scss">
.title {
  font-weight: 700;
  margin-bottom: 20px;
  font-size: 16px;
}

.product {
  .specification-pizza{
    border: 1px solid $v_orange;
    border-radius: 10px;
  }
  .btn-lg,
  .btn-group-lg > .btn {
    span{
      font-size: 18px;
      font-weight: 600;
    }
  }

  .counter-product {
    border: 1px solid $v-orange;

    button {
      height: 42px;
      width: 42px;
      font-weight: 700;
      font-size: 24px;
    }

    span {
      font-weight: 700;
      font-size: 24px;
      height: 42px;
      width: 42px;
    }
  }

  .price {
    font-size: 26px;

    span {
      font-size: 20px;
    }
  }

  .weight {
    font-size: 18px;
  }
  .sum{
    min-width: 120px;
  }

  .btn-buy {
    border: 1px solid $v_orange;
    border-radius: 10px;
    height: 50px;
  }

  &__inner {
    display: flex;
  }

  &__left {
    width: 50%;
  }

  //&__btn-back {
  //  width: 80px;
  //  height: 30px;
  //  font-weight: 700;
  //  border: 1px solid black;
  //}

  &__img {
    padding: 20px;

    img {
      width: 100%;
    }
  }

  &__right {
    width: 50%;
  }

  &__name {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 40px;
  }

  &__description {
    margin-bottom: 40px;
    font-size: 14px;
  }

  &__foodValue {
    margin-bottom: 40px;
    max-width: 400px;

    ul {
      li {
        margin-bottom: 10px;
        border-bottom: 1px solid black;
        display: flex;
        justify-content: space-between;
      }
    }
  }

  &__dough-diameter {
    margin-bottom: 40px;

    .buttons {
      display: flex;
    }

    .btn {
      font-weight: 700;
      width: 130px;
      height: 35px;

      &:first-child {
        margin-right: 15px;
      }
    }
  }

  &__size {
    margin-bottom: 60px;

    .buttons-size {
      display: flex;

      .btn {
        font-weight: 700;
        padding: 10px;
        margin-right: 15px;

        &:last-child {
          margin-right: 0;
        }

        display: flex;
        flex-direction: column;

        span {
          margin-bottom: 10px;

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
.text-descr{
  font-size: 15px;
  line-height: 1.4;
  font-style: italic;
}

</style>