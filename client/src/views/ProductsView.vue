<template>
  <div>
    <Loader v-if="loading"/>
    <ProductList v-else :products="allProducts"/>
  </div>
</template>
<script>

import {mapGetters, mapActions} from 'vuex';
import Menu from "@/components/Menu";
import Loader from "@/components/loader";
import ProductList from "@/components/ProductList";

export default {
  components: {ProductList, Loader, Menu},
  async mounted() {
    await this.getProducts(this.categoryId)
  },
  watch: {
    categoryId(){
      this.getProducts(this.categoryId)
    }
  },

  computed: {
    ...mapGetters(['allProducts',"categoryId","loading"])
  },

  methods: {
    ...mapActions(['getProducts']),
  },
}
</script>

<style scoped>

</style>