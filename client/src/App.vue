<template>
  <div id="app">
    <div class="app-inner">
      <router-view/>
    </div>
  </div>
</template>

<script>


import {mapActions} from "vuex";

export default {
  mounted() {
    this.auth()
  },
  methods: {
    ...mapActions(["auth"])
  }
}
</script>

<style lang="scss">
/*Обнуление*/
* {
  padding: 0;
  margin: 0;
  border: 0;
}

*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

:focus,
:active {
  outline: none;
}

a:focus,
a:active {
  outline: none;
}

nav,
footer,
header,
aside {
  display: block;
}

html,
body {
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

body {
  height: 100%;
  overflow-y: scroll;
}

input,
button,
textarea {
  font-family: inherit;
}

input::-ms-clear {
  display: none;
}

button {
  cursor: pointer;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

a,
a:visited {
  text-decoration: none !important;
  color: black;
}

a:hover {
  text-decoration: none;
}

ul {
  margin-bottom: 0;
  li {
    list-style: none;
  }
}

img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: 400;
}

/*--------------------*/

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  min-height: 100%;
  position: relative;

  &::before {
    content: "";
    filter: grayscale(100%);
    position: absolute;
    opacity: 0.3;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    background-image: url("~@/assets/images/bg.jpg");
    background-size: 10%;
    background-repeat: repeat;
  }
}

.app-inner {
  max-width: 1230px;
  padding: 0 15px;
  margin: 0 auto;
}
</style>
