export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: [
    'nuxt-icon',
  ],

  css: [
    '@/assets/styles/main.scss',
  ],

  app: {
    head: {
      title: 'Saude Mental Chan',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      ]
    }
  }
});