<template>
  <div class="chapters">
    <div class="overlay" :class="nuxtLoading ? null : 'hidden'" />
    <ChapterOne />
    <ChapterTwo />
    <ChapterThree />
    <ChapterFour />
    <ChapterFive />
    <ChapterSix />
    <End />
  </div>
</template>
<script>
import { onMounted, useContext, nextTick, ref } from '@nuxtjs/composition-api'
import { useAnimation } from '@/composables/useAnimation'
import { useAudio } from '@/composables/useAudio.ts'
import { ControlThemes } from '~/enums/ControlThemes'

export default {
  layout: 'chapter',
  setup () {
    const { $gsap, $ScrollTrigger } = useContext()
    const nuxtLoading = ref(true)

    onMounted(() => {
      nextTick(() => {
        if (process.browser) {
          window.addEventListener(('load'), function () {
            // setup animations
            // Order is here important: applySmoothScrollToPage needs to be first
            const animation = useAnimation($gsap, $ScrollTrigger)
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
            nuxtLoading.value = false
          })
        }
      })
    })
    return { nuxtLoading }
  }
}
</script>

<style>
.overlay {
  position: fixed;
  z-index: 10000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--color-background);
}

.overlay.hidden {
  display: none;
}
</style>
