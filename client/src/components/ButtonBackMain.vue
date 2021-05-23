<template>
  <button class="btn-back" @click="goBackMain">< на главную</button>
</template>

<script>
  export default {
    methods: {
      goBackMain(){
          this.$router.push({path: "/products"})
      }
    }
  }
</script>

<style scoped lang="scss">
  button{
    width: 80px;
    height: 35px;
    font-weight: 700;
    border: 1px solid black;
  }
</style>