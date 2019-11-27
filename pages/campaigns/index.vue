<template>
  <div class="wrapper ecommerce-page">
    <el-carousel height="100vh">
      <el-carousel-item v-for="item in carousel" :key="item.id">
        <div class="page-header header-filter">
          <div
            class="page-header-image"
            :style="{ 'background-image' : 'url(' +  item.img  + ' )' }"
          ></div>
          <div class="content-center text-center">
            <div class="row">
              <div class="col-md-8 ml-auto mr-auto">
                <h1 class="title">{{ item.title }}</h1>
                <h4 class="description text-white">{{ item.description }}</h4>
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

          <ul>
            <li v-for="item in carousel" :key="item.id">{{ item.title }} {{ item.img }}</li>
          </ul>

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

      <div
        class="subscribe-line subscribe-line-image"
        style="background-image: url('img/bg43.jpg')"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-6 ml-auto mr-auto">
              <div class="text-center">
                <h4 class="title">Suscríbase a nuestro boletín</h4>
                <p
                  class="description"
                >Entérese de las próximas campañas y de las últimas novedades de Cannvest</p>
              </div>
              <card type="raised" class="card-form-horizontal">
                <div class="row">
                  <div class="col-sm-8">
                    <fg-input
                      placeholder="Correo electrónico..."
                      addon-left-icon="now-ui-icons ui-1_email-85"
                    ></fg-input>
                  </div>
                  <div class="col-sm-4">
                    <n-button type="info" round block>Suscríbase</n-button>
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
    carousel: [
      {
        title: "Title 1",
        description: "ABC",
        img: "/img/campaigns/cbd-drop.jpg"
      },
      {
        title: "Title 2",
        description: "ABCD",
        img: "/img/campaigns/hand-holding.jpg"
      },
      {
        title: "Title 3",
        description: "ABCDEF",
        img: "/img/campaigns/research.jpg"
      }
    ]
  }),
  apollo: {
    campaignDetailses: {
      query: campaigns
    }
  },
  nuxtI18n: {
    seo: false
  },
  i18n: {
    messages: {
      en: {
        meta: {
          title: "Crowdfunding Campaigns",
          description: "Active crowdfunding campaigns",
          keywords: "Crowdfunding, Campaigns, Cannabis, Colombia"
        }
      },
      es: {
        meta: {
          title: "Campañas de Crowdfunding",
          description: "Campañas de C¡crowdfunding activas",
          keywords: "Crowdfunding, Campañas, Cannabis, Colombia"
        }
      }
    }
  },
  head() {
    return {
      title: this.$t("meta.title"),
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: this.$t("meta.description")
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.$t("meta.keywords")
        }
      ]
    };
  }
};
</script>
<style>
</style>
