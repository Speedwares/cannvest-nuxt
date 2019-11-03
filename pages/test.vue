<template>
  <div>
    <div style="height: 200px;"></div>
    <!-- <h2>{{ campaignDetails }}</h2> -->
    <br />
    <!-- <h3>{{ campaignDetails.company.logo.url }}</h3> -->
    <div class="row">
      <div class="col-md-4 col-sm-6">
        <campaign-short-overview :campaign="campaignDetails" />
      </div>
      <div class="col-md-4 col-sm-6">
        <campaign-short-overview :campaign="campaignDetails" />
      </div>
      <div class="col-md-4 col-sm-6">
        <campaign-short-overview :campaign="campaignDetails" />
      </div>            
    </div>

    <!-- <ul v-for="campaign in campaignDetailses" :key="campaign.id">
      <li>{{ campaign.id }}</li>
    </ul>-->
  </div>
</template>

<script>
import CampaignShortOverview from "@/components/Crowdfunding/CampaignShortOverview.vue";
import gql from "graphql-tag";

const campaign = gql`
  query {
    campaignDetails(where: { id: "ck2bwebuaau770a30sqfgopcp" }) {
      id
      title
      description
      fundingGoal
      pledgedFunds
      backersNumber
      image {
        url
      }
      city
      company {
        id
        razonSocial
        nit
        website
        logo {
          id
          url
        }
      }
    }
  }
`;
export default {
  layout: "white-nav",
  components: {
    CampaignShortOverview
  },
  data: () => ({
    campaignDetails: null,
    title: null
  }),
  methods: {
    showData() {
      console.log(this.campaignDetails.title);
    }
  },
  apollo: {
    campaignDetails: {
      query: campaign
    }
  }
};
</script>
