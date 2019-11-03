<template>
  <div class="testimonials-3">
    <div class="container">
      <div class="row">
        <div class="col-md-6 ml-auto mr-auto text-center">
          <h2 class="title">{{ $t('message.title') }}</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 text-center">
          <card type="testimonial" plain>
            <a href="https://fi.co">
              <img slot="avatar" class="img fi-logo rounded" src="img/home-page/allies/fi.png" />
            </a>
          </card>
        </div>
        <div class="col-md-3 text-center">
          <card type="testimonial" plain>
            <a href="https://www.northernblock.ca/">
              <img
                slot="avatar"
                class="img nb-logo rounded"
                src="img/home-page/allies/northern-block.svg"
              />
            </a>
          </card>
        </div>
        <div class="col-md-3 text-center">
          <card type="testimonial" plain>
            <a href="https://www.phytropica.com">
              <img
                slot="avatar"
                class="img pt-logo rounded"
                src="img/home-page/allies/phytropica.png"
              />
            </a>
          </card>
        </div>
        <div class="col-md-3 text-center">
          <card type="testimonial" plain>
            <a href="https://www.facebook.com/Agrocann-Colombia-295845477704974/">
              <img
                slot="avatar"
                class="img ac-logo rounded"
                src="img/home-page/allies/agrocann.png"
              />
            </a>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Card } from "@/components";

export default {
  name: "Allies",
  components: {
    Card
  },
  i18n: {
    messages: {
      en: {
        message: {
          title: "Our Allies",
          register: "Register",
          text_register:
            "Sign up for our investor network to get access to our investment portfolio.",
          invest: "Invest",
          text_invest:
            "A Smart Contract on the Blockchain is signed between you and your debtors. Track how the funds are being used in an efficient and transparent way.",
          return: "Follow-up and Return on Investment",
          text_return:
            "Receive weekly reports on the project progress and performance. Get interests payments and a return on your investment according to the negotiated conditions.",
          for_investors: "Learn more"
        }
      },
      es: {
        message: {
          title: "Nuestros Aliados",
          register: "Regístrese",
          text_register:
            "Regístrese dentro de nuestra red de inversionistas para obtener acceso a nuestro portafolio de inversión.",
          invest: "Invierta",
          text_invest:
            "Nuestra plataforma de crowdfunding realiza un seguimiento del uso de los fondos de una forma eficiente y transparente.",
          return: "Seguimiento y Retorno a la Inversión",
          text_return:
            "Reciba reportes periódicos sobre el progreso del proyecto. Reciba intereses y un retorno a su inversión.",
          for_investors: "Conozca más"
        }
      }
    }
  }
};
</script>

<style scoped>
.fi-logo {
  max-height: 120px;
}
.nb-logo {
  padding-top: 35px;
  max-height: 120px;
}
.pt-logo {
  padding-top: 40px;
  max-width: 250px;
}
.ac-logo {
  max-height: 160px;
}

@media screen and (min-width: 768px) {
  .fi-logo {
    max-height: 130px;
  }
  .nb-logo {
    padding-top: 35px;
    max-height: 120px;
  }
  .pt-logo {
    padding-top: 60px;
    max-width: 100%;
  }
  .ac-logo {
    max-height: 160px;
  }
}
</style>