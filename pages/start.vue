<template>
  <div class="start-page" @wheel="onPageScroll($event)">
    <div class="start-page--teaser">
      <div
        class="start-page--teaser-images"
        :style="'filter: blur(' + blurAmount + 'px)'"
      >
        <img
          class="start-page--teaser-image left"
          src="~/assets/images/Malala.png"
          alt="Malala"
          width="35vw"
        >

        <img
          class="start-page--teaser-image right"
          src="~/assets/images/Greta.png"
          alt="Greta"
          width="35vw"
        >
      </div>
      <div class="page--teaser-contents">
        <h1 class="page--title" :class="titleVisible ? 'visible' : null">
          Erlebe unsere Geschichten.
          <Icon icon="fluent" />
        </h1>
        <div class="center">
          <!-- TODO: replace with button component when we have defined buttons -->
          <button v-if="citeVisible" type="button" class="page--button-audio" :class="titleVisible ? 'visible' : null" @click="onStartClicked">
            Mit Audio erleben
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
export default {
  data () {
    return {
      blurAmount: 100,
      titleVisible: false,
      citeVisible: false,
      gretaGlows: false,
      malalaGlows: false,
      scrollIndicatorVisible: true,
      audioOn: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.titleVisible = true
    }, 100)
    setTimeout(() => {
      this.citeVisible = true
    }, 4000)
  },
  methods: {
    onPageScroll (event) {
      this.updateBlur(event)
      this.updateScrollIndicator(event)
    },
    onStartClicked () {
      this.audioOn = true
    },
    updateBlur (event) {
      if (event.deltaY > 0 && this.blurAmount > 0) {
        this.blurAmount = this.blurAmount - 0.5
      } else if (event.deltaY < 0 && this.blurAmount < 100) {
        this.blurAmount = this.blurAmount + 0.5
      }
    },
    updateScrollIndicator (event) {
      // TODO: combine with parallax framework or window scroll
      this.scrollIndicatorVisible = event.deltaY <= 0
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
  transition: transform ease-in-out 0.5s, filter ease-in-out 0.5s;
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
  opacity: 0;
  font-size: var(--font-64);
  line-height: var(--line-1-5);
  color: var(--color-text-default);

  &.visible {
    opacity: 100%;
    transition: opacity ease-in-out 5s;
  }
}
.center{
  display: flex;
  justify-content: center;
}
.page--button-audio {
  opacity: 0;
  padding: var(--space-8) var(--space-8);
  color: var(--color-text-neutral);
  margin: var(--space-16) auto 0px auto;
  &.visible {
    opacity: 100%;
    transition: opacity ease-in-out 5s;
  }
}

.page--scroll-indicator {
  position: absolute;
  bottom: 0;
  left: 50%;
}

</style>
