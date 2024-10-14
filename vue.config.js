const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Trans in Academia!';
      return args;
    });

    config.module
      .rule('yaml')
      .test(/\.ya?ml$/)
      .use('yaml-loader')
      .loader('yaml-loader');
  },

  // Explicitly specify Dart Sass for handling SCSS
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass')
      }
    }
  },

  // Define Vue feature flags for production builds
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false)
      })
    ]
  }
});
