const config = {
  head: {
    title: 'nuxt_auth0',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet',
        href: '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
      { rel: 'stylesheet',
        href: '//cdnjs.cloudflare.com/ajax/libs/bulma/0.6.1/css/bulma.min.css'}
    ]
  },
  loading: { color: '#3B8070' },
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  mode: 'spa',
  plugins: [
    '~/plugins/auth0.js',
    '~/plugins/axios.js'
  ],
  env: {
    auth0ClientID: process.env.auth0ClientID,
    auth0Domain:process.env.auth0Domain
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/toast'
  ],
  toast: {
    position: 'top-center',
    duration: 2000
  }
}

module.exports = config

if (process.env.NODE_ENV === 'development') {
  config.proxy = {
    '/api': 'http://localhost:28080'
  }

}
