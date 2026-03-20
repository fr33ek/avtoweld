// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
import { siteMetaDescription } from './data/seo'

export default defineNuxtConfig({
  compatibilityDate: '2025-03-17',

  runtimeConfig: {
    public: {
      yandexMapsApiKey: process.env.NUXT_PUBLIC_YANDEX_MAPS_API_KEY || '',
    },
  },

  app: {
    // GitHub Pages: NUXT_APP_BASE_URL=/avtoweld/ ; свой домен или FTP в корне: /
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      title: 'АвтоWeld — шиномонтаж в Санкт-Петербурге',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: siteMetaDescription() },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  nitro: {
    preset: process.env.NITRO_PRESET || 'node-server',
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  routeRules: {
    '/': { prerender: true },
  },

  devtools: { enabled: true },
  modules: ['@nuxt/icon'],
  icon: {
    collections: ['lucide', 'solar', 'mynaui'],
  },
})