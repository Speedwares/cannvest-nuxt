<template>
  <div class="features-5">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <h2 class="title">{{ $t('message.title') }}</h2>
          <div class="info info-horizontal">
            <div class="icon icon-success icon-circle">
              <i class="now-ui-icons location_world"></i>
            </div>
            <div class="description">
              <h4 class="info-title">Hundreds of Components</h4>
              <p>
                The moment you use Now UI Kit, you know you’ve never felt
                anything like it. With a single use lets you do more than ever
                before.
              </p>
            </div>
          </div>
          <div class="info info-horizontal">
            <div class="icon icon-success icon-circle">
              <i class="now-ui-icons sport_user-run"></i>
            </div>
            <div class="description">
              <h4 class="info-title">Easy to Use</h4>
              <p>
                Divide details about your product or agency work into parts.
                Write a few lines about each one. A paragraph describing a
                feature.
              </p>
            </div>
          </div>
          <div class="info info-horizontal">
            <div class="icon icon-success icon-circle">
              <i class="now-ui-icons ui-2_time-alarm"></i>
            </div>
            <div class="description">
              <h4 class="info-title">Fast Prototyping</h4>
              <p>
                Divide details about your product or agency work into parts.
                Write a few lines about each one. A paragraph describing a
                feature.
              </p>
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
  name: 'Technology',
  i18n: {
    messages: {
      en: {
        message: {
          title: 'Our Technology',
          register: 'Register',
          text_register:
            'Sign up for our investor network to get access to our investment portfolio.',
          invest: 'Invest',
          text_invest:
            'A Smart Contract on the Blockchain is signed between you and your debtors. Track how the funds are being used in an efficient and transparent way.',
          return: 'Follow-up and Return on Investment',
          text_return:
            'Receive weekly reports on the project progress and performance. Get interests payments and a return on your investment according to the negotiated conditions.'
        }
      },
      es: {
        message: {
          title: 'Nuestra Tecnología',
          register: 'Regístrese',
          text_register:
            'Regístrese dentro de nuestra red de inversionistas para obtener acceso a nuestro portafolio de inversión.',
          invest: 'Invierta',
          text_invest:
            'Un contrato inteligente es firmado entre usted y los productores. Haga un seguimiento del uso de los fondos de una forma eficiente y transparente.',
          return: 'Seguimiento y Retorno a la Inversión',
          text_return:
            'Reciba reportes periódicos sobre el progreso del proyecto. Reciba intereses y un retorno a su inversión.'
        }
      }
    }
  }
}
</script>

<style scoped>
.icon-circle {
  background-color: white;
  border-radius: 50%;
  padding: 2em;
  max-width: 130px;
}
.icon-container {
  padding-right: 0;
}
</style>
