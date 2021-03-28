<template>
  <nav class="menu">
    <ul class="menu__list">
      <li>
        <router-link to="/pizzas">Пицца</router-link>
      </li>
      <li>
        <router-link to="/salads">Салаты</router-link>
      </li>
      <li>
        <router-link to="/desserts">Десерты</router-link>
      </li>
      <li>
        <router-link to="/drinks">Напитки</router-link>
      </li>
      <li>
        <router-link to="/sauces">Соусы</router-link>
      </li>
      <li>
        <router-link to="/form">FormCreate</router-link>
      </li>
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
  margin-bottom: 70px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  z-index: 5;
  top: 0px;

  .menu__list {
    display: flex;

    .router-link-exact-active {
      color: $v_orange;
      box-shadow: 0 3px 0 0 $v_orange;

      &:hover {
        color: $v_orange;
      }
    }

    a {
      padding-bottom: 3px;
      display: inline-block;
      margin-right: 15px;
      color: black;
      font-size: 25px;
      font-weight: 800;

      &:hover {
        color: gray;
      }
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

  &:hover {
    .count {
      background-color: #02a72c;
      box-shadow: 0 0 8px 5px #02a72c;
    }
  }


  .summa {
    position: absolute;
    left: -6px;
    top: 50%;
    transform: translate(-100%, -50%);
  }

  .count {
    position: absolute;
    color: white;
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
    transition: 0.2s;
  }

  &::after {
    content: "\f291";
    font-family: 'icomoon';
    font-size: 40px;
  }
}
</style>