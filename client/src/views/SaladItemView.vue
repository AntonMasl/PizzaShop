<template>
  <div>
    <Header/>
    <Menu/>
    <Loader v-if="loading"/>
    <PizzaItem v-else :item="saladItem"/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import PizzaItem from "@/components/Item";
import {mapActions, mapGetters, mapMutations} from "vuex";
import Loader from "@/components/loader";

export default {
  components: {Loader, PizzaItem, Menu, Header},
  data(){
    return{
      loading: true
    }
  },
  async mounted() {
    await this.getOneSalad(this.$route.params.id)
    this.loading = false
  },

  destroyed() {

  },
  methods: {
    ...mapActions(['getOneSalad']),
  },
  computed: {
    ...mapGetters(['saladItem'])
  },
}
</script>

<style scoped>
</style>