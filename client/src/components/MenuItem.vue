<template>
  <li :class="{active: category._id === categoryId}"
      @click="setCategoryId"

  >{{ category.name }}</li>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
  props: ['category'],
  computed: {
    ...mapGetters(["categoryId"])
  },
  methods: {
    setCategoryId() {
      this.updateCategoryId(this.category._id)
    },
    ...mapMutations(['updateCategoryId']),
  },
}

</script>

<style scoped lang="scss">
li {
  cursor: pointer;
  padding-bottom: 3px;
  margin-right: 15px;
  color: black;
  font-size: 25px;
  font-weight: 800;

  &:hover {
    color: gray;
  }
}
.active{
  color: $v_orange;
  box-shadow: 0 3px 0 0 $v_orange;
  &:hover {
    color: $v_orange;
  }
}
</style>