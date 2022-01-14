<template>
  <div class="cite" :style="positionStyles">
    <div class="cite--content">
      <span v-for="word in contentWords" :ref="setItemRef" :key="word.index" class="cite--word">{{ word.content }}</span>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'

import audioGretaHouseOnFire from '~/assets/audio/cites/greta/house-on-fire.mp3'
import audioGretaALotForTeenager from '~/assets/audio/cites/greta/a-lot-for-teenager.mp3'
import audioGretaHumanityCrossroad from '~/assets/audio/cites/greta/humanity-crossroads.mp3'
import audioMalalaHalfHeldBack from '~/assets/audio/cites/malala/half-held-back.mp3'
import audioMalalaForgetAboutPain from '~/assets/audio/cites/malala/forget-about-pain.mp3'
import audioMalalaBulletSilence from '~/assets/audio/cites/malala/bullet-silence.mp3'

const citeContents = [
  {
    top: '25%',
    left: '25%',
    audio: audioMalalaBulletSilence,
    text: 'They thought that the bullet would silence us, but they failed'
  },
  {
    top: '20%',
    left: '65%',
    audio: audioGretaHouseOnFire,
    text: 'I am here to say, our house is on fire'
  },
  {
    top: '72%',
    left: '20%',
    audio: audioMalalaHalfHeldBack,
    text: 'We cannot all succeed, when half of us are held back'
  },
  {
    top: '65%',
    left: '70%',
    audio: audioGretaHumanityCrossroad,
    text: 'Humanity is no standing at a crossroads, we must now decide which path we want to take'
  },
  {
    top: '12%',
    left: '10%',
    audio: audioMalalaForgetAboutPain,
    text: 'But there is so much love out there, that is helping me to forget about all the pain that I am going through'
  },
  {
    top: '40%',
    left: '78%',
    audio: audioGretaALotForTeenager,
    text: 'Yes, it is a lot. It is a lot for a teenager'
  }
]

export default {
  props: {
    audioOn: {
      type: Boolean,
      default: false
    }
  },
  setup (props) {
    let itemRefs = []
    let indervalId = null

    const index = ref(0)
    const citeVisible = ref(false)
    const contentWords = ref([])

    const activeContent = computed(() => citeContents[index.value])
    const positionStyles = computed(() => {
      return {
        top: activeContent.value.top,
        left: activeContent.value.left
      }
    })

    const setItemRef = (el) => {
      if (el) {
        itemRefs.push(el)
      }
    }

    const splitAndIndexText = (text) => {
      const splittedText = text.split(' ')
      const splittedIndexedContent = []
      splittedText.forEach((value, index) => {
        let word = value + ' '
        if (index === 0) {
          word = '"' + value + ' '
        } else if (index === splittedText.length - 1) {
          word = value + '"'
        }
        splittedIndexedContent.push({ index, content: word })
      })
      return splittedIndexedContent
    }

    const loopCites = async () => {
      index.value = (index.value + 1) % citeContents.length
      const splittedIndexedContent = splitAndIndexText(activeContent.value.text)
      contentWords.value = splittedIndexedContent
      itemRefs = []
      await nextTick()
      // animate words in
      splittedIndexedContent.forEach((_, index) => {
        gsap.fromTo(itemRefs[index], { opacity: 0, y: 10 }, { duration: 1.0, opacity: 1, y: 0, delay: index * 0.1 })
      })
      if (props.audioOn) {
        const audio = new Audio(activeContent.value.audio)
        audio.play()
      }

      // animate words out
      setTimeout(() => {
        splittedIndexedContent.forEach((_, index) => {
          gsap.to(itemRefs[index], { duration: 1.0, opacity: 0, delay: index * 0.1 })
        })
      }, 6500)
    }

    onMounted(() => {
      loopCites()
      indervalId = setInterval(loopCites, 9300)
    })

    onUnmounted(() => {
      if (indervalId) { clearInterval(indervalId) }
    })

    return {
      index,
      citeVisible,
      activeContent,
      contentWords,
      positionStyles,
      setItemRef,
      loopCites
    }
  }
}
</script>

<style scoped lang="scss">
.cite {
  position: absolute;
}
.cite--content {
  color: var(--color-text-neutral);
  max-width: 250px;
  text-align: center;
  will-change: transform
}
.cite--word {
  display: inline-block;
  opacity: 0;
  white-space: pre;
  transform: translateY(15px);
  will-change: transform
}
</style>
