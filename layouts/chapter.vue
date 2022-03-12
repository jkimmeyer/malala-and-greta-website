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
import { onMounted, useContext } from '@nuxtjs/composition-api'
import { Themes } from '@/enums/Themes'
import { useAnimation } from '@/composables/useAnimation'
import { getCurrentTheme } from '@/composables/theme'
import { getCurrentControlTheme } from '@/composables/controlTheme'
import { useAudio } from '@/composables/useAudio.ts'
import { ControlThemes } from '~/enums/ControlThemes'

export default {
  setup () {
    const { $gsap, $ScrollTrigger, $DrawSVGPlugin } = useContext()

    onMounted(() => {
      setTimeout(() => {
        // setup animations
        // Order is here important: applySmoothScrollToPage needs to be first
        const animation = useAnimation($gsap, $ScrollTrigger, $DrawSVGPlugin)
        const style = getComputedStyle(document.querySelector('.page'))
        const colorBackgroundMalala = style.getPropertyValue('--color-background-malala')
        const colorBackgroundMalalaDark = style.getPropertyValue('--color-background-malala-dark')
        const colorBackgroundGreta = style.getPropertyValue('--color-background-greta')
        const colorBackgroundGretaDark = style.getPropertyValue('--color-background-greta-dark')

        animation.applySmoothScrollToPage(window, '#content', '.page')

        animation.registerAllBackgroundFadeTriggers(colorBackgroundMalala, colorBackgroundMalalaDark, colorBackgroundGreta, colorBackgroundGretaDark)
        animation.registerAllAnimationTriggers()

        animation.registerControlThemeChange(ControlThemes.Dark, ControlThemes.Light, '[data-controls-dark-light]')
        animation.registerControlThemeChange(ControlThemes.Light, ControlThemes.Dark, '[data-controls-light-dark]')
        animation.registerControlThemeChange(ControlThemes.Dark, ControlThemes.End, '[data-controls-dark-end]')
        animation.registerDisableControlHints('[data-controls-disable-hints]')

        // setup audio for narrator and sound
        const audio = useAudio($gsap, $ScrollTrigger)
        audio.registerAllAudioAutoplayTriggers()
      }, 50)
    })
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
