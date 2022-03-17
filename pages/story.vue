<template>
  <div class="chapters">
    <div class="overlay flex items-center justify-center" :class="nuxtLoading ? null : 'visually-hidden'">
      <div class="spinner">
        <div class="spinner-item" />
        <div class="spinner-item" />
        <div class="spinner-item" />
        <div class="spinner-text-wrapper">
          <span v-for="[char,index] in loadingText" :key="index" class="loading-text" :class="char === ' ' ? 'w-2 inline-block' : null">
            {{ char }}
          </span>
        </div>
      </div>
    </div>
    <ChapterOne />
    <ChapterTwo />
    <ChapterThree />
    <ChapterFour />
    <ChapterFive />
    <ChapterSix />
    <End data-narrator-malala="Both-End.mp3" data-narrator-greta="Both-End.mp3" />
    <MobileOverlay />
  </div>
</template>
<script>
import { onMounted, useContext, nextTick, ref, onUnmounted } from '@nuxtjs/composition-api'
import { useAnimation } from '@/composables/useAnimation'
import { useAudio } from '@/composables/useAudio.ts'
import { ControlThemes } from '~/enums/ControlThemes'
import { setCurrentTheme } from '~/composables/theme'
import { Themes } from '~/enums/Themes'
import { setAudioOn } from '@/composables/audioMute'
import { playMusic, updateMusicSource } from '~/composables/audioMusic'

export default {
  layout: 'chapter',
  setup () {
    const { $gsap, $ScrollTrigger } = useContext()
    const nuxtLoading = ref(true)
    const animation = useAnimation($gsap, $ScrollTrigger)
    const loadingText = 'Inhalte werden geladen ...'

    const resetAudio = () => {
      // remove audio when page reloaded
      // because after reload the browser needs a click interaction on the page to play any sound
      if (process.client) {
        window.localStorage.setItem('AUDIOON', 'false')
      }
    }

    onUnmounted(() => {
      if (process.client) {
        window.removeEventListener('unload', resetAudio)
      }
    })

    onMounted(() => {
      if (process.client) {
        const savedTheme = window.localStorage.getItem('THEME')
        const savedAudioOn = window.localStorage.getItem('AUDIOON')

        if (savedTheme) {
          setCurrentTheme(Themes[savedTheme])
        }
        if (savedAudioOn) {
          setAudioOn(savedAudioOn === 'true')
        }
      }

      nextTick(() => {
        if (process.browser) {
          window.addEventListener('unload', resetAudio)

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

            animation.registerChapterChange(0, 1, '[data-chapters-0-1]')
            animation.registerChapterChange(1, 2, '[data-chapters-1-2]')
            animation.registerChapterChange(2, 3, '[data-chapters-2-3]')
            animation.registerChapterChange(3, 4, '[data-chapters-3-4]')
            animation.registerChapterChange(4, 5, '[data-chapters-4-5]')
            animation.registerChapterChange(5, 6, '[data-chapters-5-6]')

            // setup audio for narrator and sound
            const audio = useAudio($gsap, $ScrollTrigger)
            audio.registerAllAudioAutoplayTriggers()
            audio.registerMusicChange('/sound/background-music.mp3', '/sound/Drama.mp3', '[data-audio-change-end]')

            nuxtLoading.value = false
            updateMusicSource('/sound/background-music.mp3')
            playMusic()
          })
        }
      })
    })
    return { nuxtLoading, resetAudio, loadingText }
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
  --color3: var(--color-control-dark);

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

  .spinner-text-wrapper{
    inset-block-start: 110%;
    position: absolute;
    width: 100%;
    white-space: nowrap;
    transform: translateX(-100%);

    > span {
      font-size: var(--font-16);
      font-weight: 300;
      font-family: Lato, sans-serif;
    }

    span {
      @for $i from 0 through 26 {
        &:nth-child(#{$i + 1}) {
          filter: blur(0px);
          animation: blur-text 1.5s calc($i / 25)+s infinite linear alternate;
        }
      }
    }
  }
}

@keyframes blur-text {
  0% {filter: blur(0px);}
  100% {filter: blur(2px);}
}
</style>
