<template>
  <div class="chapters">
    <div class="overlay flex items-center justify-center" :class="nuxtLoading ? null : 'visually-hidden'">
      <div class="spinner">
        <div class="spinner-item" />
        <div class="spinner-item" />
        <div class="spinner-item" />
      </div>
    </div>
    <ChapterOne />
    <ChapterTwo />
    <ChapterThree />
    <ChapterFour />
    <ChapterFive />
    <ChapterSix />
    <End data-narrator-malala="Both-End.mp3" data-narrator-greta="Both-End.mp3" />
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
    const animation = useAnimation($gsap, $ScrollTrigger)

    onMounted(() => {
      nextTick(() => {
        if (process.browser) {
          window.addEventListener(('load'), function () {
            // setup animations
            const style = getComputedStyle(document.querySelector('.page'))
            const colorBackgroundMalala = style.getPropertyValue('--color-background-malala')
            const colorBackgroundMalalaDark = style.getPropertyValue('--color-background-malala-dark')
            const colorBackgroundGreta = style.getPropertyValue('--color-background-greta')
            const colorBackgroundGretaDark = style.getPropertyValue('--color-background-greta-dark')

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

<style scoped lang="scss">
.overlay {
  position: fixed;
  z-index: 10000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--color-background);
}

.spinner {
  --size: 75px;
  --color1: var(--color-text-dark);
  --color2: var(--color-text-highlight);
  --color3: var(--color-text-neutral-blue);

  --animation-duration: 650ms;
  position: relative;
  width: var(--size);
  height: var(--size);

  .spinner-item {
    position: absolute;
    top: calc(50% - var(--item-size) / 2);
    left: calc(50% - var(--item-size) / 2);
    width: var(--item-size);
    height: var(--item-size);
    border: 4px solid transparent;
    border-right: 4px solid var(--color-spinner);
    border-left: 4px solid var(--color-spinner);
    border-radius: 50%;
    animation: spinner2 var(--animation-duration) linear infinite;

    @keyframes spinner2 {
      to {
        transform: rotate(360deg);
      }
    }
  }
  .spinner-item:nth-of-type(1) {
    --item-size: var(--size);
    --color-spinner: var(--color1);
    border-top: 4px solid var(--color1);
  }

  .spinner-item:nth-of-type(2) {
    --item-size: calc(var(--size) - 15px);
    --color-spinner: var(--color2);
    border-bottom: 4px solid var(--color2);
  }

  .spinner-item:nth-of-type(3) {
    --item-size: calc(var(--size) - 30px);
    --color-spinner: var(--color3);
    border-top: 4px solid var(--color3);
  }
}
</style>
