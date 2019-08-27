<template>
  <div>
    <cannvest-navbar :color-on-scroll="300" />
    <nuxt />
    <cannvest-footer></cannvest-footer>
  </div>
</template>
<script>
import CannvestNavbar from "@/components/layout/CannvestNavbar.vue";
import MainFooter from "@/components/layout/MainFooter.vue";
import CannvestFooter from "@/components/layout/CannvestFooter.vue";

export default {
  components: {
    MainFooter,
    CannvestNavbar,
    CannvestFooter
  }
};
</script>
<style>
</style>
