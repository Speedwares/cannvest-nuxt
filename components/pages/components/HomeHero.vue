<template>
  <div class="header-1">
    <div
      class="features-7 section-image"
      style="background-image: url('img/home-page/cannavist.png')"
    >
      <div class="content-center">
        <div class="container">
          <div class="row">
            <div style="height:"></div>
            <div class="col-md-6 mr-auto">
              <h1 class="title">{{ $t('message.header') }}</h1>
              <h4 class="description">{{ $t('message.subtitle') }}</h4>
              <br />
              <div class="buttons">
                <a
                  v-if="this.$i18n.locale == 'en'"
                  href="/en/#investors"
                  class="btn bg-transparent btn-lg mr-3 cta-button"
                >
                  <b>{{ $t('message.for_investors') }}</b>
                </a>
                <a v-else href="/#investors" class="btn bg-transparent btn-lg mr-3 cta-button">
                  <b>{{ $t('message.for_investors') }}</b>
                </a>

                <a
                  v-if="this.$i18n.locale == 'en'"
                  href="/en/#growers"
                  class="btn bg-transparent btn-lg mr-3 cta-button"
                >
                  <b>{{ $t('message.for_growers') }}</b>
                </a>
                <a v-else href="/#growers" class="btn bg-transparent btn-lg mr-3 cta-button">
                  <b>{{ $t('message.for_growers') }}</b>
                </a>
              </div>
            </div>
            <div class="col-md-6">
              <!-- <img src="img/home-page/cannvest-isometric.png" class="fluid d-none d-md-block" /> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero2",
  i18n: {
    messages: {
      en: {
        message: {
          header: "Financial Solutions for the Cannabis Industry",
          subtitle:
            "Our crowdfunding platform connects investors and cannabis growers, improving their crop valuation through traceability and crop optmization technologies on the blockchain",
          for_investors: "For Investors",
          for_growers: "For Growers"
        }
      },
      es: {
        message: {
          // header: 'SOLUCIONES FINANCIERAS PARA PRODUCTORES DE CANNABIS',
          header: "Soluciones financieras para la industria del cannabis",
          subtitle:
            "Nuestra plataforma conecta inversionistas con productores de cannabis, mejorando la valoración de su cosecha a través de tecnologías de optimización y trazabilidad de cultivos sobre blockchain",
          for_investors: "Para Inversionistas",
          for_growers: "Para Productores"
        }
      }
    }
  }
};
</script>

<style scoped>
.cta-button {
  border-color: #00ab81 !important;
  border: solid;
}
.cta-button:hover {
  background-color: #00ab81 !important;
}

.features-7 {
  min-height: 100vh;
}

.features-7:after {
  background-color: rgba(0, 0, 0, 0.1);
}

.description {
  font-weight: 400;
}

@media screen and (min-width: 768px) {
  .features-7:after {
    background-color: rgba(0, 0, 0, 0);
  }
}
</style>
