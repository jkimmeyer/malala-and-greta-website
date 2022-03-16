import { ref, watch } from '@nuxtjs/composition-api'
import { getCurrentTheme } from '@/composables/theme'
import { Themes } from '@/enums/Themes'
import { getAudioOn, setAudioOn } from '@/composables/audioMute'

// current audio sources
let narratorAudioSourceMalala: string = null
let narratorAudioSourceGreta: string = null

const getNarratorAudioSource = () => {
  return getCurrentTheme.value === Themes.Malala ? narratorAudioSourceMalala : narratorAudioSourceGreta
}

const getNarratorVolume = () => {
  return getCurrentTheme.value === Themes.Malala ? 0.7 : 1
}

// html audio element
let narratorAudioElement: HTMLAudioElement = null

// audio state
const audioNarratorIsPlaying = ref(false)
const audioNarratorProgress = ref(0)
const audioNarratorDuration = ref(0)

// narrator
const playNarrator = () => {
  if (!getAudioOn.value) { return }
  narratorAudioElement?.pause()

  const source = getNarratorAudioSource()
  if (!source) { return }
  narratorAudioElement = new Audio(source)

  narratorAudioElement.addEventListener('timeupdate', () => {
    if (narratorAudioElement) {
      audioNarratorProgress.value = Math.trunc(narratorAudioElement.currentTime / audioNarratorDuration.value * 100)
    }
  })
  narratorAudioElement.addEventListener('durationchange', () => {
    audioNarratorDuration.value = narratorAudioElement.duration
  })
  narratorAudioElement.addEventListener('play', () => { audioNarratorIsPlaying.value = true })
  narratorAudioElement.addEventListener('pause', () => { audioNarratorIsPlaying.value = false })
  narratorAudioElement.volume = getNarratorVolume()
  narratorAudioElement.play()
}

const pauseNarrator = () => {
  narratorAudioElement?.pause()
}

const resumeNarrator = () => {
  setAudioOn(true) // resume button enables audio
  narratorAudioElement ? narratorAudioElement.play() : playNarrator()
}

const updateNarratorSource = (path: string, theme: Themes) => {
  if (theme === Themes.Malala) {
    narratorAudioSourceMalala = path
  }
  if (theme === Themes.Greta) {
    narratorAudioSourceGreta = path
  }
}

watch(getAudioOn, (audioOn) => {
  if (!audioOn) { pauseNarrator() }
})

export {
  audioNarratorIsPlaying,
  audioNarratorProgress,
  playNarrator,
  pauseNarrator,
  resumeNarrator,
  updateNarratorSource
}
