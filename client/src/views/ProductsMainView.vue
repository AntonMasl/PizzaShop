<template>
  <div>
    <Header/>
    <Menu/>
    <button v-if="user.roles?user.roles.includes('ADMIN'):false" class="link_admin_panel">
      <router-link to="/admin-panel" class="link">Админ-панель</router-link>
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
  async mounted() {
    await this.getBasketUser(this.user.id)
    console.log(this.basket)
  },
  methods:{
    ...mapActions(["getBasketUser"])
  },
  computed: {
    ...mapGetters(["categoryId", "token", "user", "isAuth"])
  },
  watch: {
    user() {
      this.getBasketUser(this.user.id)
    }
  }
}
</script>

<style scoped lang="scss">
.link_admin_panel{
  border-radius: 0 0 10px 0;
  border: 1px solid $v-orange;
  width: 100px;
  height: 100px;
  background-color: #F3F3F3;
  position: fixed;
  left: 0;
  top: 0;
  .link{
    border-radius: 0 0 10px 0;
    font-size: 20px;
    color: black;
    display: inline-block;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: $v_orange;
      color: white;
      box-shadow: 0 0 5px 5px $v_orange;
    }
  }
}
</style>