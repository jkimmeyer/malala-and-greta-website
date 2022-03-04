<template>
  <div class="page" :class="themeClasses">
    <slot />
    <Navigation />
  </div>
</template>

<script>
import { Themes } from '@/enums/Themes'
export default {
  setup () {
    return { getCurrentTheme, setCurrentTheme }
  },
  head () {
    return {
      title: 'Malala und Greta'
    }
  },
  computed: {
    themeClasses () {
      if (this.getCurrentTheme === Themes.Greta) { return 'has-greta-style' }
      if (this.getCurrentTheme === Themes.Malala) { return 'has-malala-style' }
      return null
    }
  },
  mounted () {
    this.setCurrentTheme(Themes.Malala)
  }
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  background-color: var(--color-background);
}

.page.has-greta-style {
  --color-background: var(--color-background-greta);
  --color-background-dark: var(--color-background-greta-dark);
  --color-text-dark: var(--color-text-greta-dark);
}

.page.has-malala-style {
  --color-background: var(--color-background-malala);
  --color-background-dark: var(--color-background-malala-dark);
  --color-text-dark: var(--color-text-malala-dark);
}
</style>
