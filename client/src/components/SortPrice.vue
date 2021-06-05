<template>
  <div class="sort-price">
    <div class="sort-title">Сортировка:</div>
    <select v-model="selectedSortType" @change="onSort">
      <option disabled value="">выбирите</option>
      <option value="">отменить</option>
      <option value="inc">цена <span class="arrow">	&#9650;</span></option>
      <option value="inc">цена <span class="arrow">&#9660;</span></option>
    </select>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  data() {
    return {
      selectedSortType: '',
    }
  },
  methods: {
    ...mapMutations(["sortProducts"]),
    onSort() {
      this.sortProducts(this.selectedSortType)
    }
  }
}
</script>

<style lang="scss" scoped>
.sort-title {
  margin-right: 10px;
  font-size: 16px;
}

select {
  margin-right: 30px;
  height: 30px;
  border: 1px solid black;
  font-size: 16px;
  border-radius: 5px 5px 0 0;
}
.arrow{
  background-color: red;
}
.sort-price {
  display: flex;
  align-items: center;
}
</style>