// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  app: {
    //baseURL: '/nuxt-app/', // Set your GitHub Pages path here
    baseURL: '/'
  },
  runtimeConfig: {
    site: {
      url: 'http://localhost:3000'
    }
  }
})