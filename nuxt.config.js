import axios from 'axios'
const dynamicRoutes = () => {
  const routes = axios
    .get(
      'https://blog.viviansarazin.com/wp-json/wp/v2/posts?page=1&per_page=20'
    )
    .then((res) => {
      return res.data.map((post) => `/blog/${post.slug}`)
    })
  return routes
}

export default {
  mode: 'universal',
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
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Rubik|Consolas&display=swap',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/posts.server.js',
    '~/plugins/tags.server.js',
    '~/plugins/dateformat.js',
  ],
  generate: {
    routes: dynamicRoutes,
  },
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
  ],
  modules: ['@nuxtjs/robots', '@nuxtjs/sitemap'],
  sitemap: {
    hostname: 'https://www.viviansarazin.com',
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
