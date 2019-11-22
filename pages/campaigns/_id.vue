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
    <div class="section related-products" data-background-color="black">
      <div class="container">
        <h3 class="title text-center">You may also be interested in:</h3>
        <div class="row">
          <div class="col-sm-6 col-md-3">
            <card type="product">
              <img slot="image" class="img rounded" src="img/saint-laurent.jpg" />

              <h6 class="category text-danger">Trending</h6>
              <h4 class="card-title">
                <a href="#pablo" class="card-link">Dolce & Gabbana</a>
              </h4>
              <div class="card-description">
                Dolce & Gabbana's 'Greta' tote has been crafted in Italy from hard-wearing red
                textured-leather.
              </div>
              <div class="card-footer">
                <div class="price-container">
                  <span class="price">€1,459</span>
                </div>
                <el-tooltip content="Add to Wishlist" placement="left">
                  <n-button type="neutral" icon round class="pull-right">
                    <i class="now-ui-icons ui-2_favourite-28"></i>
                  </n-button>
                </el-tooltip>
              </div>
            </card>
          </div>
          <div class="col-sm-6 col-md-3">
            <card type="product">
              <img slot="image" class="img rounded" src="img/gucci.jpg" />

              <h6 class="category text-danger">Popular</h6>
              <h4 class="card-title">
                <a href="#pablo" class="card-link">Balmain</a>
              </h4>
              <div class="card-description">
                Balmain's mid-rise skinny jeans are cut with stretch to ensure they retain their
                second-skin fit but move comfortably.
              </div>
              <div class="card-footer">
                <div class="price-container">
                  <span class="price">€459</span>
                </div>
                <el-tooltip content="Add to Wishlist" placement="left">
                  <n-button type="neutral" icon round class="pull-right">
                    <i class="now-ui-icons ui-2_favourite-28"></i>
                  </n-button>
                </el-tooltip>
              </div>
            </card>
          </div>
          <div class="col-sm-6 col-md-3">
            <card type="product">
              <img slot="image" class="img rounded" src="img/wooyoungmi.jpg" />

              <h6 class="category text-danger">Popular</h6>
              <h4 class="card-title">
                <a href="#pablo" class="card-link">Balenciaga</a>
              </h4>
              <div class="card-description">
                Balenciaga's black textured-leather wallet is finished with the label's iconic
                'Giant' studs. This is where you can...
              </div>
              <div class="card-footer">
                <div class="price-container">
                  <span class="price">€559</span>
                </div>
                <el-tooltip content="Add to Wishlist" placement="left">
                  <n-button type="neutral" icon round class="pull-right">
                    <i class="now-ui-icons ui-2_favourite-28"></i>
                  </n-button>
                </el-tooltip>
              </div>
            </card>
          </div>
          <div class="col-sm-6 col-md-3">
            <card type="product">
              <img slot="image" class="img rounded" src="img/saint-laurent1.jpg" />

              <h6 class="category text-danger">Trending</h6>
              <h4 class="card-title">
                <a href="#pablo" class="card-link">Dolce & Gabbana</a>
              </h4>
              <div class="card-description">
                Dolce & Gabbana's 'Greta' tote has been crafted in Italy from hard-wearing red
                textured-leather.
              </div>
              <div class="card-footer">
                <div class="price-container">
                  <span class="price">€ 1,359</span>
                </div>
                <el-tooltip content="Add to Wishlist" placement="left">
                  <n-button type="neutral" icon round class="pull-right">
                    <i class="now-ui-icons ui-2_favourite-28"></i>
                  </n-button>
                </el-tooltip>
              </div>
            </card>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer footer-big footer-white">
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
    </footer>
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
    CampaignTeam
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




