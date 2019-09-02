<template >
  <div
    class="features-7 section-image"
    style="background-image: url('img/home-page/growers-background-02.jpg')"
    id="growers"
  >
    <div class="col-md-8 mr-auto ml-auto text-center">
      <h2 class="title">{{ $t('message.title') }}</h2>
      <!-- <h4
        class="description"
      >This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information.</h4>-->
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-7 col-lg-6 px-0">
          <div class="col-sm-12">
            <div class="info-horizontal row">
              <div class="col-3 icon-container">
                <div class="icon-circle text-center">
                  <img src="img/icons/project-funding.svg" class="img-fluid" />
                </div>
              </div>
              <div class="col-9 description">
                <h5 class="info-title">{{ $t('message.funding') }}</h5>
                <p class="description">{{ $t('message.text_funding') }}</p>
              </div>
            </div>
            <div class="info-horizontal row">
              <div class="col-3 icon-container">
                <div class="icon-circle text-center">
                  <img src="img/icons/environmental-monitoring.svg" class="img-fluid" />
                </div>
              </div>
              <div class="col-9 description">
                <h5 class="info-title">{{ $t('message.infrastructure') }}</h5>
                <p class="description">{{ $t('message.text_infrastructure') }}</p>
              </div>
            </div>
            <div class="info-horizontal row">
              <div class="col-3 icon-container">
                <div class="icon-circle text-center">
                  <img src="img/icons/crop-valuation.svg" class="img-fluid" />
                </div>
              </div>
              <div class="col-9 description">
                <h5 class="info-title">{{ $t('message.optimization') }}</h5>
                <p class="description">{{ $t('message.text_optimization') }}</p>
              </div>
            </div>
            <div class="row">
              <div class="col text-center">
                <div class="buttons">
                  <a
                    v-if="this.$i18n.locale == 'en'"
                    href="/en/#contact-us"
                    class="btn bg-transparent btn-lg mr-3 cta-button"
                  >
                    <b>{{ $t('message.for_growers') }}</b>
                  </a>
                  <a v-else href="/#contact-us" class="btn bg-transparent btn-lg mr-3 cta-button">
                    <b>{{ $t('message.for_growers') }}</b>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-5 col-lg-6"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Producers",
  components: {},
  i18n: {
    messages: {
      en: {
        message: {
          title: "For Producers",
          funding: "Project Selection and Funding",
          text_funding:
            "Our team evaluates the project and designs a custom financial product, convenient for the growers and their investors. The project is published and funded.",
          infrastructure: "Technology and Infrastructure Installation",
          text_infrastructure:
            "Our team installs sensors and cameras on the field and provides a free-to-use mobile app for crop management, improving the productivity of the project.",
          optimization: "Crop Optimization",
          text_optimization:
            "Use the data to develop crop optimization strategies. Be more productive and get access to new markets.",
          for_growers: "Learn more"
        }
      },
      es: {
        message: {
          title: "Para Productores",
          funding: "Selección de Proyecto y Financiación",
          text_funding:
            "Evaluamos su proyecto y diseñamos un producto financiero a la medida. El proyecto es publicado y financiado a través de nuestra plataforma.",
          infrastructure: "Instalación de Infraestructura",
          text_infrastructure:
            "Nuestro equipo instala sensores e infraestructura y provee acesso a una aplicación de gestión de cultivos.",
          optimization: "Optimización de cultivos",
          text_optimization:
            "Use los datos para diseñar estrategias de mejora de cultivos. Sea más productivo y obtenga aceceso a nuevos mercados.",
          for_growers: "Conozca más"
        }
      }
    }
  }
};
</script>

<style scoped>
.icon-circle {
  background-color: white;
  border-radius: 50%;
  padding: 1em;
  max-width: 130px;
}
.icon-container {
  padding-right: 0;
}
.cta-button {
  border-color: #00ab81 !important;
  background-color: #00ab81 !important;
  border: solid;
}
.cta-button:hover {
  border-color: #256656 !important;
  background-color: #256656 !important;
}
</style>
