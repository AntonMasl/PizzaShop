<template>
  <ul>
    <ItemCard
        v-for="item in items"
        :item="item"
        :key="item.id"
    />
  </ul>
</template>

<script>
import ItemCard from "@/components/ItemCard";

export default {
  components: {ItemCard},
  props: ['items']
}
</script>

<style scoped lang="scss">
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

}
</style>