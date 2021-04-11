<template>
  <div>
    <Loader v-if="loading"/>
    <Product v-else :product="productItem"/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import {mapActions, mapGetters} from "vuex";
import Loader from "@/components/loader";
import Product from "@/components/Product";

export default {
  components: {Product, Loader, Menu, Header},
  data(){
    return{
      loading: true
    }
  },
  async mounted() {
    await this.getOneProduct(this.$route.params.id)
    this.loading = false
  },

  methods: {
    ...mapActions(['getOneProduct']),
  },
  computed: {
    ...mapGetters(['productItem'])
  },
}
</script>

<style scoped>
</style>