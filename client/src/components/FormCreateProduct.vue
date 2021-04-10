<template>
  <form @submit.prevent="createProduct">
    <label>name: <input type="text" v-model="name"></label>
    <div><input type="file" @change="fileChange"></div>
    <div>
      <select v-model="selectedCategoryId">
        <option disabled value="">выбирите категорию</option>
        <option v-for="category in categories"
                :value="category._id">{{ category.name }}
        </option>
      </select>
      <pre v-if="selectedCategoryName === 'pizza'">
        weightOnTraditionalDough:
          small: <input type="number" v-model.number="weightOnTraditionalDough.small">
          middle:<input type="number" v-model.number="weightOnTraditionalDough.middle">
          big:<input type="number" v-model.number="weightOnTraditionalDough.big">
      </pre>
      <pre v-if="selectedCategoryName === 'pizza'">
        weightOnSmallDough:
          small: <input type="number" v-model.number="weightOnSmallDough.small">
          middle:<input type="number" v-model.number="weightOnSmallDough.middle">
          big:<input type="number" v-model.number="weightOnSmallDough.big">
      </pre>
      <pre v-if="selectedCategoryName === 'pizza'">
        prices:
          small: <input type="number" v-model.number="prices.small">
          middle:<input type="number" v-model.number="prices.middle">
          big:<input type="number" v-model.number="prices.big">
      </pre>
      <div v-if="selectedCategoryName !== 'pizza'">
        weight: <input type="number" v-model.number="weight">
      </div>
      <div v-if="selectedCategoryName !== 'pizza'">
        price: <input type="number" v-model.number="price">
      </div>
      <pre>
        foodValue:
          energyValue: <input type="number" v-model.number="foodValue.energyValue">
          proteins:<input type="number" v-model.number="foodValue.proteins">
          fatСontent:<input type="number" v-model.number="foodValue.fatСontent">
          carbohydrates:<input type="number" v-model.number="foodValue.carbohydrates">
      </pre>
      <div>
        description: <textarea v-model="description"></textarea>
      </div>

    </div>
    <button>CREATE</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      categories: [],
      name: '',
      image: null,
      // category: {
      //   id: '',
      //   name: ''
      // },
      selectedCategoryName: '',
      selectedCategoryId: '',
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
    this.categories = await this.getCategories()
    console.log(this.price)
  },
  methods: {
    fileChange(e) {
      this.image = e.target.files[0]
    },
    async getCategories() {
      const responce = await axios.get('http://localhost:3000/api/category')
      console.log(responce)
      return responce.data
    },
    async createProduct() {
      const formData = new FormData()
      formData.append('name', this.name)
      formData.append('image', this.image)
      formData.append('category', this.selectedCategoryId)
      if (this.selectedCategoryName === 'pizza') {
        formData.append('weightOnTraditionalDough', JSON.stringify(this.weightOnTraditionalDough))
        formData.append('weightOnSmallDough', JSON.stringify(this.weightOnSmallDough))
        formData.append('prices', JSON.stringify(this.prices))
      } else {
        formData.append('price', this.price)
        formData.append('weight', this.weight)
      }
      formData.append('foodValue', JSON.stringify(this.foodValue))
      formData.append('description', this.description)
      await axios.post(`http://localhost:3000/api/${this.selectedCategoryName}`, formData)
    }
  },
  watch: {
    selectedCategoryId(val) {
      this.selectedCategoryName = this.categories.find(item => item._id === val).name
      console.log(this.selectedCategoryName)
    }
  }
}

</script>

<style lang="scss" scoped>
input {
  border: 1px solid black;
}

input {
  margin-bottom: 20px;
}

pre {
  input {
    margin-bottom: 0;
  }
}

select {
  margin-bottom: 20px;
  outline: 1px solid black;
  border: 1px solid black;
}

textarea {
  border: 1px solid black;
}

button {
  width: 100px;
  height: 70px;
  background-color: green;
}
</style>