<template>
  <div class="cite">
    <transition name="fade" appear>
      <div class="cite--content" :style="position">
        <span v-for="word in contentWords" :ref="setItemRef" :key="word.index" class="cite--word">{{ word.content }}</span>
      </div>
    </transition>
  </div>
</template>

<script>
import { gsap } from 'gsap'

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
  setup (props) {
    const root = ref(null)

    let itemRefs = []
    const index = ref(0)
    const citeVisible = ref(false)

    const setItemRef = (el) => {
      if (el) {
        itemRefs.push(el)
      }
    }

    const activeContent = computed(() => citeContents[index.value])
    const contentWords = ref([])
    const position = computed(() => {
      return {
        top: activeContent.value.top,
        left: activeContent.value.left
      }
    })

    const citeLoop = async () => {
      console.log('run loop')

      index.value = (index.value + 1) % citeContents.length
      const splittedText = activeContent.value.text.split(' ')
      const splittedIndexedText = []
      splittedText.forEach((value, index) => {
        if (index === 0) {
          splittedIndexedText.push({ index: 0, content: '"' + value + ' ' })
        } else if (index === splittedText.length - 1) {
          splittedIndexedText.push({ index, content: value + '"' })
        } else {
          splittedIndexedText.push({ index, content: value + ' ' })
        }
      })
      itemRefs = []
      contentWords.value = splittedIndexedText
      await nextTick()
      // reset word animation
      splittedIndexedText.forEach((_, index) => {
        gsap.to(itemRefs[index], { duration: 0, opacity: 0, y: 10, delay: 0 })
      })
      // animate words in
      splittedIndexedText.forEach((_, index) => {
        gsap.to(itemRefs[index], { duration: 1.2, opacity: 1, y: 0, delay: index * 0.2 })
      })

      if (props.audioOn) {
        const audio = new Audio(activeContent.value.audio)
        audio.play()
      }

      setTimeout(() => {
        // animate words out
        splittedIndexedText.forEach((_, index) => {
          gsap.to(itemRefs[index], { duration: 1.2, opacity: 0, delay: index * 0.2 })
        })
        setTimeout(() => {
          citeLoop()
        }, 4000)
      }, 8000)
    }

    onMounted(() => {
      citeLoop()
    })

    return {
      root,
      index,
      citeVisible,
      activeContent,
      contentWords,
      position,
      setItemRef,
      citeLoop
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
.cite--word {
  display: inline-block;
  opacity: 0;
  white-space:pre;
  transform: translateY(15px);
}

</style>
