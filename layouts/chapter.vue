<template>
  <div class="page" :class="themeClasses">
    <div id="viewport">
      <div id="content">
        <slot />
      </div>
    </div>
    <Navigation />
  </div>
</template>

<script>
import { Themes } from '@/enums/Themes'
import { useAnimation } from '@/composables/useAnimation'
import { useAudioAutoplay } from '@/composables/useAudioAutoplay.ts'
export default {
  setup () {
    onMounted(() => {
      setTimeout(() => {
        // setup animations
        // Order is here important: applySmoothScrollToPage needs to be first
        const animation = useAnimation()
        const style = getComputedStyle(document.querySelector('.page'))
        const colorBackgroundMalala = style.getPropertyValue('--color-background-malala')
        const colorBackgroundMalalaDark = style.getPropertyValue('--color-background-malala-dark')
        const colorBackgroundGreta = style.getPropertyValue('--color-background-greta')
        const colorBackgroundGretaDark = style.getPropertyValue('--color-background-greta-dark')

        animation.applySmoothScrollToPage(window, '#content', '.page')

        animation.registerAllBackgroundFadeTriggers(colorBackgroundMalala, colorBackgroundMalalaDark, colorBackgroundGreta, colorBackgroundGretaDark)
        animation.registerAllAnimationTriggers()

        // setup audio for narrator and sound
        const audioAutoplay = useAudioAutoplay()
        audioAutoplay.registerAllAudioAutoplayTriggers()
      }, 50)
    })
    return { getCurrentTheme, setCurrentTheme }
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
  --color-text-highlight: var(--color-text-greta-highlight);
  --color-active: var(--glaucous);
}

.page.has-malala-style {
  --color-background: var(--color-background-malala);
  --color-background-dark: var(--color-background-malala-dark);
  --color-text-dark: var(--color-text-malala-dark);
  --color-text-highlight: var(--color-text-malala-highlight);
  --color-active: var(--bronze);
}
</style>
