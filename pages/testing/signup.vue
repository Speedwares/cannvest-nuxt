<template>
  <div class="page-header signup-page section-image">
    <div class="page-header-image" style="background-image: url('img/bg18.jpg')"></div>
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-md-4 ml-auto mr-auto">
            <div class="info info-horizontal">
              <div class="icon icon-primary">
                <i class="now-ui-icons media-2_sound-wave"></i>
              </div>
              <div class="description">
                <h5 class="info-title text-white">Marketing</h5>
                <p class="description text-white">
                  We've created the marketing campaign of the website. It was a very interesting
                  collaboration.
                </p>
              </div>
            </div>
            <div class="info info-horizontal">
              <div class="icon icon-primary">
                <i class="now-ui-icons media-1_button-pause"></i>
              </div>
              <div class="description">
                <h5 class="info-title text-white">Fully Coded in HTML5</h5>
                <p class="description text-white">
                  We've developed the website with HTML5 and CSS3. The client has access to the code
                  using GitHub.
                </p>
              </div>
            </div>
            <div class="info info-horizontal">
              <div class="icon icon-info">
                <i class="now-ui-icons users_single-02"></i>
              </div>
              <div class="description">
                <h5 class="info-title text-white">Built Audience</h5>
                <p
                  class="description text-white"
                >There is also a Fully Customizable CMS Admin Dashboard for this product.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mr-auto">
            <div class="card card-signup">
              <div class="card-body">
                <h4 class="card-title text-center">Register</h4>
                <div class="social text-center">
                  <n-button round icon class="btn-twitter">
                    <i class="fab fa-twitter"></i>
                  </n-button>
                  <n-button round icon class="btn-dribbble">
                    <i class="fab fa-dribbble"></i>
                  </n-button>
                  <n-button round icon class="btn-facebook">
                    <i class="fab fa-facebook"></i>
                  </n-button>
                  <h5 class="card-description">or be classical</h5>
                </div>
                <fg-input
                  addon-left-icon="now-ui-icons users_circle-08"
                  v-model="form.firstName"
                  placeholder="First Name..."
                ></fg-input>

                <fg-input
                  addon-left-icon="now-ui-icons text_caps-small"
                  v-model="form.lastName"
                  placeholder="Last Name..."
                ></fg-input>

                <fg-input
                  addon-left-icon="now-ui-icons ui-1_email-85"
                  v-model="form.email"
                  placeholder="Your Email..."
                ></fg-input>

                <fg-input
                  addon-left-icon="now-ui-icons ui-1_email-85"
                  v-model="form.password"
                  placeholder="Your Password..."
                ></fg-input>

                <n-checkbox v-model="form.agree">
                  I agree to the terms and
                  <a href="#something">conditions</a>.
                </n-checkbox>
                <div class="card-footer text-center">
                  <!-- <n-button @click="greet" type="success" round size="lg"></n-button> -->
                  <button
                    v-on:click="greet"
                    class="btn btn-success btn-round btn-lg btn-block"
                  >Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <main-footer></main-footer>
  </div>
</template>
<script>
import { Card, Button, FormGroupInput, Checkbox } from "@/components";
import MainFooter from "@/components/layout/MainFooter";
const header = require("@/utils/auth/generate-header.js");

export default {
  name: "signup-page",
  layout: "default-no-footer",
  components: {
    Card,
    MainFooter,
    [Button.name]: Button,
    [Checkbox.name]: Checkbox,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        agree: false
      }
    };
  },
  methods: {
    greet: async function() {
      console.log("enter header");
      if (this.form.email !== "" && this.password !== "") {
        const token = header.authHeader(this.form.email, this.form.password);
        console.log(token["cv-auth"]);
        const axiosConfig = {
          headers: {
            "cv-auth":
              "AuthToken ApiKey='cannvestco-001', TokenDigest='vzAeqDaAQZIMpNmqcCejukt79fM=', Nonce='1b248eec3ebec58c7d1b9d85760fe5bd', Created='2019-12-01T20:12:08+00:00', Username='davidnuxt01@test.com', Password='aVJGR0RaRVYCAAoS'"
            // "Content-Type": "application/json"
          }
        };

        const postData = {
          email: "davidnuxt01@test.com",
          password: "Password123!",
          url: "https://www.yoursite.com/verify-email"
        };

        const postUrl =
          "https://api.sandbox.crowdvalley.com/v1/cannvestco/users";

        let { aut } = await this.$axios.post(postUrl, postData, axiosConfig);

        console.log(aut);
      }
      console.log("exit header");
    }
  }
};
</script>
<style>
</style>
