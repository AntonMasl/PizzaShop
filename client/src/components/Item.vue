<template>
  <div class="item">
    <div class="item__inner">
      <div class="item__left">
        <button class="item__btn-back" @click="$router.go(-1)">< Назад</button>
        <div class="item__img">
          <img :src="`http://localhost:3000/${item.imageSrc}`" alt="">
        </div>
      </div>
      <div class="item__right">
        <div class="item__name">{{ item.name }}</div>
        <div class="item__foodValue">
          <div class="title">Пищевая ценость на 100 г</div>
          <ul>
            <li><span>Энерг. ценность</span><span>{{ item.foodValue.energyValue }} ккал</span></li>
            <li><span>Белки</span><span>{{ item.foodValue.proteins }} г</span></li>
            <li><span>Жиры</span><span>{{ item.foodValue.fatСontent }} г</span></li>
            <li><span>Углеводы</span><span>{{ item.foodValue.carbohydrates }} г</span></li>
          </ul>
        </div>
        <div class="item__description">
          <div class="title">Описание</div>
          <div>{{ item.description }}</div>
        </div>
        <div v-if="item.category.name==='pizza'">
          <div class="item__dough-diameter">
            <div class="title">Тесто</div>
            <div class="buttons">
              <button class="btn btn-active">Традиционное</button>
              <button class="btn">Тонкое</button>
            </div>
          </div>
          <div class="item__size">
            <div class="title">Размер</div>
            <div class="buttons-size">
              <button class="small btn btn-active">
                <span>{{ item.diameter.small }} см</span>
                <span>{{ item.weightOnSmallDough.small }} г</span>
                <span>{{ item.prices.small }} руб</span>
              </button>
              <button class="middle btn">
                <span>{{ item.diameter.middle }} см</span>
                <span>{{ item.weightOnSmallDough.middle }} г</span>
                <span>{{ item.prices.middle }} руб</span>
              </button>
              <button class="big btn">
                <span>{{ item.diameter.big }} см</span>
                <span>{{ item.weightOnSmallDough.big }} г</span>
                <span>{{ item.prices.big }} руб</span>
              </button>
            </div>
          </div>
        </div>
        <div class="item__bottom">
          <div class="item__counter-product">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <div class="item__sum">
            <div class="item__price">{{ item.prices?item.prices.small:item.price }} <span>руб</span></div>
            <div class="item__weight">{{ item.weightOnSmallDough?item.weightOnSmallDough.small:item.weight }} г</div>
          </div>
        </div>
        <button class="item__btn-buy">+ в корзину</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  props: ['item']
}
</script>

<style lang="scss" scoped>
.title {
  font-weight: 700;
  margin-bottom: 20px;
  font-size: 16px;
}

.item {

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

.item {

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