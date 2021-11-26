import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: [
    '@/assets/stylesheets/globals/colors.css',
    '@/assets/stylesheets/globals/font-sizes.css',
    '@/assets/stylesheets/globals/reset.css',
    '@/assets/stylesheets/globals/spacing.css'
  ]
})
