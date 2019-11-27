<template>
  <div class="tf">
    <iframe
      id="typeform-full"
      width="100%"
      height="100%"
      frameborder="0"
      src="https://cannvest.typeform.com/to/PA56ln"
    ></iframe>
    <script type="text/javascript" src="https://embed.typeform.com/embed.js"></script>
  </div>
</template>

<script>
export default {
  layout: "white-nav",
  nuxtI18n: {
    seo: false
  },
  i18n: {
    messages: {
      en: {
        meta: {
          title: "Investor Form Cannvest",
          description: "Investor Form Cannvest",
          keywords: "crowdfunding, investors, form"
        }
      },
      es: {
        meta: {
          title: "Formulario para inversionistas Cannvest",
          description: "Formulario para inversionistas Cannvest",
          keywords: "crowdfunding, formulario, inversionistas"
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
.tf {
  margin: 0;
  height: 100%;
  overflow: hidden;
}
iframe {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  border: 0;
}
</style>