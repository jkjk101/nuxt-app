// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  app: {
    baseURL: 'https://jkjk101.github.io/nuxt-app'
  },
  runtimeConfig: {
    public: {
      siteUrl: 'https://jkjk101.github.io/nuxt-app'
    }
  }
})