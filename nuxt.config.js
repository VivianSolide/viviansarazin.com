export default {
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Vivian Sarazin | Engineering-as-Marketing | Bordeaux',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#5a67d8' },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/posts.server.js',
    '~/plugins/tags.server.js',
    '~/plugins/projects.server.js',
    '~/plugins/projectsTags.server.js',
    '~/plugins/dateformat.js',
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],

  modules: ['@nuxtjs/robots', '@nuxtjs/sitemap', '@nuxtjs/google-fonts'],

  storybook: {
    stories: ['~/stories/**/*.stories.js'],
    addons: ['storybook-addon-designs'],
  },

  googleFonts: {
    families: {
      Inconsolata: true,
      Rubik: true,
    },
    display: 'swap',
  },
  sitemap: {
    hostname: 'https://viviansarazin.com',
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
}
