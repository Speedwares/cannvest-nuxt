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
            <a class="nav-link social-icon" href="/">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a class="nav-link social-icon" href="/">
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a class="nav-link social-icon" href="/">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright">&copy; {{year}}, Cannvest Technologies. All Rights Reserved</div>
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
