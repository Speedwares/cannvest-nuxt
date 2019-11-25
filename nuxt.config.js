import gql from "graphql-tag";
import ApolloClient from "apollo-client";
import fetch from 'node-fetch';
import {
  HttpLink
} from 'apollo-link-http'
import {
  InMemoryCache
} from 'apollo-cache-inmemory'

// Replace this with your project's endpoint
const GRAPHCMS_API =
  'https://api-useast.graphcms.com/v1/ck227pg6r0l2f019eexyr235y/master'


const client = new ApolloClient({
  link: new HttpLink({
    uri: GRAPHCMS_API,
    fetch: fetch
  }),
  cache: new InMemoryCache(),
  defaultHttpLink: false
})


const campaigns = gql `
  query {
    campaignDetailses {
      id
    }
  }
`;

console.log(GRAPHCMS_API)

//DYNAMIC ROUTING PENDING

// let dynamicRoutes = () => {
//   return apolloFetch({
//     campaigns
//   }).then(result => {
//     const {
//       data
//     } = result
//     return data.map(campaign => `/campaigns/${campaign.id}`)
//   })
//   // .query(campaigns).map(campaign => `/campaigns/${campaign.id}`);
// };

let dynamicRoutes = () => {
  return client.query({
    campaigns
  }).then(result => console.log(result))
}

module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  router: {
    base: "/",
    linkExactActiveClass: "active",
    mode: "history",
    scrollBehavior: to => {
      if (to.hash) {
        return {
          selector: to.hash
        };
      } else {
        return {
          x: 0,
          y: 0
        };
      }
    }
  },
  head: {
    title: "Cannvest",
    meta: [{
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, maximum-scale=1.5, user-scalable=1, shrink-to-fit=no"
      },
      {
        name: "keywords",
        content: "crowdfunding, cannabis, blockchain, colombia, invertir, invest"
      },
      {
        hid: "description",
        name: "description",
        content: "Crowdfunding for the cannabis industry in Colombia. Crowdfunding para la industria del cannabis en Colombia"
      }
    ],
    link: [{
        rel: "icon",
        type: "image/x-icon",
        href: "/cannvest-logo-icon.ico"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Montserrat:400,700,200|Open+Sans+Condensed:700"
      },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.0.6/css/all.css"
      },
      {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css",
        crossorigin: "anonymous"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#fff"
  },
  /*
   ** Global CSS
   */
  css: ["~/assets/sass/now-ui-kit.scss", "~/assets/sass/demo.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{
      src: "~/plugins/globalDirectives.js",
      ssr: false
    },
    {
      src: "~/plugins/element-ui.js"
    },
    {
      src: "~/plugins/now-ui-kit"
    },
    {
      src: "~/plugins/firebase.js"
    },
    {
      src: "~/plugins/hotjar.js",
      ssr: false
    }
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/pwa",
    "nuxt-i18n",
    "@nuxtjs/google-analytics",
    "@nuxtjs/apollo"
  ],
  /*
   ** Build configuration
   */
  build: {
    analyze: true,
    extractCSS: process.env.NODE_ENV === "production",
    babel: {
      plugins: [
        [
          "component",
          {
            libraryName: "element-ui",
            styleLibraryName: "theme-chalk"
          }
        ]
      ]
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  generate: {
    //MANUAL ROUTING FOR THE MOMENT
    routes: [
      "/campaigns/ck227vicv0eau0a30gmwkem40",
      "/campaigns/ck228nbva0k1n0a30z4pmpwo6",
      "/campaigns/ck2bwebuaau770a30sqfgopcp"
      // "/blog/primer-post"
    ]
    // routes: dynamicRoutes
  },
  i18n: {
    vueI18n: {
      fallbackLocale: "es"
    },
    locales: [{
        name: "Español",
        code: "es",
        iso: "es-ES",
        file: "es-ES.js"
      },
      {
        name: "English",
        code: "en",
        iso: "en-US",
        file: "en-US.js"
      }
    ],
    langDir: "lang/",
    defaultLocale: "es",
    lazy: true,
    parsePages: false
  },
  googleAnalytics: {
    id: "UA-141781891-1",
    debug: {
      enabled: false, // false is default value
      trace: false, // default value
      sendHitTask: true // default value
    }
  },
  apollo: {
    clientConfigs: {
      default: "@/apollo/client-configs/default.js"
    }
  }
};