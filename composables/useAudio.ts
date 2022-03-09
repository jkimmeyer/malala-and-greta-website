import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'
import { playSound, updateSoundSource } from '@/composables/audioSound'
import { updateNarratorSource, playNarrator } from '@/composables/audioNarrator'
import { Themes } from '@/enums/Themes'
import { getCurrentTheme } from '@/composables/theme'

gsap.registerPlugin(ScrollTrigger)

export const useAudio = () => {
  const registerNarratorTrigger = (triggerElementStart: HTMLElement | string, audioFilePath: string, theme: Themes) => {
    ScrollTrigger.create({
      trigger: triggerElementStart,
      start: 'top center',
      onEnter: () => {
        // Always update the sound source for both seems, to have the correct sound for the current position when the user switches themes
        updateNarratorSource(audioFilePath, theme)
        // Only trigger a play when the trigger was fired by the active/visible page
        // e.g. when user currently sees Malala, only call play for malala triggers
        if (theme === getCurrentTheme.value) {
          playNarrator()
        }
      }
    })
  }

  const registerSoundTrigger = (triggerElementStart: HTMLElement | string, audioFilePath: string, theme: Themes) => {
    ScrollTrigger.create({
      trigger: triggerElementStart,
      start: 'top center',
      markers: true,
      onEnter: () => {
        // Always update the sound source for both seems, to have the correct sound for the current position when the user switches themes
        updateSoundSource(audioFilePath, theme)
        // Only trigger a play when the trigger was fired by the active/visible page
        // e.g. when user currently sees Malala, only call play for malala triggers
        if (theme === getCurrentTheme.value) {
          playSound()
        }
      }
    })
  }

  // Usage scheme:
  // data-narrator-greta="a-lot-for-teenager"
  // data-narrator-malala="a-lot-for-teenager"
  // data-sound-greta="waves"
  // data-sound-malala="noise"
  const registerAllAudioAutoplayTriggers = () => {
    // narrator voice
    gsap.utils.toArray('[data-narrator-greta]').forEach((element: HTMLElement) => {
      const audioFilePath = `/cites/greta/${element.dataset.narratorGreta}.mp3`
      registerNarratorTrigger(element, audioFilePath, Themes.Greta)
    })
    gsap.utils.toArray('[data-narrator-malala]').forEach((element: HTMLElement) => {
      const audioFilePath = `/cites/malala/${element.dataset.narratorMalala}.mp3`
      registerNarratorTrigger(element, audioFilePath, Themes.Malala)
    })

    // background sounds
    gsap.utils.toArray('[data-sound-greta]').forEach((element: HTMLElement) => {
      const audioFilePath = `/cites/greta/${element.dataset.soundGreta}.mp3`
      registerSoundTrigger(element, audioFilePath, Themes.Greta)
    })
    gsap.utils.toArray('[data-sound-malala]').forEach((element: HTMLElement) => {
      const audioFilePath = `/cites/malala/${element.dataset.soundMalala}.mp3`
      registerSoundTrigger(element, audioFilePath, Themes.Malala)
    })
  }

  return {
    registerAllAudioAutoplayTriggers
  }
}
