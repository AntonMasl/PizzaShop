<template>
  <nav class="menu">
    <ul class="menu__list">
      <li><a href="#">Пицца</a></li>
      <li><a href="#">Салаты</a></li>
      <li><a href="#">Десерты</a></li>
      <li><a href="#">Напитки</a></li>
      <li><a href="#">Соусы</a></li>
    </ul>
    <a class="basket" href="#">
      <span class="summa">10000000р</span>
      <span class="count">11</span>
    </a>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@font-face {
  font-family: 'icomoon';
  src: url('~@/assets/fonts/icomoon.eot?mhap53');
  src: url('~@/assets/fonts/icomoon.eot?mhap53#iefix') format('embedded-opentype'),
  url('~@/assets/fonts/icomoon.ttf?mhap53') format('truetype'),
  url('~@/assets/fonts/icomoon.woff?mhap53') format('woff'),
  url('~@/assets/fonts/icomoon.svg?mhap53#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

.menu {
  padding: 20px 50px;
  background: white;
  margin-bottom: 30px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0px;

  .menu__list {
    display: flex;
    a {
      display: inline-block;
      margin-right: 15px;
      color: black;
      font-size: 23px;
      font-weight: 700;

    }
  }

  li {
    &:last-child {
      a {
        margin-right: 0;
      }
    }
  }
}

.basket {
  font-size: 18px;
  position: relative;
  color: black;

  .summa {
    position: absolute;
    left: -6px;
    top: 50%;
    transform: translate(-100%, -50%);
  }

  .count {
    position: absolute;
    right: -5px;
    top: 4px;
    background: $v_orange;
    border-radius: 50%;
    width: 23px;
    height: 23px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &::after {
    content: "\f291";
    font-family: 'icomoon';
    font-size: 40px;
  }
}
</style>