<template>
  <button class="btn-back" @click="$router.go(-1)">< Назад</button>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="scss">
  button{
    width: 80px;
    height: 30px;
    font-weight: 700;
    border: 1px solid black;
  }
</style>