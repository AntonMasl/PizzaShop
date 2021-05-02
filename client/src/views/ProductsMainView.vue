<template>
  <div>
    1){{ token }}
    2){{ user }}
    3){{ isAuth }}
    4) {{products}}
    <Header/>
    <Menu/>
    <button v-if="user.roles?user.roles.includes('ADMIN'):false" class="link_create">
      <router-link to="/form">FormCreate</router-link>
    </button>
    <router-view></router-view>
  </div>
</template>
<script>

import {mapGetters, mapActions} from 'vuex';
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Loader from "@/components/loader";
import ProductList from "@/components/ProductList";

export default {
  components: {ProductList, Loader, Menu, Header},

  computed: {
    ...mapGetters(["categoryId", "token", "user", "isAuth"])
  },
}
</script>

<style scoped lang="scss">
button {
  width: 100px;
  height: 30px;
  background-color: #ff9900;
}
</style>