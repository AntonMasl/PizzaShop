<template>
  <div class="input-search">
    <button @click="clearValue">&#10006</button>
    <input
        type="text"
        placeholder="Найти..."
        v-model="value"
        @input="onSearch"
    >
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  data(){
    return{
      value: ''
    }
  },
  methods: {
    ...mapMutations(['searchProducts']),
    onSearch(){
      this.searchProducts(this.value)
    },
    clearValue(){
      this.value = ''
      this.searchProducts(this.value)
    }
  }
}
</script>

<style scoped lang="scss">
.input-search {
  width: 500px;
  display: inline-block;
  position: relative;

  input {
    width: 100%;
    border: 1px solid black;
    border-radius: 8px;
    height: 38px;
    padding: 0 25px;
    font-weight: 700;
    font-size: 18px;
    line-height: 19px;

    &::placeholder {
      color: #d7d9e1;
    }

    &:focus {
      border-color: $v_orange;
      outline: none;
      box-shadow: 0 0 5px 3px $v-orange;
    }
  }

  button {
    color: white;
    background-color: red;
    font-weight: 700;
    font-size: 20px;
    height: 38px;
    width: 38px;
    border-radius: 0 10px 10px 0;
    position: absolute;
    right: -2px;
    top: 0;
    &:hover{
      background-color: $v-orange;
    }
  }

}


</style>