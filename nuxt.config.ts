import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: [
    '@/assets/stylesheets/globals/colors.css',
    '@/assets/stylesheets/globals/font-sizes.css',
    '@/assets/stylesheets/globals/reset.css',
    '@/assets/stylesheets/globals/spacing.css',
    '@/assets/stylesheets/globals/fonts.css',
    '@/assets/stylesheets/globals/typography.css',
    '@/assets/stylesheets/globals/_breakpoints.scss',
    '@/assets/stylesheets/globals/typography-styles.scss',
    '@/assets/stylesheets/globals/customgrid.scss',
    '@/assets/stylesheets/globals/zindex.css',
    '@/assets/stylesheets/utilities/visually-hidden.css'
  ]
})
