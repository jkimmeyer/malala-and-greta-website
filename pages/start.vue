<template>
  <div class="start-page" @wheel="updateBlur($event)">
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
      <h1 class="start-page--title" :class="titleVisible ? 'visible' : null">
        Erlebe unsere Geschichten.
        <Icon icon="fluent" />
      </h1>
    </div>
    <!-- <Cite /> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      blurAmount: 100,
      titleVisible: false,
      gretaGlows: false,
      malalaGlows: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.titleVisible = true
    }, 100)
  },
  methods: {
    updateBlur (event) {
      if (event.deltaY > 0 && this.blurAmount > 0) {
        this.blurAmount = this.blurAmount - 0.5
      } else if (event.deltaY < 0 && this.blurAmount < 100) {
        this.blurAmount = this.blurAmount + 0.5
      }
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

.start-page--title {
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
</style>
