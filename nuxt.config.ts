// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  app: {
    baseURL: '/'
  },
  runtimeConfig: {
    site: {
      url: 'https://jkjk101.github.io/nuxt-app'
    }
  }
})