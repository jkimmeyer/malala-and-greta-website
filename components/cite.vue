<template>
  <div class="cite" :style="positionStyles">
    <div class="cite--content">
      <span v-for="word in contentWords" ref="items" :key="word.index" class="cite--word">{{ word.content }}</span>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, computed, onUnmounted, useContext, nextTick, onBeforeUnmount } from '@nuxtjs/composition-api'
import citeContents from '~/assets/contents/cites-start.json'
import { getAudioOn } from '@/composables/audioMute'

export default {
  setup () {
    const { $gsap } = useContext()
    const items = ref([])

    let intervalId = null

    const index = ref(0)
    const citeVisible = ref(false)
    const contentWords = ref([])
    const audio = ref(null)

    const activeContent = computed(() => citeContents[index.value])
    const positionStyles = computed(() => {
      return {
        top: activeContent.value.top,
        left: activeContent.value.left
      }
    })

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

      await nextTick()
      if (items.value.length === 0) { return }
      // animate words in
      contentWords.value.forEach((_, index) => {
        $gsap.fromTo(items.value[index], { opacity: 0, y: 10 }, { duration: 1.0, opacity: 1, y: 0, delay: index * 0.1 })
      })

      if (getAudioOn.value) {
        audio.value = new Audio(activeContent.value.audio)
        audio.value.play()
      }
      // animate words out
      setTimeout(() => {
        contentWords.value.forEach((_, index) => {
          $gsap.to(items.value[index], { duration: 1.0, opacity: 0, delay: index * 0.1 })
        })
      }, 6400)
    }

    onMounted(() => {
      loopCites()
      intervalId = setInterval(loopCites, 9000)
    })

    onUnmounted(() => {
      if (intervalId) { clearInterval(intervalId) }
    })

    onBeforeUnmount(() => {
      if (audio.value) { audio.value.pause(); audio.value.currentTime = 0 }
    })

    return {
      items,
      index,
      citeVisible,
      activeContent,
      contentWords,
      positionStyles,
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
