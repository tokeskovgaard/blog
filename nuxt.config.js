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
    extend(config) {
      // add frontmatter-markdown-loader
      config.module.rules.push(
        {
          test: /\.md$/,
          loader: 'frontmatter-markdown-loader'
          // options: { vue: true }
        }
      )
    }
  },
  modules: [
    '@nuxtjs/axios',
    '@bazzite/nuxt-optimized-images'
  ],

  // @bazzite/nuxt-optimized-images
  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true
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
