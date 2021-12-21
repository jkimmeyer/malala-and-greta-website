<template>
  <div class="cite">
    <transition name="fade" appear>
      <div v-if="citeVisible" class="cite--content" :style="position">
        "{{ contentText }}"
      </div>
    </transition>
  </div>
</template>

<script>
import audioGretaHouseOnFire from '~/assets/audio/cites/greta/house-on-fire.mp3'
import audioGretaALotForTeenager from '~/assets/audio/cites/greta/a-lot-for-teenager.mp3'
import audioGretaHumanityCrossroad from '~/assets/audio/cites/greta/humanity-crossroad.mp3'
import audioMalalaHalfHeldBack from '~/assets/audio/cites/malala/half-held-back.mp3'
import audioMalalaForgetAboutPain from '~/assets/audio/cites/malala/forget-about-pain.mp3'
import audioMalalaBulletSilence from '~/assets/audio/cites/malala/bullet-silence.mp3'

const citeContents = [
  {
    top: '20%',
    left: '20%',
    audio: audioMalalaBulletSilence,
    text: 'They thought that the bullet would silence us, but they failed',
    author: 'malala'
  },
  {
    top: '10%',
    left: '70%',
    audio: audioGretaHouseOnFire,
    text: 'I am here to say, our house is on fire',
    author: 'greta'
  },
  {
    top: '20%',
    left: '35%',
    audio: audioMalalaHalfHeldBack,
    text: 'We cannot all succeed, when half of us are held back',
    author: 'malala'
  },
  {
    top: '15%',
    left: '60%',
    audio: audioGretaHumanityCrossroad,
    text: 'Humanity stands at a crossroad, we must now decide which side we want to take',
    author: 'greta'
  },
  {
    top: '10%',
    left: '10%',
    audio: audioMalalaForgetAboutPain,
    text: 'But there is so much love out there, that is helping me to forget about all the pain that I am going through',
    author: 'malala'
  },
  {
    top: '40%',
    left: '80%',
    audio: audioGretaALotForTeenager,
    text: "It's a lot. It's a lot for a teenager",
    author: 'greta'
  }
]

export default {
  props: {
    audioOn: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      contentText: '',
      position: {
        top: '0px',
        left: '0px'
      },
      index: 0,
      citeVisible: false
    }
  },
  mounted () {
    this.loop()
  },
  methods: {
    loop () {
      console.log('run loop')
      this.citeVisible = true
      this.index = (this.index + 1) % citeContents.length
      const activeContent = citeContents[this.index]
      this.contentText = activeContent.text
      this.position.top = activeContent.top
      this.position.left = activeContent.left

      if (this.audioOn) {
        const audio = new Audio(activeContent.audio)
        audio.play()
      }

      setTimeout(() => {
        this.citeVisible = false
        setTimeout(() => {
          this.loop()
        }, 4000)
      }, 8000)
    }
  }
}
</script>

<style scoped lang="scss">
.cite--content {
  color: var(--color-text-neutral);
  position: absolute;
  max-width: 250px;
  text-align: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
