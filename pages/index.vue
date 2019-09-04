<template>
  <div>
    <Hero />
    <Solutions />
    <Investors />
    <Producers />
    <Technology />
    <Team />
    <Allies />
    <Contact />
  </div>
</template>
<script>
import Hero from "@/components/pages/components/HomeHero.vue";

import Solutions from "@/components/pages/sections/HomeSolutions.vue";
import Investors from "@/components/pages/sections/HomeInvestors.vue";
import Producers from "@/components/pages/sections/HomeProducers.vue";
import Technology from "@/components/pages/sections/HomeTechnology.vue";
import Team from "@/components/pages/sections/HomeTeam.vue";
import Contact from "@/components/pages/sections/HomeContact.vue";
import Allies from "@/components/pages/sections/HomeAllies.vue";

export default {
  layout: "white-nav",
  components: {
    Hero,
    Solutions,
    Investors,
    Producers,
    Technology,
    Team,
    Contact,
    Allies
  }
};
</script>
<style scoped>
.starter-page {
  min-height: calc(100vh - 79px);
}
</style>
