<template>
  <div class="header-1">
    <div class="page-header header-filter">
      <div
        class="page-header-image"
        style="background-image: url('img/home-page/cannvest-banner.jpg')"
      ></div>
      <div class="content-center">
        <div class="container">
          <div class="row">
            <div style="height:"></div>
            <div class="col-md-7 mr-auto">
              <h1 class="title">{{ $t('message.header') }}</h1>
              <h4 class="description">{{ $t('message.subtitle') }}</h4>
              <br />
              <div class="buttons">
                <a href="#investors" class="btn bg-transparent btn-lg mr-3 cta-button">
                  <b>{{ $t('message.for_investors') }}</b>
                </a>
                <a href="#growers" class="btn bg-transparent btn-lg mr-3 cta-button">
                  <b>{{ $t('message.for_growers') }}</b>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  i18n: {
    messages: {
      en: {
        message: {
          header: "Financial Solutions for Cannabis Growers",
          subtitle:
            "Cannvest connects investors and cannabis growers, improving their crop valuation through traceability and crop optmization technologies on the blockchain",
          for_investors: "For Investors",
          for_growers: "For Growers"
        }
      },
      es: {
        message: {
          // header: 'SOLUCIONES FINANCIERAS PARA PRODUCTORES DE CANNABIS',
          header: "Soluciones financieras para productores de cannabis",
          subtitle:
            "Cannvest conecta inversionistas con productores de cannabis, mejorando la valoración de su cosecha a través de tecnologías de optimización y trazabilidad de cultivos sobre blockchain",
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

@media screen and (max-width: 768px) {
  h1 {
    font-size: 3em;
  }

  h4 {
    font-size: 1.2em;
  }
}
</style>
