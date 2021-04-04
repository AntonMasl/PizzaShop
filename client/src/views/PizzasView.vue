<template>
  <div>
    <Header/>
    <Menu/>
    <Loader v-if="loading"/>
    <ItemList :items="allPizzas"/>
  </div>
</template>
<script>

import {mapGetters, mapActions, mapMutations} from 'vuex';
import ItemList from "@/components/ItemList";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Loader from "@/components/loader";

export default {
  components: {Loader, Menu, Header, ItemList},
  data(){
    return{
      loading: true
    }
  },
  async mounted() {
    await this.getPizzas()
    this.loading = false
  },

  computed: {
    ...mapGetters(['allPizzas'])
  },

  methods: {
    ...mapActions(['getPizzas']),
  },
}
</script>

<style>

</style>