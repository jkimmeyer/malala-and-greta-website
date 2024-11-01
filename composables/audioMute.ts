import { computed, ref } from '@nuxtjs/composition-api'

const audioOn = ref(false)

const setAudioOn = (userAudioOn: boolean) => {
  if (process.client) {
    audioOn.value = userAudioOn
    window.localStorage.setItem('AUDIOON', String(audioOn.value))
  }
}

const getAudioOn = computed(() => audioOn.value)

const toggleAudio = () => {
  if (process.client) {
    audioOn.value = !audioOn.value
    window.localStorage.setItem('AUDIOON', String(audioOn.value))
  }
}

export {
  setAudioOn,
  getAudioOn,
  toggleAudio
}
