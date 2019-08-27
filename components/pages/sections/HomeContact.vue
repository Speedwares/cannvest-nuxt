<template>
  <div
    class="contactus-1 section-image"
    style="background-image: url('img/home-page/cannabis-banner-03.jpg')"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <h2 class="title">{{ $t('message.title') }}</h2>
          <h4 class="description">{{ $t('message.subtitle') }}</h4>
          <info-section type="success" icon="now-ui-icons location_pin">
            <h4 class="info-title">{{ $t('message.office') }}</h4>
            <p class="description">
              Calle 93 # 19-55
              <br />WeWork 93
              <br />Bogotá, Colombia
            </p>
          </info-section>

          <info-section type="success" icon="now-ui-icons tech_mobile">
            <h4 class="info-title">{{ $t('message.telephone') }}</h4>
            <p class="description contact-links">
              <span style>Cannvest Technologies</span>
              <br />
              <a href="mailto:contact@cannvesto.co" class="contact-links">contact@cannvest.co</a>
              <br />
              <a href="callto:+57 350 5352868" class="contact-links">+57 350 5352868</a>
            </p>
          </info-section>
        </div>
        <div class="col-md-5 ml-auto mr-auto">
          <card type="contact" raised header-classes="text-center">
            <h4 slot="header" class="card-title">{{ $t('message.form_title') }}</h4>
            <form
              name="contact"
              action
              method="POST"
              netlify-honeypot="bot-field"
              data-netlify-recaptcha="true"
              netlify
            >
              <input type="hidden" name="contact-form" value="contact" />
              <p class="hidden">
                <label>
                  Don’t fill this out:
                  <input name="bot-field" />
                </label>
              </p>
              <div class="row">
                <div class="col-md-6 pr-2">
                  <label for="first-name">{{ $t('message.first_name') }}</label>
                  <fg-input
                    :placeholder="$t('message.first_name')"
                    addon-left-icon="now-ui-icons users_circle-08"
                    name="first-name"
                    id="first-name"
                  ></fg-input>
                </div>
                <div class="col-md-6 pl-2">
                  <label for="last-name">{{ $t('message.last_name') }}</label>
                  <fg-input
                    :placeholder="$t('message.last_name')"
                    addon-left-icon="now-ui-icons text_caps-small"
                    name="last-name"
                    id="last-name"
                  ></fg-input>
                </div>
              </div>
              <div class="form-group">
                <label for="email">{{ $t('message.email') }}</label>
                <fg-input
                  :placeholder="$t('message.email')"
                  addon-left-icon="now-ui-icons ui-1_email-85"
                  name="email"
                  id="email"
                ></fg-input>
              </div>
              <div class="form-group">
                <label for="message">{{ $t('message.your_message') }}</label>
                <textarea name="message" class="form-control" id="message" rows="6"></textarea>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <!-- <n-checkbox>I'm not a robot</n-checkbox> -->
                  <!-- <div data-netlify-recaptcha="true"></div> -->
                </div>
                <div class="col-md-6">
                  <input
                    type="submit"
                    class="btn btn-round btn-success pull-right btn-cannvest"
                    :value="$t('message.submit')"
                  />
                </div>
              </div>
            </form>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  Card,
  Button,
  InfoSection,
  FormGroupInput,
  Checkbox
} from "@/components";
export default {
  name: "Contact",
  components: {
    Card,
    InfoSection,
    [Button.name]: Button,
    [Checkbox.name]: Checkbox,
    [FormGroupInput.name]: FormGroupInput
  },
  i18n: {
    messages: {
      en: {
        message: {
          title: "Get in Touch",
          subtitle:
            "You need more information? Check what other persons are saying about our product. They are very happy with their purchase.",
          office: "Find us at the office",
          telephone: "Call Us",
          form_title: "Contact Us",
          first_name: "Name",
          last_name: "Surname",
          email: "Email address",
          your_message: "Your message",
          submit: "Send Message"
        }
      },
      es: {
        message: {
          title: "Contáctenos",
          subtitle:
            "¿Necesita más información? Nuestro equipo está disponible para acompañarlo y guiarlo.",
          office: "Visítenos",
          telephone: "Encuéntrenos",
          form_title: "Escríbanos",
          first_name: "Nombre",
          last_name: "Apellido",
          email: "Correo Electrónico",
          your_message: "Su Mensaje",
          submit: "Enviar"
        }
      }
    }
  }
};
</script>
<style scoped>
.section-image::after {
  background-color: rgba(0, 0, 0, 0.3);
}
.contact-links {
  text-decoration: none;
  font-weight: semi-bold;
  color: white;
}

.btn-cannvest {
  background-color: #00ab81;
}

.btn-cannvest:hover {
  background-color: #008262;
}

.hidden {
  display: none;
}
</style>
