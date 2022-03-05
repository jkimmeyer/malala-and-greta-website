import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'

gsap.registerPlugin(ScrollTrigger)

export const useIntroAnimation = () => {
  const scrollEffect = (element: HTMLElement) => {
    let buttonDisabled = true
    let requestVisible = false

    return gsap.fromTo(element,
      { filter: 'blur(100px)' },
      {
        filter: 'blur(0px)',
        ease: 'none',
        scrollTrigger: {
          trigger: '.page',
          scrub: 2,
          pin: true,
          start: '0',
          end: '+=150%',
          onUpdate: (self) => {
            if (self.progress > 0.90 && buttonDisabled) {
              element.querySelectorAll('button').forEach((button) => {
                button.disabled = false
                buttonDisabled = false
              })
              return
            }

            if (self.progress < 0.90 && !buttonDisabled) {
              element.querySelectorAll('button').forEach((button) => {
                button.disabled = true
                buttonDisabled = true
              })
            }
          },
          onScrubComplete: (self) => {
            if (self.progress > 0.80 && !requestVisible) {
              document.querySelector('[data-page-request]').classList.toggle('visible')
              requestVisible = true
              return
            }

            if (self.progress < 0.80 && requestVisible) {
              document.querySelector('[data-page-request]').classList.toggle('visible')
              requestVisible = false
            }
          }
        }
      })
  }

  const hide = (element: HTMLElement | string) => {
    gsap.set(element, { autoAlpha: 0 })
  }

  const revealIntro = (element: HTMLElement | string, x: number) => {
    return gsap.fromTo(element, {
      x,
      y: 0,
      autoAlpha: 0
    }, {
      duration: 6,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: 'expo',
      overwrite: 'auto',
      scrollTrigger: {
        start: 'top 75%',
        trigger: element,
        toggleActions: 'restart none none reset'
      }
    })
  }

  const registerAllAnimationTriggers = () => {
    gsap.utils.toArray('[data-scroll-blur]').forEach((element: HTMLElement) => {
      scrollEffect(element)
    })

    gsap.utils.toArray('[data-animate-reveal-intro]').forEach((element: HTMLElement) => {
      const direction = element.dataset.animateRevealIntro === 'left' ? -100 : 100
      hide(element)
      revealIntro(element, direction)
    })
  }

  return {
    registerAllAnimationTriggers
  }
}
