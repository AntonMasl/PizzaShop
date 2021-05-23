<template>
  <form @submit.prevent="createProduct">
    <div class="name">
      <label><span>Название:</span><input type="text" v-model="name" required></label>
    </div>

    <select class="select-css" v-model="selectedCategoryId" required>
      <option disabled value="">выбирите категорию</option>
      <option v-for="category in allCategories"
              :value="category._id">{{ category.name }}
      </option>
    </select>

    <div class="file-change">
      <span>Фото:</span>
      <input type="file" @change="fileChange" required>
    </div>

    <div v-if="selectedCategoryId" class="option">
      <div v-if="selectedCategoryName==='пицца'">
        <div>
          <div class="option__title">Диаметр:</div>
          <div class="option__item">
            <div><span>маленькая:</span><input type="number" disabled v-model.number="diameter.small"></div>
            <div><span>средняя:</span><input type="number" disabled v-model.number="diameter.middle"></div>
            <div><span>большая:</span><input type="number" disabled v-model.number="diameter.big"></div>
          </div>
        </div>
        <div>
          <div class="option__title">Вес на традиционном тесте:</div>
          <div class="option__item">
            <div><span>маленькая:</span><input type="number" v-model.number="weightOnTraditionalDough.small"></div>
            <div><span>средняя:</span><input type="number" v-model.number="weightOnTraditionalDough.middle"></div>
            <div><span>большая:</span><input type="number" v-model.number="weightOnTraditionalDough.big"></div>
          </div>
        </div>
        <div>
          <div class="option__title">Вес на тонком тесте:</div>
          <div class="option__item">
            <div><span>маленькая:</span><input type="number" v-model.number="weightOnSmallDough.small"></div>
            <div><span>средняя:</span><input type="number" v-model.number="weightOnSmallDough.middle"></div>
            <div><span>большая:</span><input type="number" v-model.number="weightOnSmallDough.big"></div>
          </div>
        </div>
        <div>
          <div class="option__title">Цена:</div>
          <div class="option__item">
            <div><span>маленькая:</span><input type="number" v-model.number="prices.small"></div>
            <div><span>средняя:</span><input type="number" v-model.number="prices.middle"></div>
            <div><span>большая:</span><input type="number" v-model.number="prices.big"></div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="option__nopizza">
          <div class="option__item-second">
            <div><span>Вес:</span><input type="number" v-model.number="weight"></div>
          </div>
          <div class="option__item-second">
            <div><span>Цена:</span><input type="number" v-model.number="price"></div>
          </div>
        </div>
      </div>
      <div>
        <div class="option__title">Пищевая ценность:</div>
        <div class="option__item">
          <div><span>энерг. цен.:</span><input type="number" v-model.number="foodValue.energyValue"></div>
          <div><span>белки:</span><input type="number" v-model.number="foodValue.proteins"></div>
          <div><span>жиры:</span><input type="number" v-model.number="foodValue.fatСontent"></div>
          <div><span>углеводы:</span><input type="number" v-model.number="foodValue.carbohydrates"></div>
        </div>
      </div>
      <div class="description">
        <div class="option__title">Описание:</div>
        <textarea v-model="description"></textarea>
      </div>
    </div>
    <button>Создать</button>
  </form>
</template>

<script>
import axios from "axios";
import {mapActions, mapGetters} from "vuex";

