<template>
  <div>
    <div class="text-center">
      <img slot="image" class="img company-logo" :src="logo" />
    </div>

    <card>
      <h4 class="category objetctive-title">
        Objetivo de la campaña:
        <span class="objective-value">{{ goalFormat }}</span>
      </h4>

      <h4 class="category objetctive-title">
        Fondos recaudados:
        <span class="objective-value">{{ raisedFormat }}</span>
      </h4>

      <h4 class="category objetctive-title">
        Número de inversionistas:
        <span style="color: #00809d">{{ investors }}</span>
      </h4>

      <div style="margin-bottom: 50px">
        <n-progress type="warning" :value="percentageRaised" :height="35" show-value style></n-progress>
      </div>
    </card>

    <div class="investment">
      <br />
      <h4 class="category card-title text-center">Financiación por deuda</h4>
      <div class="row">
        <div class="col">
          <h5 class="finance-title">
            Tasa:
            <span></span>
          </h5>
          <p>12% E.A.</p>
        </div>
        <div class="col">
          <h5 class="finance-title">
            Plazo:
            <span></span>
          </h5>
          <p>24 meses</p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h5 class="finance-title">
            Período de pagos:
            <span></span>
          </h5>
          <p>Trimestralmente</p>
        </div>
        <div class="col">
          <h5 class="finance-title">
            Período de gracia:
            <span></span>
          </h5>
          <p>12 meses</p>
        </div>
      </div>
      <div class="row">
        <div class="col text-center">
          <n-button type="default" size="lg" class="invest-button">Invest</n-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.invest-button {
  background-color: #00809d;
}
.invest-button:hover {
  background-color: #005f9b;
}
.company-logo {
  margin-bottom: 10px;
}

.objetctive-title {
  color: #595959;
}

.objective-value {
  color: #00809d;
}

.card {
  margin-bottom: 0;
}

.investment {
  margin-top: 0;
  padding: 0 1em;
  background-color: #2c2c2c;
  color: white;
  widows: 100%;
}
.card-title {
  color: white;
}
.finance-title {
  font-weight: bold;
  margin-bottom: 0;
}
</style>

<script>
import {
  Button,
  Card,
  Collapse,
  CollapseItem,
  Progress,
  Slider
} from "@/components";

export default {
  components: {
    Card,
    Collapse,
    CollapseItem,
    [Button.name]: Button,
    [Progress.name]: Progress,
    [Slider.name]: Slider
  },
  props: ["campaign"],
  data: function() {
    return {
      id: this.campaign.company.id,
      company: this.campaign.company.razonSocial,
      company_highlights: this.campaign.company.highlights,
      website: this.campaign.company.website,
      logo: this.campaign.company.logo.url,
      title: this.campaign.title,
      description: this.campaign.description,
      investors: this.campaign.backersNumber,
      raised: this.campaign.pledgedFunds,
      goal: this.campaign.fundingGoal,
      goalFormat: new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        maximumSignificantDigits: 1
      }).format(this.campaign.fundingGoal),
      raisedFormat: new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        maximumSignificantDigits: 1
      }).format(this.campaign.pledgedFunds),
      simple: 30
    };
  },
  computed: {
    percentageRaised: function() {
      return (this.raised / this.goal) * 100;
    }
  }
};
</script>