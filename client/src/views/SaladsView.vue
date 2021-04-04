<template>
  <div>
    <Header/>
    <Menu/>
    <ItemList :items="allSalads"/>
  </div>
</template>
<script>

import {mapGetters, mapActions} from 'vuex';
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import ItemList from "@/components/ItemList";

export default {
  components: {ItemList, Menu, Header},
  async mounted() {
    await this.getSalads()
    this.loading = false
  },
  computed: {
    ...mapGetters(['allSalads'])
  },

  methods: {
    ...mapActions(['getSalads']),
  },
}
</script>

<style>

</style>