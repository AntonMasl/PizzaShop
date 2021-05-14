<template>
  <li class="basket-card">
    <div class="inner">
      <div class="left">
        <div class="image">
          <img src="../assets/images/pizza1.png" alt="">
        </div>
        <div class="info">
          <div class="title">НАИМЕНОВАНИЕ</div>
          <div class="name">ПИЦЦА ПЕПЕРОНИ</div>
          <div class="weight"><span>Диаметр:</span> 25см</div>
          <div class="weight"><span>Вес:</span> 300 г</div>
          <div class="weight"><span>Тесто:</span> Традиционное</div>
        </div>
      </div>
      <div class="right">
        <div class="price-info">
          <div class="title">ЦЕНА</div>
          <div class="data">1000 руб</div>
        </div>
        <div class="count-info">
          <div class="title">КОЛИЧЕСТВО</div>
          <div class="data">9</div>
        </div>
        <div class="summa-info">
          <div class="title">СУММА</div>
          <div class="data">1000 руб</div>
        </div>
        <div class="delete">Удалить</div>
      </div>
    </div>
  </li>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.basket-card {
  font-size: 16px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
}
span{
  font-weight: 600;
}
.inner {
  display: flex;
  width: 100%;
  height: 140px;
  justify-content: space-between;
  padding: 10px;
}

.left {
  display: flex;
}

.image {
  margin-right: 20px;
  img {
    width: 120px;
    height: 100%;
  }
}

.info {
  div{
    margin-bottom: 5px;
  }
}

.title {
  text-decoration: underline;
  margin-bottom: 10px !important;
}

.name {
}

.weight {
}

.right {
  display: flex;
  .title{
    margin-bottom: 35px !important;
  }
  div{
    margin-right: 30px;
  }
}

.price-info {
}

.data{
  font-size: 18px;
  font-weight: 700;
}

.price {
}

.count-info {
}

.count {
}

.summa-info {
}

.delete {
  display: flex;
  align-items: center;
}
</style>