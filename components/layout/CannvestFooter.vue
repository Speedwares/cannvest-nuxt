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
            <a class="nav-link social-icon" href="https://www.linkedin.com/company/cannvest">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a class="nav-link social-icon" href="https://www.facebook.com/cannvest">
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a class="nav-link social-icon" href="https://twitter.com/cannvest">
              <i class="fab fa-twitter"></i>
            </a>
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
          copyright: "Cannvest Technologies. All Rights Reserved"
        }
      },
      es: {
        message: {
          copyright: "Cannvest Technologies. Todos los Derechos Reservados"
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
