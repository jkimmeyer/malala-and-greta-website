import { computed, ref } from '@nuxtjs/composition-api'

const audioOn = ref(false)

const setAudioOn = (userAudioOn: boolean) => {
  audioOn.value = userAudioOn
}

const getAudioOn = computed(() => audioOn.value)

const toggleAudio = () => {
  audioOn.value = !audioOn.value
}

export {
  setAudioOn,
  getAudioOn,
  toggleAudio
}
