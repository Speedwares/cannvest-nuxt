<template>
  <nuxt-link :to="'/campaigns/' + campaign.id ">
    <!-- <nuxt-child :key="$route.params.id" > -->
    <card type="profile">
      <div class="campaign-photo">
        <p style="color:transparent"></p>
      </div>
      <img slot="avatar" class="img img-raised company-logo" :src="campaign.company.logo.url" />
      <div class="card-body">
        <a :href="campaign.company.website">
          <h4 class="card-title">{{ campaign.company.razonSocial }}</h4>
        </a>
        <h6 class="category text-gray">{{ campaign.title }}</h6>
        <p class="card-description">{{ campaign.description }}</p>
        <div class="price-container">
          <h5 class="price-left pull-left finance-data-title">
            Objetivo de la campaña:
            <span class="finance-data">{{ goalFormat }}</span>
          </h5>
        </div>
        <div>
          <n-progress type="warning" :value="percentageRaised" :height="35" show-value style></n-progress>
        </div>

        <div class="row finance-data-container">
          <div class="col-md-6">
            <h5 class="card-title text-left finance-data-title">
              Financiado:
              <span class="finance-data">{{ raisedFormat }}</span>
            </h5>
          </div>
          <div class="col-md-6 sides-border">
            <h5 class="card-title text-left finance-data-title">
              Inversionistas:
              <span class="finance-data">{{ campaign.backersNumber }}</span>
            </h5>
          </div>
          <div class="col-md-12">
            <h5 class="card-title text-left finance-data-title">
              Rentabilidad Esperada:
              <span class="finance-data">21.5% E.A.</span>
            </h5>
          </div>
        </div>

        <div class="card-footer" style="display:none">
          <a href="#pablo" class="btn btn-icon btn-twitter btn-round">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#pablo" class="btn btn-icon btn-facebook btn-round">
            <i class="fab fa-facebook-square"></i>
          </a>
          <a href="#pablo" class="btn btn-icon btn-google btn-round">
            <i class="fab fa-google"></i>
          </a>
        </div>
      </div>
    </card>
  </nuxt-link>
  <!-- </nuxt-child> -->
</template>

<style>
.progress {
  background: rgba(0, 128, 157, 0.4) !important;
}
.progress-bar {
  background: rgba(0, 128, 157, 1) !important;
}
.progress-value {
  color: #00809d !important;
}
</style>

<style scoped>
.price-container {
  display: flex;
}

.card-body {
  margin-top: 330px;
}
/* <NuxtChild :key="$route.params.id" /> */

.campaign-photo {
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-image: url("/img/bushes.jpg");
  position: absolute;
  top: 5px;
  left: 0;
  width: 100%;
  height: 300px;
  z-index: 0;
}

.company-logo {
  position: absolute;
  max-width: 100px;
  max-height: 100px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1;
}

.campaign-img {
  max-height: 200px;
}

.card-description {
  font-size: 1.1em;
  font-weight: 400;
}

.finance-data-container {
  margin-top: 1em;
}

.finance-data-title {
  color: #444;
  font-size: 1.1em;
}

.finance-data-container .finance-data-title {
  font-size: 0.85em;
}

.finance-data {
  font-weight: bold;
  color: #00809d;
}

@media screen and (min-width: 768px) {
  .company-logo {
    max-width: 130px;
    max-height: 130px;
  }
  .sides-border {
    border-left: 1px solid #aaa;
  }
  .finance-data-container .finance-data-title {
    /* font-size: 1.2em; */
  }
}
</style>
<script>
import { Card, Progress } from "@/components";

export default {
  components: {
    Card,
    [Progress.name]: Progress
  },
  props: ["campaign"],
  data: function() {
    return {
      goalFormat: new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        maximumSignificantDigits: 1
      }).format(this.campaign.fundingGoal),
      raisedFormat: new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        maximumSignificantDigits: 1
      }).format(this.campaign.pledgedFunds)
    };
  },
  computed: {
    percentageRaised: function() {
      return (this.campaign.pledgedFunds / this.campaign.fundingGoal) * 100;
    }
  }
};
</script>