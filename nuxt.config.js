const ISPROD = process.env.BASE_API === 'prod'

module.exports = {
  mode: 'universal',
  loading: { color: '#963fb1' },
  css: [
    {
      src: '~assets/scss/common.scss',
      lang: 'scss'
    }
  ],
  plugins: [
    { src: '@/plugins/axios', ssr: false },
    { src: '@/plugins/persistedstate', ssr: false },
    { src: '@/plugins/element-ui', ssr: true }
  ],
  env: {
    baseUrl: ISPROD ? 'https://www.release.com/' : 'https://www.test.com/',
    env: ISPROD
  },
  modules: ['@nuxtjs/style-resources', '@nuxtjs/axios'],
  styleResources: {
    sass: ['./assets/scss/variable.scss', './assets/scss/mixins.scss']
  },
  axios: {
    baseURL:
      (ISPROD ? 'https://api.release.com' : 'https://api.test.com') + '/api'
  },
  router: {
    scrollBehavior: function(to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  build: {
    extractCSS: true,
    babel: {
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk'
          }
        ]
      ],
      comments: true
    }
  }
}
