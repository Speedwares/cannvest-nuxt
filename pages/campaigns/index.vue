<template>
  <div class="wrapper ecommerce-page">
    <el-carousel height="100vh">
      <el-carousel-item>
        <div class="page-header header-filter">
          <div class="page-header-image" style="background-image: url('img/bg40.jpg')"></div>
          <div class="content-center text-center">
            <div class="row">
              <div class="col-md-8 ml-auto mr-auto">
                <h1 class="title">Finding the Perfect.</h1>
                <h4 class="description text-white">
                  The haute couture crowds make stylish statements
                  between shows during couture season in Paris...
                </h4>
              </div>
            </div>
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="page-header header-filter">
          <div class="page-header-image" style="background-image: url('img/bg41.jpg')"></div>
          <div class="content-center">
            <div class="row">
              <div class="col-md-8 ml-auto mr-auto text-center">
                <h1 class="title">Street Style: Couture.</h1>
                <h4 class="description text-white">
                  See what Karlie Kloss, Tracee Ellis Ross and others
                  wore between the shows...
                </h4>
              </div>
            </div>
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="page-header header-filter">
          <div class="page-header-image" style="background-image: url('img/bg29.jpg')"></div>
          <div class="content-center text-center">
            <div class="row">
              <div class="col-md-8 ml-auto mr-auto">
                <h1 class="title">For Men With Style.</h1>
                <h4 class="description text-white">
                  Shirts that actually fit? Check. Linen shorts? Yup.
                  Those wider pants suddenly in style? Got them, too....
                </h4>
              </div>
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="main">
      <div class="section">
        <div class="container">
          <h2 class="section-title">Campañas activas</h2>
          <div class="row">
            <div class="col-md-4 col-sm-6">
              <campaign-short-overview :campaign=" campaignDetailses[2] " />
            </div>
            <div class="col-md-4 col-sm-6">
              <campaign-short-overview :campaign="campaignDetailses[2]" />
            </div>
            <div class="col-md-4 col-sm-6">
              <campaign-short-overview :campaign="campaignDetailses[2]" />
            </div>
          </div>
        </div>
      </div>
      <!-- section -->
      <!-- <div class="container">
        <h2 class="section-title">News in fashion</h2>
      </div>
      <div class="projects-4">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6 px-0">
              <card
                type="background"
                class="card-fashion"
                style="background-image: url('img/bg35.jpg')"
              >
                <div class="card-title text-left">
                  <h2>
                    <a href="#pablo">
                      The New York Times Todd Snyder and Raf Simons Party During Men’s Fashion
                      Week
                    </a>
                  </h2>
                </div>
                <div class="card-footer text-left">
                  <div class="stats">
                    <span>
                      <i class="now-ui-icons users_circle-08"></i>Emy Grace
                    </span>
                    <span>
                      <i class="now-ui-icons tech_watch-time"></i> June 6, 2017
                    </span>
                  </div>
                  <div class="stats-link pull-right">
                    <a href="#pablo" class="footer-link">Fashion Week</a>
                  </div>
                </div>
              </card>
            </div>
            <div class="col-md-6 px-0">
              <div class="card-container">
                <div class="card card-fashion">
                  <div class="card-title">
                    <a href="#pablo"></a>
                    <h4>
                      <a href="#pablo"></a>
                      <a
                        href="#pablo"
                      >Valentina Garavani Holds a Summer Lunch in Honor of Sofia Coppola...</a>
                    </h4>
                  </div>
                  <div class="card-body">
                    <div class="card-footer text-left">
                      <div class="stats">
                        <span>
                          <i class="now-ui-icons users_circle-08"></i>Jerry McGregor
                        </span>
                        <span>
                          <i class="now-ui-icons tech_watch-time"></i> June 10, 2017
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <card
                  type="background"
                  class="card-fashion"
                  style="background-image: url('img/bg40.jpg')"
                ></card>
              </div>
            </div>
          </div>
        </div>
      </div>-->
      <!-- <div class="section">
        <div class="container">
          <h2 class="section-title">Latest Offers</h2>
          <div class="row">
            <div class="col-md-4">
              <card type="product" plain>
                <img slot="image" src="img/saint-laurent1.jpg" alt />
                <h4 class="card-title">
                  <a href="#pablo">Saint Laurent</a>
                </h4>
                <p class="card-description">
                  The structured shoulders and sleek detailing ensure a
                  sharp silhouette. Team it with a silk pocket square and leather loafers.
                </p>
                <div class="card-footer">
                  <div class="price-container">
                    <span class="price price-old">&euro;1,430</span>
                    <span class="price price-new">&euro;743</span>
                  </div>
                  <div class="stats stats-right">
                    <el-tooltip content="Saved to Wishlist" effect="light" placement="top">
                      <n-button type="neutral" icon>
                        <i class="now-ui-icons ui-2_favourite-28"></i>
                      </n-button>
                    </el-tooltip>
                  </div>
                </div>
              </card>
            </div>
            <div class="col-md-4">
              <card type="product" plain>
                <img slot="image" src="img/saint-laurent1.jpg" alt />
                <h4 class="card-title">
                  <a href="#pablo">Saint Laurent</a>
                </h4>
                <p class="card-description">
                  The structured shoulders and sleek detailing ensure a
                  sharp silhouette. Team it with a silk pocket square and leather loafers.
                </p>
                <div class="card-footer">
                  <div class="price-container">
                    <span class="price price-old">&euro;1,430</span>
                    <span class="price price-new">&euro;743</span>
                  </div>
                  <div class="stats stats-right">
                    <el-tooltip content="Saved to Wishlist" effect="light" placement="top">
                      <n-button type="neutral" icon>
                        <i class="now-ui-icons ui-2_favourite-28"></i>
                      </n-button>
                    </el-tooltip>
                  </div>
                </div>
              </card>
            </div>
            <div class="col-md-4">
              <card type="product" plain>
                <img slot="image" src="img/gucci.jpg" alt />
                <h4 class="card-title">
                  <a href="#pablo">Gucci</a>
                </h4>
                <p class="card-description">
                  The smooth woven-wool is water resistant to ensure you
                  stay pristine after a long-haul flight. Cut in a trim yet comfortable regular
                  fit.
                </p>
                <div class="card-footer">
                  <div class="price-container">
                    <span class="price price-old">&euro;2,430</span>
                    <span class="price price-new">&euro;890</span>
                  </div>
                  <div class="stats stats-right">
                    <el-tooltip content="Saved to Wishlist" effect="light" placement="top">
                      <n-button type="neutral" icon>
                        <i class="now-ui-icons ui-2_favourite-28"></i>
                      </n-button>
                    </el-tooltip>
                  </div>
                </div>
              </card>
            </div>
          </div>
        </div>
      </div>-->
      <!-- section -->
      <div
        class="subscribe-line subscribe-line-image"
        style="background-image: url('img/bg43.jpg')"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-6 ml-auto mr-auto">
              <div class="text-center">
                <h4 class="title">Subscribe to our Newsletter</h4>
                <p class="description">
                  Join our newsletter and get news in your inbox every week! We hate spam too, so no
                  worries about this.
                </p>
              </div>
              <card type="raised" class="card-form-horizontal">
                <div class="row">
                  <div class="col-sm-8">
                    <fg-input
                      placeholder="Your Email..."
                      addon-left-icon="now-ui-icons ui-1_email-85"
                    ></fg-input>
                  </div>
                  <div class="col-sm-4">
                    <n-button type="success" round block>Subscribe</n-button>
                  </div>
                </div>
              </card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import gql from "graphql-tag";

import {
  Card,
  Button,
  InfoSection,
  FormGroupInput,
  Checkbox,
  Collapse,
  CollapseItem,
  Slider
} from "@/components";
import { Carousel, CarouselItem, Tooltip } from "element-ui";
import CampaignShortOverview from "@/components/Crowdfunding/CampaignShortOverview.vue";

const campaigns = gql`
  query {
    campaignDetailses {
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
  name: "campaigns",
  layout: "white-nav",
  components: {
    Card,
    InfoSection,
    Collapse,
    CollapseItem,
    Slider,
    [Button.name]: Button,
    [Checkbox.name]: Checkbox,
    [FormGroupInput.name]: FormGroupInput,
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem,
    [Tooltip.name]: Tooltip,
    CampaignShortOverview
  },
  data: () => ({
    campaignDetailses: null,
    campaignDetails: null
  }),
  apollo: {
    campaignDetails: {
      query: campaign
    },
    campaignDetailses: {
      query: campaigns
    }
  }
};
</script>
<style>
</style>
