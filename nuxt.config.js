const fs = require('fs')
const path = require('path')
const files = fs.readdirSync('./content/blog/')
console.log(files)

export default {
  env: {},
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  buildModules: ['@nuxt/typescript-build'],
  build: {
    extend (config, { isDev, isClient, loaders: { vue } }) {
      // add frontmatter-markdown-loader
      config.module.rules.push(
        {
          test: /\.md$/,
          loader: 'frontmatter-markdown-loader'
          // options: { vue: true }
        }
      )
      // if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src']
        vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      // }
      }
  },
  modules: [
    '@nuxtjs/axios',
    '@bazzite/nuxt-optimized-images',
    '~/plugins/vue-lazysizes.client.js'
  ],

  optimizedImages: {
    inlineImageLimit: -1,
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: true,
    optimizeImagesInDev: false,
    defaultImageLoader: 'img-loader',
    mozjpeg: {
      quality: 85
    },
    optipng: false,
    pngquant: {
      speed: 7,
      quality: [0.65, 0.8]
    },
    webp: {
      quality: 85
    }
  },

  typescript: {
    typeCheck: {
      // eslint: true
    }
  },
  generate: {
    routes: [...files.map(blog => `/blog/${path.parse(blog).name}`)]
  }
}
