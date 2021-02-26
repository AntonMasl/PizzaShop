<template>
  <div>
    <PizzaList :pizzas="allPizzas"/>
  </div>
</template>
<script>

import {mapGetters, mapActions} from 'vuex';
import PizzaList from "@/components/PizzaList";

export default {
  components: {PizzaList},
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