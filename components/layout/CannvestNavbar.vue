<template>
  <navbar
    position="fixed"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template slot-scope="{toggle, isToggled}">
      <nuxt-link class="navbar-brand" to="/">
        <img
          src="/img/logos/cannvest-logo.png"
          alt="Cannvest Logo"
          class="fluid nav-logo nav-logo-lg"
        />
      </nuxt-link>
    </template>
    <template slot="navbar-menu">
      <!-- <drop-down tag="li" title="Components" icon="now-ui-icons design_app" class="nav-item">
        <nav-link to="/">
          <i class="now-ui-icons design_image"></i> Presentation
        </nav-link>
        <nav-link to="/components">
          <i class="now-ui-icons business_chart-pie-36"></i> Components
        </nav-link>
        <a
          href="https://demos.creative-tim.com/nuxt-now-ui-kit-pro/documentation"
          target="_blank"
          class="dropdown-item"
        >
          <i class="now-ui-icons design_bullet-list-67"></i> Documentation
        </a>
      </drop-down>
      <drop-down tag="li" title="sections" icon="now-ui-icons files_paper" class="nav-item">
        <nav-link to="/sections#headers">
          <i class="now-ui-icons shopping_box"></i> Headers
        </nav-link>
        <nav-link to="/sections#features">
          <i class="now-ui-icons ui-2_settings-90"></i> Features
        </nav-link>
        <nav-link to="/sections#blogs">
          <i class="now-ui-icons text_align-left"></i> Blogs
        </nav-link>
        <nav-link to="/sections#teams">
          <i class="now-ui-icons sport_user-run"></i> Teams
        </nav-link>
        <nav-link to="/sections#projects">
          <i class="now-ui-icons education_paper"></i> Projects
        </nav-link>
        <nav-link to="/sections#pricing">
          <i class="now-ui-icons business_money-coins"></i> Pricing
        </nav-link>
        <nav-link to="/sections#testimonials">
          <i class="now-ui-icons ui-2_chat-round"></i> Testimonials
        </nav-link>
        <nav-link to="/sections#contactus">
          <i class="now-ui-icons tech_mobile"></i> Contact Us
        </nav-link>
      </drop-down>
      <drop-down tag="li" title="Examples" icon="now-ui-icons design_image" class="nav-item">
        <nav-link to="/about">
          <i class="now-ui-icons business_bulb-63"></i> About-us
        </nav-link>
        <nav-link to="/blog-post">
          <i class="now-ui-icons text_align-left"></i> Blog Post
        </nav-link>
        <nav-link to="/blog-posts">
          <i class="now-ui-icons design_bullet-list-67"></i> Blog Posts
        </nav-link>
        <nav-link to="/contact">
          <i class="now-ui-icons location_pin"></i> Contact Us
        </nav-link>
        <nav-link to="/landing">
          <i class="now-ui-icons education_paper"></i> Landing Page
        </nav-link>
        <nav-link to="/login">
          <i class="now-ui-icons users_circle-08"></i> Login Page
        </nav-link>
        <nav-link to="/pricing">
          <i class="now-ui-icons business_money-coins"></i> Pricing
        </nav-link>
        <nav-link to="/ecommerce">
          <i class="now-ui-icons shopping_shop"></i> Ecommerce Page
        </nav-link>
        <nav-link to="/product">
          <i class="now-ui-icons shopping_bag-16"></i> Product Page
        </nav-link>
        <nav-link to="/profile">
          <i class="now-ui-icons users_single-02"></i> Profile Page
        </nav-link>
        <nav-link to="/signup">
          <i class="now-ui-icons tech_mobile"></i> Signup Page
        </nav-link>
      </drop-down>-->
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
      <li v-if="this.$i18n.locale == 'en'">
        <a class="nav-link flag" href="/">
          <img src="/img/flags/ES.png" alt />
        </a>
      </li>
      <li v-if="this.$i18n.locale == 'es'">
        <a class="nav-link flag" href="/en">
          <img src="/img/flags/US.png" alt />
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
import { DropDown, NavbarToggleButton, Navbar, NavLink } from "@/components";

let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}
export default {
  name: "cannvest-navbar",
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavbarToggleButton,
    NavLink
  },
  methods: {
    handleScroll() {
      let logo = document.querySelector(".nav-logo");
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      this.currentScrollValue = scrollValue;
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        if (logo.className.includes("nav-logo-lg")) {
          logo.classList.add("nav-logo-sm");
          logo.classList.remove("nav-logo-lg");
        }
      } else {
        if (logo.className.includes("nav-logo-sm")) {
          logo.classList.add("nav-logo-lg");
          logo.classList.remove("nav-logo-sm");
        }
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    }
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);

    console.log(this.$i18n.locale);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  }
};
</script>

<style scoped>
.nav-logo-lg {
  max-height: 75px;
}
.nav-logo-sm {
  max-height: 40px;
}
.fab {
  font-size: 1.4em !important;
  color: #00ab81;
}
.fab:hover {
  color: #008262;
}
.social-icon {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

@media screen and (max-width: 992px) {
  .flag {
    padding-left: 0 !important;
  }
}
</style>
