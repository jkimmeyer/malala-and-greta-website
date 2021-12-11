<template>
  <div class="cite" :style="position" @click="loop">
    {{ citeText }}
  </div>
</template>

<script>
import content from '~/assets/cites.json'
import gretaAudio from '~/assets/audio/cites/greta/greta-house-on-fire.mp3'
export default {
  data () {
    return {
      citeText: 'Das ist ein cite',
      position: {
        top: '10px',
        left: '50px'
      },
      author: '',
      index: 0
    }
  },
  mounted () {
    console.log('cite mounted')
    // this.loop()
  },
  methods: {
    loop () {
      console.log('run loop')
      this.index = (this.index + 1) % content.length
      const nextItem = content[this.index]
      this.citeText = nextItem.text
      this.position.top = nextItem.top
      this.position.left = nextItem.left
      this.author = nextItem.author
      const audio = new Audio(gretaAudio)
      audio.play()
      setTimeout(() => {
        this.loop()
      }, 5000)
    }
  }
}
</script>

<style scoped lang="scss">
.cite {
  position: absolute;
  top: 50px;
  left: 70px;
}
</style>
