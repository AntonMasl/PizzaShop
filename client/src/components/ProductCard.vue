<template>
  <li class="card" :class="{'card-active': isActive}">
    <div class="card__inner">
      <div class="card_link-info"
           @click="showProductPage"
           @mouseover="isActive=true"
           @mouseout="isActive=false">
        <div class="card__img">
          <img :src="`http://localhost:3000/${product.imageSrc}`" alt="">
        </div>
        <div class="card__name">{{ product ? product.name : '' }}</div>
      </div>
      <CalculationPrice :product="product"/>
    </div>
  </li>
</template>

<script>

import CalculationPrice from "@/components/CalculationPrice";
export default {
  components: {CalculationPrice},
  props: ['product'],
  data() {
    return {
      isActive: false,
    //   selectedDough: 'small',
    //   typeDough: [
    //     {text: 'тонкое', value: 'small'},
    //     {text: 'традиционное', value: 'traditional'},
    //   ],
    //   selectedDiameter: 'small',
    //   diameters: [
    //     {text: this.product.diameter ? this.product.diameter.small : '', value: 'small'},
    //     {text: this.product.diameter ? this.product.diameter.middle : '', value: 'middle'},
    //     {text: this.product.diameter ? this.product.diameter.big : '', value: 'big'},
    //   ]
     }
  },

  methods: {
    showProductPage() {
      this.$router.push({path: `/products/${this.product._id}`})
    },

  }
}
</script>

<style lang="scss">
.form-group {
  margin-bottom: 0 !important;

  &:first-child {
    margin-bottom: 15px !important;
  }
}

.btn-outline-primary:not(:disabled):not(.disabled):active {
  background-color: $v_orange !important;
  border-color: $v_orange !important;
}

.btn-outline-primary:not(:disabled):not(.disabled).active:focus {
  box-shadow: none !important;
}

.btn-group {
  width: 90%;

  label {
    width: 50%;
  }

  .btn {
    padding: 5px !important;
  }
}

.btn-group-toggle {

  .focus {
    box-shadow: none !important
  }

  .btn-outline-primary {
    font-size: 14px !important;

    &:active {

    }

    color: black;
    border-color: $v_orange;

    &:hover {
      background-color: $v_orange_hover;
      border-color: $v_orange;
    }
  }

  .active {
    background-color: $v_orange !important;
    border-color: $v_orange !important;
  }
}

.card-active {
  box-shadow: 0 0 15px 8px $v_orange;
  border: 1px solid $v_orange !important;
}

.card {
  width: 280px;
  margin-bottom: 50px;
  margin-right: 10px;
  margin-left: 10px;
  border: 1px solid black;
  background-color: white;
  text-align: center;
  border-radius: 15px !important;
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
    margin-bottom: 15px;

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


  &__btn-buy {
    background-color: #efefef;
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
</style>