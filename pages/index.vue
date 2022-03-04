<template>
  <div class="start-page" @wheel="onPageScroll($event)">
    <div class="start-page--teaser">
      <div
        class="start-page--teaser-images"
        data-scroll-blur
      >
        <button
          class="image-button"
          @click="navigateToStory('malala')"
        >
          <img
            class="start-page--teaser-image left"
            src="/images/Malala.png"
            alt="Malala"
          >
        </button>
        <button
          class="image-button"
          @click="navigateToStory('greta')"
        >
          <img
            class="start-page--teaser-image right"
            src="/images/Greta.png"
            alt="Greta"
          >
        </button>
      </div>
      <div class="page--teaser-contents">
        <h1 class="page--title" data-animate-reveal-right>
          Erlebe unsere Geschichten.
        </h1>
        <span class="page--subtitle" data-animate-reveal-left>Malala Yousafzai & Greta Thunberg</span>
        <div class="center">
          <!-- TODO: replace with button component when we have defined buttons -->
          <button v-if="citeVisible" type="button" class="page--button-audio" :class="buttonVisible ? 'visible' : null" @click="onStartClicked">
            <Icon icon="fluent:speaker-2-24-regular" />
            <span class="page--button-text">Mit Audio erleben</span>
          </button>
        </div>
      </div>
    </div>
    <div class="page--scroll-indicator">
      <ScrollIndicator :is-hidden="!scrollIndicatorVisible" />
    </div>
    <Cite v-if="citeVisible" :audio-on="audioOn" />
  </div>
</template>

<script>
import { Themes } from '@/enums/Themes'
import { useAnimation } from '@/composables/useAnimation'

export default {

  setup () {
    onMounted(() => {
      setTimeout(() => {
        const animation = useAnimation()

        animation.registerAllAnimationTriggers()
      }, 50)
    })

    return {
      setCurrentTheme
    }
  },
  data () {
    return {
      blurAmount: 100,
      buttonVisible: false,
      citeVisible: false,
      gretaGlows: false,
      malalaGlows: false,
      scrollIndicatorVisible: true,
      audioOn: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.buttonVisible = true
    }, 100)
    setTimeout(() => {
      this.citeVisible = true
    }, 2000)
  },
  methods: {
    onPageScroll (event) {
      this.updateScrollIndicator(event)
    },
    onStartClicked () {
      this.buttonVisible = false
      this.audioOn = true
      const soundAudioElement = new Audio('/audio/Drama.mp3')
      soundAudioElement.volume = 0.1
      soundAudioElement.play()
    },
    updateScrollIndicator (event) {
      // TODO: combine with parallax framework or window scroll
      this.scrollIndicatorVisible = event.deltaY <= 0
    },
    navigateToStory (story) {
      if (story === 'greta') {
        setCurrentTheme(Themes.Greta)
      } else if (story === 'malala') {
        setCurrentTheme(Themes.Malala)
      }
      this.$router.push({ path: '/story', hash: '#' })
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

.center{
  display: flex;
  justify-content: center;
}

.page--button-audio {
  display: none;
  appearance: none;
  background-color: var(--color-background-greta);
  opacity: 0;
  padding: var(--space-8) var(--space-8);
  color: var(--color-text-neutral);
  margin: var(--space-16) auto 0px auto;
  border: none;
  border-radius: var(--space-8);
  transition: transform ease-in-out 1.5s, filter ease-in-out 1.5s;
  cursor: pointer;
  font-size: var(--font-16);

  &.visible {
    display: flex;
    align-items: center;
    opacity: 100%;
    transition: opacity ease-in 2s;
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
}

</style>
