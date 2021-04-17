<template>
  <div class="product">
    <div class="product__inner">
      <div class="product__left">
        <button class="product__btn-back" @click="$router.go(-1)">< Назад</button>
        <div class="product__img">
          <img :src="`http://localhost:3000/${product.imageSrc}`" alt="">
        </div>
      </div>
      <div class="product__right">
        <div class="product__name">{{ product.name }}</div>
        <div class="product__foodValue">
          <div class="title">Пищевая ценость на 100 г</div>
          <ul>
            <li><span>Энерг. ценность</span><span>{{ product.foodValue.energyValue }} ккал</span></li>
            <li><span>Белки</span><span>{{ product.foodValue.proteins }} г</span></li>
            <li><span>Жиры</span><span>{{ product.foodValue.fatСontent }} г</span></li>
            <li><span>Углеводы</span><span>{{ product.foodValue.carbohydrates }} г</span></li>
          </ul>
        </div>
        <div class="product__description">
          <div class="title">Описание</div>
          <div>{{ product.description }}</div>
        </div>
        <div v-if="product.category.name==='pizza'">
          <div class="product__dough-diameter">
            <div class="title">Тесто</div>
            <div class="buttons">
              <button class="btn btn-active">Традиционное</button>
              <button class="btn">Тонкое</button>
            </div>
          </div>
          <div class="product__size">
            <div class="title">Размер</div>
            <div class="buttons-size">
              <button class="small btn btn-active">
                <span>{{ product.diameter.small }} см</span>
                <span>{{ product.weightOnSmallDough.small }} г</span>
                <span>{{ product.prices.small }} руб</span>
              </button>
              <button class="middle btn">
                <span>{{ product.diameter.middle }} см</span>
                <span>{{ product.weightOnSmallDough.middle }} г</span>
                <span>{{ product.prices.middle }} руб</span>
              </button>
              <button class="big btn">
                <span>{{ product.diameter.big }} см</span>
                <span>{{ product.weightOnSmallDough.big }} г</span>
                <span>{{ product.prices.big }} руб</span>
              </button>
            </div>
          </div>
        </div>
        <div class="product__bottom">
          <div class="product__counter-product">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <div class="product__sum">
            <div class="product__price">{{ product.prices?product.prices.small:product.price }} <span>руб</span></div>
            <div class="product__weight">{{ product.weightOnSmallDough?product.weightOnSmallDough.small:product.weight }} г</div>
          </div>
        </div>
        <button class="product__btn-buy">+ в корзину</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  props: ['product']
}
</script>

<style lang="scss" scoped>
.title {
  font-weight: 700;
  margin-bottom: 20px;
  font-size: 16px;
}

.product {

  &__btn-buy{
    background-color: #efefef;
  }
  &__inner {
    display: flex;
  }

  &__left {
    width: 50%;
  }

  &__btn-back {
    width: 80px;
    height: 30px;
    font-weight: 700;
    border: 1px solid black;
  }

  &__img {
    height: 100%;
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

.btn {
  background-color: white;
  letter-spacing: 1px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;

  &:hover {
    background-color: #e5e5e9;
  }
}

.btn-active {
  background-color: $v_orange;
  color: white;

  &:hover {
    background-color: $v_orange !important;
  }
}


.small {
}

.active {
}

.middle {
}

.big {
}

.product {

  &__bottom {
    padding: 0 15px;
    display: flex;
    justify-content: space-around;
  }

  &__counter-product {
    border: 1px solid $v_orange;
    display: flex;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 20px;

    button {
      height: 40px;
      width: 40px;
      background: #F3F3F3;
      font-weight: 700;
      font-size: 30px;
    }

    span {
      font-weight: 700;
      font-size: 26px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      width: 40px;
      background: #F3F3F3;
    }
  }

  &__price {
    font-size: 26px;
    font-weight: 600;

    span {
      font-size: 22px;
    }
  }

  &__weight {
    font-size: 20px;
  }

  &__btn-buy {
    border: 1px solid $v_orange;
    border-radius: 10px;
    width: 100%;
    height: 60px;
    font-size: 18px;
    transition: 0.3s;

    &:hover {
      color: white;
      background-color: $v_orange;
    }
  }
}

</style>