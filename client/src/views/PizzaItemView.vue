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

  mounted() {
    this.getOnePizza(this.$route.params.id)
  },
  destroyed() {
    this.isLoaded(true)
  },

  methods: {
    ...mapActions(['getOnePizza']),
    ...mapMutations(['isLoaded'])
  },
  computed: {
    ...mapGetters(['pizzaItem', "loading"])
  },
}
</script>

<style scoped>
</style>