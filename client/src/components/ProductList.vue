<template>
  <ul>
    <ProductCard
        v-for="product in products"
        :product="product"
        :key="product._id"
    />
  </ul>
</template>

<script>
import ProductCard from "@/components/ProductCard";

export default {
  components: {ProductCard},
  props: ['products']
}
</script>

<style scoped lang="scss">
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

}
</style>