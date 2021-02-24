<template>
  <ul>
   <PizzaCard
       v-for="pizza in pizzas"
       :pizza="pizza"
       :key="pizza.id"
   />
  </ul>
</template>

<script>
import PizzaCard from "@/components/PizzaCard";
export default {
  components: {PizzaCard},
  props: ['pizzas']
}
</script>

<style lang="scss">

</style>