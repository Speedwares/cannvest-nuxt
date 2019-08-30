
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  router: {
    base: '/',
    linkExactActiveClass: 'active',
    scrollBehavior: (to) => {
      if (to.hash) {
        return {selector: to.hash}
      } else {
        return { x: 0, y: 0 }
      }
    }
  },
  head: {
    title: 'Cannvest',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.5, user-scalable=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/cannvest-logo-icon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700,200|Open+Sans+Condensed:700' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.6/css/all.css' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css', crossorigin: 'anonymous' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/sass/now-ui-kit.scss',
    '~/assets/sass/demo.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/globalDirectives.js', ssr: false },
    { src: '~/plugins/element-ui.js' },
    { src: '~/plugins/now-ui-kit' }
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    'nuxt-i18n',
    '@nuxtjs/google-analytics'

  ],
  /*
  ** Build configuration
  */
  build: {
    extractCSS: process.env.NODE_ENV === 'production',
    babel: {
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk'
          }
        ]
      ]
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  i18n: {
    vueI18n: {
      fallbackLocale: 'es',
    },    
    locales: [{
      name: 'Español',
      code: 'es',
      iso: 'es-ES',
      file: 'es-ES.js'
    },
    {
      name: 'English',
      code: 'en',
      iso: 'en-US',
      file: 'en-US.js'
    }],
    langDir: 'lang/',
    defaultLocale: 'es',
    lazy: true,
    parsePages: false,
  },
  googleAnalytics: {
    id: 'UA-141781891-1',
      debug: {
    enabled: false, // false is default value
    trace: false, // default value
    sendHitTask: true // default value
  }
  }  
}
