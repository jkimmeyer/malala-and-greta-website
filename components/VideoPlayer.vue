<template>
  <div class="videoplayer">
    <button class="videoplayer--placeholder" :style="styleObject" @click="onPopoverOpened()">
      <SvgsPlay />
    </button>
    <div v-if="popoverIsVisible" class="videoplayer--popover" :class="themeClass">
      <h3>{{ title }}</h3>
      <button class="videoplayer--popover--button" :class="themeClass" @click="onPopoverClosed()">
        <SvgsClose />
      </button>
      <iframe
        class="videoplayer--popover-frame"
        :src="url"
        title=""
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  </div>
</template>
<script>
import { pauseNarrator } from '@/composables/audioNarrator'
export default {
  props: {
    previewImagePath: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      required: true
    },
    theme: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      popoverIsVisible: false,
      styleObject: {
        background: 'url(' + this.previewImagePath + ')',
        'background-size': 'cover'
      }
    }
  },
  computed: {
    themeClass () {
      if (this.theme !== 'malala' && this.theme !== 'greta' && this.theme !== 'default') {
        // eslint-disable-next-line no-console
        console.log('Error using Image.vue: theme prop not valid')
        return
      }
      return this.theme
    }
  },
  methods: {
    onPopoverOpened () {
      pauseNarrator()
      this.popoverIsVisible = true
    },
    onPopoverClosed () {
      this.popoverIsVisible = false
    }
  }
}
</script>
<style scoped>
.videoplayer {
  position: relative;
}

.videoplayer--placeholder {
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: var(--black);
  background-repeat: no-repeat;
  background-size: cover;
}

.videoplayer--popover {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: var(--z-index-1);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 800px;
  height: 600px;
  margin: 0 auto;
  padding: 16px 56px 56px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.25);
}

.videoplayer--popover.malala {
  background-color: var(--color-background-malala-highlight);
}

.videoplayer--popover.greta {
  background-color: var(--color-background-greta-highlight);
}

.videoplayer--popover--button {
  position: absolute;
  top: var(--space-16);
  right: var(--space-16);
}

.videoplayer--popover--button.malala {
  fill: var(--color-background-malala-dark);
}

.videoplayer--popover--button.greta {
  fill: var(--color-background-greta-dark);
}

.videoplayer--popover--button.malala:hover {
  fill: var(--bronze);
}

.videoplayer--popover--button.greta:hover {
  fill: var(--glaucous);
}

.videoplayer--popover h3 {
  margin-bottom: var(--space-8);
  font-family: var(--serif-font);
  font-size: var(--font-32);
}

.videoplayer--popover-frame {
  width: 100%;
  height: 100%;
}
</style>
