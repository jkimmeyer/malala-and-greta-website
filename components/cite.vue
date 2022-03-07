<template>
  <div class="cite" :style="positionStyles">
    <div class="cite--content">
      <span v-for="word in contentWords" :ref="setItemRef" :key="word.index" class="cite--word">{{ word.content }}</span>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import citeContents from '~/assets/contents/cites-start.json'
import { getAudioOn } from '@/composables/audioMute'

export default {
  setup () {
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
      contentWords.value = splitAndIndexText(activeContent.value.text)
      itemRefs = []
      await nextTick()
      // animate words in
      contentWords.value.forEach((_, index) => {
        gsap.fromTo(itemRefs[index], { opacity: 0, y: 10 }, { duration: 1.0, opacity: 1, y: 0, delay: index * 0.1 })
      })
      if (getAudioOn.value) {
        const audio = new Audio(activeContent.value.audio)
        audio.play()
      }
      // animate words out
      setTimeout(() => {
        contentWords.value.forEach((_, index) => {
          gsap.to(itemRefs[index], { duration: 1.0, opacity: 0, delay: index * 0.1 })
        })
      }, 6400)
    }

    onMounted(() => {
      loopCites()
      indervalId = setInterval(loopCites, 9000)
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
  font-family: var(--serif-font);
  font-size: var(--font-32);
  position: absolute;
}
.cite--content {
  color: var(--color-text-neutral-light);
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
