<template>
  <div class="page" :class="[themeClasses, controlClasses]">
    <div id="viewport">
      <div id="content">
        <Nuxt />
      </div>
    </div>
    <Navigation />
  </div>
</template>

<script>
import { Themes } from '@/enums/Themes'
import { getCurrentTheme } from '@/composables/theme'
import { getCurrentControlTheme } from '@/composables/controlTheme'
import { ControlThemes } from '~/enums/ControlThemes'

export default {
  setup () {
    return { getCurrentTheme, getCurrentControlTheme }
  },
  computed: {
    themeClasses () {
      if (this.getCurrentTheme === Themes.Greta) { return 'has-greta-style' }
      if (this.getCurrentTheme === Themes.Malala) { return 'has-malala-style' }
      return null
    },
    controlClasses () {
      if (this.getCurrentControlTheme === ControlThemes.Dark) { return 'has-dark-controls' }
      if (this.getCurrentControlTheme === ControlThemes.Light) { return 'has-light-controls' }
      if (this.getCurrentControlTheme === ControlThemes.End) { return 'has-end-controls' }
      return null
    }
  }
}
</script>

<style scoped>
.page {
  overflow: hidden;
  width: 100vw;
  min-height: 100vh;
  font-family: var(--sans-serif-font);
  background-color: var(--color-background);
}

.page.has-greta-style {
  --color-background: var(--color-background-greta);
  --color-background-dark: var(--color-background-greta-dark);
  --color-text: var(--color-text-greta);
  --color-text-dark: var(--color-text-greta-dark);
  --color-text-highlight: var(--color-text-greta-highlight);
  --color-control-light: var(--color-text-greta);
  --color-control-light-focus: var(--glaucous);
  --color-control-light-hover: var(--glaucous);
  --color-control-light-active: var(--color-text-greta);
  --color-control-dark: var(--deepblue);
  --color-control-dark-focus: var(--glaucous);
  --color-control-dark-hover: var(--glaucous);
  --color-control-dark-active: var(--color-text-greta-dark);
}

.page.has-malala-style {
  --color-background: var(--color-background-malala);
  --color-background-dark: var(--color-background-malala-dark);
  --color-text: var(--color-text-malala);
  --color-text-dark: var(--color-text-malala-dark);
  --color-text-highlight: var(--color-text-malala-highlight);
  --color-control-light: var(--color-text-malala);
  --color-control-light-focus: var(--bronze);
  --color-control-light-hover: var(--bronze);
  --color-control-light-active: var(--color-text-malala);
  --color-control-dark: var(--mud);
  --color-control-dark-focus: var(--bronze);
  --color-control-dark-hover: var(--bronze);
  --color-control-dark-active: var(--color-text-malala-dark);
}

.page.has-end-controls {
  --color-control: var(--deeptaupe);
  --color-control-focus: var(--white);
  --color-control-hover: var(--white);
  --color-control-active: var(--white);
}

.page.has-light-controls {
  --color-control: var(--color-control-light);
  --color-control-focus: var(--color-control-light-focus);
  --color-control-hover: var(--color-control-light-hover);
  --color-control-active: var(--color-control-light-active);
}

.page.has-dark-controls {
  --color-control: var(--color-control-dark);
  --color-control-focus: var(--color-control-dark-focus);
  --color-control-hover: var(--color-control-dark-hover);
  --color-control-active: var(--color-control-dark-active);
}
</style>
