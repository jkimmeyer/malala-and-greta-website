<template>
  <div class="page" @wheel="updateBlur($event)">
    <div class="page--teaser">
      <div class="page--teaser-images">
        <img
          class="page--teaser-image left"
          src="~/assets/images/Malala.png"
          alt="Malala"
          width="35%"
          :style="teaserImageClasses('malala')"
          @mouseenter="malalaGlows = true"
          @mouseleave="malalaGlows = false"
        >

        <img
          class="page--teaser-image right"
          src="~/assets/images/Greta.png"
          alt="Greta"
          width="35%"
          :style="teaserImageClasses('greta')"
          @mouseenter="gretaGlows = true"
          @mouseleave="gretaGlows = false"
        >
      </div>
      <h1 class="page--title" :class="titleVisible ? 'visible' : null">
        Erlebe unsere Geschichten.
      </h1>
    </div>
    <Cite />
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
    teaserImageClasses (person) {
      let filterStyles = 'filter: blur(' + this.blurAmount + 'px)'

      if (person === 'greta' && this.gretaGlows) {
        filterStyles += 'drop-shadow(0px 0px 8px rgba(0, 231, 255, 0.8));'
      } else if (person === 'malala' && this.malalaGlows) {
        filterStyles += 'drop-shadow(0px 0px 8px rgba(0, 231, 255, 0.8));'
      }
      return filterStyles
    },
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

<style scoped>
.page {
  display: block;
  background-color: var(--color-background-primary);
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

.page--teaser-image.right {
  transform-origin: bottom right;
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
  color: var(--color-secondary);
}

.page--title.visible {
  opacity: 100%;
  transition: opacity ease-in-out 5s;
}
</style>
