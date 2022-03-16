import { computed, ref } from '@nuxtjs/composition-api'

const currentChapter = ref(0)

const setCurrentChapter = (newChapter: number) => {
  if (process.client) {
    currentChapter.value = newChapter
    window.localStorage.setItem('CHAPTER', String(currentChapter.value))
  }
}

const getCurrentChapter = computed(() => currentChapter.value)

export {
  setCurrentChapter,
  getCurrentChapter
}
