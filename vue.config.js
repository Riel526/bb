const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/bb/',
  transpileDependencies: [
    'vuetify'
  ]
})
