export default {
  head() {
    const title = 'nuxt'
    return {
      titleTemplate: title,
      meta: [
        { hid: 'charset', charset: 'utf-8' },
        { hid: 'title', title },
        {
          hid: 'viewport',
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'nuxt基础模版'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'nuxt基础模版'
        }
      ],
      link: [
        { hid: 'icon', rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
}
