<template>
  <ul class="basket-list">
    <ul class="list">
      <div class="left">
        <li>Фото</li>
        <li>Наименование</li>
      </div>
      <div class="right">
        <li>Цена</li>
        <li>Кол-во</li>
        <li>Сумма</li>
      </div>
    </ul>
    <BasketListItem
        v-for="item in basket"
        :item="item"
        :key='Math.random().toString(16).slice(2)'
    />
  </ul>
</template>
<script>
import BasketListItem from "@/components/BasketListItem";

export default {
  components: {BasketListItem},
  props: ["basket"]
}
</script>

<style scoped lang="scss">
.basket-list{

}


.list {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 15px;

  li{
    font-size: 20px;
    text-decoration: underline;
  }

  div {
    display: flex;
  }
  .left{
    li{
      &:first-child{
        width: 100px;
        text-align: center;
        margin-right: 20px;
      }
      &:last-child{

        width: 160px;
      }
    }
  }
  .right{
    margin-right: 150px;
    li{
      margin-right: 40px;
      margin-left: 40px;
      &:nth-child(1){
        margin-right: 35px;
      }
      &:nth-child(2){
        margin-right: 25px;
      }

    }
  }

}
</style>