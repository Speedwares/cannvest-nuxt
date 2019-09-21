<template>
  <footer
    class="footer"
    :class="{[`footer-${type}`]: type}"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            <nuxt-link class="nav-link" to="/terms-and-conditions">
              <span style="color:#00ab81">{{ $t('message.terms') }}</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link class="nav-link" to="/privacy-policy">
              <span style="color:#00ab81">{{ $t('message.privacy_policy') }}</span>
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="copyright">&copy; {{year}}, {{ $t('message.copyright') }}</div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  },
  i18n: {
    messages: {
      en: {
        message: {
          copyright: "Cannvest Technologies. All Rights Reserved",
          terms: "Terms and Conditions",
          privacy_policy: "Privacy Policiy"
        }
      },
      es: {
        message: {
          copyright: "Cannvest Technologies. Todos los Derechos Reservados",
          terms: "Términos y Condiciones",
          privacy_policy: "Política de Privacidad"
        }
      }
    }
  }
};
</script>
<style scoped>
.fab {
  font-size: 1.2em;
  color: #00ab81;
}
.fab:hover {
  color: #008262;
}
</style>
