
import { pauseSound, playSound, updateSoundSource } from '@/composables/audioSound'
import { updateNarratorSource, playNarrator } from '@/composables/audioNarrator'
import { Themes } from '@/enums/Themes'
import { getCurrentTheme } from '@/composables/theme'

export const useAudio = (gsap, ScrollTrigger) => {
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

  const registerSoundTriggerStart = (triggerElementStart: HTMLElement | string, audioFilePath: string, theme: Themes) => {
    ScrollTrigger.create({
      trigger: triggerElementStart,
      start: 'top center',
      onEnter: () => {
        updateSoundSource(audioFilePath, theme)
        if (theme === getCurrentTheme.value) {
          playSound()
        }
      },
      onLeaveBack: () => {
        if (theme === getCurrentTheme.value) {
          pauseSound()
        }
        updateSoundSource(null, theme)
      }
    })
  }

  const registerSoundTriggerEnd = (triggerElementStart: HTMLElement | string, audioFilePath: string, theme: Themes) => {
    ScrollTrigger.create({
      trigger: triggerElementStart,
      start: 'top center',
      onEnter: () => {
        if (theme === getCurrentTheme.value) {
          pauseSound()
        }
        updateSoundSource(null, theme)
      },
      onLeaveBack: () => {
        updateSoundSource(audioFilePath, theme)
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
      const audioFilePath = `/narrator/greta/${element.dataset.narratorGreta}`
      registerNarratorTrigger(element, audioFilePath, Themes.Greta)
    })
    gsap.utils.toArray('[data-narrator-malala]').forEach((element: HTMLElement) => {
      const audioFilePath = `/narrator/malala/${element.dataset.narratorMalala}`
      registerNarratorTrigger(element, audioFilePath, Themes.Malala)
    })

    // background sounds
    gsap.utils.toArray('[data-sound-greta-start]').forEach((element: HTMLElement) => {
      const audioFilePath = `/sound/${element.dataset.soundGretaStart}`
      registerSoundTriggerStart(element, audioFilePath, Themes.Greta)
    })
    gsap.utils.toArray('[data-sound-greta-end]').forEach((element: HTMLElement) => {
      const audioFilePath = `/sound/${element.dataset.soundGretaEnd}`
      registerSoundTriggerEnd(element, audioFilePath, Themes.Greta)
    })
    gsap.utils.toArray('[data-sound-malala-start]').forEach((element: HTMLElement) => {
      const audioFilePath = `/sound/${element.dataset.soundMalalaStart}`
      registerSoundTriggerStart(element, audioFilePath, Themes.Malala)
    })
    gsap.utils.toArray('[data-sound-malala-end]').forEach((element: HTMLElement) => {
      const audioFilePath = `/sound/${element.dataset.soundMalalaEnd}`
      registerSoundTriggerEnd(element, audioFilePath, Themes.Malala)
    })
  }

  return {
    registerAllAudioAutoplayTriggers
  }
}
