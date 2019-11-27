<template >
  <div
    class="contactus-1 section-image"
    style="background-image: url('img/home-page/cannabis-banner-03.jpg')"
    id="contact-us"
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
              <a href="callto:+573505352868" class="contact-links">+57 350 5352868</a>
            </p>
          </info-section>
        </div>
        <div class="col-md-5 ml-auto mr-auto">
          <card type="contact" raised header-classes="text-center" style>
            <h4 slot="header" class="card-title">{{ $t('message.form_title') }}</h4>

            <form name="contact" @submit.prevent="checkForm" method="post">
              <div class="row">
                <div class="col-md-6 pr-2">
                  <label for="first-name">{{ $t('message.first_name') }}</label>
                  <fg-input
                    :placeholder="$t('message.first_name')"
                    addon-left-icon="now-ui-icons users_circle-08"
                    v-model="firstName"
                    required
                  ></fg-input>
                </div>
                <div class="col-md-6 pl-2">
                  <label for="last-name">{{ $t('message.last_name') }}</label>
                  <fg-input
                    :placeholder="$t('message.last_name')"
                    addon-left-icon="now-ui-icons text_caps-small"
                    v-model="lastName"
                    required
                  ></fg-input>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 pr-2">
                  <label for="email">{{ $t('message.email') }}</label>
                  <fg-input
                    :placeholder="$t('message.email')"
                    addon-left-icon="now-ui-icons ui-1_email-85"
                    v-model="emailAddress"
                    required
                  ></fg-input>
                </div>
                <div class="col-md-6 pl-2">
                  <label for="telephone">{{ $t('message.telephone') }}</label>
                  <fg-input
                    :placeholder="$t('message.telephone')"
                    addon-left-icon="now-ui-icons tech_mobile"
                    v-model="telephone"
                    required
                  ></fg-input>
                </div>
              </div>              
              <!-- <div class="form-group">
                <label for="email">{{ $t('message.email') }}</label>
                <fg-input
                  :placeholder="$t('message.email')"
                  addon-left-icon="now-ui-icons ui-1_email-85"
                  v-model="emailAddress"
                  required
                ></fg-input>
              </div> -->
              <div class="form-group">
                <label>{{ $t('message.interest') }}</label>
                <fg-input required>
                  <el-select
                    class="select-info"
                    :placeholder="$t('message.select_option')"
                    v-model="profile"
                  >
                    <el-option
                      class="select-default"
                      value="Investor"
                      :label="$t('message.investor')"
                    ></el-option>
                    <el-option
                      class="select-default"
                      value="Producer"
                      :label="$t('message.producer')"
                    ></el-option>
                    <el-option
                      class="select-default"
                      value="Information"
                      :label="$t('message.more_info')"
                    ></el-option>
                  </el-select>
                </fg-input>
              </div>
              <div class="form-group">
                <label for="message">{{ $t('message.your_message') }}</label>
                <textarea
                  name="message"
                  class="form-control"
                  id="message"
                  rows="6"
                  v-model="message"
                ></textarea>
                  <input
                    type="submit"
                    class="btn btn-round btn-success text-center btn-cannvest"
                    :value="$t('message.submit')"
                    
                  />
              </div>

              <!-- <div class="row">
                <div class="col-md-6"></div>
                <div class="col-md-6">
                  <input
                    type="submit"
                    class="btn btn-round btn-success pull-right btn-cannvest"
                    :value="$t('message.submit')"
                  />
                </div>
              </div> -->
              <p v-if="errors.length" class="form-error">
                <b>{{$t('message.correct_errors')}}</b>
                <ul>
                  <li v-for="(error, index) in errors" :key="index">
                    {{error}}
                  </li>
                </ul>
              </p>
              <p v-if="writeSuccessful" class="form-success">{{ $t('message.thank_you') }}</p>

            </form>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { fireDb } from "~/plugins/firebase.js";
import { Select, Option } from "element-ui";

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
    [FormGroupInput.name]: FormGroupInput,
    [Select.name]: Select,
    [Option.name]: Option
  },
  data() {
    return {
      firstName: null,
      lastName: null,
      emailAddress: null,
      telephone: null,
      message: null,
      writeSuccessful: false,
      profile: null,
      errors: []
    };
  },
  methods: {
    checkForm() {
      this.errors = [];

      if (!this.firstName) {
        this.errors.push(this.$i18n.t("message.first_name_required"));
        console.log(this.errors);
      }
      if (!this.lastName) {
        this.errors.push(this.$i18n.t("message.last_name_required"));
        console.log(this.errors);
      }
      if (!this.emailAddress) {
        this.errors.push(this.$i18n.t("message.email_required"));
        console.log(this.errors);
      } else if (!this.validEmail(this.emailAddress)) {
        this.errors.push(this.$i18n.t("message.valid_email_required"));
      }
      if (!this.profile) {
        this.errors.push(this.$i18n.t("message.profile_required"));
        console.log(this.errors);
      }
      if (!this.errors.length) {
        this.saveContact();
      }
    },

    validEmail: function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },

    async saveContact() {
      const ref = fireDb.collection("contacts");
      try {
        const docRef = await ref.add({
          firstName: this.firstName,
          lastName: this.lastName,
          emailAddress: this.emailAddress,
          telephone: this.telephone,
          message: this.message,
          profile: this.profile,
          slug: this.generateUUID()
        });
        console.log("Document written with ID: ", docRef.id);
        this.writeSuccessful = true;
        this.clearFields();
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    generateUUID() {
      let d = new Date().getTime();
      let uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function(c) {
          let r = (d + Math.random() * 16) % 16 | 0;
          d = Math.floor(d / 16);
          return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
        }
      );
      return uuid;
    },
    clearFields() {
      this.firstName = null;
      this.lastName = null;
      this.emailAddress = null;
      this.telephone = null;
      this.message = null;
      this.profile = null;
    }
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
          telephone: "Phone number",
          interest: "I am interested in",
          select_option: "Select an option",
          investor: "Invest in cannabis",
          producer: "Get funded",
          more_info: "More information",
          your_message: "Your message",
          submit: "Send Message",
          correct_errors: "Please correct the following errors",
          first_name_required: "Please add your first name",
          last_name_required: "Please add your last name",
          email_required: "Please add your email address",
          valid_email_required: "Please add a valid email address",
          profile_required: "Please select your need",
          thank_you: "Thanks for writing us. We will contact you shortly"
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
          telephone: "Teléfono",
          interest: "Deseo",
          select_option: "Seleccione una opción",
          investor: "Invertir en cannabis",
          producer: "Recibir financiación",
          more_info: "Más información",
          your_message: "Su Mensaje",
          submit: "Enviar",
          correct_errors: "Por favor corrija los siguientes errores",
          first_name_required: "Por favor escriba su nombre",
          last_name_required: "Por favor escriba su apellido",
          email_required: "Por favor escriba su correo electrónico",
          valid_email_required: "Por favor escribir una dirección de correo electrónico válida",
          profile_required: "Por favor seleccione su necesidad",
          thank_you: "Gracias por escribirnos. Lo contactaremos pronto."

        }
      }
    }
  }
};
</script>
<style scoped>
.section-image::after {
  background-color: rgba(0, 0, 0, 0.5);
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

.form-error {
  color: red;
  font-size: 0.9em;
}

.form-success {
  color: #00ab81;
  font-weight: bold;
  font-size: 1em;
}
</style>
