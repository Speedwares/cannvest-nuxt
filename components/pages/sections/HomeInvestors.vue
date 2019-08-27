<template>
  <div
    class="features-7 section-image"
    style="background-image: url('img/home-page/investors-background.jpg')"
    id="investors"
  >
    <div class="col-md-8 mr-auto ml-auto text-center">
      <h2 class="title">{{ $t('message.title') }}</h2>
      <!-- <h4
        class="description"
      >This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information.</h4>-->
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-5 col-lg-6"></div>
        <div class="col-md-7 col-lg-6 px-0">
          <div class="col-sm-12">
            <div class="info-horizontal row">
              <div class="col-3 icon-container">
                <div class="icon-circle text-center">
                  <img src="img/icons/investor-information.svg" class="img-fluid" />
                </div>
              </div>
              <div class="col-9 description">
                <h5 class="info-title">{{ $t('message.register') }}</h5>
                <p class="description">{{ $t('message.text_register') }}</p>
              </div>
            </div>
            <div class="info-horizontal row">
              <div class="col-3 icon-container">
                <div class="icon-circle text-center">
                  <img src="img/icons/mobile-payment.svg" class="img-fluid" />
                </div>
              </div>
              <div class="col-9 description">
                <h5 class="info-title">{{ $t('message.invest') }}</h5>
                <p class="description">{{ $t('message.text_invest') }}</p>
              </div>
            </div>
            <div class="info-horizontal row">
              <div class="col-3 icon-container">
                <div class="icon-circle text-center">
                  <img src="img/icons/cannabis-project.svg" class="img-fluid" />
                </div>
              </div>
              <div class="col-9 description">
                <h5 class="info-title">{{ $t('message.return') }}</h5>
                <p class="description">{{ $t('message.text_return') }}</p>
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
  name: "Investors",
  i18n: {
    messages: {
      en: {
        message: {
          title: "For Investors",
          register: "Register",
          text_register:
            "Sign up for our investor network to get access to our investment portfolio.",
          invest: "Invest",
          text_invest:
            "A Smart Contract on the Blockchain is signed between you and your debtors. Track how the funds are being used in an efficient and transparent way.",
          return: "Follow-up and Return on Investment",
          text_return:
            "Receive weekly reports on the project progress and performance. Get interests payments and a return on your investment according to the negotiated conditions."
        }
      },
      es: {
        message: {
          title: "Para Inversionistas",
          register: "Regístrese",
          text_register:
            "Regístrese dentro de nuestra red de inversionistas para obtener acceso a nuestro portafolio de inversión.",
          invest: "Invierta",
          text_invest:
            "Un contrato inteligente es firmado entre usted y los productores. Haga un seguimiento del uso de los fondos de una forma eficiente y transparente.",
          return: "Seguimiento y Retorno a la Inversión",
          text_return:
            "Reciba reportes periódicos sobre el progreso del proyecto. Reciba intereses y un retorno a su inversión."
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
</style>
