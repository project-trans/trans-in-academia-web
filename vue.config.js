const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    chainWebpack: config => {
        config.plugin('html').tap(args => {args[0].title = "Trans in Academia!"; return args; })
        config.module
            .rule('yaml')
            .test(/\.ya?ml$/)
            .use('yaml-loader')
            .loader('yaml-loader')
    }
})
