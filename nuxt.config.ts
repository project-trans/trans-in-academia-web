import yaml from '@rollup/plugin-yaml'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: { plugins: [yaml()] },
  nitro: { static: true },
  app: { head: { title: 'Trans in Academia!' } },
})