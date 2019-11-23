<template>
  <div class="wrapper product-page">
    <div class="page-header page-header-mini rellax-header">
      <div class="page-header-image" style="background-image: url('img/pp-cov.jpg') ;"></div>
    </div>
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <campaign-overview-block :campaign="campaignDetails" />
          </div>
          <div class="col-md-6 ml-auto mr-auto">
            <h2 class="title">{{ campaignDetails.title }}</h2>

            <company-overview :campaign="campaignDetails" />
          </div>
        </div>

        <project-description :campaign="campaignDetails" />
        <campaign-team :campaign="campaignDetails" />
      </div>
    </div>
    <documents />
    <!-- <footer class="footer footer-big footer-white">
      <div class="container">
        <div class="content">
          <div class="row">
            <div class="col-md-2">
              <h5>About Us</h5>
              <ul class="links-vertical">
                <li>
                  <a href="#pablo" class="text-muted">Blog</a>
                </li>
                <li>
                  <a href="#pablo" class="text-muted">About Us</a>
                </li>
                <li>
                  <a href="#pablo" class="text-muted">Presentation</a>
                </li>
                <li>
                  <a href="#pablo" class="text-muted">Contact Us</a>
                </li>
              </ul>
            </div>
            <div class="col-md-2">
              <h5>Market</h5>
              <ul class="links-vertical">
                <li>
                  <a href="#pablo" class="text-muted">Sales FAQ</a>
                </li>
                <li>
                  <a href="#pablo" class="text-muted">How to Register</a>
                </li>
                <li>
                  <a href="#pablo" class="text-muted">Sell Goods</a>
                </li>
                <li>
                  <a href="#pablo" class="text-muted">Receive Payment</a>
                </li>
                <li>
                  <a href="#pablo" class="text-muted">Transactions Issues</a>
                </li>
                <li>
                  <a href="#pablo" class="text-muted">Affiliates Program</a>
                </li>
              </ul>
            </div>
            <div class="col-md-4">
              <h5>Social Feed</h5>
              <div class="social-feed">
                <div class="feed-line">
                  <i class="fab fa-twitter"></i>
                  <p>How to handle ethical disagreements with your clients.</p>
                </div>
                <div class="feed-line">
                  <i class="fab fa-twitter"></i>
                  <p>The tangible benefits of designing at 1x pixel density.</p>
                </div>
                <div class="feed-line">
                  <i class="fab fa-facebook-square"></i>
                  <p>A collection of 25 stunning sites that you can use for inspiration.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <h5>Follow Us</h5>
              <ul class="social-buttons">
                <li>
                  <a href="#pablo" class="btn btn-icon btn-neutral btn-twitter btn-round">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#pablo" class="btn btn-icon btn-neutral btn-facebook btn-round">
                    <i class="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#pablo" class="btn btn-icon btn-neutral btn-dribbble btn-round">
                    <i class="fab fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a href="#pablo" class="btn btn-icon btn-neutral btn-google btn-round">
                    <i class="fab fa-google-plus"></i>
                  </a>
                </li>
                <li>
                  <a href="#pablo" class="btn btn-icon btn-neutral btn-instagram btn-round">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
              <h5>
                <small>Numbers Don't Lie</small>
              </h5>
              <h5>
                14.521
                <small class="text-muted">Freelancers</small>
              </h5>
              <h5>
                1.423.183
                <small class="text-muted">Transactions</small>
              </h5>
            </div>
          </div>
        </div>
        <hr />
        <div class="copyright">
          Copyright &copy;
          {{year}} Creative Tim All Rights Reserved.
        </div>
      </div>
    </footer>-->
  </div>
</template>
<script>
import { Card, Button, Collapse, CollapseItem } from "@/components";
import { Carousel, CarouselItem, Select, Option, Tooltip } from "element-ui";
import initParallax from "@/utils/initParallax";
import gql from "graphql-tag";
import CampaignOverviewBlock from "@/components/Crowdfunding/CampaignOverviewBlock.vue";
import CompanyOverview from "@/components/Crowdfunding/CompanyOverview.vue";
import ProjectDescription from "@/components/Crowdfunding/ProjectDescription.vue";
import CampaignTeam from "@/components/Crowdfunding/CampaignTeam.vue";
import Documents from "@/components/Crowdfunding/Documents.vue";

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
      projectTitle
      projectDetailedDescription
      projectPhotos {
        url
      }
      company {
        id
        razonSocial
        nit
        description
        highlights
        website
        facebook
        instagram
        linkedin
        twitter
        logo {
          id
          url
        }
      }
      teamMembers {
        name
        position
        description
        picture {
          url
        }
        email
        linkedIn
      }
    }
  }
`;

export default {
  name: "product-page",
  layout: "white-nav",
  components: {
    Card,
    Collapse,
    CollapseItem,
    [Button.name]: Button,
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem,
    [Select.name]: Select,
    [Option.name]: Option,
    [Tooltip.name]: Tooltip,
    CampaignOverviewBlock,
    CompanyOverview,
    ProjectDescription,
    CampaignTeam,
    Documents
  },
  data() {
    return {
      id: this.$route.params.id,
      filters: {
        color: "",
        size: ""
      },
      year: new Date().getFullYear(),
      campaignDetails: null
    };
  },
  mounted() {
    initParallax();
  },
  computed: {
    goalFormat: function() {
      return new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        maximumSignificantDigits: 1
      }).format(this.campaignDetails.fundingGoal);
    },
    raisedFormat: function() {
      return new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        maximumSignificantDigits: 1
      }).format(this.campaignDetails.pledgedFunds);
    },
    percentageRaised: function() {
      return (
        (this.campaignDetails.pledgedFunds / this.campaignDetails.fundingGoal) *
        100
      );
    }
  },
  apollo: {
    campaignDetails: {
      query: campaign
    }
  }
};
</script>
<style>
.company-logo {
  max-width: 200px;
}
</style>




