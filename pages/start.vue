<template>
  <div class="page" @wheel="onPageScroll($event)">
    <div class="page--teaser">
      <div
        class="page--teaser-images"
        :style="'filter: blur(' + blurAmount + 'px)'"
      >
        <img
          class="page--teaser-image left"
          src="~/assets/images/Malala.png"
          alt="Malala"
          width="35%"
        >

        <img
          class="page--teaser-image right"
          src="~/assets/images/Greta.png"
          alt="Greta"
          width="35%"
        >
      </div>
      <h1 class="page--title" :class="titleVisible ? 'visible' : null">
        Erlebe unsere Geschichten.
        <Icon icon="fluent" />
      </h1>
      <!-- TODO: replace with button component when we have defined buttons -->
      <button v-if="citeVisible" type="button" class="page--button-audio" :class="titleVisible ? 'visible' : null" @click="onStartClicked">
        Mit Audio erleben
      </button>
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
.page {
  display: block;
  background-color: var(--color-background-neutral);
}

.page--teaser {
  position: relative;
  width: 100vw;
  height: 100vh;
}

.page--teaser-images {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 100%;
}

.page--teaser-image {
  transition: transform ease-in-out 0.5s, filter ease-in-out 0.5s;
}

.page--teaser-image.left {
  transform-origin: bottom left;
}

.page--teaser-image.left:hover {
  filter: drop-shadow(0 0 8px var(--color-shadow-malala));
}

.page--teaser-image.right {
  transform-origin: bottom right;
}

.page--teaser-image.right:hover {
  filter: drop-shadow(0 0 8px var(--color-shadow-greta));
}

.page--teaser-image:hover {
  transform: scale(1.05);
}

.page--title {
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: var(--font-64);
  line-height: var(--line-1-5);
  color: var(--color-text-neutral);

  &.visible {
    opacity: 100%;
    transition: opacity ease-in-out 5s;
  }
}
.page--button-audio {
  opacity: 0;
  position: absolute;
  top: 65%;
  left: 50%;
  padding: 4px 8px;
  color: var(--color-text-neutral);
  transform: translateX(-50%);
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
