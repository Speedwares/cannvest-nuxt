<template>
  <div>
    <h4 class="category">
      <a class="company-name" :href="website">{{ company }}</a>
    </h4>
    <p class="category company-description">{{ company_description }}</p>

    <ul>
      <li class="category" v-for="item in company_highlights" :key="item.id">{{ item }}</li>
    </ul>

    <iframe
      width="100%"
      height="315"
      src="https://www.youtube.com/embed/-sIt4M8GH8o"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>

    <div class="row footer">
      <div class="col">
        <ul class="social-buttons">
          <li v-if="twitter !== null">
            <a :href="twitter" class="btn btn-icon btn-neutral btn-twitter btn-round">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li v-if="facebook !== null">
            <a :href="facebook" class="btn btn-icon btn-neutral btn-facebook btn-round">
              <i class="fab fa-facebook-square"></i>
            </a>
          </li>
          <li v-if="linkedin !== null">
            <a :href="linkedin" class="btn btn-icon btn-neutral btn-linkedin btn-round">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li v-if="instagram !== null">
            <a :href="instagram" class="btn btn-icon btn-neutral btn-instagram btn-round">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.company-name {
  color: #00809d;
  text-decoration: none;
}

.company-name:hover {
  color: #005f9b;
}

.company-description {
  color: #595959;
}
</style>

<script>
import { Button } from "@/components";

export default {
  components: {
    [Button.name]: Button
  },
  props: ["campaign"],
  data: function() {
    return {
      id: this.campaign.company.id,
      company: this.campaign.company.razonSocial,
      company_description: this.campaign.company.description,
      company_highlights: this.campaign.company.highlights,
      facebook: this.campaign.company.facebook,
      instagram: this.campaign.company.instagram,
      linkedin: this.campaign.company.linkedin,
      twitter: this.campaign.company.twitter,

      website: this.campaign.company.website,
      logo: this.campaign.company.logo.url
    };
  }
};
</script>