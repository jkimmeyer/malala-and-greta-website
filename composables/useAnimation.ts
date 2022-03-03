import { gsap } from 'gsap/dist/gsap.js'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'

export const useAnimation = () => {
  const groupPage = 'group-page'
  const groupChapter = 'group-chapter'
  const showMarkers = false

  gsap.registerPlugin(ScrollTrigger)

  // group handling
  // const getAllOfGroup = group => ScrollTrigger.getAll().filter(t => t.vars.group === group)
  // getAllOfGroup(groupName).forEach(t => t.enable())

  const pin = (element) => {
    return gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        pin: true,
        pinSpacing: false,
        group: groupChapter
      }
    })
  }

  const parallax = (element, yPercent) => {
    return gsap.to(element, {
      yPercent,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        scrub: true,
        group: groupChapter
      }
    })
  }

  const reveal = (element, x) => {
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
        start: 'top 75%',
        trigger: element,
        toggleActions: 'restart none none reset',
        markers: showMarkers,
        group: groupChapter
      }
    })
  }

  const hide = (element) => {
    gsap.set(element, { autoAlpha: 0 })
  }

  const fadeBackground = (triggerElement, changeElement, fromColor, toColor) => {
    return gsap.fromTo(changeElement,
      { backgroundColor: fromColor },
      {
        backgroundColor: toColor,
        scrollTrigger: {
          trigger: triggerElement,
          start: 'top center',
          scrub: true,
          group: groupPage
        }
      }
    )
  }

  // attributes that trigger animations on the element itself:
  // data-animate-reveal-right
  // data-animate-reveal-left
  // data-animate-parallax="100"
  // data-animate-pin
  const registerAllAnimationTriggers = () => {
    gsap.utils.toArray('[data-animate-reveal-left]').forEach((element) => {
      hide(element)
      reveal(element, -100)
    })
    gsap.utils.toArray('[data-animate-reveal-right]').forEach((element) => {
      hide(element)
      reveal(element, 100)
    })
    gsap.utils.toArray('[data-animate-parallax]').forEach((element) => {
      const value = element.dataset.animateParallax
      parallax(element, value)
    })
    gsap.utils.toArray('[data-animate-pin]').forEach((element) => {
      pin(element)
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
    gsap.utils.toArray('[data-animate-fade-to-dark-malala]').forEach((triggerElement) => {
      fadeBackground(triggerElement, '[data-background-malala]', colorBackgroundMalala, colorBackgroundMalalaDark)
    })
    gsap.utils.toArray('[data-animate-fade-to-light-malala]').forEach((triggerElement) => {
      fadeBackground(triggerElement, '[data-background-malala]', colorBackgroundMalalaDark, colorBackgroundMalala)
    })
    gsap.utils.toArray('[data-animate-fade-to-dark-greta]').forEach((triggerElement) => {
      fadeBackground(triggerElement, '[data-background-greta]', colorBackgroundGreta, colorBackgroundGretaDark)
    })
    gsap.utils.toArray('[data-animate-fade-to-light-greta]').forEach((triggerElement) => {
      fadeBackground(triggerElement, '[data-background-greta]', colorBackgroundGretaDark, colorBackgroundGreta)
    })
  }

  // inspired by:
  // https://codepen.io/GreenSock/pen/gOgWELo
  // https://greensock.com/docs/v3/Plugins/ScrollTrigger/static.scrollerProxy()
  const applySmoothScrollToPage = (window, content, viewport) => {
    const smoothness = 0.8
    content = gsap.utils.toArray(content)[0]
    viewport = gsap.utils.toArray(viewport)[0]
    gsap.set(viewport, { overflow: 'hidden', position: 'fixed', height: '100%', width: '100%', top: 0, left: 0, right: 0, bottom: 0 })
    gsap.set(content, { overflow: 'visible', width: '100%' })

    const getProp = gsap.getProperty(content)
    const setProp = gsap.quickSetter(content, 'y', 'px')
    const setScroll = ScrollTrigger.getScrollFunc(window)
    const removeScroll = () => {
      content.style.overflow = 'visible'
    }
    const killScrub = (trigger) => {
      const scrub = trigger.getTween ? trigger.getTween() : gsap.getTweensOf(trigger.animation)[0]
      scrub && scrub.kill()
      trigger.animation.progress(trigger.progress)
    }
    let height; let isProxyScrolling

    function refreshHeight () {
      height = content.clientHeight
      content.style.overflow = 'visible'
      document.body.style.height = height + 'px'
      return height - document.documentElement.clientHeight
    }

    ScrollTrigger.addEventListener('refresh', () => {
      removeScroll()
      requestAnimationFrame(removeScroll)
    })
    ScrollTrigger.defaults({ scroller: content })

    ScrollTrigger.scrollerProxy(content, {
      scrollTop (value) {
        if (arguments.length) {
          isProxyScrolling = true // otherwise, if snapping was applied (or anything that attempted to SET the scroll proxy's scroll position), we'd set the scroll here which would then (on the next tick) update the content tween/ScrollTrigger which would try to smoothly animate to that new value, thus the scrub tween would impede the progress. So we use this flag to respond accordingly in the ScrollTrigger's onUpdate and effectively force the scrub to its end immediately.
          setProp(-value)
          setScroll(value)
          return
        }
        return -getProp('y')
      },
      scrollHeight: () => document.body.scrollHeight,
      getBoundingClientRect () {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
      }
    })

    return ScrollTrigger.create({
      animation: gsap.fromTo(content, { y: 0 }, {
        y: () => document.documentElement.clientHeight - height,
        ease: 'none',
        onUpdate: ScrollTrigger.update
      }),
      scroller: window,
      invalidateOnRefresh: true,
      start: 0,
      end: refreshHeight,
      refreshPriority: -999,
      scrub: smoothness,
      onUpdate: (self) => {
        if (isProxyScrolling) {
          killScrub(self)
          isProxyScrolling = false
        }
      },
      onRefresh: killScrub // when the screen resizes, we just want the animation to immediately go to the appropriate spot rather than animating there, so basically kill the scrub.
    })
  }

  return {
    registerAllAnimationTriggers,
    registerAllBackgroundFadeTriggers,
    applySmoothScrollToPage
  }
}
