<template>
  <div class="loader"></div>
</template>
<script>
export default {

}
</script>
<style>
.loader {
  animation: spin 1s infinite linear;
  border: solid 2vmin transparent;
  border-radius: 50%;
  border-right-color: rgba(255, 153, 0, 0.5);
  border-top-color: rgba(255, 153, 0, 0.5);
  box-sizing: border-box;
  height: 20vmin;
  margin: 0 auto;
  width: 20vmin;
  z-index: 1;
}
.loader::before {
  animation: spin 2s infinite linear;
  border: solid 2vmin transparent;
  border-radius: 50%;
  border-right-color: rgba(255, 153, 0, 0.5);
  border-top-color: rgba(255, 153, 0, 0.5);
  box-sizing: border-box;
  content: "";
  height: 16vmin;
  left: 0;
  position: absolute;
  top: 0;
  width: 16vmin;
}
.loader::after {
  animation: spin 3s infinite linear;
  border: solid 2vmin transparent;
  border-radius: 50%;
  border-right-color: rgba(255, 153, 0, 0.5);
  border-top-color: rgba(255, 153, 0, 0.5);
  box-sizing: border-box;
  content: "";
  height: 12vmin;
  left: 2vmin;
  position: absolute;
  top: 2vmin;
  width: 12vmin;
}
@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>