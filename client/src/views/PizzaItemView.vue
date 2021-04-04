<template>
  <div>
    <Header/>
    <Menu/>
    <Loader v-if="loading"/>
    <PizzaItem v-else :pizzaItem="pizzaItem"/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import PizzaItem from "@/components/PizzaItem";
import {mapActions, mapGetters, mapMutations} from "vuex";
import Loader from "@/components/loader";

export default {
  components: {Loader, PizzaItem, Menu, Header},
  data(){
    return{
      loading: true
    }
  },
  async mounted() {
    await this.getOnePizza(this.$route.params.id)
    this.loading = false
  },

  destroyed() {

  },
  methods: {
    ...mapActions(['getOnePizza']),
  },
  computed: {
    ...mapGetters(['pizzaItem'])
  },
}
</script>

<style scoped>
</style>