<template>
  <div class="counter-product">
    <button>-</button>
    <span>1</span>
    <button>+</button>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.counter-product {
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;

  button {
    height: 32px;
    width: 32px;
    background: #F3F3F3;
    font-weight: 400;
    font-size: 20px;
  }

  span {
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 32px;
    background: #F3F3F3;
  }
}
</style>