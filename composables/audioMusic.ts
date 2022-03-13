import { watch } from '@nuxtjs/composition-api'
import { getAudioOn } from '@/composables/audioMute'

// current audio sources
let musicAudioSource: string = null

// html audio element
let musicAudioElement: HTMLAudioElement = null

// sound
const playMusic = () => {
  musicAudioElement?.pause()

  if (!musicAudioSource) { return }
  musicAudioElement = new Audio(musicAudioSource)
  musicAudioElement.volume = 0.1
  musicAudioElement.play()
}

const pauseMusic = () => {
  musicAudioElement?.pause()
}

const updateMusicSource = (path: string) => {
  musicAudioSource = path
}

watch(getAudioOn, (audioOn) => {
  if (!audioOn) { pauseMusic() }
})

export {
  playMusic,
  pauseMusic,
  updateMusicSource
}