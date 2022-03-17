<template>
  <div class="start-page">
    <div class="start-page--teaser">
      <div
        class="start-page--teaser-images"
        data-scroll-blur
      >
        <button
          class="image-button"
          disabled
          @click="navigateToStory('malala')"
        >
          <img
            class="start-page--teaser-image left"
            src="~/assets/images/Malala.png"
            alt="Malala"
          >
        </button>
        <button
          class="image-button"
          disabled
          @click="navigateToStory('greta')"
        >
          <img
            class="start-page--teaser-image right"
            src="~/assets/images/Greta.png"
            alt="Greta"
          >
        </button>
      </div>
      <div class="page--request" data-page-request>
        <span class="page--request-arrow left">
          <SvgsArrowLeft />
        </span>
        Wähle eine Story!
        <span class="page--request-arrow right">
          <SvgsArrowRight />
        </span>
      </div>
      <div class="page--teaser-contents">
        <h1 class="page--title" data-animate-reveal-intro="right">
          Erlebe unsere Geschichten.
        </h1>
        <span class="page--subtitle" data-animate-reveal-intro="left">Malala Yousafzai &amp; Greta Thunberg</span>

        <div class="center">
          <button v-if="citeVisible" type="button" class="page--button-audio" :class="buttonVisible ? 'visible' : null" @click="onStartClicked">
            <Icon icon="fluent:speaker-2-24-regular" />
            <span class="page--button-text">Mit Audio erleben</span>
          </button>
        </div>
      </div>
    </div>
    <div class="page--scroll-indicator">
      <ScrollIndicator />
    </div>
    <Cite v-if="citeVisible" />
    <MobileOverlay />
  </div>
</template>

<script>
import { onMounted, onUnmounted, useContext } from '@nuxtjs/composition-api'
import { Themes } from '@/enums/Themes'
import { useIntroAnimation } from '@/composables/useIntroAnimation'
import { setAudioOn } from '@/composables/audioMute'
import { setCurrentTheme } from '@/composables/theme'
import { playMusic, updateMusicSource, pauseMusic } from '@/composables/audioMusic'

export default {
  setup () {
    const { $gsap, $ScrollTrigger } = useContext()
    const { registerAllAnimationTriggers, destroyAllTriggers } = useIntroAnimation($gsap, $ScrollTrigger)

    onMounted(() => {
      setTimeout(() => {
        registerAllAnimationTriggers()
      }, 50)
    })

    onUnmounted(() => {
      destroyAllTriggers()
      // pauseMusic()
    })

    return {
      setCurrentTheme,
      setAudioOn,
      updateMusicSource,
      playMusic,
      pauseMusic
    }
  },
  data () {
    return {
      blurAmount: 100,
      buttonVisible: false,
      citeVisible: false,
      gretaGlows: false,
      malalaGlows: false,
      soundAudioElement: ''
    }
  },
  mounted () {
    this.buttonVisible = true

    setTimeout(() => {
      this.citeVisible = true
    }, 2000)
  },
  methods: {
    onStartClicked () {
      this.buttonVisible = false
      this.setAudioOn(true)
      this.updateMusicSource('/sound/Drama.mp3')
      this.playMusic()
    },
    navigateToStory (story) {
      if (story === 'greta') {
        setCurrentTheme(Themes.Greta)
      } else if (story === 'malala') {
        setCurrentTheme(Themes.Malala)
      }
      window.location.href = '/story'
    }
  }
}
</script>

<style scoped lang="scss">
.start-page {
  display: block;
  background-color: var(--color-background-neutral);
}

.start-page--teaser {
  position: relative;
  width: 100vw;
  height: 100vh;
}

.start-page--teaser-images {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 100%;
}

.page--request {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--serif-font);
  color: var(--color-text-neutral);
  font-size: var(--font-32);
  text-align: center;
  opacity: 0;
  display: flex;
  transition: opacity 0.5s ease-in;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &.visible {
    opacity: 1;
  }
}
.page--request-arrow svg {
  stroke: var(--color-text-neutral);
}

.page--request-arrow.left svg {
  width: 140px;
  height: 90px;
  transform: translateX(-50%) translateY(20%);
}

.page--request-arrow.right svg {
  width: 140px;
  height: 90px;
  transform: translateX(50%) translateY(-15%);
}

.start-page--teaser-image {
  transition: transform ease-in var(--theme-duration-1000), filter ease-in var(--theme-duration-1000);
}

.start-page--teaser-image.left {
  transform-origin: bottom left;
}

.start-page--teaser-image.left:hover {
  filter: drop-shadow(0 0 8px var(--color-shadow-malala));
}

.start-page--teaser-image.right {
  transform-origin: bottom right;
}

.start-page--teaser-image.right:hover {
  filter: drop-shadow(0 0 8px var(--color-shadow-greta));
}

.start-page--teaser-image:hover {
  transform: scale(1.05);
}

.page--teaser-contents {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 250px;
  transform: translateX(-50%) translateY(-50%);
}
.page--title {
  text-align: center;
  font-size: var(--font-64);
  line-height: var(--line-1-5);
  color: var(--color-text-neutral);
  font-family: var(--sans-serif-font);
}

.page--subtitle {
  display: block;
  text-align: center;
  font-size: 32px;
  font-family: var(--sans-serif-font);
  color: var(--color-text-neutral);
}

.center {
  display: flex;
  justify-content: center;
}

.page--button-audio {
  display: none;
  appearance: none;
  background-color: var(--color-background-greta);
  opacity: 0;
  padding: var(--space-8) var(--space-16);
  color: var(--color-text-neutral);
  margin: var(--space-32) auto 0px auto;
  border: none;
  border-radius: var(--space-8);
  transition: transform ease-in-out 1.5s, filter ease-in-out 1.5s;
  cursor: pointer;
  font-size: var(--font-16);

  &.visible {
    display: flex;
    align-items: center;
    opacity: 1;
    transition: opacity ease-in 2s 0.5s;
  }

  &:hover,
  &:active {
    transition: transform ease-in-out 1.5s, filter ease-in-out 1.5s;
    transform-origin: center center;
    transform: scale(1.15);
    filter: drop-shadow(0 0 8px var(--color-shadow-greta));
  }
}

.page--button-text {
  font-family: var(--sans-serif-font);
  margin-left: var(--space-8);
}

.page--scroll-indicator {
  position: absolute;
  bottom: 0;
  left: 50%;
}

.image-button {
  cursor: pointer;
  appearance: none;
  background: none;
  border: none;
  width: 35%;
  margin: 0;
  padding: 0;
  z-index: 15;

  &:disabled {
    cursor: default;
  }
}
</style>
