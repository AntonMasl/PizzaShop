<template>
  <li class="card" :class="{'card-active': isActive,}">
    <div class="card__inner">
      <div class="card_link-info"
           @click="showItemPage"
           @mouseover="isActive=true"
           @mouseout="isActive=false">
        <div class="card__img">
          <img :src="`http://localhost:3000/${pizza.imageSrc}`" alt="">
        </div>
        <div class="card__name">{{ pizza.name }}</div>
      </div>
      <div class="card__specification-pizza">
        <div class="dough">
          <div class="active">Тонкое</div>
          <div>Традиционное</div>
        </div>
        <div class="diameter">
          <div class="active">{{ pizza.diameter.small }}</div>
          <div>{{ pizza.diameter.middle }}</div>
          <div>{{ pizza.diameter.big }}</div>
        </div>
      </div>
      <div class="card__bottom">
        <div class="card__counter-product">
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
        <div class="card__sum">
          <div class="card__price">{{ pizza.price.small }} <span>руб</span></div>
          <div class="card__weight">{{ pizza.weightOnSmallDough.small }} г</div>
        </div>
      </div>
      <button class="card__btn-buy">+ в корзину</button>
    </div>
  </li>
</template>

<script>
import {mapMutations, mapActions} from "vuex";
import router from "@/router";

export default {
  props: ['pizza'],
  data() {
    return {
      isActive: false
    }

  },
  methods: {
    // ...mapActions(['showPizzaItem'])
    // ...mapMutations(['showPizzaItemView']),
    showItemPage() {
      // this.showPizzaItemView(this.pizza._id)
      this.$router.push({path: `/pizzas/${this.pizza._id}`})
    },

  }
}
</script>

<style lang="scss" scoped>
.card-active {
  box-shadow: 0 0 15px 8px $v_orange;
  border: 1px solid $v_orange !important;
}

.card {
  max-width: 280px;
  margin-bottom: 50px;
  margin-right: 10px;
  margin-left: 10px;
  border: 1px solid black;
  background-color: white;
  text-align: center;
  border-radius: 15px;
  overflow: hidden;

  &:hover {
    border: 1px solid $v_orange
  }

  .card_link-info {
    cursor: pointer;
  }

  &__img {
    height: 275px;
    position: relative;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }

  &__inner {

  }

  &__name {
    font-size: 20px;
    font-weight: 800;
    line-height: 24px;
    margin-bottom: 22px;
  }

  &__specification-pizza {
    background: #F3F3F3;
    border-radius: 10px;
    padding: 7px 5.7px;
    margin-bottom: 20px;

    .active {
      background-color: white;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
      border-radius: 5px;
    }
  }

  &__bottom {
    padding: 0 15px;
    display: flex;
    justify-content: space-around;
  }

  &__counter-product {
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
    height: 50px;
    font-size: 18px;
    transition: 0.3s;

    &:hover {
      color: white;
      background-color: $v_orange;
    }
  }
}

.dough {
  display: flex;
  justify-content: space-between;
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

.diameter {
  display: flex;
  justify-content: space-between;

  div {
    width: 86px;
    font-size: 14px;
    line-height: 17px;
    font-weight: 700;
    padding: 8px 0;
    cursor: pointer;
  }
}
</style>