export default {
  data() {
    return {
      name: '',
      image: null,
      // category: {
      //   id: '',
      //   name: ''
      // },
      selectedCategoryName: '',
      selectedCategoryId: '',
      diameter: {
        small: 25,
        middle: 32,
        big: 40
      },
      weight: 340,
      weightOnTraditionalDough: {
        small: 100,
        middle: 100,
        big: 100
      },
      weightOnSmallDough: {
        small: 100,
        middle: 100,
        big: 100
      },
      prices: {small: 100, middle: 100, big: 100},
      price: 200,
      foodValue: {
        energyValue: 100,
        proteins: 100,
        fatСontent: 100,
        carbohydrates: 100
      },
      description: ''
    }
  },
  async mounted() {
    await this.getCategories()
  },
  computed: {
    ...mapGetters(["allCategories"])
  },
  methods: {
    ...mapActions(["getCategories"]),
    fileChange(e) {
      this.image = e.target.files[0]
    },
    async createProduct() {
      const formData = new FormData()
      formData.append('name', this.name)
      formData.append('image', this.image)
      formData.append('category', this.selectedCategoryId)
      if (this.selectedCategoryName === 'пицца') {
        formData.append('diameter', JSON.stringify(this.diameter))
        formData.append('weightOnTraditionalDough', JSON.stringify(this.weightOnTraditionalDough))
        formData.append('weightOnSmallDough', JSON.stringify(this.weightOnSmallDough))
        formData.append('prices', JSON.stringify(this.prices))
      } else {
        formData.append('price', this.price)
        formData.append('weight', this.weight)
      }
      formData.append('foodValue', JSON.stringify(this.foodValue))
      formData.append('description', this.description)
      await axios.post(`http://localhost:3000/api/product/`, formData)
    }
  },
  watch: {
    selectedCategoryId(val) {
      this.selectedCategoryName = this.allCategories.find(item => item._id === val).name
      console.log(this.selectedCategoryName)
    }
  }
}

</script>

<style lang="scss" scoped>
.file-change{
  span{
    font-size: 16px;
    font-weight: 700;
    display: inline-block;
    width: 70px;
  }
}

.option {
  margin-top: 30px;
  &__nopizza{
    margin-bottom: 30px;
  }

  &__item-second {
    font-weight: 700;
    margin-bottom: 15px;
    font-size: 16px;

    span {
      display: inline-block;
      width: 50px;
    }
  }

  &__title {
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 700;
    text-decoration: underline;
  }

  &__item {
    padding-left: 10px;
    margin-bottom: 15px;

    div {
      margin-bottom: 5px;
    }

    span {
      width: 100px;
      display: inline-block;
    }
  }
}

form {
  font-size: 14px;
  max-width: 500px;
  margin: 0 auto;
  box-shadow: 0 0 25px 10px $v_orange;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 33px 24px 23px;
  display: flex;
  flex-direction: column;
}

.name {
  margin-bottom: 20px;

  label {
    display: flex;
    align-items: center;
  }

  span {
    display: inline-block;
    font-size: 16px;
    margin-right: 10px;
    font-weight: 700;
  }

  input {
    width: 100%;
    height: 38px !important;
  }
}

input:not([type=file]) {
  border: 1px solid #d7d9e1;
  border-radius: 8px;
  height: 30px;
  padding: 0 25px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  &::placeholder {
    color: #d7d9e1;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px 2px $v-orange;
  }
}

button {
  margin-top: 40px;
  margin-right: 30px;
  width: 200px;
  height: 48px;
  background: $v_orange;
  letter-spacing: 1px;
  border-radius: 8px;
  font-size: 18px;
  line-height: 17px;
  font-weight: 700;
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


.select-css {
  display: block;
  font-size: 20px;
  font-family: sans-serif;
  letter-spacing: 1px;
  font-weight: 700;
  color: #444;
  line-height: 1;
  padding: 8px 20px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0;
  margin-bottom: 30px;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, .04);
  border-radius: .5em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'), linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
  background-repeat: no-repeat, repeat;
  background-position: right .7em top 50%, 0 0;
  background-size: .65em auto, 100%;
}

.select-css::-ms-expand {
  display: none;
}

.select-css:hover {
  border-color: #888;
}

.select-css:focus {
  border-color: #aaa;
  box-shadow: 0 0 5px 2px $v-orange;
  box-shadow: 0 0 0 3px -moz-mac-focusring;
  color: #222;
  outline: none;
}

.select-css option {
  font-weight: normal;
}

*[dir="rtl"] .select-css, :root:lang(ar) .select-css, :root:lang(iw) .select-css {
  background-position: left .7em top 50%, 0 0;
  padding: .6em .8em .5em 1.4em;
}

.description{
    textarea{
      border: 1px solid #d7d9e1;
      padding: 10px;
      width: 100%;
      height: 70px;
    }
}

</style>