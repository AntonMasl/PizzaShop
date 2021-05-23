<template>
  <div class="admin">
    <div class="admin__header">
      <ButtonBack/>
      <router-link class="link" to="create-product">Создать продукт</router-link>
      <router-link class="link" to="orders">Заказы</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import ButtonBack from "@/components/ButtonBackMain";

export default {
  components: {ButtonBack}
}
</script>

<style scoped lang="scss">
.btn-back {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  border: none;
  border-right: 1px solid black;
}

.admin__header {
  overflow: hidden;
  border-radius: 10px;
  padding: 20px 50px;
  background: white;
  margin-bottom: 40px;
  border: 1px solid black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: sticky;
  z-index: 5;
  top: 0px;
  display: flex;

  .link {
    font-size: 26px;
    font-weight: 800;

    &:hover {
      color: gray;
    }

    &.router-link-active {
      color: $v-orange;
      text-decoration: underline !important;
    }
  }
}
</style>