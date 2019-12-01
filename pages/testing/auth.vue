<template>
  <div class="page-header header-filter login-page" filter-color="green">
    <div class="page-header-image" style="background-image: url('img/login.jpg')"></div>
    <div class="content">
      <div class="container">
        <div class="col-md-5 ml-auto mr-auto">
          <card type="login" plain>
            <div slot="header" class="logo-container">
              <img v-lazy="'img/now-logo.png'" alt />
            </div>

            <fg-input
              class="no-border input-lg"
              addon-left-icon="now-ui-icons users_circle-08"
              placeholder="First Name..."
              v-model="username"
            ></fg-input>

            <fg-input
              class="no-border input-lg"
              addon-left-icon="now-ui-icons text_caps-small"
              placeholder="Password..."
              v-model="password"
            ></fg-input>

            <p>{{ username }}</p>

            <template slot="raw-content">
              <div class="card-footer text-center">
                <!-- <a href="#pablo" class="btn btn-success btn-round btn-lg btn-block">Get Started</a> -->
                <button
                  v-on:click="greet"
                  class="btn btn-danger btn-round btn-lg btn-block"
                >Click me</button>
              </div>
              <div class="pull-left">
                <h6>
                  <a href="#pablo" class="link footer-link">Create Account</a>
                </h6>
              </div>
              <div class="pull-right">
                <h6>
                  <a href="#pablo" class="link footer-link">Need Help?</a>
                </h6>
              </div>
            </template>
          </card>
        </div>
      </div>
    </div>
    <main-footer></main-footer>
  </div>
</template>
<script>
import { Card, Button, FormGroupInput } from "@/components";
import MainFooter from "@/components/layout/MainFooter";
const header = require("@/utils/auth/generate-header.js");

export default {
  name: "login",
  layout: "default-no-footer",
  components: {
    Card,
    MainFooter,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    greet: function() {
      console.log("enter header");
      if (this.username !== "" && this.password !== "") {
        console.log(header.authHeader(this.username, this.password));
      }
      console.log("exit header");
    }
  }
};
</script>
<style>
</style>
