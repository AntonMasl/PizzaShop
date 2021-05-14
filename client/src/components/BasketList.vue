<template>
  <ul>
    <div class="title">КОРЗИНА</div>
    <BasketListItem/>
  </ul>
</template>
<script>
import BasketListItem from "@/components/BasketListItem";

export default {
  components: {BasketListItem}
}
</script>

<style scoped>
.title {
  text-align: center;
  font-size: 30px;
}
</style>