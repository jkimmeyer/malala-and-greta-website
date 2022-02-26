import { getCurrentTheme } from '@/composables/theme'
import { Themes } from '@/enums/Themes'

const audioOn = ref(false)

const setAudioOn = (userAudioOn: boolean) => {
  audioOn.value = userAudioOn
  if (!audioOn.value) {
    muteAllAudioElements()
  }
}

const getAudioOn = computed(() => audioOn.value)

const toggleAudio = () => {
  audioOn.value = !audioOn.value
  if (!audioOn.value) {
    muteAllAudioElements()
  }
}

const muteAllAudioElements = () => {
  if (narratorAudioElement) {
    narratorAudioElement.pause()
  }
  if (soundAudioElement) {
    soundAudioElement.pause()
  }
}

// current audio sources
let narratorAudioSourceMalala: string = null
let narratorAudioSourceGreta: string = null
let soundAudioSourceMalala: string = null
let soundAudioSourceGreta: string = null

const getNarratorAudioSource = () => {
  return getCurrentTheme.value === Themes.Malala ? narratorAudioSourceMalala : narratorAudioSourceGreta
}

const getSoundAudioSource = () => {
  return getCurrentTheme.value === Themes.Malala ? soundAudioSourceMalala : soundAudioSourceGreta
}

// html audio elements
let narratorAudioElement: HTMLAudioElement = null
let soundAudioElement: HTMLAudioElement = null

// audio state
const audioNarratorIsPlaying = ref(false)
const audioNarratorProgress = ref(0)
const audioNarratorDuration = ref(0)

// narrator
const playNarrator = () => {
  // only play when audio is on
  if (!audioOn.value) {
    return
  }
  if (narratorAudioElement) {
    narratorAudioElement.pause()
  }

  narratorAudioElement = new Audio(getNarratorAudioSource())
  narratorAudioElement.addEventListener('timeupdate', () => {
    if (narratorAudioElement) {
      audioNarratorProgress.value = Math.trunc(narratorAudioElement.currentTime / audioNarratorDuration.value * 100)
    }
  })
  narratorAudioElement.addEventListener('durationchange', () => {
    audioNarratorDuration.value = narratorAudioElement.duration
  })
  narratorAudioElement.addEventListener('play', () => {
    audioNarratorIsPlaying.value = true
  })
  narratorAudioElement.addEventListener('pause', () => {
    audioNarratorIsPlaying.value = false
  })
  narratorAudioElement.play()
}
const pauseNarrator = () => {
  if (narratorAudioElement) {
    narratorAudioElement.pause()
  }
}
const resumeNarrator = () => {
  if (narratorAudioElement) {
    narratorAudioElement.play()
  } else {
    playNarrator()
  }
}
const updateNarratorMalalaAudioSource = (path: string) => {
  narratorAudioSourceMalala = path
}
const updateNarratorGretaAudioSource = (path: string) => {
  narratorAudioSourceGreta = path
}

// sound
const playSound = () => {
  if (soundAudioElement) {
    soundAudioElement.pause()
  }
  soundAudioElement = new Audio(getSoundAudioSource())
  soundAudioElement.play()
}
const pauseSound = () => {
  if (soundAudioElement) {
    soundAudioElement.pause()
  }
}
const updateSoundMalalaSource = (path: string) => {
  soundAudioSourceMalala = path
}
const updateSoundGretaSource = (path: string) => {
  soundAudioSourceGreta = path
}

export {
  setAudioOn,
  getAudioOn,
  toggleAudio,
  audioNarratorIsPlaying,
  audioNarratorProgress,
  playNarrator,
  pauseNarrator,
  resumeNarrator,
  updateNarratorMalalaAudioSource,
  updateNarratorGretaAudioSource,
  playSound,
  pauseSound,
  updateSoundMalalaSource,
  updateSoundGretaSource
}
