module.exports = {
  head: {
    title: 'Photo Live',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no' },
      { hid: 'Photo Live', name: 'Photo Live', content: 'Photo Live' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.2/css/swiper.min.css' }
    ],
    script: [
      { src: 'http://os32fgzvj.bkt.clouddn.com/flexible.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.2/js/swiper.min.js' },
      { src: 'https://res.wx.qq.com/open/js/jweixin-1.3.2.js' }
    ]
  },
  css: ['~assets/css/main.css', '~assets/css/reset.css'],
  loading: { color: '#3B8070', height: '5px' },
  build: {
    ssr: true,
    extractCSS: true,
    cssSourceMap: false,
    publicPath: '',
    vendor: ['axios', 'vue2-toast'],
    postcss: {
      plugins: {
        'autoprefixer': { browsers: 'last 5 version' },
        'postcss-px2rem': { remUnit: 72 }
      }
    },
    extend(config, ctx) {
      if (process.env.NODE_ENV === 'production') {
        config.output.publicPath = '/wx/static/'
      } else {
        config.output.publicPath = '/'
      }
      if (ctx.isClient) {
        config.resolve.alias['vue'] = 'vue/dist/vue.js'
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    cache: {
      max: 1000,
      maxAge: 900000
    }
  },
  dev: !(process.env.NODE_ENV !== 'production'),
  env: {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV)
  }
}
