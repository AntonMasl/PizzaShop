<template>
  <header class="header">
    <div class="header__inner">
      <a href="#">
        <img class="logo" src="@/assets/images/logo-pizza.png" alt="">
      </a>
      <div class="header__top-items">
        <div class="header__top-item location">Тула</div>
        <div class="header__top-item phone">
          <a href="tel:+79998887766">+7 (999) 888-77-66</a>
        </div>
        <div class="header__top-item clock"><span>Круглосуточно</span></div>
      </div>
      <router-link class="lk" to="/auth/login">
        <div>Войти</div>
      </router-link>
    </div>
  </header>
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

.location:before {
  content: "\e900";
}

.phone {
  &:hover {
    color: $v_orange;

    a {
      color: $v_orange;
    }
  }

  a {
    color: black;
  }

  &:before {
    content: "\f095";
  }
}


.clock:before {
  content: "\e94e";
}

.lk {
  color: black;
  display: inline-block;
  position: relative;
  font-size: 18px;
  background-color: #F3F3F3;
  padding: 8px;
  border-radius: 10px;
  transition: 0.3s;
  border: 1px solid $v_orange;
  text-align: center;

  &::before {
    content: "\f2bd";
    font-family: 'icomoon';
    font-size: 25px;
  }

  &:hover {
    background-color: $v_orange;
    color: white;
    box-shadow: 0 0 5px 5px $v_orange;
  }
}

//.location:before {
//  content: "\e900";
//}
//
////.icon-room:before {
////  content: "\e900";
////}
//
//.phone:before {
//  content: "\f095";
//}
//
//.icon-user-circle:before {
//  content: "\f2bd";
//}
//
//.clock:before {
//  content: "\e94e";
//}
.logo {
  height: 60px;
}

.header {
  font-size: 18px;
  margin-bottom: 20px;

  &__inner {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
  }

  &__top-items {
    display: flex;
    align-items: center;
  }

  &__top-item {
    margin-right: 30px;
    position: relative;
    padding-left: 20px;

    &:before {
      font-family: 'icomoon';
      font-size: 18px;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }

    &:last-child {
      margin-right: 0;
      padding-left: 24px;
    }
  }
}

.menu {
  display: flex;

  a {
    margin: 0 15px;
    display: inline-block;
    color: black;

  }

}


</style>