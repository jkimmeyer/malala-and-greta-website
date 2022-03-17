import { setCurrentControlTheme, setControlHintsEnabled } from '~/composables/controlTheme'
import { setCurrentChapter } from '~/composables/navigation'
import { ControlThemeOptions } from '~/interfaces/ControlThemeOptions'
export const useAnimation = (gsap, ScrollTrigger) => {
  const showMarkers = false

  const pin = (element: HTMLElement | string, elementEnd: HTMLElement | string) => {
    return gsap.to(element, {
      scrollTrigger: {
        start: 'top 0%',
        trigger: element,
        endTrigger: elementEnd,
        pin: true,
        pinSpacing: false,
        pinType: 'transform',
        pinReparent: false
      }
    })
  }

  const parallax = (element: HTMLElement | string, yPercent: any) => {
    return gsap.to(element, {
      y: yPercent,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        scrub: true
      }
    })
  }

  const timelineAnimation = (trigger: HTMLElement | string, element: HTMLElement | string) => {
    return gsap.timeline({
      defaults: { duration: 5 },
      scrollTrigger: {
        trigger,
        scrub: true,
        start: 'top center',
        end: 'bottom+=400 center'
      }
    }).from(element, {
      drawSVG: 0,
      ease: 'Power1.easeInOut'
    }, 0)
  }

  const revealHorizontal = (element: HTMLElement | string, x: number) => {
    return gsap.fromTo(element, {
      x,
      y: 0,
      autoAlpha: 0
    }, {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: 'expo',
      overwrite: 'auto',
      scrollTrigger: {
        start: 'top 99%',
        trigger: element,
        toggleActions: 'restart none none reset',
        markers: showMarkers
      }
    })
  }

  const revealVertical = (element: HTMLElement | string, y: number) => {
    return gsap.fromTo(element, {
      x: 0,
      y,
      autoAlpha: 0
    }, {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: 'expo',
      overwrite: 'auto',
      scrollTrigger: {
        start: 'top 100%',
        trigger: element,
        toggleActions: 'restart none none reset',
        markers: showMarkers
      }
    })
  }

  const hide = (element: HTMLElement | string) => {
    gsap.set(element, { autoAlpha: 0 })
  }

  const fadeBackground = (triggerElement: HTMLElement | string, changeElement: HTMLElement | string, fromColor: any, toColor: any) => {
    return gsap.fromTo(changeElement,
      { backgroundColor: fromColor },
      {
        backgroundColor: toColor,
        scrollTrigger: {
          trigger: triggerElement,
          start: 'top center',
          scrub: true
        }
      }
    )
  }

  const registerClassAdd = (elementQuery: string, className: string, triggerElement: HTMLElement | string) => {
    ScrollTrigger.create({
      trigger: triggerElement,
      start: 'top center',
      onEnter: () => {
        document.querySelector(elementQuery).classList.add(className)
      },
      onLeaveBack: () => {
        document.querySelector(elementQuery).classList.remove(className)
      }
    })
  }

  const registerClassRemove = (elementQuery: string, className: string, triggerElement: HTMLElement | string) => {
    ScrollTrigger.create({
      trigger: triggerElement,
      start: 'top center',
      onEnter: () => {
        document.querySelector(elementQuery).classList.remove(className)
      },
      onLeaveBack: () => {
        document.querySelector(elementQuery).classList.add(className)
      }
    })
  }

  const registerClassSwitch = (elementQuery: string, classNameFrom: string, classNameTo: string, triggerElement: HTMLElement | string) => {
    ScrollTrigger.create({
      trigger: triggerElement,
      start: 'top center',
      onEnter: () => {
        document.querySelector(elementQuery).classList.add(classNameTo)
        document.querySelector(elementQuery).classList.remove(classNameFrom)
      },
      onLeaveBack: () => {
        document.querySelector(elementQuery).classList.add(classNameFrom)
        document.querySelector(elementQuery).classList.remove(classNameTo)
      }
    })
  }

  const registerControlThemeChange = (from: ControlThemeOptions, to: ControlThemeOptions, triggerElement: HTMLElement | string) => {
    ScrollTrigger.create({
      trigger: triggerElement,
      start: 'top center',
      onEnter: () => {
        setCurrentControlTheme(to)
      },
      onLeaveBack: () => {
        setCurrentControlTheme(from)
      }
    })
  }

  const registerChapterChange = (from: number, to: number, triggerElement: HTMLElement | string) => {
    ScrollTrigger.create({
      trigger: triggerElement,
      start: 'top center',
      onEnter: () => {
        setCurrentChapter(to)
      },
      onLeaveBack: () => {
        setCurrentChapter(from)
      }
    })
  }

  const registerDisableControlHints = (triggerElement: HTMLElement | string) => {
    ScrollTrigger.create({
      trigger: triggerElement,
      start: 'top center',
      onEnter: () => {
        setControlHintsEnabled(false)
      }
    })
  }

  // attributes that trigger animations on the element itself:
  // data-animate-reveal-right
  // data-animate-reveal-left
  // data-animate-parallax="100"
  // data-animate-pin
  const registerAllAnimationTriggers = () => {
    gsap.utils.toArray('[data-animate-reveal-left]').forEach((element: HTMLElement) => {
      hide(element)
      revealHorizontal(element, -100)
    })
    gsap.utils.toArray('[data-animate-reveal-right]').forEach((element: HTMLElement) => {
      hide(element)
      revealHorizontal(element, 100)
    })
    gsap.utils.toArray('[data-animate-reveal-bottom]').forEach((element: HTMLElement) => {
      hide(element)
      revealVertical(element, 100)
    })
    gsap.utils.toArray('[data-animate-parallax]').forEach((element: HTMLElement) => {
      const value = element.dataset.animateParallax
      parallax(element, value)
    })
    gsap.utils.toArray('[data-animate-pin]').forEach((element: HTMLElement) => {
      pin(element, '[data-animate-pin-end]')
    })

    gsap.utils.toArray('[data-animate-timeline]').forEach((trigger: HTMLElement) => {
      const element = trigger.dataset.animateTimeline
      timelineAnimation(trigger, element)
    })
  }

  // attributes that trigger background fades:
  // data-animate-fade-to-dark-malala
  // data-animate-fade-to-light-malala
  // data-animate-fade-to-dark-greta
  // data-animate-fade-to-light-greta
  //
  // changed elements:
  // data-background-malala
  // data-background-greta
  const registerAllBackgroundFadeTriggers = (colorBackgroundMalala, colorBackgroundMalalaDark, colorBackgroundGreta, colorBackgroundGretaDark) => {
    gsap.utils.toArray('[data-animate-fade-to-dark-malala]').forEach((triggerElement: HTMLElement) => {
      fadeBackground(triggerElement, '[data-background-malala]', colorBackgroundMalala, colorBackgroundMalalaDark)
    })
    gsap.utils.toArray('[data-animate-fade-to-light-malala]').forEach((triggerElement: HTMLElement) => {
      fadeBackground(triggerElement, '[data-background-malala]', colorBackgroundMalalaDark, colorBackgroundMalala)
    })
    gsap.utils.toArray('[data-animate-fade-to-dark-greta]').forEach((triggerElement: HTMLElement) => {
      fadeBackground(triggerElement, '[data-background-greta]', colorBackgroundGreta, colorBackgroundGretaDark)
    })
    gsap.utils.toArray('[data-animate-fade-to-light-greta]').forEach((triggerElement: HTMLElement) => {
      fadeBackground(triggerElement, '[data-background-greta]', colorBackgroundGretaDark, colorBackgroundGreta)
    })
  }

  return {
    registerClassAdd,
    registerClassRemove,
    registerClassSwitch,
    registerControlThemeChange,
    registerDisableControlHints,
    registerAllAnimationTriggers,
    registerAllBackgroundFadeTriggers,
    registerChapterChange
  }
}
