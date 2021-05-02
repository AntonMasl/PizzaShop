<!--<template>-->
<!--  <div class="specification-pizza">-->
<!--    <b-form-group>-->
<!--      <b-form-radio-group-->
<!--          id="btn-radios-"-->
<!--          v-model="selectedDough"-->
<!--          :options="typeDough"-->
<!--          button-variant="outline-primary"-->
<!--          size="lg"-->
<!--          name="radio-btn-outline"-->
<!--          buttons-->
<!--      ></b-form-radio-group>-->
<!--    </b-form-group>-->
<!--    <b-form-group>-->
<!--      <b-form-radio-group-->
<!--          id="btn-radios-"-->
<!--          v-model="selectedDiameter"-->
<!--          :options="diameters"-->
<!--          button-variant="outline-primary"-->
<!--          size="lg"-->
<!--          name="radio-btn-outline"-->
<!--          buttons-->
<!--      ></b-form-radio-group>-->
<!--    </b-form-group>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--  export default {-->
<!--    props: ['product'],-->
<!--    data(){-->
<!--      return{-->
<!--        selectedDough: 'small',-->
<!--        typeDough: [-->
<!--          {text: 'тонкое', value: 'small'},-->
<!--          {text: 'традиционное', value: 'traditional'},-->
<!--        ],-->
<!--        selectedDiameter: 'small',-->
<!--        diameters: [-->
<!--          {text: this.product.diameter ? this.product.diameter.small : '', value: 'small'},-->
<!--          {text: this.product.diameter ? this.product.diameter.middle : '', value: 'middle'},-->
<!--          {text: this.product.diameter ? this.product.diameter.big : '', value: 'big'},-->
<!--        ]-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--</script>-->

<!--<style lang="scss">-->
<!--.form-group {-->
<!--  margin-bottom: 0 !important;-->

<!--  &:first-child {-->
<!--    margin-bottom: 15px !important;-->
<!--  }-->
<!--}-->

<!--.btn-outline-primary:not(:disabled):not(.disabled):active {-->
<!--  background-color: $v_orange !important;-->
<!--  border-color: $v_orange !important;-->
<!--}-->

<!--.btn-outline-primary:not(:disabled):not(.disabled).active:focus {-->
<!--  box-shadow: none !important;-->
<!--}-->

<!--.btn-group {-->
<!--  width: 90%;-->

<!--  label {-->
<!--    width: 50%;-->
<!--  }-->

<!--  .btn {-->
<!--    padding: 5px !important;-->
<!--  }-->
<!--}-->

<!--.btn-group-toggle {-->

<!--  .focus {-->
<!--    box-shadow: none !important-->
<!--  }-->

<!--  .btn-outline-primary {-->
<!--    font-size: 14px !important;-->

<!--    &:active {-->

<!--    }-->

<!--    color: black;-->
<!--    border-color: $v_orange;-->

<!--    &:hover {-->
<!--      background-color: $v_orange_hover;-->
<!--      border-color: $v_orange;-->
<!--    }-->
<!--  }-->

<!--  .active {-->
<!--    background-color: $v_orange !important;-->
<!--    border-color: $v_orange !important;-->
<!--  }-->
<!--}-->
<!--</style>-->