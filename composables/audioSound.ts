import { watch } from '@nuxtjs/composition-api'
import { getCurrentTheme } from '@/composables/theme'
import { Themes } from '@/enums/Themes'
import { getAudioOn } from '@/composables/audioMute'

// current audio sources
let soundAudioSourceMalala: string = null
let soundAudioSourceGreta: string = null

const getSoundAudioSource = () => {
  return getCurrentTheme.value === Themes.Malala ? soundAudioSourceMalala : soundAudioSourceGreta
}

// html audio element
let soundAudioElement: HTMLAudioElement = null

// sound
const playSound = () => {
  if (!getAudioOn.value) { return }
  soundAudioElement?.pause()

  const source = getSoundAudioSource()

  if (!source) { return }
  soundAudioElement = new Audio(source)
  soundAudioElement.play()
}

const pauseSound = () => {
  soundAudioElement?.pause()
}

const updateSoundSource = (path: string, theme: Themes) => {
  if (theme === Themes.Malala) {
    soundAudioSourceMalala = path
  }

  if (theme === Themes.Greta) {
    soundAudioSourceGreta = path
  }
}

watch(getAudioOn, (audioOn) => {
  if (!audioOn) { pauseSound() }
})

export {
  playSound,
  pauseSound,
  updateSoundSource
}
