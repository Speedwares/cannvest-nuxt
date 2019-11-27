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
  },
  nuxtI18n: {
    seo: false
  },
  i18n: {
    messages: {
      en: {
        meta: {
          title: "Cannvest | Crowdfunding for the cannabis industry",
          description: "Crowdfunding for the cannabis industry Colombia",
          keywords: "crowdfunding, cannabis, invest, investment, colombia"
        }
      },
      es: {
        meta: {
          title: "Cannvest | Crowdfunding para la industria del cannabis",
          description: "Crowdfunding para la industria del cannabis Colombia",
          keywords: "crowdfunding, cannabis, invertir, inversión, colombia"
        }
      }
    }
  },
  head() {
    return {
      title: this.$t("meta.title"),
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: this.$t("meta.description")
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.$t("meta.keywords")
        }
      ]
    };
  }
};
</script>
<style scoped>
.starter-page {
  min-height: calc(100vh - 79px);
}
</style>
