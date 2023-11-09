const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    chainWebpack: config => {
        config.module
            .rule('yaml')
            .test(/\.ya?ml$/)
            .use('yaml-loader')
            .loader('yaml-loader')
    }
})
