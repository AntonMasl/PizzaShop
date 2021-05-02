<template>
  <div class="calculation-price">
    {{ selectedDough }}
    {{ selectedDiameter }}
    <div class="specification-pizza" v-if="product.category?product.category.name==='пицца':''">
      <b-form-group>
        <b-form-radio-group
            id="btn-radios-"
            v-model="selectedDough"
            :options="typeDough"
            button-variant="outline-primary"
            size="lg"
            name="radio-btn-outline"
            buttons
        ></b-form-radio-group>
      </b-form-group>
      <b-form-group>
        <b-form-radio-group
            id="btn-radios-"
            v-model="selectedDiameter"
            :options="diameters"
            button-variant="outline-primary"
            size="lg"
            name="radio-btn-outline"
            buttons
        ></b-form-radio-group>
      </b-form-group>
    </div>
    <div class="bottom">
      <div class="counter-product">
        <button @click="countProduct!=1?countProduct--:''">-</button>
        <span>{{ countProduct }}</span>
        <button @click="countProduct++">+</button>
      </div>
      <div class="sum" v-if="product.category?product.category.name === 'пицца':''">
        <div class="price">{{ countProduct * product.prices[selectedDiameter] }} <span>руб</span></div>
        <div class="weight">
          {{
            selectedDough === "small" ? countProduct * product.weightOnSmallDough[selectedDiameter] : countProduct * product.weightOnTraditionalDough[selectedDiameter]
          }}
          г
        </div>
      </div>
      <div class="sum" v-else>
        <div class="price">{{ product.price }} <span>руб</span></div>
        <div class="weight">
          {{ product.weight }} г
        </div>
      </div>
    </div>
    <button @click="addToBasket" class="btn-buy">+ в корзину</button>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  props: ['product'],
  data() {
    return {
      countProduct: 1,
      selectedDough: 'small',
      typeDough: [
        {text: 'тонкое', value: 'small'},
        {text: 'традиционное', value: 'traditional'},
      ],
      selectedDiameter: 'small',
      diameters: [
        {text: this.product.diameter ? this.product.diameter.small + " см" : '', value: 'small'},
        {text: this.product.diameter ? this.product.diameter.middle + " см" : '', value: 'middle'},
        {text: this.product.diameter ? this.product.diameter.big + " см" : '', value: 'big'},
      ]
    }
  },
  computed: {
    ...mapGetters(["isAuth"])
  },
  methods: {
    addToBasket() {
      if (this.isAuth) {
        console.log(this.product)
      } else {
        this.$router.push({path: '/auth/login'})
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
  width: 100%;

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

.specification-pizza {
  background: #F3F3F3;
  padding: 7px 7px;
  margin-bottom: 20px;

  .active {
    background-color: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
    border-radius: 5px;
  }
}

.bottom {
  padding: 0 15px;
  display: flex;
  justify-content: space-around;
}


.counter-product {
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

    &:hover {
      background: $v_orange;
      color: white;
    }
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

.price {
  font-size: 20px;
  font-weight: 600;

  span {
    font-size: 14px;
  }
}

.btn-buy {
  width: 100%;
  height: 50px;
  font-size: 18px;
  transition: 0.3s;

  &:hover {
    color: white;
    background-color: $v_orange;
  }
}

.sum {
  min-width: 100px;
}
</style>