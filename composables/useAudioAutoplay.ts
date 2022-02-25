import { gsap } from 'gsap/dist/gsap.js'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
import { updateNarratorGretaAudioSource, updateNarratorMalalaAudioSource, playNarrator } from '@/composables/audio'
import { Themes } from '@/enums/Themes'

export const useAudioAutoplay = () => {
  gsap.registerPlugin(ScrollTrigger)

  const registerNarratorTrigger = (triggerElementStart, triggerElementEnd, audioFilePath: string, theme: Themes) => {
    ScrollTrigger.create({
      trigger: triggerElementStart,
      start: 'top center',
      markers: true,
      // endTrigger: triggerElementEnd,
      // end: 'bottom 50%+=100px',
      // onToggle: self => console.log('toggled, isActive:', self.isActive),
      // onUpdate: (self) => {console.log('progress:', self.progress.toFixed(3), 'direction:', self.direction, 'velocity', self.getVelocity())},
      onEnter: ({ progress, direction, isActive }) => {
        console.log('onEnter' + theme)
        // Always update the sound source for both seems, to have the correct sound for the current position when the user switches themes
        if (theme === Themes.Greta) {
          updateNarratorGretaAudioSource(audioFilePath)
        } else {
          updateNarratorMalalaAudioSource(audioFilePath)
        }
        // Only trigger a play when the trigger was fired by the active/visible page
        // e.g. when user currently sees Malala, only call play for malala triggers
        if (theme === getCurrentTheme.value) {
          playNarrator()
        }
      }

      // onEnterBack: ({ progress, direction, isActive }) => console.log(progress, direction, isActive),
      // onLeave: ({ progress, direction, isActive }) => console.log(progress, direction, isActive),
      // onLeaveBack: ({ progress, direction, isActive }) => console.log(progress, direction, isActive)
    })
  }

  const registerSoundTrigger = (triggerElementStart, triggerElementEnd, audioFilePath: string, theme: Themes) => {
    ScrollTrigger.create({
      trigger: triggerElementStart,
      start: 'top center',
      markers: true,
      onEnter: ({ progress, direction, isActive }) => {
        // TODO
        playNarrator()
      }
    })
  }

  // Usage scheme:
  // data-narrator-greta="a-lot-for-teenager"
  // data-narrator-malala="a-lot-for-teenager"
  // data-sound-greta="waves"
  // data-sound-malala="noise"
  const setupAudoplay = () => {
    // narrator
    gsap.utils.toArray('[data-narrator-greta]').forEach((element) => {
      const audioFilePath = `/cites/greta/${element.dataset.narratorGreta}.mp3`
      registerNarratorTrigger(element, element, audioFilePath, Themes.Greta)
    })
    gsap.utils.toArray('[data-narrator-malala]').forEach((element) => {
      const audioFilePath = `/cites/malala/${element.dataset.narratorMalala}.mp3`
      registerNarratorTrigger(element, element, audioFilePath, Themes.Malala)
    })

    // background sounds
    gsap.utils.toArray('[data-sound-greta]').forEach((element) => {
      const audioFilePath = `/cites/greta/${element.dataset.soundGreta}.mp3`
      registerSoundTrigger(element, element, audioFilePath, Themes.Greta)
    })
    gsap.utils.toArray('[data-sound-malala]').forEach((element) => {
      const audioFilePath = `/cites/malala/${element.dataset.soundMalala}.mp3`
      registerSoundTrigger(element, element, audioFilePath, Themes.Malala)
    })
  }

  return {
    setupAudoplay
  }
}
