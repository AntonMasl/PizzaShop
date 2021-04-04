<template>
  <form @submit.prevent="createPizza">
    {{categories}}
    <label>name: <input type="text" v-model="name"></label>
    <div><input type="file" @change="fileChange"></div>
    <div>
      <select v-model="selectedCategoryId">
        <option disabled value="">выбирите категорию</option>
        <option v-for="category in categories" :value="category._id">{{ category.name }}</option>
      </select>
      <pre>
        weightOnTraditionalDough:
          small: <input type="number" v-model.number="weightOnTraditionalDough.small">
          middle:<input type="number" v-model.number="weightOnTraditionalDough.middle">
          big:<input type="number" v-model.number="weightOnTraditionalDough.big">
      </pre>
      <pre>
        weightOnSmallDough:
          small: <input type="number" v-model.number="weightOnSmallDough.small">
          middle:<input type="number" v-model.number="weightOnSmallDough.middle">
          big:<input type="number" v-model.number="weightOnSmallDough.big">
      </pre>
      <pre>
        price:
          small: <input type="number" v-model.number="price.small">
          middle:<input type="number" v-model.number="price.middle">
          big:<input type="number" v-model.number="price.big">
      </pre>
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
      selectedCategoryId: '',
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
      price: {
        small: 100,
        middle: 100,
        big: 100
      },
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
    async createPizza() {
      const formData = new FormData()
      formData.append('name', this.name)
      formData.append('image', this.image)
      formData.append('category', this.selectedCategoryId)
      formData.append('weightOnTraditionalDough', JSON.stringify(this.weightOnTraditionalDough))
      formData.append('weightOnSmallDough', JSON.stringify(this.weightOnSmallDough))
      formData.append('price', JSON.stringify(this.price))
      formData.append('foodValue', JSON.stringify(this.foodValue))
      formData.append('description', this.description)
      await axios.post('http://localhost:3000/api/pizza', formData)
    }
  },
  watch: {
    selectedCategoryId(val){
      console.log(val)
      console.log(this.categories)
       let a = this.categories.find(item=>item._id === val)
      console.log(a)
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