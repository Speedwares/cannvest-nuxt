<template>
  <div class="features-5">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <h2 class="title">{{ $t('message.title') }}</h2>
          <div class="info info-horizontal">
            <div class="icon icon-circle">
              <img src="img/icons/internet-of-things.svg" class="img-fluid" />
            </div>
            <div class="description">
              <h4 class="info-title">{{ $t('message.iot') }}</h4>
              <p>{{ $t('message.text_iot') }}</p>
            </div>
          </div>
          <div class="info info-horizontal">
            <div class="icon icon-circle">
              <img src="img/icons/digital-signature.svg" class="img-fluid" />
            </div>
            <div class="description">
              <h4 class="info-title">{{ $t('message.encryption') }}</h4>
              <p>{{ $t('message.text_encryption') }}</p>
            </div>
          </div>
          <div class="info info-horizontal">
            <div class="icon icon-circle">
              <img src="img/icons/fintech.svg" class="img-fluid" />
            </div>
            <div class="description">
              <h4 class="info-title">{{ $t('message.analytics') }}</h4>
              <p>{{ $t('message.text_analytics') }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <div class="tablet-container">
            <img v-lazy="'img/home-page/cannvest-technology.png'" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Technology",
  i18n: {
    messages: {
      en: {
        message: {
          title: "Our Technology",
          iot: "Interet of Things",
          text_iot:
            "Our sensor technology measures the ambient and process conditions in for analysis and intelligent decision making.",
          encryption: "Data storage and encryption",
          text_encryption:
            "Data is encrypted and stored in a secure way on a private blockchain ensuring transparency and data inmutability.",
          analytics: "Data Analytics",
          text_analytics:
            "Our team analyses the crop data to provide insights for production improvement."
        }
      },
      es: {
        message: {
          title: "Nuestra Tecnología",
          iot: "Internet de las Cosas",
          text_iot:
            "Nuestra tecnología de sensores registra las variables ambientales y de proceso del cultivo para su análisis y toma de decisiones inteligentes.",
          encryption: "Almacenamiento y encriptado de datos",
          text_encryption:
            "Los datos son encriptados y almacenados de forma segura en un blockchain privado asegurando transparencia e inmutabilidad de los datos.",
          analytics: "Analítica de datos",
          text_analytics:
            "Nuestro equipo analiza la información de cultivo para brindar información útil para el mejoramiento de su productividad."
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

@media screen and (min-width: 768px) {
  .tablet-container {
    margin-top: 250px;
  }
}
@media screen and (min-width: 1024px) {
  .tablet-container {
    margin-top: 180px;
  }
}
@media screen and (min-width: 1440px) {
  .tablet-container {
    margin-top: 80px;
  }
}
</style>
