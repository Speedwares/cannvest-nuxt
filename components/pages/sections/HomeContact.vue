<template>
  <div
    class="contactus-1 section-image"
    style="background-image: url('img/contact1.jpg')"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <h2 class="title">Get in Touch</h2>
          <h4 class="description">
            You need more information? Check what other persons are saying about
            our product. They are very happy with their purchase.
          </h4>
          <info-section type="success" icon="now-ui-icons location_pin">
            <h4 class="info-title">Find us at the office</h4>
            <p class="description">
              Bld Mihail Kogalniceanu, nr. 8, <br />
              7652 Bucharest, <br />
              Romania
            </p>
          </info-section>

          <info-section type="success" icon="now-ui-icons tech_mobile">
            <h4 class="info-title">Give us a ring</h4>
            <p class="description">
              Michael Jordan <br />
              +40 762 321 762 <br />
              Mon - Fri, 8:00-22:00
            </p>
          </info-section>
        </div>
        <div class="col-md-5 ml-auto mr-auto">
          <card type="contact" raised header-classes="text-center">
            <h4 slot="header" class="card-title">Contact Us</h4>

            <div class="row">
              <div class="col-md-6 pr-2">
                <label>First Name</label>
                <fg-input
                  placeholder="First Name..."
                  addon-left-icon="now-ui-icons users_circle-08"
                >
                </fg-input>
              </div>
              <div class="col-md-6 pl-2">
                <label>Last Name</label>
                <fg-input
                  placeholder="Last Name..."
                  addon-left-icon="now-ui-icons text_caps-small"
                >
                </fg-input>
              </div>
            </div>
            <div class="form-group">
              <label>Email address</label>
              <fg-input
                placeholder="Email Here..."
                addon-left-icon="now-ui-icons ui-1_email-85"
              >
              </fg-input>
            </div>
            <div class="form-group">
              <label>Your message</label>
              <textarea
                name="message"
                class="form-control"
                id="message"
                rows="6"
              ></textarea>
            </div>
            <div class="row">
              <div class="col-md-6">
                <n-checkbox>
                  I'm not a robot
                </n-checkbox>
              </div>
              <div class="col-md-6">
                <n-button type="success" round class="pull-right"
                  >Send Message</n-button
                >
              </div>
            </div>
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
} from '@/components'
export default {
  name: 'Contact',
  components: {
    Card,
    InfoSection,
    [Button.name]: Button,
    [Checkbox.name]: Checkbox,
    [FormGroupInput.name]: FormGroupInput
  }
}
</script>
<style></style>
