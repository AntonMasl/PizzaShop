<template>
  <div>
    {{categoryId}}
    <Header/>
    <Menu/>
    <button class="link_create">
      <router-link to="/form">FormCreate</router-link>
    </button>
    <Loader v-if="loading"/>
    <ProductList v-else :products="allProducts"/>
  </div>
</template>
<script>

import {mapGetters, mapActions} from 'vuex';
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Loader from "@/components/loader";
import ProductList from "@/components/ProductList";

export default {
  components: {ProductList, Loader, Menu, Header},
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

<style>
    button{
      width: 100px;
      height: 30px;
      background-color: #ff9900;
    }
</style>