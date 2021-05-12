<template>
  <div>
    <div class="option">
      <SortPrice/>
      <InputSearchProduct/>
    </div>
    <Loader v-if="loading"/>
    <ProductList v-else :products="visibleProducts"/>
  </div>
</template>
<script>

import {mapGetters, mapActions} from 'vuex';
import Menu from "@/components/Menu";
import Loader from "@/components/loader";
import ProductList from "@/components/ProductList";
import InputSearchProduct from "@/components/InputSearch";
import SortPrice from "@/components/SortPrice";

export default {
  components: {SortPrice, InputSearchProduct, ProductList, Loader, Menu},
  async mounted() {
    await this.getProducts(this.categoryId)
  },
  watch: {
    categoryId() {
      this.getProducts(this.categoryId)
    }
  },

  computed: {
    ...mapGetters(["categoryId", "loading", "visibleProducts"])
  },

  methods: {
    ...mapActions(['getProducts']),
  },
}
</script>

<style lang="scss" scoped>
.option {
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
}
</style>