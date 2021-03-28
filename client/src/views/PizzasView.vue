<template>
  <div>
    <Header/>
    <Menu/>
    <PizzaList :pizzas="allPizzas"/>
  </div>
</template>
<script>

import {mapGetters, mapActions} from 'vuex';
import PizzaList from "@/components/PizzaList";
import Header from "@/components/Header";
import Menu from "@/components/Menu";

export default {
  components: {Menu, Header, PizzaList},
  mounted() {
    this.getPizzas()
  },
  computed: {
    ...mapGetters(['allPizzas'])
  },

  methods: {
    ...mapActions(['getPizzas']),
  },
}
</script>

<style>

</style>