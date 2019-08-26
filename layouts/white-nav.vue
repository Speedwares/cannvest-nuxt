<template>
  <div>
    <cannvest-navbar :color-on-scroll="300" />
    <nuxt />
    <!-- <main-footer></main-footer> -->
  </div>
</template>
<script>
import CannvestNavbar from "@/components/layout/CannvestNavbar.vue";
import MainFooter from "@/components/layout/MainFooter.vue";
export default {
  components: {
    MainFooter,
    CannvestNavbar
  }
};
</script>
<style>
</style>
